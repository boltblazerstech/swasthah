/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { FAQS } from './data';

interface KnowledgeBaseSectionProps {
    onFaqClick: (title: string, content: string) => void;
}

const KnowledgeBaseSection: React.FC<KnowledgeBaseSectionProps> = ({ onFaqClick }) => {

    const handleClick = async (question: string, file: string) => {
        try {
            const res = await fetch(file);
            const text = await res.text();
            onFaqClick(question, text);
        } catch {
            onFaqClick(question, "Failed to load content.");
        }
    };

    return (
        <section id="knowledge" className="py-24 bg-brand-green/30">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-brand-gray mb-4">Knowledge Base</h2>
                    <p className="text-brand-gray/60">Deep dive into the science of Curcumin</p>
                </div>

                <div className="space-y-4">
                    {FAQS.map((faq) => (
                        <motion.button
                            key={faq.id}
                            whileHover={{ x: 10 }}
                            onClick={() => handleClick(faq.question, faq.file)}
                            className="w-full p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all flex justify-between items-center text-left group"
                        >
                            <span className="font-bold text-brand-gray group-hover:text-brand-green transition-colors">{faq.question}</span>
                            <ChevronRight className="w-5 h-5 text-brand-gray/30 group-hover:text-brand-green" />
                        </motion.button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KnowledgeBaseSection;
