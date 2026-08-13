import ScrollReveal from "../ScrollReveal";
import { Eye, Compass } from "lucide-react";

const VisionMissionSection = () => (
  <section className="section-padding relative overflow-hidden bg-muted/30">
    <div className="max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-wider text-primary font-display font-medium">
            Our Purpose
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tighter">
            Vision & <span className="text-gradient">Mission</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ScrollReveal delay={0}>
          <div className="card-premium p-8 lg:p-10 h-full">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display font-bold text-2xl text-foreground">Our Vision</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To become the most trusted digital transformation partner for businesses across India — 
              empowering startups, SMEs, and enterprises with technology solutions that drive real, 
              measurable growth.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="card-premium p-8 lg:p-10 h-full">
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
              <Compass className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-display font-bold text-2xl text-foreground">Our Mission</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To deliver affordable, high-quality digital marketing, web development, and AI-powered 
              solutions with complete transparency — helping every client achieve their full potential 
              in the digital landscape.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default VisionMissionSection;
