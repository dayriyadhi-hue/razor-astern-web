'use client';

import React from 'react';
import { motion } from 'motion/react';

const Solutions = () => {
    const solutions = [
        {
            id: "01",
            title: "PI Besi atau Baja",
            desc: "Baja Paduan dan Produk Turunannya untuk kebutuhan industri.",
            category: "Impor"
        },
        {
            id: "02",
            title: "Pakaian Jadi",
            desc: "Persetujuan Impor untuk Pakaian Jadi dan Aksesori berkualitas.",
            category: "Impor"
        },
        {
            id: "03",
            title: "Bahan Berbahaya (B2)",
            desc: "Pengurusan izin khusus untuk penanganan bahan berbahaya (B2).",
            category: "Bahan"
        },
        {
            id: "04",
            title: "Perusak Ozon (BPO)",
            desc: "Regulasi ketat untuk impor bahan perusak lapisan ozon.",
            category: "Lingkungan"
        },
        {
            id: "05",
            title: "Izin Kehutanan",
            desc: "Persetujuan Impor (PI) strategis untuk sektor kehutanan.",
            category: "Izin"
        },
        {
            id: "06",
            title: "Barang Modal Tidak Baru",
            desc: "Regulasi BMTB untuk efisiensi operasional bisnis Anda.",
            category: "Aset"
        },
        {
            id: "07",
            title: "Pengecualian Kawasan",
            desc: "SK Pengecualian khusus berlokasi di Kawasan Industri.",
            category: "Kawasan"
        },
        {
            id: "08",
            title: "Sertifikasi SNI",
            desc: "Standar Nasional Indonesia untuk jaminan kualitas produk.",
            category: "Standar"
        },
        {
            id: "09",
            title: "Verifikasi TKDN",
            desc: "Optimalisasi Tingkat Komponen Dalam Negeri untuk proyek pemerintah.",
            category: "Audit"
        }
    ];

    return (
        <section id="layanan" className="py-32 bg-[#F8F9FA] text-[#002b49] overflow-hidden relative">
            <div className="max-w-[1800px] mx-auto px-6 md:px-12">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-12 h-[1px] bg-orange"></span>
                            <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-orange">Layanan Eksper</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-medium tracking-tight leading-[0.95] mb-8">
                            Solusi <span className="italic font-serif text-slate-400 font-light">Regulasi</span> & Perizinan.
                        </h2>
                    </div>
                    <p className="max-w-md text-lg text-slate-500 leading-relaxed font-light mb-2">
                        Kami menghadirkan pendekatan personal untuk memastikan setiap langkah bisnis Anda sesuai dengan standar hukum yang berlaku di Indonesia.
                    </p>
                </div>

                {/* Modern Solutions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
                    {solutions.map((sol, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            className="group bg-white p-12 relative overflow-hidden flex flex-col min-h-[400px] hover:bg-navy transition-colors duration-700"
                        >
                            <div className="relative z-10">
                                <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-8 group-hover:bg-white/10 group-hover:text-white/50 transition-colors">
                                    {sol.category}
                                </span>
                                <h3 className="text-3xl font-bold tracking-tight uppercase mb-6 leading-tight group-hover:text-white transition-colors">
                                    {sol.title}
                                </h3>
                                <p className="text-slate-500 text-lg leading-relaxed group-hover:text-slate-300 transition-colors">
                                    {sol.desc}
                                </p>
                            </div>

                            <div className="mt-auto pt-10 relative z-10 flex items-center justify-between">
                                <span className="font-mono text-sm opacity-20 group-hover:opacity-10 transition-opacity group-hover:text-white">{sol.id}</span>
                                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-white/20 group-hover:bg-orange group-hover:text-white transition-all duration-500 -rotate-45 group-hover:rotate-0">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                </div>
                            </div>

                            {/* Accent Background Pattern */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-orange/5 rounded-bl-full translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
                        </motion.div>
                    ))}
                </div>

                {/* Logo Marquee */}
                <div className="mt-32 pt-20 border-t border-slate-200">
                    <p className="text-center text-[10px] font-mono font-bold uppercase tracking-[0.5em] text-slate-400 mb-16">Bekerjasama dengan Instansi Terkait</p>
                    <div className="w-full overflow-hidden">
                        <div className="flex relative">
                            <motion.div
                                animate={{ x: [-1000, 0] }}
                                transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } }}
                                className="flex flex-none gap-32 items-center"
                            >
                                {[...Array(4)].map((_, idx) => (
                                    <React.Fragment key={idx}>
                                        <div className="w-48 h-12 flex items-center justify-center flex-none grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                                            <img src="/1.svg" alt="Sucofindo" className="max-h-full max-w-full object-contain" />
                                        </div>
                                        <div className="w-48 h-12 flex items-center justify-center flex-none grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                                            <img src="/2.svg" alt="Kemenperin" className="max-h-full max-w-full object-contain" />
                                        </div>
                                        <div className="w-48 h-12 flex items-center justify-center flex-none grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                                            <img src="/3.svg" alt="Kemendag" className="max-h-full max-w-full object-contain" />
                                        </div>
                                        <div className="w-48 h-12 flex items-center justify-center flex-none grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                                            <img src="/4.svg" alt="BKPM" className="max-h-full max-w-full object-contain" />
                                        </div>
                                    </React.Fragment>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solutions;
