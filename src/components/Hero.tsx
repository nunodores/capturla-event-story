import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroPhone from "@/assets/hero-phone.png";
import abstractBg from "@/assets/abstract-bg.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div 
        className="absolute inset-0 opacity-30 animate-float-slow"
        style={{
          backgroundImage: `url(${abstractBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-pulse-glow">
              <Sparkles className="w-4 h-4" />
              <span>Interactive Events Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Your Event's <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Private Universe.
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              Go beyond the hashtag. Capturla creates a vibrant, interactive space for your guests to share photos, play games, and build a collective story of your event—all in one secure, beautiful place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button variant="hero" size="xl" className="group">
                Create Your Event for Free
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Explore Events
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground pt-2">
              No credit card required. Set up in minutes.
            </p>
          </div>
          
          {/* 3D Phone Mockup */}
          <div className="relative flex items-center justify-center animate-float">
            <div className="relative">
              <img 
                src={heroPhone} 
                alt="Capturla App Interface" 
                className="w-full max-w-md drop-shadow-2xl"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl -z-10 animate-pulse-glow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
