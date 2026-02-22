import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useMode } from "@/contexts/ModeContext";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const { mode } = useMode();
  const userEmail = "pratikgangurde35@gmail.com";
  
  const emailSubject = "Job Opportunity - Interested in Hiring You";
  const emailBody = `Hi Pratik,

I came across your portfolio and I'm really impressed with your work in Electronics & IoT!

I would like to discuss a potential opportunity with you.

---
Company Name: [Your Company Name]
Position: [Job Title/Role]
Location: [City/Remote]
---

Brief Description:
[Please describe the role and what you're looking for]

Looking forward to hearing from you!

Best regards,
[Your Name]
[Your Contact Number]`;

  const mailtoLink = `mailto:${userEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const heroContent = {
    dev: {
      subtitle: "Electronics & IoT Enthusiast | Building Hardware Projects",
      description: "2nd year B.Tech Electronics & Telecommunication student | Exploring IoT, embedded systems, and solving real-world problems through hands-on tech projects.",
    },
    vibecoder: {
      subtitle: "Vibe Coder | Building Web Apps with AI ✨",
      description: "Turning ideas into reality through AI-powered development. I use tools like Lovable to vibe-code beautiful, functional web applications — no boilerplate, just creativity.",
    },
  };

  const content = heroContent[mode];

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 space-y-6 md:pr-10">
          <div className={`transform transition-all duration-1000 delay-100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className={`text-gradient ${mode === "vibecoder" ? "animate-shimmer bg-[length:200%_100%] bg-gradient-to-r from-purple-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent" : ""}`}>Pratik</span>
            </h1>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={mode + "-subtitle"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <h2 className={`text-lg md:text-2xl lg:text-3xl font-medium mb-4 md:mb-6 ${
                mode === "vibecoder" ? "text-purple-300" : "text-gray-700"
              }`}>
                {content.subtitle}
              </h2>
            </motion.div>
          </AnimatePresence>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={mode + "-desc"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className={`transform transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <p className={`text-base md:text-lg mb-6 md:mb-8 ${
                mode === "vibecoder" ? "text-purple-200/70" : "text-gray-600"
              }`}>
                {content.description}
              </p>
            </motion.div>
          </AnimatePresence>
          
          <div className={`flex flex-wrap gap-4 transform transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <a href={mailtoLink}>
              <Button className={`gap-2 ${mode === "vibecoder" ? "animate-glow-pulse" : ""}`}>
                <Mail className="h-4 w-4" />
                Hire Me
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            <a href="#projects">
              <Button variant="outline">View Projects</Button>
            </a>
            <div className="flex items-center gap-4 ml-2">
              <a href="https://github.com/PRATIKABAJIGANGURDE" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/pratik-a-gangurde/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <div className={`relative transform transition-all duration-1000 delay-900 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}>
            <div className={`relative z-10 ${mode === "vibecoder" ? "animate-float" : "animate-bounce-light"}`}>
              <img alt="Pratik A. Gangurde" className="w-3/5 md:w-4/5 max-w-sm mx-auto rounded-full bg-white p-2 shadow-lg aspect-square object-cover" src="/lovable-uploads/6a3d458b-b403-4389-ba2f-ec329232cde8.jpg" />
            </div>
            <div className={`absolute -inset-4 blur-xl rounded-full -z-10 transition-colors duration-700 ${
              mode === "vibecoder"
                ? "bg-gradient-to-r from-purple-500/30 to-cyan-400/30"
                : "bg-gradient-to-r from-primary/20 to-accent/20"
            }`} />
          </div>
        </div>
      </div>
      
      <a href="#about" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
      
      <div className={`absolute top-20 right-10 h-32 w-32 rounded-full blur-2xl pointer-events-none transition-colors duration-700 ${
        mode === "vibecoder" ? "bg-purple-500/15" : "bg-primary/10"
      }`} />
      <div className={`absolute bottom-20 left-10 h-40 w-40 rounded-full blur-3xl pointer-events-none transition-colors duration-700 ${
        mode === "vibecoder" ? "bg-cyan-400/15" : "bg-accent/10"
      }`} />
    </section>
  );
};

export default HeroSection;
