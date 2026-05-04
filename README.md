# GoToTrafficSchool — React Web App

Pixel-faithful React rebuild of the GoToTrafficSchool.com pages provided as PDFs.

Stack: **Vite + React 18 + Tailwind CSS + React Router + lucide-react**.

## Pages

| Route             | File                       | Source PDF              |
| ----------------- | -------------------------- | ----------------------- |
| `/about`          | `src/pages/About.jsx`      | About us.pdf            |
| `/how-it-works`   | `src/pages/HowItWorks.jsx` | How It works.pdf        |
| `/partner`        | `src/pages/Partner.jsx`    | Partner with us.pdf     |
| `/contact`        | `src/pages/Contact.jsx`    | Contact Us.pdf          |
| `/faq`            | `src/pages/FAQ.jsx`        | FAQ.pdf                 |
| `/faq/alabama`    | `src/pages/StateFAQ.jsx`   | State FAQ.pdf           |

`/` redirects to `/about`.

## Shared layout

- `src/components/TopBar.jsx` — dark "SHARE THIS PAGE / Contact Us" bar
- `src/components/Header.jsx` — logo + nav + Log In, fully responsive (hamburger on mobile)
- `src/components/Footer.jsx` — Company / Legal / Follow Us, copyright bar
- `src/components/CTABand.jsx` — reusable dark blue CTA banner used across pages
- `src/components/LanguageSelector.jsx` — "Select Language: English (US)" dropdown
- `src/components/Logo.jsx` — inline-SVG logo

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
```

## Notes

- Forms (Contact, Partner) are UI-only; submission is a no-op placeholder.
- Icons come from `lucide-react`; logo and a couple of decorative illustrations are inline SVG.
- Tailwind brand palette is in `tailwind.config.js` (`brand.navy`, `brand.blue`, `brand.orange`, etc.).
- Fully responsive: tested layout breakpoints at `sm`, `md`, `lg`.
