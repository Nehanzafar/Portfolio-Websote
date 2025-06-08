import React from "react";

interface props {
  children: React.ElementType | string;
  className: string;
}

const ParallaxTextbg = (props: props) => {
  return (
      <h1 className={`md:text-8xl md:translate-0 text-6xl text-nowrap text-white/34 font-bold ${props.className}`}>{props.children}</h1>
  );
};

export default ParallaxTextbg;
