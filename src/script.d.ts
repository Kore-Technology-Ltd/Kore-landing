// src/script.d.ts
interface KorreNotification {
  show: (message: string, type: 'info' | 'success' | 'error') => void;
}

interface KorreCarousel {
  // Add relevant methods if needed, for now, just marking it as object
  init: () => void;
  prevSlide: () => void;
  nextSlide: () => void;
}

interface KorreGlobal {
  notifications?: KorreNotification;
  carousel?: KorreCarousel;
  init?: () => void;
}

declare global {
  interface Window {
    Korre?: KorreGlobal;
    KORRE_DISABLE_AUTO_INIT?: boolean;
  }
}

export {}; // This makes it a module, preventing global scope pollution if not needed.
