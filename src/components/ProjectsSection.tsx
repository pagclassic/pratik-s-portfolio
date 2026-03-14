
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Eye, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getFeaturedProjects } from "@/data/projects";
import { getFeaturedVibeProjects } from "@/data/vibeProjects";
import { useMode } from "@/contexts/ModeContext";
import { motion, AnimatePresence } from "framer-motion";

const ProjectsSection = () => {
  const { mode } = useMode();
  const featuredProjects = mode === "vibecoder" ? getFeaturedVibeProjects(3) : getFeaturedProjects(3);

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

  return (
    <section id="projects" className="section bg-background py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 sm:mb-0">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <Button asChild variant="outline" className="gap-2">
            <Link to="/projects" className="flex items-center gap-2">
              <Eye size={18} />
              View All Projects
            </Link>
          </Button>
        </div>

        <AnimatePresence mode="wait">
          {mode === "vibecoder" ? (
            /* ── VIBE CODER: bento-style neon cards ── */
            <motion.div
              key="vibe-projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative"
                >
                  {/* Glow border effect */}
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-sm animate-gradient-shift" />
                  
                  <div className="relative rounded-2xl overflow-hidden border border-purple-500/20 bg-card/80 backdrop-blur-sm shadow-xl shadow-purple-900/20 h-full flex flex-col">
                    {/* Image */}
                    <div className="h-44 overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                      
                      {/* Category pill */}
                      <div className="absolute top-3 left-3">
                        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-purple-500/80 text-white backdrop-blur-sm border border-purple-400/40">
                          {project.category}
                        </span>
                      </div>

                      {/* Neon corner accent */}
                      <div className="absolute top-3 right-3 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(34,211,238,0.8)]" />
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors duration-300">
                        {project.title}
                      </h3>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.slice(0, 3).map((tag, i) => (
                          <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-muted/50 text-muted-foreground">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Buttons */}
                      <div className="mt-auto flex gap-2">
                        <Link to={`/projects/${project.id}`} className="flex-1">
                          <Button
                            size="sm"
                            className="w-full gap-1.5 bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-500 hover:to-violet-600 border-0 shadow-lg shadow-purple-900/40 text-white"
                          >
                            <Eye size={14} />
                            View Details
                          </Button>
                        </Link>
                        {project.demoUrl && project.demoUrl !== "#" && (
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" variant="outline" className="gap-1 border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-400/60 text-cyan-300">
                              <ExternalLink size={14} />
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Bottom neon line */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              ))}

              {/* "More coming" teaser card */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: featuredProjects.length * 0.15 + 0.1, duration: 0.5 }}
                className="hidden lg:flex group relative"
              >
                <div className="relative rounded-2xl overflow-hidden border border-dashed border-purple-500/30 bg-purple-500/5 h-full flex flex-col items-center justify-center p-8 text-center min-h-[320px] w-full hover:border-purple-400/60 transition-all duration-300 cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5" />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="text-4xl mb-4"
                  >
                    ✨
                  </motion.div>
                  <p className="text-purple-300 font-semibold mb-2">More Coming Soon</p>
                  <p className="text-muted-foreground text-sm mb-4">I'm always vibe coding something new...</p>
                  <Link to="/projects">
                    <Button size="sm" variant="outline" className="gap-2 border-purple-500/30 hover:bg-purple-500/10 text-purple-300">
                      View All <ArrowRight size={14} />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            /* ── DEV MODE: original card layout ── */
            <motion.div
              key={mode + "-projects"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                >
                  <Card className="overflow-hidden border-none shadow-lg dark-card hover:shadow-xl transition-all duration-300">
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="text-xs uppercase tracking-wide mb-1">{project.category}</div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-4 line-clamp-2">{project.title}</h3>
                      
                      <div className="mt-4">
                        <Link to={`/projects/${project.id}`} className="w-full block">
                          <Button className="w-full gap-2">
                            <Eye size={18} />
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
