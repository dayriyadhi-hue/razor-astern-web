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
        <>
            <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'glass-effect py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
                    <div className="flex items-center group cursor-pointer">
                        <img
                            src="/RAS Logo.svg"
                            alt="Razan Logo"
                            className={`transition-all duration-700 object-contain ${scrolled ? 'w-10 h-10' : 'w-16 h-16'}`}
                        />
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="hidden lg:flex items-center gap-10">
                            {[
                                { name: 'Layanan', href: '#layanan' },
                                { name: 'Proses', href: '#proses-kerja' },
                                { name: 'Mengapa Kami', href: '#mengapa-kami' }
                            ].map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="hidden sm:block px-8 py-3 bg-orange text-white text-[10px] font-bold tracking-[0.2em] uppercase transition-all hover:bg-orange/90 active:scale-95 rounded-full shadow-[0_10px_20px_rgba(240,90,40,0.2)]">
                                Konsultasi
                            </button>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`flex items-center justify-center w-12 h-12 rounded-full border border-white/10 transition-all active:scale-95 ${scrolled ? 'bg-white/5' : 'bg-transparent hover:bg-white/10'}`}
                            >
                                <div className="w-5 flex flex-col gap-1.5 items-end">
                                    <div className="h-[2px] w-full bg-white rounded-full"></div>
                                    <div className="h-[2px] w-3/4 bg-white rounded-full"></div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-slate-1000/95 z-[60] flex items-center justify-center backdrop-blur-3xl"
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
                                { name: 'Layanan', href: '#layanan' },
                                { name: 'Proses Kerja', href: '#proses-kerja' },
                                { name: 'Mengapa Kami', href: '#mengapa-kami' },
                                { name: 'FAQ', href: '#faq' },
                                { name: 'Kontak', href: '#kontak' }
                            ].map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    whileHover={{ scale: 1.1 }}
                                    className="text-4xl md:text-5xl font-extrabold text-white hover:text-orange transition-colors tracking-tight uppercase"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
