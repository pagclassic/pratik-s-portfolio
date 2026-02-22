
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, Zap, Camera, Wifi, Wrench, Target, Lightbulb, User, TrendingUp, Image } from "lucide-react";
import Navbar from "@/components/Navbar";
import { getProjectById } from "@/data/projects";
import { getVibeProjectById } from "@/data/vibeProjects";

const ProjectDetail = () => {
  const { id } = useParams();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Initialize scroll animation observer
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
  }, [id]);

  const project = getProjectById(Number(id)) || getVibeProjectById(Number(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 md:px-6 pt-24 pb-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
            <Link to="/projects">
              <Button>Back to Projects</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-12">
        <div className="flex items-center justify-between mb-8">
          <Link to="/projects" className="mb-6">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft size={18} />
              Back to Projects
            </Button>
          </Link>
        </div>

        {/* Project Title */}
        <div className="mb-12 animate-on-scroll">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            {project.title}
          </h1>
          <div className="h-64 md:h-80 overflow-hidden rounded-lg">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover object-center" 
            />
          </div>
        </div>

        <div className="space-y-12">
          {/* Overview */}
          <Card className="p-6 md:p-8 border-none shadow-lg dark-card animate-on-scroll">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold">Overview</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {project.description}
            </p>
          </Card>

          {/* Key Features */}
          <Card className="p-6 md:p-8 border-none shadow-lg dark-card animate-on-scroll">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold">Key Features</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.keyFeatures?.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
                  <span className="text-2xl">{feature.title.split(' ')[0]}</span>
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              )) || (
                <p className="text-muted-foreground col-span-2">Key features not available for this project.</p>
              )}
            </div>
          </Card>

          {/* Tech Stack */}
          <Card className="p-6 md:p-8 border-none shadow-lg dark-card animate-on-scroll">
            <div className="flex items-center gap-3 mb-6">
              <Wrench className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold">Tech Stack</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Impact */}
          <Card className="p-6 md:p-8 border-none shadow-lg dark-card animate-on-scroll">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold">Impact</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.impact?.map((impact, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-2xl">{impact.icon}</span>
                  <span className="text-muted-foreground">{impact.text}</span>
                </div>
              )) || (
                <p className="text-muted-foreground col-span-2">Impact details not available for this project.</p>
              )}
            </div>
          </Card>

          {/* My Role */}
          <Card className="p-6 md:p-8 border-none shadow-lg dark-card animate-on-scroll">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold">My Role</h2>
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">🔧</span>
                <span className="text-muted-foreground">Led the design and development of the complete system architecture</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">💻</span>
                <span className="text-muted-foreground">Implemented both hardware and software components</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">🧪</span>
                <span className="text-muted-foreground">Conducted extensive testing and optimization</span>
              </li>
            </ul>
          </Card>

          {/* GitHub */}
          <Card className="p-6 md:p-8 border-none shadow-lg dark-card animate-on-scroll">
            <div className="flex items-center gap-3 mb-4">
              <Github className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold">GitHub Repository</h2>
            </div>
            <div className="flex items-center gap-4">
              <Button 
                className="gap-2" 
                onClick={() => window.open("https://github.com/username/dipex-smart-highway", "_blank")}
              >
                <Github size={18} />
                View Project on GitHub
              </Button>
            </div>
          </Card>

          {/* Project Gallery */}
          <Card className="p-6 md:p-8 border-none shadow-lg dark-card animate-on-scroll">
            <div className="flex items-center gap-3 mb-4">
              <Image className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold">Project Gallery</h2>
            </div>
            <div className="flex items-center gap-4">
              <Button
                className="gap-2"
                onClick={() => window.open("", "_blank")}
              >
                <Image size={18} />
                View Project Gallery
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
