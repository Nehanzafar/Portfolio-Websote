import React from "react";
import { Link } from "react-router";
import constant from "../data/constant.json";
import { Menu, X } from "lucide-react";
import IconButtons from "../components/IconButtons";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const Header = () => {
  const [navOpen, setNavOpen] = React.useState(false);
  function handleClick() {
    setNavOpen(!navOpen);
    navOpen ? disableBodyScroll(document) : enableBodyScroll(document);
  }

  return (
    <div className="flex flex-row justify-between items-center w-full h-24 p-6">
      <Link to={"/"}>
        <h1 className="text-white text-2xl">
          <span>{constant.logoText.slice(0, 5)}</span>
          <br />
          &nbsp;&nbsp;
          <span>{constant.logoText.slice(6, 8)}</span>
          &nbsp;&nbsp;
          <span>{constant.logoText.slice(8)}</span>
        </h1>
      </Link>

      <div>
        <IconButtons
          className={"z-auto hover:backdrop-sepia-0 hover:bg-white/10"}
          onClick={handleClick}
        >
          <Menu color="#FFFFFF" />
        </IconButtons>
        <nav
          className={`bg-black/80 absolute top-0 right-0 h-screen block w-full z-50 ${
            navOpen ? "" : "hidden md:hidden sm:hidden"
          }`}
        >
          <IconButtons
            className={
              "absolute top-5 right-5 z-50 hover:backdrop-sepia-0 hover:bg-white/10 "
            }
            onClick={handleClick}
          >
            <X color="#fff" className="" />
          </IconButtons>

          <ul className="absolute top-0 right-0 md:w-1/2 w-full h-screen bg-accent-yellow md:block flex flex-col justify-center items-center">
            {constant.nav.map((list: string) => {
              return (
                <li
                  key={list}
                  className="first:md:mt-24 p-5 m-5 hover:bg-dark-green md:w-2/3 w-56 text-center md:text-left hover:text-accent-yellow font-bold text-white text-xl rounded-lg flex md:justify-start md:items-center justify-center"
                >
                  <span className="w-2 h-12 bg-accent-yellow mr-10 hidden md:inline-block"></span>
                  <Link to={"/" + list.toLowerCase()} className={"self-center"}>
                    {list}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
