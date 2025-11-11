import { Award, Users, Leaf, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const Excellence = () => {
  const highlights = [
    {
      icon: <Award className="w-16 h-16 text-accent" />,
      title: "Impeccable Quality",
      description:
        "Certified 925 silver with perfect polish. Every piece undergoes rigorous quality checks to ensure it meets our exacting standards of excellence.",
      features: ["Hallmarked certification", "Multi-stage quality control", "Premium materials only"],
    },
    {
      icon: <Users className="w-16 h-16 text-accent" />,
      title: "Client-First Philosophy",
      description:
        "Personalized B2B experiences tailored to your unique needs. We build lasting partnerships based on trust, transparency, and mutual growth.",
      features: ["Dedicated account managers", "Custom design services", "Flexible solutions"],
    },
    {
      icon: <Leaf className="w-16 h-16 text-accent" />,
      title: "Ethical & Sustainable",
      description:
        "Responsible sourcing and creation processes that honor both people and planet. Our commitment extends beyond beautiful jewelry to beautiful practices.",
      features: ["Ethically sourced materials", "Eco-friendly processes", "Fair labor practices"],
    },
    {
      icon: <Lightbulb className="w-16 h-16 text-accent" />,
      title: "Innovative Design",
      description:
        "Fusion of tradition and technology. Our design team combines centuries-old techniques with cutting-edge innovation to create timeless pieces.",
      features: ["Award-winning designs", "Traditional craftsmanship", "Modern aesthetics"],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-platinum">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Why Choose EDDA
            </h1>
            <p className="text-xl font-tagline text-muted-foreground">
              Where ethical craftsmanship meets eternal shine
            </p>
          </div>
        </div>
      </section>

      {/* Excellence Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className={`p-8 md:p-12 shadow-medium hover:shadow-glow transition-all duration-500 animate-fade-in ${
                  index % 2 === 0 ? "bg-gradient-silver" : "bg-card"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                    <div className="flex justify-center md:justify-start mb-6">
                      {highlight.icon}
                    </div>
                    <h2 className="text-3xl font-serif font-bold mb-4">
                      {highlight.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {highlight.description}
                    </p>
                    <ul className="space-y-3">
                      {highlight.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                    <div className="aspect-square bg-gradient-platinum rounded-lg flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="inline-block p-8 bg-white/50 rounded-full backdrop-blur">
                          {highlight.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-rose text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-center mb-16">
              Excellence in Numbers
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "25+", label: "Years of Excellence" },
                { number: "10k+", label: "Happy Clients" },
                { number: "50k+", label: "Pieces Crafted" },
                { number: "100%", label: "Quality Guaranteed" },
              ].map((stat, index) => (
                <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-5xl font-serif font-bold mb-2">{stat.number}</div>
                  <div className="text-white/90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">Our Commitment</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At EDDA, excellence isn't just a goal—it's our foundation. Every piece of jewelry 
              that bears our name represents our unwavering commitment to quality, ethics, and 
              innovation. We don't just create jewelry; we craft legacies that shine through 
              generations.
            </p>
            <p className="text-xl font-tagline italic text-accent">
              "Choose EDDA — where ethical craftsmanship meets eternal shine."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Excellence;
