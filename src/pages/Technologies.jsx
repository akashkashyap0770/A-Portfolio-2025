import React from "react";
import { TECHNOLOGIES } from "../utils/Data";
import { motion } from "framer-motion";
import Experiences from "./Experiences";

function Technologies() {
  const { title, techList } = TECHNOLOGIES;

  return (
    <>
      <section id="technologies" className="p-5">
        <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.7 }}
        className="flex justify-center items-center">
          <p className="text-2xl lg:text-4xl pt-2 underline md:pt-5 lg:pt-6 pb-5 lg:pb-10">{title}</p>
        </motion.div>
        <div className="flex flex-wrap md:flex-row lg:flex-row gap-5 justify-center md:justify-between lg:justify-between items-center px-5 md:px-10 lg:px-28 md:py-10 lg:py-20">
          {techList.map((tech, id) => (
            <div key={id} className="flex flex-initial md:flex-wrap lg:flex-wrap sm:flex-col w-28 h-28 md:w-28 md:h-28 lg:w-40 lg:h-40 justify-center items-center rounded-lg shadow-white bg-purple-500">
              <p className="text-md sm:text-md md:text-lg lg:text-2xl p-1 sm:p-1 md:p-2 lg:p-2 text-white rounded-full cursor-pointer shadow-xl transition-transform duration-300 ease-in-out hover:rotate-180">
                {tech.TechName}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Experiences />
    </>
  );
}

export default Technologies;
