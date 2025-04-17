import React from "react";
import { EXPERIENCES } from "../utils/Data";
import { motion } from "framer-motion";
import Projects from "./Projects";

function Experiences() {
  const { title, list } = EXPERIENCES;

  return (
    <>
      <section id="experiences" className="p-5">
        <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.7 }}
        className="flex justify-center items-center">
          <p className="text-2xl lg:text-4xl pt-2 underline md:pt-5 lg:pt-6 pb-5 lg:pb-10">
            {title}
          </p>
        </motion.div>
        {/* list Data */}
        {list.map((list, id) => (
            <div key={id} className="lg:flex p-5">
              <div className="lg:w-1/2 lg:flex lg:flex-col items-center">
                <p className="lg:text-lg">{list.year}</p>
              </div>
              <div className="lg:w-1/2  flex flex-col items-start lg:gap-y-2 lg:px-10 text-justify">
                <p className="text-lg lg:text-xl font-semibold">{list.role} at <span>{list.company}</span></p>
                <p className="lg:pr-10">{list.description}</p>
                <div className="flex flex-wrap">
                {list.technologies.map((techno, id) => (
                  <p key={id} className="p-1 px-2 md:p-1 md:px-4 lg:p-2 lg:px-6 m-2 bg-purple-500 text-white">{techno}</p>
                ))}
                </div>
              </div>
            </div>
        ))}
      </section>
      <Projects />
    </>
  );
}

export default Experiences;
