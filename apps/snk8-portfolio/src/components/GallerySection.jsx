import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowDown, ChevronRight } from 'lucide-react';
import { SectionHeading } from './UIElements';
import { WORKS } from '../data/content';

const GallerySection = ({ isDark, onWorkClick, onNavigateToJournal }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const autoRotation = useRef(0);
  const [rotation, setRotation] = useState(0);
  const [isHoveringCarousel, setIsHoveringCarousel] = useState(false);

  // Combine manual scroll rotation with auto-rotation
  const scrollRotation = useTransform(springScroll, [0, 1], [0, 360]);

  useEffect(() => {
    let animationFrame;
    const animate = () => {
      if (!isHoveringCarousel) {
        autoRotation.current -= 0.5;
        setRotation(autoRotation.current + scrollRotation.get());
      } else {
        setRotation(autoRotation.current + scrollRotation.get());
      }
      animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isHoveringCarousel, scrollRotation]);

  return (
    <div key="gallery" ref={containerRef}>
      {/* PROFESSIONAL HERO LANDING */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="space-y-6 max-w-4xl"
        >
          <span className="text-pink-500 font-black tracking-[0.8em] uppercase text-xs block mb-4">Digital Portraiture & Defiance</span>
          <h1 className={`text-5xl md:text-9xl font-black tracking-tighter leading-[0.9] md:leading-[0.85] ${isDark ? "text-white" : "text-black"}`}>
            VULNERABILITY & <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">REBELLION.</span>
          </h1>
          <p className={`text-lg md:text-3xl font-medium max-w-2xl mx-auto leading-relaxed opacity-80 ${isDark ? "text-zinc-400" : "text-zinc-500"}`}>
            Where bold color meets the human form. Exploring identity, defiance, and the beauty of daring to disobey.
          </p>
          
          <div className="pt-10 flex flex-col items-center gap-8">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('works-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-pink-500 text-white font-black uppercase tracking-[0.3em] text-[10px] rounded-full shadow-2xl shadow-pink-500/40"
            >
              Enter The Gallery
            </motion.button>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ duration: 2, repeat: Infinity }}
              className="text-pink-500 opacity-50"
            >
              <ArrowDown size={32} strokeWidth={3} />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ARCHIVE START */}
      <div id="works-section" className="pt-32 space-y-48 pb-48 max-w-7xl mx-auto px-6">
        
        {/* 3D Carousel Stage */}
        <section className="h-[500px] md:h-[750px] flex items-center justify-center perspective-2000 overflow-visible">
          <div 
            className="relative w-[220px] md:w-[320px] h-[320px] md:h-[480px] preserve-3d"
            onMouseEnter={() => setIsHoveringCarousel(true)}
            onMouseLeave={() => setIsHoveringCarousel(false)}
            style={{ transform: `rotateX(-10deg) rotateY(${rotation}deg)` }}
          >
            {WORKS.map((work, idx) => (
              <div 
                key={work.id} 
                className="absolute inset-0 preserve-3d cursor-pointer" 
                style={{ transform: `rotateY(${(360 / WORKS.length) * idx}deg) translateZ(clamp(250px, 40vw, 400px))` }}
                onClick={() => onWorkClick(work)}
              >
                <div className={`group relative w-full h-full rounded-[3rem] overflow-hidden border-2 shadow-2xl transition-all duration-500 ${isDark ? "bg-zinc-900 border-white/10" : "bg-white border-white"}`}>
                  <img 
                    src={work.img} 
                    loading="lazy"
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:blur-[1px] transition-transform duration-1000" 
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-pink-500/10 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-600 to-transparent opacity-0 group-hover:opacity-100 transition-all flex flex-col justify-end p-10">
                    <span className="text-[10px] font-black text-white uppercase tracking-widest mb-1">{work.type}</span>
                    <h3 className="text-2xl font-black text-white">{work.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Grid View */}
        <section>
          <SectionHeading title="The Pop Vault" subtitle="Selected Projects" isDark={isDark} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {WORKS.map((work) => (
              <motion.div 
                key={work.id} 
                initial={{ opacity: 0, y: 40 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                className="group cursor-pointer"
              >
                <div 
                  className={`aspect-[4/5] rounded-[3.5rem] overflow-hidden border-2 relative shadow-2xl transition-all group-hover:-translate-y-4 ${isDark ? "bg-zinc-900 border-white/5" : "bg-white border-white"}`}
                  onClick={() => onWorkClick(work)}
                >
                  <img 
                    src={work.img} 
                    loading="lazy"
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  />
                </div>
                <div 
                  className="mt-8 px-4 flex justify-between items-center"
                  onClick={() => onNavigateToJournal(work.id)}
                >
                  <div>
                    <span className="text-[9px] font-black text-pink-500 uppercase tracking-[0.4em]">{work.type}</span>
                    <h4 className={`text-3xl font-black mt-1 ${isDark ? "text-white" : "text-black"}`}>{work.title}</h4>
                  </div>
                  <ChevronRight size={24} className="text-pink-500 group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      <style>{`
        .perspective-2000 { perspective: 2000px; }
        .preserve-3d { transform-style: preserve-3d; }
      `}</style>
    </div>
  );
};

export default GallerySection;
