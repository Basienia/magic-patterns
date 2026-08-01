import React from 'react';

const columns = [
{ title: 'Browse', links: ['All cases', 'Court calendar', 'Podcasts', 'Locations'] },
{ title: 'The record', links: ['What we source', 'Corrections policy', 'Submit a filing'] },
{ title: 'Account', links: ['Sign in', 'Followed cases', 'Listening log'] }];


export function SiteFooter() {
  return (
    <footer className="w-full bg-paper">
      <div className="mx-auto max-w-shell px-6 py-14 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl text-ink">Matter of Record</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-graphite">
              Cases, not shows. Built on filings, transcripts and rulings — cited
              every time.
            </p>
          </div>

          {columns.map((column) =>
          <nav key={column.title} aria-label={column.title}>
              <h2 className="text-[11px] font-semibold uppercase tracking-label text-muted">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) =>
              <li key={link}>
                    <a
                  href="#top"
                  className="text-sm text-graphite transition-colors hover:text-ink">
                  
                      {link}
                    </a>
                  </li>
              )}
              </ul>
            </nav>
          )}
        </div>

        <p className="mt-12 border-t border-line pt-6 text-xs text-muted">
          © {new Date().getFullYear()} Matter of Record. Court records are public
          documents; summaries are ours.
        </p>
      </div>
    </footer>);

}