# @uncledullaz — Instagram Carousel System

**Complete context report — Version 6 (January 2026)**  
Supersedes v4/v5. **Single source of truth** for Claude building carousels from **Day 43 onward**.  
**Golden templates:** `day-45/day45_carousel.html` and `day-46/day46_carousel.html` — copy the newer day’s file as the starting point for the next day. **Do not** use Day 41 orange/sizer/slide-inner patterns; that pipeline is **retired**.

---

## 1. Creator profile

| Field | Value |
|--------|--------|
| Name | Abdullah Ali |
| Instagram | @uncledullaz |
| Series | #100DaysOfCode — daily public learning log |
| Studying | 3rd-year CS, Wits University, Johannesburg |
| Goals | Full stack / AI; documents learning publicly |
| Portfolio | https://abdullah-ali-portfolio.vercel.app/ |
| GitHub | https://github.com/AbdullahAliCodes/javascript-practice |
| Email | abdullahali.dullz@gmail.com |

**When starting a new day:** Ask for day number, lesson screenshots, repo paths, and any framing preference. **Current narrative arc:** React Google Keep clone (Vite + JSX), forms, modals, state, child→parent communication.

---

## 2. What we are building

A repeatable system for **polished 3:4 Instagram carousels** (480×640 CSS → 1080×1440 PNG at scale 2.25×). Claude should:

1. Analyse the day’s material (screenshots + code).
2. **Teach, not only log** — frame as useful for the reader.
3. Output **one self-contained HTML file** with export buttons.

**Two carousel modes**

- **Daily log** — one post per day; lesson + build.
- **Concept deep-dive** (occasional) — one topic, max shareability.

**Creative rule:** Turn learning into teaching (see Day 40 “Building a Google Keep Clone” + key concept slides).

---

## 3. Design system — terminal aesthetic (Day 42+)

**Orange / Bricolage / DM Sans / Day 41 sizer / `.slide-inner` / 3× export / classes `.sl` `.sd` `.sg` — all OBSOLETE.** Do not reference them.

### 3.1 Colour tokens (CSS `:root`)

| Token | Value | Usage |
|--------|--------|--------|
| `--green` | #00FF41 | Prompt accents, borders, matrix accent |
| `--react` | #60DCFC | React highlights, `.rc`, react progress |
| `--green-dim` | #00B82F | Softer green |
| `--bg` / `--fg` | #000 / #fff | Dark slides |
| Light slide bg | #F5F5EF | Class `.slide.lt` |
| Light body | #141210 | Text on light slides |
| Light green accent | #007A20 | Paths on `.slide.lt` (non-React) |
| React light accent | #0284c7 / #0369a1 | `.slide.lt.rlt` prompts, `.bh .rc`, progress |
| CTA | `radial-gradient(ellipse at 50% 100%, rgba(0,255,65,0.22), rgba(0,255,65,0.06) 30%, #000 65%)` | Class `.cta-bg` + optional `#cta-bg-img` |

### 3.2 Typography

**JetBrains Mono only** (Google Fonts weights as in template: 400, 500, 700, 800).

| Role | Spec |
|------|------|
| Base `.bh` | 800, **34px**, line-height 1.1, letter-spacing -0.5px |
| `.bh.xl` | **34px** — cover hero & CTA main title (two-line stack) |
| `.bh.sm` | 26px — compact slide titles |
| `.bh.vis-xl` | **42px**, line-height 1.1, letter-spacing **-1px**, margin **18px 0 8px** — “Visual Update”, “What I’m building”, “What I learnt”, etc. (Day 45+). **Do not confuse with `.bh.xl`.** |
| Body / prompts | 12–13px |
| `.cmt` | ~11–11.5px, muted |
| Tags `.stag` | 10px, bold, caps, letter-spacing |

### 3.3 Voice

- Prompts: `~/day46 $ command-here` (no stray spaces inside `<span class="dollar">$</span>`).
- Status: `[ STATUS ] STILL SHIPPING` / `[ REACT ]` style.
- Subtext: `// comment line`
- Cover taglines: `[ DAY 46 ]`, `[ #100daysofcode ]` — **direct child of `.sp-cover`**, not inside `.content` (max-width 240px causes wraps). `.tagline { white-space: nowrap; }`.

---

## 4. HTML architecture (must match template)

### 4.1 Shell

- First line **must** be exactly: `<!DOCTYPE html>` — **never** `<\!DOCTYPE` or escaped variants.
- **Comments in HTML:** use normal `<!-- -->`. Do not escape `<` in comments in a way that breaks parsing.
- Viewport + charset meta; title includes day + topic.
- **html2canvas:** `<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>` then a **separate** `<script>` for inline JS (never `src` + inline in one tag).

### 4.2 Layout

- Outer **Instagram frame** (`.igf`) with header, **`.vp`** viewport `aspect-ratio: 3/4`, **`.track`** flex row of **`.slide`** each `min-width: 100%`.
- **Slide size:** 480×640 logical px; export at **scale 2.25** → 1080×1440.
- **Padding:** content uses `.sp` or `.sp-cover` with **30px 32px 60px** (match template).

### 4.3 Slide 1 (cover) — structure **exactly** like Day 45/46

Order inside `#slide-0`:

1. `.hero-glow`, `.scanlines`
2. Corner brackets `.cr` (green **or** `.cr.rc` if matching react corners — follow template)
3. **`.logo-row.logo-row--cover`** — **Keep logo only** (one `.logo-icon`, `../google-keep-logo.png`). **No small React logo** on cover; React appears as large **canvas or img** `.react-hero` and on **inner** slides as `logo-row--dual`.
4. **React hero** — `<canvas class="react-hero" id="react-hero-img">` drawn on `load`, **or** `<img id="react-hero-img">` filled from canvas (Day 45 pattern). Be consistent within one file.
5. **`.sp-cover` only** — **not** `sp sp-cover` (avoid double padding/stacking).
6. Inside `.sp-cover`: **`.dp-row`** (`.dp-circle` + `.prompt`) → **`.cover-taglines`** → **`.content`** (`h1.bh.xl` + optional `p.cmt`) → **`.ibar`**
7. **`.pb` progress bar** is a **direct sibling of `.sp-cover`** under `.slide` (not nested inside `.sp-cover`).

### 4.4 Inner slides

- **`.logo-row.logo-row--dual`** — React `../react-logo.svg.png` + Keep `../google-keep-logo.png`.
- **`.slide.lt`** cream background; **`.slide.lt.rlt`** = light + cyan accent path (React lessons).
- Corners, `.sp`, optional `.sa` swipe hint, **`.pb`** — follow latest template (Day 46 uses `.pb` inside `.sp` on inner slides; cover/CTA use Day 45-style **sibling** `.pb` where the template does).

### 4.5 Last slide (CTA) — align with Day 45

- `.slide.cta-bg#slide-N`
- `logo-row--dual`
- **`<img id="cta-bg-img" ... src="">`** full-bleed z-index 0; fill `src` on load with canvas `toDataURL` radial gradient (same stops as `.cta-bg` CSS).
- Green corners, then **`.sp` with `style="justify-content:center;"`**
- Block order: **prompt** (`margin-bottom:42px`) → **`.stag`** → **`.cta-head-row`** (`.dp-circle.cta-dp` + **`h2.bh.xl`**) → **`p.cmt`** (13px + optional `.cursor-blink`) → **follow card** (border `var(--border-g)`, green label) → **`.ibar`** `margin-top:auto`
- **`.pb`** sibling after `.sp`; last slide fill **100%**; `.pl` often neutral (not `.rc`) on CTA — match Day 45.

### 4.6 Images & export

**Profile / screenshot:** embed as **`data:image/jpeg;base64,...` / `data:image/png;base64,...`** when possible so `file://` export never taints.

**Corner logos:** `../react-logo.svg.png` and `../google-keep-logo.png` are OK if instructions say: serve folder over **`http://localhost`** and implement **`inlineImagesForExport`** that:

- Resolves URLs with `new URL(src, window.location.href).href`
- `fetch(..., { cache: 'force-cache' })` → FileReader → data URL
- Skips `src` already starting with `data:`

**Export capture (Day 45–46 pattern):**

- Clone slide; inject `<style>* { animation:none !important; transition:none !important; }</style>` into clone
- Place clone in off-screen **wrapper** with explicit **background** (`#000`, `#F5F5EF`, or CTA gradient string) — not `z-index:-1`
- `allowTaint: false`, `useCORS: true`, `backgroundColor: null`, `scrollX/Y: 0`, `scale: 2.25`
- **`onclone`:** strip `filter` from `.react-hero` (img or canvas) on the cloned root
- If hero is **canvas**, copy pixels from live canvas to clone canvas before `html2canvas`
- **`try` / `finally`** remove wrapper; **`try/catch/finally`** on download buttons so UI never stuck in “exporting”

**JavaScript hygiene**

- Use normal `!` — **never** write `\!dragging` or `\!src.startsWith` (invalid / confusing escapes in some tooling).
- Pointer carousel: optional live `translateX(calc(-n*100% + dragPx))` with `transition: none` while dragging; **`pointerleave`** clears stuck drag; dot **click** jumps to slide.

---

## 5. Slide type library (assemble freely)

| Type | Role | Typical classes |
|------|------|-------------------|
| Cover | Hook, day, topic, DP, taglines, hero | `.sp-cover`, `.dp-row`, `.cover-taglines`, `h1.bh.xl`, `.ibar` |
| Visual | Screenshot / UI | `.slide.lt`, `.stag`, `.bh.vis-xl` or `.bh.sm`, image area flex |
| Feature list | What was built | `.frow`, `.st` / `.st.rc` |
| Code / concept | Snippet + explanation | `.code-block`, syntax spans, `.cmt` |
| Steps / learnings | Numbered | `.step`, `.slide.lt.rlt` for React |
| CTA | Follow + repo + mood | `.cta-bg`, `.cta-head-row`, `.bh.xl`, follow card |

---

## 6. Day index (update when posting)

Keep this section current in the doc **or** point Claude at the latest `day-XX` folder.

- **Day 45** — `day45_carousel.html` — state, lists, conditional rendering, `prevState`, `.bh.vis-xl`, CTA with DP + `bh.xl`.
- **Day 46** — `day46_carousel.html` — forms, modals, child→parent; cover = **Keep-only** logo row; taglines = `[ DAY N ]` / hashtag lines; export wrapper + error handling as fixed in session.

For **Day 47+:** duplicate latest day’s HTML, rename title/instructions/slide copy, preserve structure checklist above.

---

## 7. Workflow for Claude

1. **Inputs:** day number, screenshots, repo file paths, special requests.
2. **Frame** the teachable angle; pick slide types from §5.
3. **Generate HTML** by **cloning the latest golden file**, then replace text, slide count, progress widths (`100/N %`), `SLIDE_COUNT` / dots / `slide-0…slide-(N-1)` ids.
4. **Self-check (mandatory):**
   - [ ] `<!DOCTYPE html>` correct
   - [ ] No `\!` in JS
   - [ ] Cover: `.sp-cover` only; `.pb` sibling; taglines outside `.content`; cover logos = **Keep only**
   - [ ] Inner slides: dual logos
   - [ ] `.bh.xl` vs `.bh.vis-xl` used correctly (§3.2)
   - [ ] CTA matches §4.5 if present
   - [ ] Export: clone animation kill, wrapper bg, `allowTaint: false`, onclone filter strip, try/finally
5. **User workflow:** Open over `http://localhost` for logo inlining; wait for fonts; download PNGs; upload carousel order.

---

## 8. Known issues (condensed)

| Issue | Fix |
|--------|-----|
| Tainted canvas / SecurityError | Data-URI for DP + screenshot; localhost + inline fetch for `../` logos |
| Hero blur / clipped glow | High-DPI canvas draw; strip `filter` in onclone |
| Fonts wrong in PNG | Wait 2–3s after load before export |
| Taglines wrap | `.cover-taglines` direct under `.sp-cover`; `white-space:nowrap` on `.tagline` |
| Batch download stuck | try/finally + re-enable buttons |
| HTML broken from LLM | Never escape `<!DOCTYPE` or `<!--`; don’t escape `!important` inside **strings** incorrectly in JS |

---

## 9. Deprecated (do not use in new files)

- Day 41 orange theme, `.slide-inner`, sizer `padding-top:125%`, Bricolage/DM Sans, 3× capture of `.slide-inner`, `.sl/.sd/.sg/.sh`, placeholder `<!-- REPLACE -->` workflow as **primary** spec.

---

*End of Version 6 — align every new carousel with `day-45` / `day-46` HTML and this checklist.*
