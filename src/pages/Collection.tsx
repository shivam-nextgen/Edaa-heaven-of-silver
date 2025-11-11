import { useState } from "react";
import collectionImage from "@/assets/collection-preview.jpg";

const Collection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["All", "Rings", "Earrings", "Necklaces", "Bracelets"];

  const collections = [
    {
      title: "Ethereal Rings",
      category: "rings",
      description: "Delicate bands that capture eternal elegance",
    },
    {
      title: "Celestial Earrings",
      category: "earrings",
      description: "Graceful pieces that frame your beauty",
    },
    {
      title: "Luminous Necklaces",
      category: "necklaces",
      description: "Statement pieces that illuminate your style",
    },
    {
      title: "Radiant Bracelets",
      category: "bracelets",
      description: "Timeless accessories for every occasion",
    },
    {
      title: "Diamond Fusion",
      category: "rings",
      description: "Silver meets diamond in perfect harmony",
    },
    {
      title: "Rose Gold Touch",
      category: "necklaces",
      description: "Subtle rose gold accents on pure silver",
    },
  ];

  const filteredCollections =
    activeCategory === "all"
      ? collections
      : collections.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-platinum">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              A Symphony in Silver
            </h1>
            <p className="text-xl font-tagline text-muted-foreground">
              Every creation captures light, luxury, and legacy
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category.toLowerCase())}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.toLowerCase()
                    ? "bg-accent text-white shadow-glow"
                    : "bg-secondary text-foreground hover:bg-accent/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredCollections.map((collection, index) => (
              <div
                key={index}
                className="group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-lg shadow-soft hover:shadow-glow transition-all duration-500">
                  <img
                    src={collectionImage}
                    alt={collection.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110 shimmer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-serif font-bold mb-2">
                        {collection.title}
                      </h3>
                      <p className="text-white/90">{collection.description}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-serif font-semibold mb-2">
                    {collection.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {collection.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-silver">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">
              Discover Your Perfect Piece
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a personalized consultation to explore our complete collection 
              and find jewelry that speaks to your unique style.
            </p>
            <button className="px-8 py-4 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 shadow-glow transition-all duration-300 hover:scale-105">
              Book a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collection;
