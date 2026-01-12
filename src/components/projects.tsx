import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"


const projects = [
  {
    title: "Inventory Management API",
    description:
      "Aplicación backend en Java para gestionar inventarios de productos. API RESTful con Spring Boot para operaciones CRUD y uso de bases de datos SQL para almacenamiento persistente.",
    image: "/inventory-management-api-dashboard.png",
    tags: ["Java", "Spring Boot", "SQL", "REST API"],
    links: {
      github: "https://github.com/HyugoDev/InventoryManagementAPI",
      demo: "#",
    },
  },
  {
    title: "Sistema de Retenciones Municipales",
    description:
      "Aplicación web completa para gestión de retenciones de facturas en contabilidad municipal. Frontend en Next.js con backend en Node.js integrado con bases de datos SQL.",
    image: "",
    tags: ["Next.js", "Node.js", "SQL", "React"],
    links: {
      github: "#",
      demo: "#",
    },
  },
]

export function Projects() {
  return (
    <section className="py-32 flex items-center justify-center overflow-hidden">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="space-y-4 mb-16">
            <h2 className="text-sm font-mono text-primary uppercase tracking-wider">Proyectos</h2>
            <p className="text-4xl md:text-5xl font-bold text-balance">Trabajos destacados</p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.png"}
                    alt={project.title}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card to-transparent opacity-60" />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button size="sm" variant="outline" className="gap-2 bg-transparent" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        Código
                      </a>
                    </Button>
                    {project.links.demo !== "#" && (
                      <Button size="sm" className="gap-2" asChild>
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
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
