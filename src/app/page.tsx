import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <h1 className="text-2xl font-bold">Seu Nome</h1>
          <ThemeToggle />
        </div>
      </nav>

      <main className="container pt-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Sobre Mim</h2>
              <p className="text-muted-foreground">
                Desenvolvedor Full Stack apaixonado por criar soluções inovadoras.
              </p>
            </CardContent>
          </Card>

          {/* Adicione mais cards para Projetos, Habilidades, etc */}
        </div>
      </main>
    </div>
  );
}
