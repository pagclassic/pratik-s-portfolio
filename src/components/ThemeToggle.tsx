
import { useEffect, useState } from "react";
import { Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const ThemeToggle = () => {
  const [showDialog, setShowDialog] = useState(false);

  // Set dark mode on component mount
  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  const handleLightModeClick = () => {
    setShowDialog(true);
  };

  const handleDismiss = () => {
    setShowDialog(false);
  };

  return (
    <>
      <Button variant="ghost" size="icon" className="rounded-full" aria-label="Dark mode" onClick={handleLightModeClick}>
        <Moon className="h-5 w-5" />
      </Button>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md bg-card/95 backdrop-blur-xl border-2 border-primary/20 shadow-2xl shadow-primary/10 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="relative z-10">
            <DialogHeader className="text-center pb-4 pt-2">
              <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl">🤨</span>
              </div>
              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent leading-tight">
                Really? Light Mode?
              </DialogTitle>
              <DialogDescription className="text-foreground/80 text-base font-medium mt-4 leading-relaxed">
                Are you literally a developer? You want to switch to light mode? Huhh, you failed as a developer!
              </DialogDescription>
            </DialogHeader>
            
            <DialogFooter className="justify-center pt-4 pb-2">
              <Button 
                onClick={handleDismiss} 
                variant="outline"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold py-5 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transform hover:scale-[1.02] border-primary/30"
              >
                <span className="text-base">Sorry, I will not do it again</span>
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ThemeToggle;
