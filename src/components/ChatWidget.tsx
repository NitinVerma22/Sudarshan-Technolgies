import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, X, Bot, Send, CheckCircle2 } from "lucide-react";
import emailjs from '@emailjs/browser';

type Message = {
  id: string;
  type: 'bot' | 'user';
  text: string;
};

type ChatStep = 
  | 'LANG_SELECT'
  | 'INIT' 
  | 'FAQ_SERVICES' 
  | 'FAQ_LOCATION'
  | 'LEAD_NAME' 
  | 'LEAD_EMAIL' 
  | 'LEAD_COMPANY' 
  | 'LEAD_SERVICE' 
  | 'LEAD_MESSAGE' 
  | 'LEAD_CONFIRM' 
  | 'END';

type Language = 'en' | 'hi';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', type: 'bot', text: 'Select your language / अपनी भाषा चुनें' }
  ]);
  const [step, setStep] = useState<ChatStep>('LANG_SELECT');
  const [leadData, setLeadData] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [inputValue, setInputValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, step]);

  const addMessage = (text: string, type: 'bot' | 'user') => {
    setMessages(prev => [...prev, { id: Date.now().toString(), type, text }]);
  };

  const handleOptionClick = (optionText: string, nextAction: () => void) => {
    addMessage(optionText, 'user');
    setTimeout(nextAction, 500);
  };

  const t = (en: string, hi: string) => language === 'en' ? en : hi;

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    addMessage(inputValue, 'user');
    const val = inputValue.trim();
    setInputValue('');

    setTimeout(() => {
      switch (step) {
        case 'LEAD_NAME':
          setLeadData(prev => ({ ...prev, name: val }));
          addMessage(t(`Nice to meet you, ${val}! What is your email address?`, `आपसे मिलकर अच्छा लगा, ${val}! आपका ईमेल पता क्या है?`), 'bot');
          setStep('LEAD_EMAIL');
          break;
        case 'LEAD_EMAIL':
          setLeadData(prev => ({ ...prev, email: val }));
          addMessage(t('Great. And what is your company name?', 'बढ़िया। और आपकी कंपनी का नाम क्या है?'), 'bot');
          setStep('LEAD_COMPANY');
          break;
        case 'LEAD_COMPANY':
          setLeadData(prev => ({ ...prev, company: val }));
          addMessage(t('Which service are you interested in?', 'आप किस सेवा में रुचि रखते हैं?'), 'bot');
          setStep('LEAD_SERVICE');
          break;
        case 'LEAD_MESSAGE':
          setLeadData(prev => ({ ...prev, message: val }));
          addMessage(t('Thank you! Please confirm to send your details to our team.', 'धन्यवाद! कृपया हमारी टीम को अपना विवरण भेजने के लिए पुष्टि करें।'), 'bot');
          setStep('LEAD_CONFIRM');
          break;
      }
    }, 600);
  };

  const sendData = async () => {
    setIsSubmitting(true);
    addMessage(t("Sending data...", "डेटा भेजा जा रहा है..."), 'user');
    
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_id",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_id",
        leadData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "public_key"
      );
      
      setTimeout(() => {
        addMessage(t("I have saved your data! Our team will contact you shortly.", "मैंने आपका डेटा सेव कर लिया है! हमारी टीम जल्द ही आपसे संपर्क करेगी।"), 'bot');
        setStep('END');
        setIsSubmitting(false);
      }, 500);
      
    } catch (error) {
      console.error(error);
      setTimeout(() => {
        addMessage(t("Sorry, there was an error sending your data. Please try again later or call us directly.", "क्षमा करें, आपका डेटा भेजने में कोई त्रुटि हुई। कृपया बाद में पुनः प्रयास करें या हमें सीधे कॉल करें।"), 'bot');
        setStep('END');
        setIsSubmitting(false);
      }, 500);
    }
  };

  const resetChat = () => {
    setMessages([{ id: '1', type: 'bot', text: 'Select your language / अपनी भाषा चुनें' }]);
    setStep('LANG_SELECT');
    setLeadData({ name: '', email: '', company: '', service: '', message: '' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isChatOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[350px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-8rem)] bg-card border border-border shadow-2xl rounded-2xl flex flex-col overflow-hidden ring-1 ring-primary/10"
          >
            {/* Header */}
            <div className="bg-primary p-4 flex items-center justify-between text-primary-foreground">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm">Sudarshan Assistant</h3>
                  <p className="text-xs text-primary-foreground/80 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="text-primary-foreground/80 hover:text-white transition-colors p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${msg.type === 'user' ? 'bg-primary text-primary-foreground rounded-tr-sm' : 'bg-white border border-border text-foreground shadow-sm rounded-tl-sm'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {/* Dynamic Options based on Step */}
              {step === 'LANG_SELECT' && (
                <div className="flex gap-2 mt-4 items-start pl-2">
                  <button onClick={() => handleOptionClick("English", () => {
                    setLanguage('en');
                    addMessage("Hi there! 👋 How can we help you today?", 'bot');
                    setStep('INIT');
                  })} className="text-sm bg-background border border-primary/20 text-primary hover:bg-primary/5 px-4 py-2 rounded-xl transition-colors">
                    English
                  </button>
                  <button onClick={() => handleOptionClick("हिंदी", () => {
                    setLanguage('hi');
                    addMessage("नमस्ते! 👋 आज हम आपकी कैसे मदद कर सकते हैं?", 'bot');
                    setStep('INIT');
                  })} className="text-sm bg-background border border-primary/20 text-primary hover:bg-primary/5 px-4 py-2 rounded-xl transition-colors">
                    हिंदी (Hindi)
                  </button>
                </div>
              )}

              {step === 'INIT' && (
                <div className="flex flex-col gap-2 mt-4 items-start pl-2">
                  <button onClick={() => handleOptionClick(t("I want to connect with the team", "मैं टीम से संपर्क करना चाहता हूँ"), () => {
                    addMessage(t("Excellent! Could I get your name first?", "बहुत बढ़िया! क्या मैं पहले आपका नाम जान सकता हूँ?"), 'bot');
                    setStep('LEAD_NAME');
                  })} className="text-left text-sm bg-background border border-primary/20 text-primary hover:bg-primary/5 px-4 py-2 rounded-xl transition-colors">
                    {t("Connect with the team", "टीम से संपर्क करें")}
                  </button>
                  <button onClick={() => handleOptionClick(t("What services do you offer?", "आप कौन सी सेवाएँ देते हैं?"), () => {
                    addMessage(t("We specialize in Custom Web Development, ERP/CRM Systems, App Development, AI & Automation, and Digital Marketing.", "हम कस्टम वेब डेवलपमेंट, ERP/CRM सिस्टम, ऐप डेवलपमेंट, AI और ऑटोमेशन, और डिजिटल मार्केटिंग में विशेषज्ञ हैं।"), 'bot');
                    setTimeout(() => addMessage(t("Would you like to connect with our team to discuss your project?", "क्या आप अपने प्रोजेक्ट के बारे में चर्चा करने के लिए हमारी टीम से जुड़ना चाहेंगे?"), 'bot'), 600);
                    setStep('FAQ_SERVICES');
                  })} className="text-left text-sm bg-background border border-border text-muted-foreground hover:bg-muted/50 px-4 py-2 rounded-xl transition-colors">
                    {t("What services do you offer?", "आप कौन सी सेवाएँ देते हैं?")}
                  </button>
                  <button onClick={() => handleOptionClick(t("Where are you located?", "आपका ऑफिस कहाँ है?"), () => {
                    addMessage(t("Our office is located at Tej Kumar Plaza, Sushanpura, Hazratganj, Lucknow, UP 226001.", "हमारा ऑफिस तेज कुमार प्लाजा, सुशानपुरा, हजरतगंज, लखनऊ, यूपी 226001 में स्थित है।"), 'bot');
                    setStep('INIT');
                  })} className="text-left text-sm bg-background border border-border text-muted-foreground hover:bg-muted/50 px-4 py-2 rounded-xl transition-colors">
                    {t("Where are you located?", "आपका ऑफिस कहाँ है?")}
                  </button>
                </div>
              )}

              {step === 'FAQ_SERVICES' && (
                <div className="flex gap-2 mt-4 items-start pl-2">
                  <button onClick={() => handleOptionClick(t("Yes, let's connect", "हाँ, संपर्क करें"), () => {
                    addMessage(t("Great! What is your name?", "बहुत अच्छे! आपका नाम क्या है?"), 'bot');
                    setStep('LEAD_NAME');
                  })} className="text-sm bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 rounded-xl transition-colors">
                    {t("Yes, let's connect", "हाँ, संपर्क करें")}
                  </button>
                  <button onClick={() => handleOptionClick(t("No, thanks", "नहीं, धन्यवाद"), () => {
                    addMessage(t("No problem! Let me know if you need anything else.", "कोई बात नहीं! अगर आपको कुछ और चाहिए तो मुझे बताएं।"), 'bot');
                    setStep('INIT');
                  })} className="text-sm bg-background border border-border text-muted-foreground hover:bg-muted/50 px-4 py-2 rounded-xl transition-colors">
                    {t("No, thanks", "नहीं, धन्यवाद")}
                  </button>
                </div>
              )}

              {step === 'LEAD_SERVICE' && (
                <div className="flex flex-col gap-2 mt-4 items-start pl-2">
                  {['Web Development', 'ERP/CRM', 'AI Automation', 'Digital Marketing', t('Other', 'अन्य')].map((svc) => (
                    <button key={svc} onClick={() => handleOptionClick(svc, () => {
                      setLeadData(prev => ({ ...prev, service: svc }));
                      addMessage(t("Got it. Please write a short message about your requirements.", "समझ गया। कृपया अपनी आवश्यकताओं के बारे में एक छोटा संदेश लिखें।"), 'bot');
                      setStep('LEAD_MESSAGE');
                    })} className="text-left text-sm bg-background border border-border text-foreground hover:bg-primary/5 hover:border-primary/30 px-4 py-2 rounded-xl transition-colors">
                      {svc}
                    </button>
                  ))}
                </div>
              )}

              {step === 'LEAD_CONFIRM' && (
                <div className="flex gap-2 mt-4 items-start pl-2">
                  <button 
                    disabled={isSubmitting}
                    onClick={() => sendData()} 
                    className="flex items-center gap-2 text-sm bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-xl transition-colors disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" /> {t("Send Data", "डेटा भेजें")}
                  </button>
                  <button 
                    disabled={isSubmitting}
                    onClick={() => handleOptionClick(t("Cancel", "रद्द करें"), () => {
                      addMessage(t("No problem. We've cancelled the request.", "कोई बात नहीं। हमने अनुरोध रद्द कर दिया है।"), 'bot');
                      setStep('INIT');
                    })} 
                    className="text-sm bg-background border border-border text-muted-foreground hover:bg-muted/50 px-4 py-2 rounded-xl transition-colors disabled:opacity-50"
                  >
                    {t("Cancel", "रद्द करें")}
                  </button>
                </div>
              )}

              {step === 'END' && (
                <div className="flex justify-center mt-4 pt-4">
                  <button onClick={resetChat} className="text-sm text-primary hover:underline">
                    {t("Start a new chat", "नई चैट शुरू करें")}
                  </button>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            {['LEAD_NAME', 'LEAD_EMAIL', 'LEAD_COMPANY', 'LEAD_MESSAGE'].includes(step) && (
              <div className="p-3 bg-background border-t border-border">
                <form onSubmit={handleInputSubmit} className="flex items-center gap-2">
                  <input
                    type={step === 'LEAD_EMAIL' ? 'email' : 'text'}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={t("Type your answer...", "अपना उत्तर टाइप करें...")}
                    className="flex-1 bg-muted/50 border border-border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:bg-background transition-all"
                    autoFocus
                  />
                  <button 
                    type="submit" 
                    disabled={!inputValue.trim()}
                    className="p-2.5 rounded-full bg-primary text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button & Menu */}
      <div className="relative w-14 h-14">
        <AnimatePresence>
          {isOpen && !isChatOpen && (
            <>
              {/* WhatsApp (Left) */}
              <motion.a 
                href="https://wa.me/917376742022" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute right-1 bottom-1 flex items-center gap-3 group whitespace-nowrap z-40"
                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                animate={{ opacity: 1, scale: 1, x: -75, y: 0 }}
                exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
              >
                <span className="bg-background text-foreground text-xs font-medium py-1.5 px-3 rounded-lg shadow-md border border-border opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  WhatsApp
                </span>
                <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
              </motion.a>

              {/* Call Us (Diagonal) */}
              <motion.a 
                href="tel:+919305370277" 
                className="absolute right-1 bottom-1 flex items-center gap-3 group whitespace-nowrap z-40"
                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                animate={{ opacity: 1, scale: 1, x: -60, y: -65 }}
                exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.05 }}
              >
                <span className="bg-background text-foreground text-xs font-medium py-1.5 px-3 rounded-lg shadow-md border border-border opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Call Us
                </span>
                <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
              </motion.a>

              {/* Chat Support (Up) */}
              <motion.button 
                onClick={() => {
                  setIsOpen(false);
                  setIsChatOpen(true);
                }}
                className="absolute right-1 bottom-1 flex items-center gap-3 group whitespace-nowrap z-40"
                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: -75 }}
                exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <span className="bg-background text-foreground text-xs font-medium py-1.5 px-3 rounded-lg shadow-md border border-border opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Chat Support
                </span>
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <Bot className="w-5 h-5" />
                </div>
              </motion.button>
            </>
          )}
        </AnimatePresence>

        {!isChatOpen && (
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={!isOpen ? { y: [0, -8, 0] } : { y: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-0 bottom-0 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-2xl z-50 overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <MessageCircle className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
            
            {!isOpen && (
              <span className="absolute inset-0 rounded-full ring-4 ring-primary/30 animate-pulse"></span>
            )}
          </motion.button>
        )}
      </div>
    </div>
  );
}
