"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    text: "Alex transformed our website into a modern masterpiece. Their attention to detail and creative solutions exceeded our expectations.",
    author: "John Smith",
    role: "CEO, TechStart",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
  },
  {
    text: "Working with Alex was a pleasure. They understood our vision perfectly and delivered exceptional results on time.",
    author: "Sarah Chen",
    role: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
  },
  {
    text: "The mobile app Alex designed for us has received amazing feedback from our users. Highly recommended!",
    author: "David Miller",
    role: "Startup Founder",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
  }
]

export function Testimonials() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">TESTIMONIALS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <p className="text-gray-600 mb-6">"{testimonial.text}"</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}