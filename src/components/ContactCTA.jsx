// src/components/ContactCTA.jsx
import React from 'react';

export default function ContactCTA() {
  return (
    <section id="contact" className="text-center py-24 bg-[radial-gradient(circle_at_50%_0%,#19508f_0%,#071a45_42%,#000817_100%)] text-white scroll-mt-[86px]">
      <div className="max-w-[1180px] w-[92%] mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
          Great strategies deserve great execution.
        </h2>
        
        <p className="text-[#d8e2ef] text-lg md:text-xl mb-[30px]">
          Let’s build something that creates lasting value.
        </p>
        
        <a 
          href="mailto:info@tricorp.us" 
          className="inline-block bg-brand-blue text-white text-base font-black px-5 py-3.5 rounded hover:opacity-95 transition-all duration-300 shadow-md"
        >
          info@tricorp.us
        </a>
      </div>
    </section>
  );
}