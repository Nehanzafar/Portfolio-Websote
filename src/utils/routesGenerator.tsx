import { type RouteObject } from "react-router";
import ErrorElement from "../routes/ErrorElement";
import constant from "../data/constant.json";
import Root from "../routes/root";
import type { navJson } from "./portfolio-website.d.ts";
import Components from "../utils/staticImports.tsx";
import type { ReactNode } from "react";

interface componentObj {
  [name: string]: () => ReactNode;
}

function createRoutesFromJSON(
  obj: navJson,
  routeElements: componentObj
): RouteObject {
  if (obj.isIndex) {
    const Elem = routeElements[obj.name];
    const tmp = {
      index: obj.isIndex,
      element: <Elem />,
      action: obj.action ? eval(`${obj.name.toLowerCase()}Action`) : undefined,
      loader: obj.loader ? eval(`${obj.name.toLowerCase()}Loader`) : undefined,
    };
    return tmp;
  } else {
    const Elem = routeElements[obj.name];
    const routePath = "/" + obj.name.toLowerCase();
    const tmp = {
      path: routePath,
      element: <Elem />,
      action: obj.action ? eval(`${obj.name.toLowerCase()}Action`) : undefined,
      loader: obj.loader ? eval(`${obj.name.toLowerCase()}Loader`) : undefined,
    };
    return tmp;
  }
}

const childrenRoutes = constant.nav.map((obj: navJson) => {
  return createRoutesFromJSON(obj, Components);
});

const routes: RouteObject = {
  path: "/",
  element: <Root />,
  errorElement: <ErrorElement />,
  children: childrenRoutes,
};

export default routes;
