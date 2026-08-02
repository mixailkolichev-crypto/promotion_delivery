import React, { useRef, useState, useEffect } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'motion/react';

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.85, 0.95] : [1.02, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 0.4], [22, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], scaleDimensions());
  const translateY = useTransform(scrollYProgress, [0, 0.4], [0, -40]);

  return (
    <div
      className="relative flex h-[65rem] md:h-[80rem] items-center justify-center p-2 md:p-20 pt-10 pb-20"
      ref={containerRef}
    >
      <div
        className="relative w-full py-10 md:py-20"
        style={{
          perspective: '1000px',
        }}
      >
        <Header translateY={translateY} titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({
  translateY,
  titleComponent,
}: {
  translateY: MotionValue<number>;
  titleComponent: any;
}) => {
  return (
    <motion.div
      style={{
        translateY,
      }}
      className="div max-w-5xl mx-auto text-center mb-8"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          '0 0 #0000, 0 0 #0000, 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      }}
      className="max-w-6xl -mt-6 mx-auto h-[32rem] md:h-[46rem] w-full border-4 border-[#18181B] p-2 md:p-6 bg-[#09090B] rounded-[30px] shadow-2xl relative overflow-hidden"
    >
      <div className="bg-[#09090B] h-full w-full rounded-[20px] overflow-hidden">
        {children}
      </div>
    </motion.div>
  );
};
