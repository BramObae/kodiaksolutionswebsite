import { Link } from "react-router-dom";
import { ArrowRight, Users, Award, Globe, TrendingUp, Zap, Shield, Target, Star, MessageSquare } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import heroBg from "@/assets/b.jpeg";
import floatingElement1 from "@/assets/floating-element-1.png";
import floatingElement2 from "@/assets/floating-element-2.png";
import africanMiningEquipment from "@/assets/african-mining-equipment.jpg";
import africanLabProcessing from "@/assets/african-lab-processing.jpg";
import africanTeamConsulting from "@/assets/african-team-consulting.jpg";
import africanProcessingPlant from "@/assets/african-processing-plant.jpg";

// Counter animation hook
const useCounter = (target: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const startRef = useRef<number | null>(null);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // Start animation when entering viewport
        if (startRef.current === null) {
          startRef.current = Date.now();
          
          const animate = () => {
            if (startRef.current === null) return;
            
            const elapsed = Date.now() - startRef.current;
            const progress = Math.min(elapsed / duration, 1);
            
            setCount(Math.floor(target * progress));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          animate();
        }
      } else {
        // Reset when leaving viewport - allows re-animation on scroll back
        startRef.current = null;
        setCount(0);
      }
    }, { threshold: 0.1 });

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
      elementRef.current = element;
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [target, duration]);

  return count;
};

// Counter display component
const CounterDisplay = ({ value, duration = 2000 }: { value: string; duration?: number }) => {
  const target = parseInt(value.replace(/[^0-9]/g, ''));
  const count = useCounter(target, duration);
  const suffix = value.replace(/[0-9]/g, '');

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const Index = () => {
  const stats = [
    { icon: TrendingUp, label: "Years in Service", value: "5+" },
    { icon: Award, label: "Projects Completed", value: "50+" },
    { icon: Users, label: "Clients Served", value: "250+" },
    { icon: Globe, label: "Counties Reached", value: "5+" },
  ];

  return (
    <Layout>
      <SEO 
        title="Your Trusted Partner in Gold Mining Excellence"
        description="Kodiak Solutions Limited delivers world-class gold mining consultancy, elution, chemicals, and equipment solutions. 15+ years of excellence in the mining industry."
        keywords="gold mining consultancy, mining solutions, elution services, mining equipment, mining chemicals, professional mining services"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay" />

        {/* Enhanced Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img 
            src={floatingElement1} 
            alt="" 
            className="absolute top-20 left-10 w-16 h-16 opacity-30 float-animation hover-scale"
          />
          <img 
            src={floatingElement2} 
            alt="" 
            className="absolute top-40 right-20 w-20 h-20 opacity-20 float-animation float-delay-1 animate-rotate-slow"
          />
          <img 
            src={floatingElement1} 
            alt="" 
            className="absolute bottom-40 left-1/4 w-12 h-12 opacity-25 float-animation float-delay-2"
          />
          <img 
            src={floatingElement2} 
            alt="" 
            className="absolute bottom-20 right-1/3 w-24 h-24 opacity-15 float-animation animate-pulse-glow"
          />
          <div className="absolute top-1/2 left-5 w-8 h-8 bg-primary/20 rounded-full float-animation opacity-60"></div>
          <div className="absolute top-1/3 right-10 w-6 h-6 bg-primary/30 rounded-full float-animation float-delay-1 opacity-40"></div>
          <div className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-primary/10 rounded-full float-animation float-delay-2 opacity-50"></div>
        </div>

        {/* Enhanced Content with Animations */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          {/* Tagline Badge */}
          <div className="animate-slide-up mb-6 inline-block">
            <div className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-gold-300/30 hover-scale">
              <p className="text-sm md:text-base font-semibold text-gold-300">Industry Leaders • Trusted Expertise • Global Reach</p>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-serif animate-slide-up leading-tight" style={{animationDelay: '0.1s'}}>
            Your Trusted Partner in{" "}
            <span className="gold-text animate-gold-glow">Gold Mining Excellence</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-90 animate-slide-up" style={{animationDelay: '0.2s'}}>
            Delivering world-class solutions with 5 years of proven expertise since 2020
          </p>

          {/* Service Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12 max-w-4xl mx-auto animate-slide-up" style={{animationDelay: '0.3s'}}>
            {[
              { label: "Consultancy", icon: Target },
              { label: "Elution", icon: Zap },
              { label: "Chemicals", icon: Shield },
              { label: "Equipment", icon: Star }
            ].map((service, idx) => {
              const ServiceIcon = service.icon;
              return (
                <div key={idx} className="px-4 py-3 bg-white/5 backdrop-blur border border-gold-300/20 rounded-lg hover-scale transition-all hover:bg-white/10 hover:border-gold-300/40">
                  <ServiceIcon className="h-5 w-5 mx-auto mb-2 text-gold-300" />
                  <p className="text-sm font-semibold">{service.label}</p>
                </div>
              );
            })}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{animationDelay: '0.5s'}}>
            <Button className="btn-hero text-lg px-8 py-6 hover-scale gold-hover-effect font-semibold" asChild>
              <Link to="/services" className="flex items-center space-x-2">
                <span>Explore Services</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              className="btn-outline-gold text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/50 text-white hover:bg-white hover:text-secondary hover-scale font-semibold transition-all hover:border-gold-300"
              asChild
            >
              <Link to="/contact" className="flex items-center space-x-2">
                <span>Get Service</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section with Background */}
      <section className="py-24 relative overflow-hidden" id="stats-section">
        <div 
          className="absolute inset-0 parallax-bg opacity-5"
          style={{ backgroundImage: `url(${africanMiningEquipment})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-background to-secondary/20"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mb-48"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20 animate-slide-up">
            <div className="mx-auto mb-5 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-primary shadow-sm shadow-primary/10">
              Trusted Mining Leadership
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif leading-tight">
              Our <span className="gold-text">Track Record</span>
            </h2>
            <div className="mx-auto mb-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-primary to-secondary opacity-80"></div>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Five years of industry-leading delivery backed by real mining results — from consultancy to equipment, chemicals, and elution services.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {stats.map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <div 
                  key={index}
                  className="group relative animate-slide-up hover-scale"
                  style={{animationDelay: `${index * 0.15}s`}}
                >
                  {/* Card Background with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 group-hover:border-primary/40 transition-all duration-300"></div>
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative p-8 text-center">
                    {/* Icon Container */}
                    <div className="mb-6 inline-block">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                        <StatIcon className="h-10 w-10 text-primary group-hover:text-primary/80 transition-colors" />
                      </div>
                    </div>
                    
                    {/* Value - Animated Counter */}
                    <div className="text-5xl md:text-6xl font-bold gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 mb-3 font-serif">
                      <CounterDisplay value={stat.value} duration={2500} />
                    </div>
                    
                    {/* Label */}
                    <div className="text-lg font-semibold text-foreground/90">
                      {stat.label}
                    </div>
                    
                    {/* Accent line */}
                    <div className="mt-6 h-1 w-12 bg-gradient-to-r from-primary to-primary/30 rounded-full mx-auto group-hover:w-20 transition-all duration-300"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Services Preview with Images */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 parallax-bg opacity-5"
          style={{ backgroundImage: `url(${africanProcessingPlant})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="mx-auto mb-5 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-primary shadow-sm shadow-primary/10">
              Complete Mining Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4 font-serif leading-tight">
              Our <span className="gold-text">Core Services</span>
            </h2>
            <div className="mx-auto mb-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-primary to-secondary opacity-80"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive mining solutions tailored to your specific needs and requirements.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Gold Mining Consultancy",
                description: "Expert guidance and strategic planning for your mining operations.",
                href: "/services/consultancy",
                icon: Target,
                bgImage: africanTeamConsulting
              },
              {
                title: "Gold Elution",
                description: "Advanced elution processes for maximum gold recovery efficiency.",
                href: "/services/elution",
                icon: Zap,
                bgImage: africanLabProcessing
              },
              {
                title: "Mining Chemicals",
                description: "High-quality chemicals optimized for gold mining operations.",
                href: "/services/chemicals",
                icon: Shield,
                bgImage: africanLabProcessing
              },
              {
                title: "Mining Equipment",
                description: "State-of-the-art equipment for professional mining operations.",
                href: "/services/equipment",
                icon: Star,
                bgImage: africanMiningEquipment
              }
            ].map((service, index) => (
              <Link key={index} to={service.href} className="group">
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/10 shadow-2xl shadow-slate-900/10 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-primary/30 hover:bg-white/20 h-96">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.bgImage})` }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20 group-hover:via-slate-950/70 transition duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between p-6">
                    {/* Icon */}
                    <div className="self-start">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 text-primary transition duration-500 group-hover:from-primary/40 group-hover:to-primary/20 group-hover:scale-110">
                        <service.icon className="h-7 w-7" />
                      </div>
                    </div>
                    
                    {/* Text */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-white leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-sm text-white/80 leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* CTA */}
                      <div className="flex items-center gap-2 text-primary font-medium text-sm pt-2 group-hover:text-primary/80 transition-colors">
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Gradient Border Top */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition duration-500"></div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Services Button */}
          <div className="text-center mt-16 animate-slide-up">
            <Button className="btn-hero text-lg px-8 py-6 font-semibold hover-scale" asChild>
              <Link to="/services" className="flex items-center space-x-2">
                <span>View All Services</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Elements */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${africanTeamConsulting})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/90 to-slate-950/95"></div>
        
        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -ml-40 -mb-40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Tagline */}
            <div className="mb-8 inline-flex items-center rounded-full bg-primary/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-primary shadow-lg shadow-primary/30">
              Take The Next Step
            </div>

            {/* Headline */}
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-serif text-white leading-tight">
              Ready to Elevate Your{" "}
              <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Mining Operations?
              </span>
            </h2>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
              Partner with Kodiak Solutions Limited and experience the difference that professional expertise makes.
            </p>

            {/* Divider Line */}
            <div className="mx-auto mb-12 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-secondary"></div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                className="btn-hero text-lg px-10 py-7 rounded-xl font-semibold shadow-2xl shadow-primary/30 hover:shadow-3xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1" 
                asChild
              >
                <Link to="/contact" className="flex items-center space-x-3">
                  <span>Get Started Today</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button 
                className="text-lg px-10 py-7 rounded-xl font-semibold bg-white/10 backdrop-blur-md border-2 border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                asChild
              >
                <a 
                  href="https://wa.me/0710337605" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-white/70">
                <span className="inline-flex items-center gap-2">
                  <span className="inline-flex h-2 w-2 rounded-full bg-primary"></span>
                  Trusted by 250+ clients across 5+ Counties
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
