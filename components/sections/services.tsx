"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Web Design",
    description: "Creating beautiful and functional websites that drive results",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=1200&q=80",
  },
  {
    title: "App Design",
    description: "Crafting intuitive mobile experiences that users love",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
  },
  {
    title: "Web Development",
    description: "Building robust and scalable web applications",
    image: "https://images.unsplash.com/photo-1503437313881-503a91226402?w=1200&q=80",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">MY SERVICES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button variant="outline">Details →</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}