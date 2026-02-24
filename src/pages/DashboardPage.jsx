import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
    Chart as ChartJS, CategoryScale, LinearScale, PointElement,
    LineElement, Title, Tooltip, Legend, ArcElement, Filler
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';
import { LayoutDashboard, History, Settings, Heart, Bell } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import CountUpNumber from '../components/ui/CountUpNumber';
import ProgressBar from '../components/ui/ProgressBar';
import AnimatedButton from '../components/ui/AnimatedButton';
import { userDonations, mockProjects } from '../data/mockData';
import { useTheme } from '../contexts/ThemeContext';

ChartJS.register(
    CategoryScale, LinearScale, PointElement, LineElement,
    Title, Tooltip, Legend, ArcElement, Filler
);

export default function DashboardPage() {
    const { t } = useTranslation();
    const { currentLang, isDarkMode } = useTheme();
    const isRtl = currentLang === 'ar';

    const [activeTab, setActiveTab] = useState('overview');

    // Chart Data Preparation
    const lineChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                fill: true,
                label: isRtl ? 'التبرعات الشهرية' : 'Monthly Donations',
                data: [150, 300, 200, 500, 250, 750],
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.2)',
                tension: 0.4,
            },
        ],
    };

    const lineChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
        },
        scales: {
            y: { grid: { color: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)' } },
            x: { grid: { display: false } },
        }
    };

    const donutChartData = {
        labels: [isRtl ? 'مياه' : 'Water', isRtl ? 'تعليم' : 'Education', isRtl ? 'صحة' : 'Health'],
        datasets: [
            {
                data: [45, 30, 25],
                backgroundColor: ['#10b981', '#fbbf24', '#3b82f6'],
                borderWidth: 0,
            },
        ],
    };

    const donutChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '75%',
        plugins: {
            legend: { position: 'bottom', labels: { color: isDarkMode ? '#e5e7eb' : '#374151' } }
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen flex flex-col md:flex-row gap-8">

            {/* Sidebar Navigation */}
            <motion.aside
                initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="w-full md:w-64 shrink-0 space-y-2"
            >
                <GlassCard className="p-6 sticky top-24">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green font-bold text-xl">
                            A
                        </div>
                        <div>
                            <h3 className="font-bold text-brand-dark dark:text-white">Ahmed Ali</h3>
                            <p className="text-xs text-gray-500">Premium Donor</p>
                        </div>
                    </div>

                    <nav className="space-y-2">
                        {[
                            { id: 'overview', icon: LayoutDashboard, label: isRtl ? 'لوحة التحكم' : 'Overview' },
                            { id: 'history', icon: History, label: isRtl ? 'سجل التبرعات' : 'Donation History' },
                            { id: 'projects', icon: Heart, label: isRtl ? 'مشاريعي المدعومة' : 'Supported Projects' },
                            { id: 'settings', icon: Settings, label: isRtl ? 'الإعدادات' : 'Settings' },
                        ].map(item => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === item.id ? 'bg-brand-green text-white shadow-md' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                            >
                                <item.icon className="w-5 h-5" />
                                <span className="font-medium">{item.label}</span>
                            </button>
                        ))}
                    </nav>
                </GlassCard>
            </motion.aside>

            {/* Main Content Area */}
            <main className="flex-1 w-full">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    {activeTab === 'overview' && (
                        <div className="space-y-8">
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl font-bold text-brand-dark dark:text-white">
                                    {isRtl ? 'مرحباً بعودتك، أحمد' : 'Welcome back, Ahmed'}
                                </h2>
                                <button className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-sm relative">
                                    <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                                    <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-gray-800"></span>
                                </button>
                            </div>

                            {/* Stats Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <GlassCard className="p-6">
                                    <p className="text-gray-500 text-sm mb-2">{isRtl ? 'إجمالي التبرعات' : 'Total Donated'}</p>
                                    <div className="text-3xl font-bold text-brand-green">
                                        <CountUpNumber value={2150} /> <span className="text-lg text-gray-400">{t('currency')}</span>
                                    </div>
                                </GlassCard>
                                <GlassCard className="p-6">
                                    <p className="text-gray-500 text-sm mb-2">{isRtl ? 'المشاريع المدعومة' : 'Supported Projects'}</p>
                                    <div className="text-3xl font-bold text-brand-gold">
                                        <CountUpNumber value={12} />
                                    </div>
                                </GlassCard>
                                <GlassCard className="p-6">
                                    <p className="text-gray-500 text-sm mb-2">{isRtl ? 'نقاط الأجر' : 'Reward Points'}</p>
                                    <div className="text-3xl font-bold text-blue-500">
                                        <CountUpNumber value={8500} />
                                    </div>
                                </GlassCard>
                            </div>

                            {/* Charts Row */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                <GlassCard className="p-6 lg:col-span-2 h-80 flex flex-col">
                                    <h3 className="font-bold text-brand-dark dark:text-white mb-4">
                                        {isRtl ? 'تطور العطاء' : 'Giving Impact Over Time'}
                                    </h3>
                                    <div className="flex-1 relative">
                                        <Line data={lineChartData} options={lineChartOptions} />
                                    </div>
                                </GlassCard>
                                <GlassCard className="p-6 h-80 flex flex-col">
                                    <h3 className="font-bold text-brand-dark dark:text-white mb-4">
                                        {isRtl ? 'توزيع التبرعات' : 'Donation Distribution'}
                                    </h3>
                                    <div className="flex-1 relative">
                                        <Doughnut data={donutChartData} options={donutChartOptions} />
                                    </div>
                                </GlassCard>
                            </div>
                        </div>
                    )}

                    {activeTab === 'history' && (
                        <GlassCard className="p-6">
                            <h2 className="text-2xl font-bold text-brand-dark dark:text-white mb-6">
                                {isRtl ? 'سجل التبرعات' : 'Donation History'}
                            </h2>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-gray-200 dark:border-gray-700">
                                            <th className="py-4 px-4 font-semibold text-gray-500">{isRtl ? 'التاريخ' : 'Date'}</th>
                                            <th className="py-4 px-4 font-semibold text-gray-500">{isRtl ? 'المشروع' : 'Project'}</th>
                                            <th className="py-4 px-4 font-semibold text-gray-500">{isRtl ? 'المبلغ' : 'Amount'}</th>
                                            <th className="py-4 px-4 font-semibold text-gray-500">{isRtl ? 'الحالة' : 'Status'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {userDonations.map((donation, idx) => (
                                            <motion.tr
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.1 }}
                                                key={donation.id}
                                                className="border-b border-gray-100 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                                            >
                                                <td className="py-4 px-4 text-gray-600 dark:text-gray-300">{donation.date}</td>
                                                <td className="py-4 px-4 font-medium text-brand-dark dark:text-white">
                                                    {isRtl ? donation.projectTitleAr : donation.projectTitleEn}
                                                </td>
                                                <td className="py-4 px-4 font-bold text-brand-green">
                                                    {donation.amount} {t('currency')}
                                                </td>
                                                <td className="py-4 px-4">
                                                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${donation.status === 'completed'
                                                            ? 'bg-brand-green/10 text-brand-green'
                                                            : 'bg-brand-gold/10 text-brand-gold'
                                                        }`}>
                                                        {donation.status === 'completed'
                                                            ? (isRtl ? 'مكتمل' : 'Completed')
                                                            : (isRtl ? 'نشط' : 'Active')}
                                                    </span>
                                                </td>
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </GlassCard>
                    )}

                    {activeTab === 'projects' && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-brand-dark dark:text-white mb-6">
                                {isRtl ? 'مشاريعي المدعومة' : 'Supported Projects'}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {mockProjects.slice(0, 2).map((project, idx) => (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: idx * 0.1 }}
                                    >
                                        <GlassCard className="p-6">
                                            <div className="flex gap-4 mb-4">
                                                <img src={project.image} alt={project.titleEn} className="w-20 h-20 rounded-lg object-cover" />
                                                <div>
                                                    <h3 className="font-bold text-lg text-brand-dark dark:text-white capitalize">
                                                        {isRtl ? project.titleAr : project.titleEn}
                                                    </h3>
                                                    <p className="text-sm text-gray-500 mb-2">{project.category}</p>
                                                </div>
                                            </div>
                                            <ProgressBar current={project.raised} total={project.goal} />
                                            <div className="mt-4 flex justify-between items-center">
                                                <span className="text-sm text-gray-500">
                                                    {isRtl ? `ساهمت بـ 500 ${t('currency')}` : `You contributed 500 ${t('currency')}`}
                                                </span>
                                                <AnimatedButton variant="outline" className="px-4 py-1.5 text-sm">
                                                    {isRtl ? 'تبرع مرة أخرى' : 'Donate Again'}
                                                </AnimatedButton>
                                            </div>
                                        </GlassCard>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'settings' && (
                        <GlassCard className="p-8">
                            <h2 className="text-2xl font-bold text-brand-dark dark:text-white mb-8">
                                {isRtl ? 'الإعدادات الشخصية' : 'Account Settings'}
                            </h2>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-lg font-bold mb-4">{isRtl ? 'الملف الشخصي' : 'Profile Information'}</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm text-gray-500 mb-2">{isRtl ? 'الاسم' : 'Name'}</label>
                                            <input type="text" defaultValue="Ahmed Ali" className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-brand-green outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-gray-500 mb-2">{isRtl ? 'البريد الإلكتروني' : 'Email'}</label>
                                            <input type="email" defaultValue="ahmed@example.com" className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-brand-green outline-none" />
                                        </div>
                                    </div>
                                    <AnimatedButton className="mt-4">{isRtl ? 'حفظ التعديلات' : 'Save Changes'}</AnimatedButton>
                                </div>

                                <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
                                    <h3 className="text-lg font-bold mb-4">{isRtl ? 'التفضيلات والإشعارات' : 'Preferences & Notifications'}</h3>
                                    <div className="space-y-4">
                                        <label className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                                            <div>
                                                <div className="font-medium text-brand-dark dark:text-white">{isRtl ? 'تجديد التبرع تلقائياً' : 'Auto-renew Donations'}</div>
                                                <div className="text-sm text-gray-500">{isRtl ? 'السماح للتطبيقات بتجديد الاشتراكات الشهرية تلقائياً' : 'Allow automatic execution of monthly subscriptions'}</div>
                                            </div>
                                            <div className="relative cursor-pointer">
                                                <input type="checkbox" className="sr-only" defaultChecked />
                                                <div className="block w-14 h-8 rounded-full bg-brand-green transition-colors"></div>
                                                <div className={`absolute top-1 bg-white w-6 h-6 rounded-full transition-transform ${isRtl ? '-translate-x-6 right-1' : 'translate-x-6 left-1'}`}></div>
                                            </div>
                                        </label>

                                        <label className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                                            <div>
                                                <div className="font-medium text-brand-dark dark:text-white">{isRtl ? 'رسائل المشاريع' : 'Project Updates'}</div>
                                                <div className="text-sm text-gray-500">{isRtl ? 'استلام تحديثات المشاريع عبر البريد' : 'Receive email updates on supported projects'}</div>
                                            </div>
                                            <div className="relative cursor-pointer">
                                                <input type="checkbox" className="sr-only" defaultChecked />
                                                <div className="block w-14 h-8 rounded-full bg-brand-green transition-colors"></div>
                                                <div className={`absolute top-1 bg-white w-6 h-6 rounded-full transition-transform ${isRtl ? '-translate-x-6 right-1' : 'translate-x-6 left-1'}`}></div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    )}

                </motion.div>
            </main>
        </div>
    );
}
