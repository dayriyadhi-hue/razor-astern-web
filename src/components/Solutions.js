'use client';

import React from 'react';
import { motion } from 'motion/react';

const Solutions = () => {
    const solutions = [
        "PI Besi atau Baja, Baja Paduan, dan Produk Turunannya",
        "PI Pakaian Jadi dan Aksesori Pakaian Jadi",
        "Persetujuan Impor (PI) Bahan Berbahaya (B2)",
        "Persetujuan Impor (PI) Bahan Perusak Ozon (BPO)",
        "Persetujuan Impor (PI) Kehutanan",
        "Persetujuan Impor (PI) Barang Modal Tidak Baru (BMTB)",
        "SK Pengecualian Berlokasi di Kawasan Industri",
        "Standar Nasional Indonesia (SNI)",
        "Tingkat Komponen Dalam Negeri (TKDN)"
    ];

    return (
        <section id="layanan" className="py-32 bg-[#DCE1DE] text-[#002b49] overflow-hidden relative">
            <div className="max-w-[1800px] mx-auto px-10">
                {/* Top Header */}
                <div className="grid md:grid-cols-[200px_1fr] gap-10 mb-24">
                    <div className="flex items-start gap-2 pt-2">
                        <span className="text-[10px] font-bold border border-[#002b49] rounded-full w-4 h-4 flex items-center justify-center">1</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest">Layanan Kami</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-medium leading-[1.25] max-w-4xl">
                        Solusi perizinan yang sudah teruji, kini hadir dengan pendekatan yang lebih personal. Kami membantu bisnis Anda tumbuh tanpa hambatan regulasi.
                    </h2>
                </div>

                {/* Solutions List */}
                <div className="relative mb-20">
                    {solutions.map((sol, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className="group border-t dashed-line py-8 flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover:bg-black/5 transition-all px-4 -mx-4"
                        >
                            <div className="flex items-center gap-6">
                                <span className="font-mono text-[10px] opacity-40">0{i + 1}</span>
                                <h3 className="text-2xl md:text-4xl font-bold tracking-tight uppercase transition-all group-hover:text-orange group-hover:translate-x-2 duration-500">
                                    {sol}
                                </h3>
                            </div>
                            <div className="mt-4 md:mt-0 flex items-center gap-4">
                                <span className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">Info Layanan</span>
                                <div className="w-10 h-10 rounded-full border border-[#002b49]/10 flex items-center justify-center group-hover:bg-navy group-hover:text-white group-hover:border-navy transition-all duration-500">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    <div className="dashed-line"></div>
                </div>

                {/* Bottom Section: Logo Marquee */}
                <div className="w-full overflow-hidden border-t dashed-line pt-20">
                    <div className="flex relative">
                        <motion.div
                            animate={{
                                x: [-1000, 0],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 25,
                                    ease: "linear",
                                },
                            }}
                            className="flex flex-none gap-32 items-center"
                        >
                            {[...Array(4)].map((_, idx) => (
                                <React.Fragment key={idx}>
                                    <div className="w-48 h-12 md:h-16 flex items-center justify-center flex-none">
                                        <img src="/1.svg" alt="Partner 1" className="max-h-full max-w-full object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
                                    </div>
                                    <div className="w-48 h-12 md:h-16 flex items-center justify-center flex-none">
                                        <img src="/2.svg" alt="Partner 2" className="max-h-full max-w-full object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
                                    </div>
                                    <div className="w-48 h-12 md:h-16 flex items-center justify-center flex-none">
                                        <img src="/3.svg" alt="Partner 3" className="max-h-full max-w-full object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
                                    </div>
                                    <div className="w-48 h-12 md:h-16 flex items-center justify-center flex-none">
                                        <img src="/4.svg" alt="Partner 4" className="max-h-full max-w-full object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
                                    </div>
                                </React.Fragment>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solutions;
