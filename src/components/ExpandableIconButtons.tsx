import React, { useState } from "react";
import IconButtons from "./IconButtons";
import type { componentProps } from "../utils/portfolio-website";

interface props extends componentProps {
  text?: string;
  href?: string;
  state?: React.SetStateAction<number>;
  id?: number;
}

const ExpandableIconButtons = ({
  children,
  text = "",
  href = "#",
  className,
  id,
  state,
}: props) => {
  const [open, setOpen] = useState(false);
  const [curOpen, setCurOpen] = state;

  function handleClick() {
    setOpen(!open);
    setCurOpen(id);
  }
  React.useEffect(() => {
    if (id !== curOpen) {
      setOpen(false);
      
    }
  }, [curOpen, id]);

  return (
    <div className="flex justify-content">
      <IconButtons className={`peer z-10  ${className}`} onClick={handleClick}>
        {children}
      </IconButtons>
      <a
        href={href}
        className={`lg:hidden hidden
          ${open ? "inline-block" : "hidden"}
           bg-gray-300 lg:peer-hover:inline-block h-10 py-2 px-7 rounded-r-full -translate-x-4`}
      >
        {text}
      </a>
    </div>
  );
};

export default ExpandableIconButtons;
