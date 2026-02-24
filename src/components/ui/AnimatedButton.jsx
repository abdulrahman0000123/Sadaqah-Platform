import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedButton({ children, onClick, type = 'button', variant = 'primary', className = '', ...props }) {
    const baseClasses = "px-6 py-3 rounded-full font-medium transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-opacity-50 flex items-center justify-center gap-2";
    const variants = {
        primary: "bg-brand-green text-white hover:bg-emerald-600 hover:shadow-lg",
        secondary: "bg-white text-brand-dark dark:bg-brand-dark dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800",
        outline: "bg-transparent text-brand-green border-2 border-brand-green hover:bg-brand-green hover:text-white",
    };

    return (
        <motion.button
            type={type}
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseClasses} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
}
