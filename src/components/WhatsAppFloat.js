'use client';

import React from 'react';
import { motion } from 'motion/react';

const WhatsAppFloat = () => {
    const whatsappNumber = "6281112345678"; // Replace with actual number
    const message = "Halo Razan Aeterna Solusi, saya ingin berkonsultasi mengenai perizinan.";

    const handleClick = () => {
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="fixed bottom-8 right-8 z-[9999]"
        >
            <button
                onClick={handleClick}
                aria-label="Hubungi kami via WhatsApp untuk konsultasi gratis"
                className="group relative flex items-center justify-center w-16 h-16 hover:-translate-y-2 active:scale-95 transition-all duration-500 min-h-[56px] min-w-[56px]"
            >
                {/* Tooltip */}
                <span className="absolute right-[110%] mr-6 glass-effect text-white text-[10px] font-bold uppercase tracking-[0.2em] px-5 py-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 whitespace-nowrap pointer-events-none shadow-2xl border-white/5">
                    Konsultasi Gratis
                </span>

                <div className="relative w-14 h-14 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_10px_20px_rgba(37,211,102,0.4)]">
                    <img
                        src="/WA Icon.svg"
                        alt="Tombol WhatsApp untuk konsultasi gratis"
                        className="w-full h-full object-contain relative z-10"
                        loading="lazy"
                    />
                    {/* Subtle Glow */}
                    <div className="absolute inset-0 bg-[#25D366] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full"></div>
                </div>

                {/* Pulse Effect */}
                <span className="absolute inset-4 rounded-full bg-[#25D366] animate-ping opacity-10 pointer-events-none"></span>
            </button>
        </motion.div>
    );
};

export default WhatsAppFloat;
