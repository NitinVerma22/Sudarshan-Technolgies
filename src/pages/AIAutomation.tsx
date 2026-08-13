import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Helmet } from "react-helmet-async";
import ScrollReveal from "../components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Cpu, MessageSquare, Workflow, Cog, BrainCircuit } from "lucide-react";
import aiImg from "../assets/ai-automation.jpg";

const aiServices = [
  { icon: MessageSquare, title: "AI Chatbots", desc: "Intelligent conversational agents that handle customer support, lead qualification, and appointment booking 24/7." },
  { icon: Workflow, title: "Process Automation", desc: "Automate repetitive workflows — from data entry to report generation — reducing manual work by up to 74%." },
  { icon: Bot, title: "Lead Capture Bots", desc: "Smart bots that qualify leads, collect information, and integrate with your CRM automatically." },
  { icon: BrainCircuit, title: "Custom AI Solutions", desc: "Bespoke machine learning models trained on your data for predictive analytics and decision support." },
  { icon: Cog, title: "API Integrations", desc: "Connect AI capabilities to your existing tools — CRM, ERP, marketing platforms, and more." },
  { icon: Cpu, title: "Intelligent Automation", desc: "End-to-end business process automation with AI decision-making at critical junctures." },
];

const efficiencyGains = [
  { metric: "-74%", label: "Manual Data Entry" },
  { metric: "24/7", label: "Customer Support" },
  { metric: "3x", label: "Lead Response Speed" },
  { metric: "+45%", label: "Operational Efficiency" },
];

const AIAutomation = () => (
  <Layout>
    <SEO 
      title="AI & Automation Solutions in Lucknow"
      description="Streamline your operations with our AI chatbots, process automation, and bespoke machine learning solutions. Top AI development company in Lucknow."
      keywords="AI automation solutions lucknow, AI chatbots lucknow, business process automation, machine learning development, custom AI solutions lucknow"
    />
    <section className="pt-32 lg:pt-40 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <Link to="/services" className="text-xs text-muted-foreground hover:text-primary transition-colors font-display uppercase tracking-wider">← Services</Link>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tighter">
              AI & <span className="text-gradient">Automation</span>
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl text-lg">
              Sudarshan Technologies is a top AI automation and software company in Lucknow. We build custom artificial intelligence solutions, machine learning models, and smart chatbots that automate repetitive workflows, qualify leads 24/7, and reduce manual data entry by up to 74%. By integrating intelligent automation into your existing IT infrastructure, our solutions unlock unprecedented efficiency and scale for your business.
            </p>
            <Helmet>
              <script type="application/ld+json">
                {`
                  {
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "AI & Automation Solutions",
                    "serviceType": "Artificial Intelligence Development",
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
              <img src={aiImg} alt="Sudarshan Technologies AI chatbots and business automation dashboard" className="w-full h-auto object-cover" />
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {efficiencyGains.map((e, i) => (
            <ScrollReveal key={e.label} delay={i * 0.1}>
              <div className="glass-card p-6 text-center">
                <span className="text-3xl font-display font-bold text-gradient-secondary tabular-nums">{e.metric}</span>
                <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">{e.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiServices.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.05}>
              <div className="glass-card-hover p-6 h-full">
                <s.icon className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-display font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-20">
          <ScrollReveal>
            <h2 className="text-2xl lg:text-3xl font-display font-bold tracking-tighter mb-8">
              How automation <span className="text-gradient-secondary">transforms</span> your business
            </h2>
          </ScrollReveal>
          <div className="glass-card p-8 space-y-6">
            {["Identify repetitive tasks consuming team bandwidth", "Design intelligent workflows with AI decision points", "Integrate with your existing systems (CRM, ERP, email)", "Deploy, monitor, and continuously optimize performance"].map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex gap-4 items-start">
                  <span className="text-lg font-display font-bold text-secondary/40">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-muted-foreground leading-relaxed">{step}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal>
          <div className="mt-20 text-center">
            <Link to="/contact" className="btn-primary">Explore AI Solutions <ArrowRight className="w-4 h-4" /></Link>
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
              <p className="text-sm text-muted-foreground mt-2">Integrate your AI agents into a high-performance web app.</p>
            </Link>
            <Link to="/services/erp-crm" className="p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-colors bg-white/5 group">
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">ERP & CRM Solutions &rarr;</h3>
              <p className="text-sm text-muted-foreground mt-2">Connect AI capabilities directly to your enterprise software.</p>
            </Link>
            <Link to="/services/social-media" className="p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-colors bg-white/5 group">
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Digital Marketing &rarr;</h3>
              <p className="text-sm text-muted-foreground mt-2">Automate lead generation across social media channels.</p>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default AIAutomation;
