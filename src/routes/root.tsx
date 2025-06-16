import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import { Outlet } from "react-router-dom";
import usePathAsTitle from "../hooks/usePathAsTitle.tsx";

const Root = () => {
  usePathAsTitle();
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
