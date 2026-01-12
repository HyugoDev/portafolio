import { Card } from "@/components/ui/card"

const experiences = [
  {
    period: "Mayo 2024 — Nov 2024",
    role: "Desarrollador de Software Junior",
    company: "Municipalidad de Montes de Oro",
    location: "Miramar, Montes de Oro, Costa Rica",
    description:
      "Desarrollo de aplicación interna para contabilidad que optimiza el proceso de retenciones a facturas de proveedores. Colaboración en equipo con el área de contabilidad para entender requerimientos y asegurar funcionalidad adecuada.",
    highlights: [
      "Desarrollo de aplicación en Next.js con interfaz gráfica para gestionar retenciones de facturas",
      "Backend en Node.js para lógica de negocio e integración con bases de datos SQL",
      "Implementación de buenas prácticas de codificación y pruebas para asegurar calidad",
      "Colaboración efectiva con equipo de contabilidad adaptando la aplicación a necesidades específicas",
    ],
    tags: ["Next.js", "Node.js", "SQL", "React"],
  },
]

const education = {
  institution: "Universidad Estatal a Distancia (UNED)",
  degree: "Bachillerato en Ingeniería en Informática",
  period: "Enero 2020 — Dic 2024",
  location: "Puntarenas, Costa Rica",
}

export function Experience() {
  return (
    <section className="py-32 bg-card/30 flex items-center justify-center overflow-hidden">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="space-y-4 mb-16">
            <h2 className="text-sm font-mono text-primary uppercase tracking-wider">Experiencia</h2>
            <p className="text-4xl md:text-5xl font-bold text-balance">Mi trayectoria profesional</p>
          </div>

          {/* Timeline */}
          <div className="space-y-8 mb-16">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-primary">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="space-y-4 mb-8">
            <h2 className="text-sm font-mono text-primary uppercase tracking-wider">Educación</h2>
          </div>
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
              <div>
                <h3 className="text-xl font-semibold">{education.degree}</h3>
                <p className="text-primary">{education.institution}</p>
                <p className="text-sm text-muted-foreground">{education.location}</p>
              </div>
              <span className="text-sm text-muted-foreground font-mono">{education.period}</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
