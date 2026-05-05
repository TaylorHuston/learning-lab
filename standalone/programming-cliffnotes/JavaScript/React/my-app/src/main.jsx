import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// React starts from a root component, and then it can have child components, and those child components can have their own child components, and so on. 
// Standard convention is to attach to a div with an id of root, but you can attach to any element in the DOM.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
