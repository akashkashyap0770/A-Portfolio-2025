import React from "react";
import SectionTitles from "./SectionTitles";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
    return (
        <section id="contacts" className="min-h-screen bg-emerald-50 flex items-center py-20">
            <div className="align-elements w-full grid gap-12 md:grid-cols-2 items-center">
                <article className="flex flex-col justify-center gap-6">
                    <SectionTitles text="Get in Touch" />
                    <p className="text-slate-600 leading-relaxed">
                        I'm open to work opportunities and collaborations. Feel free to reach out!
                    </p>

                    <div className="flex flex-col gap-4 text-slate-700 mt-6">
                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-emerald-600 w-5 h-5" />
                            <span>akash@example.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaPhone className="text-emerald-600 w-5 h-5" />
                            <span>+91 9876543210</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-emerald-600 w-5 h-5" />
                            <span>Lucknow, Uttar Pradesh, India</span>
                        </div>
                    </div>
                </article>

                <article className="w-full max-w-lg mx-auto">
                    <form
                        action="https://formspree.io/f/mkndaqlg"
                        method="POST"
                        className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-lg"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 w-full"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 w-full"
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="5"
                            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 w-full"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-emerald-600 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-700 transition-all duration-300 w-full"
                        >
                            Send Message
                        </button>
                    </form>
                </article>
            </div>
        </section>
    );
}

export default Contact;
