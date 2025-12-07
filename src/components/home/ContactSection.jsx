"use client";

import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

export default function ContactSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zfecwoa",
        "template_8fdk5wa",
        form.current,
        "S-WuzAZDB7MCaUPms"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error(error);
          alert("Error sending message.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="px-6 py-20 max-w-7xl mx-auto scroll-mt min-h-screen"
    >
      {/* Title Section */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 
          bg-linear-to-r from-[#C6A667] to-[#FFB84C] bg-clip-text text-transparent drop-shadow-[0_0_8px_#C6A66750]">
          Feedback & Contact
        </h2>
        <p className="text-gray-200 text-base sm:text-lg">
          Share your thoughts, report issues, or just say hi! Your feedback makes SafeRoute safer for everyone.
        </p>
      </motion.div>

      {/* Form Section */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="
          p-8 rounded-2xl shadow-xl 
          bg-[#0E0E0E]/60 backdrop-blur-xl 
          border border-[#C6A667]/40 
          backdrop-blur-md space-y-6
        "
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {/* Inputs */}
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="
            w-full p-4 rounded-lg bg-linear-to-r from-[#1A1A1A]/70 via-gray-800 to-[#1A1A1A]/70  text-gray-200
            border border-[#C6A667]/40
            placeholder-[#F5DFA6]
            focus:outline-none focus:ring-2 focus:ring-[#C6A667]
            focus:border-[#C6A667]
            transition-all
          "
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="
           w-full p-4 rounded-lg bg-linear-to-r from-[#1A1A1A]/70 via-gray-800 to-[#1A1A1A]/70   text-gray-200
            border border-[#C6A667]/40
            placeholder-[#F5DFA6]
            focus:outline-none focus:ring-2 focus:ring-[#C6A667]
            focus:border-[#C6A667]
            transition-all
          "
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="
           w-full p-4 rounded-lg bg-linear-to-r from-[#1A1A1A]/70 via-gray-800 to-[#1A1A1A]/70   text-gray-200
            border border-[#C6A667]/40
            placeholder-[#F5DFA6]
            focus:outline-none focus:ring-2 focus:ring-[#C6A667]
            focus:border-[#C6A667]
            transition-all
          "
        />

        {/* Premium Golden Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          className="
            w-full py-3 rounded-lg font-semibold shadow-lg
            bg-linear-to-r from-[#a0854e] via-[#eac793] to-[#A68945]
            text-black
            transition-all cursor-pointer
          "
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
}
