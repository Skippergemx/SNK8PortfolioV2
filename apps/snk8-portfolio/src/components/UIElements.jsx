import React from 'react';
import { motion } from 'framer-motion';

export const DynamicAurora = ({ isDark }) => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 filter blur-[100px] opacity-60">
        <motion.div 
          animate={{ x: ['-20%', '10%', '-20%'], y: ['10%', '-10%', '10%'], rotate: [0, 5, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute top-[-20%] left-[-10%] w-[120%] h-[60%] transition-colors duration-1000 ${isDark ? "bg-fuchsia-600/40" : "bg-pink-300/50"}`}
          style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}
        />
        <motion.div 
          animate={{ x: ['10%', '-10%', '10%'], y: ['-5%', '15%', '-5%'], rotate: [0, -8, 0], scale: [1.1, 0.9, 1.1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className={`absolute bottom-[-10%] right-[-10%] w-[110%] h-[50%] transition-colors duration-1000 ${isDark ? "bg-cyan-500/30" : "bg-cyan-200/40"}`}
          style={{ borderRadius: '60% 40% 30% 70% / 50% 60% 40% 50%' }}
        />
      </div>
      <div className={`absolute inset-0 opacity-[0.05] pointer-events-none ${isDark ? "invert" : ""}`} 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
    </div>
  );
};

export const GlassCard = ({ children, className = "", isDark }) => (
  <div className={`backdrop-blur-3xl border rounded-[2.5rem] shadow-2xl transition-all duration-700 ${
    isDark ? "bg-white/5 border-white/10" : "bg-white/40 border-white/40 shadow-pink-200/30"
  } ${className}`}>
    {children}
  </div>
);

export const SectionHeading = ({ title, subtitle, isDark }) => (
  <div className="mb-16 space-y-3">
    <motion.span 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="text-pink-500 font-black tracking-[0.4em] uppercase text-[10px]"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={`text-4xl md:text-7xl font-black tracking-tighter ${isDark ? "text-white" : "text-black"}`}
    >
      {title}
    </motion.h2>
  </div>
);
