import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-platinum border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold">EDDA</h3>
            <p className="text-sm text-muted-foreground font-tagline">
              Heaven of Silver
            </p>
            <p className="text-sm text-muted-foreground">
              Where Purity Meets Perfection
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/collection" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Certifications
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/excellence" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Why Choose EDDA
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Book Consultation
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  B2B Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:info@edda-silver.com"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail size={16} />
                <span>info@edda-silver.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Phone size={16} />
                <span>+1 (234) 567-890</span>
              </a>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} EDDA — Heaven of Silver. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
