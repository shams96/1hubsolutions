import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Landing from './pages/Landing';
import Portal from './pages/Portal';
import { ShieldCheck } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col pt-16">
        <nav className="fixed top-0 w-full glass-panel z-50 border-b border-saplight/10">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link to="/" className="text-xl font-bold flex items-center gap-2">
              <ShieldCheck className="text-sapblue" />
              <span>1HubSolutions</span>
            </Link>
            <div className="flex gap-4">
              <Link to="/portal" className="btn-secondary">Client Portal</Link>
            </div>
          </div>
        </nav>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/portal" element={<Portal />} />
          </Routes>
        </main>
        
        <footer className="border-t border-saplight/5 py-8 text-center text-saplight/50 text-sm mt-12">
          &copy; {new Date().getFullYear()} 1HubSolutions - Shams Islam. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
