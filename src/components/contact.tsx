"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail } from "lucide-react"
import { useState } from "react"

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/HyugoDev" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/HyugoDev" },
  { icon: Mail, label: "Email", href: "mailto:hyugodev@gmail.com" },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Aquí iría la lógica para enviar el formulario
  }

  return (
    <section className="py-32 relative flex flex-col items-center justify-center overflow-hidden">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-sm font-mono text-primary uppercase tracking-wider">Contacto</h2>
            <p className="text-4xl md:text-5xl font-bold text-balance">Trabajemos juntos</p>
            <p className="text-xl text-muted-foreground text-pretty">
              ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Formulario */}
            <div className="flex flex-col w-max justify-center lg:col-span-2 ">
            <Card className="lg:col-span-3 p-8 bg-card/50 backdrop-blur-sm border-border/50 flex flex-col justify-center">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntame sobre tu proyecto..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Enviar Mensaje
                </Button>
              </form>
            </Card>
            </div>

            {/* Información de contacto */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <h3 className="font-semibold mb-4">Redes Sociales</h3>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                    >
                      <social.icon className="h-5 w-5 text-primary" />
                      <span className="text-sm group-hover:text-primary transition-colors">{social.label}</span>
                    </a>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <h3 className="font-semibold mb-2">Ubicación</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Miramar, Montes de Oro, Costa Rica</p>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <h3 className="font-semibold mb-2">Disponibilidad</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Disponible para nuevos proyectos y oportunidades. Respuesta en 24-48 horas.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container px-4 mt-32">
        <div className="max-w-6xl mx-auto pt-8 border-t border-border/50">
          <p className="text-center text-sm text-muted-foreground">
            © 2026 Hugo Mejias. Desarrollado con Vite y Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  )
}
