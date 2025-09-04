import { CheckCircle, Wrench, Cog, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import africanMiningEquipment from "@/assets/african-mining-equipment.jpg";

const ServiceEquipment = () => {
  const benefits = [
    "State-of-the-art mining equipment for optimal performance",
    "Professional installation and commissioning services",
    "Comprehensive maintenance and technical support",
    "Equipment training and operator certification",
    "Flexible financing and leasing options available",
    "24/7 emergency support and spare parts supply"
  ];

  const equipmentTypes = [
    {
      name: "Extraction Equipment",
      description: "Heavy-duty excavators, draglines, and drilling equipment for efficient ore extraction"
    },
    {
      name: "Processing Machinery",
      description: "Mills, crushers, and separators for optimal ore processing and preparation"
    },
    {
      name: "Elution Systems",
      description: "Advanced elution columns and recovery systems for maximum gold extraction"
    },
    {
      name: "Pumping Systems",
      description: "High-capacity pumps and fluid handling equipment for mining operations"
    },
    {
      name: "Safety Equipment",
      description: "Personal protective equipment and safety systems for secure operations"
    },
    {
      name: "Monitoring Systems",
      description: "Advanced monitoring and control systems for process optimization"
    }
  ];

  const industries = [
    "Large-scale commercial mining operations",
    "Medium and small-scale mining companies",
    "Artisanal mining cooperatives",
    "Mining contractors and service providers",
    "Equipment rental and leasing companies",
    "Mining research and testing facilities"
  ];

  return (
    <Layout>
      <SEO 
        title="Mining Equipment Supply & Services - Professional Solutions"
        description="Professional mining equipment supply including extraction machinery, processing equipment, and safety systems. Installation, maintenance, and technical support services."
        keywords="mining equipment, mining machinery, extraction equipment, processing equipment, mining supplies, equipment maintenance"
      />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${africanMiningEquipment})` }}
        />
        <div className="absolute inset-0 bg-secondary/80" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
            Mining <span className="text-primary">Equipment</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            State-of-the-art mining equipment and machinery for professional mining operations. 
            Complete solutions from extraction to processing.
          </p>
          <Button className="btn-hero text-lg px-8 py-4" asChild>
            <a 
              href="https://wa.me/254712614215"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Get This Service on WhatsApp
            </a>
          </Button>
        </div>
      </section>

      {/* Service Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-secondary mb-6 font-serif">
                Professional Mining Equipment Solutions
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Kodiak Solutions provides comprehensive mining equipment solutions including supply, 
                installation, training, and ongoing maintenance support. Our equipment portfolio 
                features leading manufacturers and cutting-edge technology for optimal performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Cog,
                  title: "Advanced Technology",
                  description: "Latest mining technology and equipment from trusted global manufacturers for optimal performance."
                },
                {
                  icon: Wrench,
                  title: "Full Service Support",
                  description: "Complete installation, commissioning, training, and ongoing maintenance services."
                },
                {
                  icon: Shield,
                  title: "Safety Standards",
                  description: "All equipment meets international safety standards with comprehensive safety features."
                }
              ].map((feature, index) => (
                <Card key={index} className="card-gold text-center">
                  <CardContent className="p-6">
                    <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-secondary mb-3 font-serif">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our mining equipment division specializes in providing complete machinery solutions 
                for all phases of mining operations. From initial extraction to final processing, 
                we supply and support the equipment you need to maximize productivity, ensure safety, 
                and achieve operational excellence. Our partnerships with leading equipment manufacturers 
                ensure access to the latest technology and innovations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond equipment supply, we provide comprehensive support services including installation, 
                commissioning, operator training, and ongoing maintenance. Our certified technicians 
                ensure your equipment operates at peak performance throughout its lifecycle, minimizing 
                downtime and maximizing return on investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Types */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4 font-serif">
              Equipment Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive range of mining equipment for all operational requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentTypes.map((equipment, index) => (
              <Card key={index} className="card-corporate">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Truck className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary mb-2 font-serif">
                        {equipment.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {equipment.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4 font-serif">
              Key Benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the advantages of our professional equipment solutions and support services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-secondary mb-8 font-serif">
              Comprehensive Equipment Services
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-4">Equipment Supply & Procurement</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We source and supply mining equipment from leading global manufacturers, ensuring 
                  you receive the best technology for your specific operational requirements. Our 
                  procurement expertise helps you select optimal equipment while managing costs and delivery timelines.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-4">Installation & Commissioning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our certified technicians provide professional installation and commissioning services 
                  to ensure your equipment is properly set up and optimized for peak performance. We handle 
                  all aspects from site preparation to final testing and handover.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-4">Training & Certification</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive operator training programs ensure your team can safely and effectively 
                  operate all equipment. We provide hands-on training, safety certification, and ongoing 
                  education to maintain operational excellence and safety standards.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-4">Maintenance & Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Proactive maintenance programs and technical support services minimize downtime and 
                  extend equipment life. Our maintenance plans include regular inspections, preventive 
                  maintenance, spare parts management, and emergency repair services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4 font-serif">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our equipment solutions support mining operations of all scales and types.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="card-gold">
                <CardContent className="p-6 text-center">
                  <Cog className="h-8 w-8 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground font-medium">{industry}</p>
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
            Upgrade Your Mining Equipment Today
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Enhance your mining operations with professional equipment solutions and expert support. 
            Contact us to discuss your equipment needs and receive customized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero" asChild>
              <a 
                href="https://wa.me/254712614215" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Get This Service on WhatsApp
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="btn-outline-gold bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-secondary"
              asChild
            >
              <a href="mailto:info@kodiaksolutions.com">
                Request Equipment Catalog
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceEquipment;