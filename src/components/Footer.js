'use client';

import React, { useState } from 'react';
import { Plus, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    const faqs = [
        {
            q: "Apa layanan utama PT Razan Aeterna Solusi?",
            a: "Pengurusan perizinan ekspor-impor, konsultasi kepabeanan, registrasi produk, dan pendampingan audit Bea Cukai."
        },
        {
            q: "Siapa yang bisa menggunakan jasa ini?",
            a: "Semua pelaku usaha dari UMKM hingga korporasi yang memiliki kegiatan ekspor atau impor."
        },
        {
            q: "Berapa lama proses pengurusan izin?",
            a: "Tergantung jenis izin. Estimasi waktu kami sampaikan sejak awal, transparan dan sesuai kesepakatan."
        },
        {
            q: "Berapa biayanya?",
            a: "Konsultasi awal gratis. Biaya layanan disampaikan secara transparan setelah analisis kebutuhan tanpa biaya tersembunyi."
        },
        {
            q: "Apakah bisa melayani klien luar kota?",
            a: "Ya, kami melayani seluruh Indonesia secara online."
        },
        {
            q: "Apakah data saya aman?",
            a: "Sepenuhnya. Kerahasiaan dokumen klien adalah komitmen kami."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    return (
        <footer id="faq" className="py-16 pb-12 bg-white">
            <div className="max-w-[1800px] mx-auto px-6 md:px-12">
                {/* FAQ Section */}
                <div className="dashed-line mb-8"></div>
                {/* Unified Minimalist Hub (FAQ + Contact in 12 Cols) */}
                <div id="info-hub" className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 px-4">
                    {/* Col 1: Brand & Title */}
                    <div className="lg:col-span-2 flex flex-col items-start gap-5">
                        <img src="/RAS Logo.svg" alt="Razan Logo" className="w-40 h-40 object-contain -ml-2" />
                        <div>
                            <h2 className="text-4xl font-[950] text-black tracking-tighter uppercase mb-4 leading-none">F.A.Q</h2>
                            <div className="w-16 h-1.5 bg-orange/20 rounded-full"></div>
                        </div>
                    </div>

                    {/* Col 2: FAQ Items */}
                    <div className="lg:col-span-4 flex flex-col">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border-b border-black/10 last:border-0">
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full py-4 flex items-center justify-between text-left transition-all hover:bg-slate-50 group"
                                >
                                    <span className={`text-sm font-bold uppercase tracking-wider transition-colors ${openIndex === i ? 'text-orange' : 'text-black'}`}>
                                        {faq.q}
                                    </span>
                                    <div className={`w-6 h-6 rounded-full border border-black/20 flex items-center justify-center transition-all ${openIndex === i ? 'bg-orange border-orange rotate-45' : ''}`}>
                                        <Plus className={`w-3 h-3 transition-colors ${openIndex === i ? 'text-white' : 'text-black'}`} />
                                    </div>
                                </button>
                                {openIndex === i && (
                                    <div className="pb-6 pr-8 text-black/80 text-sm leading-relaxed font-mono uppercase tracking-wide">
                                        <span className="text-orange mr-2">/</span>
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Col 3: Hubungi Kami */}
                    <div className="lg:col-span-3 flex flex-col lg:border-l lg:border-black/5 lg:pl-10">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 mb-8 block">Hubungi Kami</span>
                        <div className="flex flex-col gap-6">
                            <div className="group transition-all">
                                <span className="text-[9px] font-bold text-orange uppercase tracking-[0.2em] mb-1 block">WhatsApp</span>
                                <a href="tel:+6281112345678" className="text-sm font-bold tracking-tight hover:text-orange transition-colors">+62 811 1234 5678</a>
                            </div>
                            <div>
                                <span className="text-[9px] font-bold text-orange uppercase tracking-[0.2em] mb-1 block">Email</span>
                                <a href="mailto:KONTAK@RAZANAETERNA.CO.ID" className="text-sm font-bold tracking-tight hover:text-orange transition-colors break-words lg:whitespace-nowrap">KONTAK@RAZANAETERNA.CO.ID</a>
                            </div>
                            <div>
                                <span className="text-[9px] font-bold text-orange uppercase tracking-[0.2em] mb-1 block">Kantor</span>
                                <p className="text-[11px] text-black/50 leading-relaxed uppercase tracking-widest">
                                    Tangerang Selatan, Banten, Indonesia
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Col 4: Jam Operasional */}
                    <div className="lg:col-span-3 flex flex-col lg:border-l lg:border-black/5 lg:pl-10">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 mb-8 block">Jam Operasional</span>
                        <div className="flex flex-col gap-5">
                            <div>
                                <span className="text-[9px] font-bold text-orange uppercase tracking-[0.2em] mb-1 block">Hari Kerja</span>
                                <p className="text-sm font-bold text-black tracking-tight">SENIN - JUMAT</p>
                            </div>
                            <div>
                                <span className="text-[9px] font-bold text-orange uppercase tracking-[0.2em] mb-1 block">Waktu Layanan</span>
                                <p className="text-sm font-medium text-black/60 tracking-tight">09.00 - 17.00 WIB</p>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-10">
                            {[Facebook, Linkedin, Twitter].map((Icon, idx) => (
                                <div key={idx} className="w-9 h-9 rounded-full border border-black/5 flex items-center justify-center hover:border-orange/30 hover:bg-orange/5 hover:text-orange transition-all cursor-pointer group">
                                    <Icon className="w-4 h-4 text-black/30 group-hover:text-orange transition-colors" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-black/10 flex justify-center items-center">
                    <p className="text-[11px] font-mono uppercase tracking-[0.4em] text-black/60 text-center">
                        © 2026 RAS ALL RIGHTS RESERVED.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
