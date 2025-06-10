import type { componentProps } from "../utils/portfolio-website";

const ParallaxTextbg = (props: componentProps) => {
  return (
    <h1
      className={`md:text-8xl md:translate-0 -translate-x-10 text-6xl text-nowrap text-white/34 font-bold ${props.className}`}
    >
      {props.children}
    </h1>
  );
};

export default ParallaxTextbg;
