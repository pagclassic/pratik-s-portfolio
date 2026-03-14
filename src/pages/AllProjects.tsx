
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Code, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { projects } from "@/data/projects";
import { vibeProjects } from "@/data/vibeProjects";
import { useMode } from "@/contexts/ModeContext";

const AllProjects = () => {
  const { mode } = useMode();
  const displayProjects = mode === "vibecoder" ? vibeProjects : projects;
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-12">
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="mb-6">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft size={18} />
              Back to Home
            </Button>
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-12 animate-on-scroll">
          Featured <span className="text-gradient">Projects</span>
        </h1>
        
        <div className="max-w-6xl mx-auto space-y-8">
          {displayProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden border-none shadow-lg dark-card animate-on-scroll">
              <div className="flex flex-col lg:flex-row min-h-[28rem]">
                <div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden">
                  <div className="h-full w-full relative">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover object-center" />
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-2 text-sm rounded">
                      Completed
                    </div>
                    <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded">
                      <span className="text-xs uppercase tracking-wide">{project.category}</span>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4">{project.title}</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 6).map((tag, i) => (
                        <span key={i} className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 6 && (
                        <span className="text-xs px-3 py-1 bg-muted text-muted-foreground rounded-full">
                          +{project.tags.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-6 flex-wrap">
                    {mode === "vibecoder" ? (
                      <>
                        {project.demoUrl && project.demoUrl !== "#" && (
                          <Button
                            className="gap-2 bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-500 hover:to-violet-600 border-0 shadow-lg shadow-purple-900/40 text-white"
                            onClick={() => window.open(project.demoUrl, "_blank")}
                          >
                            <ExternalLink size={18} />
                            Try It Live
                          </Button>
                        )}
                        <Link to={`/projects/${project.id}`}>
                          <Button variant="outline" className="gap-2 border-purple-500/30 hover:bg-purple-500/10 text-purple-300">
                            <Eye size={18} />
                            Full Details
                          </Button>
                        </Link>
                      </>
                    ) : (
                      <>
                        <Button
                          variant="outline"
                          className="gap-2 border-gray-700 hover:bg-gray-800"
                          onClick={() => window.open(project.codeUrl, "_blank")}
                        >
                          <Code size={18} />
                          View Code
                        </Button>
                        <Link to={`/projects/${project.id}`}>
                          <Button className="gap-2">
                            <Eye size={18} />
                            Full Details
                          </Button>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
