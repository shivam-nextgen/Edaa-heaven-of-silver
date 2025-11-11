import { Lightbulb, Layers, Scissors, Gem, CheckCircle } from "lucide-react";
import processImage from "@/assets/process-detail.jpg";

const Process = () => {
  const steps = [
    {
      icon: <Lightbulb className="w-12 h-12 text-accent" />,
      title: "Design & Inspiration",
      description:
        "Our journey begins with inspiration drawn from nature, architecture, and timeless beauty. Our designers sketch concepts that blend artistry with wearability.",
      details: [
        "Concept development",
        "Client consultation",
        "Design refinement",
      ],
    },
    {
      icon: <Layers className="w-12 h-12 text-accent" />,
      title: "Wax Modeling",
      description:
        "Master artisans transform sketches into precise wax models, ensuring every curve and detail is perfect before moving to production.",
      details: [
        "3D modeling",
        "Hand-carved wax prototypes",
        "Dimension verification",
      ],
    },
    {
      icon: <Scissors className="w-12 h-12 text-accent" />,
      title: "Casting & Polishing",
      description:
        "Using the lost-wax casting method, molten silver is poured into molds. Each piece is then meticulously polished to achieve our signature brilliant finish.",
      details: [
        "Investment casting",
        "Temperature control",
        "Multi-stage polishing",
      ],
    },
    {
      icon: <Gem className="w-12 h-12 text-accent" />,
      title: "Stone Setting",
      description:
        "Expert setters carefully place each diamond and gemstone, ensuring security and maximum brilliance. This delicate work requires years of training.",
      details: [
        "Precision mounting",
        "Stone alignment",
        "Secure prong setting",
      ],
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-accent" />,
      title: "Final Quality Check",
      description:
        "Every piece undergoes rigorous inspection. Only jewelry that meets our exacting standards receives the EDDA hallmark and certification.",
      details: [
        "Quality assurance",
        "Hallmarking",
        "Final certification",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-platinum">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              How We Shape Perfection
            </h1>
            <p className="text-xl font-tagline text-muted-foreground">
              A journey from inspiration to masterpiece
            </p>
          </div>
        </div>
      </section>

      {/* Process Visual */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src={processImage}
              alt="EDDA Craftsmanship Process"
              className="w-full rounded-lg shadow-medium animate-fade-in"
            />
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative mb-16 last:mb-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-rose flex items-center justify-center text-white text-2xl font-serif font-bold mb-4">
                      {index + 1}
                    </div>
                    <div className="hidden md:block w-1 h-full bg-gradient-to-b from-accent to-transparent min-h-32"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow bg-card rounded-lg shadow-soft p-8 hover:shadow-medium transition-shadow duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0">{step.icon}</div>
                      <div>
                        <h3 className="text-2xl font-serif font-bold mb-2">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      {step.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Philosophy */}
      <section className="py-20 bg-gradient-silver">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">
              Craftsmanship Philosophy
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At EDDA, we believe that true luxury lies in the details. Our process 
              is not rushed—each step is given the time and attention it deserves. 
              From the first sketch to the final polish, human hands guide every stage, 
              infusing each piece with care, skill, and soul.
            </p>
            <blockquote className="text-2xl font-tagline italic text-accent">
              "We don't just make jewelry. We craft heirlooms."
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">
              Experience the Process
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We welcome you to witness our craftsmanship firsthand. 
              Schedule a studio visit or virtual consultation to see how we bring silver to life.
            </p>
            <button className="px-8 py-4 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 shadow-glow transition-all duration-300 hover:scale-105">
              Book a Studio Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
