import { useState } from "react";
import { Phone, Mail, MapPin, MessageSquare, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      <SEO 
        title="Contact Us - Get Professional Mining Consultation"
        description="Contact Kodiak Solutions Limited for professional gold mining consultancy, equipment, and technical services. Get expert advice and customized solutions."
        keywords="contact mining consultancy, gold mining contact, mining services inquiry, consultation request, mining equipment contact"
      />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/92 to-secondary/95"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url('/assets/mining-equipment.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        <div className="absolute -top-36 -left-36 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-36 -right-36 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
        <div className="relative z-10 text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-primary mb-6">
            Contact & Consultation
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif animate-slide-up">
            Get in <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-primary bg-clip-text text-transparent animate-gold-glow">Touch</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.3s'}}>
            Ready to elevate your mining operations? Contact our experts today for tailored consultancy, reliable support, and fast response.
          </p>
        </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/10 shadow-2xl shadow-slate-900/10 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-primary/20 hover:bg-white/20 animate-slide-left">
              <CardContent className="p-8 relative">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-60" />
                <div className="mb-8 relative">
                  <h2 className="text-3xl font-bold text-secondary mb-4 font-serif">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your mining project or requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full"
                    />
                  </div>

                  <Button type="submit" className="btn-hero w-full gold-hover-effect">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                  
                  {/* Gold particles */}
                  <div className="gold-particle" style={{top: '20px', right: '30px'}}></div>
                  <div className="gold-particle" style={{bottom: '20px', left: '30px'}}></div>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-right">
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-6 font-serif gold-text">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Reach out to us through any of the following channels. Our team is ready to 
                  assist you with your mining consultancy needs.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Phone Number",
                    content: "+254 712 614 215",
                    link: "tel:+254712614215"
                  },
                  {
                    icon: MessageSquare,
                    title: "WhatsApp",
                    content: "+254712614215",
                    link: "https://wa.me/254712614215"
                  },
                  {
                    icon: Mail,
                    title: "Email Address",
                    content: "info@kodiaksolutions.co.ke",
                    link: "mailto:info@kodiaksolutions.co.ke"
                  },
                  {
                    icon: MapPin,
                    title: "Office Address",
                    content: "Nairobi, Kenya",
                    link: "https://maps.google.com"
                  }
                ].map((contact, index) => (
                  <Card key={index} className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/10 shadow-2xl shadow-slate-900/10 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-primary/30 hover:bg-white/20 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                    <CardContent className="p-6 relative">
                      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-50" />
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-br from-primary/30 to-secondary/20 p-3 rounded-xl transition duration-300 group-hover:scale-110">
                          <contact.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-secondary mb-2">
                            {contact.title}
                          </h3>
                          <a 
                            href={contact.link}
                            target={contact.link.startsWith('http') ? '_blank' : undefined}
                            rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                          >
                            {contact.content}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Business Hours */}
              <Card className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/10 shadow-2xl shadow-slate-900/10 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-primary/30 hover:bg-white/20">
                <CardContent className="p-6 relative">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-50" />
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-primary/30 to-secondary/20 p-3 rounded-xl transition duration-300 group-hover:scale-110">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-3">Business Hours</h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex justify-between">
                          <span>Monday - Friday:</span>
                          <span className="text-primary font-medium">8:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday:</span>
                          <span className="text-primary font-medium">9:00 AM - 4:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday:</span>
                          <span className="text-primary font-medium">Emergency Only</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4 font-serif">
              Our Location
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Visit our office or reach out to us for on-site consultations.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-74.0123456!3d40.7123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ0LjQiTiA3NMKwMDAnNDQuNCJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kodiak Solutions Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-r from-secondary via-slate-900 to-secondary text-secondary-foreground">
        <div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-secondary/30 blur-3xl" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-primary mb-5">
            Let’s build your next mining success
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif leading-tight">
            Ready to get your project moving? <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">We’re here to help</span>
          </h2>
          <p className="text-lg md:text-xl mb-10 opacity-90 max-w-3xl mx-auto">
            Don’t wait to optimize your mining operations. Reach out now for fast, expert support from our consultancy team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero" asChild>
              <a 
                href="https://wa.me/254712614215" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                WhatsApp Us Now
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="btn-outline-gold bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-secondary"
              asChild
            >
              <a href="tel:+254710337605">
                Call Us Direct
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
