import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ChevronRight, Award, Shield, Cpu, Activity, Check, ArrowRight } from 'lucide-react';
import RevenueCalculator from '../components/RevenueCalculator';

const Landing = () => {
  const [assessmentRequested, setAssessmentRequested] = useState(false);
  const [loading, setLoading] = useState(false);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const seoSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.1hubsolutions.com/#organization",
        "name": "1HubSolutions",
        "url": "https://www.1hubsolutions.com",
        "logo": "https://www.1hubsolutions.com/logo.png"
      },
      {
        "@type": "Person",
        "@id": "https://www.1hubsolutions.com/#shams",
        "name": "Shams Islam",
        "jobTitle": "Fractional Enterprise SAP Leader",
        "worksFor": { "@id": "https://www.1hubsolutions.com/#organization" }
      },
      {
        "@type": "Service",
        "name": "SAP S/4HANA Migration Strategy",
        "provider": { "@id": "https://www.1hubsolutions.com/#organization" },
        "description": "Expert high-performance strategy for AI-driven SAP S/4HANA Transformations and ASC 606 Revenue Leakage prevention."
      }
    ]
  };

  const handleAssessmentRequest = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/v1/audit-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source: 'Landing Page Hero' })
      });
      if (response.ok) {
        setAssessmentRequested(true);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>1HubSolutions | SAP S/4HANA Migration & BRIM Consulting Strategy</title>
        <meta name="description" content="High-trust, high-performance platform for AI-Driven S/4HANA Transformations, fractional leadership, and BRIM ASC 606 Revenue Optimization by Shams Islam." />
        <script type="application/ld+json">
          {JSON.stringify(seoSchema)}
        </script>
      </Helmet>
      
      <div className="flex flex-col gap-24 pb-20 overflow-x-hidden hero-gradient">
        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-20 pb-12 text-center max-w-5xl relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-64 bg-sapblue/10 blur-[120px] rounded-full -z-10"
          ></motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 gradient-text leading-[1.1]">
              Enterprise SAP Leadership.<br/>
              <span className="text-white/90">Fractionally Deployed.</span>
            </h1>
            <p className="text-lg md:text-2xl text-saplight/60 mb-12 max-w-3xl mx-auto text-balance font-medium">
              High-trust, high-performance platform for AI-Driven S/4HANA Transformations and BRIM Revenue Optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={handleAssessmentRequest}
                disabled={assessmentRequested || loading}
                className={`w-full sm:w-auto text-lg flex items-center justify-center gap-2 px-8 py-4 ${assessmentRequested ? 'btn-secondary text-green-400 border-green-500/30' : 'btn-primary'} transition-all`}
              >
                {loading ? 'Scheduling...' : assessmentRequested ? <><Check size={20}/> Assessment Logged</> : <><ChevronRight size={20} /> Request a Clean Core Audit</>}
              </button>
              <Link to="/services" className="w-full sm:w-auto btn-secondary px-8 py-4 flex items-center justify-center gap-2 group">
                View Methodology <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Narrative Section */}
        <section className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="glass-panel p-8 md:p-16 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-sapblue/5 blur-[100px] rounded-full"></div>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeIn}>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 flex items-center gap-3">
                  <Award className="text-sapblue" size={40} /> The 20-Year Narrative
                </h2>
                <div className="space-y-6 text-saplight/70 text-lg leading-relaxed">
                  <p>
                    From managing Lucent's global supply chain to orchestrating Avaya's billion-dollar RAR migration, Shams Islam brings unparalleled fractional leadership to complex SAP landscapes.
                  </p>
                  <p>
                    Specialized in establishing <span className="text-white font-semibold">Digital COEs</span> supporting 9,000+ users, seamlessly managing global GSIs, and driving "Clean Core" methodologies.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 mt-10">
                  <span className="px-4 py-2 bg-white/5 rounded-xl text-sm border border-white/10 flex items-center gap-2 font-semibold">
                    <Shield size={18} className="text-sapblue" /> E_S4CPE_2405 Certified
                  </span>
                  <span className="px-4 py-2 bg-white/5 rounded-xl text-sm border border-white/10 flex items-center gap-2 font-semibold">
                    <Shield size={18} className="text-sapblue" /> GSA Public Trust
                  </span>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} className="relative">
                <div className="glass-panel-accent p-8 md:p-12 relative z-10 border-white/10">
                   <h3 className="text-2xl font-bold mb-8 text-sapblue flex items-center gap-2">
                     <Activity size={24} /> Strategic Pillars
                   </h3>
                   <ul className="space-y-6">
                     {[
                       "S/4HANA Private Edition Strategy",
                       "Revenue Leakage Prevention (ASC 606)",
                       "Managing GSIs & Vendor Ecosystems",
                       "Agentic AI Extension Architecture"
                     ].map((item, i) => (
                       <li key={i} className="flex gap-4 items-start">
                         <div className="w-6 h-6 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                           <Check className="text-green-400" size={14} />
                         </div>
                         <span className="text-saplight font-medium">{item}</span>
                       </li>
                     ))}
                   </ul>
                </div>
                <div className="absolute -bottom-6 -right-6 w-full h-full border border-sapblue/20 rounded-2xl -z-10"></div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Calculator Section */}
        <section className="container mx-auto px-6 max-w-6xl">
           <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeIn}
             className="text-center mb-16"
           >
             <h2 className="text-3xl md:text-5xl font-bold mb-6">Revenue Leakage Prevention</h2>
             <p className="text-saplight/50 max-w-2xl mx-auto text-lg">
               Quantify the impact of optimized billing cycles and ASC 606 compliance on your bottom line.
             </p>
           </motion.div>
           <RevenueCalculator />
        </section>

        {/* AI Section */}
        <section className="container mx-auto px-6 max-w-5xl mb-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="glass-panel p-12 md:p-20 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sapblue to-transparent"></div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 mx-auto mb-8 text-sapblue opacity-20"
            >
              <Cpu size={96} />
            </motion.div>
            <Cpu size={48} className="mx-auto text-sapblue mb-8 relative z-10" />
            <h2 className="text-3xl md:text-5xl font-bold mb-8">The AI-Ready Clean Core</h2>
            <p className="text-saplight/70 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
              Transition from Legacy Z-Code to Agentic Extensions. Leveraging Model Context Protocols (MCPs) to securely ground LLMs in private enterprise data for unprecedented insights and intelligent automation without compromising security.
            </p>
            <Link to="/services" className="btn-secondary text-lg px-10 py-4 flex items-center gap-3 mx-auto group w-max">
              Learn About Agentic Extensions <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Landing;
