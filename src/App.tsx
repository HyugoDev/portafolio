import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

export default function App() {
  return (
    <main className="w-screen min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}
