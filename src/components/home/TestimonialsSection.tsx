import ScrollReveal from "../ScrollReveal";
import { Quote } from "lucide-react";
import testimonial1 from "../../assets/testimonial-1.jpg";
import testimonial2 from "../../assets/testimonial-2.jpg";
import testimonial3 from "../../assets/testimonial-3.jpg";

const logos = [
  "TechVenture", "Acme Corp", "NovaStar", "Quantum AI", "CloudPeak",
  "Meridian", "Apex Digital", "Zenith Labs", "Prism Co", "Stratos",
];

const TestimonialsSection = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="max-w-7xl mx-auto">
      {/* Client Logos */}
      <ScrollReveal>
        <div className="mb-16 lg:mb-24">
          <p className="text-center text-xs uppercase tracking-wider text-muted-foreground font-display mb-8">
            Trusted by Industry Leaders
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex animate-marquee">
              {[...logos, ...logos].map((logo, i) => (
                <div key={i} className="flex-shrink-0 mx-8 lg:mx-12 flex items-center justify-center">
                  <span className="text-lg font-display font-semibold text-muted-foreground/30 whitespace-nowrap">
                    {logo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Testimonials */}
      <ScrollReveal>
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-wider text-primary font-display font-medium">
            Client Testimonials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tighter">
            Results that <span className="text-gradient">speak</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            quote: "Sudarshan Technologies transformed our digital presence entirely. Revenue increased by 340% within the first year of our partnership.",
            name: "Rajesh Sharma",
            role: "CEO, TechVenture India",
            metric: "+340%",
            metricLabel: "Revenue Growth",
            img: testimonial1,
          },
          {
            quote: "Their AI automation solutions cut our operational costs dramatically. The ROI was visible within weeks, not months.",
            name: "Priya Nair",
            role: "COO, NovaStar Solutions",
            metric: "-74%",
            metricLabel: "Cost Reduction",
            img: testimonial2,
          },
          {
            quote: "The ERP migration was flawless. Zero downtime, full data integrity. Best technical team we've ever worked with.",
            name: "Arjun Patel",
            role: "CTO, Quantum AI Labs",
            metric: "99.9%",
            metricLabel: "Uptime",
            img: testimonial3,
          },
        ].map((testimonial, i) => (
          <ScrollReveal key={testimonial.name} delay={i * 0.1}>
            <div className="card-premium p-8 h-full flex flex-col relative">
              {/* Gold accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-secondary/60 to-transparent rounded-t-2xl" />
              
              <Quote className="w-8 h-8 text-secondary/30 mb-4" />
              
              <div className="mb-6">
                <span className="text-4xl lg:text-5xl font-display font-bold text-primary tabular-nums">
                  {testimonial.metric}
                </span>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1 font-display font-medium">
                  {testimonial.metricLabel}
                </p>
              </div>
              <blockquote className="text-sm text-muted-foreground leading-relaxed flex-1 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="mt-6 pt-5 border-t border-border flex items-center gap-4">
                <img src={testimonial.img} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-secondary/20" />
                <div>
                  <p className="font-display font-bold text-sm text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
