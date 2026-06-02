import { Users, Target, Award, Globe, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import consultancyTeam from "@/assets/consultancy-team.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every project, ensuring the highest standards of quality and professionalism."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We believe in building long-term partnerships with our clients based on trust and mutual success."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We continuously innovate and adopt cutting-edge technologies to stay ahead in the mining industry."
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "We are committed to sustainable mining practices that protect the environment for future generations."
    }
  ];

  return (
    <Layout>
      <SEO 
        title="About Us - Leading Gold Mining Consultancy"
        description="Learn about Kodiak Solutions Limited, a trusted gold mining consultancy with 15+ years of experience. Our mission, vision, values, and expert team."
        keywords="about kodiak solutions, mining consultancy company, gold mining experts, mining professionals, mining team"
      />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `url(${consultancyTeam})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/90 to-slate-950/95"></div>
        
        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -ml-40 -mb-40"></div>
        
        <div className="relative z-10 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8 inline-flex items-center rounded-full bg-primary/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-primary shadow-lg shadow-primary/30">
                About Our Company
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif leading-tight animate-slide-up">
                About <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Kodiak Solutions</span>
              </h1>
              <p className="text-xl leading-relaxed text-white/90 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
                With 5 years of pioneering experience in the gold mining industry, we have established ourselves as a trusted partner for mining operations worldwide, delivering exceptional consultancy and innovative technical solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-slate-900/5 to-background opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4 font-serif leading-tight">Our <span className="gold-text">Story</span></h2>
                <div className="h-1.5 w-20 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
              </div>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2020, Kodiak Solutions Limited emerged from a vision to revolutionize the gold mining industry through expert consultancy and innovative solutions. Our founders, seasoned mining professionals with decades of combined experience, recognized the need for specialized expertise in gold extraction and processing.
                </p>
                <p>
                  Starting as a small consultancy firm, we have grown into a comprehensive solutions provider, serving clients across 4 Counties and completing 50+ successful projects. Our commitment to excellence and innovation has made us a preferred partner for mining operations of all scales.
                </p>
                <p>
                  Today, we continue to lead the industry with cutting-edge elution technologies, high-quality mining chemicals, state-of-the-art equipment, and unparalleled consulting services that drive our clients' success.
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[28px] blur-2xl"></div>
              <img 
                src={consultancyTeam} 
                alt="Kodiak Solutions Team" 
                className="relative rounded-[28px] shadow-2xl shadow-slate-900/30 group-hover:shadow-3xl group-hover:shadow-primary/20 transition duration-500 w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-slate-900/5 to-background opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4 font-serif">Our <span className="gold-text">Foundation</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description: "To provide world-class gold mining consultancy and solutions that maximize recovery efficiency, ensure operational safety, and drive sustainable growth for our clients worldwide."
              },
              {
                icon: Globe,
                title: "Our Vision",
                description: "To be the global leader in gold mining consultancy and technology solutions, setting industry standards for innovation, sustainability, and operational excellence."
              },
              {
                icon: Award,
                title: "Our Values",
                description: "Excellence, integrity, innovation, and sustainability guide everything we do. We believe in building lasting partnerships based on trust and mutual success."
              }
            ].map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/10 p-8 shadow-2xl shadow-slate-900/10 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-primary/30 hover:bg-white/20"
                >
                  <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-primary to-secondary opacity-60" />
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/10 text-primary transition duration-500 group-hover:scale-110">
                    <ItemIcon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-secondary mb-4 font-serif">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values Detail */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/5 via-background to-slate-900/5 opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="mx-auto mb-5 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-primary shadow-sm shadow-primary/10">
              Core Principles
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4 font-serif leading-tight">What <span className="gold-text">Drives Us</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our core values shape our approach to every project and client relationship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const ValueIcon = value.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/10 p-8 shadow-lg shadow-slate-900/10 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-primary/20 hover:bg-white/20"
                >
                  <div className="flex items-start space-x-6">
                    <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 p-4 text-primary transition duration-500 group-hover:from-primary/30 group-hover:to-primary/20 group-hover:scale-110">
                      <ValueIcon className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-secondary mb-2 font-serif">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-slate-900/5 to-background opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="mx-auto mb-5 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-primary shadow-sm shadow-primary/10">
              Expert Leadership
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4 font-serif leading-tight">Our <span className="gold-text">Expert Team</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the professionals who bring decades of mining expertise to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "*********",
                position: "Founder",
                Contact: "emmaawinja@kodiaksolutions.co.ke / 0729696220",
                experience: "10+ years as a project manager and civil engineer"
              },
              {
                name: "******",
                position: "Co Founder",
                Contact: "0712614215",
                experience: "8+ years in gold extraction and processing"
              },
              {
                name: "*******",
                position: "Technical Operations",
                Contact: "******",
                experience: "5+ years in mining equipment and technology"
              }
            ].map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/10 p-8 shadow-2xl shadow-slate-900/10 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-primary/30 hover:bg-white/20 text-center"
              >
                <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-primary to-secondary opacity-60" />
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 group-hover:scale-110 transition duration-500">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2 font-serif">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-2 text-sm uppercase tracking-[0.1em]">{member.position}</p>
                <p className="text-primary font-medium mb-3 text-xs">{member.contact }</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `url(${consultancyTeam})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/90 to-slate-950/95"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -ml-40 -mb-40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8 inline-flex items-center rounded-full bg-primary/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-primary shadow-lg shadow-primary/30">
              Let's Get Started
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-serif text-white leading-tight">
              Ready to <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Partner With Us?</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
              Join the growing list of successful mining operations that trust Kodiak Solutions for their gold mining needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                className="text-lg px-10 py-7 rounded-xl font-semibold shadow-2xl shadow-primary/30 hover:shadow-3xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1" 
                asChild
              >
                <a 
                  href="https://wa.me/254712614215" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Partner With Us</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
