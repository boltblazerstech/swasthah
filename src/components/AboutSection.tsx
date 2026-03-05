/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-24 bg-brand-gray/10">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-black text-brand-gray mb-12">ABOUT US</h2>
                <div className="space-y-8 text-lg text-brand-gray/80 leading-relaxed">
                    <p>
                        For past decade we have been studying the various Nutraceuticals. Products that we offer have been fine tuned over years based on extensive research work.
                    </p>
                    <p>
                        It was sad to see that many cancer patients would come to us as last hope. We therefore decided to make products available at mass level to provide proactive health support.
                    </p>
                    <div className="py-10">
                        <h3 className="text-2xl font-black text-brand-green mb-2">DGA SYNERGY</h3>
                        <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand-gray/40">Where technology meets nature</p>
                    </div>
                    <p>
                        We are quality producer of Pharma products with greater understanding and care for consumers giving a new approach towards chronic management using NF-κB inhibitors.
                    </p>
                </div>

                <div className="mt-16 flex flex-wrap justify-center gap-6">
                    <div className="flex flex-col items-center">
                        <p className="text-sm font-bold text-brand-gray/40 uppercase mb-4">Contact Our Experts</p>
                        <div className="flex gap-4">
                            <a href="tel:+918828293037" className="px-8 py-4 bg-brand-gray text-white font-bold rounded-xl hover:bg-brand-gray/90 transition-all flex items-center gap-2">
                                <Phone className="w-5 h-5" /> Call Now
                            </a>
                            <a href="https://wa.me/918828293037" target="_blank" className="px-8 py-4 bg-brand-green text-white font-bold rounded-xl hover:bg-brand-green-dark transition-all flex items-center gap-2">
                                <MessageCircle className="w-5 h-5" /> WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
