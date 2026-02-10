import React from "react";
import { TbWorldWww } from "react-icons/tb";
import { FaGithubSquare } from "react-icons/fa";

function ProjectsCard({ url, img, github, title, text }) {
    return (
        <article className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            <img src={img} alt={title} className="w-full h-52 sm:h-56 md:h-64 object-cover" />

            <div className="p-6 md:p-8 capitalize">
                <h2 className="text-lg md:text-xl tracking-wide font-medium">{title}</h2>
                <p className="mt-3 md:mt-4 text-slate-700 leading-relaxed md:leading-loose">{text}</p>

                <div className="mt-4 flex gap-x-4">
                    <a href={url} target="_blank" rel="noreferrer">
                        <TbWorldWww className="h-7 w-7 md:h-8 md:w-8 text-slate-500 hover:text-black duration-300" />
                    </a>

                    <a href={github} target="_blank" rel="noreferrer">
                        <FaGithubSquare className="h-7 w-7 md:h-8 md:w-8 text-slate-500 hover:text-black duration-300" />
                    </a>
                </div>
            </div>
        </article>
    );
}

export default ProjectsCard;
