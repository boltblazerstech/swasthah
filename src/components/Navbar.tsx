/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { NAV_LINKS } from "./data";
import Logo from "../assets/logo.png";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    // Detect scroll
    useEffect(() => {
        const handleScroll = () => {
            const heroElement = document.getElementById("hero");
            if (heroElement) {
                setScrolled(window.scrollY > heroElement.offsetHeight);
            } else {
                setScrolled(window.scrollY > 100);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Track active section
    useEffect(() => {
        const sections = ["hero", "product", "usage", "knowledge", "about", "contact"];

        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);

                if (element) {
                    const { offsetTop, offsetHeight } = element;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();

        const targetId = href.replace("#", "");
        const element = document.getElementById(targetId);

        if (element) {
            const offset = 80;

            const elementPosition = element.offsetTop - offset;

            window.scrollTo({
                top: elementPosition,
                behavior: "smooth",
            });

            setActiveSection(targetId);
            setIsMenuOpen(false);
        }
    };

    return (
        <>
            {/* Navbar wrapper */}
            <div className="sticky top-0 left-0 right-0 z-50 transition-all duration-500">

                <nav
                    className={`
          transition-all duration-500
          ${scrolled
                            ? "mx-auto bg-black/90 backdrop-blur-lg shadow-lg"
                            : "w-full bg-black"
                        }
          `}
                >
                    <div className={`px-6 lg:px-8 transition-all duration-500 ${scrolled ? "py-2" : "py-4 md:py-6"}`}>
                        <div className="flex justify-between items-center">

                            {/* Logo */}
                            <a
                                href="#"
                                className="transition-transform duration-300"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                    setActiveSection("hero");
                                }}
                            >
                                <img
                                    src={Logo}
                                    alt="Company Logo"
                                    className={`w-auto object-contain transition-all duration-500 ${scrolled ? "h-8 md:h-12" : "h-10 md:h-24"}`}
                                />
                            </a>

                            {/* Desktop nav */}
                            <div className="hidden md:flex items-center space-x-6">

                                {NAV_LINKS.map((link) => {
                                    const sectionId = link.href.replace("#", "");
                                    const isActive = activeSection === sectionId;

                                    return (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            onClick={(e) => handleNavClick(e, link.href)}
                                            className={`
                      relative text-sm font-semibold uppercase tracking-wider
                      transition-colors duration-300
                      ${isActive
                                                    ? "text-brand-green"
                                                    : "text-white hover:text-brand-green"
                                                }
                      `}
                                        >
                                            {link.name}

                                            {isActive && (
                                                <motion.span
                                                    layoutId="activeNavIndicator"
                                                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-green rounded-full"
                                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                />
                                            )}
                                        </a>
                                    );
                                })}

                                {/* CTA */}
                                <a
                                    href="#contact"
                                    onClick={(e) => handleNavClick(e, "#contact")}
                                    className="ml-4 px-6 py-2 bg-brand-green text-white text-sm font-semibold rounded-full hover:scale-105 transition-all duration-300"
                                >
                                    Get Started
                                </a>
                            </div>

                            {/* Mobile button */}
                            <button
                                className="md:hidden text-white"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu */}
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="md:hidden bg-black border-t border-gray-800"
                            >
                                <div className="px-6 py-6 flex flex-col space-y-4">

                                    {NAV_LINKS.map((link) => {
                                        const sectionId = link.href.replace("#", "");
                                        const isActive = activeSection === sectionId;

                                        return (
                                            <a
                                                key={link.name}
                                                href={link.href}
                                                onClick={(e) => handleNavClick(e, link.href)}
                                                className={`
                        text-lg font-semibold py-2 px-4 rounded-lg transition
                        ${isActive
                                                        ? "text-brand-green bg-brand-green/10"
                                                        : "text-white hover:text-brand-green"
                                                    }
                        `}
                                            >
                                                {link.name}
                                            </a>
                                        );
                                    })}

                                    <a
                                        href="#contact"
                                        onClick={(e) => handleNavClick(e, "#contact")}
                                        className="mt-4 px-6 py-3 bg-brand-green text-white text-center text-lg font-bold rounded-full"
                                    >
                                        Get Started
                                    </a>

                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </nav>
            </div>


        </>
    );
};

export default Navbar;