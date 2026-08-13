import Layout from "../components/Layout";
import ScrollReveal from "../components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Target, TrendingUp, Mail, MousePointer, Megaphone } from "lucide-react";
import digitalMarketingImg from "../assets/digital-marketing.jpg";
import SEO from "../components/SEO";

const subServices = [
  { icon: Target, title: "SEO", desc: "Dominate organic search with technical audits, content strategy, and authority building." },
  { icon: MousePointer, title: "Google Ads (PPC)", desc: "High-converting paid campaigns with rigorous A/B testing and bid optimization." },
  { icon: Megaphone, title: "Social Media Ads", desc: "Precision-targeted campaigns across Meta, LinkedIn, and TikTok platforms." },
  { icon: BarChart3, title: "Content Marketing", desc: "Strategic content that builds authority, drives traffic, and converts visitors." },
  { icon: Mail, title: "Email Marketing", desc: "Automated nurture sequences that move prospects through your funnel." },
  { icon: TrendingUp, title: "Conversion Optimization", desc: "Data-driven CRO that increases your conversion rates by 30-200%." },
];

const processSteps = [
  { step: "01", title: "Discovery & Audit", desc: "Deep analysis of your current marketing stack, competitors, and market positioning." },
  { step: "02", title: "Strategy Design", desc: "Custom growth framework with clear KPIs, channel strategy, and budget allocation." },
  { step: "03", title: "Campaign Launch", desc: "Execute multi-channel campaigns with real-time tracking and optimization." },
  { step: "04", title: "Measure & Scale", desc: "Continuous analysis, A/B testing, and scaling of top-performing channels." },
];

const DigitalMarketing = () => (
  <Layout>
    <SEO 
      title="Best Digital Marketing Agency | ROI-Driven Campaigns"
      description="Partner with a leading digital marketing agency offering data-driven SEO, Google Ads, social media marketing, and real estate digital marketing solutions."
      keywords="digital marketing company, real estate digital marketing, best digital marketing agency, ROI driven marketing, top marketing experts, hire digital marketers"
    />
    <section className="pt-32 lg:pt-40 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <Link to="/services" className="text-xs text-muted-foreground hover:text-primary transition-colors font-display uppercase tracking-wider">
              ← Services
            </Link>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tighter">
              Digital <span className="text-gradient">Marketing</span>
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl text-lg">
              Data-driven marketing strategies that generate qualified leads, accelerate pipeline velocity, and deliver measurable ROI.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={digitalMarketingImg} alt="Sudarshan Technologies digital marketing campaigns and ROI analytics" className="w-full h-auto object-cover" />
            </div>
          </ScrollReveal>
        </div>

        {/* Metrics */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { metric: "4.2x", label: "Average ROAS" },
            { metric: "-52%", label: "Cost Per Lead" },
            { metric: "+340%", label: "Organic Traffic" },
            { metric: "97%", label: "Client Retention" },
          ].map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.1}>
              <div className="glass-card p-6 text-center">
                <span className="text-3xl font-display font-bold text-gradient tabular-nums">{item.metric}</span>
                <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Sub Services */}
        <div className="mt-20">
          <ScrollReveal>
            <h2 className="text-2xl lg:text-3xl font-display font-bold tracking-tighter mb-8">
              Marketing <span className="text-gradient">Services</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subServices.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.05}>
                <div className="glass-card-hover p-6">
                  <s.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-display font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mt-20">
          <ScrollReveal>
            <h2 className="text-2xl lg:text-3xl font-display font-bold tracking-tighter mb-8">
              Our <span className="text-gradient">Process</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s, i) => (
              <ScrollReveal key={s.step} delay={i * 0.1}>
                <div className="glass-card p-6 h-full">
                  <span className="text-4xl font-display font-bold text-primary/20">{s.step}</span>
                  <h3 className="mt-3 font-display font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal>
          <div className="mt-20 glass-card p-8 lg:p-12 text-center bg-primary/5">
            <h3 className="text-2xl lg:text-3xl font-display font-bold tracking-tighter">
              Ready to accelerate <span className="text-gradient">growth</span>?
            </h3>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              Get a free marketing audit and custom growth strategy for your business.
            </p>
            <div className="mt-6">
              <Link to="/contact" className="btn-primary">
                Get Free Marketing Audit <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default DigitalMarketing;
