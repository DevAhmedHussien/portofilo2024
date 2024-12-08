"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const equipment = [
  {
    title: "M1 Mac Studio 2023",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80"
  },
  {
    title: "iPad Pro",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80"
  },
  {
    title: "My Monitor",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80"
  },
  {
    title: "MX Master 3",
    image: "https://images.unsplash.com/photo-1527443195645-1133f7f28990?w=800&q=80"
  }
]

export function Workstation() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-[#4169E1]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-white">MY WORKSTATION</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {equipment.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <h3 className="text-white text-xl font-bold text-center">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}