import { Users, Target, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import africanTeamConsultation from "@/assets/african-team-consultation.jpg";

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
        description="Learn about Kodiak Solutions Limited, a trusted gold mining consultancy with 5+ years of experience. Our mission, vision, values, and expert team."
        keywords="about kodiak solutions, mining consultancy company, gold mining experts, mining professionals, mining team"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/90"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url(${africanTeamConsultation})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        <div className="relative z-10 text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 font-serif animate-slide-up">
              About <span className="gold-text animate-gold-glow">Kodiak Solutions</span>
            </h1>
            <p className="text-xl opacity-90 leading-relaxed animate-slide-up" style={{animationDelay: '0.3s'}}>
              With over 5 years of experience in the gold mining industry, we have established ourselves 
              as a trusted partner for mining operations worldwide, delivering exceptional consultancy 
              and technical solutions.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-6 font-serif">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2008, Kodiak Solutions Limited emerged from a vision to revolutionize 
                  the gold mining industry through expert consultancy and innovative solutions. 
                  Our founders, seasoned mining professionals with decades of combined experience, 
                  recognized the need for specialized expertise in gold extraction and processing.
                </p>
                <p>
                  Starting as a small consultancy firm, we have grown into a comprehensive solutions 
                  provider, serving clients across 12 countries and completing over 100 successful 
                  projects. Our commitment to excellence and innovation has made us a preferred 
                  partner for mining operations of all scales.
                </p>
                <p>
                  Today, we continue to lead the industry with cutting-edge elution technologies, 
                  high-quality mining chemicals, state-of-the-art equipment, and unparalleled 
                  consulting services that drive our clients' success.
                </p>
              </div>
            </div>
            <div className="relative animate-slide-right">
              <img 
                src="/lovable-uploads/5197321b-ba8d-4d41-92db-cc5fefe13f44.png" 
                alt="Kodiak Solutions Team Consultation" 
                className="rounded-xl shadow-lg hover-scale gold-hover-effect"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-xl"></div>
              {/* Gold particles */}
              <div className="gold-particle" style={{top: '20px', left: '30px'}}></div>
              <div className="gold-particle" style={{bottom: '30px', right: '20px'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Mission */}
            <Card className="card-gold hover-scale animate-slide-up gold-hover-effect">
              <CardContent className="p-8 text-center relative">
                <Target className="h-16 w-16 text-primary mx-auto mb-6 animate-gold-pulse" />
                <h3 className="text-2xl font-bold text-secondary mb-4 font-serif gold-text">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide world-class gold mining consultancy and solutions that maximize 
                  recovery efficiency, ensure operational safety, and drive sustainable growth 
                  for our clients worldwide.
                </p>
                <div className="gold-particle" style={{top: '15px', right: '20px'}}></div>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="card-gold">
              <CardContent className="p-8 text-center">
                <Globe className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-secondary mb-4 font-serif">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the global leader in gold mining consultancy and technology solutions, 
                  setting industry standards for innovation, sustainability, and operational excellence.
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="card-gold">
              <CardContent className="p-8 text-center">
                <Award className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-secondary mb-4 font-serif">Our Values</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Excellence, integrity, innovation, and sustainability guide everything we do. 
                  We believe in building lasting partnerships based on trust and mutual success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4 font-serif">What Drives Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our core values shape our approach to every project and client relationship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-corporate">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-secondary mb-3 font-serif">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4 font-serif">Our Expert Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the professionals who bring decades of mining expertise to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. James Mitchell",
                position: "Chief Executive Officer",
                experience: "10+ years in mining operations and strategy"
              },
              {
                name: "Sarah Thompson",
                position: "Head of Consultancy",
                experience: "8+ years in gold extraction and processing"
              },
              {
                name: "Michael Rodriguez",
                position: "Technical Director",
                experience: "7+ years in mining equipment and technology"
              }
            ].map((member, index) => (
              <Card key={index} className="card-gold text-center">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-2 font-serif">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">{member.position}</p>
                  <p className="text-muted-foreground text-sm">{member.experience}</p>
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
            Ready to Partner With Us?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join the growing list of successful mining operations that trust Kodiak Solutions 
            for their gold mining needs.
          </p>
          <div className="flex justify-center">
            <Button className="text-base px-6 py-3" asChild>
              <a 
                href="https://wa.me/254712614215" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Partner With Us on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;