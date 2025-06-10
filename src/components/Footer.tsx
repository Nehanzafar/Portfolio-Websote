import constant from "../data/constant.json";
import { Link } from "react-router";
import ExpandableIconButtons from "./ExpandableIconButtons";
import Icon from "../components/Icons";
import { Typography } from "@mui/material";
import ParallaxTextbg from "./ParallaxTextbg";
import Button from "@mui/material/Button";
import type { componentProps } from "../utils/portfolio-website";

interface props extends componentProps{
  [content: string]: unknown
}



const Li = ({ children, className = "" }: props) => {
  return <li className={`${className} text-accent-yellow `}>{children}</li>;
};

const Footer = () => {
  const date = new Date();


  return (
    <footer className="w-full flex flex-col ">
      <div className="w-full flex flex-col md:my-4 my-1">
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
      <ul className="flex justify-around self-center m-5">
        {constant.nav.map((item, i) => {
          if (i == 0 || i == constant.nav.length) {
            return (
              <Li key={item}>
                <Link to={"/" + item.toLowerCase()}>{item}</Link>
              </Li>
            );
          } else {
            return (
              <Li key={item}>
                <span className="mx-4">&#x2022;</span>
                <Link to={"/" + item.toLowerCase()}>{item}</Link>
              </Li>
            );
          }
        })}
      </ul>
      <div className="bg-[#fff1dbFF] h-32 block flex-col justify-between w-full relative">
        <ul className="flex justify-center">
          {Object.keys(constant.socials).map((key) => {
            {/* @ts-expect-error Implentation of the JSON's data types is pending*/}
            const value = constant.socials[key];
            return (
              <li key={key} className="mx-2 my-3">
                <ExpandableIconButtons
                  className={"bg-accent-yellow hover:bg-amber-700"}
                  text={value.name}
                  href={value.href}
                >
                  <Icon name={value.icon} color="#fff" />
                </ExpandableIconButtons>
              </li>
            );
          })}
        </ul>
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
