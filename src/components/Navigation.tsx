import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Collection", path: "/collection" },
    { name: "Excellence", path: "/excellence" },
    { name: "Process", path: "/process" },
    { name: "Certifications", path: "/certifications" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/src/assets/edda-logo.png" 
              alt="EDDA — Heaven of Silver" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-accent ${
                  isActive(link.path)
                    ? "text-accent font-semibold"
                    : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="default" size="sm" asChild className="bg-accent hover:bg-accent/90">
              <Link to="/contact">Book Appointment</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-accent font-semibold"
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="default" size="sm" asChild className="bg-accent hover:bg-accent/90 w-full">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Book Appointment
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
