import React from 'react';

const Process = () => {
    const steps = [
        {
            num: "01",
            title: "Konsultasi Gratis",
            desc: "Ceritakan kebutuhan bisnis Anda. Tim kami menganalisis jenis izin yang dibutuhkan, estimasi waktu, dan biaya tanpa komitmen apapun di tahap ini."
        },
        {
            num: "02",
            title: "Analisis & Persiapan",
            desc: "Kami berikan daftar dokumen yang harus disiapkan secara spesifik sesuai komoditas dan jenis izin Anda. Tim kami mendampingi jika ada dokumen yang perlu dilengkapi atau diperbaiki."
        },
        {
            num: "03",
            title: "Proses Perizinan",
            desc: "Kami yang mengurus segala pengajuan, komunikasi dengan instansi terkait, hingga tindak lanjut. Anda menerima laporan progres secara berkala."
        },
        {
            num: "04",
            title: "Izin Terbit",
            desc: "Izin resmi diserahkan lengkap dengan dokumentasi. Kami tetap standby untuk pertanyaan lanjutan atau perpanjangan izin di masa mendatang."
        }
    ];

    return (
        <section id="proses-kerja" className="py-32 md:py-40 bg-white text-navy overflow-hidden relative border-t border-black/[0.03] scroll-mt-20">
            {/* Subtle background pattern - Brighter for Light Mode */}
            <div className="absolute inset-0 opacity-[0.2] pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(240,90,40,0.05)_0%,transparent_70%)]"></div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                <div className="mb-24 md:mb-32 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="h-[1px] w-12 bg-orange"></span>
                            <span className="label-overline text-orange">Alur Kerja</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.9] uppercase text-navy">
                            Transparansi <br />
                            <span className="font-serif italic font-light text-navy/10 lowercase">Tanpa Kompromi.</span>
                        </h2>
                    </div>
                    <div className="max-w-md pb-4">
                        <p className="text-lg text-navy/50 leading-relaxed font-light">
                            Kami menyederhanakan birokrasi yang rumit menjadi langkah-langkah strategis yang terukur dan efisien.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" role="list" aria-label="Proses perizinan 4 tahap">
                    {steps.map((step, i) => (
                        <div key={i} className="relative p-10 lg:p-12 bg-[#F9FAFB] border border-black/[0.03] hover:border-orange/20 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-700 group overflow-hidden rounded-2xl" role="listitem">
                            {/* Hover Background Accent */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-orange/[0.02] blur-[80px] translate-x-20 -translate-y-20 group-hover:translate-x-10 group-hover:-translate-y-10 transition-transform duration-1000"></div>

                            <span className="text-8xl font-extrabold text-navy/[0.02] absolute -top-4 -right-4 group-hover:text-orange/[0.04] transition-colors duration-700 tracking-tighter">{step.num}</span>

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div className="mb-12">
                                    <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center text-orange mb-10 bg-white shadow-sm group-hover:bg-orange group-hover:text-white transition-all duration-500 text-xs font-bold">
                                        {step.num}
                                    </div>
                                    <h3 className="text-xl font-bold mb-6 tracking-tight group-hover:text-navy transition-colors text-navy">
                                        {step.title}
                                    </h3>
                                    <p className="text-navy/40 leading-relaxed text-[14px] font-light group-hover:text-navy/60 transition-colors">
                                        {step.desc}
                                    </p>
                                </div>
                                <div className="w-full h-[1px] bg-black/[0.05] group-hover:bg-orange/20 transition-colors duration-700"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
