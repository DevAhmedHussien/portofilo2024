"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const works = [
   {
    title: "Joey med Telehealth ",
    image: "/recent/joey.webp",
    link: "https://joeymed.com/",
    public: true,
    category: "Next App"
  },
  {
    title: "Ascend Rehab Inc.",
    image: "/recent/ascend-rehab.webp",
    link: "https://www.ascendrehabinc.com/",
    public: true,
    category: "React App"
  },
  {
    title: "Medi Doc Pro",
    image: "/recent/medi-doc-pro.webp",
    link: "https://medidocpro.com/",
    public: true,
    category: "React App"
  },
  {
    title: "PGM Global Inc",
    image: "/recent/pgm-global.webp",
    link: "",
    public: false,
    category: "React App & UI/UX Design",
    tooltip: "It is confidentials"
  },
  // {
  //   title: "Enableu",
  //   image: "/recent/enableu-app.webp",
  //   link: "https://enableu.com/",
  //   public: true,
  //   category: "Angular App"
  // },
  {
    title: "Internet Service Provider System",
    image: "/recent/sms.webp",
    link: "https://speedwayinternet.herokuapp.com/",
    public: true,
    category: "Next App"
  },
  {
    title: "Bond Legal Injury Lawyers",
    image: "/recent/bond.webp",
    link: "https://attorneysfortheinjured.com/",
    public: true,
    category: "WordPress"
  },
  {
    title: "Kariba Farms",
    image: "/recent/kariba.webp",
    link: "https://karibafarms.com/",
    public: true,
    category: "WordPress"
  }
]

export function RecentWorks() {
  return (
    <section id="works" className="py-20 px-4 md:px-6 lg:px-8 bg-[#4169E1]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-white">MY RECENT WORKS</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                width={300}
                height={200}
                className="w-full h-[200px] transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center text-center items-center text-white p-6">
                <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                <p className="text-sm">{work.category}</p>
                {work.public && <a href={work.link} target="_blank" className="bg-yellow-400 text-black hover:bg-yellow-500 px-5 py-1 rounded-md mt-3 text-sm">View</a>}
              </div>
            </motion.div>
          ))}
          <motion.div
              key="more"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 7 * 0.1 }}
              className="relative group overflow-hidden rounded-lg bg-secondary"
            >
            <div className="text-4xl flex items-center justify-center w-full h-[200px]">+50
              {/* &nbsp;<span className="text-gray text-xl">More</span> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}