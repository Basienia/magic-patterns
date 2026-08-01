import React from 'react';

const navItems = [
{ label: 'Cases', href: '#cases', active: true },
{ label: 'Calendar', href: '#diary', active: false },
{ label: 'How it works', href: '#how-it-works', active: false }];


export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-shell items-center gap-8 px-6 py-4 lg:px-10">
        <a
          href="#top"
          className="font-display text-xl font-medium tracking-tight text-ink">
          
          Matter of Record
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navItems.map((item) =>
            <li key={item.label}>
                <a
                href={item.href}
                aria-current={item.active ? 'page' : undefined}
                className={`relative py-1 text-sm transition-colors hover:text-ink ${
                item.active ? 'text-ink' : 'text-muted'}`
                }>
                
                  {item.label}
                  {item.active &&
                <span className="absolute -bottom-0.5 left-0 h-px w-full bg-ink" />
                }
                </a>
              </li>
            )}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <a
            href="#how-it-works"
            className="hidden text-sm text-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink md:inline">
            
            What we source
          </a>
          <button
            type="button"
            className="rounded-sm bg-espresso px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-ink">
            
            Sign in
          </button>
        </div>
      </div>
    </header>);

}