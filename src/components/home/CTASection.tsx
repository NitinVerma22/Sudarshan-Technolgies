import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import aboutTeam from "../../assets/about-team.jpg";

const CTASection = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="relative max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <div>
            <span className="text-xs uppercase tracking-wider text-secondary font-display font-semibold">
              Ready to Scale?
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tighter">
              Start your digital
              <span className="text-gradient"> transformation</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg">
              Book a free 30-minute consultation. We'll audit your current systems 
              and map out a strategy for measurable growth.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary">
                Book Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/case-studies" className="btn-outline">
                View Case Studies
              </Link>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border">
            <img src={aboutTeam} alt="Sudarshan Technologies expert software development team in Lucknow office" className="w-full h-full object-cover" />
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default CTASection;
