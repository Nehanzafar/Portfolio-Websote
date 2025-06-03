import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div>
      <h1 className="text-2xl text-accent-yellow">Hello World</h1>
    </div>
  </StrictMode>
);
