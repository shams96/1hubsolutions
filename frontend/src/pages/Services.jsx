import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Zap, Database, Layers, ArrowRight } from 'lucide-react';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const services = [
    {
      title: "S/4HANA Private Edition Strategy",
      description: "Navigating the complexity of Private Cloud deployments with a focus on risk mitigation and architectural integrity.",
      icon: <Layers className="text-sapblue" size={32} />,
      features: ["RISE with SAP Advisory", "Infrastructure Right-Sizing", "Baseline Security Audits"]
    },
    {
      title: "Clean Core Methodology",
      description: "Transitioning legacy Z-code to side-by-side extensions using SAP BTP, ensuring your core remains upgrade-ready and AI-compatible.",
      icon: <Cpu className="text-sapblue" size={32} />,
      features: ["Z-Code Debt Analysis", "BTP Extension Strategy", "AI Agent Grounding"]
    },
    {
      title: "BRIM Revenue Optimization",
      description: "Hardening your quote-to-cash cycle and ensuring ASC 606 compliance for high-volume subscription models.",
      icon: <Zap className="text-sapblue" size={32} />,
      features: ["Convergent Charging Tuning", "Revenue Leakage Audits", "RAR Migration Leadership"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>SAP Consulting Services | 1HubSolutions</title>
        <meta name="description" content="Explore our specialized SAP services including S/4HANA Strategy, Clean Core Methodology, and BRIM Revenue Optimization." />
      </Helmet>

      <div className="pt-24 pb-20 hero-gradient min-h-screen">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">Specialized Advisory</h1>
            <p className="text-xl text-saplight/70 text-balance">
              Expert-led fractional leadership for the most complex SAP landscapes. We don't just consult; we architect outcomes.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-24"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="glass-panel p-8 flex flex-col h-full"
              >
                <div className="mb-6 p-3 bg-sapblue/10 w-fit rounded-xl">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-saplight/60 mb-8 flex-grow">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-saplight/80">
                      <ShieldCheck size={16} className="text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="flex items-center gap-2 text-sapblue font-semibold hover:gap-3 transition-all group">
                  Learn More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Methodology Section */}
          <motion.div 
            id="methodology"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="glass-panel-accent p-8 md:p-16 text-center overflow-hidden relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sapblue to-transparent"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">The Deployment Framework</h2>
            
            <div className="grid md:grid-cols-4 gap-4 relative">
              {[
                { step: "01", title: "Discovery", desc: "Gap analysis and technical audit." },
                { step: "02", title: "Architecture", desc: "Clean core design and blueprinting." },
                { step: "03", title: "Execution", desc: "GSI oversight and agile sprints." },
                { step: "04", title: "Stabilization", desc: "Hardening and ROI verification." }
              ].map((step, idx) => (
                <div key={idx} className="relative z-10">
                  <div className="text-5xl font-black text-sapblue/10 mb-2">{step.step}</div>
                  <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                  <p className="text-sm text-saplight/50">{step.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Services;
