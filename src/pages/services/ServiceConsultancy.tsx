import { CheckCircle, Users, Target, TrendingUp, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import africanTeamConsulting from "@/assets/african-team-consulting.jpg";

const ServiceConsultancy = () => {
  const benefits = [
    "Comprehensive feasibility studies and risk assessments",
    "Operational optimization and efficiency improvements", 
    "Regulatory compliance and safety protocol development",
    "Strategic planning for sustainable mining operations",
    "Advanced geological analysis and resource evaluation",
    "Cost reduction strategies and profit maximization"
  ];

  const industries = [
    "Large-scale commercial mining operations",
    "Small to medium-sized mining companies",
    "Mining exploration and development projects",
    "Government mining agencies and authorities",
    "Investment firms evaluating mining opportunities",
    "Environmental compliance organizations"
  ];

  return (
    <Layout>
      <SEO 
        title="Gold Mining Consultancy Services - Expert Strategic Guidance"
        description="Professional gold mining consultancy services including feasibility studies, operational optimization, risk assessment, and strategic planning for mining operations."
        keywords="gold mining consultancy, mining consulting services, feasibility studies, mining operations optimization, mining strategy"
      />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/lovable-uploads/6d7088ef-64a4-47d8-95cb-2795e81bd92f.png)` }}
        />
        <div className="absolute inset-0 bg-secondary/80" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
            Gold Mining <span className="text-primary">Consultancy</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Expert strategic guidance and comprehensive consulting services to optimize your 
            gold mining operations and maximize profitability.
          </p>
          <Button className="btn-hero text-lg px-8 py-4" asChild>
            <a 
              href="https://wa.me/254712614215"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Get Consultation on WhatsApp
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
                Strategic Mining Consultancy
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our gold mining consultancy services provide comprehensive strategic guidance to help you 
                make informed decisions, optimize operations, and achieve sustainable growth in your mining ventures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Target,
                  title: "Strategic Planning",
                  description: "Develop comprehensive mining strategies aligned with your business objectives and market conditions."
                },
                {
                  icon: Users,
                  title: "Expert Team",
                  description: "Access to experienced mining professionals with decades of industry expertise and proven track records."
                },
                {
                  icon: TrendingUp,
                  title: "Performance Optimization",
                  description: "Identify opportunities for operational improvements and implement efficiency-enhancing solutions."
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
                At Kodiak Solutions, our consultancy services encompass every aspect of gold mining operations, 
                from initial feasibility assessments to ongoing operational optimization. Our team of expert 
                consultants brings together decades of experience in mining engineering, geology, environmental 
                science, and business strategy.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We work closely with our clients to understand their unique challenges and objectives, 
                providing tailored solutions that drive measurable results. Whether you're planning a new 
                mining venture or looking to optimize existing operations, our consultancy services provide 
                the expertise and insights you need to succeed.
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
              Discover how our consultancy services can transform your mining operations.
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

      {/* Real Mining Operations */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4 font-serif">
              Real Mining Projects We Consult On
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our consultancy services cover all aspects of gold mining operations, 
              from heap leaching to CIL/CIP processing facilities.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div 
                  className="aspect-video rounded-lg overflow-hidden shadow-xl bg-cover bg-center hover-scale"
                  style={{ backgroundImage: `url(/lovable-uploads/6d7088ef-64a4-47d8-95cb-2795e81bd92f.png)` }}
                >
                  <div className="w-full h-full bg-gradient-to-t from-secondary/60 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold mb-2 font-serif">Heap Leaching Operations</h3>
                      <p className="text-sm opacity-90">
                        Professional consultancy for large-scale leach pad operations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-secondary font-serif">
                  Operational Excellence Consulting
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We provide expert consultancy for heap leaching operations, CIL/CIP processing, 
                  and all aspects of gold mining. Our team has hands-on experience with large-scale 
                  mining operations and can help optimize your processes for maximum efficiency.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Heap leach pad design and optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">CIL/CIP circuit analysis and improvement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Process control and monitoring systems</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Environmental compliance and best practices</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-secondary mb-8 font-serif">
              Comprehensive Consulting Solutions
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-4">Feasibility Studies & Analysis</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our comprehensive feasibility studies provide detailed analysis of your mining project's 
                  viability, including geological assessments, economic modeling, environmental impact 
                  evaluations, and risk analysis. We help you make informed investment decisions with 
                  accurate data and expert insights.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-4">Operational Optimization</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Transform your mining operations with our optimization services. We analyze your current 
                  processes, identify bottlenecks and inefficiencies, and implement strategic improvements 
                  that enhance productivity, reduce costs, and maximize gold recovery rates.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-4">Risk Management & Compliance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Navigate complex regulatory requirements and mitigate operational risks with our expert 
                  guidance. We help ensure your operations meet all safety standards, environmental 
                  regulations, and industry best practices while minimizing potential liabilities.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-4">Strategic Planning & Development</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Develop long-term strategies for sustainable growth and profitability. Our strategic 
                  planning services include market analysis, resource allocation optimization, technology 
                  roadmapping, and expansion planning to position your operations for future success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4 font-serif">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our consultancy expertise spans across diverse mining sectors and organizational types.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="card-corporate">
                <CardContent className="p-6 text-center">
                  <FileText className="h-8 w-8 text-primary mx-auto mb-4" />
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
            Ready to Optimize Your Mining Operations?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Get expert consultancy services tailored to your specific mining challenges and objectives. 
            Our team is ready to help you achieve operational excellence and sustainable growth.
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
                Email for Details
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceConsultancy;