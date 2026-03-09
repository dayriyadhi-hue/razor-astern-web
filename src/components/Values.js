import React from 'react';
import { ArrowRight, Users, ShieldCheck, HeartHandshake, Eye, Network } from 'lucide-react';

const Values = () => {
    const values = [
        {
            title: "Tim Berpengalaman",
            description: "Konsultan kami telah menangani perizinan jauh sebelum perusahaan ini berdiri.",
            icon: <Users className="w-5 h-5" />
        },
        {
            title: "Layanan Personal",
            description: "Sebagai perusahaan yang fokus dan ramping, setiap klien mendapat perhatian penuh dari tim kami langsung.",
            icon: <HeartHandshake className="w-5 h-5" />
        },
        {
            title: "Legal & Aman",
            description: "Semua proses sesuai regulasi yang legal.",
            icon: <ShieldCheck className="w-5 h-5" />
        },
        {
            title: "Transparan",
            description: "Estimasi waktu dan biaya disampaikan jelas sejak awal, tanpa kejutan di tengah jalan.",
            icon: <Eye className="w-5 h-5" />
        },
        {
            title: "Jaringan Siap",
            description: "Relasi dengan instansi pemerintah sudah terbangun sejak lama.",
            icon: <Network className="w-5 h-5" />
        }
    ];

    return (
        <section id="mengapa-kami" className="py-32 md:py-40 bg-[#F8FAFC] text-navy overflow-hidden relative scroll-mt-20">
            {/* Subtle background pattern - Brighter for Light Mode */}
            <div className="absolute inset-0 opacity-[0.5] pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange/[0.05] rounded-full blur-[150px] translate-x-1/3 -translate-y-1/4"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[120px] -translate-x-1/4 translate-y-1/4"></div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                {/* Section Header */}
                <div className="mb-24 md:mb-32 max-w-3xl">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="h-[1px] w-12 bg-orange"></span>
                        <span className="label-overline text-orange">Filosofi Kami</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.9] uppercase mb-10 text-navy">
                        Perusahaan <span className="font-serif italic font-light text-navy/10 lowercase">baru,</span> <br />
                        <span className="text-orange">pengalaman selamanya.</span>
                    </h2>
                    <p className="text-navy/50 text-lg md:text-xl leading-relaxed font-light max-w-2xl">
                        Kami membawa dedikasi murni dan rekam jejak yang teruji untuk memastikan setiap perizinan bisnis Anda selesai dengan elegan.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
                    {/* Left: Values Grid */}
                    <div className="lg:col-span-7">
                        <div className="grid sm:grid-cols-2 gap-6">
                            {values.map((val, i) => (
                                <div key={i} className="group p-8 bg-white border border-black/[0.03] rounded-2xl hover:border-orange/20 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-700">
                                    <div className="flex flex-col gap-6">
                                        <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-orange group-hover:bg-orange group-hover:text-white group-hover:border-orange transition-all duration-500 bg-[#F9FAFB]">
                                            {val.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-3 tracking-tight text-navy">{val.title}</h3>
                                            <p className="text-navy/40 text-[14px] leading-relaxed group-hover:text-navy/60 transition-colors font-light">{val.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: CTA Card */}
                    <div className="lg:col-span-5">
                        <div className="bg-navy p-12 md:p-16 rounded-3xl h-full flex flex-col justify-between relative overflow-hidden group shadow-2xl shadow-navy/20">
                            {/* Card decoration */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] translate-x-1/4 -translate-y-1/4 group-hover:bg-white/10 transition-colors duration-1000"></div>

                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold mb-8 leading-[1.2] text-white tracking-tight">
                                    Regulasi bisa <span className="text-orange italic font-serif font-light lowercase">rumit.</span> Prosedur bisa berubah sewaktu-waktu.
                                </h3>
                                <p className="text-white/40 text-base md:text-lg leading-relaxed font-light mb-12">
                                    Tapi dengan mitra yang tepat, Anda tidak perlu menghadapinya sendirian. Kami hadir untuk menavigasi setiap detail demi kelangsungan bisnis Anda.
                                </p>
                            </div>

                            <button className="relative z-10 w-full py-6 bg-orange text-white rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-orange/90 transition-all flex items-center justify-center gap-4 active:scale-[0.98] shadow-xl shadow-orange/20">
                                Mulai Konsultasi <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Values;
