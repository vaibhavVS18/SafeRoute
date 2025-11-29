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
        "service_zfecwoa", // Your Service ID
        "template_8fdk5wa", // Your Template ID
        form.current,
        "S-WuzAZDB7MCaUPms" // Your Public Key
      )
      .then(
        () => {
          alert(" Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error(error);
          alert(" Error sending message.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="px-6 py-20 max-w-7xl mx-auto scroll-mt min-h-screen"
    >
      <motion.div
        className="text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Feedback & Contact
        </h2>
        <p className="text-gray-600 text-base sm:text-lg">
          Share your thoughts, report issues, or just say hi! Your feedback helps
          us make SafeRoute better and safer for everyone.
        </p>
      </motion.div>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="p-8 rounded-2xl shadow-lg bg-white space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {/* Inputs without motion */}
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="w-full p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05, backgroundColor: "#10b981" }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 rounded-lg bg-emerald-500 text-white font-semibold shadow-md transition-all"
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
}
