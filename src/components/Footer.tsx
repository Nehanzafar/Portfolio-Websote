import React, { Fragment } from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Icon from "../components/Icons";
import constant from "../data/constant.json";
import type { componentProps, navJson } from "../utils/portfolio-website";
import ExpandableIconButtons from "./ExpandableIconButtons";
import ParallaxTextbg from "./ParallaxTextbg";

interface props extends componentProps {
  onClick?: () => void | ((key: string) => void);
  [content: string]: unknown;
}

// type eventObj = { target: React.ReactNode };

const Li = ({ children, className = "" }: props) => {
  return <li className={`${className} text-accent-yellow `}>{children}</li>;
};

const SocialIconList = () => {
  const [curOpenBtn, setCurOpenBtn] = React.useState() as [
    number,
    (arg0: number) => number
  ];
  return (
    <ul className="flex justify-center z-1">
      {Object.keys(constant.socials).map((key, index) => {
        /* @ts-expect-error Implentation of the JSON's data types is pending*/
        const value = constant.socials[key];
        return (
          <li key={key} className="mx-2 my-3">
            <ExpandableIconButtons
              id={index}
              className={"bg-accent-yellow hover:bg-amber-700"}
              text={value.name}
              href={value.href}
              state={[curOpenBtn, setCurOpenBtn]}
            >
              <Icon name={value.icon} color="#fff" />
            </ExpandableIconButtons>
          </li>
        );
      })}
    </ul>
  );
};

const Footer = () => {
  const date = new Date();

  return (
    <footer className="w-full ">
      <div className="w-full flex flex-col md:my-4 my-1 -z-10">
        <ParallaxTextbg className="self-end">
          {constant.footer.ContactText.toLocaleUpperCase()}
        </ParallaxTextbg>
        <h1 className="text-white md:text-8xl text-5xl font-bold self-center lg:-translate-x-20">
          {constant.footer.ContactText.toLocaleUpperCase()}
        </h1>
        <Button
          variant="contained"
          className="bg-accent-yellow self-center md:translate-x-44 translate-x-24 my-4 px-4 py-2"
        >
          {constant.footer.ContactBtn}
        </Button>
      </div>
      <ul className="flex justify-around self-center mx-auto my-3 lg:w-1/3 w-82">
        {constant.nav.map((item: navJson, i: number) => {
          if (i == 0 || i == constant.nav.length) {
            return item.isIndex ? (
              <Li key={item.name}>
                <Link to={"/"}>{item.name}</Link>
              </Li>
            ) : (
              <Li key={item.name}>
                <Link to={"/" + item.name.toLowerCase()}>{item.name}</Link>
              </Li>
            );
          } else {
            return (
              <Fragment key={item.name}>
                <Li key={item.name + " dot"}>
                  <span className="mx-4 text-accent-yellow">&#x2022;</span>
                </Li>
                <Li key={item.name}>
                  <Link to={"/" + item.name.toLowerCase()}>{item.name}</Link>
                </Li>
              </Fragment>
            );
          }
        })}
      </ul>
      <div className="bg-[#fff1dbFF] h-32 block flex-col justify-between w-full relative z-1">
        <SocialIconList />
        <div className="absolute bottom-0 flex w-full justify-between">
          <Typography variant="caption" className="inline-block">
            {date.getFullYear()} — {constant.footer.copyright}
          </Typography>
          <span>
            <a href={constant.footer.privacy.href}>
              <Typography
                variant="caption"
                className="inline-block md:mx-2 mx-1"
              >
                {constant.footer.privacy.text}
              </Typography>
            </a>
            <a href={constant.footer.terms.href}>
              <Typography variant="caption" className="inline md:mx-2 mx-1">
                {constant.footer.terms.text}
              </Typography>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
