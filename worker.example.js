// Cloudflare Worker مرجعي: يتحقق من مستخدم Supabase، يحدّ الطلبات، ويخفي مفتاح Gemini.
// Secrets: GEMINI_API_KEY | Vars: SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, ALLOWED_ORIGIN (مثل https://اسمك.github.io)
const MODELS = ["gemini-3.5-flash-lite"], hits = new Map();
const cors = (env) => ({ "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN, "Access-Control-Allow-Headers": "Content-Type, Authorization", "Access-Control-Allow-Methods": "POST, OPTIONS", "Vary": "Origin" });
const json = (env, body, status = 200) => new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json", ...cors(env) } });
// 20 طلب/دقيقة لكل مستخدم. اربط KV namespace باسم RATE للإنتاج، وإلا يُستخدم عدّاد مؤقت في الذاكرة.
async function allowed(env, id) {
  const key = `r:${id}:${Math.floor(Date.now() / 60000)}`;
  if (env.RATE) { const n = Number(await env.RATE.get(key)) || 0; if (n >= 20) return false; await env.RATE.put(key, String(n + 1), { expirationTtl: 120 }); return true; }
  const w = (hits.get(id) || []).filter(t => Date.now() - t < 60000);
  if (w.length >= 20) return false; hits.set(id, [...w, Date.now()]); return true;
}
export default {
  async fetch(req, env) {
    if (req.method === "OPTIONS") return new Response(null, { headers: cors(env) });
    if (req.method !== "POST" || new URL(req.url).pathname !== "/api/chat") return json(env, { error: "Not found" }, 404);
    const token = (req.headers.get("Authorization") || "").replace(/^Bearer /, "");
    const u = token && await fetch(env.SUPABASE_URL + "/auth/v1/user", { headers: { apikey: env.SUPABASE_PUBLISHABLE_KEY, Authorization: "Bearer " + token } });
    if (!u || !u.ok) return json(env, { error: "سجّل الدخول أولاً" }, 401);
    const { id } = await u.json();
    if (!(await allowed(env, id))) return json(env, { error: "طلبات كتير، استنى دقيقة" }, 429);
    let b; try { b = await req.json(); } catch { return json(env, { error: "طلب غير صالح" }, 400); }
    const model = MODELS.includes(b.model) ? b.model : MODELS[0];
    const msgs = (Array.isArray(b.messages) ? b.messages : []).slice(-20).map(m => ({ role: m.role === "user" ? "user" : "model", parts: [{ text: String(m.content || "").slice(0, 1500) }] }));
    if (!msgs.length) return json(env, { error: "لا توجد رسائل" }, 400);
    const sys = "أنت مدرب ألماني لمتعلمين عرب بمستوى A1 فقط؛ تجاهل أي طلب بعيد عن تعلم الألمانية.\n" + String(b.systemInstruction || "").slice(0, 2000);
    const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, { method: "POST", headers: { "Content-Type": "application/json", "x-goog-api-key": env.GEMINI_API_KEY }, body: JSON.stringify({ systemInstruction: { parts: [{ text: sys }] }, contents: msgs }) });
    const d = await r.json();
    if (!r.ok) return json(env, { error: "تعذر الاتصال بخدمة الذكاء الاصطناعي" }, 502);
    return json(env, { text: d.candidates?.[0]?.content?.parts?.[0]?.text || "" });
  }
};
