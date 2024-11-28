"use client"

import { motion } from "framer-motion"
import { Card } from "./ui/card"
import { SiReact, SiNodedotjs, SiTypescript, SiJavascript, SiTailwindcss, SiNextdotjs, SiGit, SiMongodb, SiHtml5, SiCss3 } from "react-icons/si"

const skillsByCategory = {
  frontend: {
    title: "Frontend",
    description: "Tecnologias para criar interfaces modernas e responsivas",
    skills: [
      {
        name: "HTML",
        icon: SiHtml5,
        level: 90,
        color: "#E34F26"
      },
      {
        name: "CSS",
        icon: SiCss3,
        level: 85,
        color: "#1572B6"
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        level: 5,
        color: "#F7DF1E"
      },
      {
        name: "React",
        icon: SiReact,
        level: 1,
        color: "#61DAFB"
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        level: 5,
        color: "#ffffff"
      },
      {
        name: "Tailwind",
        icon: SiTailwindcss,
        level: 15,
        color: "#06B6D4"
      },
    ]
  },
  backend: {
    title: "Backend",
    description: "Tecnologias para construir APIs e servidores robustos",
    skills: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        level: 1,
        color: "#339933"
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        level: 1,
        color: "#47A248"
      }
    ]
  },
  tools: {
    title: "Ferramentas & Outros",
    description: "Ferramentas essenciais para desenvolvimento",
    skills: [
      {
        name: "Git",
        icon: SiGit,
        level: 75,
        color: "#F05032"
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        level: 1,
        color: "#3178C6"
      }
    ]
  }
}

export function SkillsSection() {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="container space-y-16"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
            Habilidades & Tecnologias
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tecnologias que utilizo no dia a dia para criar soluções web modernas e escaláveis
          </p>
        </div>

        <div className="space-y-16">
          {Object.entries(skillsByCategory).map(([key, category]) => (
            <div key={key} className="space-y-8">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">{category.title}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="group h-full p-6 border-border/50 bg-background/50 backdrop-blur-sm hover:bg-accent/5 transition-all duration-300">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <skill.icon className="w-6 h-6" style={{ color: skill.color }} />
                          <h3 className="font-semibold">{skill.name}</h3>
                        </div>

                        <div className="h-2 bg-accent/50 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>

                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>Proficiência</span>
                          <span>{skill.level}%</span>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 