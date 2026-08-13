import Layout from "../components/Layout";
import ScrollReveal from "../components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Smartphone, ShoppingCart, Gauge, Shield, Code2 } from "lucide-react";
import webDevImg from "../assets/web-development.jpg";
import SEO from "../components/SEO";
import { Helmet } from "react-helmet-async";

const techStack = ["React", "Next.js", "TypeScript", "Node.js", "Laravel", "WordPress", "Shopify", "Tailwind CSS"];

const offerings = [
  { icon: Code2, title: "Custom Web Applications", desc: "Bespoke applications built with React and Next.js, engineered for performance and scalability." },
  { icon: Layers, title: "Business Websites", desc: "Professional corporate websites that establish authority and drive conversions." },
  { icon: ShoppingCart, title: "E-commerce Platforms", desc: "High-converting online stores with seamless checkout and inventory management." },
  { icon: Smartphone, title: "Progressive Web Apps", desc: "App-like experiences in the browser with offline support and push notifications." },
  { icon: Gauge, title: "Performance Optimization", desc: "Speed audits and optimization achieving sub-2-second load times." },
  { icon: Shield, title: "SEO-Friendly Architecture", desc: "Server-side rendering and structured data for maximum search visibility." },
];

const timeline = [
  { phase: "Discovery", duration: "Week 1-2", tasks: "Requirements gathering, technical audit, architecture planning" },
  { phase: "Design", duration: "Week 3-4", tasks: "Wireframes, UI design, design system, prototyping" },
  { phase: "Development", duration: "Week 5-10", tasks: "Frontend & backend development, API integrations, testing" },
  { phase: "Launch", duration: "Week 11-12", tasks: "QA, performance optimization, deployment, training" },
];

const WebDevelopment = () => (
  <Layout>
    <SEO 
      title="Best Web Development Company in Lucknow | Custom Websites"
      description="Professional web development services in Lucknow focusing on high-performing websites, custom web applications, and scalable SaaS platforms."
      keywords="best web development company in lucknow, website development lucknow, custom web applications, SaaS platform development, web developer in lucknow, best website designer lucknow"
    />
    <section className="pt-32 lg:pt-40 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <Link to="/services" className="text-xs text-muted-foreground hover:text-primary transition-colors font-display uppercase tracking-wider">← Services</Link>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tighter">
              Website <span className="text-gradient">Development</span>
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl text-lg">
              Sudarshan Technologies is a top website development company in Lucknow, specializing in high-performance websites, custom web applications, and scalable SaaS platforms. We build fast, secure, and SEO-optimized digital solutions tailored for businesses across India. Our expert developers use modern architectures like React and Node.js to engineer web solutions that drive real business growth.
            </p>
            <Helmet>
              <script type="application/ld+json">
                {`
                  {
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Website Development",
                    "serviceType": "Web Development, Custom Web Applications",
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
              <img src={webDevImg} alt="Sudarshan Technologies custom web development and application coding workspace" className="w-full h-auto object-cover" />
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="mt-12 flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-lg border border-border text-sm text-muted-foreground font-display bg-card">
                {tech}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((o, i) => (
            <ScrollReveal key={o.title} delay={i * 0.05}>
              <div className="glass-card-hover p-6 h-full">
                <o.icon className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-display font-semibold text-foreground mb-2">{o.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-20">
          <ScrollReveal>
            <h2 className="text-2xl lg:text-3xl font-display font-bold tracking-tighter mb-8">
              Development <span className="text-gradient-secondary">Timeline</span>
            </h2>
          </ScrollReveal>
          <div className="space-y-4">
            {timeline.map((t, i) => (
              <ScrollReveal key={t.phase} delay={i * 0.1}>
                <div className="glass-card p-6 flex flex-col sm:flex-row gap-4 items-start">
                  <div className="sm:w-32 flex-shrink-0">
                    <span className="text-xs text-secondary uppercase tracking-wider font-display">{t.duration}</span>
                    <h3 className="font-display font-semibold text-foreground">{t.phase}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.tasks}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal>
          <div className="mt-20 text-center">
            <Link to="/contact" className="btn-primary">
              Start Your Project <ArrowRight className="w-4 h-4" />
            </Link>
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
            <Link to="/services/erp-crm" className="p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-colors bg-white/5 group">
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">ERP & CRM Solutions &rarr;</h3>
              <p className="text-sm text-muted-foreground mt-2">Manage your business operations effectively.</p>
            </Link>
            <Link to="/services/ai-automation" className="p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-colors bg-white/5 group">
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">AI & Automation &rarr;</h3>
              <p className="text-sm text-muted-foreground mt-2">Integrate smart workflows into your new web app.</p>
            </Link>
            <Link to="/services/social-media" className="p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-colors bg-white/5 group">
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Digital Marketing &rarr;</h3>
              <p className="text-sm text-muted-foreground mt-2">Drive targeted traffic to your brand new website.</p>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default WebDevelopment;
