import React from "react";
import { motion } from "framer-motion";
import { CONTACT } from "../utils/Data";

function Contact() {
  const { title, contactInfo } = CONTACT;

  return (
    <section id="contact" className="p-5">
      <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="flex justify-center items-center pt-2 md:pt-5 lg:pt-6 pb-5 lg:pb-16">
        <p className="text-2xl underline lg:text-4xl">
          {title}
        </p>
      </motion.div>
      <div className="flex flex-col md:flex-row lg:flex-row justify-center gap-x-20">
        <motion.div
         whileInView={{ x: 0, opacity: 1 }}
         initial={{ x: -100, opacity: 0 }}
         transition={{ duration: 0.7 }}
        className="lg:w-1/2 flex justify-center p-2">
          {contactInfo.map((info) => (
            <div key={info.id} className="flex flex-col text-center lg:gap-y-2 md:text-start lg:text-start">
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-purple-500">Get in touch</p>
              <p className="md:text-lg lg:text-xl">{info.address}</p>
              <p className="md:text-lg lg:text-xl">{info.phoneNumber}</p>
              <p className="md:text-lg lg:text-xl">{info.email}</p>
            </div>
          ))}
        </motion.div>
        <motion.div
         whileInView={{ x: 0, opacity: 1 }}
         initial={{ x: 100, opacity: 0 }}
         transition={{ duration: 0.7 }}
        className="lg:w-1/2 flex justify-center items-center p-5">
          <form action="https://formspree.io/f/mkndaqlg" method="post" className="flex flex-col w-72 lg:w-96 shadow-black shadow-inner gap-4 p-4 lg:p-6 max-w-lg">
            <input
              type="text"
              name="Name"
              placeholder="Enter Your Name"
              className="p-1 lg:p-2 text:md md:text-lg lg:text-xl font-semibold border-none outline-none bg-slate-200 text-purple-600 rounded-md shadow-inner shadow-black"
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Enter Your Email"
              className="p-1 lg:p-2 text:md md:text-lg lg:text-xl font-semibold border-none outline-none bg-slate-200 text-purple-600 rounded-md ring-offset-4 shadow-inner shadow-black"
              required
            />
            <textarea
            type="message"
            name="Message"
              placeholder="Enter Your Message"
              className="p-1 lg:p-2 text:md md:text-lg lg:text-xl font-semibold border-none outline-none bg-slate-200 text-purple-600 rounded-md ring-offset-4 shadow-inner shadow-black"
              required
            />
            <button
              type="submit"
              value="send"
              className="bg-purple-600 text:md md:text-lg lg:text-xl font-semibold text-white shadow shadow-purple-600 p-1 md:p-2 lg:p-3 rounded-md hover:bg-purple-500 transition duration-300"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
