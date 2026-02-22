
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Eye } from "lucide-react";
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
                <Card className={`overflow-hidden border-none shadow-lg dark-card hover:shadow-xl transition-all duration-300 ${
                  mode === "vibecoder" ? "hover:scale-[1.03] hover:shadow-purple-500/20" : ""
                }`}>
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
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
