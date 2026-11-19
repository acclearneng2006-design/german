# Deutsch A1 Coach

تطبيق ويب (PWA) لتعلم الألماني مستوى A1 بالعربي: دروس، مراجعة متباعدة، بطاقات، اختبارات، ومدرب محادثة AI.

## التشغيل
افتح `index.html` من خادم ثابت (GitHub Pages مثلاً). الملفات: `index.html`, `sw.js`, `manifest.webmanifest`, `icon.svg`.

## إعداد Supabase (مهم للأمان)
```sql
create table if not exists user_progress (user_id uuid primary key references auth.users(id), payload jsonb, updated_at timestamptz);
alter table user_progress enable row level security;
create policy "own row" on user_progress for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
```

## خادم الـ AI (Cloudflare Worker)
- خزّن مفتاح Gemini كـ secret في الـ Worker فقط.
- تحقق من توكن Supabase (`Authorization: Bearer`) وحدّد عدد الطلبات لكل مستخدم، وقيّد CORS على نطاق موقعك.

## الملفات
`index.html` + `style.css` + `app.js` + `sw.js` + `manifest.webmanifest` + `icon.svg` (ارفعها كلها في نفس المجلد).

## خطوات في Supabase
Authentication → URL Configuration: أضف رابط الموقع في Site URL وRedirect URLs حتى يعمل رابط استعادة كلمة المرور.

## تأمين خادم الـ AI
`worker.example.js` مثال جاهز: يتحقق من مستخدم Supabase، يحدّ 20 طلب/دقيقة، يقيّد CORS ويحدّ طول الرسائل. بعد نشره غيّر `SEND_AUTH_TO_PROXY` إلى `true` في `app.js`.

## الاختبارات
`node tests/run.js` يفحص صياغة الملفات، وسلامة المنهج (معرّفات، إجابات، خيارات)، وتطابق أدوات المذكر/المؤنث/المحايد مع الأسماء، ودوال التلوين والإملاء. يعمل تلقائياً على GitHub من `.github/workflows/test.yml`.
المنهج الآن في `curriculum.js` (يُحمَّل قبل `app.js`).

## SRI لمكتبة Supabase
شغّل هذا الأمر مرة واحدة، وضع الناتج في `integrity` بوسم السكربت في `index.html` مع `crossorigin="anonymous"`:
`curl -s https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.js | openssl dgst -sha384 -binary | openssl base64 -A`
(الوسم يبقى بنفس الرابط الحالي، وقيمة integrity = `sha384-` + الناتج).
