"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useHashLink } from "@/hooks/use-hash-link"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleHashLink = useHashLink();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Left side - Logo + Links */}
          <div className="flex items-center gap-8">
            <a
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 text-transparent bg-clip-text damion-regular"
            >
              Captura
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="/about"
                className="text-base font-medium text-foreground hover:text-primary transition-colors"
              >
                About
              </a>

              <button
                onClick={() => handleHashLink("#features")}
                className="text-base font-medium text-foreground hover:text-primary transition-colors"
              >
                Features
              </button>

              <button
                onClick={() => handleHashLink("#events")}
                className="text-base font-medium text-foreground hover:text-primary transition-colors"
              >
                Events
              </button>

              <button
                onClick={() => handleHashLink("#contact")}
                className="text-base font-medium text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Right side - Buttons */}
          <div className="flex items-center gap-4">
            <a href="#pricing">
              <Button variant="outline" className="hidden md:inline-flex h-11 px-6">
                Pricing
              </Button>
            </a>
            <a href="#contact">
              <Button variant="hero" className="h-11 px-6">
                Book Demo
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border shadow-lg">
          <div className="flex flex-col items-start p-4 space-y-4">
            <a
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-foreground hover:text-primary transition-colors w-full"
            >
              About
            </a>

            <button
              onClick={() => {
                handleHashLink("#features");
                setIsOpen(false);
              }}
              className="text-base font-medium text-foreground hover:text-primary transition-colors w-full text-left"
            >
              Features
            </button>

            <button
              onClick={() => {
                handleHashLink("#events");
                setIsOpen(false);
              }}
              className="text-base font-medium text-foreground hover:text-primary transition-colors w-full text-left"
            >
              Events
            </button>

            <button
              onClick={() => {
                handleHashLink("#contact");
                setIsOpen(false);
              }}
              className="text-base font-medium text-foreground hover:text-primary transition-colors w-full text-left"
            >
              Contact
            </button>

            <a href="#pricing" onClick={() => setIsOpen(false)} className="w-full">
              <Button variant="outline" className="w-full h-11">
                Pricing
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
