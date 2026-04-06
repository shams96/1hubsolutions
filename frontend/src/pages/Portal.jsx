import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Lock, FileText, Activity, CheckCircle, Clock } from 'lucide-react';

const Portal = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('1hub_token'));
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const [vaultData, setVaultData] = useState({ blueprints: [], tracker: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
      fetchVaultData(token);
    }
  }, [token]);

  const fetchVaultData = async (authToken) => {
    try {
      const response = await fetch('/api/v1/vault', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setVaultData(data);
      } else {
        // If unauthorized, clear token
        if (response.status === 401 || response.status === 403) {
           handleLogout();
        }
      }
    } catch (err) {
      console.error("Failed to fetch vault data", err);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      const response = await fetch('/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem('1hub_token', data.token);
        setToken(data.token);
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Network error connecting to backend');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('1hub_token');
    setToken(null);
    setIsAuthenticated(false);
    setVaultData({ blueprints: [], tracker: [] });
  };

  if (!isAuthenticated) {
    return (
      <>
      <Helmet>
        <title>Client Portal Access | 1HubSolutions</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="container mx-auto px-6 py-20 max-w-md">
        <div className="glass-panel p-8">
          <div className="flex flex-col items-center mb-6">
            <div className="w-16 h-16 bg-sapblue/10 rounded-full flex items-center justify-center mb-4">
              <Lock className="text-sapblue" size={32} />
            </div>
            <h2 className="text-2xl font-bold">Secure Vault Access</h2>
            <p className="text-saplight/50 text-sm mt-2">Digital COE Client Login</p>
          </div>
          {error && <div className="bg-red-500/20 text-red-400 p-3 rounded mb-4 text-sm">{error}</div>}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Corporate Email" 
                className="w-full bg-sapdark border border-saplight/10 rounded-lg px-4 py-3 text-saplight outline-none focus:border-sapblue transition-colors" 
                required 
              />
            </div>
            <div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Passphrase" 
                className="w-full bg-sapdark border border-saplight/10 rounded-lg px-4 py-3 text-saplight outline-none focus:border-sapblue transition-colors" 
                required 
              />
            </div>
            <button type="submit" disabled={loading} className="w-full btn-primary py-3 flex justify-center gap-2 disabled:opacity-50">
              <Lock size={20} /> {loading ? 'Authenticating...' : 'Access FedRAMP Vault'}
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-xs text-saplight/40">Demo Login: admin@1hubsolutions.com / password123</p>
          </div>
        </div>
      </div>
      </>
    );
  }

  return (
    <>
    <Helmet>
      <title>Secure COE Dashboard | 1HubSolutions</title>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
    <div className="container mx-auto px-6 py-12 max-w-6xl">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-saplight to-sapblue text-transparent bg-clip-text">Digital COE Portal</h1>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm border border-green-500/20">
            <CheckCircle size={16} /> Secure Session Active
          </div>
          <button onClick={handleLogout} className="text-sm text-saplight/50 hover:text-saplight transition-colors">
            Exit
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        
        {/* Secure Vault */}
        <div className="md:col-span-1 glass-panel p-6">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2"><FileText className="text-sapblue" /> Private Blueprints</h2>
          <div className="space-y-3">
             {vaultData.blueprints.length === 0 ? (
               <p className="text-sm text-saplight/50">Loading blueprints...</p>
             ) : (
               vaultData.blueprints.map(bp => (
                 <div key={bp.id} className="bg-sapdarker p-4 rounded-lg flex items-center justify-between hover:border-sapblue/50 border border-saplight/5 cursor-pointer transition-colors">
                   <div className="flex items-center gap-3">
                     <FileText className="text-saplight/50" size={18} />
                     <span className="text-sm font-medium">{bp.title}</span>
                   </div>
                   <span className={`text-xs ${bp.status === 'Restricted' ? 'text-red-400' : 'text-sapblue'}`}>
                     {bp.type || bp.status.toUpperCase()}
                   </span>
                 </div>
               ))
             )}
          </div>
        </div>

        {/* Cutover Tracker */}
        <div className="md:col-span-2 glass-panel p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2"><Activity className="text-sapblue" /> Cutover Tracker</h2>
            <span className="text-xs font-mono text-saplight/50 flex items-center gap-1"><Clock size={14}/> LIVE STATUS</span>
          </div>

          <div className="relative border-l-2 border-saplight/10 ml-4 space-y-6 pb-4">
            
            {vaultData.tracker.length === 0 ? (
              <p className="text-sm text-saplight/50 pl-6">Loading tracker data...</p>
            ) : (
              vaultData.tracker.map(t => {
                let statusColor = "bg-saplight/20";
                let borderColor = "border-saplight/5";
                let textClass = "text-saplight";
                let iconClass = "";
                let shadowClass = "";

                if (t.color === "green") {
                  statusColor = "bg-green-500";
                  borderColor = "border-green-500/20";
                  textClass = "text-saplight"; // keeping title bright
                  iconClass = "text-green-400";
                } else if (t.color === "blue") {
                  statusColor = "bg-sapblue animate-pulse";
                  borderColor = "border-sapblue/30";
                  textClass = "text-sapblue";
                  iconClass = "text-sapblue";
                  shadowClass = "shadow-[0_0_15px_rgba(10,110,209,0.15)]";
                }

                return (
                  <div key={t.id} className="relative pl-6">
                    <div className={`absolute w-4 h-4 ${statusColor} rounded-full -left-[9px] top-1 border-4 border-sapdark`}></div>
                    <div className={`bg-sapdarker border ${borderColor} p-4 rounded-lg flex flex-col ${shadowClass} ${t.color === 'gray' ? 'opacity-60' : ''}`}>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className={`font-bold ${textClass}`}>{t.title}</h3>
                        <span className={`text-xs ${iconClass || 'text-saplight/50'} font-mono`}>{t.status} {t.time ? t.time : ''} {t.progress ? `${t.progress}%` : ''}</span>
                      </div>
                      <p className={`text-xs ${t.color === 'blue' ? 'text-saplight/60 mb-3' : 'text-saplight/60'}`}>{t.subtext}</p>
                      
                      {t.progress && (
                        <div className="w-full bg-saplight/10 rounded-full h-1.5">
                          <div className="bg-sapblue h-1.5 rounded-full" style={{ width: `${t.progress}%` }}></div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })
            )}

          </div>
        </div>

      </div>
    </div>
    </>
  );
};

export default Portal;
