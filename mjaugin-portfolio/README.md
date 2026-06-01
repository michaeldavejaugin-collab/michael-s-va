# Michael Dave Jaugin — Portfolio Website

Premium personal portfolio built with Next.js 14, Tailwind CSS, Framer Motion, and TypeScript.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17+
- npm, yarn, or pnpm

### Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser
# http://localhost:3000
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + global metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles + Tailwind
│   ├── about/
│   │   ├── page.tsx        # About page metadata
│   │   └── AboutPageClient.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   └── ServicesPageClient.tsx
│   ├── portfolio/
│   │   ├── page.tsx
│   │   └── PortfolioPageClient.tsx
│   ├── testimonials/
│   │   ├── page.tsx
│   │   └── TestimonialsPageClient.tsx
│   ├── pricing/
│   │   ├── page.tsx
│   │   └── PricingPageClient.tsx
│   └── contact/
│       ├── page.tsx
│       └── ContactPageClient.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky nav with mobile menu
│   │   └── Footer.tsx      # Full footer with nav + social
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ServicesOverview.tsx
│   │   ├── WhyWorkWithMe.tsx
│   │   ├── AboutPreview.tsx
│   │   ├── PortfolioPreview.tsx
│   │   ├── TestimonialsPreview.tsx
│   │   └── CtaSection.tsx
│   └── ui/
│       └── SectionHeader.tsx
├── lib/
│   ├── data.ts             # All site content (services, testimonials, pricing, etc.)
│   └── utils.ts            # cn() utility
└── types/
    └── index.ts            # TypeScript types
```

---

## 🎨 Customisation

### Update Personal Information
Edit `src/lib/data.ts` to update:
- Services list
- Testimonials
- Pricing tiers
- Portfolio projects

### Add Your Photo
Replace the placeholder in `AboutPreview.tsx` and `AboutPageClient.tsx`:
```tsx
// Replace the placeholder div with:
<Image src="/your-photo.jpg" alt="Michael Dave Jaugin" fill className="object-cover" />
```
Add your photo as `public/profile.jpg`.

### Update Contact Form
Connect your form submission to a backend. Options:
- **Formspree**: Add action URL to the form
- **Resend**: Create `src/app/api/contact/route.ts`
- **EmailJS**: Install `@emailjs/browser` and call on submit

### Update Booking Link
In `ContactPageClient.tsx`, replace the Calendly placeholder:
```tsx
href="https://calendly.com/YOUR_USERNAME/discovery-call"
```
Or use Google Calendar appointment scheduling URL.

### Update Email
Replace all instances of `hello@michaeldavejaugin.com` with your actual email.

### Update Domain
In `src/app/layout.tsx`:
```tsx
metadataBase: new URL('https://YOURDOMAIN.com'),
```

---

## 🌐 GitHub Deployment

```bash
# 1. Create a new GitHub repo
# 2. Push your code:
git init
git add .
git commit -m "Initial commit — Michael Dave Jaugin Portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

---

## ▲ Vercel Deployment (Recommended)

### Option A — Vercel Dashboard
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"New Project"**
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Done ✓ — your site is live on a `.vercel.app` domain

### Option B — Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

### Custom Domain
1. In Vercel dashboard → Project → Settings → Domains
2. Add `michaeldavejaugin.com`
3. Update DNS records at your registrar:
   - `A record` → `76.76.21.21`
   - `CNAME www` → `cname.vercel-dns.com`

---

## ⚡ Performance Checklist

- [ ] Add real profile photo (replace placeholder)
- [ ] Add Open Graph image at `public/og-image.jpg` (1200×630px)
- [ ] Update all placeholder email/LinkedIn URLs
- [ ] Connect contact form to backend
- [ ] Add real Calendly / Google Calendar booking link
- [ ] Add Google Analytics (optional): `npm install @next/third-parties`
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit

---

## 🔧 Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | React framework with App Router |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations |
| Lucide React | Icon library |

---

## 📄 License

Built for Michael Dave Jaugin. All rights reserved.
