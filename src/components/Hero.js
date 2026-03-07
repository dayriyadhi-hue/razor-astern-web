'use client';

import React from 'react';
import { motion } from 'motion/react';

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/RAS Video 2026.mp4" type="video/mp4" />
                </video>
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative z-10 w-full h-full max-w-[1800px] px-6 md:px-12 flex flex-col justify-end pb-12 md:pb-24">

                <div className="w-full mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        className="text-[10vw] md:text-[8.5vw] font-[950] text-white leading-none tracking-[-0.05em] uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,0.3)] whitespace-nowrap"
                    >
                        Razan <span className="text-transparent ml-4" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.8)' }}>Aeterna</span>
                    </motion.h1>
                </div>

                <div className="w-full dashed-line-white pt-8 grid md:grid-cols-12 gap-12 items-end">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="md:col-span-12 lg:col-span-5"
                    >
                        <h2 className="text-2xl md:text-3xl font-medium text-white leading-tight">
                            Pengalaman Bertahun-tahun <br />
                            <span className="text-blue-400 font-mono text-sm tracking-[0.2em] uppercase mt-4 block">Semangat yang Baru</span>
                        </h2>
                    </motion.div>

                    <div className="hidden lg:block lg:col-span-2"></div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="md:col-span-4 lg:col-span-5 flex flex-col justify-end"
                    >
                        <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-lg italic font-mono md:text-right ml-auto">
                            Razan Aeterna Solusi hadir dengan tim ahli berpengalaman di bidang konsultan perizinan membawa solusi yang sudah teruji, kini dalam satu atap yang lebih fokus dan personal.
                        </p>
                    </motion.div>
                </div>
            </div>


        </section>
    );
};

export default Hero;
