import { Link } from "react-router-dom";
import { ArrowRight, Settings, FlaskConical, Wrench, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import africanTeamConsulting from "@/assets/african-team-consulting.jpg";
import africanElutionProcess from "@/assets/african-elution-process.jpg";
import africanMiningEquipment from "@/assets/african-mining-equipment.jpg";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Gold Mining Consultancy",
      description: "Expert guidance and strategic planning for your mining operations. Our experienced consultants provide comprehensive analysis, feasibility studies, and operational optimization strategies.",
      features: [
        "Feasibility Studies & Analysis",
        "Operational Optimization",
        "Risk Assessment & Management",
        "Regulatory Compliance Support"
      ],
      image: "/lovable-uploads/6d7088ef-64a4-47d8-95cb-2795e81bd92f.png",
      href: "/services/consultancy"
    },
    {
      icon: FlaskConical,
      title: "Gold Elution",
      description: "Advanced elution processes for maximum gold recovery efficiency. Our cutting-edge elution technologies ensure optimal gold extraction from your ore processing operations.",
      features: [
        "Advanced Elution Technologies",
        "Process Optimization",
        "Recovery Rate Enhancement",
        "Quality Control Systems"
      ],
      image: "/lovable-uploads/7f83ab00-b67e-4ce7-879a-5320a4e078d9.png",
      href: "/services/elution"
    },
    {
      icon: Settings,
      title: "Mining Chemicals",
      description: "High-quality chemicals optimized for gold mining operations. We supply specialized chemicals that enhance extraction efficiency and ensure safe, effective processing.",
      features: [
        "Specialized Mining Chemicals",
        "Quality Assurance Testing",
        "Custom Chemical Solutions",
        "Safe Handling Protocols"
      ],
      image: "/lovable-uploads/18c0a8dc-b354-4be0-8803-dc979cd8b7a6.png",
      href: "/services/chemicals"
    },
    {
      icon: Wrench,
      title: "Mining Equipment",
      description: "State-of-the-art equipment for professional mining operations. From extraction to processing, we provide comprehensive equipment solutions for all mining phases.",
      features: [
        "Modern Mining Machinery",
        "Equipment Installation",
        "Maintenance & Support",
        "Technology Upgrades"
      ],
      image: africanMiningEquipment,
      href: "/services/equipment"
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Professional Gold Mining Services & Solutions"
        description="Comprehensive gold mining services including consultancy, elution, chemicals, and equipment. Expert solutions for maximum recovery efficiency and operational success."
        keywords="gold mining services, mining consultancy, elution services, mining chemicals, mining equipment, gold extraction solutions"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/90"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url(${africanMiningEquipment})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        <div className="relative z-10 text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 font-serif animate-slide-up">
            Our <span className="gold-text animate-gold-glow">Mining Services</span>
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.3s'}}>
            Comprehensive gold mining solutions designed to maximize recovery efficiency, 
            ensure operational safety, and drive sustainable growth for your mining operations.
          </p>
        </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-slide-up gold-hover-effect ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`} style={{animationDelay: `${index * 0.3}s`}}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-primary/10 p-3 rounded-lg animate-gold-pulse">
                      <service.icon className="h-8 w-8 text-primary animate-gold-sparkle" />
                    </div>
                    <h2 className="text-3xl font-bold text-secondary font-serif gold-text">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    <h3 className="text-xl font-semibold text-secondary">Key Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="btn-hero gold-hover-effect" asChild>
                    <Link to={service.href} className="flex items-center space-x-2">
                      <span>Learn More</span>
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="relative">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="rounded-xl shadow-lg w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/10 rounded-xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4 font-serif">
              Choose Your Service
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select the specific service that meets your mining operation needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.href} className="block">
                <Card className="card-corporate group cursor-pointer h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className="bg-primary/10 p-4 rounded-lg inline-flex mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-secondary mb-4 font-serif flex-1">
                      {service.title}
                    </h3>
                    <div className="flex items-center justify-center text-primary group-hover:text-primary-dark transition-colors duration-300">
                      <span className="text-sm font-medium">Get Details</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4 font-serif">
              Why Choose Kodiak Solutions?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We bring unmatched expertise and commitment to every mining project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "5+ Years Experience",
                description: "Five years of specialized experience in gold mining operations and consultancy."
              },
              {
                title: "100+ Successful Projects",
                description: "Proven track record with more than 100 completed projects across 12 countries worldwide."
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock technical support and consultation for all your mining operation needs."
              }
            ].map((benefit, index) => (
              <Card key={index} className="card-gold text-center">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-secondary mb-4 font-serif">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-serif">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today to discuss your mining requirements and discover how we can 
            help optimize your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero" asChild>
              <a 
                href="https://wa.me/254712614215" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Get Quote on WhatsApp
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="btn-outline-gold bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-secondary"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;