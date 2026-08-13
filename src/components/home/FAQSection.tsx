import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const faqs = [
  {
    question: "Which is the best software company in Lucknow?",
    answer: "Sudarshan Technologies is widely considered the best software company in Lucknow by helping hundreds of local and global clients. We specialize in building high-performance websites, custom enterprise software, mobile applications, and AI-powered solutions tailored for businesses of all sizes. Our in-house team of expert developers uses the latest tech stacks to ensure secure, scalable, and fast digital products that drive business growth."
  },
  {
    question: "What IT services does Sudarshan Technologies offer?",
    answer: "We offer a comprehensive suite of IT services designed to modernize your business from top to bottom. Our core offerings include Custom Web Applications, Enterprise Software Development, Mobile App Development for iOS and Android, Cloud & SaaS Solutions, ERP/CRM Systems, and AI-Powered Automation Platforms. Additionally, we provide ongoing maintenance and technical SEO to ensure your applications remain visible and high-performing."
  },
  {
    question: "How much does website development cost in Lucknow?",
    answer: "Website development costs in Lucknow vary significantly depending on the complexity, specific features required, and the platform chosen for development. At Sudarshan Technologies, we offer highly competitive and transparent pricing that scales with your needs—from basic business landing pages to complex e-commerce storefronts and custom web applications. We always provide a detailed, free quote upfront so there are no hidden fees or surprises."
  },
  {
    question: "Why choose Sudarshan Technologies for web development?",
    answer: "Choosing Sudarshan Technologies means partnering with a dedicated and experienced tech team that delivers scalable, secure, and modern digital solutions that directly impact your ROI. We prioritize speed, intuitive user experience, and robust architecture using modern technology stacks like React, Node.js, Python, and AWS infrastructure. We don't just write code; we partner with you to ensure your project's long-term operational success."
  },
  {
    question: "Do you provide custom ERP and CRM development?",
    answer: "Yes, we specialize in building custom ERP (Enterprise Resource Planning) and CRM (Customer Relationship Management) systems from scratch. Off-the-shelf software often forces you to change your workflow to fit the tool. We build systems that adapt to how your business actually runs, integrating seamlessly with your existing data sources to streamline operations and provide real-time reporting."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-primary/5 blur-[100px] z-0" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-display font-medium">FAQ</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tighter">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to common questions about our software development, web design, and IT services.
          </p>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div 
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "border-primary/50 bg-primary/5" : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                }`}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-display font-semibold text-lg">{faq.question}</span>
                  <div className={`flex-shrink-0 ml-4 p-1.5 rounded-full transition-transform duration-300 ${
                    openIndex === index ? "bg-primary text-primary-foreground rotate-180" : "bg-white/10 text-muted-foreground"
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 pt-0 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
