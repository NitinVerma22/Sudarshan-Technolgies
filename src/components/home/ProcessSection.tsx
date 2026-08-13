import ScrollReveal from "../ScrollReveal";
import { Search, Lightbulb, Code2, Rocket } from "lucide-react";

const steps = [
  { icon: Search, step: "01", title: "Discovery & Research", desc: "We understand your business, audience, competitors, and goals through in-depth analysis." },
  { icon: Lightbulb, step: "02", title: "Strategy & Planning", desc: "We craft a tailored strategy with clear milestones, timelines, and measurable KPIs." },
  { icon: Code2, step: "03", title: "Design & Development", desc: "Our team builds your solution using modern technologies with pixel-perfect execution." },
  { icon: Rocket, step: "04", title: "Launch & Growth", desc: "We launch, monitor performance, optimize continuously, and scale what works." },
];

const ProcessSection = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-display font-medium">
            Our Process
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tighter">
            How we <span className="text-gradient">work</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A proven 4-step process that turns your vision into a high-performing digital product.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <ScrollReveal key={s.step} delay={i * 0.1}>
            <div className="relative text-center group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 to-transparent" />
              )}
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-8 h-8 text-primary" />
              </div>
              <span className="text-xs font-display font-bold text-secondary uppercase tracking-widest">
                Step {s.step}
              </span>
              <h3 className="mt-2 font-display font-bold text-lg text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
