
// About section component with skills display
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Cpu, Zap, Wifi, Cog, Wrench, Lightbulb } from "lucide-react";

const AboutSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll(".animate-on-scroll").forEach(el => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  const masteredSkills = [
    {
      name: "ESP32",
      icon: <Cpu className="text-primary" />
    },
    {
      name: "Internet of Things (IoT)",
      icon: <Wifi className="text-primary" />
    },
    {
      name: "Raspberry Pi",
      icon: <Zap className="text-accent" />
    },
    {
      name: "C++",
      icon: <Cog className="text-accent" />
    }
  ];

  const potentialSkills = [
    {
      name: "PCB Design",
      icon: <Wrench className="text-primary" />
    },
    {
      name: "Arduino IDE",
      icon: <Lightbulb className="text-accent" />
    }
  ];

  return (
    <section id="about" className="section py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
              About <span className="text-gradient">Me</span>
            </h2>
            
            <div className="space-y-4 animate-on-scroll" style={{
              transitionDelay: "200ms"
            }}>
              <p className="text-gray-700">I'm a 2nd year B.Tech Electronics & Telecommunication student passionate about IoT, embedded systems, and solving real-world problems through smart technology. I enjoy working with microcontrollers like the ESP32, integrating sensors, and building automation-based projects.

My learning is mostly hands-on — from automating water supply systems to experimenting with new modules and wireless communication protocols. I'm always exploring how hardware and software come together to create efficient and innovative solutions.

I'm excited to keep learning, building impactful projects, and growing in the field of electronics and smart systems.</p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 animate-on-scroll h-full" style={{
            transitionDelay: "600ms"
          }}>
            <Card className="p-6 h-full flex flex-col my-[45px] relative overflow-hidden">
              <h3 className="text-xl font-medium mb-6">Skills & Expertise</h3>
              
              {/* Mastered Skills - Unblurred */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                {masteredSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 rounded-lg transition-colors bg-primary/10 border border-primary/20">
                    {skill.icon}
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
              
              {/* Potential Skills - Blurred */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-4 blur-sm">
                  {potentialSkills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 rounded-lg transition-colors bg-accent/10 border border-accent/20">
                      {skill.icon}
                      <span className="text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
                
                {/* Overlay message for potential skills only */}
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
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
