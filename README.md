# Vision Ply — MERN Rebuild

A React + Node/Express + MongoDB rebuild of the client's existing site
(visionply.com), restyled in the single-page, content-rich layout of
bhalothiaudyog.com. All copy (about text, product list, contact details,
sizes/thickness specs) was pulled from the client's current site and is
seeded into MongoDB rather than hard-coded, so it can be edited without
touching the frontend code.

## Structure

```
vision-ply/
├── backend/     Express API + MongoDB models (Mongoose)
└── frontend/    React app (Vite)
```

## 1. Backend setup

```bash
cd backend
npm install
cp .env.example .env      # then edit MONGODB_URI if not using local Mongo
npm run seed               # loads Vision Ply's real content into the DB
npm run dev                 # starts the API on http://localhost:5000
```

Endpoints:
- `GET /api/company` — company info, about text, features, sizes, brands
- `GET /api/products` — full product list
- `GET /api/products/:slug` — single product
- `POST /api/contact` — contact form submissions (rate-limited)
- `GET /api/contact` — list submissions (for an admin panel later)

## 2. Frontend setup

```bash
cd frontend
npm install
npm run dev    # starts on http://localhost:5173, proxies /api to :5000
```

## 3. Add the client's real images

The seed data references image paths like `/images/products/marine-plywood.jpg`.
Drop the actual photos from visionply.com (or new ones) into:

```
frontend/public/images/products/
frontend/public/images/brands/
frontend/public/images/banners/
frontend/public/images/about/
```

using the exact filenames referenced in `backend/config/seed.js` and
`frontend/src/components/About.jsx`, or update those files to match
whatever filenames you use.

## 4. Editing content

All text (about copy, phone/email, features, standard sizes/thickness,
brand taglines) lives in `backend/config/seed.js`. Re-run `npm run seed`
after editing it, or build a small admin screen against the existing
`PUT /api/company` and `POST/PUT/DELETE /api/products` routes.

## 5. Production build

```bash
cd frontend
npm run build       # outputs frontend/dist
```

Serve `frontend/dist` via any static host (Netlify, Vercel, Nginx) and
point it at the deployed backend by setting the frontend's proxy /
API base URL and the backend's `CLIENT_ORIGIN` env var to your real
domains.

## WhatsApp Cloud API setup

Contact form submissions are saved to MongoDB **and** trigger an automatic
WhatsApp notification to the client's number, sent server-side via Meta's
WhatsApp Cloud API (`backend/services/whatsapp.js`) — no redirect or extra
tap required from the website visitor.

### One-time setup in Meta's dashboard

1. Go to [developers.facebook.com](https://developers.facebook.com) → create
   an App → add the **WhatsApp** product.
2. Under **WhatsApp > API Setup** you'll get a test number for free — note
   its **Phone Number ID**.
3. To send to a real number long-term, add the client's business number
   under **WhatsApp > API Setup > Add phone number** and verify it (this
   migrates the number to the Cloud API — it stops working as a normal
   WhatsApp Business app number on that device once migrated).
4. Create a **System User** (Business Settings > Users > System Users),
   generate a **permanent access token** with `whatsapp_business_messaging`
   permission — this replaces the 24-hour temporary token the dashboard
   shows by default.
5. Create a **message template** (WhatsApp Manager > Message Templates):
   - Category: Utility
   - Name: `new_website_enquiry` (or your own — just match the env var)
   - Body, with 4 variables in this order:
     ```
     New enquiry from the website:
     Name: {{1}}
     Phone: {{2}}
     Email: {{3}}
     Message: {{4}}
     ```
   - Submit for approval (usually minutes to a day).

### Environment variables (`backend/.env`)

```
WHATSAPP_PHONE_NUMBER_ID=<from API Setup page>
WHATSAPP_ACCESS_TOKEN=<permanent System User token>
WHATSAPP_RECIPIENT_NUMBER=917868041691
WHATSAPP_TEMPLATE_NAME=new_website_enquiry
```

If these aren't set, the backend simply skips the WhatsApp step and logs a
warning — the contact form still works and messages still save to MongoDB,
so nothing breaks in the meantime.

### Why a template, not free text?

Meta requires business-initiated messages (i.e. your server messaging the
client "out of the blue") to use a pre-approved template. Free-form text
only works as a *reply* within 24 hours of the other side messaging first.
Since the whole point here is instant, automatic notification, a template
is the correct and only compliant approach — this is a WhatsApp platform
rule, not a limitation of this codebase.

## Design notes

The visual direction moves away from the old template look toward a
timber/veneer palette (espresso brown, honey amber, warm parchment) with
a recurring "plywood cross-section" striped divider between sections —
a nod to the product itself, used in place of a plain horizontal rule.
Fonts: Fraunces (display), Work Sans (body), IBM Plex Mono (specs/labels).
