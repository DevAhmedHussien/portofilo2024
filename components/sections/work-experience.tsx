"use client"

import { motion } from "framer-motion"

const stats = [
  { value: "07", label: "Years Experience" },
  { value: "270", label: "Projects Completed" },
  { value: "12", label: "Happy Clients" },
  { value: "4.8", label: "Customer Rating" }
]

export function WorkExperience() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">MY WORK EXPERIENCE</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-[#4169E1] mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}