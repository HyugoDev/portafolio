import { Card } from "@/components/ui/card"
import { Code2, Database, Globe, Zap } from "lucide-react"

const skills = [
  {
    icon: Code2,
    title: "Lenguajes",
    description: "Java, JavaScript, HTML, CSS, SQL",
  },
  {
    icon: Globe,
    title: "Frontend",
    description: "React, Next.js, diseño web",
  },
  {
    icon: Database,
    title: "Backend",
    description: "Java SE, Spring, Hibernate, Node.js",
  },
  {
    icon: Zap,
    title: "Herramientas",
    description: "Git, GitHub, VS Code, IntelliJ IDEA",
  },
]

export function About() {
  return (
    <section className="py-32 relative flex items-center justify-center overflow-hidden">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-sm font-mono text-primary uppercase tracking-wider">Sobre Mí</h2>
            <p className="text-4xl md:text-5xl font-bold text-balance">
              Apasionado por el <span className="text-primary">desarrollo de software</span>
            </p>
          </div>

          {/* Bio */}
          <div className="max-w-3xl mx-auto mb-16">
            <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50">
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Desarrollador de software junior con experiencia práctica en Java, bases de datos SQL y desarrollo web.
                Enfocado en aprender rápidamente, trabajar en equipo y aportar soluciones eficientes siguiendo buenas
                prácticas de desarrollo. Con habilidades en React, Node.js y metodologías ágiles.
              </p>
            </Card>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <skill.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
