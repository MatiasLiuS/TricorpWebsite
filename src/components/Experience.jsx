// src/components/Experience.jsx
import React, { useState, useRef } from 'react';
import { experienceContent, experiences } from '../data/experienceData';

function ExperienceIcon({ type }) {
  const baseClasses = "w-6 h-6 text-brand-blue";
  
  switch (type) {
    case "building":
      return (
        <svg className={baseClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    case "users":
      return (
        <svg className={baseClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 018 0z" />
        </svg>
      );
    case "lightning":
      return (
        <svg className={baseClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case "globe":
      return (
        <svg className={baseClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const mobileScrollRef = useRef(null);

  const handleMobileScroll = (e) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.querySelector('[data-card-index]')?.offsetWidth || container.offsetWidth;
    
    const index = Math.round(scrollLeft / (cardWidth + 16));
    if (experiences[index] && index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
    if (mobileScrollRef.current) {
      const container = mobileScrollRef.current;
      const cardWidth = container.querySelector('[data-card-index]')?.offsetWidth || container.offsetWidth;
      container.scrollTo({
        left: index * (cardWidth + 16),
        behavior: 'smooth'
      });
    }
  };

  const activeCase = experiences[activeIndex];

  return (
    <section id="experience" className="py-24 bg-brand-lightBg text-brand-navy scroll-mt-[86px] overflow-hidden relative">
      <style>{`
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Blueprint background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000002_1px,transparent_1px),linear-gradient(to_bottom,#00000002_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Heading */}
      <div className="max-w-[1180px] w-[92%] mx-auto relative z-10 mb-14 md:mb-18">
        <div className="max-w-[720px]">
          <p className="text-xs font-black tracking-[0.2em] text-brand-blue uppercase mb-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue animate-pulse"></span>
            {experienceContent.sectionBadge}
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-brand-navy">
            {experienceContent.mainHeading}
          </h2>
        </div>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="block lg:hidden relative z-10 w-full mb-5">
        <div 
          ref={mobileScrollRef}
          onScroll={handleMobileScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 px-[4%] w-full"
        >
          {experiences.map((exp, idx) => (
            <div 
              key={exp.id} 
              data-card-index={idx}
              className="w-[88vw] sm:w-[500px] shrink-0 snap-start bg-white border border-slate-200/80 rounded-3xl p-6 shadow-xl min-h-[440px] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-brand-lightBlue flex items-center justify-center">
                      <ExperienceIcon type={exp.iconType} />
                    </div>
                    <div>
                      <span className="text-[8px] font-bold text-brand-blue uppercase tracking-widest block mb-0.5">Verified Case File</span>
                      <span className="text-brand-navy font-bold text-xs">{exp.tag}</span>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono font-bold text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded">
                    REF-{exp.id}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-brand-navy mb-4">
                  {exp.title}
                </h3>
                <div className="flex flex-col gap-3.5 text-brand-gray text-xs leading-relaxed">
                  {exp.paragraphs.map((para, pIdx) => (
                    <p key={pIdx} className="m-0">{para}</p>
                  ))}
                </div>
              </div>

              {/* Flexible Mobile Metric Box */}
              <div className="bg-brand-lightBg border border-slate-200/60 rounded-2xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mt-6">
                <div>
                  <span className="text-[8px] font-bold text-brand-blue uppercase tracking-widest block mb-0.5">Impact Diagnostic Metric</span>
                  <p className="text-slate-500 text-[11px] m-0">{exp.metricLabel}</p>
                </div>
                <div className="text-right whitespace-pre-line text-lg font-black text-brand-navy tracking-tight leading-snug">
                  {exp.metric}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-1.5 mt-6">
          {experiences.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === activeIndex ? 'w-6 bg-brand-blue' : 'w-1.5 bg-slate-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block max-w-[1180px] w-[92%] mx-auto relative z-10">
        <div className="grid grid-cols-12 gap-10 items-stretch">
          
          {/* Left Navigation */}
          <div className="col-span-5 flex flex-col gap-4 w-full h-full justify-between">
            {experiences.map((exp, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={exp.id}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-500 relative overflow-hidden flex flex-col justify-center flex-1 group ${
                    isActive 
                      ? 'bg-white border-brand-blue/20 shadow-[0_25px_60px_rgba(20,152,230,0.08),0_0_0_1px_rgba(20,152,230,0.2)]' 
                      : 'bg-white/60 border-slate-200/60 hover:bg-white hover:border-slate-300 shadow-[0_20px_50px_rgba(2,13,47,0.04),0_0_0_1px_rgba(20,152,230,0.05)]'
                  }`}
                >
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-blue" />
                  )}

                  <div className="flex gap-4 items-center relative z-10">
                    <span className={`text-[11px] font-black w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      isActive ? 'bg-brand-lightBlue text-brand-blue' : 'bg-slate-100 text-slate-400'
                    }`}>
                      {exp.id}
                    </span>
                    
                    <div>
                      <span className="text-[10px] font-black tracking-wider uppercase text-slate-400 block mb-0.5">
                        {exp.tag}
                      </span>
                      <h4 className={`text-base font-bold tracking-tight transition-colors duration-300 ${
                        isActive ? 'text-brand-navy' : 'text-slate-600 group-hover:text-brand-navy'
                      }`}>
                        {exp.title}
                      </h4>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Active Card */}
          <div className="col-span-7 w-full">
            <div className="bg-white border border-slate-200/80 rounded-3xl p-8 md:p-11 shadow-2xl relative overflow-hidden h-full flex flex-col justify-between min-h-[460px]">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000002_1px,transparent_1px),linear-gradient(to_bottom,#00000002_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-lightBlue flex items-center justify-center">
                      <ExperienceIcon type={activeCase.iconType} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-brand-blue uppercase tracking-widest block mb-0.5">Verified Case File</span>
                      <span className="text-brand-navy font-bold text-sm">{activeCase.tag}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 bg-slate-50 border border-slate-100 px-3 py-1 rounded-full">
                    {/* Active Phase */}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-navy mb-6">
                  {activeCase.title}
                </h3>
                
                <div className="flex flex-col gap-4 text-brand-gray text-base md:text-[16px] leading-relaxed mb-8">
                  {activeCase.paragraphs.map((para, pIdx) => (
                    <p key={pIdx} className="m-0">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Flexible Desktop Metric Box */}
              <div className="bg-brand-lightBg border border-slate-200/60 rounded-2xl p-6 flex flex-row items-center justify-between gap-4 mt-auto">
                <div>
                  <span className="text-[10px] font-black text-brand-blue uppercase tracking-widest block mb-1">Impact Diagnostic Metric</span>
                  <p className="text-slate-500 text-xs md:text-sm m-0">
                    {activeCase.metricLabel}
                  </p>
                </div>
                <div className="shrink-0 text-right whitespace-pre-line text-xl md:text-2xl font-black text-brand-navy tracking-tight leading-tight">
                  {activeCase.metric}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}