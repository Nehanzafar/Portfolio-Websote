import React from "react";
import IconButtons from "./IconButtons";

const ExpandableIconButtons = ({ children, text, href, className }) => {
  if (children) {

    return (
      <div className="flex justify-content">
        <IconButtons className={`peer z-10  ${className}`}>
          {children}
        </IconButtons>
        <a
          href={href}
          className="hidden bg-gray-300 peer-hover:inline-block hover:inline-block h-10 py-2 px-7 rounded-r-full -translate-x-4 peer/a"
        >
          {text}
        </a>
      </div>
    );
  }
};

export default ExpandableIconButtons;
