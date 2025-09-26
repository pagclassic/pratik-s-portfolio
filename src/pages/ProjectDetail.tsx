
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, Zap, Camera, Wifi, Wrench, Target, Lightbulb, User, TrendingUp, Image } from "lucide-react";
import Navbar from "@/components/Navbar";

const ProjectDetail = () => {
  const { id } = useParams();

  useEffect(() => {
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
  }, []);

  const projects = {
    "1": {
      title: "🌍 Dipex Smart & Sustainable Highway",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop",
      overview: "The Dipex Smart & Sustainable Highway project focuses on building an intelligent transport infrastructure that improves traffic management, enhances safety, and promotes sustainability through technology-driven solutions.",
      keyFeatures: [
        { icon: Zap, title: "🚦 Smart Traffic Management", description: "AI-based dynamic traffic signals for smoother vehicle flow." },
        { icon: Camera, title: "📷 Camera-Based Vehicle Tracking", description: "Real-time car movement and number plate recognition using YOLO and computer vision." },
        { icon: Wrench, title: "🛑 Sustainable Speed-Breaking System", description: "speed-breakers that can genrate energy when vehicle pass on." },
        { icon: Wifi, title: "📡 IoT Integration", description: "Arduino-based system for data collection, signal control, and remote monitoring." },
        { icon: null, title: "🌱 Sustainability", description: "Solar-powered signal systems and energy-efficient IoT sensors." }
      ],
      hardware: ["Arduino", "Servo Motors", "IR Sensors", "Camera Modules"],
      software: ["Python", "OpenCV", "YOLO", "Arduino IDE"],
      impact: [
        { icon: "🚗", text: "Reduced traffic congestion and accidents" },
        { icon: "⚡", text: "Energy-efficient with renewable power usage" },
        { icon: "🛡️", text: "Enhanced road safety through automation and AI" },
        { icon: "📊", text: "Scalable design for smart cities and national highways" }
      ],
      role: [
        "🔧 Designed the hardware architecture",
        "🔧 Implemented YOLO-based number plate recognition",
        "🔧 Developed the Arduino logic for automated signals and speed breakers"
      ]
    },
    "2": {
      title: "🌍 TerraShield — AI + IoT Landslide Early Warning System",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop",
      overview: "The TerraShield Landslide Early Warning System focuses on protecting vulnerable communities in hilly regions by combining IoT sensors, AI analytics, and smart alerting mechanisms. It provides real-time monitoring of slopes, improves disaster preparedness, and ensures timely evacuation through last-mile alerts.",
      keyFeatures: [
        { icon: Zap, title: "⛰️ Multi-Sensor Monitoring", description: "Tilt (MPU6050), soil moisture, vibration, and GPS data" },
        { icon: Wifi, title: "📡 LoRa Communication", description: "Long-range, low-power transmission between nodes and gateway" },
        { icon: Target, title: "🧠 AI-Driven Analytics", description: "Detects slope instability patterns and reduces false alarms" },
        { icon: Camera, title: "🔔 Community-First Alerts", description: "Siren, SMS, and WhatsApp alerts for immediate action" },
        { icon: null, title: "🌞 Sustainable Power", description: "Solar-powered IoT nodes with rugged enclosures" }
      ],
      hardware: ["ESP32", "Arduino", "MPU6050", "LoRa Modules", "GPS"],
      software: ["Python", "Supabase", "AI Analytics", "Grafana"],
      impact: [
        { icon: "⚠️", text: "Early detection of landslide risks and slope movement" },
        { icon: "📲", text: "Reliable last-mile alerts even in offline conditions" },
        { icon: "🧠", text: "Reduced false alarms with AI-based multi-sensor fusion" },
        { icon: "☀️", text: "Low-cost, solar-powered, and scalable for rural deployment" }
      ],
      role: [
        "🔧 Designed the multi-sensor IoT architecture",
        "🔧 Implemented LoRa communication protocol",
        "🔧 Developed AI analytics for slope stability monitoring"
      ]
    }
  };

  const project = projects[id as keyof typeof projects];

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
              {project.overview}
            </p>
          </Card>

          {/* Key Features */}
          <Card className="p-6 md:p-8 border-none shadow-lg dark-card animate-on-scroll">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold">Key Features</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
                  {feature.icon && <feature.icon className="w-6 h-6 text-accent mt-1" />}
                  {!feature.icon && <span className="text-2xl">{feature.title.split(' ')[0]}</span>}
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
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
                <h3 className="font-semibold mb-3">Hardware</h3>
                <div className="flex flex-wrap gap-2">
                  {project.hardware.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Software</h3>
                <div className="flex flex-wrap gap-2">
                  {project.software.map((tech, i) => (
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
              {project.impact.map((impact, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-2xl">{impact.icon}</span>
                  <span className="text-muted-foreground">{impact.text}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* My Role */}
          <Card className="p-6 md:p-8 border-none shadow-lg dark-card animate-on-scroll">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold">My Role</h2>
            </div>
            
            <ul className="space-y-3">
              {project.role.map((roleItem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-accent mt-1">🔧</span>
                  <span className="text-muted-foreground">{roleItem.replace('🔧 ', '')}</span>
                </li>
              ))}
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
