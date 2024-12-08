"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen bg-[#4169E1] text-white px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              UI UX<br />DESIGNER
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              FULL STACK CODER
            </h2>
            <p className="text-lg mb-8 max-w-lg">
              Passionate about creating beautiful, functional, and user-centered digital experiences
            </p>
            <Button
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-500"
            >
              Let's Talk
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square"
          >
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80"
              alt="Professional headshot"
              fill
              className="rounded-lg shadow-xl object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}