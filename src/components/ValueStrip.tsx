import React from 'react';
import { ClockIcon, LayersIcon, CheckSquareIcon } from 'lucide-react';
import { valueProps } from '../data/valueProps';

const icons = {
  timeline: ClockIcon,
  coverage: LayersIcon,
  log: CheckSquareIcon
};

export function ValueStrip() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="w-full border-b border-line bg-paper">
      
      <div className="mx-auto max-w-shell px-6 py-14 lg:px-10">
        <h2
          id="how-it-works-heading"
          className="text-[11px] font-semibold uppercase tracking-label text-muted">
          
          What a case gives you
        </h2>

        <ul className="mt-8 grid gap-8 sm:grid-cols-3 sm:gap-10">
          {valueProps.map((prop) => {
            const Icon = icons[prop.icon];
            return (
              <li key={prop.title} className="border-t border-ink pt-5">
                <Icon className="h-5 w-5 text-espresso" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl text-ink">{prop.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite">
                  {prop.body}
                </p>
              </li>);

          })}
        </ul>
      </div>
    </section>);

}