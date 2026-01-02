import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const projects = [
  {
    title: "Interior Portfolio",
    description: "Built a portfolio for an interior designer following mobile first approach showcasing their project's and experiences to their clients.",
    tags: ["React.js", "Framer Motion", "Tailwind"],
    image: "../../src/assets/interior.png",
    github: "https://github.com/AdillSyed/interior-portfolio",
    live: "https://namratha.netlify.app/"
  },
  {
    title: "API Chaos Tester",
    description: "Built an application to simulate API failures (latency, HTTP errors, offline states) to validate frontend resilience.",
    tags: ["React", "API", "Tailwind"],
    image: "../../src/assets/chaos.png",
    github: "https://github.com/AdillSyed/api-chaos-tester",
    live: "https://api-chaos-tester.netlify.app/"
  },
  {
    title: "React Workflow",
    description: "A visual workflow builder built with React and React Flow, allowing users to create, configure, validate, and export workflows using a node-based editor..",
    tags: ["React.js", "reactflow", "zustand"],
    image: "../../src/assets/workflow.png",
    github: "https://github.com/AdillSyed/react-flow",
    live: "https://react-workflow.vercel.app/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Selected Works</h2>
          <div className="h-1 w-20 bg-primary/50" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass-card overflow-hidden group h-full border-none rounded-xl">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold font-heading group-hover:text-primary transition-colors">{project.title}</h3>
                    <div className="flex gap-2 text-muted-foreground">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open live project"
                      >
                        <Github href={project.github}className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open live project"
                      >
                        <ExternalLink href={project.live}className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                      </a>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="font-mono text-xs bg-secondary/10 text-secondary hover:bg-secondary/20 border-secondary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
