import Layout from "../components/Layout";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import ProcessSection from "../components/home/ProcessSection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import VisionMissionSection from "../components/home/VisionMissionSection";
import FAQSection from "../components/home/FAQSection";
import CTASection from "../components/home/CTASection";
import SEO from "../components/SEO";

const Index = () => (
  <Layout>
    <SEO 
      title="Top Website & Software Development Company in Lucknow"
      description="Sudarshan Technologies builds high-performance websites, enterprise software, mobile apps & cloud solutions. Leading IT company in Lucknow delivering scalable digital products."
      keywords="website development company lucknow, software development, custom web applications, mobile app development, SaaS solutions, ERP CRM development, IT company lucknow"
    />
    <HeroSection />
    <ServicesSection />
    <ProcessSection />
    <WhyChooseUsSection />
    <VisionMissionSection />
    <FAQSection />
    <CTASection />
  </Layout>
);

export default Index;
