import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Instagram, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    appointmentType: "",
    date: "",
    time: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Appointment Request Received",
      description: "We'll contact you shortly to confirm your consultation.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      appointmentType: "",
      date: "",
      time: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-platinum">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Let's Create Something Extraordinary
            </h1>
            <p className="text-xl font-tagline text-muted-foreground">
              Schedule a personalized consultation with our experts
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 shadow-medium animate-fade-in">
              <h2 className="text-3xl font-serif font-bold mb-6">
                Reserve Your Session
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+1 (234) 567-8900"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="appointmentType">Appointment Type *</Label>
                  <Select
                    onValueChange={(value) =>
                      setFormData({ ...formData, appointmentType: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select appointment type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consultation">
                        Personal Consultation
                      </SelectItem>
                      <SelectItem value="virtual">Virtual Meeting</SelectItem>
                      <SelectItem value="studio">In-Studio Visit</SelectItem>
                      <SelectItem value="b2b">B2B Partnership</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date *</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time *</Label>
                    <Input
                      id="time"
                      name="time"
                      type="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements or questions..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 shadow-glow"
                >
                  Reserve My Session
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our team is ready to assist you with personalized consultations, 
                  B2B partnerships, or any inquiries about our collections.
                </p>
              </div>

              <Card className="p-6 bg-gradient-silver">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Visit Our Studio</h3>
                      <p className="text-muted-foreground">
                        123 Silver Avenue
                        <br />
                        Jewelry District
                        <br />
                        Mumbai, India 400001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Call Us</h3>
                      <p className="text-muted-foreground">
                        +91 (22) 1234-5678
                        <br />
                        Mon-Sat: 10:00 AM - 7:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email Us</h3>
                      <p className="text-muted-foreground">
                        info@edda-silver.com
                        <br />
                        b2b@edda-silver.com
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <div>
                <h3 className="font-semibold mb-4">Follow Our Journey</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gradient-rose text-white flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gradient-rose text-white flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>

              <Card className="p-6 bg-accent text-white">
                <h3 className="font-serif font-bold text-xl mb-2">
                  B2B Partnerships
                </h3>
                <p className="text-white/90 mb-4">
                  Interested in wholesale or custom manufacturing? 
                  Let's discuss how we can collaborate.
                </p>
                <Button
                  variant="secondary"
                  className="bg-white text-accent hover:bg-white/90"
                >
                  Download B2B Brochure
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-platinum">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center mb-8">
              Visit Our Studio
            </h2>
            <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-accent" />
                <p>Map integration placeholder</p>
                <p className="text-sm">123 Silver Avenue, Jewelry District</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
