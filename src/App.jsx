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
  ArrowDown,
  Palette
} from 'lucide-react';

/**
 * SNK8 PORTFOLIO & JOURNAL
 * Refined Professional Showcase: Narrative-First Landing.
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

const DynamicAurora = ({ isDark }) => {
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

const GlassCard = ({ children, className = "", isDark }) => (
  <div className={`backdrop-blur-3xl border rounded-[2.5rem] shadow-2xl transition-all duration-700 ${
    isDark ? "bg-white/5 border-white/10" : "bg-white/40 border-white/40 shadow-pink-200/30"
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
      className={`text-4xl md:text-7xl font-black tracking-tighter ${isDark ? "text-white" : "text-black"}`}
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

  useEffect(() => {
    if (isHoveringCarousel) return;
    const interval = setInterval(() => {
      setRotation(prev => prev - 0.5);
    }, 30);
    return () => clearInterval(interval);
  }, [isHoveringCarousel]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-1000 selection:bg-pink-500 selection:text-white overflow-x-hidden ${
      isDark ? "bg-[#030303] text-white" : "bg-[#fffafa] text-zinc-900"
    }`}>
      
      <DynamicAurora isDark={isDark} />

      {/* Navigation */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl">
        <GlassCard isDark={isDark} className={`px-6 md:px-10 py-5 flex justify-between items-center ${isDark ? "bg-black/40" : "bg-white/60"}`}>
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => setActiveTab('gallery')}>
            <div className="w-11 h-11 bg-gradient-to-tr from-pink-500 to-violet-500 rounded-2xl flex items-center justify-center font-black text-xl italic shadow-lg shadow-pink-500/40 group-hover:rotate-12 transition-transform">S</div>
            <span className={`font-black tracking-tighter text-2xl hidden sm:inline ${isDark ? "text-white" : "text-black"}`}>
              SNK8<span className="text-pink-500 italic ml-0.5">POP</span>
            </span>
          </div>
          
          <div className="flex gap-4 md:gap-10 items-center">
            {['gallery', 'journal', 'about'].map(id => (
              <button 
                key={id}
                onClick={() => setActiveTab(id)}
                className={`text-[11px] font-black uppercase tracking-widest transition-all ${
                  activeTab === id ? 'text-pink-500 scale-110' : (isDark ? 'text-zinc-500 hover:text-white' : 'text-zinc-400 hover:text-black')
                }`}
              >
                {id === 'gallery' ? 'Work' : id === 'journal' ? 'Journal' : 'Artist'}
              </button>
            ))}
            <div className={`w-[1px] h-5 mx-2 ${isDark ? "bg-white/10" : "bg-black/10"}`} />
            <button onClick={toggleTheme} className="p-2.5 rounded-full transition-all hover:scale-125">
              {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-pink-600" />}
            </button>
          </div>
        </ GlassCard>
      </nav>

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          
          {activeTab === 'gallery' && (
            <motion.div key="gallery" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              
              {/* PROFESSIONAL HERO LANDING */}
              <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center pt-20">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="space-y-6 max-w-4xl"
                >
                  <span className="text-pink-500 font-black tracking-[0.8em] uppercase text-xs block mb-4">Establishing a new gloss</span>
                  <h1 className={`text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] ${isDark ? "text-white" : "text-black"}`}>
                    LIQUID DREAMS & <br/> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">NEON REALITIES.</span>
                  </h1>
                  <p className={`text-xl md:text-3xl font-medium max-w-2xl mx-auto leading-relaxed ${isDark ? "text-zinc-400" : "text-zinc-500"}`}>
                    SNK8 is a visual architect exploring the intersection of digital dopamine and high-gloss physical texture.
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
                <section className="h-[600px] md:h-[750px] flex items-center justify-center perspective-2000">
                  <div 
                    className="relative w-[280px] md:w-[320px] h-[400px] md:h-[480px] preserve-3d"
                    onMouseEnter={() => setIsHoveringCarousel(true)}
                    onMouseLeave={() => setIsHoveringCarousel(false)}
                    style={{ transform: `rotateX(-10deg) rotateY(${rotation}deg)` }}
                  >
                    {WORKS.map((work, idx) => (
                      <div key={work.id} className="absolute inset-0 preserve-3d" style={{ transform: `rotateY(${(360 / WORKS.length) * idx}deg) translateZ(400px)` }}>
                        <div className={`group relative w-full h-full rounded-[3rem] overflow-hidden border-2 shadow-2xl transition-all duration-500 ${isDark ? "bg-zinc-900 border-white/10" : "bg-white border-white"}`}>
                          <img src={work.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
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
                    {WORKS.map((work, idx) => (
                      <motion.div key={work.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group cursor-pointer">
                        <div className={`aspect-[4/5] rounded-[3.5rem] overflow-hidden border-2 relative shadow-2xl transition-all group-hover:-translate-y-4 ${isDark ? "bg-zinc-900 border-white/5" : "bg-white border-white"}`}>
                          <img src={work.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                        </div>
                        <div className="mt-8 px-4 flex justify-between items-center">
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
            </motion.div>
          )}

          {/* ... Rest of components (Journal/About) remain identical to maintain continuity ... */}
          {activeTab === 'journal' && (
            <motion.div key="journal" className="max-w-4xl mx-auto py-48 px-6">
              <SectionHeading title="Candy Letters" subtitle="Personal Journal" isDark={isDark} />
              <div className="space-y-10">
                {JOURNALS.map(post => (
                  <GlassCard key={post.id} isDark={isDark} className="p-10 hover:bg-pink-500/[0.05] transition-all cursor-pointer group">
                    <div className="flex flex-col gap-4">
                      <span className="text-[10px] font-black text-pink-500 uppercase tracking-widest">{post.date}</span>
                      <h3 className="text-4xl font-black group-hover:text-pink-500 transition-colors">{post.title}</h3>
                      <p className="text-xl italic opacity-70">"{post.excerpt}"</p>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'about' && (
            <motion.div key="about" className="grid lg:grid-cols-2 gap-32 items-center py-48 max-w-7xl mx-auto px-6">
              <div className="relative">
                <div className={`aspect-[4/5] rounded-[4rem] overflow-hidden border-[12px] shadow-2xl ${isDark ? "border-zinc-800" : "border-white"}`}>
                  <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-8">
                <h1 className="text-9xl font-black tracking-tighter">SNK8.</h1>
                <p className="text-3xl font-bold italic text-pink-500">Aesthetic escapes for a digital generation.</p>
                <p className="text-xl leading-relaxed opacity-80">I build worlds that feel like liquid candy. My mission is to bridge the gap between digital perfection and the raw emotion of physical textures.</p>
                <button className="px-12 py-6 bg-pink-500 text-white rounded-3xl font-black uppercase tracking-widest text-xs shadow-xl">Contact Studio</button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      <footer className={`py-32 border-t-2 text-center transition-colors ${isDark ? "border-white/5 bg-black/40" : "border-white bg-pink-500/5"}`}>
        <div className="flex justify-center gap-12 mb-12 opacity-50">
          <Instagram className="cursor-pointer hover:text-pink-500" />
          <Twitter className="cursor-pointer hover:text-pink-500" />
          <Mail className="cursor-pointer hover:text-pink-500" />
        </div>
        <p className="text-[10px] font-black uppercase tracking-[0.8em] opacity-30">© 2024 SNK8 STUDIO</p>
      </footer>

      <style>{`
        .perspective-2000 { perspective: 2000px; }
        .preserve-3d { transform-style: preserve-3d; }
        body::-webkit-scrollbar { display: none; }
        body { scrollbar-width: none; background-color: #030303; }
      `}</style>
    </div>
  );
}