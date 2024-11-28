"use client"

import { motion } from "framer-motion"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { ExternalLink, Github, Star } from "lucide-react"

const projects = [
  {
    title: "Nebris",
    description: "Um gerador de elementos e estilos para o CSS, com preview em tempo real.",
    tags: ["React", "TypeScript", "Tailwind", "Nextjs"],
    image: "/project1.png",
    github: "https://github.com/user/project1",
    demo: "https://project1.demo",
    featured: true
  },
]

export function ProjectsSection() {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="container space-y-12"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
            Projetos em Destaque
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma seleção dos meus melhores trabalhos, demonstrando minhas habilidades em desenvolvimento web e solução de problemas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full overflow-hidden border-border/50 bg-background/50 backdrop-blur-sm hover:bg-accent/5 transition-all duration-300">
                <div className="relative aspect-video">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-background/60 backdrop-blur-sm px-2 py-1 rounded-full border border-primary/20">
                      <Star className="w-3 h-3 text-primary" />
                      <span className="text-xs">Destaque</span>
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="mt-2 text-muted-foreground line-clamp-2">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span 
                        key={tag}
                        className="px-2 py-1 rounded-full text-xs bg-accent/50 backdrop-blur-sm border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="group relative px-4 py-2 rounded-full hover:bg-accent/20 transition-all duration-300"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <Github className="w-4 h-4" />
                        Código
                      </span>
                      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 blur-sm" />
                      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-primary/20" />
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="group relative px-4 py-2 rounded-full hover:bg-accent/20 transition-all duration-300"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </span>
                      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 blur-sm" />
                      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-primary/20" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 