# Essor School Website

A bilingual (Arabic / English) website for Essor School — plain HTML/CSS/JS,
no build step, mobile-first, with full RTL/LTR layout switching.

## Project structure

```
essor/
├── index.html          Home
├── about.html           About
├── events.html          Events
├── articles.html        Articles
├── contact.html         Contact
├── assets/
│   ├── css/style.css    Design system (colors, type, components, RTL/LTR)
│   ├── js/i18n.js        Arabic/English dictionary + language switching
│   ├── js/main.js        Mobile nav, scroll reveal, filters, form demo
│   ├── images/
│   │   ├── brand/        Logo, favicon
│   │   └── events/       Event photos (webp + jpg pairs)
│   └── videos/           Put event videos here when ready (see below)
├── _source/              Original uploaded files + the image-processing
│                         script. NOT deployed (see .vercelignore).
├── vercel.json
└── .vercelignore
```

## How the language switch works

- Arabic is the default language and reading direction (RTL).
- Every piece of translatable text lives in **one place**:
  [assets/js/i18n.js](assets/js/i18n.js). HTML elements just carry a
  `data-i18n="some.key"` attribute — they don't contain hardcoded text logic.
- **To edit any text on the site** (including English text), open
  `i18n.js` and edit the `ar` / `en` objects. You never need to touch the
  HTML files for copy changes.
- Clicking the language button flips `<html lang dir>` between
  `ar`/`rtl` and `en`/`ltr`. The whole layout — not just the text —
  mirrors correctly because the CSS uses logical properties
  (`margin-inline-start`, `padding-inline`, etc.) instead of `left`/`right`.
- The choice is remembered in `localStorage`, and a small inline script in
  every page's `<head>` applies it immediately so there's no flash of the
  wrong direction on reload.

## Adding content

### Events (`events.html`)
Each event is a `<article class="card media-card" data-category="...">`.
Duplicate one of the existing cards, swap the image, and add the two
matching translation keys (`events.eXtitle` / `events.eXtext`) in `i18n.js`.
`data-category` controls the filter buttons at the top of the page.

### Articles (`articles.html`)
Same pattern as Events, using the `articles.*` keys.

### Photos
Run `python _source/process_images.py` any time you drop new source photos
into `_source/` — it resizes them and outputs optimized WebP + JPEG pairs
into `assets/images/`. (Requires Python + Pillow: `pip install pillow`.)
You can also just optimize images yourself (e.g. with Squoosh.app) and drop
them straight into `assets/images/events/`.

### Videos
A source event video is already sitting in `_source/event-video-source.mp4`,
ready for whenever you want it live. To add it:
1. Compress it for the web (e.g. with [Squoosh](https://squoosh.app) or
   HandBrake — aim for well under 10MB for a short clip).
2. Put the compressed file in `assets/videos/`.
3. Add a `<video controls preload="none" poster="...">` tag on the Events
   page (there's a placeholder "videos coming soon" banner there marking
   where it should go).

### Contact form
The form in `contact.html` currently just shows a "thank you" message
locally — a static site has no server to receive submissions. To actually
receive messages, the easiest free option is
[Formspree](https://formspree.io):
1. Create a free Formspree account and a new form, get your form endpoint
   (`https://formspree.io/f/xxxxxxx`).
2. In `contact.html`, change `<form class="contact-form" data-contact-form novalidate>`
   to add `action="https://formspree.io/f/xxxxxxx" method="POST"`.
3. Remove `data-contact-form` if you'd rather let Formspree handle the
   redirect/confirmation instead of the local JS message in `main.js`.

### Map
`contact.html` embeds a generic Lebanon map as a placeholder. Replace the
`src` of the `<iframe class="map-frame">` with your school's real Google
Maps embed link (Google Maps → Share → Embed a map → copy the `src` URL).

## Running it locally

No build step — but opening `index.html` directly (`file://`) will block
some fetches in certain browsers, so serve it locally instead:

```bash
# Python
python -m http.server 5500
# or Node
npx serve .
```

Then open `http://localhost:5500`.

## Deploying to Vercel (free)

**Option A — GitHub + Vercel dashboard (recommended)**
1. Create a new GitHub repository and push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "Initial Essor School site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and sign up/log in (the Hobby
   plan is free).
3. Click **Add New → Project**, select your GitHub repo, and import it.
4. Framework preset: choose **Other** (it's a static site — no build
   command, no output directory needed).
5. Click **Deploy**. Vercel gives you a free `your-project.vercel.app`
   URL immediately.
6. (Optional) In the project's **Settings → Domains**, add your own
   custom domain if the school has one.

Every future `git push` to `main` automatically redeploys the site.

**Option B — Vercel CLI (no GitHub needed)**
```bash
npm install -g vercel
vercel        # first run: log in, link/create the project
vercel --prod # deploy to your production URL
```

Both options are free for a site like this (static files, no server
functions, well within Vercel's Hobby plan limits).
