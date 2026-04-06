import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import Landing from './pages/Landing';
import Portal from './pages/Portal';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import About from './pages/About';
import Contact from './pages/Contact';
import { ShieldCheck, Menu, X } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Landing /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/case-studies" element={<PageTransition><CaseStudies /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/portal" element={<PageTransition><Portal /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col pt-16 selection:bg-sapblue/30">
          <nav className="fixed top-0 w-full glass-panel z-50 border-b border-white/5">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
              <Link to="/" className="text-2xl font-bold flex items-center gap-2 group">
                <ShieldCheck className="text-sapblue group-hover:scale-110 transition-transform" size={28} />
                <span className="gradient-text font-heading">1HubSolutions</span>
              </Link>
              
              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                <Link to="/services" className="text-saplight/70 hover:text-sapblue transition-colors">Services</Link>
                <Link to="/case-studies" className="text-saplight/70 hover:text-sapblue transition-colors">Case Studies</Link>
                <Link to="/about" className="text-saplight/70 hover:text-sapblue transition-colors">About</Link>
                <Link to="/contact" className="text-saplight/70 hover:text-sapblue transition-colors">Contact</Link>
                <Link to="/portal" className="btn-secondary py-2 !px-4 text-xs">Client Portal</Link>
              </div>

              {/* Mobile Menu Toggle */}
              <button className="md:hidden text-saplight" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden bg-sapdark border-b border-white/5 overflow-hidden"
                >
                  <div className="flex flex-col p-6 gap-4 text-center">
                    <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
                    <Link to="/case-studies" onClick={() => setIsMenuOpen(false)}>Case Studies</Link>
                    <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                    <Link to="/portal" className="btn-primary" onClick={() => setIsMenuOpen(false)}>Client Portal</Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>

          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          
          <footer className="border-t border-white/5 py-12 text-center mt-12 bg-sapdarker/50">
            <div className="container mx-auto px-6">
              <div className="flex flex-col items-center gap-4">
                 <div className="flex items-center gap-2 grayscale brightness-200 opacity-50">
                    <ShieldCheck size={20} />
                    <span className="font-bold tracking-tight">1HubSolutions</span>
                 </div>
                 <p className="text-saplight/30 text-xs max-w-sm">
                   Fractional Enterprise SAP Leadership & Digital COE Architecture. Certified S/4HANA Private Edition Advisory.
                 </p>
                 <div className="flex gap-6 text-xs text-saplight/40 mt-4">
                    <Link to="/services" className="hover:text-sapblue">Services</Link>
                    <Link to="/case-studies" className="hover:text-sapblue">Case Studies</Link>
                    <Link to="/contact" className="hover:text-sapblue">Contact</Link>
                 </div>
                 <div className="mt-8 text-[10px] text-saplight/20 uppercase tracking-widest">
                    &copy; {new Date().getFullYear()} Shams Islam. All rights reserved.
                 </div>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
