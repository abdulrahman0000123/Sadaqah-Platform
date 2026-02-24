import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate, Link } from 'react-router-dom';
import { Shield, Mail, Phone, User, Lock, ArrowRight, ArrowLeft } from 'lucide-react';
import AnimatedButton from '../components/ui/AnimatedButton';
import { useTheme } from '../contexts/ThemeContext';

export default function RegisterPage() {
    const { t } = useTranslation();
    const { currentLang } = useTheme();
    const navigate = useNavigate();
    const isRtl = currentLang === 'ar';

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const [passwordStrength, setPasswordStrength] = useState(0);
    const [errors, setErrors] = useState({});

    const calculateStrength = (pass) => {
        let score = 0;
        if (pass.length > 5) score += 1;
        if (pass.length > 8) score += 1;
        if (/[A-Z]/.test(pass)) score += 1;
        if (/[0-9]/.test(pass)) score += 1;
        if (/[^A-Za-z0-9]/.test(pass)) score += 1;
        return Math.min(score, 4);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (name === 'password') {
            setPasswordStrength(calculateStrength(value));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};
        if (!formData.fullName) newErrors.fullName = isRtl ? 'الاسم مطلوب' : 'Name is required';
        if (!formData.email) newErrors.email = isRtl ? 'البريد الإلكتروني مطلوب' : 'Email is required';
        if (!formData.password) newErrors.password = isRtl ? 'كلمة المرور مطلوبة' : 'Password is required';
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = isRtl ? 'كلمات المرور لا تتطابق' : 'Passwords do not match';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // simulate success and redirect
            setTimeout(() => {
                navigate('/dashboard');
            }, 800);
        }
    };

    const getStrengthColor = () => {
        switch (passwordStrength) {
            case 1: return 'bg-red-500';
            case 2: return 'bg-orange-500';
            case 3: return 'bg-brand-gold';
            case 4: return 'bg-brand-green';
            default: return 'bg-gray-200 dark:bg-gray-700';
        }
    };

    const inputClasses = "w-full p-4 pt-6 pb-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-brand-dark dark:text-white transition-all outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green peer block appearance-none";
    const labelClasses = `absolute text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] peer-focus:text-brand-green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 ${isRtl ? 'right-12 peer-focus:right-12' : 'left-12 peer-focus:left-12'}`;

    return (
        <div className="min-h-screen flex items-center justify-center p-4 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-5xl bg-white dark:bg-brand-dark rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-gray-100 dark:border-gray-800"
            >

                {/* Left Panel - Illustration/Quote */}
                <div className="w-full md:w-5/12 bg-brand-green p-12 text-white flex flex-col justify-between relative overflow-hidden">
                    {/* Background Decorative Pattern */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full border-8 border-white/10"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full border-8 border-white/10"
                    />

                    <div className="relative z-10">
                        <Link to="/" className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity">
                            {isRtl ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
                            <span className="font-medium">{t('welcome').split('…')[0]}</span>
                        </Link>
                    </div>

                    <div className="relative z-10 my-16">
                        <h2 className="text-4xl font-bold mb-6 leading-tight">
                            {isRtl ? 'ابنِ أثراً لا ينقطع' : 'Build an Unending Legacy'}
                        </h2>
                        <p className="text-emerald-50 text-lg leading-relaxed">
                            {isRtl
                                ? 'انضم إلينا اليوم وابدأ رحلتك في العطاء. كل مساهمة تصنع فرقاً حقيقياً في حياة الآخرين وتبقى لك كصدقة جارية.'
                                : 'Join us today and start your journey of giving. Every contribution makes a real difference and remains as a continuous charity.'}
                        </p>
                    </div>

                    <div className="relative z-10 flex items-center gap-4 text-emerald-100">
                        <Shield className="w-6 h-6" />
                        <span className="text-sm">{isRtl ? 'بياناتك و تبرعاتك مشفرة وآمنة تماماً' : 'Your data and donations are fully encrypted and secure'}</span>
                    </div>
                </div>

                {/* Right Panel - Form */}
                <div className="w-full md:w-7/12 p-8 md:p-12">
                    <h2 className="text-3xl font-bold text-brand-dark dark:text-white mb-2">
                        {t('create_account')}
                    </h2>
                    <p className="text-gray-500 mb-8">
                        {isRtl ? 'لديك حساب بالفعل؟' : 'Already have an account?'} <Link to="#" className="text-brand-green font-medium hover:underline">{t('login')}</Link>
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        <div className="relative group">
                            <div className={`absolute top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-green transition-colors ${isRtl ? 'right-4' : 'left-4'}`}>
                                <User className="w-5 h-5" />
                            </div>
                            <input type="text" name="fullName" id="fullName" placeholder=" " value={formData.fullName} onChange={handleChange} className={inputClasses} />
                            <label htmlFor="fullName" className={labelClasses}>
                                {isRtl ? 'الاسم الكامل' : 'Full Name'}
                            </label>
                            <AnimatePresence>
                                {errors.fullName && (
                                    <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-red-500 text-sm mt-1">
                                        {errors.fullName}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative group">
                                <div className={`absolute top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-green transition-colors ${isRtl ? 'right-4' : 'left-4'}`}>
                                    <Mail className="w-5 h-5" />
                                </div>
                                <input type="email" name="email" id="email" placeholder=" " value={formData.email} onChange={handleChange} className={inputClasses} />
                                <label htmlFor="email" className={labelClasses}>
                                    {isRtl ? 'البريد الإلكتروني' : 'Email'}
                                </label>
                                <AnimatePresence>
                                    {errors.email && (
                                        <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-red-500 text-sm mt-1">
                                            {errors.email}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="relative group">
                                <div className={`absolute top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-green transition-colors ${isRtl ? 'right-4' : 'left-4'}`}>
                                    <Phone className="w-5 h-5" />
                                </div>
                                <input type="tel" name="phone" id="phone" placeholder=" " value={formData.phone} onChange={handleChange} className={inputClasses} />
                                <label htmlFor="phone" className={labelClasses}>
                                    {isRtl ? 'رقم الهاتف' : 'Phone'}
                                </label>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className={`absolute top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-green transition-colors ${isRtl ? 'right-4' : 'left-4'}`}>
                                <Lock className="w-5 h-5" />
                            </div>
                            <input type="password" name="password" id="password" placeholder=" " value={formData.password} onChange={handleChange} className={inputClasses} />
                            <label htmlFor="password" className={labelClasses}>
                                {isRtl ? 'كلمة المرور' : 'Password'}
                            </label>

                            {/* Password Strength */}
                            <div className="flex gap-1 mt-2">
                                {[1, 2, 3, 4].map(level => (
                                    <motion.div
                                        key={level}
                                        className={`h-1 flex-1 rounded-full transition-colors duration-300 ${level <= passwordStrength ? getStrengthColor() : 'bg-gray-200 dark:bg-gray-700'}`}
                                        initial={false}
                                        animate={{ scale: level <= passwordStrength ? [1, 1.1, 1] : 1 }}
                                    />
                                ))}
                            </div>

                            <AnimatePresence>
                                {errors.password && (
                                    <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-red-500 text-sm mt-1">
                                        {errors.password}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="relative group">
                            <div className={`absolute top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-green transition-colors ${isRtl ? 'right-4' : 'left-4'}`}>
                                <Lock className="w-5 h-5" />
                            </div>
                            <input type="password" name="confirmPassword" id="confirmPassword" placeholder=" " value={formData.confirmPassword} onChange={handleChange} className={inputClasses} />
                            <label htmlFor="confirmPassword" className={labelClasses}>
                                {isRtl ? 'تأكيد كلمة المرور' : 'Confirm Password'}
                            </label>
                            <AnimatePresence>
                                {errors.confirmPassword && (
                                    <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-red-500 text-sm mt-1">
                                        {errors.confirmPassword}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>

                        <AnimatedButton type="submit" className="w-full mt-8 py-4 text-lg">
                            {t('create_account')}
                        </AnimatedButton>
                    </form>
                </div>
            </motion.div>
        </div>
    );
}
