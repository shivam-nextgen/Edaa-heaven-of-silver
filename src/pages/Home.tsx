import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Sparkles, Shield, Gem, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-jewelry.jpg";
import collectionImage from "@/assets/collection-preview.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-foreground">
            Welcome to the Heaven of Silver
          </h1>
          <p className="text-xl md:text-2xl font-tagline text-muted-foreground mb-8">
            Where Purity Meets Perfection
          </p>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Step into a world where craftsmanship, elegance, and innovation unite in every piece.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 shadow-glow">
              <Link to="/collection">
                Explore Our Collection <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-2 hover:bg-secondary">
              <Link to="/contact">Book Appointment</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Essence */}
      <section className="py-20 bg-gradient-platinum">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Defining the Shine</h2>
            <p className="text-lg text-muted-foreground">The essence of EDDA craftsmanship</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-12 h-12 text-accent" />,
                title: "Crafted with Care",
                description: "Handcrafted silver jewelry made to perfection with meticulous attention to every detail.",
              },
              {
                icon: <Shield className="w-12 h-12 text-accent" />,
                title: "Rooted in Purity",
                description: "Authentic sterling silver, ethically sourced and certified for quality assurance.",
              },
              {
                icon: <Gem className="w-12 h-12 text-accent" />,
                title: "Inspired by Brilliance",
                description: "Modern artistry with timeless grace, designed to capture light and luxury.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-serif font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Teaser */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Journey</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From humble beginnings to global craftsmanship excellence, EDDA redefines silver artistry 
              with every creation. Our passion for purity and precision has shaped a legacy that spans decades, 
              bringing together tradition and innovation in perfect harmony.
            </p>
            <Button variant="outline" size="lg" asChild className="border-2">
              <Link to="/about">
                Learn More About Our Story <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Collections Preview */}
      <section className="py-20 bg-gradient-silver">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Featured Collections</h2>
            <p className="text-lg text-muted-foreground">A symphony in silver</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-lg shadow-medium group">
              <img
                src={collectionImage}
                alt="EDDA Silver Jewelry Collection"
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-serif font-bold mb-2">Timeless Elegance</h3>
                  <p className="text-white/90 mb-4">
                    Discover our signature collection of handcrafted silver masterpieces
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
                <Link to="/collection">
                  View All Collections <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Excellence Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Why Choose EDDA</h2>
            <p className="text-lg text-muted-foreground mb-8">Excellence in every aspect</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {["Quality", "Trust", "Innovation"].map((item, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-medium transition-all duration-300 bg-card"
              >
                <h3 className="text-xl font-serif font-semibold mb-2">{item}</h3>
                <p className="text-sm text-muted-foreground">
                  Uncompromising excellence in every creation
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" asChild className="border-2">
              <Link to="/excellence">
                Discover Our Excellence <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-rose text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Stay Connected with the Shine
            </h2>
            <p className="mb-8 text-white/90">
              Join our circle and receive our latest designs and insights
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
              />
              <Button type="submit" variant="secondary" className="bg-white text-accent hover:bg-white/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
