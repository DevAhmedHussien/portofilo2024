"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#4169E1] to-[#4169E1] text-white px-6 md:px-12 flex flex-col items-center justify-between py-20">
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20 flex-grow mt-4">

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative w-full max-w-xs sm:max-w-md lg:max-w-sm"
        >
          <Image
            src="/ahmed2.jpg" 
            alt="ahmed - Frontend Developer"
            width={400}
            height={500}
            className="border-white shadow-2xl object-cover border-4 rounded-md"
            priority
          />
        </motion.div>

        {/* Left Section */}
        <div className="text-center lg:text-left lg:w-1/2 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              display: 'flex', flexDirection: 'column',  gap: '1rem' 
            }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-5">
              FRONTEND <br /> DEVELOPER
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#FFD700] mb-7">
              REACT / ANGULAR / NEXT
            </h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0 mb-7">
              Transforming ideas into engaging, scalable, and high-performance web applications.
            </p>
            <div className="bg-white h-1 w-24 mb-6 mx-auto lg:mx-0"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="text-lg font-semibold uppercase mb-2 tracking-wide">
              Hi, I am Ahmed
            </p>
            <p className="text-md leading-relaxed max-w-lg mx-auto lg:mx-0">
              I design intuitive interfaces and develop user-centric solutions, blending creativity and technical expertise to craft seamless digital experiences.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="w-full text-center space-y-6 mt-12"
      >
        <div className="flex gap-6 justify-center">
        <a href="https://wa.me/79821313577" target="_blank" aria-label="WhatsApp" className="group transition">
          <FaWhatsapp className="text-6xl p-4 border-2 border-white rounded-full group-hover:bg-white group-hover:text-[#25D366] transition duration-300 transform group-hover:scale-110" />
        </a>
        <a href="https://www.linkedin.com/in/ahmed-hussien-1574122a1/" target="_blank" aria-label="LinkedIn" className="group transition">
          <FaLinkedinIn className="text-6xl p-4 border-2 border-white rounded-full group-hover:bg-white group-hover:text-[#4169E1] transition duration-300 transform group-hover:scale-110" />
        </a>
        <a href="https://t.me/AhmedHussien12199" target="_blank" aria-label="Telegram" className="group transition">
          <FaTelegramPlane className="text-6xl p-4 border-2 border-white rounded-full group-hover:bg-white group-hover:text-[#0088CC] transition duration-300 transform group-hover:scale-110" />
        </a>
          </div>

        <h1 className="text-5xl md:text-6xl font-extrabold">
          Full Stack <br /> Coder
        </h1>
      </motion.div>
    </section>
  );
}

