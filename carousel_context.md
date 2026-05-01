# @uncledullaz Carousel System — Context

**Golden reference file:** `day-48/day48_carousel.html`
**Current project:** Amazon Clone (react-router-dom + firebase)
**Last updated:** Day 48

---

## 1. What this is

Instagram carousel generator for the #100DaysOfCode series. Each day produces a self-contained HTML file that renders as a fake Instagram post with swipeable slides. Slides are exported as 1080×1440px PNGs via html2canvas and uploaded in order.

- **Slide dimensions:** 480×640px display → exported at 2.25× = 1080×1440px
- **Aspect ratio:** 3:4
- **Font:** JetBrains Mono (400, 500, 700, 800) from Google Fonts
- **Aesthetic:** terminal / hacker — dark background, Matrix green, React cyan
- **File naming:** `day-XX/dayXX_carousel.html`

---

## 2. File structure

```
0-claude-context/
  insta-dp.jpg                      ← profile picture              →  ../insta-dp.jpg
  react-logo.svg.png                ← React logo (inner slides)    →  ../react-logo.svg.png
  amazon-logo.png                   ← Amazon 225×225 (wide slot)   →  ../amazon-logo.png
  amazon-logo-large.png             ← Amazon wide colour           →  ../amazon-logo-large.png
  amazon-logo-large-white.png       ← Amazon wide white            →  ../amazon-logo-large-white.png
  firebase-logo.svg.png             ← Firebase wide (cover only)   →  ../firebase-logo.svg.png
  firebase-logo-small.png           ← Firebase small (logo rows)   →  ../firebase-logo-small.png
  day-48/
    day48_carousel.html             ← GOLDEN FILE ⭐
    visual-update.png               ← screenshot (embed as base64)
    App.jsx / components/...        ← source files (read for code)
```

When starting a new project, add its logos to the context root and update §14 (project-specific section), §6 JS swap paths, and §5.2 cover template.

---

## 3. Color palette & CSS variables

```css
:root {
  --bg:#000000; --fg:#ffffff;
  --green:#00ff41; --green-dim:#00b82f; --green-bg:rgba(0,255,65,0.08);
  --react:#60dcfc; --react-bg:rgba(96,220,252,0.08); --react-bd:rgba(96,220,252,0.22);
  --muted:#6b7280; --muted2:#9ca3af; --muted3:#4b5563;
  --border:rgba(255,255,255,0.08); --border-g:rgba(0,255,65,0.2);
}
```

- Dark slides: `background: var(--bg)` = #000000
- Light slides: `.slide.lt` = `background: #f5f5ef`
- CTA: `.slide.cta-bg` = CSS radial gradient

---

## 4. Complete CSS block

Copy verbatim into every new carousel `<style>` tag.

```css
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{
  --bg:#000000;--fg:#ffffff;
  --green:#00ff41;--green-dim:#00b82f;--green-bg:rgba(0,255,65,0.08);
  --react:#60dcfc;--react-bg:rgba(96,220,252,0.08);--react-bd:rgba(96,220,252,0.22);
  --muted:#6b7280;--muted2:#9ca3af;--muted3:#4b5563;
  --border:rgba(255,255,255,0.08);--border-g:rgba(0,255,65,0.2);
}
html,body{background:#1a1a1a;}
body{display:flex;flex-direction:column;align-items:center;min-height:100vh;padding:40px 16px;font-family:"JetBrains Mono",monospace;}
h1.top{font-size:14px;font-weight:500;color:#888;margin-bottom:16px;letter-spacing:0.5px;}
.instructions{max-width:480px;width:100%;background:#0e0e0e;border:1px solid #2a2a2a;border-radius:8px;padding:16px 20px;margin-bottom:20px;font-size:12px;color:#999;line-height:1.6;}
.instructions strong{color:var(--green);font-weight:500;}
.instructions ol{padding-left:18px;margin-top:6px;}
.instructions code{color:var(--green);background:var(--green-bg);padding:1px 5px;border-radius:3px;font-size:11px;}
.btn-row{display:flex;gap:10px;max-width:480px;width:100%;margin-bottom:20px;}
.dl-btn{flex:1;background:transparent;color:var(--green);border:1px solid var(--green-dim);border-radius:6px;padding:12px 14px;font-size:12px;font-weight:500;cursor:pointer;letter-spacing:0.5px;transition:all 0.2s;font-family:"JetBrains Mono",monospace;}
.dl-btn:hover{background:var(--green-bg);}
.dl-btn:disabled{opacity:0.4;cursor:wait;}
.dl-single{flex:1;background:transparent;color:var(--muted2);border:1px solid #2a2a2a;border-radius:6px;padding:9px 4px;font-family:"JetBrains Mono",monospace;font-size:11px;font-weight:500;cursor:pointer;letter-spacing:0.3px;transition:all 0.2s;}
.dl-single:hover{background:var(--green-bg);color:var(--green);border-color:var(--green-dim);}
.dl-single:disabled{opacity:0.3;cursor:wait;}
.btn-singles{display:flex;gap:6px;max-width:480px;width:100%;margin-bottom:12px;flex-wrap:wrap;}
.exporting .nb,.exporting .instructions,.exporting .btn-row,.exporting h1.top,.exporting .btn-singles{display:none;}
.cw{width:100%;max-width:480px;}
.igf{background:#000;border:1px solid #2a2a2a;border-radius:10px;overflow:hidden;box-shadow:0 2px 30px rgba(0,0,0,0.5);}
.igh{display:flex;align-items:center;gap:10px;padding:10px 14px;border-bottom:1px solid #1a1a1a;background:#0a0a0a;}
.iga{width:34px;height:34px;border-radius:50%;border:1.5px solid var(--green);background:#111;display:flex;align-items:center;justify-content:center;font-size:10px;color:var(--green);font-weight:700;flex-shrink:0;}
.igh-name{font-weight:600;font-size:13px;color:#eee;}
.igh-sub{font-size:10px;color:#555;}
.vp{position:relative;width:100%;aspect-ratio:3/4;overflow:hidden;background:#000;}
.track{display:flex;height:100%;transition:transform 0.4s cubic-bezier(0.4,0,0.2,1);cursor:grab;}
.track:active{cursor:grabbing;}
.slide{min-width:100%;height:100%;position:relative;overflow:hidden;display:flex;flex-direction:column;background:var(--bg);}
.cr{position:absolute;width:26px;height:26px;border:1.5px solid var(--green);opacity:0.55;z-index:5;pointer-events:none;}
.cr.tl{top:18px;left:18px;border-right:none;border-bottom:none;}
.cr.tr{top:18px;right:18px;border-left:none;border-bottom:none;}
.cr.bl{bottom:56px;left:18px;border-right:none;border-top:none;}
.cr.br{bottom:56px;right:18px;border-left:none;border-top:none;}
.cr.rc{border-color:var(--react);}
.sp{padding:30px 32px 60px;display:flex;flex-direction:column;height:100%;position:relative;z-index:2;}
.prompt{font-size:13px;line-height:1.4;margin-bottom:14px;}
.prompt .path{color:var(--green);}
.prompt .dollar{color:var(--green);margin:0 5px;}
.prompt .cmd{color:var(--fg);}
.prompt.rp .path,.prompt.rp .dollar{color:var(--react);}
.cmt{font-size:11.5px;color:var(--muted);line-height:1.5;margin-bottom:10px;}
.cmt .slash{color:var(--muted3);}
.stag{display:inline-block;font-size:10px;font-weight:700;letter-spacing:2px;color:var(--green);padding:3px 0;margin-bottom:10px;}
.stag.rc{color:var(--react);}
.bh{font-weight:800;font-size:34px;line-height:1.1;letter-spacing:-0.5px;color:var(--fg);margin:4px 0 14px;}
.bh .g{color:var(--green);}
.bh .rc{color:var(--react);}
.bh.sm{font-size:26px;}
.bh.xl{font-size:34px;}
.bh.vis-xl{font-size:42px;line-height:1.1;letter-spacing:-1px;margin:18px 0 8px;}
.cta-head-row{display:flex;align-items:center;gap:14px;}
.cta-head-row .bh{margin:4px 0 14px;}
.cta-head-row .dp-circle.cta-dp{width:75px;height:75px;border:2px solid var(--green);}
.ibar{margin-top:auto;font-size:10px;color:var(--green);letter-spacing:0.5px;display:flex;gap:14px;flex-wrap:wrap;padding-bottom:4px;}
.ibar .k{color:var(--muted2);}
.ibar .sep{color:var(--muted3);}
.frow{display:flex;align-items:flex-start;gap:12px;padding:11px 0;border-bottom:1px dashed var(--border);font-size:12px;}
.frow:last-of-type{border-bottom:none;}
.frow .st{font-size:10px;font-weight:700;letter-spacing:1px;padding:3px 8px;border-radius:3px;color:var(--green);background:var(--green-bg);border:1px solid var(--border-g);min-width:56px;text-align:center;flex-shrink:0;}
.frow .st.rc{color:var(--react);background:var(--react-bg);border-color:var(--react-bd);}
.frow .txt{flex:1;}
.frow .ttl{display:block;color:var(--fg);font-weight:500;font-size:12.5px;margin-bottom:2px;}
.frow .sub{display:block;color:var(--muted);font-size:10.5px;line-height:1.45;}
.step{display:flex;gap:14px;padding:10px 0;border-bottom:1px dashed var(--border);}
.step:last-of-type{border-bottom:none;}
.step .n{color:var(--react);font-size:18px;font-weight:700;min-width:30px;line-height:1.1;}
.step .ttl{color:var(--fg);font-size:12.5px;font-weight:500;display:block;margin-bottom:2px;}
.step .sub{color:var(--muted);font-size:10.5px;line-height:1.45;display:block;}
.ic{font-size:11px;color:var(--green);background:var(--green-bg);padding:1px 5px;border-radius:3px;border:1px solid var(--border-g);}
.ic.rc{color:var(--react);background:var(--react-bg);border-color:var(--react-bd);}
.pb{position:absolute;bottom:0;left:0;right:0;padding:18px 32px 20px;display:flex;align-items:center;gap:12px;z-index:10;}
.pt{flex:1;height:2px;background:rgba(255,255,255,0.1);border-radius:1px;overflow:hidden;}
.pf{height:100%;background:var(--green);border-radius:1px;}
.pf.rc{background:var(--react);}
.pl{font-size:10px;color:var(--muted2);white-space:nowrap;}
.pl.rc{color:var(--react);}
.nb{position:absolute;top:50%;transform:translateY(-50%);width:30px;height:30px;border-radius:50%;border:1px solid var(--green-dim);background:rgba(0,0,0,0.8);cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:20;color:var(--green);font-size:14px;}
.nbp{left:10px;}
.nbn{right:10px;}
.ig-actions{display:flex;align-items:center;padding:10px 14px 6px;gap:14px;background:#000;}
.ig-icon{width:22px;height:22px;opacity:0.7;color:#fff;}
.ig-bk{margin-left:auto;}
.ig-dots{display:flex;gap:5px;padding:0 14px 8px;justify-content:center;background:#000;}
.igdot{width:5px;height:5px;border-radius:50%;background:#333;transition:all 0.2s;}
.igdot.on{background:var(--green);width:14px;border-radius:2px;}
.igcap{padding:4px 14px 14px;font-size:11px;color:#666;line-height:1.5;background:#000;}
.igcap strong{color:#ccc;font-weight:600;}
.dp-row{display:flex;align-items:center;gap:12px;margin-bottom:14px;}
.dp-row .prompt{margin-bottom:0;flex:1;min-width:0;}
.dp-circle{width:44px;height:44px;border-radius:50%;border:2px solid var(--green);overflow:hidden;flex-shrink:0;background:#111;}
.dp-circle img{width:100%;height:100%;object-fit:cover;}
.cover-taglines{display:flex;flex-direction:column;gap:8px;margin-bottom:12px;}
.cover-taglines .tagline{font-size:18px;font-weight:800;letter-spacing:0.12em;color:var(--green);line-height:1.15;white-space:nowrap;}
.hero-glow{position:absolute;inset:0;pointer-events:none;z-index:1;background:radial-gradient(ellipse at 70% 50%,rgba(96,220,252,0.13) 0%,rgba(0,255,65,0.04) 40%,transparent 65%);}
.scanlines{position:absolute;inset:0;pointer-events:none;z-index:1;background:repeating-linear-gradient(to bottom,transparent 0,transparent 3px,rgba(255,255,255,0.015) 3px,rgba(255,255,255,0.015) 4px);}
.react-hero{position:absolute;right:-120px;top:50%;transform:translateY(-50%);width:360px;height:360px;z-index:3;pointer-events:none;opacity:0.88;filter:drop-shadow(0 0 50px rgba(96,220,252,0.3));}
.logo-row{position:absolute;top:22px;right:22px;display:flex;gap:8px;z-index:10;}
.logo-icon{width:28px;height:28px;border-radius:8px;display:flex;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,0.12);background:rgba(255,255,255,0.06);overflow:hidden;}
.logo-icon img{width:100%;height:100%;object-fit:contain;display:block;}
.logo-row--dual>.logo-icon{background:transparent;border:none;box-shadow:none;border-radius:0;overflow:visible;}
.logo-row--dual>.logo-icon:not(:last-child){width:30px;height:30px;}
.logo-row--dual>.logo-icon:last-child{width:64px;height:32px;}
.logo-row--dual>.logo-icon:last-child img{width:100%;height:100%;object-fit:contain;object-position:right center;}
.slide.lt .logo-row--dual>.logo-icon{background:transparent;border:none;}
.sp-cover{padding:30px 32px 60px;display:flex;flex-direction:column;height:100%;position:relative;z-index:4;}
.sp-cover .content{max-width:240px;}
.sp-cover > .cover-taglines{margin-top:36px;align-self:flex-start;max-width:calc(100% - 8px);}
.cover-bottom{margin-top:auto;display:flex;flex-direction:column;align-items:center;gap:12px;width:100%;}
.cover-bottom .ibar{margin-top:0;padding-bottom:4px;}
.cover-logo-row{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:center;gap:24px;}
.code-block{background:#080808;border:1px solid rgba(255,255,255,0.08);border-radius:6px;padding:14px 16px;font-size:10.5px;line-height:1.7;margin:8px 0;overflow:hidden;flex:1;white-space:pre;}
.code-block.sm{font-size:10px;line-height:1.65;}
.code-block .file-label{font-size:9.5px;color:var(--muted3);letter-spacing:1px;margin-bottom:6px;display:block;border-bottom:1px solid rgba(255,255,255,0.05);padding-bottom:5px;}
.cb-kw{color:#c586c0;} .cb-fn{color:#dcdcaa;} .cb-str{color:#ce9178;} .cb-tag{color:#4ec9b0;}
.cb-attr{color:#9cdcfe;} .cb-cm{color:#5a7a52;} .cb-var{color:#9cdcfe;} .cb-punc{color:#808080;} .cb-num{color:#b5cea8;}
.code-divider{height:1px;background:rgba(255,255,255,0.06);margin:8px 0;}
.slide.lt{background:#f5f5ef;}
.slide.lt .cr{border-color:#00b82f;opacity:0.6;}
.slide.lt .prompt .path,.slide.lt .prompt .dollar{color:#007a20;}
.slide.lt .prompt .cmd{color:#141210;}
.slide.lt .stag{color:#007a20;}
.slide.lt .bh{color:#141210;}
.slide.lt .bh .g{color:#007a20;}
.slide.lt .cmt{color:#999;}
.slide.lt .cmt .slash{color:#ccc;}
.slide.lt .ibar{color:#007a20;}
.slide.lt .ibar .k{color:#777;}
.slide.lt .ibar .sep{color:#bbb;}
.slide.lt .pb .pt{background:rgba(0,0,0,0.09);}
.slide.lt .pb .pf{background:#00b82f;}
.slide.lt .pl{color:#777;}
.slide.lt .frow{border-color:rgba(0,0,0,0.09);}
.slide.lt .frow .ttl{color:#141210;}
.slide.lt .frow .sub{color:#777;}
.slide.lt .step{border-color:rgba(0,0,0,0.09);}
.slide.lt.rlt .cr{border-color:#0284c7;}
.slide.lt.rlt .stag{color:#0284c7;}
.slide.lt.rlt .bh .rc{color:#0369a1;}
.slide.lt.rlt .step .n{color:#0284c7;}
.slide.lt.rlt .step .ttl{color:#141210;}
.slide.lt.rlt .step .sub{color:#777;}
.slide.lt.rlt .ic.rc{color:#0284c7;background:rgba(2,132,199,0.09);border-color:rgba(2,132,199,0.25);}
.slide.lt.rlt .ibar{color:#0284c7;}
.slide.lt.rlt .pb .pf{background:#0284c7;}
.slide.lt.rlt .pl{color:#777;}
.slide.lt .code-block{background:#f0ede4;border-color:rgba(0,0,0,0.1);color:#141210;}
.slide.lt .cb-kw{color:#8a3191;} .slide.lt .cb-fn{color:#795e26;} .slide.lt .cb-str{color:#a31515;}
.slide.lt .cb-tag{color:#267f99;} .slide.lt .cb-attr{color:#0000ff;} .slide.lt .cb-cm{color:#6a9955;}
.slide.lt .cb-var{color:#001080;} .slide.lt .cb-punc{color:#555;}
.slide.lt .frow .st{color:#007a20;background:rgba(0,122,32,0.08);border-color:rgba(0,122,32,0.2);}
.slide.lt .frow .st.rc{color:#0284c7;background:rgba(2,132,199,0.08);border-color:rgba(2,132,199,0.2);}
.cta-bg{background:radial-gradient(ellipse at 50% 100%,rgba(0,255,65,0.22) 0%,rgba(0,255,65,0.06) 30%,#000 65%);}
.cursor-blink{display:inline-block;width:10px;height:20px;background:var(--green);vertical-align:middle;margin-left:4px;animation:blink 1s steps(2) infinite;}
@keyframes blink{50%{opacity:0;}}
.pic-stack{display:flex;flex-direction:column;gap:7px;flex:1;min-height:0;}
.pic-item{display:flex;flex-direction:column;gap:3px;flex:1;min-height:0;}
.pic-label{font-size:9px;font-weight:700;letter-spacing:1.5px;color:#007a20;}
.pic-img{width:100%;flex:1;min-height:0;object-fit:contain;object-position:top center;background:#d9deea;border-radius:4px;display:block;}
```

---

## 5. Slide HTML templates

### 5.1 Outer page scaffold

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>@uncledullaz / day N — topic</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&display=swap" rel="stylesheet" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
  <style>/* § 4 CSS block */</style>
</head>
<body>
  <h1 class="top">@uncledullaz / day N — topic</h1>
  <div class="instructions">
    <strong>&gt; how to export:</strong>
    <ol>
      <li>Wait 2–3s for Google Fonts to load, then click <code>download all N slides</code>.</li>
      <li>All images use relative paths. Serve <code>day-XX/</code> over <code>http://localhost</code> for export.</li>
      <li>Upload all N slides in order to Instagram.</li>
    </ol>
  </div>
  <div class="btn-row">
    <button class="dl-btn" id="dl-all">download all N slides</button>
  </div>
  <div class="btn-singles">
    <button class="dl-single" id="dl-0">[01]</button>
    <!-- one per slide -->
  </div>
  <div class="cw">
    <div class="igf">
      <div class="igh">
        <div class="iga">ud</div>
        <div><div class="igh-name">uncledullaz</div><div class="igh-sub">day N — topic</div></div>
      </div>
      <div class="vp">
        <div class="track" id="track">
          <!-- SLIDES HERE -->
        </div>
        <button class="nb nbp" id="btn-prev">&#8249;</button>
        <button class="nb nbn" id="btn-next">&#8250;</button>
      </div>
      <div class="ig-actions">
        <svg class="ig-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        <svg class="ig-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        <svg class="ig-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        <svg class="ig-icon ig-bk" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
      </div>
      <div class="ig-dots">
        <div class="igdot on"></div><!-- one per slide, first gets "on" -->
      </div>
      <div class="igcap"><strong>uncledullaz</strong> day N — topic &#128187;</div>
    </div>
  </div>
  <script>/* § 6 JS block */</script>
</body>
</html>
```

---

### 5.2 Cover slide (GOLDEN — day48)

No `logo-row` at the top. Project logos live in `.cover-bottom` at the base of `.sp-cover`. `.pb` is a sibling of `.sp-cover`.

```html
<div class="slide" id="slide-0">
  <div class="hero-glow"></div>
  <div class="scanlines"></div>
  <div class="cr tl"></div><div class="cr tr"></div>
  <div class="cr bl"></div><div class="cr br"></div>
  <canvas class="react-hero" id="react-hero-img" width="360" height="360"></canvas>
  <div class="sp-cover">
    <div class="dp-row">
      <div class="dp-circle"><img src="../insta-dp.jpg" alt="Profile" /></div>
      <div class="prompt">
        <span class="path">~/100-days-of-code</span><span class="dollar">$</span><span class="cmd">node day-N.js</span>
      </div>
    </div>
    <div class="cover-taglines">
      <div class="tagline">[ DAY N ]</div>
      <div class="tagline">[ #100daysofcode ]</div>
    </div>
    <div class="content">
      <h1 class="bh xl">project name<br /><span class="rc">topic.</span></h1>
      <p class="cmt" style="margin-top:6px;">
        <span class="slash">//</span> concept 1 &middot; concept 2 &middot; concept 3
      </p>
    </div>
    <!-- logos + ibar pinned to bottom via .cover-bottom -->
    <div class="cover-bottom">
      <div class="cover-logo-row">
        <img src="../project-logo-large-white.png" alt="Project"
             style="width:100%;max-width:112.5px;height:auto;display:block;" />
        <img src="../secondary-logo.png" alt="Secondary"
             style="width:100%;max-width:112.5px;height:auto;display:block;" />
      </div>
      <div class="ibar">
        <span><span class="k">stack:</span> react &middot; vite &middot; library</span>
        <span class="sep">|</span>
        <span style="color:var(--muted2)">@uncledullaz</span>
      </div>
    </div>
  </div>
  <div class="pb">
    <div class="pt"><div class="pf rc" style="width:PCT%"></div></div>
    <span class="pl rc">01&nbsp;/&nbsp;NN</span>
  </div>
</div>
```

**Cover rules:**
- `.dp-row` and `.cover-taglines` → direct children of `.sp-cover`
- `.cover-taglines` gets `margin-top:36px` via CSS (already in §4)
- `.content` → `h1.bh.xl` + `p.cmt` only — NO logos inside `.content`
- `.cover-bottom` → `margin-top:auto` pushes it to the bottom; contains `.cover-logo-row` + `.ibar`
- `.cover-logo-row` → both logos side by side, centred, `gap:24px`
- Each logo: `width:100%; max-width:112.5px; height:auto; display:block`
- `.pb` → sibling of `.sp-cover`, direct child of `.slide` (NOT inside sp-cover)
- Cover heading: `bh xl` (34px) — NOT `bh vis-xl`
- No `logo-row` of any kind at the top of the cover

---

### 5.3 Inner slide logo row (THREE logos — day48+)

All inner slides (1 through N-1, including CTA) use `logo-row--dual` with **three** `.logo-icon` children: project-specific small logo → React → Amazon (wide).

```html
<div class="logo-row logo-row--dual">
  <div class="logo-icon"><img src="../firebase-logo-small.png" alt="Firebase"></div>
  <div class="logo-icon"><img src="../react-logo.svg.png" alt="React"></div>
  <div class="logo-icon"><img src="../amazon-logo.png" alt="Amazon"></div>
</div>
```

CSS sizing (from §4):
- First two icons (`:not(:last-child)`): `30×30px`
- Last icon (`:last-child`): `64×32px`, `object-fit:contain`, `object-position:right center`
- The JS logo swap targets `.logo-icon:last-child img` (Amazon) — unaffected by the Firebase icon being added first

---

### 5.4 Visual update slide

Always `slide lt`. Heading always **"visual update"**. Shows stacked screenshots.

```html
<div class="slide lt" id="slide-N">
  <div class="logo-row logo-row--dual">...</div>
  <div class="sp">
    <div class="stag">VISUAL UPDATE</div>
    <div class="bh vis-xl" style="color:#141210;">visual update</div>
    <div class="pic-stack">
      <div class="pic-item">
        <div class="pic-label">SCREEN NAME</div>
        <img class="pic-img" src="BASE64_DATA_URI" alt="Screen Name">
      </div>
      <!-- repeat for each screenshot -->
    </div>
    <div class="pb">...</div>
  </div>
  <div class="cr tl"></div><div class="cr tr"></div>
  <div class="cr bl"></div><div class="cr br"></div>
</div>
```

- Screenshots: embed as **base64 data URIs** (per-day assets, stable)
- `.pic-img` CSS: `object-fit:contain; object-position:top center; background:#d9deea`
- `pb` lives inside `.sp`

---

### 5.5 Feature / learnings slide

"What I'm Building" or "What I've Learnt". Dark or light. Heading: `bh vis-xl`.

```html
<div class="slide [lt rlt]" id="slide-N">
  <div class="logo-row logo-row--dual">...</div>
  <div class="sp">
    <div class="prompt [rp]"><span class="path">~/project</span><span class="dollar"> $ </span><span class="cmd">context</span></div>
    <div class="stag [rc]">LABEL</div>
    <div class="bh vis-xl">what I'm<br><span class="g">building</span></div>

    <!-- Option A: frow (feature rows with label badges) -->
    <div class="frow">
      <div class="st [rc]">/route</div>
      <div class="txt">
        <span class="ttl">Page title</span>
        <span class="sub">Description with <span class="ic rc">inline code</span></span>
      </div>
    </div>

    <!-- Option B: step (numbered list) -->
    <div class="step">
      <div class="n">1</div>
      <div>
        <span class="ttl">Concept name</span>
        <span class="sub">Explanation with <span class="ic rc">inline code</span></span>
      </div>
    </div>

    <div class="ibar"><span><span class="k">key:</span> value</span></div>
    <div class="pb">...</div>
  </div>
  <div class="cr [rc] tl"></div>...
</div>
```

---

### 5.6 Code slide

Dark or light. Heading: `bh vis-xl`.

```html
<div class="slide [lt rlt]" id="slide-N">
  <div class="logo-row logo-row--dual">...</div>
  <div class="sp">
    <div class="prompt rp"><span class="path">~/project</span><span class="dollar"> $ </span><span class="cmd">filename.jsx</span></div>
    <div class="stag rc">REACT</div>
    <div class="bh vis-xl">topic <span class="rc">heading</span></div>
    <div class="code-block [sm]">
      <span class="file-label">filename.jsx</span>
<span class="cb-kw">import</span> <span class="cb-punc">{</span> <span class="cb-var">X</span> <span class="cb-punc">}</span> <span class="cb-kw">from</span> <span class="cb-str">"module"</span><span class="cb-punc">;</span>
    </div>
    <div class="ibar">...</div>
    <div class="pb">...</div>
  </div>
  <div class="cr [rc] tl"></div>...
</div>
```

**Syntax span classes (dark theme):**

| Class | Colour | Use for |
|-------|--------|---------|
| `.cb-kw` | `#c586c0` purple | `const` `let` `import` `return` `if` |
| `.cb-fn` | `#dcdcaa` yellow | function names, hook calls |
| `.cb-str` | `#ce9178` orange | string literals `"..."` `'...'` |
| `.cb-tag` | `#4ec9b0` teal | JSX tags `<Route>` `<div>` |
| `.cb-attr` | `#9cdcfe` blue | JSX/object attributes |
| `.cb-cm` | `#5a7a52` grey-green | `// comments` |
| `.cb-var` | `#9cdcfe` blue | variables |
| `.cb-punc` | `#808080` grey | `{ } ( ) => ; , .` |
| `.cb-num` | `#b5cea8` light green | numbers |

Light slides remap all `.cb-*` colours automatically via CSS — no HTML changes needed.

**Code block uses `white-space:pre`** — write literal newlines in the HTML source.
Use `<span class="code-divider"></span>` for a thin visual separator between two blocks.

---

### 5.7 CTA slide

Uses the same THREE-icon logo row as all other inner slides.

```html
<div class="slide cta-bg" id="slide-N">
  <div class="logo-row logo-row--dual">
    <div class="logo-icon"><img src="../firebase-logo-small.png" alt="Firebase"></div>
    <div class="logo-icon"><img src="../react-logo.svg.png" alt="React"></div>
    <div class="logo-icon"><img src="../amazon-logo.png" alt="Amazon"></div>
  </div>
  <div class="sp">
    <div class="cmt" style="margin-top:auto;margin-bottom:20px;">
      <span class="slash">//</span> day N complete
    </div>
    <div class="cta-head-row">
      <div class="dp-circle cta-dp"><img src="../insta-dp.jpg" alt="dp"></div>
      <h2 class="bh" style="font-size:28px;line-height:1.15;margin:0;">
        that's a wrap<br>on <span class="g">day N</span>
      </h2>
    </div>
    <div class="cmt">one-line summary of today</div>
    <div style="margin-top:16px;">
      <div class="frow">
        <div class="st">DAY N</div>
        <div class="txt">
          <span class="ttl">Topic headline</span>
          <span class="sub">Key concepts covered today</span>
        </div>
      </div>
    </div>
    <div style="margin-top:auto;padding-bottom:4px;">
      <div class="prompt" style="font-size:12px;margin-bottom:6px;">
        <span class="path">follow</span><span class="dollar"> &gt; </span>
        <span class="cmd">@uncledullaz<span class="cursor-blink"></span></span>
      </div>
      <div style="font-size:10px;color:#555;">#100DaysOfCode &nbsp;#React &nbsp;#JavaScript</div>
    </div>
    <div class="pb">
      <div class="pt"><div class="pf" style="width:100%"></div></div>
      <span class="pl">NN&nbsp;/&nbsp;NN</span>
    </div>
  </div>
  <div class="cr tl"></div><div class="cr tr"></div>
  <div class="cr bl"></div><div class="cr br"></div>
</div>
```

---

## 6. JavaScript block (complete)

Update `SLIDE_COUNT`, logo swap paths, and filename prefix per day. The `last-child` selector always targets Amazon regardless of how many icons precede it.

```javascript
const SLIDE_COUNT = 9; // ← UPDATE per day

const track = document.getElementById('track');
let current = 0;

function drawReactAtom(canvas) {
  const dpr = 4, size = 360;
  canvas.width = size * dpr; canvas.height = size * dpr;
  canvas.style.width = size + 'px'; canvas.style.height = size + 'px';
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  const cx = size/2, cy = size/2, rx = size*0.42, ry = size*0.13;
  ctx.strokeStyle = '#60dcfc'; ctx.lineWidth = size*0.018;
  ctx.shadowColor = '#60dcfc'; ctx.shadowBlur = size*0.06;
  for (let a = 0; a < 3; a++) {
    ctx.save(); ctx.translate(cx, cy); ctx.rotate(a * Math.PI / 3);
    ctx.beginPath(); ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI*2); ctx.stroke();
    ctx.restore();
  }
  ctx.shadowBlur = size*0.1; ctx.fillStyle = '#60dcfc';
  ctx.beginPath(); ctx.arc(cx, cy, size*0.055, 0, Math.PI*2); ctx.fill();
}

window.addEventListener('load', () => {
  const hero = document.getElementById('react-hero-img');
  if (hero) drawReactAtom(hero);

  // ← UPDATE PATHS when project changes
  document
    .querySelectorAll('.slide:not(#slide-0) .logo-row--dual .logo-icon:last-child img')
    .forEach((img) => {
      const slide = img.closest('.slide');
      if (!slide) return;
      img.src = slide.classList.contains('lt')
        ? '../amazon-logo-large.png'
        : '../amazon-logo-large-white.png';
    });
});

function updateSlide(n) {
  current = n;
  track.style.transform = 'translateX(-' + (n * 100) + '%)';
  document.querySelectorAll('.igdot').forEach((d, i) => d.classList.toggle('on', i === n));
}

let startX = 0, dragging = false;
const vp = track.parentElement;
vp.addEventListener('pointerdown', e => { startX = e.clientX; dragging = true; });
vp.addEventListener('pointermove', e => { if (!dragging) return; });
vp.addEventListener('pointerup', e => {
  if (!dragging) return; dragging = false;
  const dx = e.clientX - startX;
  if (Math.abs(dx) > 40) {
    if (dx < 0 && current < SLIDE_COUNT - 1) updateSlide(current + 1);
    else if (dx > 0 && current > 0) updateSlide(current - 1);
  }
});
vp.addEventListener('pointerleave', () => { dragging = false; });
document.querySelectorAll('.igdot').forEach((dot, i) => dot.addEventListener('click', () => updateSlide(i)));
document.getElementById('btn-prev').addEventListener('click', () => { if (current > 0) updateSlide(current - 1); });
document.getElementById('btn-next').addEventListener('click', () => { if (current < SLIDE_COUNT - 1) updateSlide(current + 1); });

async function inlineImagesForExport(clone) {
  const imgs = clone.querySelectorAll('img');
  await Promise.all(Array.from(imgs).map(async img => {
    const src = img.getAttribute('src');
    if (src && !src.startsWith('data:')) {
      try {
        const url = new URL(src, window.location.href).href;
        const r = await fetch(url, { cache: 'force-cache' });
        const blob = await r.blob();
        await new Promise(res => {
          const fr = new FileReader();
          fr.onload = e => { img.src = e.target.result; res(); };
          fr.readAsDataURL(blob);
        });
      } catch(e) { console.warn('Could not inline:', src); }
    }
  }));
}

async function captureSlide(slideEl) {
  const isLight = slideEl.classList.contains('lt');
  const wrapper = document.createElement('div');
  Object.assign(wrapper.style, {
    position: 'fixed', left: '-9999px', top: '0',
    width: '480px', height: '640px', overflow: 'hidden',
    background: isLight ? '#F5F5EF' : '#000000'
  });
  const clone = slideEl.cloneNode(true);
  Object.assign(clone.style, { width: '480px', height: '640px', minWidth: '480px', position: 'relative' });
  const killAnim = document.createElement('style');
  killAnim.textContent = '* { animation: none !important; transition: none !important; }';
  clone.appendChild(killAnim);
  wrapper.appendChild(clone);
  document.body.appendChild(wrapper);
  try {
    await inlineImagesForExport(clone);
    const srcCanvases = slideEl.querySelectorAll('canvas');
    const dstCanvases = clone.querySelectorAll('canvas');
    srcCanvases.forEach((src, i) => {
      if (dstCanvases[i]) {
        dstCanvases[i].width = src.width; dstCanvases[i].height = src.height;
        dstCanvases[i].style.width = src.style.width; dstCanvases[i].style.height = src.style.height;
        dstCanvases[i].getContext('2d').drawImage(src, 0, 0);
      }
    });
    const hero = clone.querySelector('.react-hero');
    if (hero) hero.style.filter = 'none';
    return await html2canvas(clone, {
      width: 480, height: 640, scale: 2.25,
      useCORS: true, allowTaint: false,
      backgroundColor: null, scrollX: 0, scrollY: 0, logging: false
    });
  } finally {
    document.body.removeChild(wrapper);
  }
}

function downloadCanvas(canvas, filename) {
  const a = document.createElement('a');
  a.download = filename; a.href = canvas.toDataURL('image/png'); a.click();
}

async function downloadSingle(i) {
  const btn = document.getElementById('dl-' + i);
  try {
    btn.disabled = true;
    document.body.classList.add('exporting');
    const canvas = await captureSlide(document.getElementById('slide-' + i));
    downloadCanvas(canvas, 'dayNN_slide_' + String(i+1).padStart(2,'0') + '.png'); // ← UPDATE dayNN
  } finally {
    document.body.classList.remove('exporting');
    btn.disabled = false;
  }
}
document.querySelectorAll('.dl-single').forEach((btn, i) => btn.addEventListener('click', () => downloadSingle(i)));

document.getElementById('dl-all').addEventListener('click', async () => {
  const btn = document.getElementById('dl-all');
  try {
    btn.disabled = true;
    document.body.classList.add('exporting');
    for (let i = 0; i < SLIDE_COUNT; i++) {
      btn.textContent = 'exporting ' + (i+1) + ' / ' + SLIDE_COUNT + '...';
      const canvas = await captureSlide(document.getElementById('slide-' + i));
      downloadCanvas(canvas, 'dayNN_slide_' + String(i+1).padStart(2,'0') + '.png'); // ← UPDATE
      await new Promise(r => setTimeout(r, 300));
    }
  } finally {
    document.body.classList.remove('exporting');
    btn.disabled = false;
    btn.textContent = 'download all ' + SLIDE_COUNT + ' slides';
  }
});
```

---

## 7. Progress bar reference

`pct = (slideIndex + 1) / totalSlides * 100`

| N slides | Increment | Values |
|----------|-----------|--------|
| 8 | 12.5% | 12.5, 25.0, 37.5, 50.0, 62.5, 75.0, 87.5, 100.0 |
| 9 | 11.1% | 11.1, 22.2, 33.3, 44.4, 55.6, 66.7, 77.8, 88.9, 100.0 |
| 10 | 10.0% | 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 |

Dark slides → `pf rc` + `pl rc`. Light slides → `pf` + `pl` (CSS handles colour). CTA → `pf` + `pl` (no `.rc`).

---

## 8. Design rules

### Heading size rule
| Where | Class | Size |
|-------|-------|------|
| Cover h1 | `bh xl` | 34px |
| Every content slide h2 | `bh vis-xl` | 42px |
| CTA h2 | inline `font-size:28px` | 28px |

**Use `bh vis-xl` on ALL content slide headings.** Never `bh sm` for main headings.

### Dark / light pattern
- Slide 0: dark (cover)
- Alternate: slide 1 light, 2 dark, 3 light, 4 dark…
- Last slide: dark (CTA)

React-themed light slides: `class="slide lt rlt"`. Visual-update slide: `class="slide lt"` (no `rlt`).

### Corner marks
| Slide type | Markup |
|------------|--------|
| Dark React/code slides | `<div class="cr rc tl">` (cyan) |
| Light slides (lt/rlt) | `<div class="cr tl">` (CSS sets colour) |
| Cover | `<div class="cr tl">` (green) |
| CTA | `<div class="cr tl">` (green) |

### Logo rules
- **Cover:** No `logo-row` at top. Logos in `.cover-bottom > .cover-logo-row` (bottom, side by side, centred).
- **All other slides (1 through N including CTA):** `logo-row logo-row--dual` with THREE icons — project-small → React → Amazon.
- Amazon icon always last — JS swap targets `:last-child`.

### Content rules
- Never add accent lines under headings
- `.prompt` sets the terminal context (path + command)
- `.stag` is the small category label above the heading
- Only add `.cmt` if it genuinely adds info not covered by the heading

---

## 9. Image handling

| Image | Path | Approach |
|-------|------|----------|
| DP (cover + CTA) | `../insta-dp.jpg` | Relative path |
| Amazon wide white (cover logos) | `../amazon-logo-large-white.png` | Relative, `.cover-logo-row` |
| Firebase wide (cover logos) | `../firebase-logo.svg.png` | Relative, `.cover-logo-row` |
| Firebase small (logo rows) | `../firebase-logo-small.png` | Relative, first icon in DUAL |
| React (logo rows) | `../react-logo.svg.png` | Relative, second icon in DUAL |
| Amazon square (logo rows, wide slot) | `../amazon-logo.png` | Relative, last icon — JS swaps to large |
| Screenshots (visual slide) | inline | **Base64 data URIs** |

All relative paths resolved via `inlineImagesForExport` using `new URL(src, window.location.href)` — requires serving from `http://localhost`.

---

## 10. Python generation pattern

```python
import base64, os

CTX = '/path/to/0-claude-context'
OUT = CTX + '/day-XX/dayXX_carousel.html'

def b64(path):
    with open(path, 'rb') as f:
        return 'data:image/png;base64,' + base64.b64encode(f.read()).decode()

N = 9  # slide count

def pb(i, rc=True):
    c = ' rc' if rc else ''
    pct = (i+1)/N*100
    return ('<div class="pb"><div class="pt">'
            '<div class="pf%s" style="width:%.1f%%"></div></div>'
            '<span class="pl%s">%02d&nbsp;/&nbsp;%02d</span></div>') % (c, pct, c, i+1, N)

def cr4(rc=False):
    c = ' rc' if rc else ''
    return ('<div class="cr%s tl"></div><div class="cr%s tr"></div>'
            '<div class="cr%s bl"></div><div class="cr%s br"></div>') % (c,c,c,c)

# THREE-icon dual row for Amazon Clone
DUAL = (
    '<div class="logo-row logo-row--dual">'
    '<div class="logo-icon"><img src="../firebase-logo-small.png" alt="Firebase"></div>'
    '<div class="logo-icon"><img src="../react-logo.svg.png" alt="React"></div>'
    '<div class="logo-icon"><img src="../amazon-logo.png" alt="Amazon"></div>'
    '</div>'
)
```

- Use `%` formatting — **not f-strings** — for HTML strings containing `{}` JSX braces
- Build slides as individual string variables (`s0`, `s1`…) and concatenate with `+`
- `%` in inline CSS (`width:100%`) is a plain literal — only escape as `%%` inside active `%` format calls
- JS block: raw string `r"""..."""` so `${...}` template literals pass through
- Write to: `day-XX/dayXX_carousel.html`

---

## 11. Generation checklist

- [ ] `SLIDE_COUNT` matches actual slide count
- [ ] Progress bar `width:PCT%` correct for each slide index
- [ ] Dot count = slide count, first dot has `class="igdot on"`
- [ ] `dl-single` button count = slide count
- [ ] Cover: no `logo-row` at top; logos in `.cover-bottom > .cover-logo-row`; `.pb` is sibling of `.sp-cover`
- [ ] Cover logos: both `max-width:112.5px`, side by side in `.cover-logo-row`
- [ ] Inner slides 1–N: `logo-row logo-row--dual` with THREE icons (firebase-small → react → amazon)
- [ ] CTA slide: same THREE-icon `logo-row--dual`
- [ ] Cover heading: `bh xl` (34px); all content headings: `bh vis-xl` (42px)
- [ ] No `\!` in JS — plain `!` only
- [ ] `allowTaint: false` in html2canvas
- [ ] `try/finally` on `captureSlide`, `downloadSingle`, and `downloadAll`
- [ ] JS logo swap: `.slide:not(#slide-0) .logo-row--dual .logo-icon:last-child img` (last = Amazon)
- [ ] Screenshots on visual slide: base64 data URI, `object-fit:contain; object-position:top center; background:#d9deea`
- [ ] No accent lines under headings
- [ ] No redundant `.cmt` repeating the heading

---

## 12. Slide type library

| Type | Role | Key classes |
|------|------|-------------|
| Cover | Day hook, project, atom hero | `.sp-cover`, `.dp-row`, `.cover-taglines`, `.content`, `.cover-bottom`, `.cover-logo-row`, `bh xl` |
| Visual update | App screenshots stacked | `slide lt`, `bh vis-xl`, `.pic-stack`, `.pic-item`, `.pic-img` |
| What I'm Building | Project pages / features | `.frow`, `.st`, `bh vis-xl` |
| What I've Learnt | Numbered concepts | `.step`, `.n`, `bh vis-xl` |
| Code snippet | Syntax-highlighted code | `.code-block`, `.cb-*`, `bh vis-xl` |
| CTA | Follow + wrap-up | `slide cta-bg`, `.cta-head-row`, `.dp-circle.cta-dp` |

---

## 13. Day index

| Day | File | Project | Topics |
|-----|------|---------|--------|
| 43 | day43_carousel.html | Google Keep | Arrow functions, event handling, useState |
| 44 | day44_carousel.html | Google Keep | Two-way binding, controlled inputs |
| 45 | day45_carousel.html | Google Keep | State, lists, conditional rendering, prevState |
| 46 | day46_carousel.html | Google Keep | Inline styles, modals, child→parent |
| 47.2 | day47.2_carousel.html | Amazon Clone | React Router, Routes/Route, Link/NavLink, useParams |
| **48** | **day48_carousel.html ⭐** | **Amazon Clone** | **Redirect, dummy data, NotFound, firebase setup** |

⭐ = current golden reference

---

## 14. Project-specific — Amazon Clone (day 47.2+)

### Logo assets

| Asset | File | Used on |
|-------|------|---------|
| Amazon wide white | `../amazon-logo-large-white.png` | Cover `.cover-logo-row` + JS swap (dark slides) |
| Amazon wide colour | `../amazon-logo-large.png` | JS swap (light slides) |
| Amazon square | `../amazon-logo.png` | Last icon in all inner logo rows (wide slot) |
| Firebase wide | `../firebase-logo.svg.png` | Cover `.cover-logo-row` only |
| Firebase small | `../firebase-logo-small.png` | First icon in all inner logo rows |
| React logo | `../react-logo.svg.png` | Second icon in all inner logo rows |

### Cover logo markup

```html
<div class="cover-logo-row">
  <img src="../amazon-logo-large-white.png" alt="Amazon Clone"
       style="width:100%;max-width:112.5px;height:auto;display:block;">
  <img src="../firebase-logo.svg.png" alt="Firebase"
       style="width:100%;max-width:112.5px;height:auto;display:block;">
</div>
```

### Inner slide logo row

```html
<div class="logo-row logo-row--dual">
  <div class="logo-icon"><img src="../firebase-logo-small.png" alt="Firebase"></div>
  <div class="logo-icon"><img src="../react-logo.svg.png" alt="React"></div>
  <div class="logo-icon"><img src="../amazon-logo.png" alt="Amazon"></div>
</div>
```

### JS logo swap

```javascript
document
  .querySelectorAll('.slide:not(#slide-0) .logo-row--dual .logo-icon:last-child img')
  .forEach((img) => {
    const slide = img.closest('.slide');
    if (!slide) return;
    img.src = slide.classList.contains('lt')
      ? '../amazon-logo-large.png'
      : '../amazon-logo-large-white.png';
  });
```

### Cover ibar

```html
<span><span class="k">stack:</span> react &middot; vite &middot; firebase</span>
```

---

*End of Context — golden file: `day-48/day48_carousel.html`*
