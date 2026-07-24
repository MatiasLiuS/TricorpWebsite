import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import Philosophy from './components/Philosophy';
import Experience from './components/Experience';
import Metrics from './components/Metrics';
import Industries from './components/Industries';
import ContactCTA from './components/ContactCTA'; 
import Footer from './components/Footer';

export default function App() {
  return (
    /* Change relative overflow-x-hidden to min-h-screen w-full block block-context */
    <div className="font-sans text-white bg-brand-navyDark min-h-screen w-full selection:bg-brand-blue selection:text-white antialiased">
      <Header />
      <main className="w-full block">
        <Hero />
        <WhoWeAre />
        <Philosophy />
        <Experience />
        <Metrics />
        <Industries />
        <ContactCTA /> 
      </main>
      <Footer />
    </div>
  );
}