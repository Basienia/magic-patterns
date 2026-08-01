import React from 'react';
import { SiteHeader } from '../components/SiteHeader';
import { Hero } from '../components/Hero';
import { ValueStrip } from '../components/ValueStrip';
import { CourtDiary } from '../components/CourtDiary';
import { SiteFooter } from '../components/SiteFooter';
import { CookieNotice } from '../components/CookieNotice';

export function Home() {
  return (
    <div className="min-h-screen w-full bg-paper">
      <SiteHeader />
      <main>
        <Hero />
        <ValueStrip />
        <CourtDiary />
      </main>
      <SiteFooter />
      <CookieNotice />
    </div>);

}