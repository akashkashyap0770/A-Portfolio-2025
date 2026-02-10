import React from 'react';

function SkillsCard({ icon, title, text }) {
    return (
        <article className="bg-white rounded-lg p-6 sm:p-8 w-64 sm:w-72 md:w-96 h-64 sm:h-72 md:h-64 flex flex-col justify-between text-center sm:text-left">
            <span className="text-4xl">{icon}</span>
            <div>
                <h4 className="mt-4 font-semibold text-lg">{title}</h4>
                <p className="mt-2 text-slate-500 leading-relaxed">{text}</p>
            </div>
        </article>
    );
}

export default SkillsCard;
