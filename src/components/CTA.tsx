import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CTA = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-8 sm:mb-12 space-y-4 sm:space-y-6 ">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Ready to <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">Get Started?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
            Book a demo to learn how Captura can make your event unforgettable.
          </p>
        </div>
        
        <div className="bg-card border-2 border-border rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl hover:shadow-[0_0_50px_rgba(251,146,60,0.15)] transition-all duration-500">
          <form className="space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs sm:text-sm font-semibold">
                Your Name *
              </label>
              <Input 
                id="name" 
                placeholder="John Doe" 
                className="h-12 sm:h-14 text-sm sm:text-base"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs sm:text-sm font-semibold">
                Email Address *
              </label>
              <Input 
                id="email" 
                type="email" 
                placeholder="john@example.com" 
                className="h-12 sm:h-14 text-sm sm:text-base"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="event-type" className="text-xs sm:text-sm font-semibold">
                Event Type *
              </label>
              <Select>
                <SelectTrigger id="event-type" className="h-12 sm:h-14 text-sm sm:text-base">
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wedding">Wedding</SelectItem>
                  <SelectItem value="corporate">Team Building</SelectItem>
                  <SelectItem value="birthday">Birthday Party</SelectItem>
                  <SelectItem value="bachelor">Bachelor(ette)</SelectItem>
                  <SelectItem value="travel">Group Travel</SelectItem>
                  <SelectItem value="hotel">Hotel Event</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs sm:text-sm font-semibold">
                Tell us about your event
              </label>
              <Textarea 
                id="message" 
                placeholder="Event date, number of guests, what makes your event special..."
                className="min-h-28 sm:min-h-36 text-sm sm:text-base"
              />
            </div>
            
            <Button variant="hero" size="xl" className="w-full h-12 sm:h-14 text-base sm:text-lg">
              Book a Demo
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;
