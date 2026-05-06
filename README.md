# Dhruv Prajapati — Portfolio

Minimal dark, typography-focused one-page portfolio. Plain HTML + CSS + JS — no build step. Open `Portfolio.html` in a browser, or serve the folder.

## Editing guide

All content lives in **`Portfolio.html`** as straightforward semantic HTML. To change copy, projects, skills, or contact details, edit it directly — there's no template language and no JSX for the page itself.

### Files

```
Portfolio.html              # Page markup. Edit content here.
README.md

styles/
  tokens.css                # Design tokens (colors, fonts, density vars)
  base.css                  # Resets, body type, focus, motion
  layout.css                # .shell, nav, sections, footer
  components.css            # Hero, buttons, projects, skills, contact, opps
  moods.css                 # Theme presets (Graphite/Paper/Terminal/Midnight)

scripts/
  nav.js                    # Active section + hide-on-scroll-down
  reveal.js                 # IntersectionObserver-driven .reveal → .in
  tweaks-bridge.js          # Applies tweak defaults on first paint (no flash)
  portfolio-tweaks.jsx      # React Tweaks panel (Mood / Density / Hero)

tweaks-panel.jsx            # Generic tweaks UI primitives (TweaksPanel,
                            # TweakSection, TweakRadio, useTweaks, …)

uploads/
  Dhruv_Prajapati_Resume.pdf
```

### Common edits

- **Hero copy** → edit `<section id="hero">` in `Portfolio.html`.
- **Skills** → edit the `.skill-row` blocks in `<section id="skills">`.
- **Projects** → edit the `<a class="project">` blocks. Metrics, stack, year, description all inline.
- **Contact** → edit `<section id="contact">` rows. Each row has `k` (key), `v` (value), and a link.
- **Default theme** → change `data-mood`/`data-density`/`data-hero` on `<html>`, *and* the matching keys in the `EDITMODE-BEGIN` JSON block near the bottom. They must agree to avoid a first-paint flash.
- **Add a new mood** → add a `html[data-mood="myname"] { ... }` block to `styles/moods.css` and a new option to `scripts/portfolio-tweaks.jsx`.
- **Tweak the layout density numbers** → edit the `[data-density="…"]` blocks in `styles/tokens.css`.

### Tweaks (in-page controls)

Toggle the **Tweaks** button in the toolbar to surface the live controls panel. Changes are persisted by rewriting the JSON inside the `EDITMODE-BEGIN`…`EDITMODE-END` markers in `Portfolio.html`.

### Verifying

Open `Portfolio.html` in a browser. No build, no install. The fonts are pulled from Google Fonts; everything else is local.
