import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const Pricing = () => {
  const [loadingMini, setLoadingMini] = useState(false);
  const [loadingClassic, setLoadingClassic] = useState(false);
  const [loadingGrand, setLoadingGrand] = useState(false);
  const [storageMini, setStorageMini] = useState(false);
  const [storageClassic, setStorageClassic] = useState(false);
  const [storageGrand, setStorageGrand] = useState(false);

  const handlePayment = async (priceId: string, setLoading: (loading: boolean) => void, includeStorage: boolean) => {
    setLoading(true);
    try {
      const lineItems = [{ price: priceId, quantity: 1 }];
      if (includeStorage) {
        lineItems.push({ price: "price_1SLk6XGonZOSamDFurufJPck", quantity: 1 });
      }

      const { data, error } = await supabase.functions.invoke("create-payment", {
        body: { lineItems },
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
    <section id="pricing" className="py-20 sm:py-28 bg-gradient-to-b from-muted/30 to-muted/10">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 via-pink-100 to-rose-100 dark:from-orange-900/30 dark:via-pink-900/30 dark:to-rose-900/30 text-xs sm:text-sm font-medium mb-4">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
            <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
              Flexible Pricing
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            💫{" "}
            <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              Captura Event Packs
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            From intimate gatherings to large celebrations, we have you covered.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="max-w-7xl mx-auto mb-8 sm:mb-12 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Mini Event Tier */}
          <div className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-border bg-gradient-to-br from-card to-muted/20 hover:shadow-xl transition-all duration-500">
            <div className="text-center mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">🎈 Mini Event</h3>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                  €29
                </span>
                <span className="text-lg sm:text-xl text-muted-foreground">/ event</span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">Perfect for birthdays, family dinners, or intimate celebrations.</p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold">👥 Up to 25 Guests</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold">📸 Instant Photo & Video Sharing</p>
                  <p className="text-sm text-muted-foreground">(original quality)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold">🎨 One Visual Theme Included</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold">👑 Admin Access & Downloads</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold">💾 1 Month Storage</p>
                </div>
              </div>
            </div>

            <div className="mb-4 p-3 rounded-lg bg-background/50 border border-border">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={storageMini}
                  onChange={(e) => setStorageMini(e.target.checked)}
                  className="w-4 h-4 rounded accent-pink-500"
                />
                <div className="flex-1">
                  <p className="font-semibold text-sm">🧩 Add 3 Extra Months</p>
                  <p className="text-xs text-muted-foreground">Add €9.99</p>
                </div>
              </label>
            </div>

            <div className="text-center">
              <Button
                variant="hero"
                size="xl"
                className="group w-full"
                onClick={() => handlePayment("price_1SLPJ6GonZOSamDFwONRyJEB", setLoadingMini, storageMini)}
                disabled={loadingMini}
              >
                {loadingMini ? "Opening Checkout..." : "Get Started"}
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Classic Event Tier */}
          <div className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-border bg-gradient-to-br from-card to-muted/20 hover:shadow-2xl transition-all duration-500">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 text-white text-sm font-semibold">
              Recommended
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">🌟 Classic Event</h3>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                  €59
                </span>
                <span className="text-lg sm:text-xl text-muted-foreground">/ event</span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">The ideal choice for weddings, team events, and parties.</p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold">👥 Up to 100 Guests</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold">📸 Instant Photo & Video Sharing</p>
                  <p className="text-sm text-muted-foreground">(original quality)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold">🎨 Custom Visual Theme</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold">🧩 Fun Games</p>
                  <p className="text-sm text-muted-foreground">Quiz, hashtag challenge & timeline</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold">👑 Full Admin Access & Analytics</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold">💾 1 Month Storage</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold">💌 Email Support</p>
                </div>
              </div>
            </div>

            <div className="mb-4 p-3 rounded-lg bg-background/50 border border-border">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={storageClassic}
                  onChange={(e) => setStorageClassic(e.target.checked)}
                  className="w-4 h-4 rounded accent-pink-500"
                />
                <div className="flex-1">
                  <p className="font-semibold text-sm">🧩 Add 3 Extra Months</p>
                  <p className="text-xs text-muted-foreground">Add €9.99</p>
                </div>
              </label>
            </div>

            <div className="text-center">
              <Button
                variant="hero"
                size="xl"
                className="group w-full"
                onClick={() => handlePayment("price_1SL4saGonZOSamDFmfUsWreB", setLoadingClassic, storageClassic)}
                disabled={loadingClassic}
              >
                {loadingClassic ? "Opening Checkout..." : "Start Sharing!"}
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Grand Event Tier */}
          <div className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-border bg-gradient-to-br from-card to-muted/20 hover:shadow-2xl transition-all duration-500">
            <div className="text-center mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">💎 Grand Event</h3>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                  €89
                </span>
                <span className="text-lg sm:text-xl text-muted-foreground">/ event</span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">For big weddings, festivals, and unforgettable experiences.</p>
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
                  <p className="text-sm text-muted-foreground">(no compression)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold">🎨 Custom Design + Branded Theme</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold">🕹️ All Interactive Games Included</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold">🎶 Spotify Music Requests</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold">🗓️ Event Schedule</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold">👑 Full Admin Access</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold">💾 3 Months Storage</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold">💬 Priority Support</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                variant="hero"
                size="xl"
                className="group w-full"
                onClick={() => handlePayment("price_1SL4saGonZOSamDFmfUsWreB", setLoadingGrand, storageGrand)}
                disabled={loadingGrand}
              >
                {loadingGrand ? "Opening Checkout..." : "Go Grand!"}
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
