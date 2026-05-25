# Bellagio Italy — bellagioitaly.com

Private Lake Como experiences marketing site. Next.js 14 + TypeScript + Tailwind CSS.

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To build and verify before deploying:

```bash
npm run build
npm run start
```

---

## Deploy to Vercel

### 1. Push to GitHub

Create a repository and push the project:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/bellagioitaly.git
git push -u origin main
```

### 2. Import on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in.
2. Click **Add New → Project**.
3. Select the GitHub repository you just pushed.
4. Vercel auto-detects Next.js — leave all settings at default.
5. Click **Deploy**.

No environment variables are required at this stage.

### 3. Set the Production Domain

After first deploy, go to **Project → Settings → Domains** in Vercel and add `bellagioitaly.com` and `www.bellagioitaly.com`.

Vercel will display the DNS records you need to set.

---

## Connect GoDaddy DNS to Vercel

Log in to [GoDaddy → My Products → DNS](https://dcc.godaddy.com/manage/dns).

### Apex domain (`bellagioitaly.com`)

Vercel recommends pointing the apex domain to their servers using **A records**:

| Type | Name | Value          | TTL  |
|------|------|----------------|------|
| A    | @    | 76.76.21.21    | 600  |

> GoDaddy does not support ALIAS/ANAME records for the apex. The single A record above is the correct approach.

### www subdomain

| Type  | Name | Value                   | TTL  |
|-------|------|-------------------------|------|
| CNAME | www  | cname.vercel-dns.com    | 600  |

### Redirect www → apex (optional)

In Vercel's domain settings, set `www.bellagioitaly.com` to redirect to `bellagioitaly.com` (Vercel handles this automatically when both are added).

### Propagation

DNS changes can take up to 48 hours, but typically resolve within 30 minutes. Vercel will show a green checkmark once the domain is live and the SSL certificate is issued.

---

## Replacing Placeholder Images

All images currently use `https://placehold.co` placeholders. Replace them in `app/page.tsx`:

| Placeholder | Replace with | Recommended size |
|-------------|-------------|------------------|
| Hero background | A cinematic Lake Como aerial or waterfront shot | 1920 × 1080 |
| Philosophy section | Bellagio village or an intimate dining scene | 800 × 1000 |

Place final images in `/public/images/` and update the `src` props in `app/page.tsx` to `/images/your-file.jpg`.

---

## Updating Contact Links

In `app/page.tsx`, update:

- **Email**: replace `hello@bellagioitaly.com` in the `href` and label
- **WhatsApp**: replace `https://wa.me/39XXXXXXXXX` with the real number — format is `https://wa.me/<country_code><number>` (no spaces, no `+`)

---

## Adding Google Analytics (when ready)

Install `@next/third-parties`:

```bash
npm install @next/third-parties
```

In `app/layout.tsx`:

```tsx
import { GoogleAnalytics } from '@next/third-parties/google'
// inside <body>:
<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```
