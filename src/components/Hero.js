'use client';

import React from 'react';
import { motion } from 'motion/react';

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden scroll-mt-20">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/hero-fallback.svg"
                    className="w-full h-full object-cover"
                >
                    <source src="/RAS Video 2026.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
            </div>

            <div className="relative z-10 w-full h-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-end pb-12 md:pb-24">

                <div className="w-full mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="mb-8 flex items-center gap-4"
                    >
                        <span className="w-12 h-[1px] bg-orange"></span>
                        <span className="label-overline text-orange">Est. 2026 — Tim Ahli Terpercaya</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        className="text-[12vw] md:text-[8vw] lg:text-[7.5vw] font-extrabold text-white leading-[0.9] tracking-[-0.05em] uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                    >
                        Razan <span className="text-transparent font-light" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>Aeterna</span>
                    </motion.h1>
                </div>

                <div className="w-full border-t border-white/10 pt-10 grid md:grid-cols-12 gap-8 md:gap-12 items-end">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="md:col-span-12 lg:col-span-6"
                    >
                        <h2 className="text-xl md:text-3xl font-medium text-white leading-[1.2] max-w-xl">
                            Navigasi <span className="text-orange">Regulasi</span> yang Kompleks dengan <span className="italic font-light">Presisi & Integritas.</span>
                        </h2>
                    </motion.div>

                    <div className="hidden lg:block lg:col-span-1"></div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="md:col-span-4 lg:col-span-5 flex flex-col justify-end"
                    >
                        <p className="text-white/40 text-sm md:text-base leading-relaxed max-w-lg md:text-right ml-auto">
                            Membawa pengalaman bertahun-tahun ke dalam wadah baru yang lebih personal. Kami hadir sebagai mitra strategis dalam mengamankan masa depan bisnis Anda di pasar Indonesia.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
