import { motion } from "framer-motion";
import { Terminal, Cpu, Globe, Database } from "lucide-react";

const skills = [
  { category: "Frontend", icon: Globe, items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js"] },
  { category: "Backend", icon: Database, items: ["Node.js", "PostgreSQL", "GraphQL", "Python", "Redis"] },
  { category: "System", icon: Cpu, items: ["Docker", "AWS", "CI/CD", "Linux", "Git"] },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/20 relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
              Crafting interactive<br /> 
              <span className="text-gradient-primary">Web Applications</span>
            </h2>
            <p className="text-lg font-mono text-muted-foreground mb-6 leading-relaxed">
              I’m a multidisciplinary developer with a strong focus on frontend engineering. I enjoy bridging design and functionality to build interfaces that feel intuitive, responsive, and intentional.
            </p>
            <p className="text-lg font-mono text-muted-foreground mb-8 leading-relaxed">
             Currently experimenting with UI animations, WebGL, and AI-assisted user experiences.
            </p>
            <div className="p-6 rounded-lg glass border border-primary/20 font-mono text-sm text-green-400">
              <div className="flex items-center gap-2 mb-4 border-b border-primary/20 pb-2">
                <Terminal className="w-4 h-4" />
                <span>terminal@portfolio:~</span>
              </div>
              <div className="space-y-2">
                <p>$ whoami</p>
                <p className="text-white">Full Stack Developer & UI Enthusiast</p>
                <p>$ echo $CURRENT_FOCUS</p>
                <p className="text-white">Building immersive web experiences</p>
                <p className="animate-pulse">$ _</p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-card/30 backdrop-blur-sm border border-white/5 p-6 rounded-xl hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-heading">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map(item => (
                    <span key={item} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-sm font-mono hover:bg-white/10 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
