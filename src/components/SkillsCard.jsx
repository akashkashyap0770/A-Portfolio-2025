import React from "react";

function SkillsCard({ icon, title, text }) {
    return (
        <article className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden w-full p-4 sm:p-6 md:p-8 flex flex-col items-center gap-3 sm:gap-4 text-center">
            {/* Icon */}
            <span className="text-3xl sm:text-4xl md:text-5xl">{icon}</span>

            {/* Text */}
            <div>
                <h4 className="text-base sm:text-lg md:text-xl font-semibold">{title}</h4>
                <p className="mt-1 text-sm sm:text-base md:text-base text-slate-700 leading-relaxed">
                    {text}
                </p>
            </div>
        </article>
    );
}

export default SkillsCard;
