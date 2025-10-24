import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SubmitReview = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    eventType: "",
    review: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (rating === 0) {
      toast({
        title: "Rating required",
        description: "Please select a rating before submitting.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.from("testimonials").insert({
        name: formData.name,
        event_type: formData.eventType,
        review: formData.review,
        rating: rating,
        is_approved: false,
      });

      if (error) throw error;

      toast({
        title: "Review submitted!",
        description: "Thank you for your feedback. Your review will be published after approval.",
      });

      navigate("/");
    } catch (error) {
      console.error("Error submitting review:", error);
      toast({
        title: "Submission failed",
        description: "Unable to submit your review. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Share Your <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">Experience</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We'd love to hear about your experience with Captura!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl border-2 border-border bg-card">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name *</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="eventType">Event Type *</Label>
              <Input
                id="eventType"
                required
                value={formData.eventType}
                onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                placeholder="e.g., Wedding, Birthday Party, Corporate Event"
              />
            </div>

            <div className="space-y-2">
              <Label>Rating *</Label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= (hoveredRating || rating)
                          ? "fill-amber-400 text-amber-400"
                          : "text-muted-foreground"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="review">Your Review *</Label>
              <Textarea
                id="review"
                required
                value={formData.review}
                onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                placeholder="Tell us about your experience..."
                rows={6}
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              variant="hero"
              size="xl"
              className="w-full"
            >
              {loading ? "Submitting..." : "Submit Review"}
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              Your review will be published after approval by our team.
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SubmitReview;
