"use client"

import { motion } from "framer-motion"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { Code2, Coffee, Gamepad2, Heart, Music4, Terminal } from "lucide-react"
import { AboutTerminal } from "./about-terminal"

const interests = [
  { icon: Code2, label: "Programação", color: "text-blue-500" },
  { icon: Music4, label: "Música", color: "text-indigo-500" },
  { icon: Coffee, label: "Café", color: "text-amber-500" },
  { icon: Gamepad2, label: "Games", color: "text-violet-500" },
  { icon: Heart, label: "Inovação", color: "text-red-500" },
]

export function AboutSection() {
  return (
    <section className="py-20 relative">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="container"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Coluna de texto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                Sobre Mim
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                👋 Olá! Sou Rafael Porto, apaixonado por tecnologia e pela arte de criar coisas incríveis com código. 
                Desde jovem, sempre admirei computadores e sonhei em criar algo único, mas foi aos 15 anos que comecei 
                minha jornada no mundo da programação. Apesar das pausas e recomeços, minha determinação nunca diminuiu.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                O que mais me motiva na programação é a liberdade de construir o que eu quiser, do meu jeito, usando 
                a criatividade e o raciocínio lógico para dar vida às ideias. Atualmente, estou aprendendo JavaScript, 
                React, Next.js e TailwindCSS, com o objetivo de me tornar um desenvolvedor full-stack.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Interesses</h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="p-4 border-border/50 bg-background/50 backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                        <span>{item.label}</span>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <Button 
                size="lg"
                className="group relative px-6 py-2 rounded-full hover:bg-accent/20 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  Ver Currículo
                </span>
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 blur-sm" />
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-primary/20" />
              </Button>
            </div>
          </motion.div>

          {/* Coluna de elementos visuais */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Card className="relative p-6 border-border/50 bg-background/50 backdrop-blur-sm overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-violet-500/20 blur-2xl" />
              <AboutTerminal />
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
} 