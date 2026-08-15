import { Suspense, lazy } from "react";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import ScrollProgress from "./components/ScrollProgress";

// Lazy loading all pages
const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const DigitalMarketing = lazy(() => import("./pages/DigitalMarketing"));
const WebDevelopment = lazy(() => import("./pages/WebDevelopment"));
const SEOServices = lazy(() => import("./pages/SEOServices"));
const SocialMedia = lazy(() => import("./pages/SocialMedia"));
const AIAutomation = lazy(() => import("./pages/AIAutomation"));
const ERPCRM = lazy(() => import("./pages/ERPCRM"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Contact = lazy(() => import("./pages/Contact"));
const Careers = lazy(() => import("./pages/Careers"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Loading Fallback
const PageLoader = () => (
  <div className="min-h-[80vh] flex items-center justify-center bg-transparent">
    <div className="w-8 h-8 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Premium UI Elements */}
      <ScrollProgress />
      
      {/* Persistent Layout Elements */}
      <Navbar />
      
      {/* Animating Main Content */}
      <main className="flex-1 w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Suspense fallback={<PageLoader />}><Index /></Suspense>} />
            <Route path="/services" element={<Suspense fallback={<PageLoader />}><Services /></Suspense>} />
            <Route path="/services/digital-marketing" element={<Suspense fallback={<PageLoader />}><DigitalMarketing /></Suspense>} />
            <Route path="/services/web-development" element={<Suspense fallback={<PageLoader />}><WebDevelopment /></Suspense>} />
            <Route path="/services/seo" element={<Suspense fallback={<PageLoader />}><SEOServices /></Suspense>} />
            <Route path="/services/social-media" element={<Suspense fallback={<PageLoader />}><SocialMedia /></Suspense>} />
            <Route path="/services/ai-automation" element={<Suspense fallback={<PageLoader />}><AIAutomation /></Suspense>} />
            <Route path="/services/erp-crm" element={<Suspense fallback={<PageLoader />}><ERPCRM /></Suspense>} />
            <Route path="/about" element={<Suspense fallback={<PageLoader />}><About /></Suspense>} />
            <Route path="/blog" element={<Suspense fallback={<PageLoader />}><Blog /></Suspense>} />
            <Route path="/blog/:slug" element={<Suspense fallback={<PageLoader />}><BlogPost /></Suspense>} />
            <Route path="/contact" element={<Suspense fallback={<PageLoader />}><Contact /></Suspense>} />
            <Route path="/careers" element={<Suspense fallback={<PageLoader />}><Careers /></Suspense>} />
            <Route path="*" element={<Suspense fallback={<PageLoader />}><NotFound /></Suspense>} />
          </Routes>
        </AnimatePresence>
      </main>
      
      <Footer />
      <ChatWidget />
    </div>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
