"use client"

import { motion } from "framer-motion"

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Projects Completed" },
  { value: "15+", label: "Happy Clients" },
  { value: "4+", label: "Customer Rating" }
]

export function WorkExperience() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-[#4169E1]"> 
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-white">MY WORK EXPERIENCE</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}