import { Play } from "lucide-react";

const VideoDemo = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            See <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">Captura</span> in Action
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Watch how easy it is to create an unforgettable interactive experience for your event
          </p>
        </div>
        
        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-gradient-to-br from-orange-100 via-pink-100 to-rose-100 dark:from-orange-950/20 dark:via-pink-950/20 dark:to-rose-950/20 border-2 border-border hover:shadow-[0_0_60px_rgba(251,146,60,0.2)] transition-all duration-500">
          {/* Video placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-6">
              <div className="inline-flex p-8 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 shadow-xl hover:scale-110 transition-transform cursor-pointer">
                <Play className="w-16 h-16 text-white" fill="white" />
              </div>
              <p className="text-xl font-semibold text-foreground/80">
                Demo Video Coming Soon
              </p>
            </div>
          </div>
          
          {/* Optional: Replace with actual video when available */}
          {/* <video 
            className="w-full h-full object-cover"
            poster="/path-to-thumbnail.jpg"
            controls
          >
            <source src="/path-to-video.mp4" type="video/mp4" />
          </video> */}
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
