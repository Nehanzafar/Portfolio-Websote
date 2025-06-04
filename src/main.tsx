import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router";

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <h1>Home Page</h1>,
      children: [],
    },
  ],
  { basename: "/Portfolio-Website" }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
