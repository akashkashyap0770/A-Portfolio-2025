import React, { useContext } from "react";
import { Data } from "./DashBoard";
import { motion } from "framer-motion";
import { FOOTERICONS } from "../utils/Data";

function Footer() {

  const icons = FOOTERICONS;

  const GoToHomePage = useContext(Data);

  return (
    <footer className="">
      <div
      className="h-24 lg:h-28 flex md:flex-row lg:flex-row flex-wrap justify-center items-center gap-x-10 bg-gray-500 p-1 lg:p-2">
      {icons.map((icon) => (
        <motion.a
        whileInView={{ y: 5, opacity: 1 }}
       initial={{ y: -100, opacity: 0 }}
       transition={{ duration: 0.7 }}
        href={icon.href} key={icon.id} target="_blank" className="w-fit h-fit p-3 text-2xl lg:text-3xl rounded-full text-white hover:bg-gray-600"><icon.Icon /></motion.a>
      ))}
      </div>
      <div className="flex md:flex-row lg:flex-row flex-col justify-between items-center md:px-10 lg:px-20 p-2 bg-gray-600">
      {GoToHomePage.map((data) => (
        <a href={data.to} key={data.navTitle} className="text-xl lg:text-2xl font-semibold text-white hover:text-purple-500">
          {data.navTitle}
        </a>
      ))}
      <h1
      className="flex flex-wrap text-white">© 2025 Copyright: 🐺-Portfolio.com</h1>
      </div>
    </footer>
  );
}

export default Footer;
