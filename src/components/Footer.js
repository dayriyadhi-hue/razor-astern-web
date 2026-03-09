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
        <footer id="faq" className="py-24 md:py-32 bg-white text-navy overflow-hidden relative border-t border-navy/5 scroll-mt-20">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                {/* Unified Hub */}
                <div id="info-hub" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
                    {/* Col 1: Brand & Title */}
                    <div className="lg:col-span-3 flex flex-col items-start gap-8">
                        <img src="/RAS Logo.svg" alt="Logo PT Razan Aeterna Solusi" className="w-16 h-16 object-contain" loading="lazy" />
                        <div>
                            <span className="label-overline text-gold mb-4 block">Information Hub</span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-navy tracking-tighter uppercase mb-6 leading-none">F.A.Q</h2>
                            <p className="text-navy/40 text-sm leading-relaxed font-light">
                                Temukan jawaban cepat untuk pertanyaan umum seputar layanan perizinan strategis kami.
                            </p>
                        </div>
                    </div>

                    {/* Col 2: FAQ Items */}
                    <div className="lg:col-span-4 flex flex-col gap-2" role="region" aria-label="Pertanyaan yang sering diajukan">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-[#FBF9F7] border border-navy/5 rounded-sm group overflow-hidden transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-navy/5 hover:border-gold/20">
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left transition-all"
                                >
                                    <span className={`text-[13px] font-bold tracking-tight pr-4 transition-colors ${openIndex === i ? 'text-gold' : 'text-navy/80'}`}>
                                        {faq.q}
                                    </span>
                                    <div className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-500 ${openIndex === i ? 'bg-gold border-gold rotate-45' : 'border-navy/10'}`}>
                                        <Plus className={`w-3 h-3 transition-colors ${openIndex === i ? 'text-white' : 'text-navy/20'}`} />
                                    </div>
                                </button>
                                {openIndex === i && (
                                    <div className="px-6 pb-6 text-navy/40 text-[13px] leading-relaxed font-light animate-in fade-in slide-in-from-top-2 duration-500">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Col 3: Hubungi Kami */}
                    <div className="lg:col-span-2 flex flex-col pt-2">
                        <span className="label-overline text-navy/20 mb-10 block">Contact</span>
                        <div className="flex flex-col gap-8">
                            <div className="group cursor-pointer">
                                <span className="text-[9px] font-bold text-gold uppercase tracking-[.2em] mb-2 block">WhatsApp</span>
                                <a href="https://wa.me/6281112345678" className="text-sm font-bold tracking-tight text-navy hover:text-gold transition-colors">+62 811 1234 5678</a>
                            </div>
                            <div className="group cursor-pointer">
                                <span className="text-[9px] font-bold text-gold uppercase tracking-[.2em] mb-2 block">Email</span>
                                <a href="mailto:kontak@razansolusi.com" className="text-sm font-bold tracking-tight text-navy hover:text-gold transition-colors break-all">KONTAK@RAZANSOLUSI.COM</a>
                            </div>
                        </div>
                    </div>

                    {/* Col 4: Jam Operasional */}
                    <div className="lg:col-span-3 flex flex-col pt-2">
                        <span className="label-overline text-navy/20 mb-10 block">Location</span>
                        <div className="flex flex-col gap-8">
                            <div>
                                <span className="text-[9px] font-bold text-gold uppercase tracking-[.2em] mb-2 block">Office Hub</span>
                                <p className="text-sm text-navy/50 leading-relaxed font-light">
                                    Tangerang Selatan, Banten, Indonesia
                                </p>
                            </div>
                            <div className="flex gap-4">
                                {[Facebook, Linkedin, Twitter].map((Icon, idx) => (
                                    <a
                                        key={idx}
                                        href="#"
                                        aria-label={Icon.name}
                                        className="w-10 h-10 rounded-full border border-navy/5 flex items-center justify-center hover:border-gold/20 hover:bg-gold/5 hover:text-gold transition-all cursor-pointer group bg-white"
                                    >
                                        <Icon className="w-4 h-4 text-navy/20 group-hover:text-gold transition-colors" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-navy/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[9px] label-overline text-navy/20 tracking-[.3em]">
                        © 2026 Razan Aeterna Solusi. All Rights Reserved.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-[9px] label-overline text-navy/20 hover:text-gold transition-colors tracking-[.2em]">Privacy Policy</a>
                        <a href="#" className="text-[9px] label-overline text-navy/20 hover:text-gold transition-colors tracking-[.2em]">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
