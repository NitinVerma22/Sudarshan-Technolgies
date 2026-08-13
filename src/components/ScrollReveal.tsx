import { useEffect, useRef, ReactNode } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const ScrollReveal = ({ children, className = "", delay = 0, direction = "up" }: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const controls = useAnimation();

  const initial = {
    up: { opacity: 0, y: 40, scale: 0.98 },
    down: { opacity: 0, y: -40, scale: 0.98 },
    left: { opacity: 0, x: -40, scale: 0.98 },
    right: { opacity: 0, x: 40, scale: 0.98 },
  };

  useEffect(() => {
    if (isInView) {
      controls.start({ 
        opacity: 1, 
        x: 0, 
        y: 0, 
        scale: 1 
      });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={initial[direction]}
      animate={controls}
      transition={{ 
        type: "spring", 
        stiffness: 70, 
        damping: 20, 
        mass: 1.2,
        delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
