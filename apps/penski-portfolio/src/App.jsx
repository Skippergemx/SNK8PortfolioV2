import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Instagram, Twitter, Mail, Palette } from 'lucide-react'

function App() {
  const [isDark, setIsDark] = useState(true)

  return (
    <div className={`min-h-screen transition-colors duration-700 font-sans ${
      isDark ? 'bg-zinc-900 text-white' : 'bg-zinc-50 text-zinc-900'
    }`}>
      {/* Background gradient */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-[-20%] right-[-10%] w-[70%] h-[70%] blur-[140px] rounded-full transition-opacity duration-1000 ${
          isDark ? 'bg-purple-600/20' : 'bg-purple-400/30'
        }`} />
        <div className={`absolute bottom-[-10%] left-[-5%] w-[60%] h-[60%] blur-[120px] rounded-full transition-opacity duration-1000 ${
          isDark ? 'bg-blue-600/10' : 'bg-blue-300/20'
        }`} />
      </div>

      {/* Header */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl">
        <div className={`px-6 md:px-8 py-4 flex justify-between items-center backdrop-blur-xl border rounded-full shadow-2xl ${
          isDark ? 'bg-black/40 border-white/10' : 'bg-white/60 border-zinc-200'
        }`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-purple-500 to-blue-400 rounded-xl flex items-center justify-center font-black text-xl shadow-lg">
              P
            </div>
            <span className={`font-black tracking-tighter text-xl hidden sm:inline ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              PENSKI
            </span>
          </div>
          
          <button 
            onClick={() => setIsDark(!isDark)}
            className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
              isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-black/5 hover:bg-black/10'
            }`}
          >
            {isDark ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </nav>

      {/* Main content */}
      <main className="relative z-10 pt-36 pb-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 text-sm font-bold uppercase tracking-wider mb-4">
            <Palette size={16} />
            Artist Portfolio
          </div>
          
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none ${
            isDark ? 'text-white' : 'text-black'
          }`}>
            Welcome to<br />
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Penski's World
            </span>
          </h1>
          
          <p className={`text-xl md:text-2xl font-medium max-w-2xl mx-auto ${
            isDark ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            A fresh canvas for creative expression. This portfolio is ready to be filled with stunning artwork and unique vision.
          </p>

          <div className="flex gap-4 justify-center pt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl font-black uppercase tracking-wider text-sm shadow-xl shadow-purple-500/30"
            >
              Explore Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-2xl font-black uppercase tracking-wider text-sm border-2 ${
                isDark ? 'border-white/20 hover:bg-white/10' : 'border-zinc-300 hover:bg-zinc-100'
              }`}
            >
              Contact
            </motion.button>
          </div>
        </motion.div>

        {/* Placeholder grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-32"
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -8 }}
              className={`aspect-square rounded-3xl overflow-hidden border shadow-xl ${
                isDark ? 'bg-zinc-800/50 border-white/10' : 'bg-white border-zinc-200'
              }`}
            >
              <div className="w-full h-full flex items-center justify-center">
                <span className={`text-6xl font-black ${
                  isDark ? 'text-zinc-700' : 'text-zinc-200'
                }`}>
                  {item}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className={`py-16 border-t text-center ${
        isDark ? 'border-white/10' : 'border-zinc-200'
      }`}>
        <div className="flex justify-center gap-8 mb-6">
          <motion.a
            whileHover={{ y: -3 }}
            href="#"
            className={`transition-colors ${isDark ? 'text-zinc-500 hover:text-purple-400' : 'text-zinc-400 hover:text-purple-500'}`}
          >
            <Instagram size={24} />
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            href="#"
            className={`transition-colors ${isDark ? 'text-zinc-500 hover:text-blue-400' : 'text-zinc-400 hover:text-blue-500'}`}
          >
            <Twitter size={24} />
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            href="#"
            className={`transition-colors ${isDark ? 'text-zinc-500 hover:text-pink-400' : 'text-zinc-400 hover:text-pink-500'}`}
          >
            <Mail size={24} />
          </motion.a>
        </div>
        <p className={`text-sm font-bold uppercase tracking-widest ${
          isDark ? 'text-zinc-600' : 'text-zinc-400'
        }`}>
          © 2024 Penski • All Rights Reserved
        </p>
      </footer>
    </div>
  )
}

export default App
