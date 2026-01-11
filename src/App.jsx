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
  Sun, 
  Moon,
  Sparkles,
  Zap,
  Layers,
  Palette
} from 'lucide-react';

/**
 * SNK8 PORTFOLIO & JOURNAL
 * Enhanced with Neon Pop Girly aesthetic and Light/Dark mode.
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

const GlassCard = ({ children, className = "", isDark }) => (
  <div className={`backdrop-blur-xl border rounded-[2.5rem] shadow-2xl transition-colors duration-500 ${
    isDark 
    ? "bg-white/5 border-white/10" 
    : "bg-black/[0.03] border-black/10 shadow-pink-200/50"
  } ${className}`}>
    {children}
  </div>
);

const SectionHeading = ({ title, subtitle, isDark }) => (
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
      className={`text-4xl md:text-6xl font-black tracking-tighter ${isDark ? "text-white" : "text-black"}`}
    >
      {title}
    </motion.h2>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('gallery');
  const [isDark, setIsDark] = useState(true);
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

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-700 selection:bg-pink-500 selection:text-white overflow-x-hidden ${
      isDark ? "bg-[#080808] text-white" : "bg-[#fdf2f8] text-zinc-900"
    }`}>
      
      {/* Background Lighting Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-[-20%] right-[-10%] w-[70%] h-[70%] blur-[140px] rounded-full transition-opacity duration-1000 ${
          isDark ? "bg-pink-600/20 opacity-100" : "bg-pink-400/40 opacity-70"
        }`} />
        <div className={`absolute bottom-[-10%] left-[-5%] w-[60%] h-[60%] blur-[120px] rounded-full transition-opacity duration-1000 ${
          isDark ? "bg-cyan-600/10 opacity-100" : "bg-cyan-300/30 opacity-60"
        }`} />
      </div>

      {/* Floating Header / Navigation */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl">
        <GlassCard isDark={isDark} className={`px-6 md:px-8 py-4 flex justify-between items-center ${isDark ? "bg-black/40" : "bg-white/60"}`}>
          <div 
            className="flex items-center gap-3 group cursor-pointer" 
            onClick={() => { setActiveTab('gallery'); window.scrollTo(0, 0); }}
          >
            <div className="w-10 h-10 bg-gradient-to-tr from-pink-500 to-cyan-400 rounded-xl flex items-center justify-center font-black text-xl italic shadow-lg shadow-pink-500/40 group-hover:scale-110 transition-transform">S</div>
            <span className={`font-black tracking-tighter text-xl hidden sm:inline ${isDark ? "text-white" : "text-black"}`}>
              SNK8<span className="text-pink-500 italic ml-1">POP</span>
            </span>
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
                className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeTab === tab.id 
                  ? 'text-pink-500 scale-105' 
                  : (isDark ? 'text-zinc-500 hover:text-white' : 'text-zinc-400 hover:text-black')
                }`}
              >
                {tab.icon}
                <span className="hidden md:block">{tab.label}</span>
              </button>
            ))}
            
            <div className={`w-[1px] h-4 mx-2 ${isDark ? "bg-white/10" : "bg-black/10"}`} />
            
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all hover:scale-110 active:scale-90 ${
                isDark ? "bg-white/10 text-yellow-400" : "bg-black/5 text-pink-600"
              }`}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
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
                      <div className={`group relative w-full h-full rounded-[2.5rem] overflow-hidden border shadow-2xl cursor-pointer transition-colors duration-500 ${
                        isDark ? "bg-zinc-900 border-white/10" : "bg-white border-pink-100"
                      }`}>
                        <img src={work.img} alt={work.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-t from-pink-500/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                          <span className="text-[10px] font-black text-white uppercase tracking-widest mb-1">{work.type}</span>
                          <h3 className="text-xl md:text-2xl font-black tracking-tight text-white">{work.title}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Scroll Hint */}
                <div className={`absolute bottom-4 flex flex-col items-center gap-4 ${isDark ? "text-zinc-600" : "text-pink-300"}`}>
                  <span className="text-[9px] uppercase font-black tracking-[0.4em]">Interactive Space</span>
                  <motion.div 
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-pink-500/0 via-pink-500 to-pink-500/0"
                  />
                </div>
              </section>

              {/* Grid Layout Section */}
              <section>
                <SectionHeading title="Archive Selection" subtitle="Featured Works" isDark={isDark} />
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
                      <div className={`aspect-square rounded-[3rem] overflow-hidden border relative shadow-xl ${
                        isDark ? "bg-zinc-900 border-white/5" : "bg-white border-pink-100"
                      }`}>
                        <img src={work.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute top-6 right-6 p-3 bg-pink-500/20 backdrop-blur-md rounded-full text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Sparkles size={16} />
                        </div>
                      </div>
                      <div className="mt-8 flex justify-between items-end px-2">
                        <div>
                          <span className="text-[10px] font-black text-pink-500 uppercase tracking-[0.3em]">{work.type}</span>
                          <h4 className={`text-2xl md:text-3xl font-black mt-2 tracking-tighter group-hover:text-pink-500 transition-colors ${
                            isDark ? "text-white" : "text-black"
                          }`}>
                            {work.title}
                          </h4>
                        </div>
                        <div className={`w-12 h-12 rounded-full border flex items-center justify-center group-hover:bg-pink-500 group-hover:border-pink-500 group-hover:text-white transition-all ${
                          isDark ? "border-white/10 text-white" : "border-pink-200 text-pink-500"
                        }`}>
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
              <SectionHeading title="Neon Notes" subtitle="Artist Journal" isDark={isDark} />
              <div className="space-y-8">
                {JOURNALS.map((post, idx) => (
                  <motion.div 
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <GlassCard isDark={isDark} className={`p-8 md:p-10 group cursor-pointer transition-all border-pink-500/5 ${
                      isDark ? "hover:bg-white/[0.08]" : "hover:bg-pink-500/[0.04]"
                    }`}>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                        <div className="space-y-4">
                          <div className="flex items-center gap-4">
                            <span className={`text-[10px] font-black tracking-widest ${isDark ? "text-zinc-500" : "text-pink-300"}`}>{post.date}</span>
                            <div className="w-1 h-1 rounded-full bg-pink-500" />
                            <span className="text-[10px] font-black text-pink-500 uppercase tracking-[0.2em]">{post.tag}</span>
                          </div>
                          <h3 className={`text-3xl md:text-4xl font-black tracking-tighter group-hover:text-pink-500 transition-colors leading-none ${
                            isDark ? "text-white" : "text-black"
                          }`}>
                            {post.title}
                          </h3>
                          <p className={`text-base md:text-lg font-medium leading-relaxed italic opacity-80 ${
                            isDark ? "text-zinc-400" : "text-zinc-600"
                          }`}>
                            "{post.excerpt}"
                          </p>
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
                <div className="absolute inset-0 bg-pink-500 rounded-[3rem] md:rounded-[4rem] rotate-3 scale-95 group-hover:rotate-6 transition-transform blur-3xl opacity-20" />
                <div className={`relative aspect-square rounded-[3rem] md:rounded-[4rem] overflow-hidden border-8 shadow-2xl ${
                  isDark ? "border-white/5" : "border-white"
                }`}>
                  <img 
                    src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=800&auto=format&fit=crop" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className={`absolute -bottom-8 md:-bottom-10 -left-4 md:-left-6 p-6 md:p-8 rounded-3xl border shadow-2xl flex items-center gap-5 ${
                    isDark ? "bg-zinc-900 border-white/10" : "bg-white border-pink-100"
                  }`}
                >
                  <div className="p-4 bg-pink-500/10 rounded-2xl text-pink-500">
                    <Palette size={24} />
                  </div>
                  <div>
                    <p className={`text-[10px] font-black uppercase tracking-widest ${isDark ? "opacity-40" : "text-pink-300"}`}>Status</p>
                    <p className={`font-black ${isDark ? "text-white" : "text-black"}`}>Studio Open</p>
                  </div>
                </motion.div>
              </div>

              <div className="space-y-10">
                <div className="space-y-4">
                  <span className="text-pink-500 font-black tracking-[0.4em] text-[10px] uppercase">The Creator</span>
                  <h1 className={`text-6xl md:text-8xl font-black tracking-tighter leading-none ${isDark ? "text-white" : "text-black"}`}>
                    SNK8<span className="text-pink-500">.</span>
                  </h1>
                  <p className={`text-2xl md:text-3xl font-bold italic leading-tight ${isDark ? "text-zinc-400" : "text-pink-400"}`}>
                    "Visual dopamine for the bold soul."
                  </p>
                </div>
                
                <div className={`space-y-6 text-lg md:text-xl font-medium leading-relaxed max-w-xl ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
                  <p>
                    I push the boundaries of digital gloss and high-saturation aesthetics. My work lives at the intersection of liquid minimalism and vibrant maximalism.
                  </p>
                  <div className="grid grid-cols-2 gap-4 md:gap-6 pt-4">
                    <div className={`p-6 rounded-3xl border transition-colors ${
                      isDark ? "bg-white/5 border-white/5 hover:bg-white/10" : "bg-pink-50 border-pink-100 hover:bg-pink-100"
                    }`}>
                      <Layers size={24} className="text-pink-500 mb-3" />
                      <h5 className={`font-black text-[10px] uppercase tracking-widest ${isDark ? "text-white" : "text-black"}`}>Mixed Media</h5>
                    </div>
                    <div className={`p-6 rounded-3xl border transition-colors ${
                      isDark ? "bg-white/5 border-white/5 hover:bg-white/10" : "bg-cyan-50 border-cyan-100 hover:bg-cyan-100"
                    }`}>
                      <Zap size={24} className="text-cyan-500 mb-3" />
                      <h5 className={`font-black text-[10px] uppercase tracking-widest ${isDark ? "text-white" : "text-black"}`}>High Flow</h5>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 md:gap-6 pt-4">
                  <button className="flex-1 md:flex-none px-8 md:px-10 py-5 bg-pink-500 hover:bg-pink-600 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] transition-all shadow-xl shadow-pink-500/40 hover:-translate-y-1">
                    Start Project
                  </button>
                  <button className={`p-5 rounded-2xl transition-colors border ${
                    isDark ? "bg-zinc-900 hover:bg-zinc-800 border-white/5 text-zinc-400" : "bg-white hover:bg-pink-50 border-pink-100 text-pink-500"
                  }`}>
                    <Mail size={24} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Footer Section */}
      <footer className={`py-24 border-t text-center space-y-10 transition-colors ${
        isDark ? "border-white/5 bg-black/20" : "border-pink-100 bg-pink-500/5"
      }`}>
        <div className={`flex justify-center gap-12 ${isDark ? "text-zinc-500" : "text-pink-300"}`}>
          <motion.div whileHover={{ y: -5, color: '#ec4899' }} className="cursor-pointer transition-colors"><Instagram size={22} /></motion.div>
          <motion.div whileHover={{ y: -5, color: '#1d9bf0' }} className="cursor-pointer transition-colors"><Twitter size={22} /></motion.div>
          <motion.div whileHover={{ y: -5, color: '#ff0000' }} className="cursor-pointer transition-colors"><Youtube size={22} /></motion.div>
        </div>
        <div className="space-y-2">
          <p className={`text-[10px] font-black uppercase tracking-[0.6em] ${isDark ? "text-zinc-600" : "text-pink-400"}`}>
            © 2024 SNK8 STUDIO • ALL RIGHTS RESERVED
          </p>
          <p className={`text-[8px] font-bold uppercase tracking-widest ${isDark ? "text-zinc-800" : "text-pink-200"}`}>
            Designed for the bold and the bright
          </p>
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