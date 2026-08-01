import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function CookieNotice() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible &&
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        role="region"
        aria-label="Analytics notice"
        className="fixed bottom-4 left-4 z-40 w-[min(22rem,calc(100vw-2rem))] border border-line bg-paper p-4 shadow-[0_18px_40px_-24px_rgba(36,28,23,0.45)]">
        
          <p className="text-sm leading-relaxed text-graphite">
            Privacy-friendly analytics, hosted in the EU.{' '}
            <a
            href="#how-it-works"
            className="underline decoration-line underline-offset-4 hover:text-ink">
            
              How we measure
            </a>
          </p>
          <div className="mt-3 flex gap-2">
            <button
            type="button"
            onClick={() => setVisible(false)}
            className="rounded-sm bg-espresso px-3 py-1.5 text-xs font-medium text-paper transition-colors hover:bg-ink">
            
              Accept
            </button>
            <button
            type="button"
            onClick={() => setVisible(false)}
            className="rounded-sm border border-line px-3 py-1.5 text-xs font-medium text-graphite transition-colors hover:border-espresso hover:text-ink">
            
              Decline
            </button>
          </div>
        </motion.div>
      }
    </AnimatePresence>);

}