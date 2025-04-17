import React from "react";
import { HOME } from "../utils/Data";
import { motion } from "framer-motion";
import About from "./About";

function Home() {
  const { Username, designation, bio, profileImage, resume } = HOME[0];

  return (
    <>
      <section id="home" className="p-5">
        <div className=" flex flex-col md:flex-row lg:flex-row justify-between items-center md:p-2 lg:p-5 md:px-6 lg:px-28 ">
          {/* Home Info */}
          <div className="lg:w-1/2 md:w-1/2 flex flex-col justify-center text-justify p-2 md:p-3 lg:py-14">
            <motion.p
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl"
            >
              {Username}
            </motion.p>
            <motion.p
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl md:text-2xl lg:text-3xl"
            >
              {designation}
            </motion.p>
            <motion.p
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="text-base md:text-md lg:text-xl"
            >
              {bio}
            </motion.p>
            <motion.a
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.8 }}
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-md lg:text-lg text-white rounded-sm bg-purple-600 hover:bg-purple-500 p-2 px-5 mt-2 lg:mt-5 md:mt-3"
            >
              Resume
            </motion.a>
          </div>
          {/* Home Image */}
          <motion.div
            animate={{ x: [50, 100, 10], opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              delay: 0.1,
              ease: [0.5, 0.71, 1, 1.5],
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            className="w-fit h-fit flex flex-col justify-center items-center p-1 md:p-2 lg:p-5 shadow-inner shadow-purple-500 rounded-full"
          >
            <img
              src={profileImage}
              alt={`${Username} Profile`}
              className="w-52 h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain rounded-full p-2"
            />
          </motion.div>
        </div>
      </section>
      <About />
    </>
  );
}

export default Home;
