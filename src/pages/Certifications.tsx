import { Award, FileCheck, Shield, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const Certifications = () => {
  const certifications = [
    {
      icon: <Award className="w-16 h-16 text-accent" />,
      title: "Hallmark Certification",
      description:
        "All our silver jewelry is certified with the official 925 hallmark, guaranteeing authentic sterling silver content.",
      details: "Bureau of Indian Standards (BIS) approved",
    },
    {
      icon: <FileCheck className="w-16 h-16 text-accent" />,
      title: "Manufacturing License",
      description:
        "Fully licensed precious metal manufacturing facility operating under international quality and safety standards.",
      details: "Government authorized manufacturing unit",
    },
    {
      icon: <Shield className="w-16 h-16 text-accent" />,
      title: "ISO 9001:2015",
      description:
        "Certified quality management system ensuring consistent excellence in every aspect of our operations.",
      details: "International quality certification",
    },
    {
      icon: <Star className="w-16 h-16 text-accent" />,
      title: "Awards & Recognition",
      description:
        "Recipient of multiple awards for design excellence, craftsmanship, and ethical business practices.",
      details: "Industry-recognized achievements",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-platinum">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              The Seal of Authenticity
            </h1>
            <p className="text-xl font-tagline text-muted-foreground">
              Every EDDA creation is certified for purity, authenticity, and craftsmanship excellence
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 bg-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">{cert.icon}</div>
                  <h3 className="text-2xl font-serif font-bold mb-4">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  <div className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium">
                    {cert.details}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Display Section */}
      <section className="py-20 bg-gradient-silver">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-center mb-12">
              Our Credentials
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-card rounded-lg shadow-medium p-8 hover:shadow-glow transition-shadow duration-300 animate-fade-in"
                  style={{ animationDelay: `${item * 0.1}s` }}
                >
                  <div className="aspect-[4/3] bg-gradient-platinum rounded flex items-center justify-center mb-4">
                    <FileCheck className="w-20 h-20 text-accent/30" />
                  </div>
                  <h4 className="font-serif font-semibold text-lg mb-2">
                    Certificate {item}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Official certification document
                  </p>
                  <button className="text-accent hover:text-accent/80 text-sm font-medium transition-colors">
                    View Certificate →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">
              Our Promise of Authenticity
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Every piece of EDDA jewelry comes with complete certification and documentation, 
              ensuring you receive genuine, ethically crafted silver jewelry of the highest quality. 
              Our commitment to transparency means you can trust the purity and authenticity of 
              every creation that bears our name.
            </p>
            <div className="inline-block p-8 bg-gradient-rose rounded-lg text-white">
              <p className="text-xl font-tagline italic">
                "Certified excellence. Guaranteed purity. Timeless trust."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-gradient-platinum">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-center mb-12">
              Quality Assurance Process
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Material Verification",
                  description: "All silver is tested and verified for purity before use",
                },
                {
                  step: "02",
                  title: "In-Process Inspection",
                  description: "Quality checks at every stage of manufacturing",
                },
                {
                  step: "03",
                  title: "Final Certification",
                  description: "Each piece is hallmarked and certified before delivery",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="text-5xl font-serif font-bold text-accent/30 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
