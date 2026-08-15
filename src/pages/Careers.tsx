import { useState } from "react";
import Layout from "../components/Layout";
import ScrollReveal from "../components/ScrollReveal";
import SEO from "../components/SEO";
import { 
  internshipRoles, 
  careerPerks, 
  hiringSteps, 
  internFaqs, 
  InternshipRole 
} from "../data/careersData";
import { 
  Search, 
  MapPin, 
  Clock, 
  Award, 
  Briefcase, 
  ChevronRight, 
  Sparkles, 
  Send, 
  X, 
  CheckCircle2, 
  ChevronDown, 
  Rocket, 
  GraduationCap, 
  DollarSign, 
  Users, 
  Loader2, 
  Check, 
  ArrowRight,
  MessageCircle,
  Mail,
  Filter
} from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const perkIcons: Record<string, any> = {
  Rocket,
  GraduationCap,
  Award,
  Briefcase,
  DollarSign,
  Users
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
      >
        <span className="font-display font-semibold text-sm sm:text-base text-foreground pr-4">
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`} 
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="px-5 pb-5 pt-1 border-t border-border/50"
          >
            <p className="text-sm text-muted-foreground leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Careers = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalRole, setActiveModalRole] = useState<InternshipRole | null>(null);
  const [expandedRoleId, setExpandedRoleId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Application Form State
  const [applicationForm, setApplicationForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    roleId: "",
    roleTitle: "",
    degree: "",
    gradYear: "",
    portfolioUrl: "",
    coverLetter: "",
  });

  const categories = ["All", "Development", "Design & Content", "Data & Business", "QA & AI"];

  const filteredRoles = internshipRoles.filter((role) => {
    const matchesCategory = selectedCategory === "All" || role.category === selectedCategory;
    const matchesSearch = 
      role.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleOpenModal = (role: InternshipRole) => {
    setActiveModalRole(role);
    setApplicationForm(prev => ({
      ...prev,
      roleId: role.id,
      roleTitle: role.title
    }));
  };

  const handleCloseModal = () => {
    setActiveModalRole(null);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailData = {
      name: applicationForm.fullName,
      email: applicationForm.email,
      company: `Degree: ${applicationForm.degree} (Grad: ${applicationForm.gradYear})`,
      service: `Career: ${applicationForm.roleTitle}`,
      message: `
Candidate Name: ${applicationForm.fullName}
Email: ${applicationForm.email}
Phone: ${applicationForm.phone}
Target Role: ${applicationForm.roleTitle}
Degree/Branch: ${applicationForm.degree}
Graduation Year: ${applicationForm.gradYear}
Resume/Portfolio/GitHub: ${applicationForm.portfolioUrl}

Cover Letter / Candidate Message:
${applicationForm.coverLetter || "No note provided."}
      `.trim()
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_id",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_id",
        emailData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "public_key"
      );

      toast.success("Application Submitted Successfully!", {
        description: `Thank you ${applicationForm.fullName}. Our recruitment team will review your application for ${applicationForm.roleTitle} and get back to you within 48 hours.`
      });

      setApplicationForm({
        fullName: "",
        email: "",
        phone: "",
        roleId: "",
        roleTitle: "",
        degree: "",
        gradYear: "",
        portfolioUrl: "",
        coverLetter: "",
      });
      setActiveModalRole(null);
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      const errorMsg = error?.text || error?.message || "Unknown error";
      toast.error("Failed to submit application", {
        description: `Error details: ${errorMsg}. Please try again or apply directly via WhatsApp/Email.`
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO 
        title="Careers & Internships | Join Sudarshan Technologies"
        description="Kickstart your career at Sudarshan Technologies Lucknow. Explore hands-on internships in Web Development, Graphic Design, Data Analysis, App Development, QA Testing, Business Analysis, Content Writing, and Prompt Engineering."
        keywords="internship lucknow, web development internship, prompt engineering internship, data analyst internship, qa testing internship, app development internship, graphic design internship, business analyst internship, IT internships lucknow, Sudarshan Technologies careers"
      />

      {/* Hero Section */}
      <section className="pt-32 lg:pt-40 pb-16 section-padding relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-xs uppercase tracking-wider text-primary font-display font-semibold">
                Internship Program 2026 • Live Opportunities
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground max-w-4xl mx-auto leading-[1.15]">
              Launch Your Career with <br />
              <span className="text-gradient">Real-World Innovation</span>
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Join Sudarshan Technologies' flagship Internship Program. Gain hands-on experience, direct mentorship from industry leaders, competitive stipends, and Pre-Placement Offer (PPO) opportunities across 9+ key technology and creative domains.
            </p>
          </ScrollReveal>

          {/* Quick Stats Banner */}
          <ScrollReveal delay={0.15}>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { number: "9+", label: "Active Internship Domains" },
                { number: "100%", label: "Live Client Projects" },
                { number: "85%+", label: "PPO Conversion Rate" },
                { number: "1-on-1", label: "Dedicated Mentorship" },
              ].map((stat, idx) => (
                <div key={idx} className="glass-card p-5 text-center">
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-primary">{stat.number}</div>
                  <div className="text-xs text-muted-foreground font-medium mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filterable Internships Directory Section */}
      <section id="roles" className="py-16 section-padding light-section relative">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-primary font-display font-medium">Explore Roles</span>
                <h2 className="mt-2 text-3xl sm:text-4xl font-display font-bold tracking-tight">
                  Open <span className="text-gradient">Internship Opportunities</span>
                </h2>
                <p className="text-sm text-muted-foreground mt-2">
                  Select a domain or search to find your ideal role and apply directly.
                </p>
              </div>

              {/* Search input */}
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search roles or skills (e.g. React, QA, Python)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")} 
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* Category Tabs */}
          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-display font-medium uppercase tracking-wider mr-2 shrink-0">
                <Filter className="w-3.5 h-3.5" /> Category:
              </span>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs font-display font-semibold transition-all shrink-0 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105"
                      : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Roles Grid */}
          {filteredRoles.length === 0 ? (
            <div className="glass-card p-12 text-center my-8">
              <Search className="w-10 h-10 text-muted-foreground/50 mx-auto mb-3" />
              <h3 className="text-lg font-display font-bold text-foreground">No Internships Found</h3>
              <p className="text-sm text-muted-foreground mt-1 max-w-md mx-auto">
                No active roles matched your query "{searchQuery}". Try clearing filters or send your resume directly to careers@sudarshantech.com.
              </p>
              <button 
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }} 
                className="btn-outline text-xs mt-4"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRoles.map((role, index) => {
                const IconComponent = role.icon;
                const isExpanded = expandedRoleId === role.id;

                return (
                  <ScrollReveal key={role.id} delay={index * 0.05}>
                    <div className={`h-full flex flex-col justify-between ${
                      role.featured ? "card-featured border-amber-400/40" : "card-premium"
                    } p-6 relative group`}>
                      
                      {role.featured && (
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-amber-400 text-blue-950 font-display font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                          <Sparkles className="w-3 h-3" /> Popular
                        </div>
                      )}

                      <div>
                        {/* Header */}
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <span className="text-[11px] font-display uppercase tracking-wider text-primary font-bold block">
                              {role.department}
                            </span>
                            <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors leading-snug">
                              {role.title}
                            </h3>
                          </div>
                        </div>

                        {/* Meta Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-muted text-muted-foreground font-medium">
                            <MapPin className="w-3 h-3 text-primary" /> {role.location}
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-muted text-muted-foreground font-medium">
                            <Clock className="w-3 h-3 text-primary" /> {role.duration}
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-700 dark:text-amber-300 font-semibold">
                            <Award className="w-3 h-3" /> {role.openings} Openings
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                          {role.description}
                        </p>

                        {/* Skills Required */}
                        <div className="mb-4">
                          <span className="text-[11px] font-display uppercase tracking-wider text-muted-foreground font-medium block mb-2">
                            Key Skills:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {role.skills.map((skill) => (
                              <span key={skill} className="text-[11px] px-2 py-0.5 rounded-md bg-primary/5 text-primary border border-primary/10 font-medium">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Collapsible Details */}
                        {isExpanded && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pt-3 mb-4 border-t border-border/60 text-xs space-y-2"
                          >
                            <span className="font-display font-semibold text-foreground block">Key Responsibilities:</span>
                            <ul className="space-y-1.5 text-muted-foreground pl-1">
                              {role.responsibilities.map((resp, i) => (
                                <li key={i} className="flex items-start gap-1.5">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </div>

                      {/* Footer Actions */}
                      <div className="pt-4 border-t border-border/40 flex flex-col sm:flex-row items-center gap-3">
                        <button
                          onClick={() => setExpandedRoleId(isExpanded ? null : role.id)}
                          className="text-xs text-primary font-display font-semibold hover:underline flex items-center gap-1 py-1"
                        >
                          {isExpanded ? "Hide Details" : "View Responsibilities"} 
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                        </button>
                        
                        <button
                          onClick={() => handleOpenModal(role)}
                          className="btn-primary w-full sm:w-auto ml-auto text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm"
                        >
                          Apply Now <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Why Intern With Us / Benefits Section */}
      <section className="py-20 section-padding relative">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-wider text-primary font-display font-medium">Internship Benefits</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold tracking-tight">
                Why Build Your Future at <span className="text-gradient">Sudarshan Technologies</span>?
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed text-base">
                We treat our interns like full-fledged engineers and creators. You won't be making coffee — you will be designing features, writing production code, and delivering business value.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerPerks.map((perk, index) => {
              const IconComponent = perkIcons[perk.icon] || Rocket;
              return (
                <ScrollReveal key={perk.title} delay={index * 0.08}>
                  <div className="glass-card-hover p-8 h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 text-primary">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-2">{perk.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{perk.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4-Step Hiring Process Roadmap */}
      <section className="py-20 section-padding light-section relative">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-wider text-primary font-display font-medium">Simple Roadmap</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold tracking-tight">
                Our 4-Step <span className="text-gradient">Selection Process</span>
              </h2>
              <p className="mt-3 text-muted-foreground text-sm">
                Transparent, quick, and hassle-free onboarding within 3-5 days.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {hiringSteps.map((item, idx) => (
              <ScrollReveal key={item.step} delay={idx * 0.1}>
                <div className="glass-card p-6 h-full relative overflow-hidden group hover:border-primary/40 transition-colors">
                  <div className="text-4xl font-display font-extrabold text-primary/20 group-hover:text-primary/30 transition-colors mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Intern FAQs Section */}
      <section className="py-20 section-padding relative">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-wider text-primary font-display font-medium">Clear Doubts</span>
              <h2 className="mt-3 text-3xl font-display font-bold tracking-tight">
                Internship <span className="text-gradient">FAQs</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {internFaqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <FAQItem question={faq.question} answer={faq.answer} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Contact / Application CTA */}
      <section className="py-16 section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="glass-card p-8 sm:p-12 text-center bg-gradient-to-r from-primary/10 via-card to-amber-500/10 border-primary/20 relative overflow-hidden rounded-3xl">
              <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-foreground">
                Don't See Your <span className="text-gradient">Exact Role</span>?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                We are always excited to welcome passionate learners! Send your Resume/Portfolio directly to our HR & Engineering leads or chat with us on WhatsApp.
              </p>
              
              <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
                <a 
                  href="mailto:careers@sudarshantech.com?subject=Direct%20Internship%20Application%20-%20Sudarshan%20Technologies" 
                  className="btn-primary text-xs py-3 px-6 rounded-xl flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" /> Email Resume (careers@sudarshantech.com)
                </a>
                <a 
                  href="https://wa.me/917376742022?text=Hello%20Sudarshan%20Technologies!%20I%20want%20to%20apply%20for%20an%20internship." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-secondary text-xs py-3 px-6 rounded-xl flex items-center gap-2 text-blue-950 font-bold"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us (+91 73767 42022)
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Interactive Internship Application Modal */}
      <AnimatePresence>
        {activeModalRole && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-background/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-border bg-muted/40 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-display uppercase tracking-wider text-primary font-bold">
                    Internship Application
                  </span>
                  <h3 className="text-xl font-display font-bold text-foreground">
                    Apply for {activeModalRole.title}
                  </h3>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Form Body */}
              <form onSubmit={handleFormSubmit} className="p-6 overflow-y-auto space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-display uppercase tracking-wider text-muted-foreground mb-1.5 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={applicationForm.fullName}
                      onChange={(e) => setApplicationForm({ ...applicationForm, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-muted/50 border border-border text-sm text-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-display uppercase tracking-wider text-muted-foreground mb-1.5 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@example.com"
                      value={applicationForm.email}
                      onChange={(e) => setApplicationForm({ ...applicationForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-muted/50 border border-border text-sm text-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-display uppercase tracking-wider text-muted-foreground mb-1.5 block">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={applicationForm.phone}
                      onChange={(e) => setApplicationForm({ ...applicationForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-muted/50 border border-border text-sm text-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-display uppercase tracking-wider text-muted-foreground mb-1.5 block">
                      Target Role
                    </label>
                    <select
                      value={applicationForm.roleId}
                      onChange={(e) => {
                        const roleObj = internshipRoles.find(r => r.id === e.target.value);
                        setApplicationForm({ 
                          ...applicationForm, 
                          roleId: e.target.value,
                          roleTitle: roleObj ? roleObj.title : activeModalRole.title 
                        });
                      }}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-muted/50 border border-border text-sm text-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
                    >
                      {internshipRoles.map((r) => (
                        <option key={r.id} value={r.id}>
                          {r.title} ({r.location})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-display uppercase tracking-wider text-muted-foreground mb-1.5 block">
                      Current Degree / Branch *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. BCA / B.Tech CSE / BBA"
                      value={applicationForm.degree}
                      onChange={(e) => setApplicationForm({ ...applicationForm, degree: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-muted/50 border border-border text-sm text-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-display uppercase tracking-wider text-muted-foreground mb-1.5 block">
                      Graduation Year *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 2025 / 2026"
                      value={applicationForm.gradYear}
                      onChange={(e) => setApplicationForm({ ...applicationForm, gradYear: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-muted/50 border border-border text-sm text-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-display uppercase tracking-wider text-muted-foreground mb-1.5 block">
                    Resume / Portfolio / GitHub Link *
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://drive.google.com/... or github.com/username or linkedin.com/in/..."
                    value={applicationForm.portfolioUrl}
                    onChange={(e) => setApplicationForm({ ...applicationForm, portfolioUrl: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-muted/50 border border-border text-sm text-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-display uppercase tracking-wider text-muted-foreground mb-1.5 block">
                    Why do you want to join Sudarshan Technologies? (Short Note)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly tell us about your skills, motivation, or key projects..."
                    value={applicationForm.coverLetter}
                    onChange={(e) => setApplicationForm({ ...applicationForm, coverLetter: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-muted/50 border border-border text-sm text-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                  />
                </div>

                {/* Form Footer */}
                <div className="pt-4 flex items-center justify-end gap-3 border-t border-border">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="btn-outline text-xs py-2.5 px-4 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary text-xs py-2.5 px-6 rounded-xl flex items-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>Submitting <Loader2 className="w-4 h-4 animate-spin" /></>
                    ) : (
                      <>Submit Application <Send className="w-4 h-4" /></>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Careers;
