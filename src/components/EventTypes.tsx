import { Heart, Users, Cake, Plane, PartyPopper, School } from "lucide-react";

const eventTypes = [
  {
    icon: Heart,
    title: "Weddings",
    description: "Your dream day, captured from every angle by the people who matter most.",
    color: "from-pink-400 to-red-400",
  },
  {
    icon: Users,
    title: "Corporate Events",
    description: "Boost team engagement at retreats, conferences, and holiday parties.",
    color: "from-blue-400 to-cyan-400",
  },
  {
    icon: Cake,
    title: "Birthday Bashes",
    description: "From a sweet 16 to a 60th birthday, create the ultimate digital guestbook.",
    color: "from-purple-400 to-pink-400",
  },
  {
    icon: Plane,
    title: "Travel & Vacations",
    description: "Create a shared group album for your next adventure with friends or family.",
    color: "from-teal-400 to-green-400",
  },
  {
    icon: PartyPopper,
    title: "Parties & Socials",
    description: "Bachelorettes, baby showers, or just a great night out—don't let a single moment fade.",
    color: "from-orange-400 to-yellow-400",
  },
  {
    icon: School,
    title: "Community Gatherings",
    description: "Perfect for workshops, fundraisers, and school events.",
    color: "from-indigo-400 to-purple-400",
  },
];

const EventTypes = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            One Platform. <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Infinite Occasions.</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            From intimate gatherings to massive celebrations, Capturla is built to make any event more memorable.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventTypes.map((event, index) => {
            const Icon = event.icon;
            return (
              <div
                key={event.title}
                className="group relative p-6 rounded-2xl border border-border bg-card hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${event.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-muted-foreground">{event.description}</p>
                
                {/* Hover glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-10 transition-opacity -z-10`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventTypes;
