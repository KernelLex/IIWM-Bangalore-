# Handoff: IIWM Bangalore Website — "Atelier" Direction (Desktop + Mobile)

## Overview
Marketing website for IIWM Bangalore (International Institute of Wedding Management, Bangalore) — India's first residential luxury wedding business school. Brand line: **"Live. Learn. Execute."** This package covers the **hero + four content sections** of the homepage (Why IIWM, Founder's Story, Comparison), built as two separate references: a desktop layout and a distinct full-screen mobile layout. Remaining homepage sections (gallery, career grid, testimonials, placements, partner logos, FAQ, final CTA) were not yet designed — see "Not Yet Designed" below.

## About the Design Files
The files in this bundle (`IIWM Desktop Reference.dc.html` and `IIWM Mobile Reference.dc.html`) are **design references built in HTML** — prototypes showing intended look, layout, and behavior. They are not production code to copy directly. The task is to **recreate these HTML designs in your target codebase's environment** (React, Vue, Next.js, plain HTML/CSS, etc.) using its established patterns, component structure, and build tooling — or, if no environment exists yet, choose the most appropriate framework and implement fresh.

Both files are self-contained and can be opened directly in a browser to inspect exact layout, spacing, and colors (view source / inspector for precise values).

## Fidelity
**High-fidelity.** Colors, typography, and spacing shown are final-intent for this direction. Photography is placeholder only (flat color blocks labeled "EDITORIAL PHOTOGRAPHY PLACEHOLDER" / "CAMPUS PORTRAIT") — real photography/video must be sourced and dropped in before launch. Copy is realistic placeholder copy, not final marketing copy — confirm final copy with the client before shipping.

## Design Direction: "Atelier"
A quiet, editorial, un-templated system: no gradient buttons, no icon badges/circles, no drop-shadow "cards." Structure comes from hairline rules, generous whitespace, and a mixed-weight serif typographic system (light/regular/italic in the same headline) — closer to a fashion editorial or five-star hotel site than an ed-tech/SaaS template. The one "signature" flourish is a slow horizontal marquee band (gold background, scrolling italic serif type) used as a section divider.

## Screens / Views

### 1. Desktop (`IIWM Desktop Reference.dc.html`)
Full-width single page, natural document flow (no fixed container width — content sections use consistent horizontal padding of `64px`).

**Header (sticky)**
- Height: ~92px (30px vertical padding + content)
- Background: `rgba(247,242,233,.9)` (translucent ivory) — should become opaque or blurred on scroll if implementing scroll-based nav states
- Left: wordmark stack — "IIWM" (Cormorant Garamond, 19px, letter-spacing .14em) above "BANGALORE" (Jost, 9px, letter-spacing .28em, color `#8C6B45`)
- Right: nav links "Programs / The Campus / Placements" (Jost 12.5px, letter-spacing .05em, color `#201810`) each with a hover underline reveal (`border-bottom: 1px solid #B8863F` on hover, transition from transparent)
- CTA: "Apply Now" — NOT a filled button. Outlined pill: `border: 1px solid #B8863F`, text color `#8C6B45`, 11px padding-y / 26px padding-x, letter-spacing .09em. On hover: fills solid `#B8863F` background with `#F7F2E9` text.
- Three faint vertical hairline guides run the full page height at 25%/50%/75% width (`rgba(32,24,16,.05)`, 1px) — a subtle editorial-grid texture. Purely decorative, `pointer-events:none`.

**Hero** — height 600px
- Background: flat `#DAD0BC` (photography placeholder) with a soft radial highlight overlay (`radial-gradient(ellipse at 60% 40%, rgba(255,255,255,.5), transparent 60%)`, opacity .5) — replace the flat color with real photography/video; keep or drop the highlight overlay depending on the actual image.
- Placeholder label bottom-right: small tag "EDITORIAL PHOTOGRAPHY PLACEHOLDER"
- Headline, bottom-left, 64px from left/70px from bottom: eyebrow "INDIA'S FIRST RESIDENTIAL LUXURY WEDDING BUSINESS SCHOOL" (Jost, 11.5px, letter-spacing .3em, color `#8C6B45`), then the headline in Cormorant Garamond at **128px**, line-height .92: "Live." (weight 300) + "Learn." (weight 600) on the same line, then italic "Execute." (weight 400, color `#8C2333` maroon) on its own line.
- Secondary CTA top-right: text link "Apply Now →" with a solid underline that changes to gold on hover.

**Marquee band** — height 58px, full-bleed, flat gold `#B8863F` background. Infinite horizontal scroll of italic serif text "Live — Learn — Execute —" repeated, in `#F7F2E9`, 22px. Implement as a CSS `@keyframes translateX(0) → translateX(-50%)` infinite linear loop (20–22s) over two duplicated spans placed side by side (so the loop is seamless).

**Why IIWM** — padding 120px top / 64px sides / 100px bottom
- Section label row: italic "01 — why iiwm" (Cormorant Garamond, 15px, color `#8C6B45`) left; a right-aligned one-line description, Jost 13px weight 300, max-width 320px, right-aligned text.
- 4-column grid, `gap: 56px`. Each column: 1px top hairline in `#201810`, then a large thin numeral (Cormorant Garamond weight 300, 52px, color `#B8863F`), then a title (Cormorant Garamond 21px weight 500), then a 13px Jost description (weight 300, color `#5B4A3A`, line-height 1.65).
- Copy: 01 Residential Campus / 02 Real Execution / 03 Industry Mentorship / 04 Placement Pathway (see file for full descriptions).

**Founder's Story** — padding 110px/64px, background `#F1EAD9` (slightly deeper ivory to segment the section)
- Italic eyebrow "02 — the founder's story", then a 42px weight-300 serif statement headline, max-width 600px.
- Timeline: a single 1px horizontal hairline (`#201810`) spans the row; a 4-column grid below it, each column: a 6px gold/maroon dot marker, a large year (Cormorant Garamond 30px weight 300), and a short description (Jost 12.5px weight 300, max-width 200px). Years: 2014, 2018, 2021, 2024 — dot color alternates maroon (`#8C2333`) / gold (`#B8863F`) / gold / maroon.

**Comparison** — padding 120px/64px/140px
- Italic eyebrow "03 — a candid comparison"
- 3-column grid: `1fr / 1px divider / 1fr`. Divider is a plain vertical hairline (`rgba(32,24,16,.1)`).
- Left column "TRADITIONAL INSTITUTES" (Jost 11.5px label, color `#8B7A65`) with 4 muted lines (Jost 16px weight 300, color `#8B7A65`, line-height 3).
- Right column "IIWM BANGALORE" (Jost 11.5px label, color `#8C2333`) with 4 lines in italic Cormorant Garamond 19px, color `#201810`, line-height 3.
- Rows: Classroom theory only → Live wedding execution; Generic certification → Residential immersive mastery; Self-guided placement → Placement pathway with industry houses; Lecture-based learning → Mentorship from working professionals.

### 2. Mobile (`IIWM Mobile Reference.dc.html`)
**This is intentionally NOT a shrunk desktop layout.** It's a full-screen, one-idea-per-screen scroll-snap experience — each section fills the viewport height and the page scrolls like flipping through an editorial spread.

- Container: `max-width: 430px`, `height: 100vh`, `scroll-snap-type: y mandatory`, `overflow-y: auto`. Each direct section uses `height: 100vh` + `scroll-snap-align: start`.
- Sticky header (translucent ivory, wordmark left, hamburger right — two 20px horizontal bars).
- Hamburger opens a **full-screen overlay menu** (flat `#F7F2E9` background, not gold-gradient) with large 36px weight-300 serif links stacked, each separated by a hairline, close (✕) top-right.
- Screen 1: Hero — flat placeholder background, headline bottom-aligned (64px Cormorant Garamond), the same gold marquee band directly beneath it (46px tall), and a small vertical "SWIPE DOWN" label top-right as a scroll affordance.
- Screens 2–4: Why IIWM, **one pillar per full screen** — a huge 110px thin numeral, then the title (32px), then description, vertically centered.
- Screen 5: Founder's Story — vertical hairline timeline (not horizontal like desktop) with the same 3 milestones, on the `#F1EAD9` background.
- Screen 6: Comparison — split vertically in half (not side-by-side): top half "Traditional Institutes" muted, bottom half "IIWM Bangalore" in italic serif.
- **Sticky bottom bar**, always visible: flat gold "APPLY NOW" (flex:1) + a 50px square WhatsApp icon button (`#25D366`). This should persist across the whole scroll experience (use `position: sticky` on scroll container, or `position: fixed` if the container is the whole viewport in production).

## Interactions & Behavior
- **Nav link hover** (desktop): underline reveal — `border-bottom` transitions from transparent to `#B8863F`.
- **Apply Now (nav, desktop)**: outline pill → fills solid gold on hover, ~150–200ms ease transition.
- **Marquee**: continuous linear CSS transform loop, no easing, no pause (unless reduced-motion is requested by the OS — respect `prefers-reduced-motion` and freeze the marquee for accessibility).
- **Scroll-linked reveal (desktop, from original prototype, not yet baked into these reference files)**: hero background had a subtle parallax drift, and the Why IIWM / Founder / Comparison sections faded up + translated in as the user scrolled past them. Recommend implementing with `IntersectionObserver` (fade in + translateY(30px→0) over ~600ms, triggered once per section) rather than continuous scroll-linked transforms, for smoother production performance.
- **Mobile hamburger**: tap toggles the full-screen overlay; tap ✕ or a link closes it and (should) navigates.
- **Mobile scroll-snap**: each section should snap crisply; verify momentum scrolling / snap behavior on iOS Safari specifically (add `-webkit-overflow-scrolling: touch` equivalent handling and test snap-stop behavior).

## State Management
- `menuOpen` (boolean) — mobile hamburger overlay visibility. Toggled by hamburger icon and the overlay's close button.
- No other client state is required for these sections. Real implementation will add: nav scroll state (opaque/blurred vs. transparent), and section-visibility state for the recommended IntersectionObserver reveals.

## Design Tokens

**Colors**
- Ivory (background): `#F7F2E9`
- Deep ivory (section tint): `#F1EAD9`
- Placeholder photography tone: `#DAD0BC`
- Ink (primary text): `#201810`
- Muted text: `#5B4A3A`
- Muted label / traditional-column text: `#8B7A65`
- Gold (accent / CTA): `#B8863F`
- Warm gold-brown (eyebrow labels): `#8C6B45`
- Maroon (sparing brand accent, from logo): `#8C2333`
- WhatsApp green (utility icon only): `#25D366`

**Typography**
- Display / headings: **Cormorant Garamond** (weights used: 300, 400, 500, 600; italic used for emphasis words) — Google Font
- Small tracked labels / eyebrows: **Marcellus** (available, not heavily used in this direction) or Jost with wide letter-spacing
- Body / UI / nav: **Jost** (weights 300, 400, 500, 600) — Google Font
- Hero headline: 128px desktop / 64px mobile, line-height ~0.92–0.94, letter-spacing -.01em
- Section eyebrows: 11–15px, letter-spacing .14–.3em, uppercase or italic-lowercase per the file
- Body copy: 13–16px, weight 300, line-height 1.6–1.7

**Spacing**
- Desktop section horizontal padding: 64px
- Desktop section vertical padding: 100–140px between major sections
- Grid gaps: 56px (4-column grids)
- Mobile section horizontal padding: 28px

**Borders / dividers**
- All dividers are 1px hairlines (`#201810` or `rgba(32,24,16,.05–.12)`) — no border-radius, no box-shadow anywhere in this direction (a deliberate departure from earlier "gradient button / shadow card" drafts that read as generic/AI-templated).

## Assets
- **Logo**: `iiwm-logo.jpeg` (full lockup, provided by the client) and `iiwm-mark.png` (cropped circular monogram, cropped from the lockup for use as a small nav mark). Neither is used directly in these two reference files (nav shows only the IIWM/BANGALORE wordmark in type) — add the monogram mark to the header if desired.
- All photography is a flat-color placeholder. Real campus/wedding photography and a hero video/cinemagraph are needed before launch.

## Not Yet Designed
These sections from the original brief are not in this reference package and will need separate design passes before a full site can be built: How Students Learn infographic, Inside IIWM gallery (masonry), Career Opportunities grid, Student Journey timeline, Testimonials, Placement Support, Industry Partners logo strip, FAQ accordion, Final CTA banner. Recommend designing these in the same "Atelier" visual language (hairline rules, mixed-weight serif type, flat gold accent, no gradients/shadows) for consistency.

## Files
- `IIWM Desktop Reference.dc.html` — full desktop reference (open directly in a browser)
- `IIWM Mobile Reference.dc.html` — full mobile reference, scroll-snap, open in a browser or device emulator at ≤430px width
- `assets/iiwm-logo.jpeg` — client-provided full logo lockup
- `assets/iiwm-mark.png` — cropped circular monogram
