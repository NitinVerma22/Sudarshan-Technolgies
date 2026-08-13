import ScrollReveal from "../ScrollReveal";
import { Shield, Zap, HeadphonesIcon, Target, Users, Award } from "lucide-react";

const reasons = [
  { icon: Target, title: "Result-Driven Approach", desc: "Every strategy we build is backed by data and focused on delivering measurable business outcomes." },
  { icon: Zap, title: "Cutting-Edge Technology", desc: "We leverage the latest tools, frameworks, and AI-powered solutions to keep you ahead of competitors." },
  { icon: Shield, title: "Transparent & Honest", desc: "No fake promises. We provide clear reporting, honest timelines, and realistic expectations from day one." },
  { icon: HeadphonesIcon, title: "Dedicated Support", desc: "Our team is always available to assist you with prompt communication and quick turnaround times." },
  { icon: Users, title: "Experienced Team", desc: "A passionate team of developers, designers, and marketers committed to your business growth." },
  { icon: Award, title: "Affordable Excellence", desc: "Premium quality services at competitive prices — designed for startups and growing businesses." },
];

const WhyChooseUsSection = () => (
  <section className="section-padding relative overflow-hidden bg-muted/30">
    <div className="max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-display font-medium">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tighter">
            Why businesses <span className="text-gradient">trust us</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We don't just deliver services — we build long-term partnerships focused on real growth and tangible results.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r, i) => (
          <ScrollReveal key={r.title} delay={i * 0.08}>
            <div className="card-premium p-8 h-full">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <r.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
