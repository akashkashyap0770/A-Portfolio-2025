import React, { useState, useRef, useEffect } from "react";
import SectionTitles from "./SectionTitles";
import { skills } from "../data/Data";
import SkillsCard from "./SkillsCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Skills() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);
    const [centerMode, setCenterMode] = useState(true);

    const sliderRef = useRef(null);

    // Dynamically update slides & centerMode based on screen width
    const updateSlides = () => {
        const width = window.innerWidth;
        if (width < 768) {
            setSlidesToShow(1);
            setCenterMode(true); // ✅ keep centerMode true for mobile
        } else if (width < 1024) {
            setSlidesToShow(2);
            setCenterMode(true);
        } else {
            setSlidesToShow(3);
            setCenterMode(true);
        }
    };

    useEffect(() => {
        updateSlides();
        window.addEventListener("resize", updateSlides);
        return () => window.removeEventListener("resize", updateSlides);
    }, []);

    const settings = {
        infinite: true,
        speed: 600,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        centerMode: centerMode,
        centerPadding: "0px",
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        afterChange: (current) => setActiveSlide(current),
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
                        <div key={skill.id} className="flex justify-center px-10 md:px-6">
                            <div
                                className={`transition-transform duration-500 ease-in-out
                  w-[280px] sm:w-[320px] md:w-[360px] 
                  h-[280px] sm:h-[320px] md:h-[360px] 
                  ${index === activeSlide ? "scale-105 shadow-xl" : "scale-95 shadow-md"}`}
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
