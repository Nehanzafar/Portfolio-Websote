// src/components/index.js

// This imports all .jsx files inside /components synchronously
import type { ReactNode } from "react";
import * as allComponents from "../routes/reexporting";

// Converts `./Home.jsx` → "Home", etc.
const COMPONENTS = Object.entries(allComponents);
interface routeObjects {
  name: () => ReactNode;
}

const obj = COMPONENTS.reduce(
  (acc, [path, mod]: [path: string, mod: unknown]) => {
    const name = path;
    // .split('/')
    // .pop()
    // .replace('.jsx', '');
    acc[name] = mod;
    return acc;
  },
  {} as routeObjects
);

export default obj;
