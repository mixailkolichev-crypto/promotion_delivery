import { cn } from '../../lib/utils';
import { IconLayoutNavbarCollapse } from '@tabler/icons-react';
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'motion/react';
import { useRef, useState } from 'react';

export interface DockItem {
  title: string;
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
  highlight?: boolean;
}

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: DockItem[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop className={desktopClassName} items={items} />
      <FloatingDockMobile className={mobileClassName} items={items} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: DockItem[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2 items-end"
          >
            {items.map((item, idx) => {
              const Content = (
                <div
                  className={cn(
                    "flex h-11 px-3 items-center justify-center space-x-2 rounded-full shadow-lg border backdrop-blur-md text-xs font-bold transition-all",
                    item.highlight
                      ? "bg-[#FFCC00] text-zinc-950 border-[#FFCC00]"
                      : "bg-white/90 text-zinc-800 border-zinc-200/80 hover:bg-zinc-100"
                  )}
                >
                  <div className="h-4 w-4 flex items-center justify-center">{item.icon}</div>
                  <span className="whitespace-nowrap">{item.title}</span>
                </div>
              );

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    transition: {
                      delay: idx * 0.05,
                    },
                  }}
                  transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                >
                  {item.onClick ? (
                    <button
                      onClick={() => {
                        setOpen(false);
                        item.onClick?.();
                      }}
                      className="cursor-pointer"
                    >
                      {Content}
                    </button>
                  ) : (
                    <a
                      href={item.href || "#"}
                      onClick={() => setOpen(false)}
                      className="cursor-pointer"
                    >
                      {Content}
                    </a>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-900 text-[#FFCC00] shadow-lg border border-zinc-800 active:scale-95 transition-transform"
        aria-label="Toggle Navigation Dock"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: DockItem[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden h-16 items-center gap-3.5 rounded-full bg-transparent px-2 py-2 md:flex",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer key={item.title} mouseX={mouseX} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  onClick,
  highlight,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
  highlight?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const scaleTransform = useTransform(distance, [-150, 0, 150], [1, 1.15, 1]);
  const yTransform = useTransform(distance, [-150, 0, 150], [0, -3, 0]);

  const scale = useSpring(scaleTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const y = useSpring(yTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const innerContent = (
    <motion.div
      ref={ref}
      style={{ scale, y }}
      className={cn(
        "relative flex h-10 px-3.5 items-center justify-center space-x-1.5 rounded-full transition-colors shadow-sm cursor-pointer select-none",
        highlight
          ? "bg-[#FFCC00] text-zinc-950 font-bold hover:bg-[#ffe066] shadow-[#FFCC00]/30"
          : "bg-zinc-100/80 text-zinc-700 hover:bg-zinc-200/90 hover:text-zinc-950 font-semibold"
      )}
    >
      <div className="h-4 w-4 flex items-center justify-center shrink-0">{icon}</div>
      <span className="text-xs sm:text-sm whitespace-nowrap tracking-tight">{title}</span>
    </motion.div>
  );

  if (onClick) {
    return (
      <button onClick={onClick} className="outline-none cursor-pointer">
        {innerContent}
      </button>
    );
  }

  return (
    <a href={href || "#"} className="outline-none cursor-pointer">
      {innerContent}
    </a>
  );
}
