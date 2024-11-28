"use client"

import { useState } from 'react'
import { motion } from "framer-motion"
import { Terminal } from "lucide-react"
import { TypeAnimation } from './type-animation'

export function AboutTerminal() {
  const [showJson, setShowJson] = useState(false)

  const jsonContent = {
    sonhos: [
      "Fundar empresa de tecnologia",
      "Liderar projetos inovadores",
      "Impactar positivamente a vida das pessoas"
    ],
    valores: [
      "Fé",
      "Disciplina",
      "Determinação",
      "Criatividade"
    ],
    objetivo: "Desenvolvedor Full-Stack",
    status: "Transformando ideias em código... 💻"
  }

  return (
    <div className="relative space-y-6">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-primary" />
          <span className="text-muted-foreground">terminal</span>
        </div>
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
      </div>
      
      <div className="space-y-4 font-mono text-sm">
        <div className="flex items-center gap-2">
          <span className="text-primary">~/about</span>
          <span className="text-muted-foreground">$</span>
          <TypeAnimation
            strings={['cat dreams.json']}
            typeSpeed={50}
            onComplete={() => setShowJson(true)}
          />
        </div>
        
        {showJson && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-4 rounded-lg bg-accent/20"
          >
            <pre className="whitespace-pre-wrap">
              {JSON.stringify(jsonContent, null, 2)}
            </pre>
          </motion.div>
        )}
      </div>
    </div>
  )
} 