import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon, MapPinIcon } from 'lucide-react';
import { recentEntries, upcomingEntries } from '../data/diary';

type Tab = 'upcoming' | 'recent';

const tabs: {id: Tab;label: string;}[] = [
{ id: 'upcoming', label: 'Coming up' },
{ id: 'recent', label: 'Recently happened' }];


export function CourtDiary() {
  const [tab, setTab] = useState<Tab>('upcoming');
  const entries = tab === 'upcoming' ? upcomingEntries : recentEntries;

  return (
    <section
      id="diary"
      aria-labelledby="diary-heading"
      className="w-full border-b border-line bg-canvas">
      
      <div className="mx-auto max-w-shell px-6 py-14 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="diary-heading" className="font-display text-3xl text-ink">
              Court diary
            </h2>
            <p className="mt-2 text-sm text-graphite">
              Scheduled and confirmed proceedings, checked against the docket.
            </p>
          </div>
          <a
            href="#diary"
            className="group inline-flex items-center gap-2 text-sm text-graphite underline decoration-line underline-offset-4 transition-colors hover:text-ink">
            
            Full calendar
            <ArrowRightIcon
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true" />
            
          </a>
        </div>

        <div
          role="tablist"
          aria-label="Court diary range"
          className="mt-8 inline-flex border border-line bg-paper">
          
          {tabs.map((item) => {
            const selected = tab === item.id;
            return (
              <button
                key={item.id}
                role="tab"
                type="button"
                aria-selected={selected}
                onClick={() => setTab(item.id)}
                className={`relative px-4 py-2 text-xs font-medium uppercase tracking-label transition-colors ${
                selected ? 'text-paper' : 'text-muted hover:text-ink'}`
                }>
                
                {selected &&
                <motion.span
                  layoutId="diary-tab"
                  className="absolute inset-0 bg-espresso"
                  transition={{ type: 'spring', stiffness: 400, damping: 34 }} />

                }
                <span className="relative">{item.label}</span>
              </button>);

          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.ul
            key={tab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            
            {entries.map((entry, index) =>
            <motion.li
              key={entry.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05, ease: 'easeOut' }}>
              
                <a
                href="#diary"
                className="flex h-full flex-col border border-line bg-paper p-4 transition-colors hover:border-espresso">
                
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-[11px] font-medium uppercase tracking-label text-muted">
                      {entry.date}
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-label text-oxblood">
                      {entry.kind}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-lg leading-snug text-ink">
                    {entry.caseName}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-graphite">
                    {entry.outcome}
                  </p>

                  <p className="mt-auto flex items-start gap-1.5 pt-4 text-xs text-muted">
                    <MapPinIcon
                    className="mt-0.5 h-3 w-3 shrink-0"
                    aria-hidden="true" />
                  
                    {entry.court}
                  </p>
                </a>
              </motion.li>
            )}
          </motion.ul>
        </AnimatePresence>
      </div>
    </section>);

}