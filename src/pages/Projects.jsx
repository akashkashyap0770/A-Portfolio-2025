import React from "react";
import { PROJECTS } from "../utils/Data";
import { motion } from "framer-motion";
import Contact from "./Contact";

function Projects() {
  const { title, projectList } = PROJECTS;

  return (
    <>
      <section id="projects" className="p-5">
        <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.7 }}
        className="flex justify-center items-center">
          <p className="text-2xl lg:text-4xl pt-2 underline md:pt-5 lg:pt-6 pb-5 lg:pb-10">
            {title}
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center md:flex-row lg:flex-row md:justify-between lg:justify-between p-5 md:px-10 lg:px-20">
          {projectList.map((list, id) => (
            <div key={id} className="flex justify-center items-center p-2 transition-all duration-300 hover:scale-110">
              <a href={list.pLink} target="_blank"><p className="w-28 h-28 lg:w-44 lg:h-44 p-1 flex justify-center text-base lg:text-xl items-center text-white font-semibold  bg-purple-500">{list.pName}</p></a>
            </div>
          ))}
        </div>
      </section>
      <Contact />
    </>
  );
}

export default Projects;
