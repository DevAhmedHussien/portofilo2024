"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"
import { HiArrowLeft, HiArrowRight } from "react-icons/hi"
const testimonials = [
  {
    text: "Alex transformed our website with his exceptional design skills and technical expertise. The user feedback has been phenomenal!",
    author: "Emily Carter",
    role: "Product Manager at Technova",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
  },
  {
    text: "Alex's attention to detail and user-centric approach resulted in a beautiful and functional platform that our customers love.",
    author: "Sophia Lee",
    role: "Marketing Lead at GreenSpaces",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
  },
  {
    text: "Jawad is a rare talent who excels at both UI/UX design and full-stack development. He delivered our project on time and with perfection.",
    author: "Michael Grant",
    role: "Operations Manager at Bright",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
  },
  {
    text: "Alex delivered a modern and responsive website that exceeded our expectations. Our clients love it!",
    author: "Lisa Brown",
    role: "Creative Director at InnovateX",
    avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=100&q=80"
  },
  {
    text: "Jawad's full-stack expertise helped us launch our app ahead of schedule. Exceptional work!",
    author: "Mark Wilson",
    role: "CTO at DevWorks",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80"
  },
  {
    text: "Sophia's marketing insights were invaluable in growing our user base. Highly recommended!",
    author: "Anna Taylor",
    role: "Marketing Director at MarketPro",
    avatar: "https://images.unsplash.com/photo-1546961327-3f4f55e79989?w=100&q=80"
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Handle right navigation
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  // Handle left navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Handle key events for navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") handleNext()
      if (event.key === "ArrowLeft") handlePrev()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">TESTIMONIALS</h2>
        <div className="overflow-hidden relative">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-full md:min-w-[calc(100%/3)] p-4">
                <div className="bg-gray-50 p-6 rounded-lg border h-full flex flex-col justify-between">
                  <p className="text-gray-700 mb-6 text-base">"{testimonial.text}"</p>
                  <div className="flex items-center mt-auto">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      width={50}
                      height={50}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>


        {/* Navigation Arrows */}
        <div className="flex justify-center mt-8 gap-4">
          <button
            onClick={handlePrev}
            className="bg-yellow-400 text-black rounded-full w-10 h-10 flex items-center justify-center"
            aria-label="Previous"
          >
            <HiArrowLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="bg-yellow-400 text-black rounded-full w-10 h-10 flex items-center justify-center"
            aria-label="Next"
          >
            <HiArrowRight size={24} />
          </button>
        </div>
       
        </div>
      </div>
    </section>
  )
}
