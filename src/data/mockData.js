export const mockProjects = [
    {
        id: 1,
        titleEn: 'Water Well Construction in Rural Area',
        titleAr: 'حفر بئر مياه في منطقة نائية',
        descriptionEn: 'Provide clean drinking water for over 500 families.',
        descriptionAr: 'توفير مياه شرب نظيفة لأكثر من 500 أسرة.',
        goal: 50000,
        raised: 35000,
        donors: 120,
        image: '/images/water_well.png',
        category: 'Water'
    },
    {
        id: 2,
        titleEn: 'Orphanage Renovation',
        titleAr: 'تجديد دار الأيتام',
        descriptionEn: 'Creating a safe and educational environment for 50 orphans.',
        descriptionAr: 'تهيئة بيئة آمنة وتعليمية لـ 50 يتيماً.',
        goal: 100000,
        raised: 80000,
        donors: 350,
        image: '/images/orphan_care.png',
        category: 'Education'
    },
    {
        id: 3,
        titleEn: 'Medical Clinic Setup',
        titleAr: 'تجهيز عيادة طبية',
        descriptionEn: 'Equipping a local clinic with essential medical supplies.',
        descriptionAr: 'تزويد عيادة محلية بالمستلزمات الطبية الأساسية.',
        goal: 150000,
        raised: 45000,
        donors: 200,
        image: '/images/clinic.png',
        category: 'Health'
    }
];

export const globalImpact = {
    totalDonations: 2500000,
    activeProjects: 45,
    completedProjects: 120,
    numberOfDonors: 15000
};

export const userDonations = [
    { id: 101, projectTitleEn: 'Water Well Construction', projectTitleAr: 'حفر بئر مياه', amount: 500, date: '2023-11-15', status: 'completed' },
    { id: 102, projectTitleEn: 'Orphanage Renovation', projectTitleAr: 'تجديد دار الأيتام', amount: 1000, date: '2023-12-01', status: 'active' },
    { id: 103, projectTitleEn: 'Medical Clinic Setup', projectTitleAr: 'تجهيز عيادة طبية', amount: 250, date: '2024-01-10', status: 'active' },
];
