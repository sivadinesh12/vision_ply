# Vision Ply — Multi-Page Static Site

A React (Vite) site — no backend, no database, and now a real multi-page
app (React Router) instead of a single scrolling page.

## Pages

- `/` — Home
- `/about` — About Us
- `/products` — Products (the 3 catalogues)
- `/products/:slug` — one catalogue's detail page (photos + description),
  reached via "View More" — slugs are `core-veneer`, `short-core-veneer`,
  `core-veneer-scrap`
- `/contact` — Contact Us

## Edit content

Everything — catalogues, about text, contact details, social links,
sizes/thickness — lives in one file:

```
src/data/siteContent.js
```

Edit that file to change any text, add/remove a catalogue, or update a
social link, then rebuild.

## Develop locally

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build for production

```bash
npm run build     # outputs static files to dist/
npm run preview   # preview the production build locally
```

`dist/` is a plain static site. Upload it to Netlify, Vercel, GitHub
Pages, S3, or any static host.

**Important for static hosts:** since this is now a multi-page app using
client-side routing, your host needs to redirect all unknown paths back
to `index.html` (an "SPA fallback" / "rewrite rule"), or a direct visit
to e.g. `/products/core-veneer` will 404. Netlify and Vercel do this
automatically for Vite projects; for others, check their docs for
"SPA redirect" or add a `_redirects` file (`/* /index.html 200` for
Netlify-style hosts).

## Add your images

Drop files into these folders using the filenames already referenced in
the code (see the README.txt in each folder):

```
public/images/catalogues/core-veneer/          cover.jpg, 1.jpg – 4.jpg
public/images/catalogues/short-core-veneer/     cover.jpg, 1.jpg – 4.jpg
public/images/catalogues/core-veneer-scrap/     cover.jpg, 1.jpg – 4.jpg
public/images/about/
public/images/banners/
public/images/brands/
```

Until a photo exists at a given path, that slot shows a clean striped
placeholder instead of a broken image icon — the moment you add the
file, it just works.

`public/images/products/` still has photos from the previous
(finished-plywood) product list. Nothing on the site references that
folder anymore — safe to delete, or keep if you want them for later.

## Social media

The footer and the Contact page show icon links for WhatsApp, Instagram,
X (Twitter), YouTube and LinkedIn — the same platforms as
bhalothiaudyog.com. Update the URLs in `companyInfo.social` inside
`src/data/siteContent.js`.

## Contact form

Doesn't send email or save to a database — it opens WhatsApp with the
visitor's message pre-filled, addressed to `companyInfo.whatsappNumber`
in `src/data/siteContent.js`.
