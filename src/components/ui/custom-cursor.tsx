import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState('');

  const mouseX = useSpring(0, { stiffness: 400, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 400, damping: 28 });

  const dotX = useSpring(0, { stiffness: 1000, damping: 50 });
  const dotY = useSpring(0, { stiffness: 1000, damping: 50 });

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
      dotX.set(e.clientX - 4);
      dotY.set(e.clientY - 4);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleHoverElements = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('button, a, input, textarea, select, [data-cursor]');
      if (interactive) {
        setIsHovered(true);
        const text = interactive.getAttribute('data-cursor');
        setCursorText(text || '');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousemove', handleHoverElements);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousemove', handleHoverElements);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, dotX, dotY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Spring Ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-[#FFCC00] bg-[#FFCC00]/10 backdrop-blur-[1px]"
        style={{
          x: mouseX,
          y: mouseY,
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
        }}
        animate={{
          scale: isHovered ? 1.25 : 1,
          borderColor: isHovered ? '#FFCC00' : 'rgba(255, 204, 0, 0.6)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {cursorText && (
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#09090B] px-2 py-0.5 text-[10px] font-medium text-[#FFCC00]">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Inner Fast Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 h-2 w-2 rounded-full bg-[#09090B] shadow-[0_0_10px_#FFCC00]"
        style={{
          x: dotX,
          y: dotY,
        }}
        animate={{
          scale: isHovered ? 1.8 : 1,
          backgroundColor: isHovered ? '#FFCC00' : '#09090B',
        }}
      />
    </>
  );
}
