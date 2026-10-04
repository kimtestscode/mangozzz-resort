# Mangozzz Magical World — Website

A modern, fast website for [Mangozzz Magical World](https://mangozzz.com) — a riverside cottage resort in Khalapur, Maharashtra. Built with **Next.js 14** and hosted on **Vercel**.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Vanilla CSS Modules + CSS Variables
- **Booking/Contact Forms**: EmailJS (sends emails directly to your Gmail)
- **Hosting**: Vercel
- **Domain**: mangozzz.com

---

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Set up EmailJS

1. Go to [emailjs.com](https://www.emailjs.com/) and create a free account
2. Add your Gmail as a service
3. Create two email templates:
   - **Booking template** (use variables: `from_name`, `from_email`, `phone`, `checkin`, `checkout`, `adults`, `children`, `rooms`, `room_type`, `requests`)
   - **Contact template** (use variables: `from_name`, `from_email`, `phone`, `message`)
4. Copy your **Service ID**, **Template IDs**, and **Public Key**

### 3. Create `.env.local`
```bash
cp .env.local.example .env.local
```

Fill in your EmailJS credentials:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_BOOKING_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

### 4. Run the dev server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

---

## Deploying to Vercel

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/mangozzz-website.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Select your `mangozzz-website` repository
4. In **Environment Variables**, add all your `.env.local` keys
5. Click **Deploy** — done! ✅

### Step 3: Connect mangozzz.com Domain
1. In Vercel dashboard → your project → **Settings → Domains**
2. Add `mangozzz.com` and `www.mangozzz.com`
3. Vercel will show you DNS records to update

**Go to your domain registrar** (the place where you bought mangozzz.com — GoDaddy, Hostinger, etc.) and update:

| Type  | Name | Value                   |
|-------|------|-------------------------|
| A     | @    | `76.76.21.21`           |
| CNAME | www  | `cname.vercel-dns.com`  |

SSL certificate is **automatic and free** on Vercel. DNS propagation takes 1–24 hours.

---

## Adding Your Own Images

Replace the placeholder image URLs in the source files with your own:

1. Put your images in the `/public/images/` folder
2. Reference them as `/images/your-photo.jpg` (no domain needed)

Example: Change  
`src="https://mangozzz.com/wp-content/.../DSC09891-scaled.jpg"`  
to  
`src="/images/hero-photo.jpg"`

---

## File Structure

```
app/
├── layout.js              # Root layout + SEO metadata
├── globals.css            # Global design system
├── policy.module.css      # Shared policy page styles
├── page.js                # Home page
├── _sections/             # Home page sections
│   ├── HeroSection.js
│   ├── BookingWidget.js
│   ├── StatsSection.js
│   ├── RoomsSection.js
│   ├── AmenitiesTeaser.js
│   ├── ActivitiesTeaser.js
│   ├── GalleryTeaser.js
│   └── CtaBanner.js
├── about-us/page.js
├── amenities/page.js
├── adventures/page.js
├── games/page.js
├── gallery/page.js
├── book/page.js           # Booking form (EmailJS)
├── contact/page.js        # Contact form + Google Maps
├── refund-cancellation-policy/page.js
├── terms-conditions/page.js
└── privacy-policy/page.js

components/
├── Navbar/
│   ├── Navbar.js
│   └── Navbar.module.css
└── Footer/
    ├── Footer.js
    └── Footer.module.css
```

---

## Bugs Fixed vs. WordPress Site

| Bug | Status |
|-----|--------|
| `/reservation/` → 404 | ✅ Fixed — now `/book` |
| `/cancellation-refund-policy/` → 404 | ✅ Fixed — now `/refund-cancellation-policy` |
| Google Maps pointing to California | ✅ Fixed — now points to Khalapur, Maharashtra |
| Wrong phone number in `tel:` link | ✅ Fixed — +91 79771 27312 |
| Wrong email in `mailto:` link | ✅ Fixed — mangozzzmagicalworld@gmail.com |
| Typo "Contac us" | ✅ Fixed |
| "Born Fire" → "Bonfire" | ✅ Fixed |
| YouTube link corrupted | ✅ Fixed |

---

Built with ❤️ by [Grabodo](https://grabodo.com)
