// src/components/Philosophy.jsx
import React, { useState, useEffect, useRef } from 'react';
import { philosophyTenets, stagePercents, fallbackCoordinates } from '../data/philosophyData';

export default function Philosophy() {
  const [activeTenet, setActiveTenet] = useState('action');
  const [lineX, setLineX] = useState(275);
  const pathRef = useRef(null);
  const mobileScrollRef = useRef(null); // Ref to allow clicking dots to scroll cards
  const keys = Object.keys(philosophyTenets);

  // Synchronize vector graph node positions based on the active tenet state
  useEffect(() => {
    if (pathRef.current) {
      try {
        const totalLength = pathRef.current.getTotalLength();
        const percentVal = parseFloat(stagePercents[activeTenet]) / 100;
        const point = pathRef.current.getPointAtLength(totalLength * percentVal);
        
        if (point && !isNaN(point.x)) {
          setLineX(point.x);
        } else {
          setLineX(fallbackCoordinates[activeTenet]);
        }
      } catch (e) {
        setLineX(fallbackCoordinates[activeTenet]);
      }
    }
  }, [activeTenet]);

  // Track horizontal scrolling on mobile to update the single graph view below it
  const handleMobileScroll = (e) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.offsetWidth;
    
    // Detect which card is snapped into view and update state
    const index = Math.round(scrollLeft / cardWidth);
    if (keys[index] && keys[index] !== activeTenet) {
      setActiveTenet(keys[index]);
    }
  };

  // Allow users to tap a pagination dot to scroll smoothly to that specific card
  const handleDotClick = (index) => {
    if (mobileScrollRef.current) {
      const cardWidth = mobileScrollRef.current.offsetWidth;
      mobileScrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setActiveTenet(keys[index]);
    }
  };

  return (
    <section id="philosophy" className="py-24 bg-transparent text-white scroll-mt-[86px] overflow-hidden relative">
      <style>{`
        @keyframes philosophyScanline {
          0% { transform: translateY(-100%); opacity: 0; }
          5% { opacity: 0.12; }
          95% { opacity: 0.12; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        @keyframes philosophyDrawCurve {
          to { stroke-dashoffset: 0; }
        }
        @keyframes philosophyPulseGlow {
          0%, 100% { opacity: 0.4; r: 10px; }
          50% { opacity: 0.8; r: 15px; }
        }
        .local-scan-slow {
          animation: philosophyScanline 8s cubic-bezier(0.4, 0, 0.2, 1) infinite !important;
        }
        .local-draw-curve {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: philosophyDrawCurve 2s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
        }
        .local-pulse-glow {
          animation: philosophyPulseGlow 3s ease-in-out infinite !important;
        }
        .local-tracker-circle {
          offset-path: path("M 10,145 Q 100,105 180,75 T 390,15");
          offset-rotate: 0deg;
          transition: offset-distance 0.8s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none opacity-40" />

      <div className="relative z-10 max-w-[1180px] w-[92%] mx-auto">
        
        {/* Section Header */}
        <div className="max-w-[720px] mb-12 md:mb-20">
          <p className="text-xs font-black tracking-[0.2em] text-brand-blue uppercase mb-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue animate-pulse"></span>
            Our Philosophy
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            Ideas create possibilities.<br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Implementation creates value.
            </span>
          </h2>
          <p className="text-slate-400 text-sm md:text-[17px] leading-relaxed m-0">
            Select or swipe through our guiding principles to see how they actively accelerate operational momentum along the Value Realization Curve™.
          </p>
        </div>

        {/* UNIFIED INTERACTIVE GRID SYSTEM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT SIDE: DESKTOP COLUMN / MOBILE HORIZONTAL SWIPE CARDS */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Mobile View Wrapper: Swipable Row Track */}
            <div className="block md:hidden w-full mb-6">
              <div 
                ref={mobileScrollRef}
                onScroll={handleMobileScroll}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 w-full"
              >
                {keys.map((key) => {
                  const item = philosophyTenets[key];
                  return (
                    <div 
                      key={key} 
                      className="w-full shrink-0 snap-center bg-white/[0.02] border border-white/10 rounded-2xl p-6 shadow-xl"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-mono font-bold text-brand-blue bg-brand-blue/10 px-2.5 py-1 rounded-md">
                          {item.id}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white tracking-tight mb-1">{item.title}</h3>
                      <p className="text-xs text-brand-blue font-semibold tracking-wide uppercase mb-3.5">{item.subtitle}</p>
                      <p className="text-slate-400 text-xs leading-relaxed m-0">{item.desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* High-End Mobile Swiper Pagination Dots */}
              <div className="flex items-center justify-center gap-2 mt-4">
                {keys.map((key, index) => {
                  const isActive = activeTenet === key;
                  return (
                    <button
                      key={key}
                      onClick={() => handleDotClick(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        isActive 
                          ? 'w-7 bg-brand-blue' 
                          : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  );
                })}
              </div>
            </div>

            {/* Desktop View: Interactive List Button Stacks */}
            <div className="hidden md:flex flex-col gap-4 w-full">
              {keys.map((key) => {
                const item = philosophyTenets[key];
                const isActive = activeTenet === key;
                return (
                  <button
                    key={key}
                    onMouseEnter={() => setActiveTenet(key)}
                    onClick={() => setActiveTenet(key)}
                    className={`w-full text-left p-6 lg:p-8 rounded-2xl border transition-all duration-500 relative overflow-hidden group ${
                      isActive 
                        ? 'bg-white/[0.03] border-white/10 shadow-xl' 
                        : 'bg-transparent border-white/5 hover:border-white/10'
                    }`}
                  >
                    {isActive && <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-blue" />}
                    <div className="flex gap-6 items-start relative z-10">
                      <span className={`text-sm font-mono font-bold tracking-widest ${isActive ? 'text-brand-blue' : 'text-slate-600 group-hover:text-slate-400'}`}>
                        {item.id}
                      </span>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold tracking-tight mb-1 text-white">{item.title}</h3>
                        <p className={`text-xs font-semibold tracking-wider uppercase mb-3.5 ${isActive ? 'text-brand-blue/90' : 'text-slate-500'}`}>{item.subtitle}</p>
                        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isActive ? 'max-h-[160px] opacity-100' : 'max-h-0 opacity-0'}`}>
                          <p className="text-slate-400 text-sm leading-relaxed m-0 pt-1">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>

          {/* RIGHT SIDE: THE SINGLE TELEMETRY GRAPH CONSOLE (Stays locked underneath cards on mobile) */}
          <div className="lg:col-span-5 w-full flex flex-col justify-stretch">
            <div className="w-full h-full bg-[#020d2f]/35 backdrop-blur-xl rounded-3xl border border-white/10 p-6 md:p-7 shadow-2xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/5 via-transparent to-brand-blue/5 h-[200%] pointer-events-none local-scan-slow z-0" />
              
              <div>
                {/* Header Context */}
                <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div>
                    <span className="text-[9px] font-bold text-brand-blue uppercase tracking-widest block mb-1">Impact Diagnostics Console</span>
                    <h4 className="text-white font-bold text-sm md:text-base m-0">The Value Realization Curve™</h4>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 bg-white/5 border border-white/10 rounded px-2 py-0.5">
                    REF-{philosophyTenets[activeTenet].id}
                  </span>
                </div>

                {/* SVG Visual Plotter */}
                <div className="relative z-10 w-full h-[140px] md:h-[160px] mb-6 flex items-end">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 400 160" preserveAspectRatio="none">
                    <path d="M 10,145 Q 100,90 180,100 T 390,150" fill="none" stroke="#334155" strokeWidth="2.5" strokeDasharray="6 4" />
                    <path ref={pathRef} d="M 10,145 Q 100,105 180,75 T 390,15" fill="none" stroke="#1498e6" strokeWidth="3.5" className="local-draw-curve" />
                    <line x1={lineX} y1="5" x2={lineX} y2="155" stroke="#1498e6" strokeWidth="1.5" strokeOpacity="0.25" />
                    <circle cx="0" cy="0" r="6" fill="#1498e6" className="local-tracker-circle" style={{ offsetDistance: stagePercents[activeTenet] }} />
                    <circle cx="0" cy="0" r="12" fill="none" stroke="#1498e6" strokeWidth="1.5" className="local-tracker-circle local-pulse-glow" style={{ offsetDistance: stagePercents[activeTenet] }} />
                  </svg>
                  <div className="absolute left-1.5 bottom-1 text-[8px] text-slate-500 font-bold uppercase tracking-wider">Concept</div>
                  <div className="absolute right-1.5 -top-2 text-[8px] text-brand-blue font-black uppercase tracking-wider">Market Value</div>
                </div>

                {/* Shared Output Readout Panel */}
                <div className="relative z-10 bg-[#000817]/60 border border-white/5 rounded-2xl p-4.5 min-h-[145px] flex flex-col justify-between">
                  <div>
                    <h5 className="text-white font-bold text-sm mb-1.5 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-blue animate-pulse"></span>
                      {philosophyTenets[activeTenet].stageLabel}
                    </h5>
                    <p className="text-slate-400 text-xs md:text-[13px] leading-relaxed m-0">
                      {philosophyTenets[activeTenet].subtitle} — focused directly on maximizing organizational momentum.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-3.5 mt-3">
                    <div>
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block mb-0.5">Tricorp Velocity</span>
                      <span className="text-brand-blue text-lg md:text-xl font-black">{philosophyTenets[activeTenet].tricorpVelocity}%</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block mb-0.5">{philosophyTenets[activeTenet].metricTitle}</span>
                      <span className="text-emerald-400 text-lg md:text-xl font-bold">{philosophyTenets[activeTenet].metricValue}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shared Ribbon Status bar */}
              <div className="relative z-10 bg-brand-blue/5 border border-brand-blue/15 rounded-xl px-4 py-3 mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-mono text-slate-300 tracking-wide uppercase">
                    Status: {philosophyTenets[activeTenet].statusLabel}
                  </span>
                </div>
                <span className="text-[9px] font-mono text-brand-blue/60 font-black uppercase">Active</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}