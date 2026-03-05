/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="py-12 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-sm font-bold text-brand-gray/40 uppercase tracking-widest">© Swasthah {new Date().getFullYear()}</p>
                <div className="flex gap-8">
                    <a href="#" className="text-xs font-bold text-brand-gray/60 hover:text-brand-green uppercase tracking-wider transition-colors">Privacy Policy</a>
                    <a href="#" className="text-xs font-bold text-brand-gray/60 hover:text-brand-green uppercase tracking-wider transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
