import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SearchIcon } from 'lucide-react';
import { searchSuggestions } from '../data/suggestions';
import { CasePreview } from './CasePreview';

export function Hero() {
  const [query, setQuery] = useState('');

  return (
    <section id="top" className="w-full border-b border-line bg-canvas">
      <div className="mx-auto grid max-w-shell gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-10 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
          
          <p className="text-[11px] font-semibold uppercase tracking-label text-muted">
            Cases, not shows
          </p>

          <h1 className="mt-5 font-display text-[2.75rem] leading-[1.05] text-ink sm:text-5xl lg:text-[3.5rem]">
            Every podcast, doc and book about a case, with the court record that
            goes with it.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-graphite">
            True crime is organised by show. Matter of Record organises it by
            case: sourced timelines, full coverage lists, and a log of what
            you&rsquo;ve already heard.
          </p>

          <form
            className="mt-8 max-w-xl"
            onSubmit={(event) => event.preventDefault()}
            role="search">
            
            <label htmlFor="case-search" className="sr-only">
              Search a case, podcast or location
            </label>
            <div className="flex items-stretch border border-espresso bg-paper focus-within:ring-2 focus-within:ring-espresso/25">
              <SearchIcon
                className="ml-4 h-5 w-5 shrink-0 self-center text-muted"
                aria-hidden="true" />
              
              <input
                id="case-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search a case, podcast or location"
                className="w-full bg-transparent px-3 py-4 text-base text-ink placeholder:text-muted focus:outline-none" />
              
              <button
                type="submit"
                className="shrink-0 bg-espresso px-6 text-sm font-medium text-paper transition-colors hover:bg-ink">
                
                Search
              </button>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-xs text-muted">Try</span>
              {searchSuggestions.map((suggestion) =>
              <button
                key={suggestion}
                type="button"
                onClick={() => setQuery(suggestion)}
                className="rounded-full border border-line bg-paper px-3 py-1 text-xs text-graphite transition-colors hover:border-espresso hover:text-ink">
                
                  {suggestion}
                </button>
              )}
            </div>

            <p className="mt-4 text-sm text-muted">
              Follow a case to get notified of verified updates.
            </p>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}>
          
          <CasePreview />
        </motion.div>
      </div>
    </section>);

}