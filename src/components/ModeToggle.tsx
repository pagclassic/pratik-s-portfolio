import { motion } from "framer-motion";
import { CircuitBoard, Sparkles } from "lucide-react";
import { useMode } from "@/contexts/ModeContext";

const ModeToggle = () => {
  const { mode, setMode } = useMode();

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-40">
      <div className="relative flex items-center gap-0 p-1 rounded-full bg-card/60 backdrop-blur-xl border border-border/50 shadow-2xl">
        {/* Sliding indicator */}
        <motion.div
          className={`absolute top-1 bottom-1 rounded-full ${
            mode === "dev"
              ? "bg-gradient-to-r from-primary to-primary/80"
              : "bg-gradient-to-r from-purple-500 to-cyan-400"
          }`}
          layout
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          style={{
            left: mode === "dev" ? "4px" : "50%",
            width: "calc(50% - 4px)",
          }}
        />

        <button
          onClick={() => setMode("dev")}
          className={`relative z-10 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
            mode === "dev" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <CircuitBoard size={16} />
          <span className="hidden sm:inline">Dev Side</span>
        </button>

        <button
          onClick={() => setMode("vibecoder")}
          className={`relative z-10 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
            mode === "vibecoder" ? "text-white" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Sparkles size={16} />
          <span className="hidden sm:inline">Vibe Coder</span>
        </button>
      </div>
    </div>
  );
};

export default ModeToggle;
