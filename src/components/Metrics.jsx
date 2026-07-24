// src/components/Metrics.jsx
import React from 'react';
import { metricsContent, metricsData } from '../data/metricsData';

export default function Metrics() {
  return (
    /* Added id="results" for anchor routing and scroll-mt-[86px] to offset your sticky header */
    <section id="results" className="py-24 bg-brand-navyDark text-white relative overflow-hidden scroll-mt-[86px]">
      {/* Component-scoped animation tokens to ensure perfect, staggered line generation 
         and scale transitions on hover regardless of compiler bundling settings.
      */}
      <style>{`
        @keyframes customLineGlow {
          0% { transform: scaleX(0); opacity: 0; }
          100% { transform: scaleX(1); opacity: 1; }
        }
        .local-line-glow {
          transform-origin: left;
          animation: customLineGlow 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
        }
        .local-metric-block {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .local-metric-block:hover {
          transform: translateY(-4px);
        }
        .local-metric-block:hover .local-glowing-bar {
          background-color: #1498e6;
          box-shadow: 0 0 15px rgba(20, 152, 230, 0.6);
        }
      `}</style>
      
      {/* Dynamic structural blueprint layout elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1180px] w-[92%] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 max-w-[720px]">
          <p className="text-xs font-black tracking-[0.2em] text-brand-blue uppercase mb-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue animate-pulse"></span>
            {metricsContent.sectionBadge}
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            {metricsContent.mainHeading}
          </h2>
        </div>

        {/* Staggered Blueprint Technical Metric Columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {metricsData.map((m, idx) => (
            <div 
              key={idx} 
              className="local-metric-block group border-t border-white/10 pt-7 relative cursor-default"
            >
              {/* Dynamic top baseline bar that glows and scales horizontally */}
              <div 
                className="local-glowing-bar absolute top-[-1.5px] left-0 right-0 h-[3px] bg-white/20 transition-all duration-500 local-line-glow" 
                style={{ animationDelay: `${idx * 0.15}s` }} 
              />
              
              <strong className="block text-4xl lg:text-[42px] font-black tracking-tight mb-2 text-white group-hover:text-brand-blue transition-colors duration-300">
                {m.value}
              </strong>
              
              <span className="text-slate-400 font-medium text-sm lg:text-base leading-relaxed block group-hover:text-slate-200 transition-colors duration-300">
                {m.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}