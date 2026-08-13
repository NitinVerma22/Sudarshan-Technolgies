import Layout from "../components/Layout";
import ScrollReveal from "../components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import portfolioShowcase from "../assets/portfolio-showcase.jpg";

const projects = [
  { title: "TechVenture Platform", category: "Website", tech: ["React", "Node.js", "AWS"], result: "+340% revenue growth", desc: "Complete digital transformation for a SaaS platform." },
  { title: "NovaStar AI Integration", category: "Automation", tech: ["Python", "TensorFlow", "API"], result: "-74% operational costs", desc: "AI-powered customer service automation." },
  { title: "Quantum Analytics Dashboard", category: "Software", tech: ["React", "D3.js", "PostgreSQL"], result: "Real-time data visibility", desc: "Enterprise analytics platform for data-driven decisions." },
  { title: "Meridian E-commerce", category: "Website", tech: ["Next.js", "Shopify", "Stripe"], result: "+220% conversion rate", desc: "High-converting e-commerce with custom checkout." },
  { title: "Apex Digital Marketing", category: "Marketing", tech: ["Google Ads", "Meta", "Analytics"], result: "4.2x ROAS", desc: "Multi-channel digital marketing campaign." },
  { title: "CloudPeak CRM", category: "Software", tech: ["React", "Node.js", "MongoDB"], result: "+180% lead conversion", desc: "Custom CRM with automated pipeline management." },
];

const categories = ["All", "Website", "Marketing", "Automation", "Software"];

const Portfolio = () => (
  <Layout>
    <section className="pt-32 lg:pt-40 section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <span className="text-xs uppercase tracking-wider text-primary font-display font-medium">Portfolio</span>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tighter">
            Our <span className="text-gradient">Work</span>
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl text-lg">Selected projects showcasing our engineering capabilities.</p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-8 rounded-2xl overflow-hidden shadow-xl">
            <img src={portfolioShowcase} alt="Sudarshan Technologies software and web development portfolio showcase" className="w-full h-64 lg:h-80 object-cover" />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button key={cat} className="px-4 py-2 rounded-lg text-xs font-display uppercase tracking-wider border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all">
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.05}>
              <div className="glass-card-hover group overflow-hidden h-full flex flex-col">
                <div className="aspect-video bg-muted flex items-center justify-center border-b border-border">
                  <span className="text-muted-foreground/40 font-display text-sm">{p.category}</span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between">
                    <h3 className="font-display font-semibold text-foreground">{p.title}</h3>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-xs border border-border text-muted-foreground bg-muted/50">{t}</span>
                    ))}
                  </div>
                  <div className="mt-auto pt-4 border-t border-border mt-4">
                    <span className="text-sm font-display font-semibold text-gradient">{p.result}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-16 text-center">
            <Link to="/contact" className="btn-primary">Start Your Project <ArrowUpRight className="w-4 h-4" /></Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default Portfolio;
