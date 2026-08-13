import { Link } from "react-router-dom";
import { ArrowUpRight, Globe, Code, Search, Share2, Bot, Database, Palette, Zap } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import TiltCard from "../TiltCard";
import digitalMarketing from "../../assets/digital-marketing.jpg";
import webDevelopment from "../../assets/web-development.jpg";
import seoServices from "../../assets/seo-services.jpg";
import socialMedia from "../../assets/social-media.jpg";
import aiAutomation from "../../assets/ai-automation.jpg";
import erpCrm from "../../assets/erp-crm.jpg";

const services = [
  { icon: Globe, title: "Digital Marketing", description: "Data-driven campaigns that generate qualified leads and accelerate revenue growth.", path: "/services/digital-marketing", img: digitalMarketing },
  { icon: Code, title: "Website Development", description: "High-performance web applications built with modern architectures for scale.", path: "/services/web-development", img: webDevelopment },
  { icon: Search, title: "SEO Optimization", description: "Technical SEO and content strategies that dominate search rankings.", path: "/services/seo", img: seoServices },
  { icon: Share2, title: "Social Media", description: "Strategic social presence that builds brand authority and community.", path: "/services/social-media", img: socialMedia },
  { icon: Bot, title: "AI & Automation", description: "Intelligent chatbots and process automation that reduce costs by up to 74%.", path: "/services/ai-automation", img: aiAutomation },
  { icon: Database, title: "ERP / CRM Solutions", description: "Enterprise systems that unify operations and unlock data-driven decisions.", path: "/services/erp-crm", img: erpCrm },
];

const ServicesSection = () => (
  <section className="section-padding light-section">
    <div className="max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-display font-medium">
            Our Capabilities
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tighter">
            Full-spectrum digital
            <span className="text-gradient"> engineering</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            From strategy to execution, we deliver integrated solutions across every digital touchpoint.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <ScrollReveal key={service.title} delay={i * 0.05}>
            <div style={{ perspective: "1000px" }} className="h-full">
              <TiltCard className="h-full">
                <Link
                  to={service.path}
                  className="card-featured group flex flex-col h-full bg-card overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden transform-gpu">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <ArrowUpRight className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col transform-gpu">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                        <service.icon className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
                      </div>
                      <h3 className="font-display font-bold text-foreground text-lg">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-xs text-primary font-display font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore Service <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              </TiltCard>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
