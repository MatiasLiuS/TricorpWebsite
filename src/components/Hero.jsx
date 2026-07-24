// src/components/Hero.jsx
import React, { useState } from 'react';
import { heroContent } from '../data/heroData';

function HeroLeft() {
  return (
    <div className="lg:col-span-7 animate-fade-in-up flex flex-col justify-center">
      {/* Dynamic Upper Sub-badge */}
      <p className="text-xs font-black tracking-[0.2em] text-brand-blue uppercase mb-5 opacity-90 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-brand-blue animate-pulse"></span>
        {heroContent.badgeText}
      </p>

      {/* Primary Statement */}
      <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-bold tracking-[-0.04em] leading-[1.05] mb-6">
        {heroContent.mainHeading.staticLine} <br className="hidden sm:inline" />
        <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-sky-300 to-brand-blue bg-[length:200%_auto] animate-shine">
          {heroContent.mainHeading.highlightedLine}
        </span>
      </h1>

      {/* Explanatory Narrative Block */}
      <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-normal opacity-95 max-w-[580px]">
        {heroContent.narrativeText}
      </p>
      
      {/* Premium Interactive Call-to-Actions */}
      <div className="flex flex-wrap gap-4 mt-10">
        {heroContent.ctas.map((cta, index) => (
          <a
            key={index}
            href={cta.href}
            className={
              cta.variant === "primary"
                ? "inline-block bg-brand-blue text-white text-base font-black px-8 py-4.5 rounded-xl shadow-lg shadow-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/50 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ease-out"
                : "inline-block text-white text-base font-black px-8 py-4.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ease-out"
            }
          >
            {cta.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function HeroRight() {
  const [imgSrc, setImgSrc] = useState(heroContent.media.imgUrl);

  return (
    <div className="lg:col-span-5 relative w-full h-[440px] lg:h-[560px] flex items-center justify-center lg:justify-end">
      <div className="relative w-[88%] h-[88%] max-w-[460px]">
        
        {/* Decorative structural vector shadow border */}
        <div className="absolute top-4 left-4 w-full h-full rounded-3xl border-2 border-brand-blue/20 blur-[0.5px] animate-float pointer-events-none z-0" />
        
        {/* High-Contrast Corporate Architecture Canvas */}
        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 group z-10">
          <img 
            src={imgSrc} 
            alt={heroContent.media.altText} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            onError={() => setImgSrc(heroContent.media.fallbackUrl)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navyDark via-brand-navy/20 to-transparent opacity-90" />
        </div>

        {/* Integrated Frosted Execution-Gap Overlay Card */}
        <aside className="absolute -left-4 bottom-8 bg-[#020d2f]/40 backdrop-blur-xl border border-white/10 rounded-2xl p-5 max-w-[280px] shadow-2xl transition-all duration-300 z-20 hover:bg-[#020d2f]/60 hover:border-white/20">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
            </span>
            <p className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.15em] m-0">The Execution Gap</p>
          </div>
          <p className="text-white/90 text-sm leading-relaxed font-light m-0">
            {heroContent.executionGapText}
          </p>
        </aside>
        
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white pt-14 pb-20 md:pt-20 md:pb-28 lg:pt-24 lg:pb-32 min-h-[80vh] flex items-center">
      {/* Dynamic Background Blend Layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-transparent z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#19508f_0%,#071a45_55%,#000817_100%)] opacity-95" />
      
      {/* Animated Ambient Light Wells */}
      <div className="absolute top-1/4 right-[10%] w-[450px] h-[450px] bg-brand-blue/20 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-10 left-[5%] w-[350px] h-[350px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Core Structure Grid */}
      <div className="relative z-20 max-w-[1180px] w-[92%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <HeroLeft />
        <HeroRight />
      </div>
    </section>
  );
}