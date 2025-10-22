import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <a href="/" className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              Captura
            </a>
            
            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#features" className="text-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#events" className="text-foreground hover:text-primary transition-colors">
                Events
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#pricing">
              <Button variant="outline" className="hidden md:inline-flex">
                Pricing
              </Button>
            </a>
            <a href="#contact">
              <Button variant="hero">
                Book Demo
              </Button>
            </a>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
