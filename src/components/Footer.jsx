// src/components/Footer.jsx
import React, { useState } from 'react';
import { footerContent } from '../data/footerData';

export default function Footer() {
  const [logoValid, setLogoValid] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020d2f] text-white pt-10 pb-6 relative overflow-hidden">
      {/* Component-scoped style tag to guarantee smooth layout transitions 
        and line generation timelines across all browsers.
      */}
      <style>{`
        @keyframes footerLineDraw {
          0% { transform: scaleY(0); }
          100% { transform: scaleY(1); }
        }
        .local-line-draw {
          transform-origin: top;
          animation: footerLineDraw 1s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
        }
        .local-trust-block {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .local-trust-block:hover {
          transform: translateY(-2px);
        }
        .local-trust-block:hover .local-trust-accent {
          height: 100%;
          background-color: #1498e6;
          box-shadow: 0 0 12px rgba(20, 152, 230, 0.4);
        }
      `}</style>

      {/* Ambient background mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[200px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1180px] w-[92%] mx-auto relative z-10">
        
        {/* Top Tier: Identity & Contact Gateway */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center pb-6 border-b border-white/5">
          <div className="flex flex-col">
            <div className="mb-2 flex items-center min-h-[30px]">
              {logoValid ? (
                <img 
                  src={footerContent.logo.src} 
                  alt={footerContent.logo.alt} 
                  className="w-[140px] h-auto object-contain"
                  onError={() => setLogoValid(false)}
                />
              ) : (
                <span className="text-lg font-black tracking-tight text-white">TRICORP</span>
              )}
            </div>
            
            <p className="text-brand-blue font-bold tracking-wide text-[11px] m-0 uppercase flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue animate-pulse"></span>
              {footerContent.badgeText}
            </p>
            <p className="text-slate-400 max-w-[440px] mt-1.5 mb-0 text-[11.5px] leading-relaxed font-normal">
              {footerContent.narrativeText}
            </p>
          </div>

          {/* Contact Details Card Block */}
          <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 min-w-[220px] shadow-md backdrop-blur-sm">
            <h4 className="text-white text-[9px] font-black tracking-[0.2em] uppercase mb-2">
              {footerContent.gatewayTitle}
            </h4>
            
            <div className="flex flex-col gap-1.5">
              {footerContent.contacts.map((contact, idx) => (
                <a 
                  key={idx}
                  href={contact.href} 
                  className="group flex items-center gap-2 text-slate-300 hover:text-brand-blue transition-all duration-300 text-[11.5px]"
                >
                  <div className="w-6 h-6 rounded bg-white/5 group-hover:bg-brand-blue/15 flex items-center justify-center transition-colors">
                    {contact.type === "email" ? (
                      /* Fixed Clean Geometric Envelope Icon */
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ) : (
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    )}
                  </div>
                  {contact.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Tier: Trust Indicators & Summary */}
        <div className="py-5.5 border-b border-white/5">
          <p className="text-[9px] font-black tracking-[0.2em] text-brand-blue uppercase mb-3 flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-brand-blue"></span>
            {footerContent.trustBadge}
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {footerContent.trustMetrics.map((item, idx) => (
              <div key={idx} className="local-trust-block group pl-3 relative cursor-default">
                <div 
                  className="local-trust-accent absolute left-0 top-0 bottom-0 w-[1.5px] bg-white/10 transition-all duration-500 local-line-draw" 
                  style={{ animationDelay: `${idx * 0.1}s` }} 
                />
                
                <strong className="block text-xl font-bold tracking-tight text-white mb-0.5 group-hover:text-brand-blue transition-colors duration-300">
                  {item.value}
                </strong>
                
                <span className="text-slate-400 text-[11px] leading-relaxed block group-hover:text-slate-200 transition-colors duration-300">
                  {item.isLink ? (
                    <a 
                      href={item.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-slate-300 border-b border-brand-blue/30 hover:text-brand-blue hover:border-brand-blue transition-all duration-300 pb-0.5"
                    >
                      {item.label}
                    </a>
                  ) : (
                    item.label
                  )}
                </span>
              </div>
            ))}
          </div>

          <p className="text-slate-400 max-w-[800px] mt-4 mb-0 text-[11.5px] leading-relaxed font-normal opacity-90">
            {footerContent.footerSummary}
          </p>
        </div>

        {/* Bottom Tier: Copyright & Back to Top */}
        <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-slate-500 text-[10px]">
          <p className="m-0">
            {footerContent.copyright}
          </p>
          
          <button 
            onClick={scrollToTop} 
            className="flex items-center gap-1 text-slate-500 hover:text-brand-blue transition-all duration-300 cursor-pointer group bg-white/[0.01] border border-white/5 hover:border-brand-blue/15 rounded-full py-1 px-3 shadow"
          >
            Back to Top
            <svg className="w-2.5 h-2.5 transform group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

      </div>
    </footer>
  );
}