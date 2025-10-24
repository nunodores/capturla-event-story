import { Upload, Camera, Heart } from "lucide-react";

const GuestReminder = () => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-orange-50 via-pink-50 to-rose-50 dark:from-orange-950/30 dark:via-pink-950/30 dark:to-rose-950/30 border-2 border-orange-200/50 dark:border-orange-800/30 overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-400/10 via-pink-400/10 to-rose-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-rose-400/10 via-pink-400/10 to-orange-400/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 via-pink-100 to-rose-100 dark:from-orange-900/50 dark:via-pink-900/50 dark:to-rose-900/50 text-sm font-medium mb-6">
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-rose-600 bg-clip-text text-transparent font-semibold">
                  For Guests
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                  Your Photos Complete the Story
                </span>
              </h2>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                The magic of Captura continues <strong className="text-foreground">after the event ends.</strong>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-orange-400 via-pink-400 to-rose-400 mb-4">
                  <Upload className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Share Your Moments</h3>
                <p className="text-sm text-muted-foreground">
                  Upload your photos and videos after the event to help complete the collective memory
                </p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-pink-400 via-rose-400 to-red-400 mb-4">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Every Angle Matters</h3>
                <p className="text-sm text-muted-foreground">
                  Your unique perspective adds to the complete story of the celebration
                </p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-rose-400 via-red-400 to-pink-400 mb-4">
                  <Heart className="w-6 h-6 text-white fill-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Cherished Forever</h3>
                <p className="text-sm text-muted-foreground">
                  Help hosts download and preserve every precious moment for years to come
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-orange-100/80 via-pink-100/80 to-rose-100/80 dark:from-orange-900/40 dark:via-pink-900/40 dark:to-rose-900/40 border border-orange-200 dark:border-orange-800">
              <p className="text-center text-base sm:text-lg font-medium text-foreground">
                💡 <strong>Remember:</strong> The event doesn't end when the party does. Share your media to give hosts the complete collection of memories they'll treasure forever!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestReminder;
