import craftsmanshipImage from "@/assets/craftsmanship.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-platinum">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              The Art Behind the Shine
            </h1>
            <p className="text-xl text-muted-foreground">
              A journey of passion, precision, and silver perfection
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <img
                src={craftsmanshipImage}
                alt="EDDA Craftsmanship"
                className="rounded-lg shadow-medium w-full h-auto"
              />
            </div>
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-4xl font-serif font-bold">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                EDDA was born from a passion for silver and precision — a journey that began with 
                a vision to craft beauty that lasts a lifetime. What started as a small workshop 
                has evolved into a global symbol of excellence in silver jewelry manufacturing.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every piece we create tells a story of dedication, artistry, and unwavering commitment 
                to quality. Our artisans bring decades of experience, combining traditional techniques 
                with modern innovation to produce jewelry that captures both light and emotion.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From the first sketch to the final polish, each creation undergoes meticulous scrutiny, 
                ensuring that every EDDA piece embodies our core values of purity, elegance, and perfection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-silver">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-center mb-16">Our Journey</h2>
            
            <div className="space-y-12">
              {[
                {
                  year: "Foundation",
                  title: "The Beginning",
                  description: "EDDA was established with a dream to redefine silver jewelry craftsmanship.",
                },
                {
                  year: "Evolution",
                  title: "Craftsmanship Excellence",
                  description: "Expanded our techniques, mastering the art of blending tradition with innovation.",
                },
                {
                  year: "Today",
                  title: "Global Reach",
                  description: "Now serving discerning clients worldwide, maintaining our commitment to excellence.",
                },
              ].map((milestone, index) => (
                <div
                  key={index}
                  className="flex gap-8 items-start animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex-shrink-0 w-32 text-right">
                    <span className="text-2xl font-serif font-bold text-accent">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="flex-grow border-l-2 border-accent pl-8 pb-8">
                    <h3 className="text-2xl font-serif font-semibold mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-3xl md:text-4xl font-tagline italic text-foreground leading-relaxed">
              "Each piece is not just silver — it's a story molded by devotion."
            </blockquote>
            <p className="mt-6 text-lg text-muted-foreground">— The EDDA Legacy</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-platinum">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-center mb-12">Our Values</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Authenticity",
                  description: "Every piece is genuine, ethically sourced, and crafted with integrity.",
                },
                {
                  title: "Excellence",
                  description: "We never compromise on quality, ensuring perfection in every detail.",
                },
                {
                  title: "Innovation",
                  description: "Blending timeless techniques with modern design sensibilities.",
                },
                {
                  title: "Sustainability",
                  description: "Committed to responsible practices that honor our planet and people.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="p-6 bg-card rounded-lg shadow-soft animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-serif font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
