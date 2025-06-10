import React from "react";
import IconButtons from "./IconButtons";
import type { componentProps } from "../utils/portfolio-website";

interface props extends componentProps{
  text?: string;
  href?: string;
}

const ExpandableIconButtons = ({
  children,
  text = "",
  href = "#",
  className,
}: props) => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="flex justify-content">
      <IconButtons onClick={handleClick} className={`peer z-10  ${className}`}>
        {children}
      </IconButtons>
      <a
        href={href}
        className={`hidden bg-gray-300 lg:peer-hover:inline-block lg:hover:inline-block h-10 py-2 px-7 rounded-r-full -translate-x-4 peer/a ${open ? "inline-block" : "hidden"}`}
      >
        {text}
      </a>
    </div>
  );
};

export default ExpandableIconButtons;
