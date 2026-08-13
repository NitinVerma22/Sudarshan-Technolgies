import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "Services",
    path: "/services",
    children: [
      { label: "Digital Marketing", path: "/services/digital-marketing" },
      { label: "Website Development", path: "/services/web-development" },
      { label: "SEO Services", path: "/services/seo" },
      { label: "Social Media", path: "/services/social-media" },
      { label: "AI & Automation", path: "/services/ai-automation" },
      { label: "ERP / CRM Solutions", path: "/services/erp-crm" },
    ],
  },
  { label: "About", path: "/about" },
  { label: "Careers", path: "/careers" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.6, bounce: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-card/90 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Sudarshan Technologies" className="h-14 w-14 drop-shadow-lg" />
              <span className="font-display font-bold text-xl text-foreground leading-tight">
                <span className="text-gradient bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent font-extrabold tracking-tight">Sudarshan</span>
                <span className="text-cyan-400/80 font-light block text-[10px] tracking-[0.3em] uppercase">Technologies</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`btn-ghost text-xs uppercase tracking-wider ${
                      location.pathname === item.path ? "text-foreground" : ""
                    }`}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="w-3 h-3 ml-1" />}
                  </Link>

                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2 w-56"
                      >
                        <div className="glass-card p-2 shadow-lg">
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <Link to="/contact" className="btn-primary text-xs">
                Start a Project
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-background/95 lg:hidden flex flex-col justify-between"
          >
            <motion.nav
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.6, bounce: 0 }}
              className="flex flex-col pt-28 px-8 gap-4 overflow-y-auto pb-24"
            >
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: i * 0.08, type: "spring", stiffness: 80, damping: 20 }}
                  className="border-b border-border/50 pb-4 last:border-0"
                >
                  <Link
                    to={item.path}
                    className="block text-2xl font-display font-bold text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-6 mt-4 space-y-3 border-l-2 border-primary/20">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block text-base text-muted-foreground hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.nav>
            
            {/* Bottom CTA & Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="px-8 pb-10 pt-4 bg-background/50 border-t border-border/50"
            >
              <Link to="/contact" className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-display font-bold text-sm bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-blue-950 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]">
                Start Your Project
              </Link>
              <p className="text-center text-xs text-muted-foreground mt-4">
                © {new Date().getFullYear()} Sudarshan Technologies
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
