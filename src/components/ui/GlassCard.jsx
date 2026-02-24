import React from 'react';
import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', hoverEffect = true }) {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' } : {}}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`glass-card rounded-2xl p-6 shadow-sm transition-all duration-300 ${className}`}
        >
            {children}
        </motion.div>
    );
}
