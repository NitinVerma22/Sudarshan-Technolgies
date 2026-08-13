import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Code2, Globe, Layers, Smartphone, Sparkles, Terminal } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const services = [
  "Custom Web Applications",
  "Enterprise Software",
  "Mobile App Development",
  "Cloud & SaaS Solutions",
  "ERP / CRM Systems",
  "AI-Powered Platforms",
];

const TYPING_SPEED = 50;
const ERASING_SPEED = 25;
const PAUSE_AFTER_TYPE = 1500;
const PAUSE_AFTER_ERASE = 400;

const techStack = [
  { icon: "⚛️", label: "React" },
  { icon: "🟢", label: "Node.js" },
  { icon: "🐍", label: "Python" },
  { icon: "☁️", label: "AWS" },
  { icon: "🔷", label: "TypeScript" },
  { icon: "🤖", label: "AI/ML" },
];

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [serviceIndex, setServiceIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const currentService = services[serviceIndex];

  const tick = useCallback(() => {
    if (isTyping) {
      if (displayText.length < currentService.length) {
        return setTimeout(() => {
          setDisplayText(currentService.slice(0, displayText.length + 1));
        }, TYPING_SPEED);
      } else {
        return setTimeout(() => setIsTyping(false), PAUSE_AFTER_TYPE);
      }
    } else {
      if (displayText.length > 0) {
        return setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, ERASING_SPEED);
      } else {
        return setTimeout(() => {
          setServiceIndex((prev) => (prev + 1) % services.length);
          setIsTyping(true);
        }, PAUSE_AFTER_ERASE);
      }
    }
  }, [displayText, isTyping, currentService]);

  useEffect(() => {
    const timer = tick();
    return () => clearTimeout(timer);
  }, [tick]);

  return (
    <section className="relative min-h-[100svh] md:min-h-[85vh] flex items-center overflow-hidden bg-[#060d1b]">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 10% 40%, rgba(14,116,144,0.25) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 20%, rgba(99,102,241,0.2) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 50% 80%, rgba(245,158,11,0.12) 0%, transparent 50%), radial-gradient(ellipse 90% 60% at 60% 50%, rgba(6,78,130,0.3) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Floating glow orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[20%] w-72 h-72 rounded-full bg-cyan-500/10 blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-[10%] w-96 h-96 rounded-full bg-indigo-500/8 blur-[120px]"
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 sm:pt-24 lg:pt-16 pb-12 sm:pb-16 lg:pb-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          {/* Left - Text content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 sm:mb-5"
            >
              <span className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 text-[10px] sm:text-xs font-display font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em]">
                <Sparkles className="w-3.5 h-3.5" />
                #1 Software Company in Lucknow
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 0.8, bounce: 0, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-[2.5rem] lg:text-[2.75rem] xl:text-[3rem] font-display font-bold leading-[1.2] lg:leading-[1.25] tracking-tight text-white"
            >
              We Design & Build{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #22d3ee, #6366f1, #a855f7)",
                }}
              >
                High&#8209;Performance
              </span>
              <br />
              Websites, Apps &{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #f59e0b, #ef4444)",
                }}
              >
                Enterprise Software
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 0.7, bounce: 0, delay: 0.25 }}
              className="mt-4 sm:mt-5 lg:mt-6 text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed max-w-xl"
            >
              Sudarshan Technologies is widely considered the best software company in Lucknow. We engineer high&#8209;performance web applications, custom enterprise software, and AI-powered solutions that scale your business. We deliver code that drives real growth and innovation.
            </motion.p>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-4 sm:mt-6 flex items-center gap-2 sm:gap-3"
            >
              <Terminal className="w-4 h-4 text-cyan-400/60 shrink-0" />
              <span className="text-xs text-slate-500 font-mono uppercase tracking-wider shrink-0">{"building →"}</span>
              <span className="text-sm sm:text-base font-mono font-semibold text-cyan-300">
                {displayText}
                <span className="inline-block w-[2px] h-5 bg-cyan-400/80 ml-0.5 animate-pulse align-middle" />
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 0.8, bounce: 0, delay: 0.3 }}
              className="mt-6 sm:mt-8 lg:mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 sm:gap-2.5 px-6 sm:px-10 py-3.5 sm:py-4 rounded-xl font-display font-bold text-sm sm:text-base bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-blue-950 transition-all duration-300 shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 hover:brightness-110 active:scale-[0.97]"
              >
                Start Your Project <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-2 sm:gap-2.5 px-6 sm:px-10 py-3.5 sm:py-4 rounded-xl font-display font-bold text-sm sm:text-base border-2 border-slate-600 text-white transition-all duration-300 hover:bg-white/10 hover:border-slate-400 active:scale-[0.97]"
              >
                View Our Work <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>

            {/* Mobile tech stack */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex items-center gap-3 flex-wrap lg:hidden"
            >
              <span className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-wider font-display">Tech Stack:</span>
              <div className="flex items-center gap-2 flex-wrap">
                {techStack.map((tech, i) => (
                  <motion.div
                    key={tech.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.07 }}
                    className="flex items-center gap-1 px-2 py-1 rounded-md bg-white/[0.06] border border-white/[0.1] text-slate-300 text-[10px] sm:text-xs font-mono"
                  >
                    <span className="text-xs sm:text-sm">{tech.icon}</span>
                    <span>{tech.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - Floating UI cards */}
          <div className="hidden lg:block relative">
            <div className="relative h-[440px] w-full">
              {/* Main code editor card */}
              <motion.div
                initial={{ opacity: 0, y: 40, rotateY: -5 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute top-0 right-0 w-[380px] rounded-2xl border border-white/[0.08] bg-[#0d1424]/90 backdrop-blur-xl shadow-2xl overflow-hidden"
              >
                <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/[0.06]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[11px] text-slate-500 font-mono ml-2">app.tsx</span>
                </div>
                <div className="p-4 font-mono text-[13px] leading-relaxed">
                  <div><span className="text-purple-400">const</span> <span className="text-cyan-300">App</span> <span className="text-slate-500">=</span> <span className="text-yellow-400">()</span> <span className="text-purple-400">{"=>"}</span> <span className="text-yellow-400">{"{"}</span></div>
                  <div className="pl-4"><span className="text-purple-400">return</span> <span className="text-slate-500">(</span></div>
                  <div className="pl-8"><span className="text-cyan-400">{"<"}</span><span className="text-green-400">Dashboard</span></div>
                  <div className="pl-12"><span className="text-orange-300">analytics</span><span className="text-slate-500">=</span><span className="text-yellow-400">{"{"}</span><span className="text-cyan-300">true</span><span className="text-yellow-400">{"}"}</span></div>
                  <div className="pl-12"><span className="text-orange-300">realTime</span><span className="text-slate-500">=</span><span className="text-yellow-400">{"{"}</span><span className="text-cyan-300">true</span><span className="text-yellow-400">{"}"}</span></div>
                  <div className="pl-8"><span className="text-cyan-400">{"/>"}</span></div>
                  <div className="pl-4"><span className="text-slate-500">)</span></div>
                  <div><span className="text-yellow-400">{"}"}</span></div>
                </div>
              </motion.div>

              {/* Live users floating card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute top-24 left-0 w-[200px] rounded-xl border border-white/[0.08] bg-[#0d1424]/90 backdrop-blur-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <Globe className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-xs text-slate-400 font-display">Live Users</span>
                </div>
                <div className="text-2xl font-display font-bold text-white">2,847</div>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-[11px] text-emerald-400 font-medium">↑ 24.5%</span>
                  <span className="text-[10px] text-slate-600">vs last month</span>
                </div>
              </motion.div>

              {/* Mobile preview card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="absolute bottom-16 left-8 w-[160px] rounded-2xl border border-white/[0.08] bg-[#0d1424]/90 backdrop-blur-xl overflow-hidden shadow-xl"
              >
                <div className="p-3">
                  <div className="flex items-center gap-2 mb-3">
                    <Smartphone className="w-3.5 h-3.5 text-purple-400" />
                    <span className="text-[10px] text-slate-500 font-display">Mobile App</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full rounded-full bg-white/[0.06]">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "78%" }}
                        transition={{ duration: 1.5, delay: 1.2 }}
                        className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                      />
                    </div>
                    <div className="h-2 w-3/4 rounded-full bg-white/[0.06]">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "62%" }}
                        transition={{ duration: 1.5, delay: 1.4 }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                      />
                    </div>
                    <div className="h-2 w-5/6 rounded-full bg-white/[0.06]">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "90%" }}
                        transition={{ duration: 1.5, delay: 1.6 }}
                        className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Feature icons floating */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute bottom-16 right-8 flex gap-3"
              >
                {[
                  { Icon: Code2, color: "text-cyan-400", bg: "bg-cyan-400/10" },
                  { Icon: Layers, color: "text-purple-400", bg: "bg-purple-400/10" },
                  { Icon: Globe, color: "text-emerald-400", bg: "bg-emerald-400/10" },
                ].map(({ Icon, color, bg }, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    className={`w-11 h-11 rounded-xl ${bg} border border-white/[0.06] flex items-center justify-center shadow-lg`}
                  >
                    <Icon className={`w-5 h-5 ${color}`} />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Tech stack - desktop only, below the code block */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="hidden lg:flex items-center gap-4 flex-wrap -mt-8"
            >
              <span className="text-[11px] text-slate-400 uppercase tracking-wider font-display">Tech Stack:</span>
              <div className="flex items-center gap-3 flex-wrap">
                {techStack.map((tech, i) => (
                  <motion.div
                    key={tech.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.07 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/[0.06] border border-white/[0.1] text-slate-300 text-xs font-mono hover:bg-white/[0.1] hover:text-white transition-colors cursor-default"
                    title={tech.label}
                  >
                    <span className="text-sm">{tech.icon}</span>
                    <span>{tech.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060d1b] to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
