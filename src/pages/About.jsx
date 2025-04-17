import React from "react";
import { ABOUT } from "../utils/Data";
import { motion } from "framer-motion";
import Technologies from "./Technologies";

function About() {
  const { title, description, aboutImage } = ABOUT[0];

  return (
    <>
      <section id="about" className="p-5">
        <div className="flex justify-center items-center">
          <motion.p
           whileInView={{ y: 0, opacity: 1 }}
           initial={{ y: -100, opacity: 0 }}
           transition={{ duration: 0.7 }}
          className="text-2xl lg:text-4xl pt-2 underline md:pt-5 lg:pt-6">{title}</motion.p>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center p-2 md:px-6 lg:px-28 md:py-10 lg:py-20">
          <motion.div
          animate={{ x: [-50, -100, -0], opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            delay: 0.1,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          className="w-fit h-fit flex flex-col justify-center items-center p-1 md:p-2 lg:p-5 shadow-inner shadow-purple-500 rounded-full">
            <img
              src={aboutImage}
              alt={`${aboutImage} aboutImage`}
              className="w-52 h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain rounded-full p-2 transition-all duration-300 hover:scale-105"
            />
          </motion.div>
          <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:w-1/2 md:w-1/2 flex flex-col justify-center text-justify">
            <p className="text-base md:text-md lg:text-xl">{description}</p>
          </motion.div>
        </div>
      </section>
      <Technologies />
    </>
  );
}

export default About;
