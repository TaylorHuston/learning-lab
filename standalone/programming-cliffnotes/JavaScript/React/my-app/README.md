# React App

A canonical React reference app built from small examples pulled from React tutorials and documentation. The goal is informational: each example should isolate one React concept and make the source easy to inspect.

## Running

```bash
npm install
npm run dev
```

Use these checks after changes:

```bash
npm run lint
npm run build
```

## Code Map

| Path | Purpose |
|---|---|
| `index.html` | Vite HTML shell with the `#root` mount point. |
| `src/main.jsx` | React entry point. Creates the root and renders `<App />` inside `<StrictMode>`. |
| `src/App.jsx` | Example gallery shell. Owns the active-example state, navigation metadata, and selected example rendering. |
| `src/App.css` | App-specific layout and minimal dark theme styles. |
| `src/index.css` | Global document defaults, base font, and dark background. |
| `src/examples/` | Individual concept demos. Each file should focus on one React idea. |
| `src/assets/` | Static assets imported by components. |
| `public/` | Static assets served directly by Vite. |

## Example Components

| File | Concept |
|---|---|
| `src/examples/Counter.jsx` | Basic `useState`, event handling, and re-rendering. |
| `src/examples/Profile.jsx` | JSX expressions, attributes, image rendering, and inline styles. |
| `src/examples/Conditional.jsx` | Conditional rendering with ordinary JavaScript. |
| `src/examples/Lists.jsx` | Rendering arrays and using stable keys. |
| `src/examples/IndependentState.jsx` | Separate component instances owning separate state. |
| `src/examples/SharedState.jsx` | Lifting state up and passing state through props. |
| `src/examples/ShoppingList.jsx` | Thinking in React: filtering, component decomposition, and derived UI. |
| `src/examples/TicTacToe.jsx` | Immutable updates, history state, and deriving UI from state. |

## Adding An Example

1. Create a focused component in `src/examples/ExampleName.jsx`.
2. Export the component as the default export.
3. Import it in `src/App.jsx`.
4. Add one entry to the `examples` array with `id`, `title`, `summary`, and `component`.
5. Run `npm run lint` and `npm run build`.

Keep comments educational. Explain React-specific decisions such as state ownership, props, keys, effects, and immutable updates. Avoid comments that only restate the syntax.
