import Conditional from "./Conditional.jsx";
import Counter from "./Counter.jsx";
import IndependentState from "./IndependentState.jsx";
import Lists from "./Lists.jsx";
import Profile from "./Profile.jsx";
import SharedState from "./SharedState.jsx";
import ShoppingList from "./ShoppingList.jsx";
import TicTacToe from "./TicTacToe.jsx";

// This array is the canonical reading order for the reference app.
// The live UI uses the same list, so the app and the source code stay aligned.
// Later phases can rename files/folders to match these concepts more directly.
export const learningPath = [
  {
    id: "rendering-jsx",
    step: 1,
    title: "Rendering JSX",
    sourcePath: "src/examples/Profile.jsx",
    summary: "JSX expressions, attributes, image rendering, and inline style objects.",
    component: Profile,
  },
  {
    id: "conditional-rendering",
    step: 2,
    title: "Conditional Rendering",
    sourcePath: "src/examples/Conditional.jsx",
    summary: "Choosing what UI to render from ordinary JavaScript conditions.",
    component: Conditional,
  },
  {
    id: "lists-keys",
    step: 3,
    title: "Lists and Keys",
    sourcePath: "src/examples/Lists.jsx",
    summary: "Rendering arrays with stable keys and item-specific styling.",
    component: Lists,
  },
  {
    id: "events-state",
    step: 4,
    title: "Events and State",
    sourcePath: "src/examples/Counter.jsx",
    summary: "State updates, event handlers, and React's re-render cycle.",
    component: Counter,
  },
  {
    id: "independent-state",
    step: 5,
    title: "Independent State",
    sourcePath: "src/examples/IndependentState.jsx",
    summary: "Two component instances, each owning its own state value.",
    component: IndependentState,
  },
  {
    id: "shared-state",
    step: 6,
    title: "Shared State",
    sourcePath: "src/examples/SharedState.jsx",
    summary: "Lifting state up so sibling components stay synchronized.",
    component: SharedState,
  },
  {
    id: "derived-ui",
    step: 7,
    title: "Derived UI",
    sourcePath: "src/examples/ShoppingList.jsx",
    summary: "Filtering and grouping UI from state without duplicating data.",
    component: ShoppingList,
  },
  {
    id: "immutable-updates",
    step: 8,
    title: "Immutable Updates",
    sourcePath: "src/examples/TicTacToe.jsx",
    summary: "Immutable arrays, history state, and deriving UI from previous moves.",
    component: TicTacToe,
  },
];
