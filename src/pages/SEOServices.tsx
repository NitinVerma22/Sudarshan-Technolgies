import Layout from "../components/Layout";
import ScrollReveal from "../components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Search, BarChart3, FileText, MapPin, Link2, Gauge } from "lucide-react";
import seoImg from "../assets/seo-services.jpg";
import SEO from "../components/SEO";

const seoServices = [
  { icon: Search, title: "Technical SEO Audits", desc: "Comprehensive crawl analysis, site architecture review, and performance optimization." },
  { icon: FileText, title: "Content Strategy", desc: "Keyword research, content mapping, and editorial calendar planning for organic growth." },
  { icon: Link2, title: "Link Building", desc: "White-hat outreach and digital PR to build domain authority." },
  { icon: MapPin, title: "Local SEO", desc: "Google Business Profile optimization and local citation building." },
  { icon: Gauge, title: "Core Web Vitals", desc: "Performance optimization for LCP, FID, and CLS to improve rankings." },
  { icon: BarChart3, title: "Analytics & Reporting", desc: "Custom dashboards with real-time ranking tracking and ROI measurement." },
];

const SEOServices = () => (
  <Layout>
    <SEO 
      title="Professional SEO Services | Rank Higher on Google"
      description="Expert SEO services including technical audits, link building, local SEO, and content strategy to boost your organic traffic and rankings."
      keywords="SEO services, best SEO company, local SEO experts, technical SEO agency, rank higher on search engines, complete SEO solutions"
    />
    <section className="pt-32 lg:pt-40 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <Link to="/services" className="text-xs text-muted-foreground hover:text-primary transition-colors font-display uppercase tracking-wider">← Services</Link>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tighter">
              SEO <span className="text-gradient">Optimization</span>
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl text-lg">
              Technical SEO and content strategies that consistently dominate search rankings and drive qualified organic traffic.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={seoImg} alt="Sudarshan Technologies search engine optimization and ranking strategy" className="w-full h-auto object-cover" />
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {seoServices.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.05}>
              <div className="glass-card-hover p-6 h-full">
                <s.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-20 text-center">
            <Link to="/contact" className="btn-primary">
              Get Free SEO Audit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default SEOServices;
