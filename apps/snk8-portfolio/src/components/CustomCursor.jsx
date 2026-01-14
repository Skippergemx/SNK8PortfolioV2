import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = ({ isDark }) => {
  const [isPointer, setIsPointer] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target;
      const isClickable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('.cursor-pointer') ||
        target.onclick;
      
      setIsPointer(!!isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <motion.div
        animate={{
          scale: isPointer ? 2.5 : 1,
          backgroundColor: isPointer ? 'rgba(236, 72, 153, 0.5)' : (isDark ? 'white' : 'black'),
        }}
        className="w-full h-full rounded-full blur-[2px]"
      />
      {isPointer && (
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute inset-0 border-2 border-pink-500 rounded-full"
        />
      )}
    </motion.div>
  );
};

export default CustomCursor;
