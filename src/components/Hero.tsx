import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroPhone from "@/assets/hero-phone.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-rose-50 dark:from-orange-950/20 dark:via-pink-950/20 dark:to-rose-950/20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 via-pink-100 to-rose-100 dark:from-orange-900/30 dark:via-pink-900/30 dark:to-rose-900/30 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                Interactive Events Platform
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Your Event's <br />
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                Private Universe.
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl">
              Go beyond the hashtag. Captura creates a vibrant, interactive space for your guests to share photos, play
              games, and build a collective story of your event—all in one secure, beautiful place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a href="#pricing">
                <Button variant="hero" size="xl" className="group">
                  Create Your Event
                  <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="xl">
                  Book a Demo
                </Button>
              </a>
            </div>

            <p className="text-sm text-muted-foreground pt-2">Set up in minutes. Simple and secure payment.</p>
          </div>

          {/* Phone Mockup */}
          <div className="relative flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative animate-float">
              {/* iPhone Frame */}
              <div className="relative w-[260px] sm:w-[300px] md:w-[340px] h-[520px] sm:h-[600px] md:h-[680px] rounded-[2.5rem] md:rounded-[3rem] bg-foreground shadow-2xl p-2 sm:p-3">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-5 sm:h-7 bg-foreground rounded-b-2xl sm:rounded-b-3xl z-10" />

                {/* Screen with scrollable content */}
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-background">
                  <div className="w-full h-full overflow-y-auto scrollbar-hide scroll-smooth" id="phone-screen">
                    <img
                      src={heroPhone}
                      alt="Captura App Interface showcasing real-time event feed"
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Scroll Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none animate-bounce">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-1 h-8 bg-gradient-to-b from-transparent via-white to-transparent rounded-full opacity-60" />
                      <div className="text-xs text-white/60 font-medium">Scroll</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 via-pink-400/30 to-rose-400/30 blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
