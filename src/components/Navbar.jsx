import React from "react";
import { links } from "../data/Data";

function Navbar() {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: "smooth",
            });
        }
    };

    return (
        <nav className="bg-emerald-100 fixed w-full z-50 shadow-md">
            <div className="align-elements py-4 flex flex-col gap-y-4 md:flex-row md:items-center md:justify-between">
                <h2
                    className="text-3xl font-bold text-gray-800 cursor-pointer"
                    onClick={() => handleScroll("home")}
                >
                    Web <span className="text-emerald-700">Dev</span>
                </h2>

                <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start">
                    {links.map(({ id, href, text }) => (
                        <span
                            key={id}
                            onClick={() => handleScroll(href.replace("#", ""))}
                            className="capitalize text-base md:text-lg tracking-wide font-semibold text-gray-700 hover:text-emerald-600 hover:underline underline-offset-4 transition-all duration-300 cursor-pointer"
                        >
                            {text}
                        </span>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
