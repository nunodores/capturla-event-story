import { ImageOff, MessageCircle, Download } from "lucide-react";

const solutions = [
  {
    icon: Download,
    title: "Centralize Everything",
    description:
      "One link is all you need. Guests join your private event space to view and share photos & videos in a real-time stream.",
    gradient: "from-orange-400 to-pink-500",
  },
  {
    icon: MessageCircle,
    title: "Engage Everyone",
    description:
      "From ice-breaker games to collaborative photo challenges, give your guests fun ways to interact and connect.",
    gradient: "from-pink-400 to-rose-500",
  },
  {
    icon: ImageOff,
    title: "Own Your Story",
    description:
      "Download every high-resolution photo and video after the event. Your collective memory, forever yours.",
    gradient: "from-rose-400 to-red-500",
  },
];

const PainPoints = () => {
  return (
    <section className="py-20 sm:py-28 px-2 bg-gradient-to-b from-muted/10 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16 space-y-4 sm:space-y-6 ">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Tired of a Thousand{" "}
            <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              Scattered Memories?
            </span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              After the celebration ends, the photo-chasing begins. Memories get lost in group chats, buried on social
              media feeds, or worse, never shared at all.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-orange-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
              We believe your event's story deserves a single, beautiful home.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={solution.title}
                className="group relative text-center p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-card border border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-scale"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className={`inline-flex p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br ${solution.gradient} mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{solution.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{solution.description}</p>

                {/* Glow effect on hover */}
                <div
                  className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity -z-10`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
