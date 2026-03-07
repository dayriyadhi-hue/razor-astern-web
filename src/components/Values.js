import React from 'react';
import { ArrowRight, Users, ShieldCheck, HeartHandshake, Eye, Network } from 'lucide-react';

const Values = () => {
    const values = [
        {
            title: "Tim Berpengalaman",
            description: "Konsultan kami telah menangani perizinan jauh sebelum perusahaan ini berdiri.",
            icon: <Users className="w-6 h-6" />
        },
        {
            title: "Layanan Personal",
            description: "Sebagai perusahaan yang fokus dan ramping, setiap klien mendapat perhatian penuh dari tim kami langsung.",
            icon: <HeartHandshake className="w-6 h-6" />
        },
        {
            title: "Legal & Aman",
            description: "Semua proses sesuai regulasi yang legal.",
            icon: <ShieldCheck className="w-6 h-6" />
        },
        {
            title: "Transparan",
            description: "Estimasi waktu dan biaya disampaikan jelas sejak awal, tanpa kejutan di tengah jalan.",
            icon: <Eye className="w-6 h-6" />
        },
        {
            title: "Jaringan Siap",
            description: "Relasi dengan instansi pemerintah sudah terbangun sejak lama.",
            icon: <Network className="w-6 h-6" />
        }
    ];

    return (
        <section id="mengapa-kami" className="py-24 bg-slate-950 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 -skew-x-12 transform translate-x-1/4"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-8">Mengapa <span className="text-blue-500">Kami?</span></h2>
                        <p className="text-slate-400 mb-12 text-lg">
                            "Perusahaan baru. Tapi pengalamannya bukan." Kami membawa dedikasi dan profesionalisme tinggi untuk setiap kebutuhan perizinan Anda.
                        </p>
                        <div className="space-y-8">
                            {values.map((val, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        {val.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{val.title}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">{val.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12 rounded-3xl">
                        <h3 className="text-3xl font-bold mb-8 leading-tight">Regulasi bisa rumit. Prosedur bisa berubah sewaktu-waktu. Tapi dengan konsultan yang berpengalaman, Anda tidak perlu menghadapinya sendirian.</h3>
                        <div className="space-y-6 mt-8">
                            <p className="text-slate-400 text-lg leading-relaxed">PT Razan Aeterna Solusi hadir sebagai mitra yang paham betul seluk-beluk regulasi agar bisnis Anda terus melangkah tanpa hambatan.</p>
                        </div>
                        <button className="mt-12 w-full py-4 bg-white text-slate-950 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2">
                            Mulai Konsultasi <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Values;
