import { CheckCircle, Settings, Shield, Package, TestTube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import elutionProcess from "@/assets/elution-process.jpg";

const ServiceChemicals = () => {
  const benefits = [
    "Premium quality mining chemicals for optimal performance",
    "Custom chemical formulations for specific ore types",
    "Comprehensive safety and handling protocols",
    "Environmental compliance and eco-friendly options",
    "Technical support and application guidance",
    "Reliable supply chain and timely delivery"
  ];

  const chemicalTypes = [
    {
      name: "Cyanide Solutions",
      description: "High-purity sodium cyanide for gold leaching processes"
    },
    {
      name: "Activated Carbon",
      description: "Specialized carbon for gold adsorption and recovery"
    },
    {
      name: "Lime & Caustic",
      description: "pH control chemicals for optimal leaching conditions"
    },
    {
      name: "Flocculants",
      description: "Chemical aids for solid-liquid separation processes"
    },
    {
      name: "Antiscalants",
      description: "Scale prevention chemicals for process equipment"
    },
    {
      name: "Defoamers",
      description: "Foam control agents for processing operations"
    }
  ];

  const industries = [
    "Gold mining operations of all scales",
    "Mineral processing and refining facilities",
    "Heap leaching and CIL/CIP operations",
    "Research and development laboratories",
    "Environmental remediation projects",
    "Mining equipment testing facilities"
  ];

  return (
    <Layout>
      <SEO 
        title="Mining Chemicals Supply - High-Quality Specialized Solutions"
        description="Professional mining chemicals supply including cyanide solutions, activated carbon, and specialized chemicals for gold mining operations. Safe handling and environmental compliance."
        keywords="mining chemicals, cyanide solutions, activated carbon, mining reagents, gold processing chemicals, mining supplies"
      />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${elutionProcess})` }}
        />
        <div className="absolute inset-0 bg-secondary/80" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
            Mining <span className="text-primary">Chemicals</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            High-quality specialized chemicals optimized for gold mining operations. 
            Safe, effective, and environmentally responsible chemical solutions.
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
                Premium Mining Chemical Solutions
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Kodiak Solutions provides a comprehensive range of high-quality mining chemicals 
                specifically formulated for gold extraction and processing operations. Our chemicals 
                are sourced from trusted manufacturers and undergo rigorous quality testing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: TestTube,
                  title: "Quality Assurance",
                  description: "Rigorous testing and quality control to ensure consistent performance and reliability."
                },
                {
                  icon: Shield,
                  title: "Safety First",
                  description: "Comprehensive safety protocols and handling procedures for all chemical products."
                },
                {
                  icon: Settings,
                  title: "Custom Solutions",
                  description: "Tailored chemical formulations designed for your specific operational requirements."
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
                Our mining chemicals division specializes in providing essential reagents and chemical 
                solutions for gold mining operations. We understand that the quality and consistency of 
                chemicals directly impact your recovery rates, operational efficiency, and overall 
                profitability. That's why we partner with leading chemical manufacturers and maintain 
                strict quality control standards.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From traditional cyanide-based processes to innovative eco-friendly alternatives, we 
                supply the full spectrum of chemicals needed for modern gold mining operations. Our 
                technical team provides expert guidance on chemical selection, application methods, 
                and safety protocols to ensure optimal results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chemical Products */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4 font-serif">
              Our Chemical Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive range of specialized chemicals for all aspects of gold mining operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chemicalTypes.map((chemical, index) => (
              <Card key={index} className="card-corporate">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Package className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary mb-2 font-serif">
                        {chemical.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {chemical.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Products Showcase */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4 font-serif">
              Premium Quality Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We partner with leading manufacturers to supply the highest quality activated carbon 
              and specialized chemicals for optimal mining performance.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div 
                  className="aspect-square rounded-lg overflow-hidden shadow-xl bg-cover bg-center"
                  style={{ backgroundImage: `url(/lovable-uploads/18c0a8dc-b354-4be0-8803-dc979cd8b7a6.png)` }}
                >
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-secondary font-serif">
                  Premium Activated Carbon
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We supply high-grade activated carbon from trusted manufacturers like Jacobi Carbons, 
                  specifically designed for gold adsorption and recovery processes. Our activated carbon 
                  products ensure maximum gold loading capacity and optimal recovery rates.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">High surface area for maximum gold adsorption</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Consistent particle size distribution</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Superior hardness and durability</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Optimized for CIL/CIP processes</span>
                  </div>
                </div>
              </div>
            </div>
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
              Experience the advantages of our premium chemical solutions and expert support.
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

      {/* Detailed Description */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-secondary mb-8 font-serif">
              Comprehensive Chemical Solutions
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-4">Quality & Purity Standards</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All our chemicals meet or exceed industry purity standards and are thoroughly tested 
                  for quality assurance. We maintain detailed certificates of analysis and provide 
                  complete documentation for regulatory compliance and quality control purposes.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-4">Custom Formulations</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our technical team can develop custom chemical formulations tailored to your specific 
                  ore characteristics and processing requirements. We conduct pilot testing and process 
                  optimization to ensure optimal performance and cost-effectiveness.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-4">Safety & Handling</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive safety protocols and handling procedures are provided with all chemical 
                  products. Our team offers training on proper storage, handling, and emergency response 
                  procedures to ensure safe operations and regulatory compliance.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-4">Supply Chain Reliability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our established supply chain relationships ensure reliable delivery and consistent 
                  availability of all chemical products. We maintain strategic inventory levels and 
                  offer flexible delivery schedules to meet your operational requirements.
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
              Our chemical solutions support diverse mining operations and processing facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="card-gold">
                <CardContent className="p-6 text-center">
                  <TestTube className="h-8 w-8 text-primary mx-auto mb-4" />
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
            Get Your Chemical Solutions Today
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Ensure optimal mining performance with our high-quality chemical solutions. 
            Contact us to discuss your specific chemical requirements and receive expert recommendations.
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
                Request Product Catalog
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceChemicals;