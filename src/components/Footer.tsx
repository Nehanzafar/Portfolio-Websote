import constant from "../data/constant.json";
import { Link } from "react-router";
import ExpandableIconButtons from "./ExpandableIconButtons";
import Icon from "../components/Icons";
import { Typography } from "@mui/material";
import ParallaxTextbg from "./ParallaxTextbg";
import Button from "@mui/material/Button";

const Li = ({ children, className = "" }) => {
  return <li className={`${className} text-accent-yellow `}>{children}</li>;
};

const Footer = () => {
  const date = new Date();
  return (
    <footer className="absolute bottom-0 left-0 w-full flex flex-col ">
      <div className="w-full h-62 flex flex-col md:my-4">
        <ParallaxTextbg className="self-end">{constant.footer.ContactText.toLocaleUpperCase()}</ParallaxTextbg>
        <h1 className="text-white md:text-8xl text-5xl mx-auto font-bold self-center md:-translate-x-20">
          {constant.footer.ContactText.toLocaleUpperCase()}
        </h1>
        <Button variant="contained" className="bg-accent-yellow self-center md:translate-x-44 translate-x-24 my-4 px-4 py-2">{constant.footer.ContactBtn}</Button>
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
      <div className="bg-[#fff1dbFF] h-32 block flex-col justify-between">
        <ul className="flex justify-center">
          {Object.keys(constant.socials).map((key) => {
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
          <Typography variant="caption" className="inline">
            {date.getFullYear()} — {constant.footer.copyright}
          </Typography>
          <span>
            <a href={constant.footer.privacy.href}>
              <Typography variant="caption" className="inline-block md:mx-2 m-0">
                {constant.footer.privacy.text}
              </Typography>
            </a>
            <a href={constant.footer.terms.href}>
              <Typography variant="caption" className="inline md:mx-3 m-0">
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
