import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { toast } from "sonner";

type Mode = "dev" | "vibecoder";

interface ModeContextType {
  mode: Mode;
  setMode: (mode: Mode) => void;
  toggleMode: () => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export const ModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setModeState] = useState<Mode>(() => {
    const saved = localStorage.getItem("portfolio-mode");
    return (saved === "vibecoder" ? "vibecoder" : "dev") as Mode;
  });

  const setMode = (newMode: Mode) => {
    setModeState(newMode);
    localStorage.setItem("portfolio-mode", newMode);
    if (newMode === "vibecoder") {
      toast("✨ Welcome to my more loved side!", {
        description: "Where creativity meets AI-powered development",
        duration: 3000,
      });
    }
  };

  const toggleMode = () => {
    setMode(mode === "dev" ? "vibecoder" : "dev");
  };

  useEffect(() => {
    const root = document.documentElement;
    if (mode === "vibecoder") {
      root.classList.add("vibecoder-theme");
    } else {
      root.classList.remove("vibecoder-theme");
    }
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => {
  const context = useContext(ModeContext);
  if (!context) throw new Error("useMode must be used within ModeProvider");
  return context;
};
