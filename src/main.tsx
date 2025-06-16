import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import GlobalStyles from "@mui/material/GlobalStyles";
import routes from "./utils/routesGenerator.tsx";
// import Home from "./routes/Home.tsx";
// import About from "./routes/About.tsx";
// import Root from "./routes/root.tsx";
// import ErrorElement from "./routes/ErrorElement.tsx";
// import type { RouteObject } from "react-router";

const rootElement = document.getElementById("root");

// const routes: RouteObject = {
//   path: "/",
//   element: <Root />,
//   errorElement: <ErrorElement />,
//   children: [
//     {
//       index: true,
//       element: <Home />,
//     },
//     {
//       path: "/about",
//       element: <About />,
//     },
//   ],
// };

const router = createBrowserRouter([routes], {
  basename: "/Portfolio-Website",
});


createRoot(rootElement!).render(
  <StrictMode>
    <StyledEngineProvider enableCssLayer>
      <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />

      <RouterProvider router={router} />
    </StyledEngineProvider>
  </StrictMode>
);
