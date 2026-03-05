/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { BENEFITS } from './data';
import UsageImage from "../assets/usagesection.JPG"

const UsageSection: React.FC = () => {
    return (
        <section id="usage" className="pt-8 pb-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section with Image */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image Container - Full bleed effect */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
                            {/* Decorative gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/20 via-transparent to-brand-green/10 z-10" />

                            {/* Main Image */}
                            <img
                                src={UsageImage}
                                alt="Using Curcumin - Natural Supplement Benefits"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                                referrerPolicy="no-referrer"
                                loading="lazy"
                            />

                            {/* Floating badge */}

                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-green/10 rounded-full blur-2xl -z-10" />
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-green/10 rounded-full blur-2xl -z-10" />
                    </motion.div>

                    {/* Content Container */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="order-1 lg:order-2"
                    >
                        {/* Section label */}
                        <span className="inline-block px-4 py-2 bg-brand-green/10 rounded-full text-brand-green text-sm font-semibold mb-6">
                            ✦ Why Choose Us
                        </span>

                        <h2 className="text-4xl mb-4 md:text-5xl font-black text-brand-gray mb-6 leading-tight">

                            <div className="mb-4">
                                Why   <span className="text-brand-green relative"> Curcumin </span> is special
                            </div>



                            {/* Highlight box */}
                            <div className="bg-gradient-to-br from-brand-green/10 to-brand-green/5 p-8 rounded-2xl border-l-4 border-brand-green backdrop-blur-sm">


                                <div className="space-y-4 mb-6">
                                    <div className="flex items-start gap-3">
                                        <span className="text-brand-green font-bold text-lg">•</span>
                                        <span className="text-brand-gray/90 text-lg">Reduce inflammation</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-brand-green font-bold text-lg">•</span>
                                        <span className="text-brand-gray/90 text-lg">Trigger apoptosis</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-brand-green font-bold text-lg">•</span>
                                        <span className="text-brand-gray/90 text-lg">Block metastasis</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-brand-green font-bold text-lg">•</span>
                                        <span className="text-brand-gray/90 text-lg">Protect healthy cells</span>
                                    </div>
                                </div>

                                <p className="text-brand-gray/80 leading-relaxed text-lg italic">
                                    all at once
                                </p>

                                <p className="text-brand-gray/80 leading-relaxed text-lg mt-4 pt-4 border-t border-brand-green/20">
                                    That's why curcumin is often called a <span className='font-semibold text-brand-green'>"poly-targeted molecule."</span>
                                </p>
                            </div>
                        </h2>

                        {/* Highlight box */}



                    </motion.div>
                </div>

                {/* Benefits Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    {/* <h3 className="text-3xl md:text-4xl font-bold text-brand-gray mb-4">
                        Key <span className="text-brand-green">Benefits</span>
                    </h3>
                    <p className="text-brand-gray/60 max-w-2xl mx-auto">
                        Discover why curcumin is one of nature's most powerful compounds
                    </p> */}
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                    {BENEFITS.map((benefit, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{
                                y: -8,
                                transition: { duration: 0.2 }
                            }}
                            className="group relative p-6 bg-white rounded-2xl border border-gray-100 hover:border-brand-green/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
                        >
                            {/* Hover gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Icon container */}
                            <div className="relative w-14 h-14 bg-gradient-to-br from-brand-green/10 to-brand-green/5 rounded-full flex items-center justify-center text-brand-green mb-4 group-hover:scale-110 group-hover:from-brand-green/20 group-hover:to-brand-green/10 transition-all duration-300">
                                <span className="text-2xl">{benefit.icon}</span>
                            </div>

                            {/* Title */}
                            <h4 className="relative text-sm font-bold text-brand-gray group-hover:text-brand-green transition-colors duration-300">
                                {benefit.title}
                            </h4>

                            {/* Optional: Add description if available in BENEFITS data */}
                            {benefit.description && (
                                <p className="relative text-xs text-brand-gray/60 mt-2 line-clamp-2">
                                    {benefit.description}
                                </p>
                            )}

                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-green group-hover:w-12 transition-all duration-300" />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-16"
                >

                </motion.div>
            </div >
        </section >
    );
};

export default UsageSection;