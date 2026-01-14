import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { GlassCard } from './UIElements';

const Navbar = ({ activeTab, setActiveTab, isDark, toggleTheme }) => {
  return (
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
      </GlassCard>
    </nav>
  );
};

export default Navbar;
