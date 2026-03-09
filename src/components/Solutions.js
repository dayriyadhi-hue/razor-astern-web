'use client';

import React from 'react';
import { motion } from 'motion/react';

const Solutions = () => {
    const solutions = [
        { id: "01", title: "Persetujuan Impor Besi & Baja", desc: "Regulasi komprehensif untuk impor Besi, Baja, dan Produk Turunannya.", category: "INDUSTRI", color: "from-orange/20 to-transparent" },
        { id: "02", title: "Persetujuan Impor Pakaian Jadi", desc: "Izin impor tekstil dan aksesori pakaian jadi dengan verifikasi cepat.", category: "TEKSTIL", color: "from-blue-500/10 to-transparent" },
        { id: "03", title: "Bahan Berbahaya (B2)", desc: "Dokumentasi & koordinasi khusus untuk impor bahan kimia berbahaya.", category: "KIMIA", color: "from-emerald-500/10 to-transparent" },
        { id: "04", title: "Bahan Perusak Ozon (BPO)", desc: "Kepatuhan lingkungan untuk impor bahan CFC/HCFC.", category: "LINGKUNGAN", color: "from-amber-500/10 to-transparent" },
        { id: "05", title: "PI Kehutanan & Kayu", desc: "Penanganan Sertifikat Legalitas Kayu (SLK) dan izin impor terkait.", category: "KEHUTANAN", color: "from-lime-600/10 to-transparent" },
        { id: "06", title: "Barang Modal Tidak Baru (BMTB)", desc: "Fasilitas impor mesin bekas untuk efisiensi produksi industri.", category: "PRODUKSI", color: "from-purple-500/10 to-transparent" },
        { id: "07", title: "SK Pengecualian Kawasan", desc: "Persetujuan khusus untuk unit usaha di Kawasan Industri.", category: "KAWASAN", color: "from-red-500/10 to-transparent" },
        { id: "08", title: "Sertifikasi SNI Mandatori", desc: "Bimbingan pendaftaran dan verifikasi Standar Nasional Indonesia.", category: "STANDARDISASI", color: "from-cyan-500/10 to-transparent" },
        { id: "09", title: "Optimasi TKDN", desc: "Verifikasi kandungan lokal untuk daya saing di proyek pemerintah.", category: "LOCAL CONTENT", color: "from-orange/20 to-transparent" },
        { id: "10", title: "Izin Usaha Industri (IUI)", desc: "Pendampingan OSS RBA untuk penerbitan izin usaha industri.", category: "LEGAL", color: "from-indigo-500/10 to-transparent" },
        { id: "11", title: "NIB & Izin Edar", desc: "Pendaftaran Nomor Induk Berusaha & Izin Edar instansi terkait.", category: "REGULASI", color: "from-pink-500/10 to-transparent" },
        { id: "12", title: "Audit & Sertifikasi", desc: "Layanan audit kepatuhan regulasi secara menyeluruh.", category: "AUDIT", color: "from-teal-500/10 to-transparent" }
    ];

    return (
        <section id="layanan" className="py-32 md:py-40 bg-white text-navy overflow-hidden relative scroll-mt-20">
            {/* Background Decorative Elements - Brighter for Light Mode */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange/[0.03] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/[0.02] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                {/* Header Section */}
                <div className="grid lg:grid-cols-[1fr_auto] items-end gap-12 mb-24 md:mb-32">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-4 mb-8"
                        >
                            <span className="h-[1px] w-12 bg-orange"></span>
                            <span className="label-overline text-orange">Keahlian Kami</span>
                        </motion.div>
                        <h2 className="text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-tighter leading-[0.85] uppercase text-navy">
                            Solusi <br />
                            <span className="font-serif italic text-navy/10 font-light lowercase">Strategis</span>
                        </h2>
                    </div>
                    <div className="max-w-md pb-4">
                        <p className="text-lg md:text-xl text-navy/50 leading-relaxed font-light mb-10">
                            Kami merancang setiap alur perizinan dengan presisi teknis, memastikan operasional bisnis Anda berjalan lancar di Indonesia.
                        </p>
                        <button className="px-10 py-5 bg-navy text-white rounded-full hover:bg-orange transition-all duration-700 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-4 group min-h-[44px] shadow-xl shadow-navy/10">
                            Lihat Semua Layanan
                            <div className="w-2 h-2 rounded-full bg-orange group-hover:bg-white transition-colors"></div>
                        </button>
                    </div>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" role="region" aria-label="Daftar layanan kami">
                    {solutions.map((sol, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.05 }}
                            whileHover={{ y: -8 }}
                            className="group relative bg-[#F9FAFB] border border-black/[0.03] p-8 lg:p-10 min-h-[400px] flex flex-col justify-between overflow-hidden cursor-pointer rounded-2xl hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-500"
                        >
                            {/* Card Background Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${sol.color} opacity-20 group-hover:opacity-40 transition-opacity duration-700`}></div>

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-12">
                                    <span className="label-overline text-navy/20 border border-black/5 px-4 py-1.5 rounded-full group-hover:border-orange/20 group-hover:text-orange transition-all duration-500 text-[9px] tracking-[0.2em]">
                                        {sol.category}
                                    </span>
                                    <span className="text-[10px] text-navy/10 font-bold group-hover:text-navy/30 tabular-nums tracking-widest">{sol.id}</span>
                                </div>

                                <h3 className="text-2xl font-bold tracking-tight leading-[1.2] mb-6 group-hover:translate-x-1 transition-transform duration-500 text-navy">
                                    {sol.title}
                                </h3>

                                <p className="text-navy/40 text-[14px] leading-relaxed group-hover:text-navy/60 transition-colors font-light">
                                    {sol.desc}
                                </p>
                            </div>

                            {/* Footer Card */}
                            <div className="relative z-10 pt-8 flex items-center justify-between">
                                <span className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-orange">Detail Layanan</span>
                                <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-orange group-hover:border-orange group-hover:text-white transition-all duration-700 bg-white shadow-sm">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="-rotate-45 group-hover:rotate-0 transition-transform duration-500"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                </div>
                            </div>

                            {/* Hover Overlay Line */}
                            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange group-hover:w-full transition-all duration-700"></div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Stats or Marquee Focus */}
                <div className="mt-24 md:mt-32 pt-20 border-t border-black/5 flex flex-col items-center">
                    <p className="label-overline text-navy/20 tracking-widest mb-16 text-center">Dipercaya oleh Berbagai Industri</p>
                    <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                        <img src="/1.svg" alt="Partner perusahaan" className="h-10 w-auto transition-all" loading="lazy" />
                        <img src="/2.svg" alt="Partner perusahaan" className="h-10 w-auto transition-all" loading="lazy" />
                        <img src="/3.svg" alt="Partner perusahaan" className="h-10 w-auto transition-all" loading="lazy" />
                        <img src="/4.svg" alt="Partner perusahaan" className="h-10 w-auto transition-all" loading="lazy" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solutions;
