import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function ProgressBar({ current, total, className = '' }) {
    const [percentage, setPercentage] = useState(0);
    const controls = useAnimation();

    useEffect(() => {
        const calcPercentage = Math.min(Math.round((current / total) * 100), 100);
        setPercentage(calcPercentage);
        controls.start({
            width: `${calcPercentage}%`,
            transition: { duration: 1.5, ease: "easeOut" }
        });
    }, [current, total, controls]);

    return (
        <div className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2 overflow-hidden ${className}`}>
            <motion.div
                className="bg-brand-green h-3 rounded-full relative"
                initial={{ width: 0 }}
                animate={controls}
            >
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/20 animate-pulse"></div>
            </motion.div>
            <div className="flex justify-between mt-1 text-xs text-gray-500 dark:text-gray-400 font-medium">
                <span>{percentage}%</span>
            </div>
        </div>
    );
}
