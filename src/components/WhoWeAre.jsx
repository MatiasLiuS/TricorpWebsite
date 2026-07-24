import React, { useState } from 'react';
import { whoWeAreContent } from '../data/whoWeAreData';

export default function WhoWeAre() {
  const [imgSrc, setImgSrc] = useState(whoWeAreContent.media.imgUrl);

  return (
    <section id="whoweare" className="py-24 bg-white scroll-mt-[86px] overflow-hidden">
      {/* This local style block guarantees that the browser renders the shifting SVG dash offsets 
        with hardware-accelerated loops, preventing the lines from staying static.
      */}
      <style>{`
        @keyframes blueprintLineFlow {
          from {
            stroke-dashoffset: 24;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes blueprintDialRotation {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes blueprintNodePulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.9;
          }
          50% {
            transform: scale(1.08);
            opacity: 1;
            filter: drop-shadow(0 0 6px rgba(20, 152, 230, 0.4));
          }
        }
        .animated-flow-stream {
          stroke-dasharray: 8, 4;
          animation: blueprintLineFlow 1.2s linear infinite !important;
        }
        .animated-rotating-dial {
          transform-origin: center;
          animation: blueprintDialRotation 20s linear infinite !important;
        }
        .animated-pulsing-node {
          animation: blueprintNodePulse 3s ease-in-out infinite !important;
        }
      `}</style>

      <div className="max-w-[1180px] w-[92%] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 md:mb-20">
          
          {/* Left Side Narrative Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Section Badge */}
            <p className="text-xs font-black tracking-[0.14em] text-brand-blue uppercase mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue animate-pulse"></span>
              {whoWeAreContent.sectionBadge}
            </p>
            
            {/* Main Core Tagline */}
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-brand-navy leading-[1.1] mb-8">
              {whoWeAreContent.mainHeading}
            </h2>

            {/* Premium Editorial Left-Border Pull-Quote */}
            <div className="border-l-[3px] border-brand-blue pl-5 mb-8 py-1.5">
              <p className="text-xl md:text-2xl text-brand-navy font-semibold leading-relaxed m-0 italic">
                "{whoWeAreContent.pullQuote}"
              </p>
            </div>

            {/* Core Body Copy */}
            <div className="flex flex-col gap-5 text-brand-gray text-base md:text-[17px] leading-relaxed">
              {whoWeAreContent.narrativeParagraphs.map((para, index) => (
                <p key={index} className="m-0">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Right Side Visual Image Column */}
          <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[460px] flex items-center justify-center lg:justify-end">
            <div className="relative w-[92%] h-[92%] max-w-[400px]">
              
              {/* Decorative structural shadow frame */}
              <div className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl border-2 border-slate-100 blur-[0.5px] pointer-events-none z-0" />
              
              {/* High-Resolution Team Collaboration Image Canvas */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border border-slate-100 group z-10">
                <img 
                  src={imgSrc} 
                  alt={whoWeAreContent.media.altText} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  onError={() => setImgSrc(whoWeAreContent.media.fallbackUrl)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 via-transparent to-brand-navy/10" />
              </div>

              {/* Overlaid status badge */}
              <div className="absolute top-5 right-5 bg-brand-navy/85 backdrop-blur-md border border-white/10 rounded-full py-2 px-4 shadow-lg flex items-center gap-2.5 z-20">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
                </span>
                <span className="text-[10px] font-bold text-white uppercase tracking-[0.12em] m-0">
                  {whoWeAreContent.media.badgeText}
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Proprietary Methodology Dashboard Overlay */}
        <div className="mt-16 md:mt-24 bg-gradient-to-br from-brand-lightBg to-[#f0f7fd] border border-slate-200/80 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-[0_12px_40px_rgba(20,152,230,0.04)]">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <span className="text-[10px] font-black tracking-[0.2em] text-brand-blue uppercase bg-white/80 border border-brand-blue/20 rounded-full px-3.5 py-1 inline-block mb-4.5">
                {whoWeAreContent.methodology.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-navy mb-4 leading-tight">
                {whoWeAreContent.methodology.title}
              </h3>
              <p className="text-brand-gray text-base md:text-lg leading-relaxed m-0 font-normal">
                {whoWeAreContent.methodology.description}
              </p>
            </div>
            
            {/* Right Interactive Blueprint Diagram Column */}
            <div className="lg:col-span-5 flex items-center justify-center lg:pl-6">
              <div className="w-full max-w-[340px] bg-white border border-slate-200/60 rounded-2xl p-6 shadow-md relative overflow-hidden">
                
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                
                <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-5">
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">Calibration Engine</span>
                  <span className="text-[9px] font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded uppercase">Active</span>
                </div>

                {/* SVG Schematic Diagram */}
                <div className="h-[90px] relative flex items-center justify-between">
                  
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                    {/* Left to Center path */}
                    <path d="M 36,45 L 140,45" fill="none" stroke="#e2e8f0" strokeWidth="2" />
                    <path 
                      d="M 36,45 L 140,45" 
                      fill="none" 
                      stroke="#64748b" 
                      strokeWidth="2" 
                      className="animated-flow-stream"
                    />
                    
                    {/* Center to Right path */}
                    <path d="M 160,45 L 238,45" fill="none" stroke="#e0f2fe" strokeWidth="2" />
                    <path 
                      d="M 160,45 L 238,45" 
                      fill="none" 
                      stroke="#1498e6" 
                      strokeWidth="2" 
                      className="animated-flow-stream"
                    />
                  </svg>

                  {/* Global Methodology Node */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center text-[10px] font-black text-slate-400">
                      GLO
                    </div>
                    <span className="text-[8px] font-bold text-slate-400 uppercase mt-2 tracking-wider">Global Model</span>
                  </div>

                  {/* Operational Filter Node */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-brand-navy border-2 border-brand-blue flex items-center justify-center relative animated-pulsing-node">
                      <svg className="absolute inset-0 w-full h-full animated-rotating-dial" viewBox="0 0 40 40">
                        <circle cx="20" cy="20" r="15" fill="none" stroke="#1498e6" strokeWidth="1" strokeDasharray="6, 3" />
                      </svg>
                      <span className="text-[9px] font-black text-brand-blue relative z-10">TROP</span>
                    </div>
                    <span className="text-[8px] font-black text-brand-blue uppercase mt-2 tracking-wider">Tricorp Filter</span>
                  </div>

                  {/* Local High-Velocity Node */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-9 h-9 rounded-xl bg-brand-blue/10 border border-brand-blue/30 shadow-sm flex items-center justify-center text-[10px] font-black text-brand-blue animate-pulse">
                      LOC
                    </div>
                    <span className="text-[8px] font-bold text-brand-blue uppercase mt-2 tracking-wider">Realized Value</span>
                  </div>

                </div>

                <div className="mt-4 bg-slate-50 border border-slate-100 rounded-lg p-2.5 flex items-center justify-between">
                  <span className="text-[8.5px] font-bold text-slate-500 uppercase tracking-wider">Alignment Yield:</span>
                  <span className="text-[10px] font-black text-emerald-500 font-mono">100% Calibrated</span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}