'use client';

import React from 'react';
import { motion } from 'motion/react';

const Solutions = () => {
    const solutions = [
        { id: "01", title: "Persetujuan Impor Besi & Baja", desc: "Regulasi komprehensif untuk impor Besi, Baja, dan Produk Turunannya.", category: "INDUSTRI", color: "from-orange/20 to-transparent" },
        { id: "02", title: "Persetujuan Impor Pakaian Jadi", desc: "Izin impor tekstil dan aksesori pakaian jadi dengan verifikasi cepat.", category: "TEKSTIL", color: "from-blue-500/10 to-transparent" },
        { id: "03", title: "Bahan Berbahaya (B2)", desc: "Dokumentasi & koordinasi khusus untuk impor bahan kimia berbahaya.", category: "KIMIA", color: "from-emerald-500/10 to-transparent" },
        { id: "04", title: "Bahan Perusak Ozon (BPO)", desc: "Kepatuhan lingkungan untuk impor bahan CFC/HCFC.", category: "LINGKUNGAN", color: "from-amber-500/10 to-transparent" },
        { id: "05", title: "PI Kehutanan & Kayu", desc: "Penanganan Sertifikat Legalitas Kayu (SLK) dan izin impor terkait.", category: "KEHUTANAN", color: "from-brown-500/10 to-transparent" },
        { id: "06", title: "Barang Modal Tidak Baru (BMTB)", desc: "Fasilitas impor mesin bekas untuk efisiensi produksi industri.", category: "PRODUKSI", color: "from-purple-500/10 to-transparent" },
        { id: "07", title: "SK Pengecualian Kawasan", desc: "Persetujuan khusus untuk unit usaha di Kawasan Industri.", category: "KAWASAN", color: "from-red-500/10 to-transparent" },
        { id: "08", title: "Sertifikasi SNI Mandatori", desc: "Bimbingan pendaftaran dan verifikasi Standar Nasional Indonesia.", category: "STANDARDISASI", color: "from-cyan-500/10 to-transparent" },
        { id: "09", title: "Optimasi TKDN", desc: "Verifikasi kandungan lokal untuk daya saing di proyek pemerintah.", category: "LOCAL CONTENT", color: "from-orange/20 to-transparent" },
        { id: "10", title: "Izin Usaha Industri (IUI)", desc: "Pendampingan OSS RBA untuk penerbitan izin usaha industri.", category: "LEGAL", color: "from-indigo-500/10 to-transparent" },
        { id: "11", title: "NIB & Izin Edar", desc: "Pendaftaran Nomor Induk Berusaha & Izin Edar instansi terkait.", category: "REGULASI", color: "from-pink-500/10 to-transparent" },
        { id: "12", title: "Audit & Sertifikasi", desc: "Layanan audit kepatuhan regulasi secara menyeluruh.", category: "AUDIT", color: "from-teal-500/10 to-transparent" }
    ];

    return (
        <section id="layanan" className="py-40 bg-[#0A0C10] text-white overflow-hidden relative">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
                {/* Header Section */}
                <div className="grid lg:grid-cols-[1fr_auto] items-end gap-12 mb-32">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-4 mb-8"
                        >
                            <span className="h-[2px] w-12 bg-orange"></span>
                            <span className="text-xs font-mono font-black uppercase tracking-[0.5em] text-orange">CORE SOLUTIONS</span>
                        </motion.div>
                        <h2 className="text-6xl md:text-9xl font-medium tracking-tight leading-[0.85] uppercase">
                            Premium <br />
                            <span className="font-serif italic text-white/30 font-light">Services</span>
                        </h2>
                    </div>
                    <div className="max-w-md pb-4">
                        <p className="text-xl text-white/50 leading-relaxed font-light mb-8">
                            Kami merancang setiap alur perizinan dengan presisi, memastikan bisnis Anda meluncur tanpa hambatan regulasi di pasar Indonesia.
                        </p>
                        <button className="px-10 py-4 border border-white/10 rounded-full hover:bg-white hover:text-navy transition-all duration-500 text-xs font-mono uppercase tracking-widest flex items-center gap-4 group">
                            Semua Layanan
                            <div className="w-2 h-2 rounded-full bg-orange group-hover:scale-150 transition-transform"></div>
                        </button>
                    </div>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {solutions.map((sol, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.05 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-[#13161C] border border-white/5 p-10 min-h-[460px] flex flex-col justify-between overflow-hidden cursor-pointer"
                        >
                            {/* Card Background Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${sol.color} opacity-30 group-hover:opacity-100 transition-opacity duration-700`}></div>

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-12">
                                    <span className="text-[10px] font-mono font-bold text-white/30 border border-white/10 px-3 py-1 rounded-full group-hover:border-orange/30 group-hover:text-orange transition-all duration-500 italic">
                                        #{sol.category}
                                    </span>
                                    <span className="font-mono text-xs text-white/20 group-hover:text-white/40">{sol.id}</span>
                                </div>

                                <h3 className="text-3xl font-bold tracking-tight uppercase leading-[1.1] mb-6 group-hover:translate-x-2 transition-transform duration-500">
                                    {sol.title}
                                </h3>

                                <p className="text-white/40 text-lg font-light leading-relaxed group-hover:text-white/70 transition-colors">
                                    {sol.desc}
                                </p>
                            </div>

                            {/* Footer Card */}
                            <div className="relative z-10 pt-10 flex items-center justify-between">
                                <span className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-orange">Mulai Konsultasi</span>
                                <div className="w-14 h-14 rounded-full border border-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-navy transition-all duration-700">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="-rotate-45 group-hover:rotate-0 transition-transform duration-500"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                </div>
                            </div>

                            {/* Hover Overlay Line */}
                            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange group-hover:w-full transition-all duration-700"></div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Stats or Marquee Focus */}
                <div className="mt-32 pt-24 border-t border-white/5 flex flex-col items-center">
                    <p className="text-white/30 text-[10px] font-mono tracking-[0.8em] uppercase mb-16 text-center">TRUSTED BY INDUSTRY GIANTS</p>
                    <div className="flex flex-wrap justify-center gap-16 md:gap-32 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                        <img src="/1.svg" alt="Partner" className="h-10 w-auto hover:opacity-100 transition-opacity" />
                        <img src="/2.svg" alt="Partner" className="h-10 w-auto hover:opacity-100 transition-opacity" />
                        <img src="/3.svg" alt="Partner" className="h-10 w-auto hover:opacity-100 transition-opacity" />
                        <img src="/4.svg" alt="Partner" className="h-10 w-auto hover:opacity-100 transition-opacity" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solutions;
