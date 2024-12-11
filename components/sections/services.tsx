"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Cutting-Edge Frontend Development",
    description: "Delivering modern, interactive, and scalable web applications using top frameworks like React, Angular, and Next.js. Specializing in creating seamless and engaging user experiences that captivate and retain users.",
    image: "/services/cutting-edge.jpeg",
  },
  {
    title: "Full-Stack Integration",
    description: "Building robust, scalable, and high-performance web platforms by combining frontend expertise with backend technologies such as Node.js, Nest.js, and Python. Ensuring smooth and efficient application architecture.",
    image: "/services/full-stack.jpeg",
  },
  {
    title: "UI/UX Excellence",
    description: "Transforming complex ideas into elegant, functional interfaces. Prioritizing responsiveness, speed, and accessibility to maximize user engagement and satisfaction.",
    image: "/services/ui-ux.jpeg",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 uppercase">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg"
            >

              {/* Image Section */}
              <div className="relative w-full h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Title and Description */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                {/* <Button variant="outline">Details →</Button> */}
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
