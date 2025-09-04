import { Link } from "react-router-dom";
import { ArrowRight, Users, Award, Globe, TrendingUp, Zap, Shield, Target, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import africanMiningHero from "@/assets/african-mining-hero.jpg";
import floatingElement1 from "@/assets/floating-element-1.png";
import floatingElement2 from "@/assets/floating-element-2.png";
import africanMiningEquipment from "@/assets/african-mining-equipment.jpg";
import africanLabProcessing from "@/assets/african-lab-processing.jpg";
import africanTeamConsulting from "@/assets/african-team-consulting.jpg";
import africanProcessingPlant from "@/assets/african-processing-plant.jpg";
import africanElutionProcess from "@/assets/african-elution-process.jpg";
import miningAction1 from "@/assets/mining-action-1.jpg";

const Index = () => {
  const stats = [
    { icon: TrendingUp, label: "Years in Service", value: "5+" },
    { icon: Award, label: "Projects Completed", value: "100+" },
    { icon: Users, label: "Clients Served", value: "50+" },
    { icon: Globe, label: "Countries Reached", value: "12+" },
  ];

  return (
    <Layout>
      <SEO 
        title="Your Trusted Partner in Gold Mining Excellence"
        description="Kodiak Solutions Limited delivers world-class gold mining consultancy, elution, chemicals, and equipment solutions. 5+ years of excellence in the mining industry."
        keywords="gold mining consultancy, mining solutions, elution services, mining equipment, mining chemicals, professional mining services"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-[parallax-float_20s_ease-in-out_infinite] transform scale-105"
          style={{ backgroundImage: `url(${africanMiningHero})` }}
        />
        
        
        {/* Dynamic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 via-transparent to-primary/60 animate-pulse"></div>
        

        {/* Content with Enhanced Animations */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif animate-[slide-up_1.2s_ease-out] hover:animate-pulse transition-all duration-300">
            Your Trusted Partner in{" "}
            <span className="gold-text relative animate-[glow_3s_ease-in-out_infinite]">
              Gold Mining Excellence
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl animate-pulse"></div>
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-[slide-up_1.5s_ease-out] hover:opacity-100 transition-opacity duration-300">
            Delivering world-class consultancy, elution, chemicals, and equipment solutions 
            with over 5 years of industry expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-[slide-up_1.8s_ease-out]">
            <Button className="btn-hero text-lg px-8 py-4 hover-scale group relative overflow-hidden" asChild>
              <Link to="/services" className="flex items-center space-x-2">
                <span className="relative z-10">Explore Services</span>
                <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-accent translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </Link>
            </Button>
            <Button 
              variant="outline" 
              className="btn-outline-gold text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-secondary hover-scale group relative overflow-hidden"
              asChild
            >
              <Link to="/contact" className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                Get Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 animate-[parallax-float_25s_ease-in-out_infinite]"
          style={{ backgroundImage: `url(${miningAction1})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent to-background/95"></div>
        
        
        {/* Section Title */}
        <div className="container mx-auto px-4 relative z-10 mb-12 animate-fade-in">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4 font-serif gold-text hover:animate-pulse transition-all duration-300 relative">
              Proven Excellence
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-accent/10 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-[slide-up_1s_ease-out]">
              Numbers that speak to our commitment and expertise
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="card-gold text-center border-none hover:shadow-2xl transition-all duration-700 hover-scale animate-fade-in group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 relative z-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <stat.icon className="h-16 w-16 text-primary mx-auto mb-6 group-hover:animate-bounce group-hover:scale-110 transition-all duration-500" />
                  <div className="text-4xl md:text-5xl font-bold text-secondary mb-2 gold-text group-hover:animate-pulse">{stat.value}</div>
                  <div className="text-muted-foreground font-medium text-lg group-hover:text-primary transition-colors duration-300">{stat.label}</div>
                </CardContent>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-lg transition-all duration-500"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `url(${africanProcessingPlant})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold text-secondary mb-6 font-serif gold-text">
              Our Core Services
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive mining solutions tailored to your specific needs and requirements, 
              backed by decades of industry expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Gold Mining Consultancy",
                description: "Expert guidance and strategic planning for your mining operations with proven methodologies.",
                href: "/services/consultancy",
                icon: Target,
                bgImage: "/lovable-uploads/6d7088ef-64a4-47d8-95cb-2795e81bd92f.png"
              },
              {
                title: "Gold Elution",
                description: "Advanced elution processes for maximum gold recovery efficiency using cutting-edge technology.",
                href: "/services/elution",
                icon: Zap,
                bgImage: "/lovable-uploads/7f83ab00-b67e-4ce7-879a-5320a4e078d9.png"
              },
              {
                title: "Mining Chemicals",
                description: "High-quality chemicals optimized for gold mining operations with environmental compliance.",
                href: "/services/chemicals",
                icon: Shield,
                bgImage: "/lovable-uploads/18c0a8dc-b354-4be0-8803-dc979cd8b7a6.png"
              },
              {
                title: "Mining Equipment",
                description: "State-of-the-art equipment for professional mining operations with full support services.",
                href: "/services/equipment",
                icon: Star,
                bgImage: africanProcessingPlant
              }
            ].map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <Link to={service.href} className="block group">
                  <Card className="card-corporate cursor-pointer relative overflow-hidden h-96 hover:shadow-2xl transition-all duration-700 border-2 border-transparent hover:border-primary/30 hover-scale transform hover:-translate-y-2">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-125 group-hover:rotate-1"
                      style={{ backgroundImage: `url(${service.bgImage})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent group-hover:from-secondary/95 transition-all duration-500"></div>
                    
                    
                    <CardContent className="p-8 text-center relative z-10 h-full flex flex-col justify-between">
                      <div className="w-20 h-20 bg-primary/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/50 transition-all duration-500 group-hover:scale-125 group-hover:rotate-3 relative overflow-hidden">
                        <service.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300 relative z-10" />
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      
                      <div className="space-y-4 transform group-hover:translate-y-1 transition-transform duration-300">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 font-serif gold-text group-hover:animate-pulse">
                          {service.title}
                        </h3>
                        <p className="text-white/90 mb-6 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                          {service.description}
                        </p>
                        <div className="flex items-center justify-center text-primary group-hover:text-primary-light transition-colors duration-300 relative">
                          <span className="text-base font-semibold">Explore Service</span>
                          <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-3 group-hover:scale-110 transition-all duration-300" />
                          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500"></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-in">
            <Button className="btn-hero text-lg px-10 py-5 hover-scale" asChild>
              <Link to="/services" className="flex items-center space-x-2">
                <span>View All Services</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ backgroundImage: `url(${africanTeamConsulting})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/90 to-secondary/95"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-serif text-secondary-foreground gold-text">
            Ready to Elevate Your Mining Operations?
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-95 max-w-4xl mx-auto text-secondary-foreground leading-relaxed">
            Partner with Kodiak Solutions Limited and experience the difference that professional 
            expertise, cutting-edge technology, and unwavering commitment to excellence makes in 
            your mining operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="btn-hero text-lg px-10 py-5 hover-scale" asChild>
              <Link to="/contact" className="flex items-center space-x-2">
                <span>Get Started Today</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              className="btn-outline-gold text-lg px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-secondary hover-scale"
              asChild
            >
              <a 
                href="https://wa.me/254712614215" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Chat on WhatsApp</span>
              </a>
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 animate-fade-in">
            <div className="flex flex-wrap justify-center items-center gap-8 text-secondary-foreground/70">
              <div className="flex items-center space-x-2 hover-scale">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">5+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 hover-scale">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">100+ Successful Projects</span>
              </div>
              <div className="flex items-center space-x-2 hover-scale">
                <Globe className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">12+ Countries Served</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
