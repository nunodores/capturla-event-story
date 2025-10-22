import { Image, Gamepad2, BarChart3, Palette } from "lucide-react";

const features = [
  {
    icon: Image,
    title: "A Living, Breathing Album",
    description: "Our live media feed is where the magic happens. Every photo and video shared by your guests appears instantly, creating a dynamic, chronological story of your event as it unfolds.",
  },
  {
    icon: Gamepad2,
    title: "Break the Ice, Spark the Fun",
    description: "Move beyond simple photo sharing. With interactive games, video replies, and stunning photo mosaics, Capturla turns guests from spectators into active participants.",
  },
  {
    icon: Palette,
    title: "Your Event, Your Brand",
    description: "Take control with the Host Dashboard. Customize your event with personalized branding, manage guest lists, and moderate content with a single click.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Insights",
    description: "Watch your event's engagement grow with our Live Analytics. See which photos are getting the most love and who your most active contributors are.",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            The Ultimate Experience for <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Guests & Hosts</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We built Capturla to be effortlessly fun for your guests and powerfully simple for you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-8 rounded-2xl bg-gradient-to-br from-card to-muted/20 border border-border hover:shadow-2xl transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-primary to-secondary group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
