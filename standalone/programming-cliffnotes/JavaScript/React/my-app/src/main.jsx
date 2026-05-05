import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Start here when reading the React examples.
//
// This file is intentionally small. It is the bootstrap file: it connects React
// to the browser DOM. The actual app UI lives in App.jsx so startup code and UI
// code stay separate.
//
// Runtime flow:
// 1. Vite loads index.html.
// 2. index.html loads this module.
// 3. React attaches to the DOM node with id="root".
// 4. <App /> renders the example gallery.
//
// Learning flow:
// 1. Open src/examples/learningPath.js to see the prescribed concept order.
// 2. Open each sourcePath in that list and read the examples in sequence.
// 3. Use the live app as a quick way to run and compare each example.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
