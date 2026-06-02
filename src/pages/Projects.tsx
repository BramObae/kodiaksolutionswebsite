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
      <section className="relative py-40 overflow-hidden bg-gradient-to-b from-secondary to-secondary/95">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-15" style={{
            backgroundImage: `url(${miningEquipment})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/85 to-secondary/90"></div>
        </div>

        {/* Decorative blobs */}
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-primary/15 blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl animate-pulse" style={{animationDelay: '0.5s'}} />
        <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-2xl" />

        {/* Content */}
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            {/* Badge */}
            <div className="flex justify-center mb-8 animate-slide-up">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 px-4 py-2">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Success Stories</span>
              </div>
            </div>

            {/* Main heading */}
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 font-serif text-secondary-foreground leading-tight animate-slide-up" style={{animationDelay: '0.1s'}}>
                Our <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-primary bg-clip-text text-transparent drop-shadow-lg animate-gold-glow">Project Portfolio</span>
              </h1>
              <p className="text-lg md:text-2xl text-secondary-foreground/90 leading-relaxed max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
                Discover how we've transformed mining operations across continents with innovative solutions and measurable results.
              </p>
            </div>

            {/* Stats preview */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-12 animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-secondary-foreground/80 font-medium">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">250+</div>
                <div className="text-sm text-secondary-foreground/80 font-medium">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">99%</div>
                <div className="text-sm text-secondary-foreground/80 font-medium">Success Rate</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center animate-slide-up" style={{animationDelay: '0.4s'}}>
              <Button className="btn-hero group px-8 py-6 text-base">
                <span>Explore Our Work</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
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
              <div key={index} className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center rounded-[32px] border border-white/10 bg-white/10 p-6 md:p-8 shadow-2xl shadow-slate-900/10 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-primary/20 hover:bg-white/20 animate-slide-up" style={{animationDelay: `${index * 0.25}s`}}>
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative overflow-hidden rounded-[28px] shadow-2xl shadow-slate-900/10 transition duration-500 group-hover:-translate-y-1 group-hover:shadow-primary/20">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="rounded-[28px] w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-[28px]" />
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
              { value: "50+", label: "Projects Completed" },
              { value: "250+", label: "Satisfied Clients" },
              { value: "5", label: "Counties Served" },
              { value: "99%", label: "Success Rate" }
            ].map((stat, index) => (
              <Card key={index} className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/10 shadow-2xl shadow-slate-900/10 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-primary/30 hover:bg-white/20 text-center">
                <CardContent className="p-7">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-50" />
                  <div className="relative text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="relative text-muted-foreground font-medium">{stat.label}</div>
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
              <Card key={index} className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/10 shadow-2xl shadow-slate-900/10 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-primary/30 hover:bg-white/20">
                <CardContent className="p-8 relative">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-50" />
                  <p className="text-muted-foreground italic mb-6 leading-relaxed relative z-10">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-border pt-6 relative z-10">
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
      <section className="relative py-28 overflow-hidden bg-gradient-to-r from-secondary via-slate-900 to-secondary text-secondary-foreground">
        <div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-secondary/30 blur-3xl" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm uppercase tracking-[0.24em] text-primary mb-5">
            Project planning made simple
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif leading-tight">
            Ready to turn your mining challenge into a success story?
          </h2>
          <p className="text-lg md:text-xl mb-10 opacity-90 max-w-3xl mx-auto">
            Reach out now for a free consultation and discover how our team can deliver measurable, sustainable outcomes.
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
              <a href="mailto:info@kodiaksolutions.com">
                Request a Quote
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
