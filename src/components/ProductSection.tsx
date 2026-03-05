/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import ProductImage from "../assets/productimg.JPG"

const ProductSection: React.FC<ProductSectionProps> = ({ openWhatsApp }) => {
    return (
        <section id="product" className="pt-8 pb-12 bg-brand-green/30">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-2 md:order-1"
                    >
                        <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src={ProductImage}
                                alt="Product Packaging"
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-1 md:order-2"
                    >
                        <h2 className="text-4xl font-black text-brand-gray mb-8">Premium Quality <br /><span className="text-brand-green">Curcumin Sachets</span></h2>
                        <ul className="space-y-6 mb-12">
                            {[
                                "No additives… No preservatives… No binding agents added",
                                "Eco Friendly Packaging",
                                "Easy to use ON THE GO sachets",
                                "Travelling? or eating out in restaurant? Simply top your food with it",
                                "Pepper added for enhanced absorption"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1 w-6 h-6 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green flex-shrink-0">
                                        <Check className="w-4 h-4" />
                                    </div>
                                    <p className="text-brand-gray/80 font-medium">{item}</p>
                                </li>
                            ))}
                        </ul>

                        <div className="space-y-4">
                            <p className="font-bold text-brand-gray uppercase tracking-widest text-sm mb-4">Order Now via WhatsApp</p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {[90, 295, 500].map((count) => (
                                    <button
                                        key={count}
                                        onClick={() => openWhatsApp(count)}
                                        className="group p-4 bg-white border-2 border-brand-green rounded-xl hover:bg-brand-green transition-all flex flex-col items-center justify-center shadow-sm"
                                    >
                                        <span className="text-2xl font-black text-brand-green group-hover:text-white">{count}</span>
                                        <span className="text-[10px] font-bold text-brand-gray group-hover:text-white/80 uppercase tracking-tighter">Sachets</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
