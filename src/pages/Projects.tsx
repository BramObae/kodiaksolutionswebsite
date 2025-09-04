import { ArrowRight, MapPin, Calendar, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import miningEquipment from "@/assets/mining-equipment.jpg";
import elutionProcess from "@/assets/elution-process.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Ghana Gold Recovery Optimization",
      location: "Ghana, West Africa",
      duration: "18 months",
      image: miningEquipment,
      challenge: "Low gold recovery rates and inefficient processing methods were limiting the mine's profitability and operational efficiency.",
      solution: "Implemented advanced elution technology, optimized chemical processes, and provided comprehensive staff training on new procedures.",
      results: [
        "35% increase in gold recovery rate",
        "25% reduction in processing time",
        "$2.3M annual cost savings",
        "Improved environmental compliance"
      ]
    },
    {
      title: "South African Mining Equipment Upgrade",
      location: "Johannesburg, South Africa",
      duration: "12 months",
      image: elutionProcess,
      challenge: "Outdated equipment and inefficient extraction processes were causing production bottlenecks and safety concerns.",
      solution: "Complete equipment modernization including new extraction machinery, automated processing systems, and safety protocol implementation.",
      results: [
        "40% increase in production capacity",
        "60% reduction in equipment downtime",
        "Zero safety incidents post-upgrade",
        "Enhanced operational efficiency"
      ]
    },
    {
      title: "Peru Chemical Processing Enhancement",
      location: "Lima Region, Peru",
      duration: "8 months",
      image: miningEquipment,
      challenge: "Chemical processing inefficiencies and environmental compliance issues were affecting both productivity and sustainability goals.",
      solution: "Introduced eco-friendly chemical solutions, optimized processing workflows, and established comprehensive quality control systems.",
      results: [
        "30% improvement in chemical efficiency",
        "50% reduction in environmental impact",
        "Full regulatory compliance achieved",
        "Sustainable operations established"
      ]
    }
  ];

  const testimonials = [
    {
      name: "David Chen",
      position: "Operations Manager",
      company: "Golden Horizon Mining Ltd",
      content: "Kodiak Solutions transformed our operations completely. Their expertise in gold elution processes helped us achieve recovery rates we never thought possible. The ROI was evident within the first quarter."
    },
    {
      name: "Maria Rodriguez",
      position: "CEO",
      company: "Andean Gold Corporation",
      content: "Working with Kodiak Solutions was a game-changer for our mining operation. Their comprehensive approach to equipment modernization and process optimization exceeded all our expectations."
    },
    {
      name: "James O'Connor",
      position: "Technical Director",
      company: "African Mining Consortium",
      content: "The team at Kodiak Solutions brings unparalleled expertise to every project. Their commitment to safety, efficiency, and environmental responsibility sets them apart in the industry."
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Mining Projects & Case Studies - Proven Results"
        description="Explore Kodiak Solutions' successful gold mining projects and case studies. See how we've helped mining operations worldwide achieve exceptional results."
        keywords="mining projects, case studies, gold mining success stories, mining consultancy results, mining equipment projects"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/90"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url(${miningEquipment})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        <div className="relative z-10 text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 font-serif animate-slide-up">
            Our <span className="gold-text animate-gold-glow">Project Portfolio</span>
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.3s'}}>
            Discover how we've helped mining operations worldwide achieve exceptional results through 
            innovative solutions, expert consultancy, and cutting-edge technology implementation.
          </p>
        </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4 font-serif">
              Featured Case Studies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real projects, real results. See how our expertise drives success.
            </p>
          </div>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-slide-up gold-hover-effect" style={{animationDelay: `${index * 0.3}s`}}>
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative hover-scale">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="rounded-xl shadow-lg w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/10 rounded-xl"></div>
                    <div className="gold-particle" style={{top: '20px', left: '30px'}}></div>
                    <div className="gold-particle" style={{bottom: '30px', right: '20px'}}></div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold text-secondary mb-4 font-serif">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>{project.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-secondary mb-2">Challenge</h4>
                      <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-secondary mb-2">Our Solution</h4>
                      <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-secondary mb-3">Results Achieved</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center space-x-3">
                            <TrendingUp className="h-4 w-4 text-primary" />
                            <span className="text-muted-foreground text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4 font-serif">
              Our Impact by Numbers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Measurable results that speak to our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "100+", label: "Projects Completed" },
              { value: "50+", label: "Satisfied Clients" },
              { value: "12", label: "Countries Served" },
              { value: "99%", label: "Success Rate" }
            ].map((stat, index) => (
              <Card key={index} className="card-gold text-center border-none">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4 font-serif">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from the mining professionals who trust us with their operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-corporate">
                <CardContent className="p-8">
                  <p className="text-muted-foreground italic mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-border pt-6">
                    <h4 className="font-semibold text-secondary">{testimonial.name}</h4>
                    <p className="text-primary text-sm">{testimonial.position}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.company}</p>
                  </div>
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
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our growing portfolio of successful mining projects. Let's discuss how we can 
            help optimize your operations and achieve exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero" asChild>
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Discuss Your Project
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="btn-outline-gold bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-secondary"
              asChild
            >
              <a href="mailto:info@kodiaksolutions.com">
                Email Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;