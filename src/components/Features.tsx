import { Camera, Play, Calendar, Music, Settings, BarChart3, Image } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: 'Real-Time Media Sharing',
    description: 'Guests share photos and videos instantly in your private event network',
  },
  {
    icon: Play,
    title: 'Interactive Games',
    description: 'Engage guests with quizzes, timeline challenges, and hashtag missions',
  },
  {
    icon: Calendar,
    title: 'Event Schedule',
    description: 'Keep everyone informed with a live schedule of activities',
  },
  {
    icon: Music,
    title: 'Event Playlist',
    description: 'Let your guests curate the perfect soundtrack for your special day with Spotify integration',
  },
  {
    icon: Play,
    title: 'And more...',
    description: 'Discover all the interactive features designed to make your event unforgettable',
  },
];

const adminFeatures = [
  {
    icon: Settings,
    title: 'Manage Everything',
    description: 'Complete control over games, schedule, settings, and content moderation',
  },
  {
    icon: BarChart3,
    title: 'Live Analytics',
    description: 'Track engagement, participation, and activity in real-time',
  },
  {
    icon: Image,
    title: 'Download Media',
    description: 'Bulk download all photos and videos with one click',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            The Ultimate Experience for <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">Guests & Hosts</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We built Captura to be effortlessly fun for your guests and powerfully simple for you.
          </p>
        </div>
        
        {/* Guest Features */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-center">For Your Guests</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-card to-muted/20 border border-border hover:shadow-2xl transition-all duration-500 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-orange-400 via-pink-400 to-rose-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Admin Features */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">For You, The Host</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {adminFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-card to-muted/20 border border-border hover:shadow-2xl transition-all duration-500 animate-slide-up"
                  style={{ animationDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-orange-400 via-pink-400 to-rose-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
