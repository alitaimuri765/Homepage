# HealthIQ Website — Claude Instructions

## Project Goal
Build the HealthIQ public marketing website (hlthiq.com) as a pixel-perfect implementation of the Figma design.
**Stack:** Next.js 14 App Router + Payload CMS v3, hosted on Azure App Service.

## Dev Server
```bash
cd /home/mishal49/Support/healthIQWebsite
npm run dev
# Runs at http://localhost:3000
```

---

## Figma Access
- **File Key:** `HzfFNpABQWQkD4wx7iv2l0`
- **MCP config:** `/home/mishal49/Support/.mcp.json` — PAT token already set as `FIGMA_API_KEY`
- **Plugin MCP** (OAuth): used for `get_screenshot`, `get_design_context` etc. Re-auth with `/login` if expired.
- **Plan:** Pro plan (confirmed via `whoami`) — `get_screenshot` limit is more generous than previously thought. Still prefer `get_metadata` first.
- **Rate limit note:** `get_metadata` does NOT count against any limit.

---

## Pages & Figma Frames

| Page | URL | Figma Node | Code File |
|---|---|---|---|
| Home | / | `3:22` | `app/(website)/page.tsx` |
| Solution | /solution | `3:686` | `app/(website)/solution/page.tsx` |
| About | /about | `3:979` | `app/(website)/about/page.tsx` |
| Privacy Policy | /privacy-policy | `46:1493` + `46:1633` (Page 2) | `app/(website)/privacy-policy/page.tsx` |

---

## Home Page Section Map (top → bottom)

| Section | Figma Node | Component File |
|---|---|---|
| Hero + Navbar | `3:67` | `components/sections/Hero.tsx` + `components/Navbar.tsx` |
| Video | `3:99` | `components/sections/VideoSection.tsx` |
| ValueProp (left text, right phone+laptop) | `3:111` | `components/sections/ValuePropSection.tsx` |
| Feature Labels Row | `3:131` | `components/sections/FeatureLabelsRow.tsx` |
| Partner Logos | `3:139` | `components/sections/PartnerLogos.tsx` |
| SuperchargeRight (left doctor, right text) | `3:181` | `components/sections/SuperchargeRight.tsx` |
| Feature Cards (2×2 grid) | `3:199` | `components/sections/FeatureCards.tsx` |
| Stats | `3:264` | `components/sections/StatsSection.tsx` |
| FAQ + CTA | `3:289` | `components/sections/FAQSection.tsx` |
| Get To Know Us (CTA) | `3:248` | `components/sections/CTASection.tsx` |
| Testimonial | `3:404` | `components/sections/Testimonial.tsx` |
| Footer | `3:23` | `components/Footer.tsx` |

---

## Design Tokens
- **Primary purple:** `#8A07F1`
- **Dark gradient:** `linear-gradient(98.63deg, #000000 -11.39%, #2B2B2B 49.52%, #8A07F1 155.77%, #CBCBCB 217.3%)`
- **Font:** Poppins throughout
- **Desktop width:** 1440px, content max-width: 1320px with px-[60px]
- **Mobile:** 360px

---

## Fixes Already Applied (do NOT redo these)

### Home Page
1. **Footer phone/laptop overlap** — changed from `-mr-8` (32px) to `-mr-[80px]` (80px) matching Figma's 81px overlap between phone (x=787, w=161) and laptop (x=867)
2. **ValuePropSection vertical bar** — added 4px dark left bar (`#2B2B2B`) beside body text (Figma node `3:117`, h=144)
3. **SuperchargeRight vertical bar** — same fix (Figma node `3:187`, h=75)
4. **SuperchargeRight body text** — trimmed to match Figma's 6-line paragraph
5. **Testimonial quote mark** — was `""`, now single `"`
6. **Navbar active indicator** — added 37×3px white underline bar below the current page link using `usePathname()`
7. **ValuePropSection phone size** — increased from 150×295 to 220×443 to match Figma's larger phone (231px wide in Figma)
8. **Heading style (all Supercharge sections)** — changed from `font-medium #505050` to `font-bold #1A1A1A` — Figma shows near-black bold headings

### Solution + About Pages (fixed by sub-agent)
9. **StepsSection heading** — changed from "Your idea into reality." to "Get to Know the best Features" (exact Figma text)
10. **StepsSection step titles** — all 4 steps updated to exact Figma copy
11. **Solution 3-card descriptions** — updated to exact Figma copy including "experties" typo
12. **About page** — major restructure: stats layout fixed to 2-column grid, team section fixed, missing sections added (second "How we started", dark photo section, 2×2 feature cards)

### Solution Page (full pixel-perfect audit)
13. **All dark gradient sections** — canonical gradient `98.63deg` applied to Video, Supercharge dark, and Stats sections
14. **Supercharge dark + white headings** — `font-bold #1A1A1A` throughout
15. **`capitalize` bug** — removed from 3 body text paragraphs (Supercharge dark, Supercharge white, Stats)
16. **SolutionFeatureCards descriptions** — `text-center` added to all 3 cards
17. **Surgery card icon background** — normalized to `#e1f9eb` (consistent green tint)
18. **Heart Care card gradient** — corrected to canonical `98.63deg`
19. **TestimonialDark gradient** — corrected to canonical `98.63deg`

### About Page (full pixel-perfect audit)
20. **Stats labels** — all 6 now have distinct, meaningful labels
21. **Heading + body text colors** — `#1A1A1A` headings, `#505050` body text throughout
22. **Body text leading** — `leading-[28px]` explicit pixel value site-wide
23. **Team section** — `font-bold` heading, `capitalize` removed from body
24. **Truncated paragraph** — restored complete sentence in second "How we started" section
25. **Inline feature cards** — replaced with shared `<FeatureCards />` component

### Home Page VideoSection (Figma-verified)
26. **Image overlay removed** — `opacity-60` and dark gradient overlay removed; photo is bright and clear
27. **Inset border** — corrected from `inset-[35px]` to `inset-[45px]` matching Figma dimensions
28. **Video frame height** — corrected from 560px to 720px (1320×791 aspect ratio)
29. **Heading margin** — `mb-[29px]` matching Figma 29px gap
30. **Text-to-image margin** — `mb-8` (32px) matching Figma gap

### Home Page SuperchargeRight (Figma-verified)
31. **Layout confirmed correct** — gradient panel, doctor image (374×450px), vertical bar (4px/#2B2B2B/75px) all match Figma
32. **Body text punctuation** — minor trailing punctuation fix

### Privacy Policy Page (built from scratch)
33. **Full page implemented** — 11 sections with `22px font-bold #1A1A1A` headings, `16px leading-[28px] #505050` body
34. **Section dividers** — `1px #EAECF0` border-bottom between sections
35. **Contact link** — `mailto:info@hlthiq.com` in `#8A07F1` with hover underline
36. **Medical disclaimer** — `#F9FAFB` card with `#EAECF0` border at bottom
37. **Shared components** — Hero and Footer used consistently

---

## Still To Check / Potential Issues

- **FeatureLabelsRow (3:131)** — 4th label is currently a duplicate of 3rd ("Reveal new insights and efficiencies" ×2). Need Figma to confirm correct 4th label text.
- **FeatureCards home page (3:199)** — All 4 cards have identical placeholder title "Real-time Connectivity" and same icon. Need Figma for correct titles, descriptions, and which icon maps to which card. Available icons: `care-icon-heart.png`, `care-icon-primary.png`, `care-icon-surgery.png`.
- **About page team heading (3:1166)** — Currently "Supercharge medtech and OR performance." — likely placeholder copy. Need Figma to confirm exact text.
- **Privacy Policy full content (46:1493 / 46:1633, Page 2)** — Section count, exact body copy, hero subtitle, heading font-size, and whether medical disclaimer appears in page body all unverified.
- **ValuePropSection right panel** — phone+laptop positioning needs visual verification against Figma `3:111`.
- **Mobile responsiveness** — not audited yet.

## Figma MCP Rate Limit
- MCP tool calls (get_metadata, get_screenshot, get_design_context) have a separate quota from the Figma plan subscription
- Limit exhausted as of 2026-08-07 — resets in ~4.6 days (~2026-08-12)
- Until reset: use Figma Dev Mode directly in the browser to look up values, then tell Claude what to change

---

## Pixel-Perfect Rules
1. Always get a Figma screenshot BEFORE making changes to a section
2. Check: wording, font size, font weight, colors, spacing, layout direction, images, button styles, icon presence
3. Fix immediately — don't defer
4. Use `get_metadata` (free, no rate limit) to get node IDs and sizes before using `get_screenshot`
5. The `get_screenshot` tool is rate-limited — use `get_metadata` first to identify the right node, then take ONE targeted screenshot

---

## Permissions
All edits in this project are pre-approved. See `.claude/settings.local.json` for the full allowlist.
