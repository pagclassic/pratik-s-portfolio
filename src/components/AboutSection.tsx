
// About section component with skills display
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Cpu, Zap, Wifi, Cog, Wrench, Lightbulb, Code2, Palette, Sparkles, Bot } from "lucide-react";
import { useMode } from "@/contexts/ModeContext";
import { motion, AnimatePresence } from "framer-motion";

const AboutSection = () => {
  const { mode } = useMode();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".animate-on-scroll").forEach(el => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  const devSkills = [
    { name: "ESP32", icon: <Cpu className="text-primary" /> },
    { name: "Internet of Things (IoT)", icon: <Wifi className="text-primary" /> },
    { name: "Raspberry Pi", icon: <Zap className="text-accent" /> },
    { name: "C++", icon: <Cog className="text-accent" /> },
  ];

  const devPotentialSkills = [
    { name: "PCB Design", icon: <Wrench className="text-primary" /> },
    { name: "Arduino IDE", icon: <Lightbulb className="text-accent" /> },
  ];

  const vibeSkills = [
    { name: "React & TypeScript", icon: <Code2 className="text-primary" /> },
    { name: "Tailwind CSS", icon: <Palette className="text-primary" /> },
    { name: "Lovable (AI Dev)", icon: <Sparkles className="text-accent" /> },
    { name: "Framer Motion", icon: <Zap className="text-accent" /> },
  ];

  const vibePotentialSkills = [
    { name: "AI Agents", icon: <Bot className="text-primary" /> },
    { name: "Full-Stack Apps", icon: <Code2 className="text-accent" /> },
  ];

  const masteredSkills = mode === "vibecoder" ? vibeSkills : devSkills;
  const potentialSkills = mode === "vibecoder" ? vibePotentialSkills : devPotentialSkills;

  const aboutText = mode === "vibecoder"
    ? "I'm a vibe coder who builds web applications using AI-powered tools like Lovable. I believe in turning ideas into reality through natural language — no boilerplate, just creative problem-solving. From animated portfolios to full-stack apps, I use AI to ship fast and iterate even faster. The future of development is collaborative, and I'm here for it."
    : "I'm a 2nd year B.Tech Electronics & Telecommunication student passionate about IoT, embedded systems, and solving real-world problems through smart technology. I enjoy working with microcontrollers like the ESP32, integrating sensors, and building automation-based projects.\n\nMy learning is mostly hands-on — from automating water supply systems to experimenting with new modules and wireless communication protocols. I'm always exploring how hardware and software come together to create efficient and innovative solutions.\n\nI'm excited to keep learning, building impactful projects, and growing in the field of electronics and smart systems.";

  return (
    <section id="about" className="section py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
              About <span className="text-gradient">Me</span>
            </h2>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={mode + "-about"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-4 animate-on-scroll"
                style={{ transitionDelay: "200ms" }}
              >
                <p className="text-muted-foreground">{aboutText}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="w-full md:w-1/2 animate-on-scroll h-full" style={{ transitionDelay: "600ms" }}>
            <Card className={`p-4 md:p-6 h-full flex flex-col my-4 md:my-[45px] relative overflow-hidden ${
              mode === "vibecoder" ? "animate-glow-pulse" : ""
            }`}>
              <h3 className="text-lg md:text-xl font-medium mb-4 md:mb-6">Skills & Expertise</h3>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={mode + "-skills"}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-4">
                    {masteredSkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex items-center gap-2 p-2.5 md:p-3 rounded-lg transition-colors bg-primary/10 border border-primary/20 ${
                          mode === "vibecoder" ? "hover:bg-primary/20 hover:scale-105 transition-transform" : ""
                        }`}
                      >
                        {skill.icon}
                        <span className="text-sm font-medium">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 blur-sm">
                      {potentialSkills.map((skill, index) => (
                        <div key={index} className="flex items-center gap-2 p-2.5 md:p-3 rounded-lg transition-colors bg-accent/10 border border-accent/20">
                          {skill.icon}
                          <span className="text-sm">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px] rounded-lg">
                      <div className="text-center p-2">
                        <div className="text-sm font-semibold text-white mb-1">
                          🚧 Potential Skills
                        </div>
                        <div className="text-xs text-gray-300">
                          Currently working on mastering
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
