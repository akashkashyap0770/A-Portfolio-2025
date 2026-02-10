import React, { useState, useRef } from "react";
import SectionTitles from "./SectionTitles";
import { skills } from "../data/Data";
import SkillsCard from "./SkillsCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Skills() {
    const [activeSlide, setActiveSlide] = useState(0);
    const sliderRef = useRef(null);

    const settings = {
        infinite: true,
        speed: 600,
        slidesToShow: 3, // Desktop default
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        afterChange: (current) => setActiveSlide(current),
        responsive: [
            {
                breakpoint: 1280, // Desktop/Laptop
                settings: { slidesToShow: 3, centerMode: true },
            },
            {
                breakpoint: 1024, // Tablet
                settings: { slidesToShow: 2, centerMode: true },
            },
            {
                breakpoint: 768, // Mobile
                settings: { slidesToShow: 1, centerMode: false }, // ✅ disable centerMode
            },
            {
                breakpoint: 480, // Small Mobile
                settings: { slidesToShow: 1, centerMode: false }, // ✅ disable centerMode
            },
        ],
    };

    return (
        <section id="skills" className="min-h-screen py-20 flex flex-col items-center">
            <SectionTitles text="Tech Stack" />

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mt-12 mb-8">
                {skills.map((skill, index) => (
                    <button
                        key={skill.id}
                        onClick={() => sliderRef.current.slickGoTo(index)}
                        className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-medium transition-all duration-300 ${index === activeSlide
                            ? "bg-emerald-600 text-white scale-105"
                            : "bg-gray-300 text-gray-700 hover:bg-emerald-500 hover:text-white"
                            }`}
                    >
                        {skill.title}
                    </button>
                ))}
            </div>

            {/* Slider */}
            <div className="w-full max-w-7xl">
                <Slider {...settings} ref={sliderRef}>
                    {skills.map((skill, index) => (
                        <div key={skill.id} className="flex justify-center px-2">
                            <div
                                className={`transition-transform duration-500 ease-in-out w-full ${index === activeSlide ? "scale-105 shadow-xl" : "scale-95 shadow-md"
                                    }`}
                            >
                                <SkillsCard {...skill} />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default Skills;
