"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "WEB DESIGN",
    description: "We create modern, responsive, stunning websites.",
    image: "/services/cutting-edge.jpeg", // Replace with actual image path
    buttonLabel: "SEE DETAILS →",
    extraDescription: "",
  },
  {
    title: "APP DESIGN",
    description: "We create sleek, intuitive app designs that enhance user experiences.",
    image: "/services/full-stack.jpeg", // Replace with actual image path
    buttonLabel: "SEE DETAILS →",
    extraDescription: "",
  },
  {
    title: "360 DEVELOPMENT",
    description: "From front-end to back-end, we deliver clean, efficient code.",
    image: "/services/ui-ux.jpeg", // Replace with actual image path
    buttonLabel: "SEE DETAILS →",
    extraDescription: "I OFFER A RANGE OF SERVICES THAT BLEND DESIGN AND DEVELOPMENT TO CREATE SEAMLESS, USER-FOCUSED DIGITAL SOLUTIONS.",
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
              className="group relative bg-white rounded-lg overflow-hidden flex flex-col items-center md:items-start"
            >
              {/* Extra Description for Third Card */}
              {service.extraDescription && (
                <p className="p-4 text-gray-700 text-center md:text-left">
                  {service.extraDescription}
                </p>
              )}

              {/* Image Section */}
              <div className={`relative w-full ${index === 0 ? "h-40" :  "h-64"}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <Button className="bg-[#FFD700] text-black font-bold py-2 px-6 rounded-full uppercase shadow-lg">
                    {service.buttonLabel}
                  </Button>
                </div>
              </div>

              {/* Title and Description */}
              <div className="pt-6 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
