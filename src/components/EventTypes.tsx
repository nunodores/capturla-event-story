import { Heart, Cake, Sparkles, Plane, Building2, Music } from "lucide-react";
import type { ElementType } from "react";

// 1. DATA & TYPES
// We define a TypeScript interface for type-safety and keep the event data here.
interface EventType {
  type: string;
  label: string;
  description: string;
  icon: ElementType;
  color: string;
  bgPattern: string;
  stats?: string;
  totalGuests?: number;
  mediaCount?: number;
}

const eventTypes: EventType[] = [
  {
    type: "weddings",
    label: "Weddings",
    description: "Cherish every moment of your special day with a shared, interactive album.",
    icon: Heart,
    color: "from-rose-400 to-pink-500",
    bgPattern: "bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20",
    stats: "+4 weddings",
    totalGuests: 320,
    mediaCount: 2847,
  },
  {
    type: "corporate_events",
    label: "Corporate Events",
    description: "Boost engagement at conferences, off-sites, and team-building retreats.",
    icon: Building2,
    color: "from-sky-400 to-blue-500",
    bgPattern: "bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-950/20 dark:to-blue-950/20",
    stats: "+1 teambuilding",
    totalGuests: 85,
    mediaCount: 412,
  },
  {
    type: "birthday_parties",
    label: "Birthday Parties",
    description: "Make birthday wishes last forever with photos and videos from all your friends.",
    icon: Cake,
    color: "from-purple-400 to-indigo-500",
    bgPattern: "bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20",
    totalGuests: 156,
    mediaCount: 892,
  },
  {
    type: "bachelor_bachelorette",
    label: "Bachelor / Bachelorette",
    description: "Capture all the unforgettable moments from the last big night out.",
    icon: Sparkles,
    color: "from-amber-400 to-orange-500",
    bgPattern: "bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20",
    totalGuests: 94,
    mediaCount: 573,
  },
  {
    type: "group_travel",
    label: "Group Travel",
    description: "Consolidate everyone's travel photos into one amazing trip itinerary.",
    icon: Plane,
    color: "from-teal-400 to-cyan-500",
    bgPattern: "bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20",
    stats: "+1 group travel",
    totalGuests: 42,
    mediaCount: 1256,
  },
  {
    type: "festivals_concerts",
    label: "Festivals & Concerts",
    description: "Connect with fellow fans and relive the experience from every angle.",
    icon: Music,
    color: "from-lime-400 to-green-500",
    bgPattern: "bg-gradient-to-br from-lime-50 to-green-50 dark:from-lime-950/20 dark:to-green-950/20",
    totalGuests: 203,
    mediaCount: 1847,
  },
];

// 2. CARD SUB-COMPONENT
// A small, internal component to keep the mapping logic in the main component clean.
const EventTypeCard = ({ event, index }: { event: EventType; index: number }) => {
  const Icon = event.icon;
  return (
    <a
      className={`group relative flex flex-col items-center text-center p-6 rounded-2xl border border-border/80 transition-all duration-300 ease-in-out animate-fade-in hover:shadow-lg hover:border-border hover:-translate-y-1 ${event.bgPattern} w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-1rem)] max-w-sm`}
      style={{ animationDelay: `${index * 100}ms`, willChange: "transform" }}
    >
      {event.stats && (
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 text-white text-xs font-semibold">
          {event.stats}
        </div>
      )}
      <div
        className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${event.color} mb-4 shadow-md group-hover:scale-110 transition-transform`}
      >
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-foreground">{event.label}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{event.description}</p>

      {false && (event.totalGuests || event.mediaCount) && (
        <div className="flex gap-4 justify-center text-xs">
          {event.totalGuests && (
            <div className="flex flex-col items-center">
              <span className="font-bold text-foreground">{event.totalGuests}+</span>
              <span className="text-muted-foreground">guests</span>
            </div>
          )}
          {event.mediaCount && (
            <div className="flex flex-col items-center">
              <span className="font-bold text-foreground">{event.mediaCount}+</span>
              <span className="text-muted-foreground">media</span>
            </div>
          )}
        </div>
      )}
    </a>
  );
};

// 3. MAIN COMPONENT
const EventTypes = () => {
  return (
    <section id="events" className="py-20 sm:py-28 bg-gradient-to-b from-muted/10 to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            One Platform.{" "}
            <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              Infinite Occasions.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            From intimate gatherings to massive celebrations, Captura is designed to make any event more engaging and
            memorable.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {eventTypes.map((event, index) => (
            <EventTypeCard key={event.type} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventTypes;
