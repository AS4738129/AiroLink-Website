# AiroLink IT and Security Services Consultancy — Website

A production-ready React + Vite + Tailwind CSS website for AiroLink IT and
Security Services Consultancy (Kumasi, Ghana).

## Tech stack

- React 19 + Vite
- Tailwind CSS
- React Router (client-side routing)
- lucide-react (icons)

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  assets/images/   Logo assets extracted from the AiroLink flyer
  components/      Reusable UI building blocks (Navbar, Footer, cards, forms...)
  data/            Structured content: services.js, industries.js, solutions.js, site.js
  hooks/           useFormState — shared form state/validation hook
  layouts/         MainLayout (Navbar + Footer wrapper used by every page)
  pages/           One file per route (Home, About, Services, ServiceDetail, ...)
  sections/        Larger page sections (currently: Hero)
  utils/           submitLead.js — single place to wire up a real backend/API
```

## Connecting a real backend for forms

The Contact, Request a Quote and Support forms all call `submitLead()` in
`src/utils/submitLead.js`. Until a backend is configured, submissions are
simulated so the UI/UX can be reviewed end-to-end.

To connect a real backend or email service:

1. Set `VITE_LEAD_API_URL` in a `.env` file (copy `.env.example`) to point at
   your backend endpoint or serverless function.
2. That endpoint should accept a `POST` with a JSON body and forward it
   wherever you want (database, email, CRM, Slack, etc).
3. **Never** put API keys or credentials directly in the frontend code —
   keep secrets on the backend that `VITE_LEAD_API_URL` points to.

## AI Agent (chat widget)

Every page includes a floating "AiroLink Assistant" chat widget
(`src/components/AiAgent.jsx`), stacked above the WhatsApp button.

Out of the box, it answers from the site's own content — services,
industries, solutions and FAQs (`src/data/*.js`) — using keyword matching in
`src/utils/chatAgent.js`. No API key or backend is required for this mode,
and it will always give grounded, on-brand answers rather than making things
up.

To upgrade it to a real LLM-backed conversation (e.g. Claude):

1. Build a small backend or serverless function that accepts
   `POST { message, history }` and returns `{ reply, quickReplies?, link? }`.
2. Inside that backend, call the Anthropic API with your API key kept in the
   **server's** environment variables — never in frontend code.
3. Set `VITE_CHAT_API_URL` in `.env` to that endpoint's URL. The widget will
   automatically start using it instead of the local keyword matcher.

This mirrors exactly how the Contact/Quote/Support forms connect to a real
backend via `VITE_LEAD_API_URL` — see `src/utils/submitLead.js`.

## Content notes

Per the project brief, this site does not invent clients, testimonials,
certifications, staff members, office addresses, email addresses, social
media accounts, partnerships, or project statistics. Contact details reflect
only the information provided (phone numbers and Kumasi, Ghana location).
Update `src/data/site.js` as more information (email, physical address,
socials, domain) becomes available.

## SEO

Each page sets its own title/meta description via `src/components/Seo.jsx`.
`public/robots.txt` is included; add a real `sitemap.xml` once the site has a
production domain.
