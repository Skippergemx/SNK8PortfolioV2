import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  ChevronRight, 
  BookOpen, 
  Image as ImageIcon, 
  User, 
  ExternalLink,
  Sparkles,
  Zap,
  Layers,
  Palette
} from 'lucide-react';

/**
 * SNK8 PORTFOLIO & JOURNAL
 * A high-end 3D art showcase template.
 * Dependencies: framer-motion, lucide-react, tailwindcss
 */

// --- Data Configuration ---
const WORKS = [
  { id: 1, title: "Bubble Bliss", type: "Oil on Canvas", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" },
  { id: 2, title: "Neon Echo", type: "Acrylic", img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop" },
  { id: 3, title: "Cotton Candy", type: "Mixed Media", img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop" },
  { id: 4, title: "Liquid Chrome", type: "Digital Sculpt", img: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=800&auto=format&fit=crop" },
  { id: 5, title: "Minty Flow", type: "Digital Paint", img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&auto=format&fit=crop" },
];

const JOURNALS = [
  { id: 1, date: "2024.01.12", title: "The Joy of Saturation", excerpt: "Why color shouldn't be feared. Exploring the dopamine hit of magenta in modern spaces.", tag: "Theory" },
  { id: 2, date: "2023.12.05", title: "Organic Spheres", excerpt: "A deep dive into the tension of soap bubbles and how to capture transparency on canvas.", tag: "Process" },
  { id: 3, date: "2023.11.20", title: "Vibrant Minimalist", excerpt: "Finding the balance between 'too much' and 'just enough' in high-contrast art.", tag: "Opinion" },
];

// --- UI Components ---

const GlassCard = ({ children, className = "" }) => (
  <div className={`backdrop-blur-md bg-white/5 border border-white/10 rounded-[2.5rem] shadow-2xl ${className}`}>
    {children}
  </div>
);

const SectionHeading = ({ title, subtitle }) => (
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
      className="text-4xl md:text-6xl font-black tracking-tighter"
    >
      {title}
    </motion.h2>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('gallery');
  const [rotation, setRotation] = useState(0);
  const [isHoveringCarousel, setIsHoveringCarousel] = useState(false);

  // Smooth auto-rotation for the 3D Carousel
  useEffect(() => {
    if (isHoveringCarousel) return;
    const interval = setInterval(() => {
      setRotation(prev => prev - 0.4);
    }, 30);
    return () => clearInterval(interval);
  }, [isHoveringCarousel]);

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans selection:bg-pink-500 selection:text-white overflow-x-hidden">
      
      {/* Background Lighting Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-pink-600/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      {/* Floating Header / Navigation */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl">
        <GlassCard className="px-8 py-4 flex justify-between items-center bg-black/40 border-white/5">
          <div 
            className="flex items-center gap-3 group cursor-pointer" 
            onClick={() => { setActiveTab('gallery'); window.scrollTo(0, 0); }}
          >
            <div className="w-10 h-10 bg-gradient-to-tr from-pink-600 to-purple-600 rounded-xl flex items-center justify-center font-black text-xl italic shadow-lg shadow-pink-500/20 group-hover:scale-110 transition-transform">S</div>
            <span className="font-black tracking-tighter text-xl">SNK8<span className="text-pink-500 italic ml-1">STUDIO</span></span>
          </div>
          
          <div className="flex gap-4 md:gap-8 items-center">
            {[
              { id: 'gallery', icon: <ImageIcon size={16} />, label: 'Work' },
              { id: 'journal', icon: <BookOpen size={16} />, label: 'Journal' },
              { id: 'about', icon: <User size={16} />, label: 'Artist' }
            ].map(tab => (
              <button 
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); window.scrollTo(0, 0); }}
                className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === tab.id ? 'text-pink-400' : 'text-zinc-500 hover:text-white'}`}
              >
                {tab.icon}
                <span className="hidden md:block">{tab.label}</span>
              </button>
            ))}
          </div>
        </ GlassCard>
      </nav>

      {/* Main Content Area */}
      <main className="relative pt-36 pb-24 px-6 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          
          {/* GALLERY TAB */}
          {activeTab === 'gallery' && (
            <motion.div 
              key="gallery"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-40"
            >
              {/* 3D Immersive Carousel Section */}
              <section className="h-[500px] md:h-[700px] flex items-center justify-center perspective-1500 overflow-visible">
                <div 
                  className="relative w-[240px] md:w-[300px] h-[350px] md:h-[420px] preserve-3d"
                  onMouseEnter={() => setIsHoveringCarousel(true)}
                  onMouseLeave={() => setIsHoveringCarousel(false)}
                  style={{ 
                    transform: `rotateX(-12deg) rotateY(${rotation}deg)`,
                    transition: isHoveringCarousel ? 'transform 0.6s cubic-bezier(0.2, 0, 0.2, 1)' : 'none'
                  }}
                >
                  {WORKS.map((work, idx) => (
                    <div 
                      key={work.id}
                      className="absolute inset-0 preserve-3d"
                      style={{ 
                        transform: `rotateY(${(360 / WORKS.length) * idx}deg) translateZ(350px)` 
                      }}
                    >
                      <div className="group relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl cursor-pointer bg-zinc-900">
                        <img src={work.img} alt={work.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                          <span className="text-[10px] font-black text-pink-500 uppercase tracking-widest mb-1">{work.type}</span>
                          <h3 className="text-xl md:text-2xl font-black tracking-tight">{work.title}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Scroll Hint */}
                <div className="absolute bottom-4 flex flex-col items-center gap-4 text-zinc-600">
                  <span className="text-[9px] uppercase font-black tracking-[0.4em]">Interactive 3D Space</span>
                  <motion.div 
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-pink-500/0 via-pink-500 to-pink-500/0"
                  />
                </div>
              </section>

              {/* Grid Layout Section */}
              <section>
                <SectionHeading title="Archive Selection" subtitle="Featured Works" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {WORKS.map((work, idx) => (
                    <motion.div 
                      key={work.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="group cursor-pointer"
                    >
                      <div className="aspect-square rounded-[2.5rem] md:rounded-[3rem] overflow-hidden bg-zinc-900 border border-white/5 relative shadow-xl">
                        <img src={work.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <Sparkles size={16} />
                        </div>
                      </div>
                      <div className="mt-8 flex justify-between items-end px-2">
                        <div>
                          <span className="text-[10px] font-black text-pink-500 uppercase tracking-[0.3em]">{work.type}</span>
                          <h4 className="text-2xl md:text-3xl font-black mt-2 tracking-tighter group-hover:text-pink-400 transition-colors">{work.title}</h4>
                        </div>
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-pink-600 group-hover:border-pink-600 transition-all">
                          <ChevronRight size={20} />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            </motion.div>
          )}

          {/* JOURNAL TAB */}
          {activeTab === 'journal' && (
            <motion.div 
              key="journal"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              className="max-w-4xl mx-auto py-12"
            >
              <SectionHeading title="Color & Concept" subtitle="Artist Journal" />
              <div className="space-y-8">
                {JOURNALS.map((post, idx) => (
                  <motion.div 
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <GlassCard className="p-8 md:p-10 group cursor-pointer hover:bg-white/[0.08] transition-all border-white/[0.05]">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                        <div className="space-y-4">
                          <div className="flex items-center gap-4">
                            <span className="text-[10px] font-black text-zinc-500 tracking-widest">{post.date}</span>
                            <div className="w-1 h-1 rounded-full bg-pink-500" />
                            <span className="text-[10px] font-black text-pink-500 uppercase tracking-[0.2em]">{post.tag}</span>
                          </div>
                          <h3 className="text-3xl md:text-4xl font-black tracking-tighter group-hover:text-pink-400 transition-colors leading-none">{post.title}</h3>
                          <p className="text-zinc-400 text-base md:text-lg font-medium leading-relaxed italic opacity-80">"{post.excerpt}"</p>
                        </div>
                        <div className="shrink-0 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-pink-500 group-hover:translate-x-2 transition-transform">
                          Open Entry <ChevronRight size={14} />
                        </div>
                      </div>
                    </ GlassCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ABOUT TAB */}
          {activeTab === 'about' && (
            <motion.div 
              key="about"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center py-16"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-pink-600 rounded-[3rem] md:rounded-[4rem] rotate-3 scale-95 group-hover:rotate-6 transition-transform blur-2xl opacity-10" />
                <div className="relative aspect-square rounded-[3rem] md:rounded-[4rem] overflow-hidden border-8 border-white/5 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=800&auto=format&fit=crop" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-8 md:-bottom-10 -left-4 md:-left-6 p-6 md:p-8 rounded-3xl bg-zinc-900 border border-white/10 shadow-2xl flex items-center gap-5"
                >
                  <div className="p-4 bg-pink-500/10 rounded-2xl text-pink-500">
                    <Palette size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Status</p>
                    <p className="font-black">Studio Open</p>
                  </div>
                </motion.div>
              </div>

              <div className="space-y-10">
                <div className="space-y-4">
                  <span className="text-pink-500 font-black tracking-[0.4em] text-[10px] uppercase">The Creator</span>
                  <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">SNK8<span className="text-pink-600">.</span></h1>
                  <p className="text-2xl md:text-3xl font-bold text-zinc-400 italic leading-tight">"Visual dopamine for the modern observer."</p>
                </div>
                
                <div className="space-y-6 text-lg md:text-xl text-zinc-400 font-medium leading-relaxed max-w-xl">
                  <p>
                    I push the boundaries of digital gloss and high-saturation aesthetics. My work lives at the intersection of liquid minimalism and vibrant maximalism.
                  </p>
                  <div className="grid grid-cols-2 gap-4 md:gap-6 pt-4">
                    <div className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                      <Layers size={24} className="text-pink-500 mb-3" />
                      <h5 className="font-black text-[10px] uppercase tracking-widest">Mixed Media</h5>
                    </div>
                    <div className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                      <Zap size={24} className="text-blue-400 mb-3" />
                      <h5 className="font-black text-[10px] uppercase tracking-widest">High Flow</h5>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 md:gap-6 pt-4">
                  <button className="flex-1 md:flex-none px-8 md:px-10 py-5 bg-pink-600 hover:bg-pink-700 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] transition-all shadow-xl shadow-pink-600/20 hover:-translate-y-1">
                    Start Project
                  </button>
                  <button className="p-5 bg-zinc-900 rounded-2xl hover:bg-zinc-800 transition-colors border border-white/5 text-zinc-400">
                    <Mail size={24} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Footer Section */}
      <footer className="py-24 border-t border-white/5 text-center space-y-10 bg-black/20">
        <div className="flex justify-center gap-12 text-zinc-500">
          <motion.div whileHover={{ y: -5, color: '#ec4899' }} className="cursor-pointer transition-colors"><Instagram size={22} /></motion.div>
          <motion.div whileHover={{ y: -5, color: '#1d9bf0' }} className="cursor-pointer transition-colors"><Twitter size={22} /></motion.div>
          <motion.div whileHover={{ y: -5, color: '#ff0000' }} className="cursor-pointer transition-colors"><Youtube size={22} /></motion.div>
        </div>
        <div className="space-y-2">
          <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.6em]">© 2024 SNK8 STUDIO • ALL RIGHTS RESERVED</p>
          <p className="text-[8px] font-bold text-zinc-800 uppercase tracking-widest">Designed for the bold</p>
        </div>
      </footer>

      {/* Embedded CSS for 3D Effects */}
      <style>{`
        .perspective-1500 { perspective: 1800px; }
        .preserve-3d { transform-style: preserve-3d; }
        
        body { scrollbar-width: none; }
        body::-webkit-scrollbar { display: none; }

        @media (max-width: 768px) {
          .perspective-1500 { perspective: 1200px; }
        }
      `}</style>
    </div>
  );
}