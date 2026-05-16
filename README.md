# Luci Beauty LA

A modern, elegant beauty studio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui-style (Button, Card, Input, Textarea)
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd lucibeauty-la
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  app/
    layout.tsx          ← Root layout with Navbar + Footer
    page.tsx            ← Home page (Hero + Services overview + CTA)
    globals.css         ← Global styles & custom scrollbar
    services/
      page.tsx          ← Full service menu with pricing tags
    portfolio/
      page.tsx          ← Work portfolio grid with category badges
    contact/
      page.tsx          ← Contact form + Calendly booking placeholder
  components/
    Navbar.tsx          ← Fixed nav with mobile hamburger menu
    Footer.tsx          ← Footer with links, contact info & social icons
    ui/
      button.tsx        ← Button component (default / outline / ghost)
      card.tsx          ← Card, CardHeader, CardContent, CardFooter
      input.tsx         ← Styled text input
      textarea.tsx      ← Styled textarea
  lib/
    utils.ts            ← cn() utility (clsx + tailwind-merge)
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Hero, stats bar, featured services, about section, CTA |
| `/services` | Full service menu with icons, descriptions, pricing & tags |
| `/portfolio` | Image grid with category filters (visual) and tags |
| `/contact` | Contact info cards, booking form, and Calendly placeholder |

## Customization

### Adding Calendly

In `src/app/contact/page.tsx`, find the comment block:
```tsx
{/* CALENDLY EMBED — paste your Calendly inline widget script here */}
```
Replace the placeholder `<div>` with your Calendly inline embed snippet from
[calendly.com/app/admin/integrations](https://calendly.com/app/admin/integrations).

### Updating Colors

The full color palette lives in `tailwind.config.ts` under `theme.extend.colors.studio`:

| Token | Value | Usage |
|-------|-------|-------|
| `studio-bg` | `#1A1210` | Page background |
| `studio-surface` | `#231915` | Cards, nav, footer |
| `studio-card` | `#2C1F19` | Card backgrounds |
| `studio-border` | `#3D2D23` | Borders & dividers |
| `studio-accent` | `#C8882A` | Primary amber gold |
| `studio-accent-hover` | `#DDA040` | Hover state |
| `studio-text` | `#F0EBE5` | Primary text |
| `studio-muted` | `#A08878` | Secondary text |
| `studio-subtle` | `#6E5A50` | Placeholder / quiet text |

### Replacing Placeholder Images

All images use `https://placehold.co` URLs. Swap them with real paths or external URLs in:
- `src/app/page.tsx` — Hero and studio shot
- `src/app/portfolio/page.tsx` — All 9 portfolio items

### Form Submission

The contact form in `src/app/contact/page.tsx` calls `handleSubmit` which currently
just shows a success state. Wire it to your preferred backend (Resend, Formspree,
EmailJS, etc.) by replacing the comment inside `handleSubmit`.

## Build for Production

```bash
npm run build
npm start
```

## Deploy

This site is fully static-compatible. Deploy in one click to Vercel:

```bash
npx vercel
```

Or export as static HTML:

```bash
npm run build
# output is in .next/ for Vercel/Node, or configure output: 'export' in next.config.mjs for plain static hosting
```
