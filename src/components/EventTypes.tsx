import { Heart, Users, Cake, Sparkles, Plane, Building2 } from "lucide-react";

const eventTypes = [
  {
    type: 'wedding',
    label: 'Wedding',
    description: 'Celebrate your special day with guests',
    icon: Heart,
    color: 'from-rose-400 to-pink-500',
    bgPattern: 'bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20'
  },
  {
    type: 'team_building',
    label: 'Team Building',
    description: 'Engage your team with fun activities',
    icon: Users,
    color: 'from-blue-400 to-cyan-500',
    bgPattern: 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20'
  },
  {
    type: 'birthday',
    label: 'Birthday Party',
    description: 'Celebrate birthdays with friends',
    icon: Cake,
    color: 'from-purple-400 to-pink-500',
    bgPattern: 'bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20'
  },
  {
    type: 'bachelor_bachelorette',
    label: 'Bachelor(ette)',
    description: 'Plan unforgettable parties',
    icon: Sparkles,
    color: 'from-amber-400 to-orange-500',
    bgPattern: 'bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20'
  },
  {
    type: 'group_travel',
    label: 'Group Travel',
    description: 'Coordinate activities for group trips',
    icon: Plane,
    color: 'from-sky-400 to-blue-500',
    bgPattern: 'bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-950/20 dark:to-blue-950/20'
  },
  {
    type: 'hotel_event',
    label: 'Hotel Event',
    description: 'Manage conferences and gatherings',
    icon: Building2,
    color: 'from-slate-400 to-gray-500',
    bgPattern: 'bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950/20 dark:to-gray-950/20'
  },
];

const EventTypes = () => {
  return (
    <section id="events" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            One Platform. <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">Infinite Occasions.</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            From intimate gatherings to massive celebrations, Captura is built to make any event more memorable.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventTypes.map((event, index) => {
            const Icon = event.icon;
            return (
              <div
                key={event.type}
                className={`group relative p-6 rounded-2xl border border-border ${event.bgPattern} hover:shadow-xl transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${event.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{event.label}</h3>
                <p className="text-muted-foreground">{event.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventTypes;
