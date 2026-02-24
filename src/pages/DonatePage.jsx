import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle2, CreditCard, Wallet, Calendar } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import AnimatedButton from '../components/ui/AnimatedButton';
import { mockProjects } from '../data/mockData';
import { useTheme } from '../contexts/ThemeContext';

const PRESET_AMOUNTS = [100, 500, 1000, 5000];

export default function DonatePage() {
    const { t } = useTranslation();
    const { currentLang } = useTheme();
    const [searchParams] = useSearchParams();
    const initialProjectId = searchParams.get('project');

    const [amount, setAmount] = useState(PRESET_AMOUNTS[1]);
    const [customAmount, setCustomAmount] = useState('');
    const [isRecurring, setIsRecurring] = useState(false);
    const [selectedProject, setSelectedProject] = useState(initialProjectId ? Number(initialProjectId) : mockProjects[0].id);
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [showSuccess, setShowSuccess] = useState(false);

    const isRtl = currentLang === 'ar';

    const handleAmountClick = (val) => {
        setAmount(val);
        setCustomAmount('');
    };

    const handleCustomAmount = (e) => {
        const val = e.target.value;
        setCustomAmount(val);
        if (val) setAmount(Number(val));
    };

    const handleDonate = (e) => {
        e.preventDefault();
        setShowSuccess(true);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-12 relative min-h-[80vh]">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-3xl font-bold mb-8 text-center text-brand-dark dark:text-white">
                    {isRtl ? 'ساهم الآن في صدقة جارية' : 'Contribute Now to a Sadaqah Jariyah'}
                </h1>

                <GlassCard className="p-8">
                    <form onSubmit={handleDonate}>
                        {/* Project Selection */}
                        <div className="mb-8">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                {isRtl ? 'اختر المشروع' : 'Choose a Project'}
                            </label>
                            <select
                                value={selectedProject}
                                onChange={(e) => setSelectedProject(Number(e.target.value))}
                                className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-brand-dark dark:text-white focus:ring-2 focus:ring-brand-green focus:border-transparent transition-shadow outline-none"
                            >
                                {mockProjects.map(p => (
                                    <option key={p.id} value={p.id}>
                                        {isRtl ? p.titleAr : p.titleEn}
                                    </option>
                                ))}
                                <option value={0}>{isRtl ? 'صندوق الصدقات العام' : 'General Sadaqah Fund'}</option>
                            </select>
                        </div>

                        {/* Amount Selection */}
                        <div className="mb-8">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                                {isRtl ? 'قيمة التبرع' : 'Donation Amount'}
                            </label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                {PRESET_AMOUNTS.map(val => (
                                    <button
                                        key={val}
                                        type="button"
                                        onClick={() => handleAmountClick(val)}
                                        className={`relative p-4 rounded-xl font-bold text-lg transition-all duration-300 overflow-hidden
                      ${amount === val && !customAmount ? 'text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                                    >
                                        {amount === val && !customAmount && (
                                            <motion.div
                                                layoutId="activeAmount"
                                                className="absolute inset-0 bg-brand-green"
                                                initial={false}
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                        <span className="relative z-10 flex items-center justify-center gap-1">
                                            {val.toLocaleString()} <span className="text-sm font-normal">{t('currency')}</span>
                                        </span>
                                    </button>
                                ))}
                            </div>

                            <div className="relative">
                                <input
                                    type="number"
                                    placeholder={isRtl ? 'مبلغ آخر' : 'Custom Amount'}
                                    value={customAmount}
                                    onChange={handleCustomAmount}
                                    className={`w-full p-4 rounded-xl border bg-white dark:bg-gray-800 text-brand-dark dark:text-white text-lg transition-shadow outline-none
                    ${customAmount ? 'border-brand-green ring-2 ring-brand-green/20' : 'border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-brand-green'}`}
                                />
                                <div className={`absolute top-1/2 -translate-y-1/2 text-gray-400 font-bold ${isRtl ? 'left-4' : 'right-4'}`}>
                                    {t('currency')}
                                </div>
                            </div>
                        </div>

                        {/* Recurring Toggle */}
                        <div className="mb-8">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className="relative">
                                    <input type="checkbox" className="sr-only" checked={isRecurring} onChange={() => setIsRecurring(!isRecurring)} />
                                    <div className={`block w-14 h-8 rounded-full transition-colors ${isRecurring ? 'bg-brand-green' : 'bg-gray-300 dark:bg-gray-600'}`}></div>
                                    <motion.div
                                        animate={{ x: isRecurring ? (isRtl ? -24 : 24) : 0 }}
                                        className={`absolute top-1 bg-white w-6 h-6 rounded-full transition-transform ${isRtl ? 'right-1' : 'left-1'}`}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-medium text-brand-dark dark:text-white flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-brand-green" />
                                        {isRtl ? 'تبرع شهري مستمر' : 'Monthly Recurring Donation'}
                                    </span>
                                    <span className="text-sm text-gray-500">{isRtl ? 'ضاعف أثرك باستمرارية العطاء' : 'Multiply your impact with continuous giving'}</span>
                                </div>
                            </label>
                        </div>

                        {/* Payment Method Mock */}
                        <div className="mb-10">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                                {isRtl ? 'طريقة الدفع' : 'Payment Method'}
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    type="button"
                                    onClick={() => setPaymentMethod('card')}
                                    className={`p-4 rounded-xl border flex items-center justify-center gap-2 transition-all
                    ${paymentMethod === 'card' ? 'border-brand-green bg-brand-green/5 text-brand-green shadow-sm' : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                                >
                                    <CreditCard className="w-5 h-5" />
                                    <span className="font-medium">{isRtl ? 'بطاقة ائتمان' : 'Credit Card'}</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setPaymentMethod('wallet')}
                                    className={`p-4 rounded-xl border flex items-center justify-center gap-2 transition-all
                    ${paymentMethod === 'wallet' ? 'border-brand-green bg-brand-green/5 text-brand-green shadow-sm' : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                                >
                                    <Wallet className="w-5 h-5" />
                                    <span className="font-medium">{isRtl ? 'محفظة إلكترونية' : 'Digital Wallet'}</span>
                                </button>
                            </div>
                        </div>

                        <AnimatedButton type="submit" className="w-full py-4 text-lg">
                            {t('donate_now')} - {amount.toLocaleString()} {t('currency')}
                        </AnimatedButton>
                    </form>
                </GlassCard>
            </motion.div>

            {/* Success Modal */}
            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark/60 backdrop-blur-sm p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.8, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.8, y: 50 }}
                            className="bg-white dark:bg-brand-dark rounded-2xl p-8 max-w-md w-full text-center shadow-2xl"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                                className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-6"
                            >
                                <CheckCircle2 className="w-12 h-12 text-brand-green" />
                            </motion.div>
                            <h2 className="text-2xl font-bold text-brand-dark dark:text-white mb-2">
                                {isRtl ? 'تقبل الله منك' : 'May Allah Accept From You'}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-8">
                                {isRtl
                                    ? `تم استلام تبرعك بقيمة ${amount.toLocaleString()} ${t('currency')} بنجاح. سيتم توجيهها للمشروع المختار.`
                                    : `Your donation of ${amount.toLocaleString()} ${t('currency')} has been received successfully.`}
                            </p>
                            <AnimatedButton onClick={() => setShowSuccess(false)} className="w-full">
                                {isRtl ? 'العودة للرئيسية' : 'Return to Home'}
                            </AnimatedButton>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
