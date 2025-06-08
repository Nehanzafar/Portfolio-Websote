import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import ErrorElement from "./routes/ErrorElement.js";
import Root from "./routes/root.js";
// import { CacheProvider } from "@emotion/react";
import { StyledEngineProvider } from "@mui/material/styles";
import GlobalStyles from "@mui/material/GlobalStyles";
import Home from "./routes/Home.tsx"

const rootElement = document.getElementById("root");

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorElement />,
      children: [
        {
          index: true,
          element: <Home/>,
        }
      ],
    },
  ],
  { basename: "/Portfolio-Website" }
);

createRoot(rootElement!).render(
  <StrictMode>
    <StyledEngineProvider enableCssLayer>
      <GlobalStyles styles="@layer theme, base, mui, components, utilities;>" />
      <RouterProvider router={routes}></RouterProvider>
    </StyledEngineProvider>
  </StrictMode>
);
