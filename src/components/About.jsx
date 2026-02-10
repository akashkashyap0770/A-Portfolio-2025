import React from "react";
import SectionTitles from "./SectionTitles";
import aboutImg from "../assets/aboutImg.svg";

function About() {
  return (
    <section id="about" className="min-h-screen flex justify-center items-center bg-white py-20">
      <div className="align-elements grid gap-16 md:grid-cols-2">
        <img src={aboutImg} alt="About Me" className="w-full max-w-lg mx-auto" />

        <article>
          <SectionTitles text="Code and Coffee" />
          <p className="mt-8 text-slate-600 leading-loose">
            Hi! I'm Akash, a Frontend Developer passionate about building beautiful and responsive web applications. I enjoy turning ideas into interactive, user-friendly digital experiences.
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;
