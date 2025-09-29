export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  codeUrl: string;
  demoUrl: string;
  hardwareProject: boolean;
  keyFeatures?: Array<{
    title: string;
    description: string;
  }>;
  impact?: Array<{
    icon: string;
    text: string;
  }>;
}

export const projects: Project[] = [
  {
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
      {
        title: "🚦 Smart Traffic Management",
        description: "AI-based dynamic traffic signals for smoother vehicle flow."
      },
      {
        title: "📷 Camera-Based Vehicle Tracking",
        description: "Real-time car movement and number plate recognition using YOLO and computer vision."
      },
      {
        title: "🛑 Sustainable Speed-Breaking System",
        description: "Speed-breakers that can generate energy when vehicles pass on."
      },
      {
        title: "📡 IoT Integration",
        description: "Arduino-based system for data collection, signal control, and remote monitoring."
      },
      {
        title: "🌱 Sustainability",
        description: "Solar-powered signal systems and energy-efficient IoT sensors."
      }
    ],
    impact: [
      { icon: "🚗", text: "Reduced traffic congestion and accidents" },
      { icon: "⚡", text: "Energy-efficient with renewable power usage" },
      { icon: "🛡️", text: "Enhanced road safety through automation and AI" },
      { icon: "📊", text: "Scalable design for smart cities and national highways" }
    ]
  },
  {
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
      {
        title: "⛰️ Multi-Sensor Monitoring",
        description: "Tilt (MPU6050), soil moisture, vibration, and GPS data for ground movement detection."
      },
      {
        title: "📡 LoRa Communication",
        description: "Long-range, low-power data transmission between sensor nodes and gateway."
      },
      {
        title: "🧠 AI-Driven Analytics",
        description: "Machine learning models analyze sensor + GPS patterns to reduce false alarms."
      },
      {
        title: "📍 GPS Integration",
        description: "Tracks sensor node positioning and detects slope displacement."
      },
      {
        title: "🔔 Community-First Alerts",
        description: "Siren, SMS, and WhatsApp alerts for immediate action, even offline."
      },
      {
        title: "🌞 Sustainable Power",
        description: "Solar-powered IoT nodes with low-cost, rugged hardware for remote deployment."
      }
    ],
    impact: [
      { icon: "⚠️", text: "Early detection of slope movement and landslide risk" },
      { icon: "📲", text: "Reliable last-mile alerts reaching 90%+ households in drills" },
      { icon: "🧠", text: "Reduced false alarms with AI-based analysis" },
      { icon: "☀️", text: "Low-cost & solar-powered for rural and remote areas" },
      { icon: "🌍", text: "Scalable design for multiple villages and districts" }
    ]
  }
];

export const getProjectById = (id: number): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getFeaturedProjects = (limit: number = 3): Project[] => {
  return projects.slice(0, limit);
};