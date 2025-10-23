import { Camera, Play, Calendar, Music, Settings, BarChart3, Image } from "lucide-react";

const guestFeatures = [
  { icon: Camera, title: "Share Moments", desc: "Instant photo & video sharing" },
  { icon: Play, title: "Play Together", desc: "Fun quizzes, challenges & games" },
  { icon: Calendar, title: "Stay on Track", desc: "Live schedule of your event" },
  { icon: Music, title: "Your Playlist", desc: "Spotify-powered song requests" },
];

const hostFeatures = [
  { icon: Settings, title: "Full Control", desc: "Manage games, schedule & guests" },
  { icon: BarChart3, title: "Live Insights", desc: "Track engagement & activity" },
  { icon: Image, title: "Download Media", desc: "Save all your event memories" },
];

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Made for <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">Guests</span> &{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Hosts</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          Captura keeps everyone connected and makes every event unforgettable.
        </p>

        {/* Guests */}
        <div className="mb-16">
          <span className="inline-block mb-8 px-6 py-2 text-sm font-semibold rounded-full bg-orange-50 text-orange-500 border border-orange-200">
            ✨ For Guests
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {guestFeatures.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="p-4 rounded-full bg-gradient-to-br from-orange-400 via-pink-400 to-rose-400 text-white">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-sm text-zinc-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hosts */}
        <div>
          <span className="inline-block mb-8 px-6 py-2 text-sm font-semibold rounded-full bg-blue-50 text-blue-500 border border-blue-200">
            🎯 For Hosts
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {hostFeatures.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="p-4 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-indigo-400 text-white">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-sm text-zinc-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
