"use client"

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { TypeAnimation } from "@/components/type-animation";
import { TerminalCommands } from "@/components/terminal-commands";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { AboutSection } from "@/components/about-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, hsl(var(--primary)/0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, hsl(var(--primary)/0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, hsl(var(--primary)/0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <nav className="fixed top-0 w-full z-50">
        <div className="container flex h-16 items-center justify-between">
          <motion.div 
            className="px-4 py-2 rounded-full bg-background/60 backdrop-blur-xl backdrop-saturate-150 border border-border/40"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-mono text-2xl font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
              {"<Dev />"}
            </h1>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="hidden md:flex items-center gap-1 bg-background/60 backdrop-blur-xl backdrop-saturate-150 rounded-full border border-border/40 px-2">
              <Button 
                variant="ghost" 
                className="font-space-grotesk relative group px-4 py-2 hover:bg-accent/20 hover:backdrop-blur-sm rounded-full transition-all duration-300"
              >
                <span className="relative z-10">Projetos</span>
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/10 to-purple-600/10 blur-sm" />
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-primary/20" />
              </Button>
              
              <Button 
                variant="ghost" 
                className="font-space-grotesk relative group px-4 py-2 hover:bg-accent/20 hover:backdrop-blur-sm rounded-full transition-all duration-300"
              >
                <span className="relative z-10">Sobre</span>
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/10 to-purple-600/10 blur-sm" />
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-primary/20" />
              </Button>
              
              <Button 
                variant="ghost" 
                className="font-space-grotesk relative group px-4 py-2 hover:bg-accent/20 hover:backdrop-blur-sm rounded-full transition-all duration-300"
              >
                <span className="relative z-10">Contato</span>
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/10 to-purple-600/10 blur-sm" />
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-primary/20" />
              </Button>
            </div>
            
            <div className="bg-background/60 backdrop-blur-xl backdrop-saturate-150 p-1.5 rounded-full border border-border/40">
              <ThemeToggle />
            </div>
          </motion.div>
        </div>
      </nav>

      <main className="container pt-32">
        <div className="flex flex-col items-center justify-center min-h-[60vh] mb-16">
          <div className="w-full max-w-3xl space-y-8 relative">
            <div className="absolute inset-0 w-full h-[400px]">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-600/20 to-blue-600/20 rounded-xl blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
            <motion.div
              className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-md p-6 relative overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Terminal size={16} />
                  <span className="text-sm">terminal</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
              </div>
              <div className="space-y-4 font-mono">
                <TerminalCommands />
              </div>
            </motion.div>
            <motion.div 
              className="flex gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 hover:opacity-90 rounded-xl transform hover:scale-105 transition-all"
              >
                Ver Projetos
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="backdrop-blur-sm bg-background/50 rounded-xl border-primary/50 hover:border-primary transform hover:scale-105 transition-all"
              >
                Contato
              </Button>
            </motion.div>

            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
          </div>
        </div>

      </main>
    </div>
  );
}
