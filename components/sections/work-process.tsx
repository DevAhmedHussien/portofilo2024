"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const processes = [
  {
    title: "1. Research & Discovery",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
  },
  {
    title: "2. Design & Planning",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80"
  },
  {
    title: "3. Development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80"
  },
  {
    title: "4. Launch & Review",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
  }
]

export function WorkProcess() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">MY WORK PROCESS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <motion.div
              key={process.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <Image
                src={process.image}
                alt={process.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-center">{process.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}