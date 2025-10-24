import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star, Upload, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const SubmitReview = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    eventType: "",
    imageUrl: "",
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

    if (!formData.name.trim() || !formData.eventType.trim() || !formData.review.trim()) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("testimonials").insert({
        name: formData.name.trim(),
        event_type: formData.eventType.trim(),
        image_url: formData.imageUrl.trim() || null,
        review: formData.review.trim(),
        rating: rating,
        is_approved: false,
      });

      if (error) throw error;

      toast({
        title: "Review submitted!",
        description: "Thank you for your feedback. Your review will be published after approval.",
      });

      setFormData({ name: "", eventType: "", imageUrl: "", review: "" });
      setRating(0);

      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      console.error("Error submitting review:", error);
      toast({
        title: "Submission failed",
        description: "Unable to submit your review. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 via-pink-100 to-rose-100 dark:from-orange-900/30 dark:via-pink-900/30 dark:to-rose-900/30 text-sm font-medium mb-4">
              <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
              <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                Share Your Experience
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Submit Your{" "}
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                Review
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">Help us improve by sharing your experience with Captura</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl border-2 border-border bg-card">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name *</Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                maxLength={100}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="eventType">Event Type *</Label>
              <Input
                id="eventType"
                placeholder="e.g., Wedding in Paris, Corporate Event, Birthday Party"
                value={formData.eventType}
                onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                required
                maxLength={100}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="imageUrl">Photo URL (optional)</Label>
              <Input
                id="imageUrl"
                type="url"
                placeholder="https://example.com/photo.jpg"
                value={formData.imageUrl}
                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                maxLength={500}
              />
              <p className="text-xs text-muted-foreground">
                Provide a URL to your photo or leave empty to use a default avatar
              </p>
            </div>

            <Separator className="my-6" />

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
                        star <= (hoveredRating || rating) ? "fill-amber-400 text-amber-400" : "text-muted-foreground"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <Separator className="my-6" />

            <div className="space-y-2">
              <Label htmlFor="review">Your Review *</Label>
              <Textarea
                id="review"
                placeholder="Tell us about your experience with Captura..."
                value={formData.review}
                onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                required
                maxLength={1000}
                rows={6}
                className="resize-none"
              />
              <p className="text-xs text-muted-foreground text-right">{formData.review.length}/1000 characters</p>
            </div>

            <Button type="submit" variant="hero" size="xl" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Review
                  <Upload className="w-5 h-5" />
                </>
              )}
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              Your review will be published after approval by our team
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SubmitReview;
