import type { componentProps } from "../utils/portfolio-website";

interface props extends componentProps {
  [content: string]: unknown
}

const IconButtons = (props: props) => {
  const classname = `hover:cursor-pointer rounded-full p-2 ${props.className}`;
  return (
    <button onClick={props.onClick} className={classname}>
      {props.children}
    </button>
  );
};

export default IconButtons;
