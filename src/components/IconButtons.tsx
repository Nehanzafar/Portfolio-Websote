import React from "react";
import { Link } from "react-router";

interface props {
  children: any;
  className?: string;
  onClick?: () => void;
  to?: string;
}

const IconButtons = (props: props) => {
  const classname = `hover:cursor-pointer rounded-full p-2 ${props.className}`;

  if (props.to) {
    return (
      <Link to={props.to} className={classname}>
        {props.children}
      </Link>
    );
  } else {
    return (
      <button onClick={props.onClick} className={classname}>
        {props.children}
      </button>
    );
  }
};

export default IconButtons;
