/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, Mail, MessageCircle, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-black text-white mb-8">Get In Touch</h2>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-white/70 uppercase tracking-wider">Name *</label>
                                    <input type="text" required className="w-full p-4 bg-white/10 text-white rounded-xl border border-white/20 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all placeholder:text-white/40" placeholder="Your Name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-white/70 uppercase tracking-wider">Mobile Number *</label>
                                    <input type="tel" required className="w-full p-4 bg-white/10 text-white rounded-xl border border-white/20 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all placeholder:text-white/40" placeholder="+91 ..." />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-white/70 uppercase tracking-wider">Email (Optional)</label>
                                <input type="email" className="w-full p-4 bg-white/10 text-white rounded-xl border border-white/20 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all placeholder:text-white/40" placeholder="email@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-white/70 uppercase tracking-wider">Subject</label>
                                <input type="text" className="w-full p-4 bg-white/10 text-white rounded-xl border border-white/20 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all placeholder:text-white/40" placeholder="How can we help?" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-white/70 uppercase tracking-wider">Message</label>
                                <textarea rows={4} className="w-full p-4 bg-white/10 text-white rounded-xl border border-white/20 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all placeholder:text-white/40" placeholder="Tell us more..."></textarea>
                            </div>
                            <button className="w-full py-4 bg-brand-green text-white font-bold rounded-xl hover:bg-brand-green-dark transition-all shadow-lg shadow-brand-green/20">
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                    <div className="flex flex-col justify-center">
                        <div className="bg-white/5 p-10 rounded-3xl shadow-xl border border-white/10">
                            <h3 className="text-2xl font-black text-white mb-8">Contact Information</h3>
                            <div className="space-y-8">
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 bg-brand-green/20 rounded-2xl flex items-center justify-center text-brand-green">
                                        <MessageCircle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-white/40 uppercase">WhatsApp</p>
                                        <p className="text-xl font-bold text-white">+91 9850319154</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-white/40 uppercase">Email</p>
                                        <p className="text-xl font-bold text-white">info@swasthah.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-white/40 uppercase">Phone</p>
                                        <p className="text-xl font-bold text-white">+91 9850319154
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-12 border-t border-white/10">
                                <p className="text-xs font-bold text-white/40 uppercase mb-6">Follow Us</p>
                                <div className="flex gap-4">
                                    {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                                        <a key={social} href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:bg-brand-green hover:text-white transition-all">
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
