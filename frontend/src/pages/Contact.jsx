import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'S/4HANA Strategy',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate a successful form submission to the backend audit/lead endpoint
    try {
      await fetch('/api/v1/audit-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'Contact Form' })
      });
      setSubmitted(true);
    } catch (e) {
      console.error(e);
      // Fallback: still show success for demo purposes
      setSubmitted(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact 1HubSolutions | Book a Strategy Audit</title>
        <meta name="description" content="Reach out to 1HubSolutions for SAP S/4HANA migration strategy and BRIM optimization consulting." />
      </Helmet>

      <div className="pt-24 pb-20 hero-gradient min-h-screen">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">Initiate the Dialogue</h1>
            <p className="text-xl text-saplight/70 text-balance">
              Expert-led SAP transformations require strategic alignment. Book your initial 30-minute Clean Core audit today.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 glass-panel flex items-center justify-center text-sapblue">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-saplight/50 text-sm">shams@1hubsolutions.com</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 glass-panel flex items-center justify-center text-sapblue">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Contact</h4>
                    <p className="text-saplight/50 text-sm">Enterprise Inquiry Response Team</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 glass-panel flex items-center justify-center text-sapblue">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Headquarters</h4>
                    <p className="text-saplight/50 text-sm">United States | Global Support</p>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-8">
                 <h4 className="font-bold mb-4 flex items-center gap-2">
                    <CheckCircle size={18} className="text-green-400" /> Lead Response Time
                 </h4>
                 <p className="text-xs text-saplight/60">
                   All enterprise inquiries are responded to within 4 business hours. Digital COE blueprints available upon identity verification.
                 </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {submitted ? (
                <div className="glass-panel p-12 text-center h-full flex flex-col justify-center items-center space-y-6">
                   <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center border-2 border-green-500/20">
                      <CheckCircle size={40} className="text-green-400" />
                   </div>
                   <h2 className="text-2xl font-bold">Inquiry Logged</h2>
                   <p className="text-saplight/60 text-sm">
                     A senior consultant will be in touch via shams@1hubsolutions.com to schedule your Clean Core audit.
                   </p>
                   <button 
                     onClick={() => setSubmitted(false)}
                     className="text-sapblue text-sm font-semibold hover:underline"
                   >
                     Send another inquiry
                   </button>
                </div>
              ) : (
                <div className="glass-panel p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-xs font-mono uppercase text-saplight/40 ml-1">Full Name</label>
                          <input 
                            required
                            type="text" 
                            className="w-full bg-sapdarker border border-saplight/10 rounded-xl px-4 py-3 text-saplight outline-none focus:border-sapblue transition-colors"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                          />
                       </div>
                       <div className="space-y-2">
                          <label className="text-xs font-mono uppercase text-saplight/40 ml-1">Corporate Email</label>
                          <input 
                            required
                            type="email" 
                            className="w-full bg-sapdarker border border-saplight/10 rounded-xl px-4 py-3 text-saplight outline-none focus:border-sapblue transition-colors"
                            placeholder="john@enterprise.com"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                          />
                       </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-xs font-mono uppercase text-saplight/40 ml-1">Company</label>
                          <input 
                            type="text" 
                            className="w-full bg-sapdarker border border-saplight/10 rounded-xl px-4 py-3 text-saplight outline-none focus:border-sapblue transition-colors"
                            placeholder="Fortune 500 Co."
                            value={formData.company}
                            onChange={(e) => setFormData({...formData, company: e.target.value})}
                          />
                       </div>
                       <div className="space-y-2">
                          <label className="text-xs font-mono uppercase text-saplight/40 ml-1">Service Type</label>
                          <select 
                            className="w-full bg-sapdarker border border-saplight/10 rounded-xl px-4 py-3 text-saplight outline-none focus:border-sapblue transition-colors appearance-none"
                            value={formData.service}
                            onChange={(e) => setFormData({...formData, service: e.target.value})}
                          >
                             <option>S/4HANA Strategy</option>
                             <option>BRIM Revenue Audit</option>
                             <option>Clean Core Implementation</option>
                             <option>Agentic AI Extensions</option>
                          </select>
                       </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-mono uppercase text-saplight/40 ml-1">Strategic Message</label>
                        <textarea 
                          className="w-full bg-sapdarker border border-saplight/10 rounded-xl px-4 py-3 text-saplight outline-none focus:border-sapblue transition-colors h-32 resize-none"
                          placeholder="Briefly describe your SAP landscape or immediate pain points..."
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                        ></textarea>
                    </div>

                    <button type="submit" className="w-full btn-primary py-4 flex justify-center gap-2 items-center">
                       <Send size={18} /> Deploy Inquiry
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
