import React, { useState } from 'react';
import { DollarSign, TrendingUp, AlertTriangle } from 'lucide-react';

const RevenueCalculator = () => {
  const [revenue, setRevenue] = useState(500); // in millions
  
  // Typical BRIM leakage is 1-3% of revenue, optimized recovery target
  const recoveryEstimate = (revenue * 0.015).toFixed(2);

  return (
    <div className="bg-sapdarker border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-64 h-64 bg-sapblue/5 blur-[100px] rounded-full -z-10"></div>
      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
           <h3 className="text-3xl font-bold mb-6 gradient-text">Recovery Estimator</h3>
           <p className="text-saplight/60 mb-10 text-lg leading-relaxed">
             Complex billing ecosystems (ASC 606) often leak <span className="text-white font-semibold">1-3% of ARR</span>. 
             Adjust your annual revenue below to see your potential recovery impact.
             <br/><br/>
             <span className="text-xs font-mono uppercase tracking-widest text-saplight/30 block mt-4">
               Based on historic performance, including a localized $2M recovery.
             </span>
           </p>
           
           <div className="mb-6">
             <div className="flex justify-between items-end mb-4">
                <label className="text-sm font-semibold text-saplight/80">Annual Revenue Managed</label>
                <span className="text-2xl font-black text-sapblue">${revenue}M</span>
             </div>
             <input 
               type="range" 
               min="50" 
               max="2000" 
               value={revenue} 
               onChange={(e) => setRevenue(e.target.value)} 
               className="w-full accent-sapblue h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer hover:bg-white/20 transition-colors"
             />
             <div className="flex justify-between text-[10px] font-mono text-saplight/30 mt-4 uppercase tracking-tighter">
                <span>Min: $50M</span>
                <span>Max: $2B+</span>
             </div>
           </div>
        </div>

        <div className="glass-panel p-10 flex flex-col items-center justify-center border-green-500/20 bg-green-500/5 relative group">
           <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
           <AlertTriangle className="text-yellow-500/50 mb-4" size={28} />
           <span className="text-xs font-bold mb-3 text-saplight/40 uppercase tracking-[0.2em]">Estimated Annual Recovery</span>
           <div className="text-6xl font-black text-green-400 mb-4 flex items-center tracking-tighter">
             <DollarSign size={48} className="text-green-500/50" />
             {recoveryEstimate}M
           </div>
           <div className="flex items-center gap-2 bg-green-500/10 text-green-400 px-4 py-2 rounded-xl text-sm font-bold border border-green-500/20">
              <TrendingUp size={16} /> Optimization Target Unlocked
           </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueCalculator;
