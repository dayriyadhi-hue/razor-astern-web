'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b dashed-line py-4' : 'bg-transparent py-8'}`}>
            <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center">
                <div className="flex items-center group cursor-pointer">
                    <img
                        src="/RAS Logo.svg"
                        alt="Razan Logo"
                        className={`transition-all duration-500 object-contain ${scrolled ? 'w-12 h-12' : 'w-20 h-20'}`}
                    />
                </div>

                <div className="flex items-center gap-6">
                    <button className="hidden sm:block px-8 py-2.5 bg-[#F05A28] text-white text-xs font-mono tracking-[0.2em] uppercase transition-all hover:bg-[#F05A28]/90 active:scale-95">
                        Konsultasi
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`flex items-center gap-3 px-6 py-2.5 dashed-border text-xs font-mono tracking-[0.2em] uppercase transition-all active:scale-95 ${scrolled ? 'border-navy/20 text-navy hover:bg-navy/5' : 'border-white/30 text-white hover:bg-white/10'}`}
                    >
                        <span className="hidden md:inline">Menu</span>
                        <div className="w-6 h-[2px] bg-current relative before:absolute before:w-full before:h-full before:bg-current before:-top-1.5 after:absolute after:w-full after:h-full after:bg-current after:top-1.5"></div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-slate-950/95 z-[60] flex items-center justify-center"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-10 right-10 text-white p-2 hover:bg-white/10 rounded-full transition-all"
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <div className="flex flex-col items-center gap-8">
                            {[
                                { name: 'Beranda', href: '#' },
                                { name: 'Tentang', href: '#tentang' },
                                { name: 'Layanan', href: '#layanan' },
                                { name: 'Berita', href: '#berita' },
                                { name: 'Regulasi', href: '#regulasi' },
                                { name: 'Proses Kerja', href: '#proses-kerja' },
                                { name: 'FAQ', href: '#faq' },
                                { name: 'Kontak', href: '#kontak' }
                            ].map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-4xl font-bold text-white hover:text-[#F05A28] transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
