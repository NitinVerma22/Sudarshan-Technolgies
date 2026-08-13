import Layout from "../components/Layout";
import ScrollReveal from "../components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    client: "TechVenture",
    industry: "SaaS Platform",
    problem: "Stagnant growth with outdated tech stack and fragmented marketing channels.",
    strategy: "Complete platform rebuild with React/Next.js, unified analytics, and multi-channel growth strategy.",
    results: [
      { metric: "+340%", label: "Revenue Growth" },
      { metric: "-60%", label: "Bounce Rate" },
      { metric: "+420%", label: "Organic Traffic" },
      { metric: "2.1s", label: "Load Time" },
    ],
  },
  {
    client: "NovaStar",
    industry: "Healthcare Tech",
    problem: "Manual customer support drowning team with 2,000+ daily tickets and 48-hour response times.",
    strategy: "AI chatbot deployment with NLP training, CRM integration, and automated ticket routing.",
    results: [
      { metric: "-74%", label: "Manual Work" },
      { metric: "< 2min", label: "Response Time" },
      { metric: "+92%", label: "CSAT Score" },
      { metric: "$1.2M", label: "Annual Savings" },
    ],
  },
  {
    client: "Meridian Group",
    industry: "E-commerce",
    problem: "Low conversion rates on legacy platform with poor mobile experience and slow checkout.",
    strategy: "Custom Next.js storefront with optimized checkout flow, A/B testing, and performance overhaul.",
    results: [
      { metric: "+220%", label: "Conversion Rate" },
      { metric: "+180%", label: "Mobile Revenue" },
      { metric: "0.8s", label: "Time to Interactive" },
      { metric: "4.2x", label: "ROAS" },
    ],
  },
];

const CaseStudies = () => (
  <Layout>
    <section className="pt-32 lg:pt-40 section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <span className="text-xs uppercase tracking-wider text-primary font-display font-medium">Case Studies</span>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tighter">
            Problem. Strategy. <span className="text-gradient">Result.</span>
          </h1>
        </ScrollReveal>

        <div className="mt-16 space-y-8">
          {caseStudies.map((cs, i) => (
            <ScrollReveal key={cs.client} delay={i * 0.1}>
              <div className="glass-card p-6 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-display">{cs.industry}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground tracking-tighter">{cs.client}</h3>

                <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-display mb-2">The Problem</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cs.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-display mb-2">Our Strategy</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cs.strategy}</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-display mb-2">The Results</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {cs.results.map((r) => (
                        <div key={r.label}>
                          <span className="text-xl font-display font-bold text-gradient tabular-nums">{r.metric}</span>
                          <p className="text-xs text-muted-foreground">{r.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-16 text-center">
            <Link to="/contact" className="btn-primary">Get Similar Results <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default CaseStudies;
