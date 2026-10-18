# C2P Tech Hub — Independent Website Concept

An independently designed, responsive C2P Tech Hub landing page, intended for a standalone GitHub repository under `nujoka1`. It is **not** a SIMS module.

## Preview

Open `index.html` in a browser, or run `python3 -m http.server 8080` in this directory and browse to `http://localhost:8080`.

## Publish to GitHub

1. Create an empty GitHub repository named `c2p-tech-hub` under `nujoka1` (do not initialize a README).
2. In this directory run:

```bash
git init
git branch -M main
git add .
git commit -m "feat: initial independent C2P Hub website"
git remote add origin https://github.com/nujoka1/c2p-tech-hub.git
git push -u origin main
```

3. Deploy as a static site on Vercel, Cloudflare Pages, or GitHub Pages. There is no build step; publish the repository root.

## Before launch

- Replace `contact@example.org` with a verified official contact address.
- Confirm permission to represent the hub and verify all branding/institutional claims.
- Replace showcase placeholders with approved real project profiles and photographs.
- Add content privacy, accessibility, mobile and link validation checks.
- This original design does not copy HTML, CSS, images or branding files from `Stein-ark/coen554`.

## Stack

Vanilla HTML5, CSS3, a minimal JavaScript enhancement. No package dependencies or backend.
