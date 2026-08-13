import Layout from "../components/Layout";
import ScrollReveal from "../components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowUpRight, Globe, Code, Search, Share2, Bot, Database, Palette, Zap } from "lucide-react";
import digitalMarketing from "../assets/digital-marketing.jpg";
import webDevelopment from "../assets/web-development.jpg";
import seoServices from "../assets/seo-services.jpg";
import socialMedia from "../assets/social-media.jpg";
import aiAutomation from "../assets/ai-automation.jpg";
import erpCrm from "../assets/erp-crm.jpg";
import SEO from "../components/SEO";

const services = [
  { icon: Globe, title: "Digital Marketing", description: "Data-driven campaigns across search, social, and programmatic channels. We optimize every dollar for maximum ROI.", path: "/services/digital-marketing", features: ["Google Ads Management", "Facebook & Meta Ads", "Content Marketing", "Email Campaigns"], img: digitalMarketing },
  { icon: Code, title: "Website Development", description: "High-performance web applications built with React, Next.js, and modern architectures designed for scale.", path: "/services/web-development", features: ["Custom Web Apps", "E-commerce Platforms", "Landing Pages", "Progressive Web Apps"], img: webDevelopment },
  { icon: Search, title: "SEO Optimization", description: "Technical SEO audits, content strategy, and link building that consistently improve organic rankings.", path: "/services/seo", features: ["Technical SEO Audits", "Content Strategy", "Link Building", "Local SEO"], img: seoServices },
  { icon: Share2, title: "Social Media Management", description: "Strategic content creation and community management that builds authentic brand authority.", path: "/services/social-media", features: ["Content Strategy", "Community Management", "Influencer Partnerships", "Analytics & Reporting"], img: socialMedia },
  { icon: Bot, title: "AI & Automation", description: "Intelligent chatbots, process automation, and AI integrations that dramatically reduce operational costs.", path: "/services/ai-automation", features: ["AI Chatbots", "Process Automation", "Lead Capture Bots", "Custom AI Solutions"], img: aiAutomation },
  { icon: Database, title: "ERP / CRM Solutions", description: "Enterprise software implementation and custom solutions that unify your operations.", path: "/services/erp-crm", features: ["CRM Implementation", "ERP Migration", "Custom Dashboards", "Data Integration"], img: erpCrm },
];

const Services = () => (
  <Layout>
    <SEO 
      title="Our IT Services | Custom Software & Web Development"
      description="Explore our comprehensive suite of IT services including custom software development, mobile apps, web development, ERP/CRM, and AI automation."
      keywords="software development services lucknow, custom web development, mobile app development company, enterprise software solutions, AI automation services"
    />
    <section className="pt-32 lg:pt-40 section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <span className="text-xs uppercase tracking-wider text-primary font-display font-medium">Our Services</span>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tighter">
            Full-spectrum digital <span className="text-gradient">engineering</span>
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl text-lg">
            Sudarshan Technologies is a full-service software development and IT company based in Lucknow. We offer a comprehensive suite of digital engineering services including custom web development, scalable ERP/CRM enterprise solutions, mobile applications, and AI-powered automation. Our integrated technology solutions are designed to scale businesses and drive measurable results.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.05}>
              <Link to={service.path} className="card-featured group flex flex-col h-full">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img src={service.img} alt={`${service.title} services by Sudarshan Technologies in Lucknow`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <ArrowUpRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <service.icon className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground">{service.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {service.features.map((f) => (
                      <span key={f} className="px-3 py-1 rounded-full text-xs border border-border text-muted-foreground bg-muted/50 font-medium">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
