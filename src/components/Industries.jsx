// src/components/Industries.jsx
import React from 'react';
import { industriesContent, capabilities, industriesList } from '../data/industriesData';

function IndustryIcon({ iconType, name }) {
  const baseClasses = "w-5 h-5 group-hover:scale-110 transition-transform duration-300 select-none shrink-0 object-contain";
  
  if (iconType) {
    return (
      <img 
        src={`/assets/icons/${iconType}.svg`} 
        className={baseClasses} 
        alt={`${name} Icon`} 
      />
    );
  }

  return (
    <svg className="w-5 h-5 text-brand-blue shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg 
      className="w-3 h-3 inline-block ml-1 -mt-0.5 text-brand-blue opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor" 
      strokeWidth="2.5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

export default function Industries() {
  return (
    <section id="value" className="py-24 bg-white scroll-mt-[86px] overflow-hidden">
      <style>{`
        .local-capability-card {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .local-capability-card:hover {
          transform: translateY(-4px);
          border-color: rgba(20, 152, 230, 0.3);
          box-shadow: 0 16px 36px rgba(2, 13, 47, 0.05);
        }
        .local-capability-card:hover .local-accent-indicator {
          transform: scaleY(1);
          opacity: 1;
        }
        .local-industry-badge {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .local-industry-badge:hover {
          transform: translateY(-2px);
          border-color: rgba(20, 152, 230, 0.3);
          background-color: #f0f9ff;
          box-shadow: 0 8px 20px rgba(20, 152, 230, 0.05);
        }
      `}</style>

      <div className="max-w-[1180px] w-[92%] mx-auto">
        
        {/* Master Section Header */}
        <div className="max-w-[720px] mb-10">
          <p className="text-xs font-black tracking-[0.2em] text-brand-blue uppercase mb-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue animate-pulse"></span>
            {industriesContent.sectionBadge}
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-brand-navy leading-tight">
            {industriesContent.mainHeading}
          </h2>
        </div>

        {/* Master Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Block: Capabilities Cards Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-full">
              {capabilities.map((item, idx) => (
                <article 
                  key={idx} 
                  className="local-capability-card bg-white border border-slate-200/80 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between group h-full cursor-default"
                >
                  <div className="local-accent-indicator absolute left-0 top-0 bottom-0 w-[4px] bg-brand-blue scale-y-0 opacity-0 transition-all duration-300 origin-bottom z-10" />
                  
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono font-bold text-slate-300 group-hover:text-brand-blue transition-colors duration-300">
                        {item.id}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold tracking-tight mb-2 text-brand-navy group-hover:text-brand-blue transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-brand-gray m-0 text-xs leading-relaxed font-normal group-hover:text-slate-700 transition-colors duration-300">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right Block: Industries Sectors Sidebar Card */}
          <div className="lg:col-span-4">
            <div className="bg-brand-lightBg/60 border border-slate-200/60 rounded-3xl p-6 md:p-7 shadow-[0_12px_40px_rgba(2,13,47,0.02)] h-full flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-black tracking-[0.15em] text-brand-blue uppercase mb-2 block">
                  {industriesContent.sectorsHeading.badge}
                </p>
                <h4 className="text-lg font-bold text-brand-navy mb-5 tracking-tight">
                  {industriesContent.sectorsHeading.title}
                </h4>
                
                {/* Sector Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  {industriesList.map((ind, idx) => {
                    const hasLink = Boolean(ind.link);

                    const baseClasses = "local-industry-badge bg-white border border-slate-200/80 rounded-xl px-3 py-2.5 flex items-center gap-2.5 group";

                    if (hasLink) {
                      return (
                        <a 
                          key={idx} 
                          href={ind.link}
                          target={ind.link.startsWith('http') ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          className={`${baseClasses} cursor-pointer border-brand-blue/30 shadow-sm`}
                        >
                          <IndustryIcon iconType={ind.iconType} name={ind.name} />
                          <span className="font-bold text-brand-blue text-[12px] sm:text-[13px] tracking-tight group-hover:underline leading-tight">
                            {ind.name}
                            <ExternalLinkIcon />
                          </span>
                        </a>
                      );
                    }

                    return (
                      <div 
                        key={idx} 
                        className={`${baseClasses} cursor-default`}
                      >
                        <IndustryIcon iconType={ind.iconType} name={ind.name} />
                        <span className="font-bold text-brand-navy text-[12px] sm:text-[13px] tracking-tight group-hover:text-brand-blue transition-colors duration-300 leading-tight">
                          {ind.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="border-t border-slate-200/60 pt-[18px] mt-6">
                <p className="text-[11px] leading-relaxed text-brand-gray m-0 font-normal">
                  {industriesContent.footerNarrative}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}