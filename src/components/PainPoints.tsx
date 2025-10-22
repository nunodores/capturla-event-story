import { ImageOff, MessageCircle, Download } from "lucide-react";

const solutions = [
  {
    icon: Download,
    title: "Centralize Everything",
    description: "One link is all you need. Guests join your private event space to view and share photos & videos in a real-time stream.",
    gradient: "from-orange-400 to-pink-500",
  },
  {
    icon: MessageCircle,
    title: "Engage Everyone",
    description: "From ice-breaker games to collaborative photo mosaics, give your guests fun ways to interact and connect.",
    gradient: "from-pink-400 to-rose-500",
  },
  {
    icon: ImageOff,
    title: "Own Your Story",
    description: "Download every high-resolution photo and video after the event. Your collective memory, forever yours.",
    gradient: "from-rose-400 to-red-500",
  },
];

const PainPoints = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Tired of a Thousand <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">Scattered Memories?</span>
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-xl text-muted-foreground">
              After the celebration ends, the photo-chasing begins. Memories get lost in group chats, buried on social media feeds, or worse, never shared at all.
            </p>
            <p className="text-xl font-semibold text-foreground">
              We believe your event's story deserves a single, beautiful home.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={solution.title}
                className="group relative text-center p-8 rounded-2xl bg-card border border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-scale"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${solution.gradient} mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
                
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity -z-10`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
