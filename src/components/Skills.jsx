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
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        autoplay: true,          // ✅ Enable auto slide
        autoplaySpeed: 2000,     // 2.5 seconds per slide
        pauseOnHover: true,      // pause when mouse hover
        afterChange: (current) => setActiveSlide(current),
        responsive: [
            { breakpoint: 1280, settings: { slidesToShow: 3, centerMode: true } },
            { breakpoint: 1024, settings: { slidesToShow: 2, centerMode: true } },
            { breakpoint: 768, settings: { slidesToShow: 1, centerMode: true } },
        ],
    };

    return (
        <section id="skills" className="min-h-screen align-elements py-20">
            <SectionTitles text="Tech Stack" />

            {/* Buttons to jump to slides */}
            <div className="flex flex-wrap justify-center gap-4 mt-12 mb-8">
                {skills.map((skill, index) => (
                    <button
                        key={skill.id}
                        onClick={() => sliderRef.current.slickGoTo(index)}
                        className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${index === activeSlide
                            ? "bg-emerald-600 text-white scale-105"
                            : "bg-gray-300 text-gray-700 hover:bg-emerald-500 hover:text-white"
                            }`}
                    >
                        {skill.title}
                    </button>
                ))}
            </div>

            {/* Slider */}
            <div className="mt-16">
                <Slider {...settings} ref={sliderRef}>
                    {skills.map((skill, index) => (
                        <div key={skill.id} className="flex justify-center px-2">
                            <div
                                className={`transition-transform duration-300 ease-in-out ${index === activeSlide ? "scale-105 shadow-xl" : "shadow-md"
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
