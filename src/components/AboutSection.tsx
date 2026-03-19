
// About section component with skills display
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Cpu, Zap, Wifi, Cog, Wrench, Lightbulb } from "lucide-react";
import { useMode } from "@/contexts/ModeContext";
import { motion, AnimatePresence } from "framer-motion";

// AI Tools Arsenal for Vibe Coder
const aiArsenal = [
  {
    name: "Lovable",
    emoji: "💜",
    tagline: "Build full apps by chatting",
    gradient: "from-purple-500/20 to-violet-600/10",
    border: "border-purple-500/30",
    hoverBorder: "hover:border-purple-400/60",
    glow: "hover:shadow-purple-500/20",
  },
  {
    name: "ChatGPT",
    emoji: "🧠",
    tagline: "Think, plan & debug with AI",
    gradient: "from-green-500/20 to-emerald-600/10",
    border: "border-green-500/30",
    hoverBorder: "hover:border-green-400/60",
    glow: "hover:shadow-green-500/20",
  },
  {
    name: "Cursor",
    emoji: "⚡",
    tagline: "AI-first code editor",
    gradient: "from-blue-500/20 to-cyan-600/10",
    border: "border-blue-500/30",
    hoverBorder: "hover:border-blue-400/60",
    glow: "hover:shadow-blue-500/20",
  },
  {
    name: "Framer",
    emoji: "🎨",
    tagline: "Design & prototype fast",
    gradient: "from-pink-500/20 to-rose-600/10",
    border: "border-pink-500/30",
    hoverBorder: "hover:border-pink-400/60",
    glow: "hover:shadow-pink-500/20",
  },
  {
    name: "Vercel",
    emoji: "🚀",
    tagline: "Deploy in seconds",
    gradient: "from-slate-400/20 to-slate-600/10",
    border: "border-slate-400/30",
    hoverBorder: "hover:border-slate-300/60",
    glow: "hover:shadow-slate-400/20",
  },
  {
    name: "GitHub",
    emoji: "🐙",
    tagline: "Version control everything",
    gradient: "from-orange-500/20 to-amber-600/10",
    border: "border-orange-500/30",
    hoverBorder: "hover:border-orange-400/60",
    glow: "hover:shadow-orange-500/20",
  },
];

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
            <AnimatePresence mode="wait">
              {mode === "vibecoder" ? (
                <motion.div
                  key="vibe-arsenal"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="my-4 md:my-[45px]"
                >
                  {/* Header */}
                  <div className="mb-4 flex items-center gap-2">
                    <span className="text-lg">🛠️</span>
                    <h3 className="text-sm font-semibold text-purple-300 uppercase tracking-widest">
                      My AI Arsenal
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-purple-500/40 to-transparent" />
                  </div>

                  {/* Bento grid of tools */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {aiArsenal.map((tool, i) => (
                      <motion.div
                        key={tool.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                        className={`
                          relative group rounded-2xl border ${tool.border} ${tool.hoverBorder}
                          bg-gradient-to-br ${tool.gradient} backdrop-blur-sm
                          p-4 cursor-default transition-all duration-300
                          hover:shadow-lg ${tool.glow} hover:-translate-y-0.5
                        `}
                      >
                        {/* Subtle shine on hover */}
                        <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative">
                          <div className="text-2xl mb-2">{tool.emoji}</div>
                          <div className="font-semibold text-sm text-foreground mb-0.5">{tool.name}</div>
                          <div className="text-xs text-muted-foreground leading-snug">{tool.tagline}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom tagline */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-4 text-xs text-center text-muted-foreground/60 italic"
                  >
                    "The best tool is the one that gets out of your way ✨"
                  </motion.p>
                </motion.div>
              ) : (
                <motion.div
                  key="dev-skills"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-4 md:p-6 h-full flex flex-col my-4 md:my-[45px] relative overflow-hidden">
                    <h3 className="text-lg md:text-xl font-medium mb-4 md:mb-6">Skills & Expertise</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-4">
                      {devSkills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-2 p-2.5 md:p-3 rounded-lg transition-colors bg-primary/10 border border-primary/20"
                        >
                          {skill.icon}
                          <span className="text-sm font-medium">{skill.name}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="relative">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 blur-sm">
                        {devPotentialSkills.map((skill, index) => (
                          <div key={index} className="flex items-center gap-2 p-2.5 md:p-3 rounded-lg transition-colors bg-accent/10 border border-accent/20">
                            {skill.icon}
                            <span className="text-sm">{skill.name}</span>
                          </div>
                        ))}
                      </div>

                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px] rounded-lg">
                        <div className="text-center p-2">
                          <div className="text-sm font-semibold text-foreground mb-1">
                            🚧 Potential Skills
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Currently working on mastering
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
