import Layout from "../components/Layout";
import ScrollReveal from "../components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Rocket, Heart, Lightbulb, Shield, Handshake, ChevronDown } from "lucide-react";
import { useState } from "react";
import aboutTeam from "../assets/about-team.jpg";
import SEO from "../components/SEO";

const coreValues = [
  { icon: Heart, title: "Client First", desc: "Every decision we make is driven by what's best for our clients' growth and success." },
  { icon: Shield, title: "Transparency", desc: "Honest communication, clear reporting, and no hidden charges — ever." },
  { icon: Lightbulb, title: "Innovation", desc: "We constantly explore new technologies and strategies to deliver cutting-edge solutions." },
  { icon: Handshake, title: "Integrity", desc: "We do what we promise. No shortcuts, no fake metrics — only genuine results." },
];

const faqs = [
  { q: "What services does Sudarshan Technologies offer?", a: "We offer digital marketing, website development, SEO, social media management, AI & automation solutions, and ERP/CRM development for businesses of all sizes." },
  { q: "Do you work with startups and small businesses?", a: "Absolutely! We specialize in helping startups and growing businesses build their digital presence with affordable, high-quality solutions." },
  { q: "How long does a typical project take?", a: "Timelines vary by project scope. A standard website takes 2-4 weeks, while comprehensive digital marketing campaigns are ongoing with monthly reporting." },
  { q: "Do you offer free consultations?", a: "Yes! We offer a free initial consultation to understand your business goals and recommend the right strategy. Contact us to schedule yours." },
  { q: "Can you work with clients outside Lucknow?", a: "Of course. While we're based in Chinhat, Lucknow, we serve clients across Uttar Pradesh and all of India through seamless remote collaboration." },
  { q: "What makes you different from other agencies?", a: "We combine technical expertise with transparent communication and affordable pricing. We don't use fake data or empty promises — we focus on delivering measurable results." },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
      >
        <span className="font-display font-semibold text-sm text-foreground pr-4">{q}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
};

const About = () => (
  <Layout>
    <SEO 
      title="About Us | Best Software Company in Lucknow"
      description="Sudarshan Technologies is a top-tier software and web development company in Lucknow. We build custom applications, SaaS platforms, and enterprise solutions."
      keywords="about software company lucknow, top web development team, custom software developers india, enterprise software company, best IT company lucknow"
    />
    <section className="pt-32 lg:pt-40 section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <ScrollReveal>
            <span className="text-xs uppercase tracking-wider text-primary font-display font-medium">About Sudarshan Technologies</span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tighter">
              Lucknow's Trusted <span className="text-gradient">Technology Partner</span>
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
              Sudarshan Technologies is widely recognized as the best software development company in Lucknow. Founded and operating in Chinhat, we are a dedicated team of expert engineers, strategists, and designers. We specialize in delivering high-performance custom web applications, scalable enterprise software (ERP/CRM), and advanced AI automation solutions to clients across Uttar Pradesh and India. With a strong focus on engineering excellence, we deliver measurable business impact.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={aboutTeam} alt="Sudarshan Technologies team in Lucknow office" className="w-full h-auto object-cover" />
            </div>
          </ScrollReveal>
        </div>

        {/* Mission / Vision / Values cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "Mission", desc: "To deliver measurable digital transformation for businesses in Lucknow and across India through cutting-edge technology and data-driven strategy." },
            { icon: Eye, title: "Vision", desc: "To be India's most trusted digital agency, empowering every business with enterprise-grade web, marketing, and AI capabilities." },
            { icon: Rocket, title: "Values", desc: "Technical excellence, transparent communication, measurable ROI, and relentless innovation for every client we serve." },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="glass-card p-8 h-full">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-wider text-primary font-display font-medium">What We Stand For</span>
              <h2 className="mt-3 text-2xl lg:text-3xl font-display font-bold tracking-tighter">
                Our Core <span className="text-gradient">Values</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.08}>
                <div className="card-premium p-6 h-full text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-foreground">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-wider text-primary font-display font-medium">Got Questions?</span>
              <h2 className="mt-3 text-2xl lg:text-3xl font-display font-bold tracking-tighter">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <FAQItem q={faq.q} a={faq.a} />
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal>
          <div className="mt-20 text-center">
            <Link to="/contact" className="btn-primary">Work With Us <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default About;
