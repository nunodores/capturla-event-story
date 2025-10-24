import { Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface Testimonial {
  id: string;
  name: string;
  event_type: string;
  image_url: string | null;
  review: string;
  rating: number;
}

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
  const defaultImage = "/images/guests/guests-1.jpg";
  
  return (
    <div 
      className="relative p-6 sm:p-8 rounded-2xl border-2 border-border bg-gradient-to-br from-card to-muted/20 hover:shadow-xl transition-all duration-500 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Quote className="absolute top-6 right-6 w-8 h-8 text-muted-foreground/20" />
      
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={testimonial.image_url || defaultImage} 
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-border"
          onError={(e) => {
            e.currentTarget.src = defaultImage;
          }}
        />
        <div>
          <h4 className="font-bold text-foreground">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.event_type}</p>
        </div>
      </div>

      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>

      <p className="text-muted-foreground leading-relaxed italic">
        "{testimonial.review}"
      </p>
    </div>
  );
};

const Testimonials = () => {
  const navigate = useNavigate();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { data, error } = await supabase
          .from("testimonials")
          .select("*")
          .eq("is_approved", true)
          .order("created_at", { ascending: false })
          .limit(6);

        if (error) throw error;
        setTestimonials(data || []);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (isLoading) {
    return (
      <section id="testimonials" className="py-20 sm:py-28 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">Loading testimonials...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 via-pink-100 to-rose-100 dark:from-orange-900/30 dark:via-pink-900/30 dark:to-rose-900/30 text-sm font-medium mb-4">
            <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
            <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
              Client Success Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Real Events. <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">Real Stories.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            See what clients are saying about their experience with Captura
          </p>
        </div>
        
        {testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-6">Be the first to share your experience!</p>
          </div>
        )}

        <div className="text-center">
          <Button
            variant="hero"
            size="xl"
            onClick={() => navigate("/submit-review")}
          >
            Share Your Experience
            <Star className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
