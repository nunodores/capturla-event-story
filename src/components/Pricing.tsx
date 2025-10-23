import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const Pricing = () => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("create-payment", {
        body: {},
      });

      if (error) throw error;

      if (data?.url) {
        window.open(data.url, "_blank");
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast({
        title: "Payment failed",
        description: "Unable to start payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="pricing" className="py-20  bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 via-pink-100 to-rose-100 dark:from-orange-900/30 dark:via-pink-900/30 dark:to-rose-900/30 text-xs sm:text-sm font-medium mb-4">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
            <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
              Flexible Pricing
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Choose the <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">Perfect Plan</span> for Your Event
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            From intimate gatherings to large celebrations, we have you covered.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="max-w-6xl mx-auto mb-8 sm:mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Basic Tier */}
          <div className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-border bg-gradient-to-br from-card to-muted/20 hover:shadow-xl transition-all duration-500">
            <div className="text-center mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">✨ Basic</h3>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                  €49
                </span>
                <span className="text-lg sm:text-xl text-muted-foreground">/ event</span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">(one-time payment)</p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold">👥 Up to 50 Guests</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold">📸 Instant Photo & Video Sharing</p>
                  <p className="text-sm text-muted-foreground">(original quality, no compression)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold">🎨 Custom Visual Theme</p>
                  <p className="text-sm text-muted-foreground">(colors and design tailored to your event)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold">🗓️ Full Admin Access</p>
                  <p className="text-sm text-muted-foreground">management, analytics, media download</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold">☁️ Storage Included</p>
                  <p className="text-sm text-muted-foreground">for 3 months after the event</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold">💬 Email Customer Support</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                variant="hero"
                size="xl"
                className="group w-full"
                onClick={handlePayment}
                disabled={loading}
              >
                {loading ? "Opening Checkout..." : "Get Started"}
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Premium Tier */}
          <div className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-border bg-gradient-to-br from-card to-muted/20 hover:shadow-2xl transition-all duration-500">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 text-white text-sm font-semibold">
              Recommended
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">💎 Premium</h3>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                  €69
                </span>
                <span className="text-lg sm:text-xl text-muted-foreground">/ event</span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">(one-time payment)</p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold">👥 Unlimited Guests</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold">📸 Instant Photo & Video Sharing</p>
                  <p className="text-sm text-muted-foreground">(original quality, no compression)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold">🎨 Custom Visual Theme</p>
                  <p className="text-sm text-muted-foreground">(colors and design tailored to your event)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold">🗓️ Full Admin Access</p>
                  <p className="text-sm text-muted-foreground">management, analytics, media download</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold">🎮 All Games Included:</p>
                  <ul className="text-sm text-muted-foreground mt-2 space-y-1 ml-4">
                    <li>• Interactive Quizzes</li>
                    <li>• Hashtag Challenges</li>
                    <li>• Love Story Timeline</li>
                    <li>• Music Requests (Spotify)</li>
                    <li>• Event Schedule</li>
                    <li>• People Bingo (Icebreaker)</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold">☁️ Storage Included</p>
                  <p className="text-sm text-muted-foreground">for 3 months after the event</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold">💬 Email Customer Support</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                variant="hero"
                size="xl"
                className="group w-full"
                onClick={handlePayment}
                disabled={loading}
              >
                {loading ? "Opening Checkout..." : "Start Sharing!"}
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Option */}
        <div className="max-w-2xl mx-auto px-4">
          <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-border bg-gradient-to-br from-card to-muted/20">
            <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center">⚙️ Additional Option</h4>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-background/50">
              <div className="flex-1">
                <p className="font-semibold text-sm sm:text-base">+3 Months Extra Storage</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Extend your event duration and keep your memories longer</p>
              </div>
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 bg-clip-text text-transparent whitespace-nowrap">
                €15
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
