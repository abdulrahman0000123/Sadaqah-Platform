import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            home: "Home",
            projects: "Projects",
            view_details: "View Details",
            project_details: "Project Details",
            welcome: "Sadaqah Jariyah... An Uninterrupted Impact",
            subtext: "Your continuous charity funds sustainable projects that empower communities and bring lasting rewards.",
            donate_now: "Donate Now",
            create_account: "Create Account",
            how_it_works: "How It Works",
            step1: "Choose a Project",
            step2: "Enter Your Details",
            step3: "Earn the Reward",
            featured_projects: "Featured Projects",
            total_donations: "Total Donations",
            donors: "Number of Donors",
            projects_funded: "Projects Funded",
            currency: "EGP",
            dashboard: "Dashboard",
            my_donations: "My Donations",
            settings: "Settings",
            logout: "Logout",
            login: "Login"
        }
    },
    ar: {
        translation: {
            home: "الرئيسية",
            projects: "المشاريع",
            view_details: "عرض التفاصيل",
            project_details: "تفاصيل المشروع",
            welcome: "صدقة جارية… أثر لا ينقطع",
            subtext: "صدقتك الجارية تدعم مشاريع مستدامة تمكن المجتمعات وتجلب لك أجراً دائماً.",
            donate_now: "تبرع الآن",
            create_account: "إنشاء حساب",
            how_it_works: "آلية العمل",
            step1: "اختر المشروع",
            step2: "أدخل بياناتك",
            step3: "ساهم في الأجر",
            featured_projects: "مشاريع مميزة",
            total_donations: "إجمالي التبرعات",
            donors: "عدد المتبرعين",
            projects_funded: "مشاريع تم تمويلها",
            currency: "ج.م",
            dashboard: "لوحة التحكم",
            my_donations: "تبرعاتي",
            settings: "الإعدادات",
            logout: "تسجيل الخروج",
            login: "تسجيل الدخول"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "ar", // default language
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
