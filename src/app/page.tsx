"use client"

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(var(--primary), 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgba(var(--primary), 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, rgba(var(--primary), 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <nav className="fixed top-0 w-full border-b border-border/40 bg-background/60 backdrop-blur-xl backdrop-saturate-150 z-50 rounded-b-xl">
        <div className="container flex h-16 items-center justify-between">
          <h1 className="font-mono text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            {"<Dev />"}
          </h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="font-space-grotesk relative group">
              Projetos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Button>
            <Button variant="ghost" className="font-space-grotesk relative group">
              Sobre
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Button>
            <Button variant="ghost" className="font-space-grotesk relative group">
              Contato
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <main className="container pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
          <div className="space-y-8 relative">
            <motion.div
              className="rounded-xl border bg-card/50 backdrop-blur-md p-6 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                <Terminal size={16} />
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-primary">~/portfolio</span>
                  <span className="text-muted-foreground">$</span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    whoami
                  </motion.span>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                >
                  <span className="text-xl text-primary font-mono">Rafael Porto</span>
                  <p className="text-muted-foreground mt-2">
                    Desenvolvedor full-stack em formação, apaixonado por tecnologia.
                  </p>
                </motion.div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">~/portfolio</span>
                  <span className="text-muted-foreground">$</span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1.1 }}
                    className="animate-pulse"
                  >
                    █
                  </motion.span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="flex gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 rounded-xl">
                Ver Projetos
              </Button>
              <Button size="lg" variant="outline" className="backdrop-blur-sm bg-background/50 rounded-xl">
                Contato
              </Button>
            </motion.div>
          </div>

          <motion.div 
            className="relative aspect-square"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" />
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {["React", "Node.js", "TypeScript", "Next.js"].map((tech, index) => (
            <motion.div
              key={tech}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
            >
              <Card className="group backdrop-blur-md bg-background/50 border-border/50 hover:bg-accent/30 transition-all duration-300">
                <CardContent className="p-6">
                  <p className="font-mono text-center group-hover:scale-105 transition-transform">
                    {tech}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
