// This imports all .tsx files inside /components synchronously
import * as allComponents from "../routes/reexporting.tsx";

// Converts `./Home.jsx` → "Home", etc.
const COMPONENTS = Object.entries(allComponents);
// interface routeObjects {
//   name: unknown;
// }

const obj = COMPONENTS.reduce(
  (acc, [path, mod]: [path: string, mod: unknown]) => {
    const name = path;
    // .split('/')
    // .pop()
    // .replace('.jsx', '');
    // @ts-expect-error Throwing a weird error that will be fixed later
    acc[name] = mod;
    console.log(typeof acc);
    return acc;
  },
  {}
);

export default obj;
