import React from 'react';
import { ChevronRight, Award, Shield, Cpu, Activity } from 'lucide-react';
import RevenueCalculator from '../components/RevenueCalculator';

const Landing = () => {
  return (
    <div className="flex flex-col gap-16 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mt-12 text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-saplight to-sapblue text-transparent bg-clip-text animate-pulse">
          Enterprise SAP Leadership.<br/>Fractionally Deployed.
        </h1>
        <p className="text-lg md:text-xl text-saplight/80 mb-10">
          High-trust, high-performance platform for AI-Driven S/4HANA Transformations and BRIM Revenue Optimization.
        </p>
        <button className="btn-primary text-lg flex items-center gap-2 mx-auto">
          Request a Clean Core Assessment <ChevronRight size={20} />
        </button>
      </section>

      {/* About Me Section */}
      <section className="container mx-auto px-6 max-w-5xl">
        <div className="glass-panel p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2"><Award className="text-sapblue" /> The 20-Year Narrative</h2>
              <p className="text-saplight/80 mb-4">
                From managing Lucent's global supply chain to orchestrating Avaya's billion-dollar RAR migration, Shams Islam brings unparalleled fractional leadership to complex SAP landscapes.
              </p>
              <p className="text-saplight/80 mb-6">
                Specialized in establishing Digital COEs supporting 9,000+ users, seamlessly managing global GSIs, and driving "Clean Core" methodologies.
              </p>
              <div className="flex gap-4">
                <span className="px-3 py-1 bg-saplight/5 rounded-full text-sm border border-sapblue/30 text-nowrap flex items-center gap-2">
                  <Shield size={16} /> E_S4CPE_2405 Certified
                </span>
                <span className="px-3 py-1 bg-saplight/5 rounded-full text-sm border border-sapblue/30 text-nowrap flex items-center gap-2">
                  <Shield size={16} /> GSA Public Trust clearance
                </span>
              </div>
            </div>
            <div className="bg-sapdarker rounded-xl p-8 border border-saplight/5 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-sapblue/10 blur-3xl rounded-full"></div>
               <h3 className="text-xl font-bold mb-4 text-sapblue">Advisory-as-a-Service</h3>
               <ul className="space-y-3">
                 <li className="flex gap-2">
                    <Activity className="text-green-400 mt-1" size={18} />
                    <span>S/4HANA Private Edition Strategy</span>
                 </li>
                 <li className="flex gap-2">
                    <Activity className="text-green-400 mt-1" size={18} />
                    <span>Revenue Leakage Prevention (ASC 606)</span>
                 </li>
                 <li className="flex gap-2">
                    <Activity className="text-green-400 mt-1" size={18} />
                    <span>Managing GSIs & Vendor Ecosystems</span>
                 </li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* S/4HANA & BRIM Strategy / Revenue Calculator */}
      <section className="container mx-auto px-6 max-w-5xl">
         <h2 className="text-3xl font-bold mb-8 text-center">Revenue Leakage Prevention</h2>
         <RevenueCalculator />
      </section>

      {/* The AI-Ready Clean Core */}
      <section className="container mx-auto px-6 max-w-5xl mb-12">
        <div className="glass-panel p-8 text-center">
           <Cpu size={48} className="mx-auto text-sapblue mb-6" />
           <h2 className="text-3xl font-bold mb-4">The AI-Ready Clean Core</h2>
           <p className="text-saplight/70 max-w-2xl mx-auto mb-8">
             Transition from Legacy Z-Code to Agentic Extensions. Leveraging Model Context Protocols (MCPs) to securely ground LLMs in private enterprise data for unprecedented insights and intelligent automation without compromising security.
           </p>
           <button className="btn-secondary text-lg flex items-center gap-2 mx-auto">
             Learn About AI Extensions <ChevronRight size={20} />
           </button>
        </div>
      </section>

    </div>
  );
};

export default Landing;
