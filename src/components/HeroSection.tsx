/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { DISEASES } from "./data";
import Curcumin from "../assets/curcumin.JPG";

interface HeroSectionProps {
    onDiseaseClick: (title: string, content: string) => void;
}

/* Mapping disease → knowledgebase file */
const FILE_MAP: Record<string, string> = {
    herpes: "/knowledgebase/3-curcumin-for-herpes.md",
    "weight-loss": "/knowledgebase/4-curcumin-for-weightloss.md",
    asthma: "/knowledgebase/5-curcumin-for-asthma.md",
    arthritis: "/knowledgebase/6-curcumin-for-arthritis.md",
    cancer: "/knowledgebase/7-curcumin-for-cancer.md",
    diabetes: "/knowledgebase/8-curcumin-for-diabetes.md",
    "gut-health": "/knowledgebase/9-curcumin-for-gut-health.md",
    inflammation: "/knowledgebase/2-curcumin-nf-kappa-b-inhibitor.md",
};

const HeroSection: React.FC<HeroSectionProps> = ({ onDiseaseClick }) => {
    const [contentMap, setContentMap] = useState<Record<string, string>>({});

    /* Load knowledgebase content */
    useEffect(() => {
        const loadContent = async () => {
            const map: Record<string, string> = {};

            for (const key in FILE_MAP) {
                try {
                    const res = await fetch(FILE_MAP[key]);
                    const text = await res.text();
                    map[key] = text;
                } catch {
                    map[key] = "";
                }
            }

            setContentMap(map);
        };

        loadContent();
    }, []);

    return (
        <section id="hero" className="relative pt-8 pb-12 overflow-hidden bg-gray-100">

            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-brand-green/5 rounded-bl-[100px]" />

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* LEFT TEXT */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-5xl md:text-7xl font-black text-brand-gray leading-[1.1] mb-8">
                            Curcumin as <br />
                            <span className="text-brand-green">Functional Food</span>
                        </h1>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#product"
                                className="px-8 py-4 bg-brand-green text-white font-bold rounded-xl hover:bg-brand-green-dark transition-all shadow-lg shadow-brand-green/20 flex items-center gap-2"
                            >
                                Explore Product <ArrowRight className="w-5 h-5" />
                            </a>

                            <a
                                href="#about"
                                className="px-8 py-4 border-2 border-brand-gray/10 text-brand-gray font-bold rounded-xl hover:bg-brand-gray/5 transition-all"
                            >
                                Learn More
                            </a>
                        </div>
                    </motion.div>

                    {/* RIGHT IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src={Curcumin}
                                alt="Curcumin Turmeric"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </motion.div>

                </div>

                {/* Disease Grid */}
                <div className="mt-24">
                    <h2 className="text-2xl font-bold text-brand-gray mb-10 text-center">
                        Targeted Health Support
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-4">

                        {DISEASES.map((disease) => (
                            <motion.button
                                key={disease.id}
                                whileHover={{ y: -5 }}
                                onClick={() =>
                                    onDiseaseClick(
                                        disease.name,
                                        contentMap[disease.id] || "Loading..."
                                    )
                                }
                                className="flex flex-col items-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-green/30 transition-all group"
                            >

                                <div className="w-12 h-12 bg-brand-gray-light rounded-xl flex items-center justify-center text-brand-gray group-hover:bg-brand-green group-hover:text-white transition-colors mb-4">
                                    {disease.icon}
                                </div>

                                <span className="text-xs font-bold text-brand-gray text-center">
                                    {disease.name}
                                </span>

                            </motion.button>
                        ))}

                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;