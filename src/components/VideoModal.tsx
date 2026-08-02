import { motion, AnimatePresence } from 'motion/react';
import { X, Play, ExternalLink } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  videoUrl: string;
}

export function VideoModal({ isOpen, onClose, title, videoUrl }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-[#09090B] border border-zinc-800 shadow-2xl z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-zinc-800 p-4 px-6 bg-zinc-900/60">
            <div className="flex items-center space-x-2">
              <span className="flex h-3 w-3 rounded-full bg-[#FFCC00] animate-pulse" />
              <h3 className="text-sm font-semibold text-white tracking-wide">{title}</h3>
            </div>
            <div className="flex items-center space-x-3">
              <a
                href={videoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-1 text-xs text-zinc-400 hover:text-[#FFCC00] transition-colors"
              >
                <span>Открыть оригинал</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <button
                onClick={onClose}
                className="rounded-full p-1 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Player Container */}
          <div className="relative aspect-video w-full bg-black flex items-center justify-center">
            {videoUrl.includes('veed.io') ? (
              <iframe
                src="https://www.veed.io/embed/252c7b72-f679-43ed-ae02-06df810a26cb"
                className="w-full h-full border-0"
                allow="autoplay; fullscreen; picture-in-picture"
                title={title}
              />
            ) : videoUrl.includes('magnific.com') ? (
              <iframe
                src="https://www.magnific.com/ru/premium-video/hand-drawn-graph-infographics-chart-pink_4241140"
                className="w-full h-full border-0"
                allow="autoplay; fullscreen"
                title={title}
              />
            ) : (
              <div className="p-8 text-center">
                <Play className="mx-auto h-12 w-12 text-[#FFCC00] mb-3" />
                <p className="text-zinc-300 font-medium mb-4">Видеопрезентация кейса доступна на платформе</p>
                <a
                  href={videoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 rounded-xl bg-[#FFCC00] px-5 py-2.5 text-sm font-bold text-black hover:bg-[#FFD600] transition-colors"
                >
                  <span>Смотреть видео</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            )}
          </div>

          {/* Footer note */}
          <div className="p-4 px-6 bg-zinc-950 text-xs text-zinc-400 flex flex-wrap items-center justify-between gap-2 border-t border-zinc-900">
            <span>Promotion Delivery — Продвижение ресторанов на Яндекс.Еде</span>
            <span className="text-[#FFCC00]">Консультация эксперта бесплатно</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
