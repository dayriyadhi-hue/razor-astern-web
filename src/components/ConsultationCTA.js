'use client';

import React from 'react';
import { motion } from 'motion/react';

const ConsultationCTA = () => {
    const handleWhatsApp = () => {
        window.open('https://wa.me/6281112345678?text=Halo%20Tim%20Razan%2C%20saya%20ingin%20konsultasi%20gratis%20tentang%20kebutuhan%20perizinan%20bisnis%20saya.', '_blank');
    };

    return (
        <section className="relative py-20 md:py-32 bg-gradient-to-r from-navy via-[#1e3a8a] to-navy text-white overflow-hidden scroll-mt-20">
            {/* Background Pattern - Twine inspired Blur */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gold rounded-full blur-[120px] -translate-y-1/2"></div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                            Siap Mengamankan Perizinan Bisnis Anda?
                        </h2>
                        <p className="text-xl text-white/80 leading-relaxed mb-8 font-light">
                            Konsultasi gratis dengan ahli perizinan kami. Kami siap membantu Anda mengurus PI, SNI, TKDN, dan regulasi bisnis lainnya dengan cepat dan transparan.
                        </p>

                        {/* Quick Points */}
                        <ul className="space-y-4 mb-10">
                            {[
                                'Konsultasi Gratis — tanpa komitmen',
                                'Ahli berpengalaman — 10+ tahun di industri',
                                'Proses Transparan — estimasi waktu dan biaya jelas'
                            ].map((point, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-lg font-light">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right: Contact Box */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-sm p-10 lg:p-12"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                                <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.707 12.293a.999.999 0 0 0-1.414 0L13 15.586V6a1 1 0 1 0-2 0v9.586l-3.293-3.293a.999.999 0 1 0-1.414 1.414l5 5a.999.999 0 0 0 1.414 0l5-5a.999.999 0 0 0 0-1.414z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold">Hubungi Kami Sekarang</h3>
                        </div>

                        {/* WhatsApp CTA - PROMINENT */}
                        <motion.button
                            onClick={handleWhatsApp}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full mb-6 px-8 py-5 bg-gold text-navy font-bold text-lg rounded-sm hover:bg-white transition-all flex items-center justify-center gap-3 min-h-[56px] shadow-2xl shadow-gold/20"
                            aria-label="Hubungi kami via WhatsApp untuk konsultasi gratis"
                        >
                            Mulai Konsultasi via WhatsApp
                        </motion.button>

                        {/* Alternative Contact */}
                        <div className="space-y-4 text-sm">
                            <div>
                                <p className="text-white/60 mb-1 font-light">Atau hubungi langsung:</p>
                                <a href="tel:+6281112345678" className="text-lg font-bold hover:text-gold transition-colors">
                                    +62 811 1234 5678
                                </a>
                            </div>
                            <div>
                                <p className="text-white/60 mb-1 font-light">Email:</p>
                                <a href="mailto:kontak@razansolusi.com" className="text-lg font-bold hover:text-gold transition-colors break-all">
                                    kontak@razansolusi.com
                                </a>
                            </div>
                        </div>

                        {/* Response Time */}
                        <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-3 text-sm">
                            <div className="w-2 h-2 rounded-full bg-gold animate-pulse"></div>
                            <span className="text-white/70 font-light">Kami biasanya membalas dalam 2 jam</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ConsultationCTA;
