import { Project } from "./projects";

export const vibeProjects: Project[] = [
  {
    id: 101,
    title: "🎨 Personal Portfolio Website",
    category: "VIBE CODED",
    description:
      "A sleek, animated portfolio website built entirely with AI-powered vibe coding using Lovable. Features dark glassmorphism design, smooth scroll animations, particle backgrounds, responsive layout, and a unique Dev/Vibe Coder mode toggle. Built with React, TypeScript, Tailwind CSS, and Framer Motion.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lovable", "Vibe Coding"],
    image: "/lovable-uploads/lovable.png",
    codeUrl: "#",
    demoUrl: "https://flow-and-build-now.lovable.app",
    hardwareProject: false,
    keyFeatures: [
      {
        title: "✨ AI-Powered Development",
        description: "Entire site built through natural language prompts using Lovable.",
      },
      {
        title: "🎭 Dual Mode Toggle",
        description: "Switch between Dev and Vibe Coder personas with different themes and content.",
      },
      {
        title: "🌊 Smooth Animations",
        description: "Scroll-triggered animations, particle backgrounds, and micro-interactions.",
      },
      {
        title: "📱 Fully Responsive",
        description: "Optimized for all screen sizes with mobile-first approach.",
      },
    ],
    impact: [
      { icon: "🚀", text: "Built in hours, not weeks" },
      { icon: "🎨", text: "Professional design without a designer" },
      { icon: "⚡", text: "Instant iterations through AI collaboration" },
      { icon: "🌐", text: "Live and deployed with one click" },
    ],
  },
];

export const getVibeProjectById = (id: number): Project | undefined => {
  return vibeProjects.find((project) => project.id === id);
};

export const getFeaturedVibeProjects = (limit: number = 3): Project[] => {
  return vibeProjects.slice(0, limit);
};
