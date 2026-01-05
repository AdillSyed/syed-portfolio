import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-8 border-t border-white/10 text-center text-muted-foreground text-sm font-mono">
        <p>© {new Date().getFullYear()} Syed's Portfolio.</p>
      </footer>
    </div>
  );
}
