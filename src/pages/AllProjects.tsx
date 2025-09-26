
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Code, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const AllProjects = () => {
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

  const project = {
    id: 1,
    title: "🌍 Dipex Smart & Sustainable Highway",
    category: "IOT & AI PROJECT",
    description: "Intelligent transport infrastructure that improves traffic management, enhances safety, and promotes sustainability through technology-driven solutions. Features AI-based dynamic traffic signals, YOLO-powered vehicle tracking, automated speed-breaking system, solar-powered signals, and ESP32-based IoT integration for smart city applications.",
    tags: ["ESP32", "Arduino", "YOLO", "OpenCV", "Python", "IoT", "Blynk", "Computer Vision", "AI", "Sustainability"],
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop",
    codeUrl: "#",
    demoUrl: "",
    hardwareProject: true,
    keyFeatures: [
      "🚦 Smart Traffic Management – AI-based dynamic traffic signals",
      "📷 Camera-Based Vehicle Tracking – Real-time car movement and number plate recognition",
      "🛑 Adaptive Speed-Breaking System – Automated speed-breakers",
      "🌱 Sustainability – Solar-powered signal systems",
      "📡 IoT Integration – ESP32 and Arduino-based system"
    ],
    impact: [
      "🚗 Reduced traffic congestion and accidents",
      "⚡ Energy-efficient with renewable power usage",
      "🛡️ Enhanced road safety through automation and AI",
      "📊 Scalable design for smart cities and national highways"
    ],
   id: 2,
  title: "🌍 TerraShield — AI + IoT Landslide Early Warning System",
  category: "IOT & AI PROJECT",
  description: "The TerraShield Landslide Early Warning System focuses on protecting vulnerable communities in hilly regions by combining IoT sensors, AI analytics, and smart alerting mechanisms. It provides real-time monitoring of slopes, improves disaster preparedness, and ensures timely evacuation through last-mile alerts.",
  tags: ["ESP32", "Arduino", "LoRa", "GPS", "Python", "IoT", "Supabase", "AI", "Sustainability", "Grafana"],
  image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop",
  codeUrl: "#",
  demoUrl: "",
  hardwareProject: true,
  keyFeatures: [
    "⛰️ Multi-Sensor Monitoring – Tilt (MPU6050), soil moisture, vibration, and GPS data",
    "📡 LoRa Communication – Long-range, low-power transmission between nodes and gateway",
    "🧠 AI-Driven Analytics – Detects slope instability patterns and reduces false alarms",
    "🔔 Community-First Alerts – Siren, SMS, and WhatsApp alerts for immediate action",
    "🌞 Sustainable Power – Solar-powered IoT nodes with rugged enclosures"
  ],
  impact: [
    "⚠️ Early detection of landslide risks and slope movement",
    "📲 Reliable last-mile alerts even in offline conditions",
    "🧠 Reduced false alarms with AI-based multi-sensor fusion",
    "☀️ Low-cost, solar-powered, and scalable for rural deployment",
    "🌍 Potential to save lives and protect infrastructure in hilly regions"
  ]
  };
  
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
          Featured <span className="text-gradient">Project</span>
        </h1>
        
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden border-none shadow-lg dark-card animate-on-scroll">
            <div className="flex flex-col lg:flex-row">
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
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Intelligent transport infrastructure that improves traffic management, enhances safety, and promotes sustainability through technology-driven solutions.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mt-6">
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
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
