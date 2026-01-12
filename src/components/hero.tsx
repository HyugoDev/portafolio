import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Fondo con efecto grid futurista */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Efecto de luz gradiente */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-accent/20 animate-glow" />

      <div className="container relative z-10 px-4 py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Disponible para nuevos proyectos
          </div>

          {/* Título principal */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
            Hugo Mejias
            <span className="block text-primary mt-2">Junior Software Developer</span>
          </h1>

          {/* Descripción */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Desarrollador de software junior enfocado en crear soluciones eficientes con Java, React y bases de datos
            SQL
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            {/* <Button size="lg" className="group">
              Ver Proyectos
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button> */}
            <Button size="lg" variant="outline" asChild>
              <a href="/Hugo_Mejias_CV.pdf" download="CV-Hugo-Mejias.pdf" className="group">
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                Descargar CV
              </a>
            </Button>
            {/* <Button size="lg" variant="outline">
              Contactar
            </Button> */}
          </div>

          {/* Redes sociales */}
          <div className="flex items-center justify-center gap-4 pt-8">
            <Button size="icon" variant="ghost" className="rounded-full" asChild>
              <a href="https://github.com/HyugoDev" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button size="icon" variant="ghost" className="rounded-full" asChild>
              <a href="https://linkedin.com/in/HyugoDev" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button size="icon" variant="ghost" className="rounded-full" asChild>
              <a href="mailto:hyugodev@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  )
}
