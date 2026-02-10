import React from "react";
import SectionTitles from "./SectionTitles";
import ProjectsCard from "./ProjectsCard";
import { projects } from "../data/Data";

function Projects() {
    return (
        <section id="projects" className="min-h-screen align-elements py-16 md:py-20">
            <SectionTitles text="Web Creations" />
            <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {projects.map((project) => (
                    <ProjectsCard key={project.id} {...project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
