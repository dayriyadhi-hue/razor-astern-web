'use client';

import React from 'react';
import { motion } from 'motion/react';

const ConsultationCTA = () => {
    const handleWhatsApp = () => {
        window.open('https://wa.me/6281112345678?text=Halo%20Tim%20Razan%2C%20saya%20ingin%20konsultasi%20gratis%20tentang%20kebutuhan%20perizinan%20bisnis%20saya.', '_blank');
    };

    return (
        <section className="relative py-20 md:py-32 bg-gradient-to-r from-orange via-orange/95 to-orange/90 text-white overflow-hidden scroll-mt-20">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[120px] -translate-y-1/2"></div>
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
                                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
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
                        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 lg:p-12"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.707 12.293a.999.999 0 0 0-1.414 0L13 15.586V6a1 1 0 1 0-2 0v9.586l-3.293-3.293a.999.999 0 1 0-1.414 1.414l5 5a.999.999 0 0 0 1.414 0l5-5a.999.999 0 0 0 0-1.414z"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold">Hubungi Kami Sekarang</h3>
                        </div>

                        {/* WhatsApp CTA - PROMINENT */}
                        <motion.button
                            onClick={handleWhatsApp}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full mb-6 px-8 py-4 bg-white text-orange font-bold text-lg rounded-xl hover:shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-3 min-h-[56px]"
                            aria-label="Hubungi kami via WhatsApp untuk konsultasi gratis"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.783 1.14L.513 2.36.039 13.02l6.782 1.994a9.857 9.857 0 004.688 1.195h.005c5.487 0 9.968-4.481 9.968-9.968 0-2.662-1.031-5.165-2.9-7.035-1.87-1.87-4.37-2.9-7.036-2.9z"/>
                            </svg>
                            Mulai Konsultasi via WhatsApp
                        </motion.button>

                        {/* Alternative Contact */}
                        <div className="space-y-4 text-sm">
                            <div>
                                <p className="text-white/60 mb-1 font-light">Atau hubungi langsung:</p>
                                <a href="tel:+6281112345678" className="text-lg font-bold hover:text-white/80 transition-colors">
                                    +62 811 1234 5678
                                </a>
                            </div>
                            <div>
                                <p className="text-white/60 mb-1 font-light">Email:</p>
                                <a href="mailto:kontak@razansolusi.com" className="text-lg font-bold hover:text-white/80 transition-colors break-all">
                                    kontak@razansolusi.com
                                </a>
                            </div>
                        </div>

                        {/* Response Time */}
                        <div className="mt-8 pt-8 border-t border-white/20 flex items-center gap-3 text-sm">
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                            <span className="text-white/70 font-light">Kami biasanya membalas dalam 2 jam</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ConsultationCTA;
