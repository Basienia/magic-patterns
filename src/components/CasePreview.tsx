import React from 'react';
import { BookOpenIcon, FileTextIcon, HeadphonesIcon, FilmIcon } from 'lucide-react';

const timeline = [
{
  date: '08 Jun 2021',
  label: 'Bodies discovered at Moselle',
  source: 'Incident report, SLED #2021-0607'
},
{
  date: '14 Jul 2022',
  label: 'Indicted on two counts of murder',
  source: 'Grand jury indictment, Colleton Cty'
},
{
  date: '03 Mar 2023',
  label: 'Convicted, sentenced to life',
  source: 'Trial transcript, vol. 27, p. 4114'
}];


const coverage = [
{ icon: HeadphonesIcon, label: '14 podcasts' },
{ icon: FilmIcon, label: '6 documentaries' },
{ icon: BookOpenIcon, label: '4 books' },
{ icon: FileTextIcon, label: '212 filings' }];


export function CasePreview() {
  return (
    <figure className="w-full border border-line bg-paper shadow-[0_1px_0_rgba(36,28,23,0.04),0_18px_40px_-28px_rgba(36,28,23,0.35)]">
      <figcaption className="flex items-baseline justify-between border-b border-line px-5 py-4">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-label text-muted">
            Case file
          </p>
          <h2 className="mt-1 font-display text-xl text-ink">The Murdaugh Murders</h2>
        </div>
        <span className="text-[11px] font-medium uppercase tracking-label text-oxblood">
          Active
        </span>
      </figcaption>

      <ol className="px-5 py-5">
        {timeline.map((event, index) =>
        <li key={event.date} className="relative flex gap-4 pb-5 last:pb-0">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-espresso" />
            {index < timeline.length - 1 &&
          <span className="absolute left-[2px] top-4 h-full w-px bg-line" />
          }
            <div className="-mt-0.5">
              <p className="text-[11px] font-medium uppercase tracking-label text-muted">
                {event.date}
              </p>
              <p className="mt-1 text-sm font-medium text-ink">{event.label}</p>
              <p className="mt-0.5 text-xs text-muted">{event.source}</p>
            </div>
          </li>
        )}
      </ol>

      <div className="grid grid-cols-2 border-t border-line">
        {coverage.map(({ icon: Icon, label }, index) =>
        <div
          key={label}
          className={`flex items-center gap-2 px-5 py-3 text-xs text-graphite ${
          index % 2 === 0 ? 'border-r border-line' : ''} ${
          index < 2 ? 'border-b border-line' : ''}`}>
          
            <Icon className="h-3.5 w-3.5 text-muted" aria-hidden="true" />
            {label}
          </div>
        )}
      </div>
    </figure>);

}