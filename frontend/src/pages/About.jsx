import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Award, Cpu, BookOpen, ArrowRight } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <>
      <Helmet>
        <title>About 1HubSolutions | Fractional SAP Leadership</title>
        <meta name="description" content="Learn about our mission to lead SAP transformations through Digital COEs and fractional leadership." />
      </Helmet>

      <div className="pt-24 pb-20 hero-gradient min-h-screen">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">A 20-Year Narrative in SAP</h1>
            <p className="text-xl text-saplight/70 text-balance">
              1HubSolutions was founded by Shams Islam to address the void between generic consulting and high-stakes enterprise architecting.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold mb-4 drop-shadow-sm">The Fractional Advantage</h2>
              <p className="text-saplight/80 leading-relaxed">
                Modern SAP transformations (S/4HANA Private Edition, BRIM, ASC 606) do not require a permanent army of consultants; they require surgical, high-trust leadership at critical pivot points. 
              </p>
              <p className="text-saplight/80 leading-relaxed">
                By deploying at the "Center of Excellence" (COE) layer, we orchestrate global GSIs and vendor ecosystems, ensuring the client's internal team maintains control and the architectural "Clean Core" remains uncompromised.
              </p>
              <div className="flex gap-4 py-4">
                 <div className="flex flex-col items-center p-4 glass-panel-accent text-sapblue">
                    <span className="text-3xl font-black">20+</span>
                    <span className="text-xs uppercase font-mono text-saplight/50">Years</span>
                 </div>
                 <div className="flex flex-col items-center p-4 glass-panel text-saplight">
                    <span className="text-3xl font-black">1.1B+</span>
                    <span className="text-xs uppercase font-mono text-saplight/50">Project Portfolio</span>
                 </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid gap-6 grid-cols-2"
            >
               <div className="glass-panel p-6 flex flex-col items-center text-center">
                  <Shield size={32} className="text-sapblue mb-4" />
                  <h4 className="font-bold text-sm">GSA Public Trust</h4>
                  <p className="text-xs text-saplight/50 mt-1">FedRAMP Compliance Clearance</p>
               </div>
               <div className="glass-panel p-6 flex flex-col items-center text-center translate-y-8">
                  <Award size={32} className="text-sapblue mb-4" />
                  <h4 className="font-bold text-sm">E_S4CPE_2405</h4>
                  <p className="text-xs text-saplight/50 mt-1">SAP Certified Professional</p>
               </div>
               <div className="glass-panel p-6 flex flex-col items-center text-center">
                  <Cpu size={32} className="text-sapblue mb-4" />
                  <h4 className="font-bold text-sm">AI Extensions</h4>
                  <p className="text-xs text-saplight/50 mt-1">Agentic AI Grounding Specialist</p>
               </div>
               <div className="glass-panel p-6 flex flex-col items-center text-center translate-y-8">
                  <BookOpen size={32} className="text-sapblue mb-4" />
                  <h4 className="font-bold text-sm">ASC 606 Expertise</h4>
                  <p className="text-xs text-saplight/50 mt-1">Revenue Accounting Migration</p>
               </div>
            </motion.div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-panel p-12 text-center mb-24"
          >
             <h2 className="text-3xl font-bold mb-10">Our Mission</h2>
             <div className="grid md:grid-cols-3 gap-8 text-left">
                {[
                  { title: "Empowerment", desc: "Equipping client internal teams with the knowledge to maintain their own SAP landscapes." },
                  { title: "Integrity", desc: "Removing 'Black Box' consulting practices to provide transparent, multi-stop architectural blueprints." },
                  { title: "Sovereignty", desc: "Ensuring your enterprise data stays yours while leveraging private AI LLM models safely." }
                ].map((item, idx) => (
                  <motion.div key={idx} variants={itemVariants} className="space-y-3">
                    <div className="h-1 w-12 bg-sapblue"></div>
                    <h4 className="text-xl font-bold">{item.title}</h4>
                    <p className="text-saplight/60 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
             </div>
          </motion.div>

          {/* New CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
             <h2 className="text-3xl font-bold mb-6">Ready to Harden Your Core?</h2>
             <p className="text-saplight/60 mb-10">
               Whether you're planning an S/4HANA migration or need to audit your BRIM revenue recognition flow, we're here to lead.
             </p>
             <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group">
               Book a Strategy Audit <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
             </Link>
          </motion.div>

        </div>
      </div>
    </>
  );
};

export default About;
