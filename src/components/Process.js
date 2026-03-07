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
        <section id="proses-kerja" className="py-32 bg-slate-950 text-white overflow-hidden relative">
            {/* Background Texture/Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            </div>

            <div className="max-w-[1800px] mx-auto px-10 relative z-10">
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-xs font-bold border border-white/20 rounded-full w-5 h-5 flex items-center justify-center text-white/40">2</span>
                            <span className="text-xs font-bold uppercase tracking-[0.4em] text-white/40">Prosedur Kerja</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-[1.15]">
                            Proses transparan dan terukur untuk kelancaran bisnis Anda
                        </h2>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, i) => (
                        <div key={i} className="relative p-12 bg-white/5 border border-white/10 hover:border-orange/50 transition-all duration-500 group overflow-hidden">
                            {/* Hover Background Accent */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-orange/10 blur-[60px] translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-700"></div>

                            <span className="text-6xl font-[950] text-white/5 absolute -top-2 -right-2 group-hover:text-orange/10 transition-colors duration-500">{step.num}</span>

                            <div className="relative z-10">
                                <h3 className="text-base font-bold mb-6 uppercase tracking-wider text-white group-hover:text-orange transition-colors duration-300">
                                    {step.title}
                                </h3>
                                <div className="w-8 h-[1px] bg-orange/40 mb-6 group-hover:w-16 transition-all duration-500"></div>
                                <p className="text-white/70 leading-relaxed text-sm font-mono uppercase tracking-wider">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
