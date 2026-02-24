import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-white dark:bg-brand-dark border-t border-gray-200 dark:border-gray-800 py-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    © {new Date().getFullYear()} Sadaqah Jariyah Platform. All rights reserved.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="text-gray-500 hover:text-brand-green transition-colors text-sm">Privacy Policy</a>
                    <a href="#" className="text-gray-500 hover:text-brand-green transition-colors text-sm">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
