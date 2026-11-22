// Secure Cloudflare Worker for the Deutsch A1 Coach.
// Secrets: GEMINI_API_KEY | Vars: SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, ALLOWED_ORIGIN
// Required binding: CHAT_LIMITER (20 requests / 60 seconds, keyed by authenticated user id).
const MODEL = "gemini-3.5-flash-lite";
const MAX_BODY_CHARS = 40000;
const cors = env => ({
  "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN,
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Vary": "Origin"
});
const json = (env, body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { "Content-Type": "application/json; charset=utf-8", ...cors(env) }
});
export default {
  async fetch(req, env) {
    const origin = req.headers.get("Origin");
    if (!env.ALLOWED_ORIGIN || origin !== env.ALLOWED_ORIGIN) return new Response("Forbidden", { status: 403 });
    if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: cors(env) });
    if (req.method !== "POST" || new URL(req.url).pathname !== "/api/chat") return json(env, { error: "Not found" }, 404);
    if (!env.GEMINI_API_KEY || !env.SUPABASE_URL || !env.SUPABASE_PUBLISHABLE_KEY || !env.CHAT_LIMITER) return json(env, { error: "AI service is not configured" }, 503);
    const length = Number(req.headers.get("Content-Length") || 0);
    if (length > MAX_BODY_CHARS) return json(env, { error: "Message is too large" }, 413);
    const token = (req.headers.get("Authorization") || "").replace(/^Bearer\s+/i, "");
    if (!token) return json(env, { error: "سجّل الدخول أولاً" }, 401);
    let authResponse;
    try { authResponse = await fetch(env.SUPABASE_URL + "/auth/v1/user", { headers: { apikey: env.SUPABASE_PUBLISHABLE_KEY, Authorization: "Bearer " + token } }); }
    catch { return json(env, { error: "تعذر التحقق من الحساب" }, 503); }
    if (!authResponse.ok) return json(env, { error: "سجّل الدخول مرة أخرى" }, 401);
    const user = await authResponse.json();
    if (!user?.id) return json(env, { error: "جلسة الحساب غير صالحة" }, 401);
    let limit;
    try { limit = await env.CHAT_LIMITER.limit({ key: user.id }); }
    catch { return json(env, { error: "محدد الطلبات غير متاح" }, 503); }
    if (!limit?.success) return json(env, { error: "طلبات كثيرة؛ حاول بعد دقيقة" }, 429);
    let raw, body;
    try { raw = await req.text(); } catch { return json(env, { error: "تعذر قراءة الرسالة" }, 400); }
    if (raw.length > MAX_BODY_CHARS) return json(env, { error: "Message is too large" }, 413);
    try { body = JSON.parse(raw); } catch { return json(env, { error: "طلب غير صالح" }, 400); }
    const messages = Array.isArray(body.messages) ? body.messages.slice(-20) : [];
    const contents = messages.filter(m => m && typeof m.content === "string" && m.content.trim()).map(m => ({ role: m.role === "user" ? "user" : "model", parts: [{ text: m.content.slice(0, 1500) }] }));
    if (!contents.length) return json(env, { error: "لا توجد رسالة صالحة" }, 400);
    const system = "أنت مدرب ألماني لمتعلمين عرب بمستوى A1. ركز على تعلم الألمانية." + String(body.systemInstruction || "").slice(0, 2000);
    let providerResponse;
    try { providerResponse = await fetch("https://generativelanguage.googleapis.com/v1beta/models/" + MODEL + ":generateContent", { method: "POST", headers: { "Content-Type": "application/json", "x-goog-api-key": env.GEMINI_API_KEY }, body: JSON.stringify({ systemInstruction: { parts: [{ text: system }] }, contents }), signal: AbortSignal.timeout(25000) }); }
    catch { return json(env, { error: "تعذر الاتصال بخدمة الذكاء الاصطناعي" }, 502); }
    let result;
    try { result = await providerResponse.json(); } catch { return json(env, { error: "رد غير صالح من مزود الذكاء الاصطناعي" }, 502); }
    if (!providerResponse.ok) return json(env, { error: "تعذر الاتصال بخدمة الذكاء الاصطناعي" }, 502);
    return json(env, { text: result.candidates?.[0]?.content?.parts?.[0]?.text || "" });
  }
};
