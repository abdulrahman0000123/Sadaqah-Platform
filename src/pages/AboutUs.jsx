import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Eye, Target, ShieldCheck, Activity, LineChart, HandHeart } from 'lucide-react';

const AboutUs = () => {
    const { t } = useTranslation();

    const services = [
        {
            icon: ShieldCheck,
            title: t('service_1_title'),
            desc: t('service_1_desc'),
            color: 'text-brand-green'
        },
        {
            icon: LineChart,
            title: t('service_2_title'),
            desc: t('service_2_desc'),
            color: 'text-brand-gold'
        },
        {
            icon: Activity,
            title: t('service_3_title'),
            desc: t('service_3_desc'),
            color: 'text-emerald-500'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div className="min-h-screen bg-brand-light dark:bg-brand-dark pt-28 pb-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden mb-20 py-20">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-green/10 to-brand-gold/10 dark:from-brand-green/5 dark:to-brand-gold/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            className="inline-flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-full shadow-xl mb-8 border border-brand-green/20"
                        >
                            <HandHeart className="w-12 h-12 text-brand-green" />
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight"
                        >
                            {t('about_hero_title')}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300"
                        >
                            {t('about_hero_subtitle')}
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                    {/* Vision Container */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 group"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 bg-brand-green/10 rounded-2xl group-hover:scale-110 transition-transform">
                                <Eye className="w-8 h-8 text-brand-green" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t('our_vision')}</h2>
                        </div>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            {t('vision_text')}
                        </p>
                    </motion.div>

                    {/* Mission Container */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 group"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 bg-brand-gold/10 rounded-2xl group-hover:scale-110 transition-transform">
                                <Target className="w-8 h-8 text-brand-gold" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t('our_mission')}</h2>
                        </div>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            {t('mission_text')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {t('our_services')}
                    </h2>
                    <div className="w-24 h-1 bg-brand-green mx-auto rounded-full"></div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-brand-green/5 dark:to-brand-green/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                                <div className={`inline-flex p-4 rounded-2xl bg-gray-50 dark:bg-gray-700 mb-6 group-hover:bg-opacity-50 transition-colors`}>
                                    <Icon className={`w-8 h-8 ${service.color}`} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {service.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </section>
        </div>
    );
};

export default AboutUs;
