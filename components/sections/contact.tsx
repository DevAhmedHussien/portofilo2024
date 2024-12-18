"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HiArrowRight } from "react-icons/hi"

export function Contact() {
  const [showForm, setShowForm] = useState(false)

  return (
    <section id="contact" className="py-20 px-4 md:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between">
        <div className="mb-8 lg:mb-0">
          <h2 className="text-6xl lg:text-8xl font-bold leading-tight mb-4">HAVE A PROJECT?</h2>
          <div style={{  display:"flex"  ,justifyContent:'space-between' ,flexWrap:'wrap', alignItems:'center',gap: '10rem'}}>
            {/* //flex-shrink-0 mb-8 */}
            <div className=" "style={{justifyContent:'space-between' , flexWrap:'wrap', alignItems:'center', display:"flex", gap:'3rem'}}>
              <button
                onClick={() => setShowForm(true)}
                className="bg-yellow-400 text-black font-bold w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-md hover:bg-yellow-500 transition-transform transform hover:scale-105 hover:-rotate-45"
                style={{ marginTop: '5rem' }}
              >
                <span className="text-sm mb-1">HIRE ME</span>
                <HiArrowRight size={24} className="transition-transform duration-300 hover:-rotate-45" />
              </button>
              <p className="text-gray-700 max-w-md" style={{width:'300px'}}>
                WHETHER YOU NEED INTUITIVE UI/UX DESIGN, ROBUST DEVELOPMENT, OR A SEAMLESS BLEND OF BOTH, I'M HERE TO HELP.
              </p>
            </div>
            <h3 className="text-6xl lg:text-8xl font-bold leading-tight mb-8">LET’S TALK</h3>
          </div>
          {/* zorar w p */}
          
        </div>
      </div>

      {/* Popover for the Contact Form */}
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
              <h3 className="text-3xl font-bold mb-6 text-center text-white">Get in Touch</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-none shadow-sm bg-white-200 text-white-800 focus:ring-yellow-400 focus:outline-none py-2 px-3"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-none shadow-sm bg-white-200 text-gray-800 focus:ring-yellow-400 focus:outline-none py-2 px-3"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-none shadow-sm bg-white text-gray-800 focus:ring-yellow-400 focus:outline-none py-2 px-3"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-[#4169E1] py-2 rounded-md font-bold hover:bg-[#4169E1] hover:text-white transition-transform transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
