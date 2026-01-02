import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Zap } from "lucide-react";
import heroBg from "../assets/futuristic_bg.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />

      <div className="container relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-sm mb-6 backdrop-blur-md">
            SYSTEM STATUS: ONLINE
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading tracking-tighter mb-6">
            Building <br />
            <span className="text-gradient-primary">Digital Experiences</span>
          </h1>

          <p className="text-lg font-mono md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            I build interactive web experiences with a focus on performance, usability, and detail.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#projects"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-transparent font-heading tracking-wider"
            >
              <div className="relative flex items-center gap-2">
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="absolute inset-0 border border-white/20 skew-x-[-12deg] bg-transparent group-hover:bg-white/5 group-hover:border-primary/50 group-hover:skew-x-[-20deg] transition-all duration-300"></div>
            </a>

            <a 
              href="#contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-transparent font-heading tracking-wider"
            >
              <div className="relative flex items-center gap-2">
                <Zap className="w-4 h-4 text-secondary group-hover:text-primary transition-colors" />
                <span>GET IN TOUCH</span>
              </div>
               <div className="absolute inset-0 border border-white/20 skew-x-[-12deg] bg-transparent group-hover:bg-white/5 group-hover:border-secondary/50 group-hover:skew-x-[-20deg] transition-all duration-300"></div>
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
