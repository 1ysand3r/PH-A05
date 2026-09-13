# Dev Stack 🧩

A little playground app for exploring frontend, backend, database, and tooling options — and putting together the "stack" you'd actually want to build your next project with.

Pick a few technologies you like, add them to your stack, swap things out, and clear it whenever you want to start over. Nothing gets saved anywhere (yet), it's just a fun way to compare tools side by side.

## What's in here

- **Hero section** with a quick pitch and call-to-action buttons
- **Explore the Technologies** — a grid of cards (React, Vue, Svelte, Node, Postgres, Redis, Docker, and more), each with a short description, category, difficulty level, and rating
- **Your Stack** — a running list on the side that fills up as you click "Add to Stack," with a way to remove one item or clear everything

## Built with

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- daisyUI

## Getting started

```bash
npm install
npm run dev
```

That'll spin up a local dev server — open the URL it gives you and you're good to go.

To build for production:

```bash
npm run build
```

## Project structure

```
public/
  technologies.json   # the actual tech data — icons, badges, ratings, etc.
src/
  App.tsx
  Header.tsx
  Banner.tsx
  Technologies.tsx    # fetches technologies.json and manages "Your Stack"
  TechCard.tsx         # one technology card
  YourStack.tsx         # the sidebar showing what you've picked
  Footer.tsx
  index.css
```

## How the Technologies section works

The list of technologies isn't hardcoded — `Technologies.tsx` fetches `technologies.json` from the `public` folder and reads it with React's `use()` hook (wrapped in a `<Suspense>` so it shows a loading state while the fetch is happening).

The "Your Stack" side panel is just local state (`useState`), so adding a card pushes it into an array, and the ✕ button filters it back out. Nothing fancy — no global state library, no backend. If you want to persist a stack across page reloads, that'd be the next logical thing to add (localStorage would do the trick).

## Wishlist / things that could be nicer

- Only letting one technology be picked per category (frontend, database, etc.) like the "Pick one technology per category" line suggests
- Saving the stack somewhere so it survives a refresh
- Actual routing for Technologies / Projects / About / Contact instead of placeholder nav links
- Real brand icons instead of emoji stand-ins for each logo

## License

Personal project — do whatever you want with it.
