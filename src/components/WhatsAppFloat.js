'use client';

import React from 'react';
import { motion } from 'framer-motion';

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
                className="group relative flex items-center justify-center w-16 h-16 hover:-translate-y-1 active:scale-95 transition-all duration-300"
            >
                {/* Tooltip */}
                <span className="absolute right-[110%] mr-4 bg-white text-navy text-[10px] font-mono uppercase tracking-[0.2em] px-4 py-2 rounded border border-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-sm">
                    Konsultasi Gratis
                </span>

                <div className="relative w-14 h-14 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_10px_20px_rgba(37,211,102,0.4)]">
                    <img
                        src="/WA Icon.svg"
                        alt="WhatsApp"
                        className="w-full h-full object-contain relative z-10"
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
