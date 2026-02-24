import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

export default function CountUpNumber({ value, duration = 2, className = '' }) {
    const [displayValue, setDisplayValue] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            const animation = animate(0, value, {
                duration,
                onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
            });
            return animation.stop;
        }
    }, [value, duration, isInView]);

    return (
        <motion.span ref={ref} className={className}>
            {displayValue.toLocaleString()}
        </motion.span>
    );
}
