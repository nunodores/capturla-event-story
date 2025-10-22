import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Get Started?</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Contact us to learn how Capturla can make your event unforgettable.
          </p>
        </div>
        
        <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl">
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Your Name *
              </label>
              <Input 
                id="name" 
                placeholder="John Doe" 
                className="h-12"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address *
              </label>
              <Input 
                id="email" 
                type="email" 
                placeholder="john@example.com" 
                className="h-12"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="event-type" className="text-sm font-medium">
                Event Type *
              </label>
              <Select>
                <SelectTrigger id="event-type" className="h-12">
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wedding">Wedding</SelectItem>
                  <SelectItem value="corporate">Corporate Event</SelectItem>
                  <SelectItem value="birthday">Birthday Party</SelectItem>
                  <SelectItem value="travel">Travel & Vacation</SelectItem>
                  <SelectItem value="party">Party & Social</SelectItem>
                  <SelectItem value="community">Community Gathering</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Tell us about your event
              </label>
              <Textarea 
                id="message" 
                placeholder="Event date, number of guests, what makes your event special..."
                className="min-h-32"
              />
            </div>
            
            <Button variant="hero" size="lg" className="w-full">
              Send Request
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;
