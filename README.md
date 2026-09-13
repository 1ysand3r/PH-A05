# Dev Stack 🧩

A little playground app for exploring frontend, backend, database, and tooling options — and putting together the "stack" you'd actually want to build your next project with.

Pick a few technologies you like, add them to your stack, swap things out, and clear it whenever you want to start over. Nothing gets saved anywhere (yet), it's just a fun way to compare tools side by side.

Deployed in [Netlify](https://idyllic-llama-1668db.netlify.app/)

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

## Q&A
JSX & why use it: It’s basically HTML inside JavaScript. React uses it so you can structure your UI elements right next to your logic without dealing with tedious DOM methods.

Props vs State: Props are passed down from a parent like function arguments (read-only). State is internal component data that you can change—when state updates, the component re-renders.

useState hook: Lets a component hold onto changing data (like user inputs or toggle switches). You use it whenever you need the UI to update dynamically when something changes.

useEffect hook: Runs side effects, like fetching data or setting timers. You use it to load JSON after the component renders so you don't trigger an infinite rendering loop.

Unique key prop: React uses key to track which list items changed, got added, or removed. Without unique keys, React gets confused reordering items and causes weird UI bugs.

Conditional rendering: Showing different UI based on a condition (like if/else). E.g., rendering an empty message when a list is empty:

JavaScript
```
{items.length === 0 ? <p>Nothing here yet!</p> : <ItemList items={items} />}
```
Passing data up/down: Parent sends data down to child via props. To send data back up, parent passes a function as a prop, and the child calls that function with the new data.
## License

Personal project — do whatever you want with it.
