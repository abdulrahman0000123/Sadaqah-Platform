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
            login: "Login",
            about_us: "About Us",
            about_hero_title: "Who We Are",
            about_hero_subtitle: "Empowering communities through sustainable charity.",
            our_vision: "Our Vision",
            vision_text: "To create a world where continuous charity (Sadaqah Jariyah) ensures long-term impact and sustainable growth for communities in need.",
            our_mission: "Our Mission",
            mission_text: "We aim to connect generous donors with verified, high-impact projects, ensuring transparency and maximizing the eternal reward of every contribution.",
            our_services: "Our Services",
            service_1_title: "Verified Projects",
            service_1_desc: "We rigorously vet all projects to ensure your donations reach those who need them most.",
            service_2_title: "Transparent Reporting",
            service_2_desc: "Track the progress of the projects you fund with detailed updates and reports.",
            service_3_title: "Sustainable Impact",
            service_3_desc: "Focusing on Sadaqah Jariyah that provides ongoing benefits to communities."
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
            login: "تسجيل الدخول",
            about_us: "من نحن",
            about_hero_title: "من نحن",
            about_hero_subtitle: "تمكين المجتمعات من خلال الصدقة الجارية المستدامة.",
            our_vision: "رؤيتنا",
            vision_text: "خلق عالم تضمن فيه الصدقة الجارية تأثيراً طويل الأمد ونمواً مستداماً للمجتمعات المحتاجة.",
            our_mission: "رسالتنا",
            mission_text: "نهدف إلى ربط المتبرعين الكرام بمشاريع موثوقة وعالية التأثير، مع ضمان الشفافية وتعظيم الأجر المستمر لكل مساهمة.",
            our_services: "خدماتنا",
            service_1_title: "مشاريع موثوقة",
            service_1_desc: "نقوم بدراسة جميع المشاريع بدقة لضمان وصول تبرعاتك لمن هم في أمس الحاجة إليها.",
            service_2_title: "تقارير شفافة",
            service_2_desc: "تتبع تقدم المشاريع التي تمولها من خلال تحديثات وتقارير دورية مفصلة.",
            service_3_title: "أثر مستدام",
            service_3_desc: "التركيز على الصدقة الجارية التي توفر فوائد مستمرة للمجتمعات."
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
