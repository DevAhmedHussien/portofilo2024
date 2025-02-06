"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import Link from "next/link";
import { FaLinkedinIn, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

export function Contact() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const validate = (): boolean => {
    const newErrors: Errors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        e.currentTarget,
        "your_user_id"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setShowForm(false);
        },
        (error) => {
          alert("Contact with me on telegram or what'sApp");
          console.error(error.text);
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 md:px-6 lg:px-8 bg-white relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between">
        <div className="mb-8 lg:mb-0">
          <h2 className="text-6xl lg:text-8xl font-bold leading-tight mb-4">
            HAVE A PROJECT?
          </h2>
          <div className="flex justify-between flex-wrap items-center gap-10rem">
            <div className="flex justify-between flex-wrap items-center gap-3rem">
              <button
                onClick={() => setShowForm(true)}
                className="bg-yellow-400 text-black font-bold w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-md hover:bg-yellow-500 transition-transform transform hover:scale-105 hover:-rotate-45 mt-5rem"
              >
                <span className="text-sm mb-1">HIRE ME</span>
                <HiArrowRight
                  size={24}
                  className="transition-transform duration-300 hover:-rotate-45"
                />
              </button>
              <p className="text-gray-700 max-w-md w-300px pl-2">
                WHETHER YOU NEED INTUITIVE UI/UX DESIGN, ROBUST DEVELOPMENT, OR A
                SEAMLESS BLEND OF BOTH, I'M HERE TO HELP.
              </p>
            </div>
            <h3 className="text-6xl lg:text-8xl font-bold leading-tight mb-8">
              LET’S TALK
            </h3>
          </div>
        </div>

        <div className="flex gap-6 justify-center">
          <Link
            href="https://wa.me/79821313577"
            target="_blank"
            aria-label="WhatsApp"
            className="group transition"
          >
            <FaWhatsapp className="text-6xl p-4 border-2 border-white rounded-full group-hover:bg-white group-hover:text-[#25D366] transition duration-300 transform group-hover:scale-110" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ahmed-hussien-1574122a1/"
            target="_blank"
            aria-label="LinkedIn"
            className="group transition"
          >
            <FaLinkedinIn className="text-6xl p-4 border-2 border-white rounded-full group-hover:bg-white group-hover:text-[#4169E1] transition duration-300 transform group-hover:scale-110" />
          </Link>
          <Link
            href="https://t.me/AhmedHussien12199"
            target="_blank"
            aria-label="Telegram"
            className="group transition"
          >
            <FaTelegramPlane className="text-6xl p-4 border-2 border-white rounded-full group-hover:bg-white group-hover:text-[#0088CC] transition duration-300 transform group-hover:scale-110" />
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
          >
            <div className="bg-[#4169E1] p-8 rounded-lg shadow-lg max-w-md w-full relative">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-yellow-400 hover:text-yellow-300 text-2xl font-bold"
              >
                &times;
              </button>
              <h3 className="text-3xl font-bold mb-6 text-center text-white">
                Get in Touch
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="mt-1 block w-full rounded-md border-none shadow-sm bg-white text-gray-800 focus:ring-yellow-400 focus:outline-none py-2 px-3"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="mt-1 block w-full rounded-md border-none shadow-sm bg-white text-gray-800 focus:ring-yellow-400 focus:outline-none py-2 px-3"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    className="mt-1 block w-full rounded-md border-none shadow-sm bg-white text-gray-800 focus:ring-yellow-400 focus:outline-none py-2 px-3"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-[#4169E1] py-2 rounded-md font-bold hover:bg-[#4169E1] hover:text-white transition-transform transform hover:scale-105"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
