import { CheckCircle, FlaskConical, Zap, BarChart3, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import africanElutionProcess from "@/assets/african-elution-process.jpg";

const ServiceElution = () => {
  const benefits = [
    "Advanced elution technologies for maximum gold recovery",
    "Optimized chemical processes for enhanced efficiency",
    "Reduced processing time and operational costs",
    "Improved environmental compliance and safety",
    "Real-time monitoring and quality control systems",
    "Customized solutions for different ore types"
  ];

  const industries = [
    "Commercial gold mining operations",
    "Artisanal and small-scale mining",
    "Gold processing and refining facilities",
    "Mining equipment manufacturers",
    "Research and development laboratories",
    "Environmental remediation projects"
  ];

  return (
    <Layout>
      <SEO 
        title="Gold Elution Services - Advanced Recovery Technology"
        description="Professional gold elution services with advanced technology for maximum recovery efficiency. Optimized chemical processes and quality control systems."
        keywords="gold elution, gold recovery, elution technology, gold processing, chemical elution, mining recovery systems"
      />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/lovable-uploads/7f83ab00-b67e-4ce7-879a-5320a4e078d9.png)` }}
        />
        <div className="absolute inset-0 bg-secondary/80" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
            Gold <span className="text-primary">Elution</span> Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Advanced elution processes and cutting-edge technology for maximum gold recovery 
            efficiency and optimal processing performance.
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
                Advanced Elution Technology
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our gold elution services utilize state-of-the-art technology and proven methodologies 
                to achieve exceptional gold recovery rates while maintaining the highest standards of 
                operational efficiency and environmental responsibility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: FlaskConical,
                  title: "Chemical Excellence",
                  description: "Optimized chemical processes using premium reagents for maximum gold liberation and recovery."
                },
                {
                  icon: Zap,
                  title: "Process Efficiency",
                  description: "Streamlined elution processes that reduce processing time while maximizing output quality."
                },
                {
                  icon: BarChart3,
                  title: "Performance Monitoring",
                  description: "Real-time monitoring and analytics to ensure consistent performance and quality control."
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
                Kodiak Solutions' gold elution services represent the pinnacle of modern gold recovery 
                technology. Our advanced elution systems are designed to extract maximum value from your 
                ore while minimizing environmental impact and operational costs. We employ cutting-edge 
                chemical processes, precise temperature control, and sophisticated monitoring systems 
                to ensure optimal performance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of elution specialists works closely with your operations to customize our 
                processes to your specific ore characteristics and operational requirements. From 
                initial process design to ongoing optimization, we provide comprehensive support to 
                maximize your gold recovery rates and operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4 font-serif">
              Key Benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the advantages of our advanced elution technology and expertise.
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-secondary mb-8 font-serif">
              Comprehensive Elution Solutions
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-4">Advanced Elution Systems</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our state-of-the-art elution systems incorporate the latest technological advances in 
                  gold recovery. We utilize precision-controlled chemical processes, automated monitoring 
                  systems, and optimized flow rates to achieve maximum gold liberation while maintaining 
                  consistent quality standards throughout the process.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-4">Process Optimization</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every elution process is carefully optimized for your specific ore characteristics and 
                  operational requirements. Our experts analyze your ore composition, conduct pilot tests, 
                  and fine-tune process parameters to ensure optimal recovery rates and cost-effectiveness.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-4">Quality Control & Monitoring</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive quality control systems ensure consistent performance and product quality. 
                  Our real-time monitoring technology tracks key process parameters, providing immediate 
                  feedback and enabling rapid adjustments to maintain optimal operating conditions.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-4">Environmental Compliance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our elution processes are designed with environmental responsibility in mind. We employ 
                  closed-loop systems, efficient chemical recovery methods, and waste minimization techniques 
                  to ensure compliance with environmental regulations while reducing operational impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Demonstration */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(/lovable-uploads/7f83ab00-b67e-4ce7-879a-5320a4e078d9.png)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/90" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4 font-serif">
              Professional Elution Process in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our experienced technicians utilize advanced equipment and proven methodologies 
              to deliver exceptional gold recovery results.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div 
              className="aspect-video rounded-lg overflow-hidden shadow-xl bg-cover bg-center"
              style={{ backgroundImage: `url(/lovable-uploads/7f83ab00-b67e-4ce7-879a-5320a4e078d9.png)` }}
            >
              <div className="w-full h-full bg-gradient-to-t from-secondary/80 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2 font-serif">Expert Technicians at Work</h3>
                  <p className="text-lg opacity-90">
                    Hands-on expertise and precision equipment operation for optimal gold elution results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Advantages */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4 font-serif">
              Why Choose Our Elution Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our proven elution technology delivers superior results and operational advantages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Proven Technology",
                description: "Time-tested elution processes with a track record of success across diverse mining operations."
              },
              {
                icon: BarChart3,
                title: "Higher Recovery Rates",
                description: "Achieve recovery rates of 95%+ with our optimized elution systems and expert process management."
              },
              {
                icon: Zap,
                title: "Faster Processing",
                description: "Reduced processing cycles and improved throughput for enhanced operational efficiency."
              },
              {
                icon: FlaskConical,
                title: "Custom Solutions",
                description: "Tailored elution processes designed specifically for your ore characteristics and requirements."
              }
            ].map((advantage, index) => (
              <Card key={index} className="card-corporate text-center">
                <CardContent className="p-6">
                  <advantage.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-secondary mb-3 font-serif">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
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
              Our elution services support diverse mining operations and processing facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="card-gold">
                <CardContent className="p-6 text-center">
                  <FlaskConical className="h-8 w-8 text-primary mx-auto mb-4" />
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
            Maximize Your Gold Recovery Today
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Experience the benefits of advanced elution technology and expert process optimization. 
            Contact us to discuss how our elution services can enhance your gold recovery operations.
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
                Request Technical Details
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceElution;