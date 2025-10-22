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
    <section id="features" className="py-20 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold ">
            The Ultimate Experience for <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">Guests & Hosts</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            We built Captura to be effortlessly fun for your guests and powerfully simple for you.
          </p>
        </div>
        
        {/* Guest Features - Fun & Playful */}
        <div className="mb-20 md:mb-32">
          <div className="text-center mb-10">
            <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-orange-400/20 via-pink-400/20 to-rose-400/20 border border-orange-400/30 text-orange-400 font-semibold text-sm mb-3">
              ✨ FOR YOUR GUESTS
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group relative p-6 rounded-3xl bg-gradient-to-br from-white to-orange-50 dark:from-zinc-900 dark:to-orange-950/20 border-2 border-orange-200 dark:border-orange-900/50 hover:border-orange-400 dark:hover:border-orange-600 hover:scale-105 hover:-translate-y-2 transition-all duration-500 animate-slide-up shadow-lg hover:shadow-2xl hover:shadow-orange-500/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-rose-400 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <div className="relative p-4 rounded-2xl bg-gradient-to-br from-orange-400 via-pink-400 to-rose-400 group-hover:rotate-12 transition-transform">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 dark:from-orange-400 dark:to-rose-400 bg-clip-text text-transparent">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Admin Features - Professional & Powerful */}
        <div>
          <div className="text-center mb-10">
            <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-indigo-400/20 border border-blue-400/30 text-blue-400 font-semibold text-sm mb-3">
              🎯 FOR YOU, THE HOST
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {adminFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group relative overflow-hidden p-8 rounded-3xl bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-indigo-400/20 hover:border-blue-500 hover:scale-105 transition-all duration-500 animate-slide-up"
                  style={{ animationDelay: `${(index + 5) * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <div className="relative flex flex-col items-center text-center gap-4">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/50 group-hover:shadow-blue-400/70 group-hover:-rotate-6 transition-all">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-black">{feature.title}</h3>
                      <p className="text-sm text-blue-900 leading-relaxed">
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
