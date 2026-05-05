import { useState } from "react";
import "./App.css";
import Conditional from "./examples/Conditional.jsx";
import Counter from "./examples/Counter.jsx";
import IndependentState from "./examples/IndependentState.jsx";
import Lists from "./examples/Lists.jsx";
import Profile from "./examples/Profile.jsx";
import SharedState from "./examples/SharedState.jsx";
import ShoppingList from "./examples/ShoppingList.jsx";
import TicTacToe from "./examples/TicTacToe.jsx";

// The gallery is data-driven: adding a new reference example should only require
// importing the component and adding one object to this list. Keeping navigation
// metadata beside the component makes the app easier to scan as it grows.
const examples = [
  {
    id: "counter",
    title: "Counter",
    summary: "State updates, event handlers, and React's re-render cycle.",
    component: Counter,
  },
  {
    id: "profile",
    title: "Profile",
    summary: "JSX expressions, attributes, image rendering, and inline style objects.",
    component: Profile,
  },
  {
    id: "conditional",
    title: "Conditional Rendering",
    summary: "Choosing what UI to render from ordinary JavaScript conditions.",
    component: Conditional,
  },
  {
    id: "lists",
    title: "Lists and Keys",
    summary: "Rendering arrays with stable keys and item-specific styling.",
    component: Lists,
  },
  {
    id: "independent-state",
    title: "Independent State",
    summary: "Two component instances, each owning its own state value.",
    component: IndependentState,
  },
  {
    id: "shared-state",
    title: "Shared State",
    summary: "Lifting state up so sibling components stay synchronized.",
    component: SharedState,
  },
  {
    id: "shopping-list",
    title: "Thinking in React",
    summary: "A filterable product table built from small, focused components.",
    component: ShoppingList,
  },
  {
    id: "tic-tac-toe",
    title: "Tic Tac Toe",
    summary: "Immutable updates, history state, and deriving UI from previous moves.",
    component: TicTacToe,
  },
];

export default function App() {
  const [activeExampleId, setActiveExampleId] = useState(examples[0].id);
  const activeExample = examples.find((example) => example.id === activeExampleId) ?? examples[0];
  const ActiveExampleComponent = activeExample.component;

  return (
    <main className="app-shell">
      <header className="hero-panel">
        <p className="eyebrow">React reference lab</p>
        <h1>Canonical examples for the core React mental model.</h1>
        <p className="hero-copy">
          Pick an example to see one concept in isolation. The app shell itself is
          also a reference: state chooses the active example, metadata drives the
          navigation, and React renders the selected component.
        </p>
      </header>

      <section className="workspace" aria-label="React examples">
        <nav className="example-nav" aria-label="Example picker">
          {examples.map((example) => {
            const isActive = example.id === activeExample.id;

            return (
              <button
                className={isActive ? "example-tab active" : "example-tab"}
                type="button"
                key={example.id}
                onClick={() => setActiveExampleId(example.id)}
                aria-pressed={isActive}
              >
                <span>{example.title}</span>
                <small>{example.summary}</small>
              </button>
            );
          })}
        </nav>

        <article className="example-stage">
          <div className="example-heading">
            <p className="eyebrow">Selected example</p>
            <h2>{activeExample.title}</h2>
            <p>{activeExample.summary}</p>
          </div>

          <div className="example-card">
            <ActiveExampleComponent />
          </div>
        </article>
      </section>
    </main>
  );
}
