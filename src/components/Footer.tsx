import { Link } from "react-router-dom";
import { ArrowUpRight, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import logo from "../assets/logo.png";

const footerLinks = {
  Services: [
    { label: "Digital Marketing", path: "/services/digital-marketing" },
    { label: "Website Development", path: "/services/web-development" },
    { label: "SEO Optimization", path: "/services/seo" },
    { label: "Social Media", path: "/services/social-media" },
    { label: "AI & Automation", path: "/services/ai-automation" },
    { label: "ERP / CRM", path: "/services/erp-crm" },
  ],
  Company: [
    { label: "About Us", path: "/about" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Case Studies", path: "/case-studies" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ],
};

const Footer = () => (
  <footer className="border-t border-border" style={{ background: "linear-gradient(135deg, hsl(200 82% 16%), hsl(200 70% 12%))" }}>
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Sudarshan Technologies - Best Digital Marketing Company in Lucknow" className="h-14 w-14 drop-shadow-lg" loading="lazy" width={512} height={512} />
            <span className="font-display font-bold text-xl leading-tight">
              <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent font-extrabold tracking-tight">Sudarshan</span>
              <span className="text-cyan-400/80 font-light block text-[10px] tracking-[0.3em] uppercase">Technologies</span>
            </span>
          </Link>
          <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-md">
            Lucknow's leading digital agency for web development, SEO, digital marketing, 
            AI automation, and ERP/CRM solutions. Serving businesses across Uttar Pradesh and India.
          </p>

          <div className="mt-5 space-y-3">
            <a href="https://wa.me/917376742022" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 text-sm hover:text-secondary transition-colors">
              <MessageCircle className="w-3.5 h-3.5" /> +91 73767 42022 (WhatsApp)
            </a>
            <a href="tel:+919305370277" className="flex items-center gap-2 text-white/60 text-sm hover:text-secondary transition-colors">
              <Phone className="w-3.5 h-3.5" /> +91 93053 70277
            </a>
            <a href="tel:+917376742022" className="flex items-center gap-2 text-white/60 text-sm hover:text-secondary transition-colors">
              <Phone className="w-3.5 h-3.5" /> +91 73767 42022
            </a>
            <a href="mailto:hello@sudarshantech.com" className="flex items-center gap-2 text-white/60 text-sm hover:text-secondary transition-colors">
              <Mail className="w-3.5 h-3.5" /> hello@sudarshantech.com
            </a>
            <a href="https://maps.app.goo.gl/MEzbKv3nMMHUV8w57" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 text-sm hover:text-secondary transition-colors">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" /> Tej Kumar Plaza, Hazratganj, Lucknow
            </a>
          </div>

          <div className="mt-6">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-display font-semibold text-sm bg-secondary text-secondary-foreground transition-all duration-300 hover:brightness-110 hover:shadow-[0_8px_30px_-5px_hsl(44_94%_54%_/_0.4)]">
              Get Free Consultation <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-secondary/70 mb-4">
              {title}
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Sudarshan Technologies, Lucknow. All rights reserved.
        </p>
        <div className="flex gap-4 items-center">
          <a href="https://www.linkedin.com/company/sudarshanttechnologies/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#0a66c2] transition-colors"><Linkedin className="w-4 h-4" /></a>
          <a href="https://www.facebook.com/share/1BmrPZpLYc/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#1877f2] transition-colors"><Facebook className="w-4 h-4" /></a>
          <a href="https://www.instagram.com/sudarshan.technologies" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#E1306C] transition-colors"><Instagram className="w-4 h-4" /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
