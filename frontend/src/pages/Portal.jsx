import React, { useState } from 'react';
import { Lock, FileText, Activity, CheckCircle, Clock } from 'lucide-react';

const Portal = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-6 py-20 max-w-md">
        <div className="glass-panel p-8">
          <div className="flex flex-col items-center mb-6">
            <div className="w-16 h-16 bg-sapblue/10 rounded-full flex items-center justify-center mb-4">
              <Lock className="text-sapblue" size={32} />
            </div>
            <h2 className="text-2xl font-bold">Secure Vault Access</h2>
            <p className="text-saplight/50 text-sm mt-2">Digital COE Client Login</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input type="email" placeholder="Corporate Email" className="w-full bg-sapdark border border-saplight/10 rounded-lg px-4 py-3 text-saplight outline-none focus:border-sapblue transition-colors" required />
            </div>
            <div>
              <input type="password" placeholder="Passphrase" className="w-full bg-sapdark border border-saplight/10 rounded-lg px-4 py-3 text-saplight outline-none focus:border-sapblue transition-colors" required />
            </div>
            <button type="submit" className="w-full btn-primary py-3 flex justify-center gap-2">
              <Lock size={20} /> Access FedRAMP Vault
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12 max-w-6xl">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-saplight to-sapblue text-transparent bg-clip-text">Digital COE Portal</h1>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm border border-green-500/20">
            <CheckCircle size={16} /> Secure Session Active
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        
        {/* Secure Vault */}
        <div className="md:col-span-1 glass-panel p-6">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2"><FileText className="text-sapblue" /> Private Blueprints</h2>
          <div className="space-y-3">
             <div className="bg-sapdarker p-4 rounded-lg flex items-center justify-between hover:border-sapblue/50 border border-saplight/5 cursor-pointer transition-colors">
               <div className="flex items-center gap-3">
                 <FileText className="text-saplight/50" size={18} />
                 <span className="text-sm font-medium">S/4HANA Arch Design</span>
               </div>
               <span className="text-xs text-sapblue">PDF</span>
             </div>
             <div className="bg-sapdarker p-4 rounded-lg flex items-center justify-between hover:border-sapblue/50 border border-saplight/5 cursor-pointer transition-colors">
               <div className="flex items-center gap-3">
                 <FileText className="text-saplight/50" size={18} />
                 <span className="text-sm font-medium">BRIM Config Specs</span>
               </div>
               <span className="text-xs text-sapblue">PDF</span>
             </div>
             <div className="bg-sapdarker p-4 rounded-lg flex items-center justify-between hover:border-sapblue/50 border border-saplight/5 cursor-pointer transition-colors">
               <div className="flex items-center gap-3">
                 <FileText className="text-saplight/50" size={18} />
                 <span className="text-sm font-medium">NS2 Compliance Audit</span>
               </div>
               <span className="text-xs text-red-400">RESTRICTED</span>
             </div>
          </div>
        </div>

        {/* Cutover Tracker */}
        <div className="md:col-span-2 glass-panel p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2"><Activity className="text-sapblue" /> Cutover Tracker</h2>
            <span className="text-xs font-mono text-saplight/50 flex items-center gap-1"><Clock size={14}/> LIVE STATUS</span>
          </div>

          <div className="relative border-l-2 border-saplight/10 ml-4 space-y-6 pb-4">
            
            <div className="relative pl-6">
              <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-[9px] top-1 border-4 border-sapdark"></div>
              <div className="bg-sapdarker border border-green-500/20 p-4 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-saplight">Legacy DB Snapshot</h3>
                  <span className="text-xs text-green-400 font-mono">COMPLETED 11:20 Z</span>
                </div>
                <p className="text-xs text-saplight/60">Data hardened. Fallback ready.</p>
              </div>
            </div>

            <div className="relative pl-6">
              <div className="absolute w-4 h-4 bg-sapblue rounded-full -left-[9px] top-1 border-4 border-sapdark animate-pulse"></div>
              <div className="bg-sapdarker border border-sapblue/30 p-4 rounded-lg shadow-[0_0_15px_rgba(10,110,209,0.15)]">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-sapblue">Migration to S/4HANA Clean Core</h3>
                  <span className="text-xs text-sapblue font-mono">IN PROGRESS 68%</span>
                </div>
                <p className="text-xs text-saplight/60 mb-3">Syncing custom Z-Codes to AI Agents. No revenue downtime observed.</p>
                <div className="w-full bg-saplight/10 rounded-full h-1.5">
                  <div className="bg-sapblue h-1.5 rounded-full w-[68%]"></div>
                </div>
              </div>
            </div>

            <div className="relative pl-6">
              <div className="absolute w-4 h-4 bg-saplight/20 rounded-full -left-[9px] top-1 border-4 border-sapdark"></div>
              <div className="bg-sapdarker border border-saplight/5 p-4 rounded-lg opacity-60">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-saplight">BRIM ASC 606 Stabilization</h3>
                  <span className="text-xs text-saplight/50 font-mono">PENDING</span>
                </div>
                <p className="text-xs text-saplight/60">Waiting for Core Migration to complete.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Portal;
