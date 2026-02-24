import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { projectsData } from '../data/projects';
import { useTheme } from '../contexts/ThemeContext';
import AnimatedButton from '../components/ui/AnimatedButton';
import { HeartHandshake, Users, Target } from 'lucide-react';

export default function ProjectDetailsPage() {
    const { id } = useParams();
    const { t } = useTranslation();
    const { currentLang } = useTheme();
    const isRtl = currentLang === 'ar';

    const project = projectsData.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <h2 className="text-2xl font-bold text-brand-dark dark:text-white">
                    {isRtl ? 'المشروع غير موجود' : 'Project not found'}
                </h2>
            </div>
        );
    }

    const progress = Math.min(100, (project.raised / project.goal) * 100);

    return (
        <div className="w-full min-h-screen bg-gray-50 dark:bg-brand-dark pb-20">
            {/* Hero Image */}
            <div className="relative w-full h-[50vh] md:h-[60vh]">
                <img
                    src={project.image}
                    alt={isRtl ? project.title.ar : project.title.en}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/50 to-transparent flex items-end">
                    <div className="max-w-4xl mx-auto px-4 pb-12 w-full">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
                        >
                            {isRtl ? project.title.ar : project.title.en}
                        </motion.h1>
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 dark:border-gray-700"
                >
                    {/* Stats grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 border-b border-gray-100 dark:border-gray-700 pb-12">
                        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 transition-transform hover:-translate-y-1">
                            <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mb-4">
                                <Target className="w-8 h-8 text-brand-green" />
                            </div>
                            <span className="text-sm text-gray-500 mb-2 font-medium uppercase tracking-wider">{isRtl ? 'الهدف' : 'Goal'}</span>
                            <span className="text-2xl font-bold text-brand-dark dark:text-white">
                                {project.goal.toLocaleString()} <span className="text-lg font-normal text-gray-500">{t('currency')}</span>
                            </span>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-brand-green/10 dark:bg-brand-green/5 ring-2 ring-brand-green/20 shadow-lg shadow-brand-green/10 transform scale-105">
                            <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mb-4 shadow-md">
                                <HeartHandshake className="w-8 h-8 text-white" />
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium uppercase tracking-wider">{isRtl ? 'تم جمعه' : 'Raised'}</span>
                            <span className="text-3xl font-bold text-brand-green">
                                {project.raised.toLocaleString()} <span className="text-xl font-normal opacity-80">{t('currency')}</span>
                            </span>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 transition-transform hover:-translate-y-1">
                            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                                <Users className="w-8 h-8 text-blue-500" />
                            </div>
                            <span className="text-sm text-gray-500 mb-2 font-medium uppercase tracking-wider">{t('donors')}</span>
                            <span className="text-2xl font-bold text-brand-dark dark:text-white">
                                {project.donors.toLocaleString()}
                            </span>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-14">
                        <div className="flex justify-between text-sm mb-3 text-gray-600 dark:text-gray-400 font-bold tracking-wide">
                            <span>{Math.round(progress)}% {isRtl ? 'مكتمل' : 'Completed'}</span>
                        </div>
                        <div className="w-full h-5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 1.5, type: "spring", bounce: 0.2, delay: 0.5 }}
                                className="h-full bg-gradient-to-r from-emerald-400 to-brand-green rounded-full relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-white/20 w-full h-full" style={{ backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.15) 50%, rgba(255,255,255,.15) 75%, transparent 75%, transparent)' }} />
                            </motion.div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-3xl font-bold text-brand-dark dark:text-white">
                                {t('project_details')}
                            </h2>
                            <div className="h-px bg-gray-200 dark:bg-gray-700 flex-1" />
                        </div>
                        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line font-medium">
                            {isRtl ? project.description.ar : project.description.en}
                        </p>
                    </div>

                    {/* Donate Action */}
                    <div className="flex justify-center pt-10 border-t border-gray-100 dark:border-gray-700">
                        <Link to={`/donate?project=${project.id}`} className="w-full md:w-2/3">
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <AnimatedButton className="w-full px-12 py-5 text-2xl font-bold shadow-2xl shadow-brand-green/30 flex items-center justify-center gap-3">
                                    <HeartHandshake className="w-7 h-7" />
                                    {t('donate_now')}
                                </AnimatedButton>
                            </motion.div>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
