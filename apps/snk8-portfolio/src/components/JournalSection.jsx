import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading, GlassCard } from './UIElements';
import { JOURNALS } from '../data/content';

const JournalSection = ({ isDark, highlightedId, onClearHighlight }) => {
  const highlightedRef = useRef(null);

  useEffect(() => {
    if (highlightedId && highlightedRef.current) {
      setTimeout(() => {
        highlightedRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
      // Clear highlight after animation
      setTimeout(() => onClearHighlight?.(), 3000);
    }
  }, [highlightedId, onClearHighlight]);

  return (
    <motion.div key="journal" className="max-w-4xl mx-auto py-48 px-6">
      <SectionHeading title="Candy Letters" subtitle="Personal Journal" isDark={isDark} />
      <div className="space-y-10">
        {JOURNALS.map(post => {
          const isHighlighted = highlightedId === post.id;
          return (
          <div 
            key={post.id}
            ref={isHighlighted ? highlightedRef : null}
          >
            <GlassCard 
              isDark={isDark} 
              className={`hover:bg-pink-500/[0.05] transition-all cursor-pointer group overflow-hidden ${
                isHighlighted ? 'ring-4 ring-pink-500 ring-opacity-50 animate-pulse' : ''
              }`}
            >
            {post.featuredImage ? (
              <div className="grid md:grid-cols-[300px_1fr] gap-8">
                <div className="relative aspect-[4/5] md:aspect-auto md:h-full rounded-2xl overflow-hidden">
                  <img 
                    src={post.featuredImage} 
                    alt={post.artworkTitle}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex flex-col gap-4 p-10">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black text-pink-500 uppercase tracking-widest">{post.date}</span>
                    <span className="px-3 py-1 bg-pink-500/10 border border-pink-500/20 rounded-full text-[9px] font-black text-pink-500 uppercase tracking-wider">{post.tag}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black group-hover:text-pink-500 transition-colors">{post.title}</h3>
                  <p className="text-lg md:text-xl italic opacity-70 leading-relaxed">"{post.excerpt}"</p>
                  {post.artworkTitle && (
                    <p className="text-sm font-bold text-pink-500/60 mt-2">Featuring: {post.artworkTitle}</p>
                  )}
                </div>
              </div>
            ) : (
              <div className="p-10 flex flex-col gap-4">
                <span className="text-[10px] font-black text-pink-500 uppercase tracking-widest">{post.date}</span>
                <h3 className="text-4xl font-black group-hover:text-pink-500 transition-colors">{post.title}</h3>
                <p className="text-xl italic opacity-70">"{post.excerpt}"</p>
              </div>
            )}
          </GlassCard>
          </div>
        );
        })}
      </div>
    </motion.div>
  );
};

export default JournalSection;
