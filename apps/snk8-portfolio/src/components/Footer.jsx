import React from 'react';
import { Instagram, Twitter, Mail } from 'lucide-react';

const Footer = ({ isDark }) => {
  return (
    <footer className={`py-32 border-t-2 text-center transition-colors ${isDark ? "border-white/5 bg-black/40" : "border-white bg-pink-500/5"}`}>
      <div className="flex justify-center gap-12 mb-12 opacity-50">
        <Instagram className="cursor-pointer hover:text-pink-500" />
        <Twitter className="cursor-pointer hover:text-pink-500" />
        <Mail className="cursor-pointer hover:text-pink-500" />
      </div>
      <p className="text-[10px] font-black uppercase tracking-[0.8em] opacity-30">© 2024 SNK8 STUDIO</p>
    </footer>
  );
};

export default Footer;
