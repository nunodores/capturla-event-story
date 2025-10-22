import { Play } from "lucide-react";

const VideoDemo = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            See <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">Captura</span> in Action
          </h2>
          <p className="text-xl text-muted-foreground">
            Watch how easy it is to create an unforgettable interactive experience for your event
          </p>
        </div>
        
        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gradient-to-br from-orange-100 via-pink-100 to-rose-100 dark:from-orange-950/20 dark:via-pink-950/20 dark:to-rose-950/20 border border-border">
          {/* Video placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="inline-flex p-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 shadow-lg hover:scale-110 transition-transform cursor-pointer">
                <Play className="w-12 h-12 text-white" fill="white" />
              </div>
              <p className="text-lg font-medium text-muted-foreground">
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
