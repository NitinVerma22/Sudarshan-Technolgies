import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Helmet } from "react-helmet-async";
import ScrollReveal from "../components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Database, BarChart3, Users, Cog, Shield, FileSpreadsheet } from "lucide-react";
import erpImg from "../assets/erp-crm.jpg";

const solutions = [
  { icon: Users, title: "CRM Implementation", desc: "Custom CRM systems that centralize customer data, automate follow-ups, and improve close rates." },
  { icon: Database, title: "ERP Software", desc: "Enterprise resource planning that unifies finance, HR, supply chain, and operations." },
  { icon: FileSpreadsheet, title: "RCM Management", desc: "Revenue cycle management solutions for healthcare and service-based businesses." },
  { icon: Cog, title: "Workflow Automation", desc: "Automate approval chains, document routing, and inter-department processes." },
  { icon: BarChart3, title: "Reporting Dashboards", desc: "Real-time analytics dashboards that surface actionable insights from your data." },
  { icon: Shield, title: "Data Security", desc: "Enterprise-grade security with role-based access, encryption, and compliance." },
];

const ERPCRM = () => (
  <Layout>
    <SEO 
      title="Custom ERP & CRM Development Company in Lucknow"
      description="Empower your business with custom ERP and CRM solutions. Unify finance, HR, and operations. Best enterprise software development company in Lucknow."
      keywords="ERP development company lucknow, custom CRM development, enterprise software development lucknow, workflow automation software, custom business software"
    />
    <section className="pt-32 lg:pt-40 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <Link to="/services" className="text-xs text-muted-foreground hover:text-primary transition-colors font-display uppercase tracking-wider">← Services</Link>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tighter">
              ERP / CRM <span className="text-gradient">Solutions</span>
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl text-lg">
              Sudarshan Technologies is a leading ERP and CRM software development company in Lucknow. We design custom Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) systems that unify your operations, automate workflows, and provide real-time data visibility. Whether you need a healthcare RCM solution or an enterprise-grade ERP, our expert team builds secure and compliant software tailored to your specific business needs.
            </p>
            <Helmet>
              <script type="application/ld+json">
                {`
                  {
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "ERP & CRM Solutions",
                    "serviceType": "Enterprise Software Development",
                    "areaServed": {
                      "@type": "City",
                      "name": "Lucknow",
                      "containedInPlace": {
                        "@type": "State",
                        "name": "Uttar Pradesh",
                        "containedInPlace": {
                          "@type": "Country",
                          "name": "IN"
                        }
                      }
                    },
                    "provider": {
                      "@id": "https://sudarshantech.com/#organization"
                    }
                  }
                `}
              </script>
            </Helmet>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={erpImg} alt="Custom ERP and CRM enterprise software interface developed by Sudarshan Technologies" className="w-full h-auto object-cover" />
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.05}>
              <div className="glass-card-hover p-6 h-full">
                <s.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-20">
          <ScrollReveal>
            <h2 className="text-2xl lg:text-3xl font-display font-bold tracking-tighter mb-8">
              Key <span className="text-gradient">Benefits</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Unified data across all departments and systems",
              "Automated workflows eliminating manual bottlenecks",
              "Real-time dashboards for data-driven decisions",
              "Scalable architecture that grows with your business",
            ].map((benefit, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="glass-card p-6 flex gap-4 items-center">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal>
          <div className="mt-20 text-center">
            <Link to="/contact" className="btn-primary">Request System Audit <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Related Services */}
    <section className="py-20 border-t border-white/10 bg-background/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-2xl font-display font-bold mb-8">Related Services You Might Need</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/services/web-development" className="p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-colors bg-white/5 group">
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Web Development &rarr;</h3>
              <p className="text-sm text-muted-foreground mt-2">Custom web apps to complement your new ERP system.</p>
            </Link>
            <Link to="/services/ai-automation" className="p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-colors bg-white/5 group">
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">AI & Automation &rarr;</h3>
              <p className="text-sm text-muted-foreground mt-2">Enhance your CRM with intelligent AI chatbots and automation.</p>
            </Link>
            <Link to="/services/social-media" className="p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-colors bg-white/5 group">
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Digital Marketing &rarr;</h3>
              <p className="text-sm text-muted-foreground mt-2">Data-driven marketing powered by your new CRM insights.</p>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default ERPCRM;
