/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
    Activity, Heart, Shield, Zap, Droplets,
    Stethoscope, Weight, Wind, Bone,
} from 'lucide-react';

// --- Types ---
export interface Disease {
    id: string;
    name: string;
    icon: React.ReactNode;
    description: string;
}

export interface FAQ {
    id: number;
    question: string;
    answer: string;
    file: string;
}

export interface Benefit {
    title: string;
    icon: React.ReactNode;
}

// --- Data ---
export const DISEASES: Disease[] = [
    { id: 'herpes', name: 'Herpes', icon: "🦠", description: 'Curcumin has shown potential in managing herpes symptoms through its antiviral and anti-inflammatory properties. It may help reduce the frequency and severity of outbreaks by inhibiting viral replication.' },
    { id: 'weight-loss', name: 'Weight Loss', icon: "⚖️", description: 'Curcumin can aid weight loss by improving metabolic health, reducing inflammation associated with obesity, and potentially increasing insulin sensitivity.' },
    { id: 'asthma', name: 'Asthma', icon: "😮‍💨", description: 'As a natural anti-inflammatory, curcumin may help reduce airway inflammation and hyper-responsiveness in asthma patients, potentially improving lung function.' },
    { id: 'arthritis', name: 'Arthritis', icon: "🦴", description: 'Curcumin is widely recognized for its ability to reduce joint pain and inflammation in both osteoarthritis and rheumatoid arthritis, often comparable to some anti-inflammatory drugs.' },
    { id: 'cancer', name: 'Cancer', icon: "🎗️", description: 'Research suggests curcumin may interfere with cancer development, growth, and spread at the molecular level. It is studied for its potential to trigger apoptosis (cell death) in cancer cells.' },
    { id: 'diabetes', name: 'Diabetes', icon: "🍬", description: 'Curcumin may help manage blood sugar levels and improve insulin resistance, while also protecting against common diabetes complications like kidney damage.' },
    { id: 'gut-health', name: 'Gut Health', icon: "🍎", description: 'Curcumin supports digestive health by reducing gut inflammation, maintaining the intestinal barrier, and potentially balancing the gut microbiome.' },
    { id: 'copd', name: 'COPD', icon: "🩺", description: 'For Chronic Obstructive Pulmonary Disease, curcumin may help reduce the chronic inflammation in the lungs and improve respiratory symptoms.' },
    { id: 'inflammation', name: 'Inflammation', icon: "🔥", description: 'Chronic inflammation is at the root of many diseases. Curcumin is one of the most potent natural anti-inflammatory compounds known to science.' },
];

export const FAQS: FAQ[] = [
    { id: 1, question: 'How Curcumin Functions in your body', answer: '', file: '/knowledgebase/1-how-curcumin-functions.md' },
    { id: 2, question: 'Curcumin a NF KAPPA B inhibitor', answer: '', file: '/knowledgebase/2-curcumin-nf-kappa-b-inhibitor.md' },
    { id: 3, question: 'Curcumin as Functional food for Herpes', answer: '', file: '/knowledgebase/3-curcumin-for-herpes.md' },
    { id: 4, question: 'Curcumin as Functional food for Weight Loss', answer: '', file: '/knowledgebase/4-curcumin-for-weightloss.md' },
    { id: 5, question: 'Curcumin as Functional food for Asthma', answer: '', file: '/knowledgebase/5-curcumin-for-asthma.md' },
    { id: 6, question: 'Curcumin as Functional food for Arthritis', answer: '', file: '/knowledgebase/6-curcumin-for-arthritis.md' },
    { id: 7, question: 'Curcumin as Functional food for Cancer', answer: '', file: '/knowledgebase/7-curcumin-for-cancer.md' },
    { id: 8, question: 'Curcumin as Functional food for Diabetes', answer: '', file: '/knowledgebase/8-curcumin-for-diabetes.md' },
    { id: 9, question: 'Curcumin as Functional food for Gut Health', answer: '', file: '/knowledgebase/9-curcumin-for-gut-health.md' },
];

export const BENEFITS: Benefit[] = [
    { title: 'Blood thinner', icon: "🩸" },
    { title: 'Blood purifier', icon: "💧" },
    { title: 'Anti inflammatocon:', icon: "❄️" },
    { title: 'Anti cancer', icon: "🧬" },
    { title: 'Anti oxidanticon', icon: "🛡️" },
    { title: 'Helps ligament restoration', icon: "🦵" },
    { title: 'Restores bone densityicon', icon: "🦷" },
    { title: 'Exerts antiviral effects', icon: "🧫" },
    { title: 'Anti pulmonary fibrosicon', icon: "🌬️" },
    { title: 'COPD effects', icon: "😤" },
];

export const NAV_LINKS = [
    { name: 'Product', href: '#product' },
    { name: 'Usage', href: '#usage' },
    { name: 'Knowledge Base', href: '#knowledge' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
];
