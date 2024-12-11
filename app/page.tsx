import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { RecentWorks } from "@/components/sections/recent-works"
import { WorkExperience } from "@/components/sections/work-experience"
import { WorkProcess } from "@/components/sections/work-process"
import { Testimonials } from "@/components/sections/testimonials"
import { Workstation } from "@/components/sections/workstation"
import { Contact } from "@/components/sections/contact"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <Services />
        <RecentWorks />
        <WorkExperience />
        <WorkProcess />
        {/* <Testimonials /> */}
        <Workstation />
        <Contact />
      </main>
      <Footer />
    </>
  )
}