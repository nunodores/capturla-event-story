import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-8">
            <a href="/" className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              Captura
            </a>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-base font-medium text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#features" className="text-base font-medium text-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#events" className="text-base font-medium text-foreground hover:text-primary transition-colors">
                Events
              </a>
              <a href="#contact" className="text-base font-medium text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#pricing">
              <Button variant="outline" className="hidden md:inline-flex h-11 px-6">
                Pricing
              </Button>
            </a>
            <a href="#contact">
              <Button variant="hero" className="h-11 px-4 sm:px-6 text-sm sm:text-base">
                Book Demo
              </Button>
            </a>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
            <div className="px-4 py-6 space-y-4">
              <a 
                href="#about" 
                className="block text-base font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#features" 
                className="block text-base font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#events" 
                className="block text-base font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Events
              </a>
              <a 
                href="#contact" 
                className="block text-base font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full h-11">
                  Pricing
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
