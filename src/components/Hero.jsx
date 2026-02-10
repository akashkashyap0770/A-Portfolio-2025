import React from "react";
import heroImg from "../assets/heroImg.svg";
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import resume from "../assets/AkashDev_2026.pdf";

function Hero() {
    return (
        <section
            id="home"
            className="h-screen bg-emerald-100 flex items-center py-10 md:py-16"
        >
            <div className="align-elements w-full grid md:grid-cols-2 gap-10">
                {/* Left Content */}
                <div className="text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-wide">
                        I'm Akash
                    </h1>
                    <p className="mt-2 text-xl sm:text-2xl lg:text-3xl text-slate-700 capitalize tracking-wide">
                        Front-End Developer
                    </p>
                    <p className="mt-2 text-base sm:text-lg text-slate-700 tracking-wide">
                        Turning ideas into interactive reality
                    </p>

                    <div className="mt-4">
                        <a
                            href={resume}
                            download="Akash_Resume.pdf"
                            className="bg-emerald-700 text-white rounded-sm py-2 px-8 inline-block hover:bg-emerald-800 transition-colors duration-300"
                        >
                            Hire Me
                        </a>
                    </div>

                    <div className="flex justify-center md:justify-start gap-x-4 mt-4">
                        <a
                            href="https://github.com/akashkashyap0770"
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors duration-300"
                        >
                            <FaGithubSquare className="h-7 w-7 sm:h-8 sm:w-8 text-slate-500 hover:text-black" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/akashkashyap0770/"
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors duration-300"
                        >
                            <FaLinkedin className="h-7 w-7 sm:h-8 sm:w-8 text-slate-500 hover:text-black" />
                        </a>
                        <a
                            href="https://instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors duration-300"
                        >
                            <FaInstagramSquare className="h-7 w-7 sm:h-8 sm:w-8 text-slate-500 hover:text-black" />
                        </a>
                    </div>
                </div>

                {/* Right Image */}
                <div className="hidden md:flex justify-center">
                    <img
                        src={heroImg}
                        className="h-56 sm:h-72 lg:h-96 w-auto"
                        alt="Hero"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
