import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Heart, Users, Target, ArrowDownCircle, ChevronRight, ChevronLeft } from 'lucide-react';
import AnimatedButton from '../components/ui/AnimatedButton';
import GlassCard from '../components/ui/GlassCard';
import CountUpNumber from '../components/ui/CountUpNumber';
import ProgressBar from '../components/ui/ProgressBar';
import { mockProjects, globalImpact } from '../data/mockData';
import { useTheme } from '../contexts/ThemeContext';

export default function LandingPage() {
    const { t } = useTranslation();
    const { currentLang } = useTheme();

    const isRtl = currentLang === 'ar';

    return (
        <div className="w-full">
            {/* 1. Hero Section */}
            <section
                className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 bg-fixed bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/images/hero_ai_bg.png')" }}
            >
                {/* Background Overlay */}
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand-beige/80 via-brand-beige/70 to-brand-beige dark:from-brand-dark/90 dark:via-brand-dark/70 dark:to-brand-dark"></div>

                {/* Animated Background Particles */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-green/20 dark:bg-brand-green/10 rounded-full mix-blend-multiply filter blur-3xl"
                />
                <motion.div
                    animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-gold/20 dark:bg-brand-gold/10 rounded-full mix-blend-multiply filter blur-3xl"
                />

                <div className="z-10 text-center max-w-4xl mx-auto mt-[-5vh]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-brand-dark dark:text-white leading-tight whitespace-nowrap">
                            {t('welcome')}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                            {t('subtext')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link to="/donate">
                                <AnimatedButton variant="primary" className="text-lg px-8 py-4">
                                    {t('donate_now')}
                                </AnimatedButton>
                            </Link>
                            <Link to="/register">
                                <AnimatedButton variant="secondary" className="text-lg px-8 py-4">
                                    {t('create_account')}
                                </AnimatedButton>
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ delay: 1, duration: 2, repeat: Infinity }}
                    className="absolute bottom-10"
                >
                    <ArrowDownCircle className="w-8 h-8 text-gray-400" />
                </motion.div>
            </section>

            {/* 2. Impact Section */}
            <section className="py-20 bg-white/50 dark:bg-brand-dark/50 backdrop-blur-sm relative z-10 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.1 }}>
                            <GlassCard className="h-full text-center flex flex-col items-center justify-center p-8">
                                <Heart className="w-12 h-12 text-brand-green mb-4" />
                                <div className="text-4xl font-bold text-brand-dark dark:text-white mb-2">
                                    <CountUpNumber value={globalImpact.totalDonations} duration={2.5} /> <span className="text-xl text-gray-500">{t('currency')}</span>
                                </div>
                                <div className="text-gray-600 dark:text-gray-400 font-medium">{t('total_donations')}</div>
                            </GlassCard>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.3 }}>
                            <GlassCard className="h-full text-center flex flex-col items-center justify-center p-8">
                                <Users className="w-12 h-12 text-brand-gold mb-4" />
                                <div className="text-4xl font-bold text-brand-dark dark:text-white mb-2">
                                    <CountUpNumber value={globalImpact.numberOfDonors} duration={2} />
                                </div>
                                <div className="text-gray-600 dark:text-gray-400 font-medium">{t('donors')}</div>
                            </GlassCard>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.5 }}>
                            <GlassCard className="h-full text-center flex flex-col items-center justify-center p-8">
                                <Target className="w-12 h-12 text-blue-500 mb-4" />
                                <div className="text-4xl font-bold text-brand-dark dark:text-white mb-2">
                                    <CountUpNumber value={globalImpact.completedProjects} duration={1.5} />
                                </div>
                                <div className="text-gray-600 dark:text-gray-400 font-medium">{t('projects_funded')}</div>
                            </GlassCard>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. How It Works */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-brand-dark dark:text-white">{t('how_it_works')}</h2>
                    <div className="w-24 h-1 bg-brand-green mx-auto mt-6 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connector Line */}
                    <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-700 -z-10 transform -translate-y-1/2"></div>

                    {[1, 2, 3].map((step, idx) => (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: idx * 0.2 }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-16 h-16 rounded-full bg-brand-green text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-brand-green/30 ring-4 ring-white dark:ring-brand-dark">
                                {step}
                            </div>
                            <GlassCard className="w-full text-center" hoverEffect={true}>
                                <h3 className="text-xl font-bold mb-3">{t(`step${step}`)}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    {/* Mock descriptions for steps */}
                                    {step === 1 && (isRtl ? 'تصفح المشاريع المتاحة واختر المشروع الذي يلامس قلبك.' : 'Browse available projects and choose the one that touches your heart.')}
                                    {step === 2 && (isRtl ? 'أدخل تفاصيل الدفع الخاصة بك في بيئة آمنة ومشفرة.' : 'Enter your payment details in a secure and encrypted environment.')}
                                    {step === 3 && (isRtl ? 'تابع أثر تبرعك واحصل على تقارير دورية للإنجازات.' : 'Track your impact and receive periodic progress reports.')}
                                </p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 4. Featured Projects */}
            <section className="py-24 bg-gray-50/50 dark:bg-gray-900/20 backdrop-blur-sm transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-brand-dark dark:text-white">{t('featured_projects')}</h2>
                            <div className="w-24 h-1 bg-brand-green mt-6 rounded-full"></div>
                        </motion.div>
                        <Link to="/donate" className="text-brand-green font-medium flex items-center gap-1 hover:underline">
                            {isRtl ? 'عرض كل المشاريع' : 'View All Projects'} {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mockProjects.map((project, idx) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, type: "spring", bounce: 0.3, delay: idx * 0.15 }}
                            >
                                <GlassCard className="p-0 overflow-hidden group flex flex-col h-full">
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={isRtl ? project.titleAr : project.titleEn}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 right-4 bg-white/90 dark:bg-brand-dark/90 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md text-brand-green">
                                            {project.category}
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold mb-2 text-brand-dark dark:text-white">
                                            {isRtl ? project.titleAr : project.titleEn}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow">
                                            {isRtl ? project.descriptionAr : project.descriptionEn}
                                        </p>

                                        <div className="mt-auto">
                                            <div className="flex justify-between text-sm mb-2">
                                                <span className="font-bold text-brand-dark dark:text-white">{project.raised.toLocaleString()} {t('currency')}</span>
                                                <span className="text-gray-500">{project.goal.toLocaleString()} {t('currency')}</span>
                                            </div>
                                            <ProgressBar current={project.raised} total={project.goal} />

                                            <div className="mt-6">
                                                <Link to={`/donate?project=${project.id}`}>
                                                    <AnimatedButton className="w-full py-2">
                                                        {t('donate_now')}
                                                    </AnimatedButton>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
