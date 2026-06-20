# Sandeep Nayak — Creative Agency Website (Next.js)

A full dark-theme creative agency landing page built with **Next.js 14 App Router + TypeScript + Tailwind CSS**.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout — fonts, metadata
│   ├── page.tsx         # Home page — assembles all sections, overlay state
│   └── globals.css      # Tailwind base + keyframe animations
├── components/
│   ├── Navbar.tsx        # Sticky frosted-glass nav
│   ├── Hero.tsx          # Animated hero — entrance, parallax, floating shapes
│   ├── Expertise.tsx     # 3-card expertise panel (dark island)
│   ├── Statement.tsx     # Lime headline + rotating badge + animated counter
│   ├── RecentWork.tsx    # 4 project cards → opens overlay
│   ├── ProjectOverlay.tsx # Full-screen project detail modal
│   ├── LogoWall.tsx      # Client logo row
│   ├── Contact.tsx       # Two-column contact + form
│   ├── CTASection.tsx    # CTA block with spinning badge
│   └── Footer.tsx        # Dark footer
├── hooks/
│   ├── useInView.ts      # IntersectionObserver — triggers scroll reveals
│   └── useCounter.ts     # Animated number counter
├── lib/
│   ├── projects.ts       # Project data (title, copy, services, results, image)
│   └── types.ts          # Shared TypeScript types
└── public/
    └── images/           # Work poster images (replace with real project photos)
```

---

## Design Tokens

| Token        | Value      |
|-------------|------------|
| `--dark`     | `#0A0A0B`  |
| `--panel`    | `#0E0E11`  |
| `--card`     | `#191A1E`  |
| `--elevated` | `#141416`  |
| `--lime`     | `#C5F23C`  |
| `--purple`   | `#6C2BD9`  |
| `--purple-light` | `#B99DFF` |
| `--muted`    | `#9A9A9A`  |

### Typography
- **Headings**: Archivo 700–900, tight letter-spacing (-0.02 to -0.025em)
- **Body**: Hanken Grotesk 400–700
- Both loaded via `next/font/google` (no layout shift)

---

## Animations (globals.css)

| Class            | Effect                          |
|-----------------|----------------------------------|
| `anim-spin`    | Continuous rotation (badges)     |
| `anim-float`   | Gentle up/down float (shapes)    |
| `anim-rise`    | Fade + rise from below (reveals) |
| `anim-ov-in`   | Overlay backdrop fade            |
| `anim-panel-in`| Modal slide-up + scale           |

Set `--dur` CSS variable on the element to control duration.  
All reveals start as `reveal-hidden` (opacity: 0) and get the animation class applied via `useInView`.

---

## Key Interactions

| Feature | Implementation |
|---------|----------------|
| Scroll reveals | `useInView` hook → adds animation class on first intersection |
| Animated counter | `useCounter` → requestAnimationFrame easing (cubic) |
| Parallax shapes | scroll event → translate3d based on viewport center offset |
| Project overlay | React state in `page.tsx` → `ProjectOverlay` mounts/unmounts |
| Form submission | `useState(sent)` → shows confirmation screen |
| Esc to close | `keydown` listener in `ProjectOverlay` |

---

## Customising Projects

Edit `lib/projects.ts` — each entry has:
- `title`, `category`, `client`, `year`, `role`
- `accent` — hex color for the overlay header banner
- `overview`, `challenge` — body copy
- `services` — string array → chip pills
- `results` — `{value, label}[]` → stat blocks
- `image` — path relative to `/public`

Replace `public/images/work-*.png` with your real project photography.

---

## Notes
- All components are `'use client'` where needed (animations, state, effects).  
- Static components (LogoWall, Footer) are React Server Components by default.  
- `next/image` is used for project card images with `unoptimized: true` for portability.
