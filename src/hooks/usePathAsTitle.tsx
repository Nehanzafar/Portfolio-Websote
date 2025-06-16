import { useDebugValue, useEffect } from "react";
import { useLocation } from "react-router-dom";
import constant from "../data/constant.json";

function removeSpecialChars(str: string): string {
  return str.replace(/[^a-zA-Z0-9\s]/g, "");
}

function capitalize(str: string): string {
  const temp = str.slice(0, 1);
  return temp.toUpperCase() + str.slice(1);
}

const usePathAsTitle = (title = "") => {
  const name = removeSpecialChars(constant.logoText) + " | " + constant.Role;
  const curLoc = useLocation().pathname;
  const titleElement = document.querySelector("head title") as HTMLElement;
  if (!titleElement) {
    const titleElement = document.createElement(title);
    const head = document.querySelector("head");
    head?.appendChild(titleElement);
  }
useEffect(() => {
    if (title === "") {
      titleElement!.innerText =
        curLoc === "/"
          ? name
          : capitalize(removeSpecialChars(curLoc)) + " | " + constant.Role;
    } else {
      titleElement!.innerText = title + " | " + constant.Role;
    }
  }, [curLoc, name, title, titleElement]);
  useDebugValue(title);
  return title;
};

export default usePathAsTitle;
