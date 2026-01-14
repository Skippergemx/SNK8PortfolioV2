import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Component Imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GallerySection from './components/GallerySection';
import JournalSection from './components/JournalSection';
import AboutSection from './components/AboutSection';
import Lightbox from './components/Lightbox';
import CustomCursor from './components/CustomCursor';
import { DynamicAurora } from './components/UIElements';

export default function App() {
  const [activeTab, setActiveTab] = useState('gallery');
  const [isDark, setIsDark] = useState(true);
  const [selectedWork, setSelectedWork] = useState(null);
  const [highlightedJournalId, setHighlightedJournalId] = useState(null);

  const toggleTheme = () => setIsDark(!isDark);

  const navigateToJournal = (workId) => {
    setHighlightedJournalId(workId);
    setActiveTab('journal');
    // Scroll to top when navigating
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-1000 selection:bg-pink-500 selection:text-white overflow-x-hidden ${
      isDark ? "bg-[#030303] text-white" : "bg-[#fffafa] text-zinc-900"
    }`}>
      
      <CustomCursor isDark={isDark} />
      <DynamicAurora isDark={isDark} />

      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isDark={isDark} 
        toggleTheme={toggleTheme} 
      />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          
          {activeTab === 'gallery' && (
            <GallerySection 
              key="gallery" 
              isDark={isDark} 
              onWorkClick={setSelectedWork}
              onNavigateToJournal={navigateToJournal}
            />
          )}

          {activeTab === 'journal' && (
            <JournalSection 
              key="journal" 
              isDark={isDark}
              highlightedId={highlightedJournalId}
              onClearHighlight={() => setHighlightedJournalId(null)}
            />
          )}

          {activeTab === 'about' && (
            <AboutSection 
              key="about" 
              isDark={isDark} 
            />
          )}

        </AnimatePresence>
      </main>

      <Footer isDark={isDark} />

      <Lightbox 
        work={selectedWork} 
        onClose={() => setSelectedWork(null)} 
        isDark={isDark} 
      />

      <style>{`
        body::-webkit-scrollbar { display: none; }
        body { scrollbar-width: none; background-color: #030303; }
      `}</style>
    </div>
  );
}
