import React, { useState } from 'react';
import { DollarSign, TrendingUp, AlertTriangle } from 'lucide-react';

const RevenueCalculator = () => {
  const [revenue, setRevenue] = useState(500); // in millions
  
  // Typical BRIM leakage is 1-3% of revenue, optimized recovery target
  const recoveryEstimate = (revenue * 0.015).toFixed(2);

  return (
    <div className="bg-sapdarker border border-sapblue/20 rounded-2xl p-8 relative overflow-hidden shadow-2xl">
      <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div>
           <h3 className="text-2xl font-bold text-sapblue mb-4">Interactive Recovery Estimator</h3>
           <p className="text-saplight/80 mb-6 text-sm">
             Complex billing ecosystems (ASC 606) often leak 1-3% of ARR. 
             Adjust your annual revenue below to see your potential recovery impact.
             <br/><br/>
             <i className="text-xs text-saplight/50">Based on historic performance, including a localized $2M recovery at T-Mobile.</i>
           </p>
           
           <div className="mb-6">
             <label className="block text-sm mb-2 font-medium">Annual Revenue Managed (Millions USD)</label>
             <input 
               type="range" 
               min="50" 
               max="2000" 
               value={revenue} 
               onChange={(e) => setRevenue(e.target.value)} 
               className="w-full accent-sapblue h-2 bg-saplight/10 rounded-lg appearance-none cursor-pointer"
             />
             <div className="flex justify-between text-xs text-saplight/50 mt-2">
                <span>$50M</span>
                <span className="font-bold text-saplight">${revenue}M</span>
                <span>$2B</span>
             </div>
           </div>
        </div>

        <div className="glass-panel p-6 flex flex-col items-center justify-center border-green-500/30">
           <AlertTriangle className="text-yellow-500 mb-2" size={24} />
           <span className="text-sm font-medium mb-2 text-saplight/70 uppercase tracking-wide">Estimated Annual Leakage Recovery</span>
           <div className="text-5xl font-black text-green-400 mb-2 flex items-center">
             <DollarSign size={40} />
             {recoveryEstimate}M
           </div>
           <span className="text-xs bg-green-500/10 text-green-400 px-3 py-1 rounded-full flex items-center gap-1 mt-2">
              <TrendingUp size={14} /> Optimization Target unlocked
           </span>
        </div>
      </div>
    </div>
  );
};

export default RevenueCalculator;
