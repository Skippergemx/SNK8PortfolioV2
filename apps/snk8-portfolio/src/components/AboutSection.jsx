import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = ({ isDark }) => {
  return (
    <motion.div key="about" className="grid lg:grid-cols-2 gap-32 items-center py-48 max-w-7xl mx-auto px-6">
      <div className="relative">
        <div className={`aspect-[4/5] rounded-[4rem] overflow-hidden border-[12px] shadow-2xl ${isDark ? "border-zinc-800" : "border-white"}`}>
           <img 
             src="/assets/profileimg/snk8.png" 
             alt="SNK8 Portrait" 
             loading="lazy"
             className="w-full h-full object-cover" 
           />
        </div>
      </div>
      <div className="space-y-8">
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter">SNK8.</h1>
        <p className="text-2xl md:text-3xl font-bold italic text-pink-500">Where portraiture meets rebellion, and color becomes conversation.</p>
        <div className="space-y-6">
          <p className="text-lg md:text-xl leading-relaxed opacity-90">
            SNK8 is a digital artist exploring the intersection of vulnerability and defiance through bold color, geometric disruption, and the human form. Working primarily in digital portraiture and mixed media, each piece investigates the emotional weight of contemporary identity—where softness collides with rebellion, and introspection meets mythology.
          </p>
          <p className="text-lg md:text-xl leading-relaxed opacity-90">
            From the peachy gradients of quiet contemplation to the fiery orange of resistance, SNK8's work speaks in a visual language of duality. Silhouettes against burning horizons. Geometric shapes interrupting organic forms. Movement captured mid-flight. Each artwork is a study in contrasts—feminine strength, luxurious mythology, and the audacity to disobey.
          </p>
          <p className="text-lg md:text-xl leading-relaxed opacity-90">
            The work exists in the liminal spaces: between day and night, conformity and rebellion, stillness and motion. It's an invitation to feel something raw, to question what we accept, and to embrace the beauty of daring to fly too close to the sun.
          </p>
        </div>
        <button className="px-10 md:px-12 py-5 md:py-6 bg-pink-500 text-white rounded-2xl md:rounded-3xl font-black uppercase tracking-widest text-[10px] md:text-xs shadow-xl hover:scale-105 transition-transform">Contact Studio</button>
      </div>
    </motion.div>
  );
};

export default AboutSection;
