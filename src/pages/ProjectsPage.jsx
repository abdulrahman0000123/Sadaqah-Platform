import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { useTheme } from '../contexts/ThemeContext';
import AnimatedButton from '../components/ui/AnimatedButton';

export default function ProjectsPage() {
    const { t } = useTranslation();
    const { currentLang } = useTheme();
    const isRtl = currentLang === 'ar';

    return (
        <div className="w-full">
            {/* Header */}
            <div className="bg-brand-green/10 dark:bg-brand-green/10 pt-32 pb-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-brand-dark dark:text-white mb-6"
                    >
                        {t('projects')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                    >
                        {t('subtext')}
                    </motion.p>
                </div>
            </div>

            {/* Projects List */}
            <div className="flex flex-col">
                {projectsData.map((project, index) => (
                    <section
                        key={project.id}
                        className={`w-full py-20 ${index % 2 === 0 ? 'bg-white dark:bg-brand-dark' : 'bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800'}`}
                    >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
                                {/* Image */}
                                <motion.div
                                    className="w-full md:w-1/2"
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
                                        <div className="absolute inset-0 bg-brand-green/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                                        <img
                                            src={project.image}
                                            alt={isRtl ? project.title.ar : project.title.en}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </motion.div>

                                {/* Content */}
                                <motion.div
                                    className="w-full md:w-1/2 space-y-6"
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <h2 className="text-3xl md:text-4xl font-bold text-brand-dark dark:text-white leading-tight">
                                        {isRtl ? project.title.ar : project.title.en}
                                    </h2>
                                    <div className="w-20 h-1 bg-brand-green rounded-full" />
                                    <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {isRtl ? project.brief.ar : project.brief.en}
                                    </p>

                                    <div className="pt-6">
                                        <Link to={`/projects/${project.id}`}>
                                            <AnimatedButton className="px-8 py-3 text-lg group">
                                                <span>{t('view_details')}</span>
                                                <motion.span
                                                    className={`inline-block mx-2 ${isRtl ? 'rotate-180' : ''}`}
                                                    initial={{ x: 0 }}
                                                    whileHover={{ x: isRtl ? -5 : 5 }}
                                                >
                                                    →
                                                </motion.span>
                                            </AnimatedButton>
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
