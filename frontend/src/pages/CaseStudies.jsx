import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BarChart3, Globe, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } }
  };

  const cases = [
    {
      client: "Avaya",
      title: "Billion-Dollar Revenue Recognition Migration",
      challenge: "Coordinating a complex SAP RAR (Revenue Accounting and Reporting) migration while maintaining ASC 606 compliance during a global cloud transition.",
      solution: "Developed an automated clean core reconciliation engine and orchestrated cross-functional teams to reconcile 1B+ in legacy contracts.",
      results: ["100% Compliance achieved", "Reduced reconciliation cycle by 40%", "Successful Global Cloud Go-Live"]
    },
    {
      client: "Lucent Technologies",
      title: "Global Supply Chain Orchestration",
      challenge: "Fragmented procurement processes across multiple geopolitical regions causing inventory bloat and shipping delays.",
      solution: "Architected a unified SCM blueprint on SAP, integrating legacy ERP data into a single global instance with real-time analytics.",
      results: ["25% reduction in inventory holding cost", "Cross-regional transparency", "9,000+ Global users supported"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Portfolio & Case Studies | 1HubSolutions</title>
        <meta name="description" content="Read about our successful SAP transformations for global leaders like Avaya and Lucent." />
      </Helmet>

      <div className="pt-24 pb-20 hero-gradient min-h-screen">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">Metrics-First Results</h1>
            <p className="text-xl text-saplight/70 max-w-2xl mx-auto">
              Our 20-year narrative is defined by complex problem solving and measurable ROI for the world's most recognizable brands.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {cases.map((cs, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="glass-panel overflow-hidden"
              >
                <div className="grid md:grid-cols-12 gap-0">
                  <div className="md:col-span-8 p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="px-3 py-1 rounded-full bg-sapblue/10 text-sapblue text-xs font-bold uppercase tracking-wider">
                        Enterprise Transformation
                      </div>
                      <span className="text-sapblue font-bold">{cs.client}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">{cs.title}</h2>
                    
                    <div className="space-y-8">
                       <div>
                         <h4 className="text-sapblue font-semibold uppercase text-xs mb-2 flex items-center gap-2">
                           <TrendingUp size={14} /> The Challenge
                         </h4>
                         <p className="text-saplight/70">{cs.challenge}</p>
                       </div>
                       <div>
                         <h4 className="text-sapblue font-semibold uppercase text-xs mb-2 flex items-center gap-2">
                           <Globe size={14} /> Our Approach
                         </h4>
                         <p className="text-saplight/70">{cs.solution}</p>
                       </div>
                    </div>
                  </div>

                  <div className="md:col-span-4 bg-sapblue/5 border-l border-saplight/5 p-8 md:p-12 flex flex-col justify-center">
                    <h4 className="text-saplight font-bold mb-6 flex items-center gap-2">
                      <BarChart3 size={18} className="text-sapblue" /> Key Outcomes
                    </h4>
                    <ul className="space-y-4">
                      {cs.results.map((result, rIdx) => (
                        <li key={rIdx} className="flex gap-3 items-start">
                          <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={18} />
                          <span className="text-sm font-medium text-saplight/80">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 p-12 glass-panel-accent text-center mb-24"
          >
            <h3 className="text-2xl font-bold mb-4 italic text-balance">
              "When standard solutions fail, we architect the exception."
            </h3>
            <p className="text-saplight/50 font-mono text-sm uppercase">1HubSolutions COE Philosophy</p>
          </motion.div>

          {/* New CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
             <h2 className="text-3xl font-bold mb-6">Proven Results. Surgery-Grade Implementation.</h2>
             <p className="text-saplight/60 mb-10">
               Your SAP landscape is too critical to leave to generic consulting. Let's build your Digital COE today.
             </p>
             <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group">
               Start Your Journey <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
             </Link>
          </motion.div>

        </div>
      </div>
    </>
  );
};

export default CaseStudies;
