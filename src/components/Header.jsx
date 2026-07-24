// src/components/Header.jsx
import React, { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-navy/85 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-[1180px] w-[92%] mx-auto min-h-[86px] flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="block w-[190px] hover:opacity-95 transition-opacity duration-300">
          <img src="/assets/tricorp-horizontal-transparent.png" alt="Tricorp Logo" className="w-full h-auto" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-[28px]">
          {['Who We Are', 'Philosophy', 'Experience', 'Results', 'Value'].map((text) => {
            const anchorId = text.toLowerCase().replace(/\s+/g, '');
            return (
              <a 
                key={text}
                href={`#${anchorId}`} 
                className="text-white text-[13.5px] font-medium tracking-wide opacity-80 hover:opacity-100 transition-all duration-300 relative py-2 group"
              >
                {text}
                {/* Sleek Underline Scaling Track */}
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-brand-blue transition-all duration-300 transform -translate-x-1/2 group-hover:w-full" />
              </a>
            );
          })}
          
          {/* Enhanced CTA Contact Pill */}
          <a 
            href="#contact" 
            className="text-white text-[13px] font-bold tracking-wide border border-white/20 rounded-full px-5 py-2 bg-white/[0.03] hover:bg-brand-blue hover:border-brand-blue hover:shadow-[0_0_20px_rgba(20,152,230,0.3)] transition-all duration-300"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-white p-2 focus:outline-none relative group"
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between items-end relative overflow-hidden">
            {/* Custom high-end multi-segment vector lines */}
            <span className={`h-[2px] bg-white rounded-full transition-all duration-300 transform ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
            <span className={`h-[2px] bg-white rounded-full transition-all duration-200 ${isOpen ? 'w-0 opacity-0' : 'w-4'}`} />
            <span className={`h-[2px] bg-white rounded-full transition-all duration-300 transform ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown with Smooth Slide & Blur Context */}
      <div 
        className={`md:hidden absolute top-[86px] left-0 w-full bg-brand-navy/98 backdrop-blur-lg border-b border-white/10 transition-all duration-400 ease-in-out origin-top ${
          isOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'
        }`}
      >
        <div className="px-[5%] py-6 flex flex-col gap-4.5">
          {['Who We Are', 'Philosophy', 'Experience', 'Results', 'Value'].map((text) => {
            const anchorId = text.toLowerCase().replace(/\s+/g, '');
            return (
              <a 
                key={text}
                href={`#${anchorId}`} 
                onClick={() => setIsOpen(false)} 
                className="text-white text-sm font-medium tracking-wide py-1.5 opacity-80 hover:opacity-100 hover:text-brand-blue transition-all duration-200"
              >
                {text}
              </a>
            );
          })}
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)} 
            className="text-white text-sm font-bold text-center border border-brand-blue rounded-full py-2.5 bg-brand-blue hover:bg-brand-blue/90 shadow-md mt-2"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}