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
