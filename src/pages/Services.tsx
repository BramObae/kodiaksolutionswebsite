import { Link } from "react-router-dom";
import { ArrowRight, Settings, FlaskConical, Wrench, Users, Award, Clock } from "lucide-react";
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
      image: africanTeamConsulting,
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
      image: africanElutionProcess,
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
      image: africanMiningEquipment,
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
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/92 to-secondary/95"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url(${africanMiningEquipment})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
        <div className="relative z-10 text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm uppercase tracking-[0.24em] text-primary mb-6">
            Comprehensive Mining Solutions
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif animate-slide-up">
            Our <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-primary bg-clip-text text-transparent animate-gold-glow">Mining Services</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.3s'}}>
            Comprehensive gold mining services designed to maximize recovery efficiency, ensure safety and build sustainable value for your operation.
          </p>
        </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-slate-900/5 to-background opacity-90"></div>
        <div className="absolute left-1/4 top-10 h-48 w-48 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-10 h-56 w-56 rounded-full bg-secondary/10 blur-3xl"></div>

        <div className="container mx-auto px-2 md:px-4 relative z-10 space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group grid gap-8 items-center rounded-[32px] border border-white/10 bg-white/10 p-6 md:p-8 shadow-2xl shadow-slate-900/10 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-primary/20 hover:bg-white/20 lg:grid-cols-2 ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2 lg:text-right' : ''} space-y-6 px-2 md:px-0`}>
                <div className="inline-flex items-center gap-3 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-primary shadow-sm shadow-primary/10">
                  <service.icon className="h-5 w-5" />
                  Service highlight
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary font-serif leading-tight">
                  {service.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <div className="grid gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3 rounded-3xl border border-white/10 bg-background/70 p-4">
                      <div className="mt-1 h-3 w-3 rounded-full bg-primary" />
                      <p className="text-sm text-muted-foreground leading-snug">{feature}</p>
                    </div>
                  ))}
                </div>

                <Button className="btn-hero mt-4" asChild>
                  <Link to={service.href} className="flex items-center justify-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} relative overflow-hidden rounded-[28px] shadow-2xl shadow-slate-900/10 px-2 md:px-0`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-[28rem] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm uppercase tracking-[0.3em] text-primary mb-2">Premium mining solution</p>
                  <h3 className="text-2xl font-semibold leading-tight">{service.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-accent via-background to-accent">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm uppercase tracking-[0.24em] text-primary mb-6">
              Our Solutions
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-secondary mb-6 font-serif leading-tight">
              Choose Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Service</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Select the specific service that meets your mining operation needs. Each solution is tailored for maximum efficiency and results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const gradients = [
                'from-primary/20 to-primary/5',
                'from-orange-500/20 to-orange-500/5',
                'from-yellow-500/20 to-yellow-500/5',
                'from-amber-500/20 to-amber-500/5'
              ];
              const iconBackgrounds = [
                'bg-gradient-to-br from-primary/30 to-primary/10',
                'bg-gradient-to-br from-orange-500/30 to-orange-500/10',
                'bg-gradient-to-br from-yellow-500/30 to-yellow-500/10',
                'bg-gradient-to-br from-amber-500/30 to-amber-500/10'
              ];
              const iconColors = [
                'text-primary',
                'text-orange-500',
                'text-yellow-500',
                'text-amber-500'
              ];

              return (
                <Link key={index} to={service.href} className="block group h-full">
                  <div className={`relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br ${gradients[index]} backdrop-blur-xl transition-all duration-500 hover:border-white/30 hover:shadow-2xl hover:shadow-slate-900/20 hover:-translate-y-2`}>
                    {/* Top accent line */}
                    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${index === 0 ? 'from-primary to-secondary' : index === 1 ? 'from-orange-500 to-primary' : index === 2 ? 'from-yellow-500 to-orange-500' : 'from-amber-500 to-yellow-500'}`} />
                    
                    {/* Card content */}
                    <div className="h-full p-8 flex flex-col">
                      {/* Icon */}
                      <div className={`${iconBackgrounds[index]} p-4 rounded-2xl inline-flex mb-6 group-hover:scale-110 transition-transform duration-300 self-start`}>
                        <service.icon className={`h-8 w-8 ${iconColors[index]}`} />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-semibold text-secondary mb-3 font-serif group-hover:text-primary transition-colors duration-300 leading-snug flex-1">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-5 line-clamp-2 group-hover:text-foreground transition-colors duration-300">
                        {service.description}
                      </p>

                      {/* Key feature preview */}
                      <div className="mb-6 pb-6 border-b border-white/10">
                        <p className="text-xs uppercase tracking-[0.2em] text-primary/70 mb-2 font-medium">Key Features</p>
                        <ul className="space-y-1">
                          {service.features.slice(0, 2).map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-xs text-muted-foreground flex items-start gap-2">
                              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary/50 mt-1.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <div className="flex items-center justify-between group/btn cursor-pointer">
                        <span className="text-sm font-semibold text-secondary group-hover:text-primary transition-colors duration-300">Explore Service</span>
                        <div className="w-6 h-6 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                          <ArrowRight className="h-3.5 w-3.5 text-primary group-hover:text-primary-dark" />
                        </div>
                      </div>
                    </div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{
                      background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${iconColors[index]}, transparent)`
                    }} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-slate-900/10 to-background opacity-80"></div>
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-secondary/10 blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="mx-auto mb-5 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-primary shadow-sm shadow-primary/10">
              Why Choose Kodiak Solutions?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4 font-serif leading-tight">
              We deliver mining excellence with consistency and confidence.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We bring unmatched expertise and commitment to every mining project, ensuring every operation gets tailored support, clear results, and world-class execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "5+ Years Experience",
                description: "Over a decade and a half of specialized experience in gold mining operations and consultancy.",
                accent: "Trusted mining strategy"
              },
              {
                icon: Award,
                title: "50+ Successful Projects",
                description: "Proven track record with more than 200 completed projects across 12 Counties worldwide.",
                accent: "Global project delivery"
              },
              {
                icon: Clock,
                title: "24/7 Support",
                description: "Round-the-clock technical support and consultation for all your mining operation needs.",
                accent: "Always-on assistance"
              }
            ].map((benefit, index) => {
              const BenefitIcon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/10 shadow-2xl shadow-slate-900/10 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-primary/30 hover:bg-white/20"
                >
                  <CardContent className="relative p-8">
                    <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-primary to-secondary opacity-60" />
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/10 text-primary transition duration-500 group-hover:scale-105">
                      <BenefitIcon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-semibold text-secondary mb-3 font-serif">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-5">
                      {benefit.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                      {benefit.accent}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-r from-secondary via-slate-900 to-secondary text-secondary-foreground">
        <div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-secondary/30 blur-3xl" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm uppercase tracking-[0.24em] text-primary mb-5">
            Start your mining transformation
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif leading-tight">
            Ready to upgrade your mining operations with premium support?
          </h2>
          <p className="text-lg md:text-xl mb-10 opacity-90 max-w-3xl mx-auto">
            Our team is ready to deliver expert services and project support that helps your mine operate smarter and safer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero" asChild>
              <a 
                href="https://wa.me/254712614215" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Chat With Us
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="btn-outline-gold bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-secondary"
              asChild
            >
              <Link to="/contact">Request Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
