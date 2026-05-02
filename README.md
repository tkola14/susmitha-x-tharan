# 💍 Susmitha & Tharan — Wedding Website

Live URL: **https://susmitha-x-tharan.vercel.app**

---

## 🚀 Deploy in 5 Minutes

### Step 1 — Install Node.js
Download from: https://nodejs.org (choose LTS version)

### Step 2 — Test locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

### Step 3 — Push to GitHub
```bash
git init
git add .
git commit -m "Wedding site"
# Create a repo at github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/susmitha-x-tharan
git push -u origin main
```

### Step 4 — Deploy on Vercel (free)
1. Go to **vercel.com** → Sign up/login
2. Click **"Add New Project"** → Import your GitHub repo
3. Click **Deploy** — done in 60 seconds!

---

## 💌 Connect RSVP (Formspree — Free)

1. Go to **formspree.io** → Sign up
2. Create a new form → copy the **Form ID** (looks like `xpzgdnkw`)
3. Open `app/rsvp/page.tsx`
4. Replace `YOUR_FORM_ID` with your actual ID:
   ```typescript
   const FORMSPREE_ID = 'xpzgdnkw'  // ← your ID here
   ```
5. All RSVPs will arrive at **tharanyogesh@gmail.com**

---

## 🎟️ GUEST INVITE SYSTEM

### How It Works
Each guest gets a **personalized link** that shows only THEIR events:

| Link | Shows |
|------|-------|
| `/invite/ALL` | Haldi + Sangeeth + Wedding |
| `/invite/SW`  | Sangeeth + Wedding |
| `/invite/W`   | Wedding only |

### Sharing Links
Simply copy and send:
- All events: `https://susmitha-x-tharan.vercel.app/invite/ALL`
- Sangeeth + Wedding: `https://susmitha-x-tharan.vercel.app/invite/SW`
- Wedding only: `https://susmitha-x-tharan.vercel.app/invite/W`

### Adding Custom Guest Tokens
Open `lib/guestConfig.ts` and add entries:

```typescript
export const GUEST_TOKENS: Record<string, GuestConfig> = {
  // Built-in tiers
  'ALL': { events: ['haldi', 'sangeeth', 'wedding'] },
  'SW':  { events: ['sangeeth', 'wedding'] },
  'W':   { events: ['wedding'] },

  // ← Add your guests here:
  'KOLANI01':     { name: 'Kolani Family',     events: ['haldi', 'sangeeth', 'wedding'] },
  'NALLAMOTHU01': { name: 'Nallamothu Family', events: ['haldi', 'sangeeth', 'wedding'] },
  'SHARMA01':     { name: 'Sharma Family',     events: ['sangeeth', 'wedding'] },
  'FRIEND01':     { name: 'Priya & Rahul',     events: ['wedding'] },
}
```

Then share: `https://susmitha-x-tharan.vercel.app/invite/SHARMA01`

The page will say **"Dear Sharma Family,"** and show only their events.

---

## 📸 Adding Gallery Photos

1. Copy your photos to `public/images/`
2. Open `app/gallery/page.tsx`
3. Add entries to the `photos` array:
```typescript
{ src: '/images/your-photo.jpg', alt: 'Caption here', span: '' },
```

---

## 📋 Venue Details
| Event | Venue | Address |
|-------|-------|---------|
| Haldi (Jul 1, 7AM) | Susmitha's Residence | 1804 Persimmon Pl, Celina, TX 75009 |
| Sangeeth (Jul 1, 7PM) | Elegance Ballroom | 8740 Ohio Dr A1, Plano, TX 75024 |
| Wedding (Jul 3, 9:13AM) | Elegance Estates Ranch | 17957 E Blackjack Rd E, Pilot Point, TX 76258 |

---

## 🗂️ File Structure
```
app/
  page.tsx          ← Home / Hero
  events/page.tsx   ← All events
  venue/page.tsx    ← Venues + Maps
  rsvp/page.tsx     ← RSVP form
  gallery/page.tsx  ← Photo gallery
  invite/[token]/   ← Guest-specific pages
lib/
  events.ts         ← Event data
  guestConfig.ts    ← Guest invite tokens ← EDIT THIS
public/images/      ← All photos ← ADD YOURS HERE
```

---

Built with ❤️ for Susmitha & Tharan — July 3, 2026
