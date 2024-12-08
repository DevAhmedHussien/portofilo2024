"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const works = [
  {
    title: "React Development",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    category: "Web Development"
  },
  {
    title: "App Design & Development",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&q=80",
    category: "Mobile App"
  },
  {
    title: "Magazine App",
    image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=800&q=80",
    category: "UI/UX Design"
  },
  {
    title: "Crypto App Development",
    image: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?w=800&q=80",
    category: "Mobile App"
  }
]

export function RecentWorks() {
  return (
    <section id="works" className="py-20 px-4 md:px-6 lg:px-8 bg-[#4169E1]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-white">MY RECENT WORKS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-lg"
            >
              <Image
                src={work.image}
                alt={work.title}
                width={600}
                height={400}
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-6">
                <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                <p className="text-sm">{work.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}