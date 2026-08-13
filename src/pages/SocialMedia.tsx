import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Helmet } from "react-helmet-async";
import ScrollReveal from "../components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Instagram, Facebook, Linkedin, Twitter, TrendingUp, Users } from "lucide-react";
import socialImg from "../assets/social-media.jpg";

const platforms = [
  { icon: Instagram, name: "Instagram", desc: "Visual storytelling and reels strategy for brand awareness." },
  { icon: Facebook, name: "Facebook", desc: "Community building and targeted advertising at scale." },
  { icon: Linkedin, name: "LinkedIn", desc: "B2B thought leadership and lead generation campaigns." },
  { icon: Twitter, name: "X / Twitter", desc: "Real-time engagement and brand voice development." },
  { icon: TrendingUp, name: "TikTok", desc: "Short-form video content that reaches new demographics." },
  { icon: Users, name: "YouTube", desc: "Long-form video content strategy and channel growth." },
];

const SocialMedia = () => (
  <Layout>
    <SEO 
      title="Social Media Marketing Services in Lucknow"
      description="Grow your brand with expert social media management and marketing on platforms like Instagram, Facebook, LinkedIn, and YouTube."
      keywords="social media marketing lucknow, best SMM agency lucknow, instagram marketing services, facebook ads management, social media manager near me"
    />
    <section className="pt-32 lg:pt-40 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <Link to="/services" className="text-xs text-muted-foreground hover:text-primary transition-colors font-display uppercase tracking-wider">← Services</Link>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tighter">
              Social Media <span className="text-gradient">Management</span>
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl text-lg">
              Sudarshan Technologies is a premier digital marketing and social media management agency in Lucknow. We design strategic social media campaigns across platforms like Instagram, Facebook, and LinkedIn to build authentic brand authority and drive measurable lead generation. From visual storytelling to targeted advertising at scale, our data-driven approach ensures your business reaches the right demographics and achieves high ROI.
            </p>
            <Helmet>
              <script type="application/ld+json">
                {`
                  {
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Social Media Marketing",
                    "serviceType": "Digital Marketing",
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
              <img src={socialImg} alt="Sudarshan Technologies social media marketing and brand management analytics" className="w-full h-auto object-cover" />
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 0.05}>
              <div className="glass-card-hover p-6 h-full">
                <p.icon className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-display font-semibold text-foreground mb-2">{p.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-20 text-center">
            <Link to="/contact" className="btn-primary">Get Social Strategy <ArrowRight className="w-4 h-4" /></Link>
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
              <p className="text-sm text-muted-foreground mt-2">Drive your social traffic to a high-converting website.</p>
            </Link>
            <Link to="/services/erp-crm" className="p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-colors bg-white/5 group">
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">ERP & CRM Solutions &rarr;</h3>
              <p className="text-sm text-muted-foreground mt-2">Track leads seamlessly from social media into your CRM.</p>
            </Link>
            <Link to="/services/ai-automation" className="p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-colors bg-white/5 group">
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">AI & Automation &rarr;</h3>
              <p className="text-sm text-muted-foreground mt-2">Automate your social lead engagement with AI chatbots.</p>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default SocialMedia;
