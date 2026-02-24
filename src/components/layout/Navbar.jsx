import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Moon, Sun, Globe, HeartHandshake } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { motion } from 'framer-motion';

export default function Navbar() {
    const { t } = useTranslation();
    const { isDarkMode, toggleTheme, changeLanguage, currentLang } = useTheme();

    return (
        <nav className="fixed top-4 left-0 right-0 z-50 mx-auto w-[calc(100%-2rem)] max-w-7xl rounded-2xl backdrop-blur-md bg-white/60 dark:bg-brand-dark/60 border border-brand-green dark:border-white shadow-xl transition-all duration-300">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <HeartHandshake className="h-8 w-8 text-brand-green group-hover:text-brand-gold transition-colors" />
                        </motion.div>
                        <span className="font-bold text-xl tracking-tight dark:text-brand-green">Sadaqah</span>
                    </Link>

                    {/* Nav Links */}
                    <div className="hidden md:flex space-x-8 rtl:space-x-reverse items-center">
                        <Link to="/" className="hover:text-brand-green dark:text-brand-green transition-colors font-medium">{t('home')}</Link>
                        <Link to="/projects" className="hover:text-brand-green dark:text-brand-green transition-colors font-medium">{t('projects')}</Link>
                        <Link to="/dashboard" className="hover:text-brand-green dark:text-brand-green transition-colors font-medium">{t('dashboard')}</Link>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-brand-green transition-colors"
                            aria-label="Toggle Theme"
                        >
                            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                        <button
                            onClick={() => changeLanguage(currentLang === 'ar' ? 'en' : 'ar')}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-brand-green transition-colors flex items-center justify-center font-bold font-sans"
                            aria-label="Toggle Language"
                        >
                            <Globe className="w-5 h-5 mx-1" />
                            <span className="text-sm uppercase">{currentLang === 'ar' ? 'en' : 'ar'}</span>
                        </button>
                        <Link
                            to="/donate"
                            className="hidden md:flex bg-brand-green hover:bg-emerald-600 text-white px-5 py-2 rounded-full font-medium transition-all transform hover:scale-105 hover:shadow-lg items-center justify-center gap-2"
                        >
                            {t('donate_now')}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
