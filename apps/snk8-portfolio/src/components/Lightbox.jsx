import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Lightbox = ({ work, onClose, isDark }) => {
  if (!work) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 backdrop-blur-2xl bg-black/80"
      >
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={onClose}
          className="absolute top-10 right-10 p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
        >
          <X size={32} />
        </motion.button>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-[1fr_400px] gap-8 md:gap-12 items-center overflow-y-auto max-h-[90vh] no-scrollbar">
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative aspect-square md:aspect-auto md:h-[80vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-2 border-white/10"
          >
            <img src={work.img} alt={work.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 md:space-y-8 text-white px-2"
          >
            <div>
              <span className="text-pink-500 font-black tracking-[0.4em] uppercase text-[10px] md:text-xs">{work.type}</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mt-2 leading-none">{work.title}</h2>
            </div>
            
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-medium italic">
              "{work.description}"
            </p>

            <div className="pt-4 md:pt-8 flex flex-col gap-4">
              <button className="w-full py-5 md:py-6 bg-white text-black rounded-2xl md:rounded-3xl font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-pink-500 hover:text-white transition-all">
                Inquire About Work
              </button>
              <button className="w-full py-5 md:py-6 border-2 border-white/10 text-white rounded-2xl md:rounded-3xl font-black uppercase tracking-widest text-[10px] md:text-xs hover:border-pink-500/50 transition-all">
                Download Preview
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
