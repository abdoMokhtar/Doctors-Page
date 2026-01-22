import { Heart, Stethoscope, Smile, type LucideIcon, Brain, Bone, Baby } from 'lucide-react';

export interface Service {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
}

export const services: Service[] = [
    {
        id: 1,
        title: 'طب القلب',
        description: 'تشخيص وعلاج أمراض القلب والأوعية الدموية بأحدث الأجهزة.',
        icon: Heart
    },
    {
        id: 2,
        title: 'طب الأطفال',
        description: 'رعاية شاملة لصحة طفلك من حديثي الولادة حتى المراهقة.',
        icon: Baby
    },
    {
        id: 3,
        title: 'الأسنان',
        description: 'علاجات تجميلية وجراحية لابتسامة مثالية وصحية.',
        icon: Smile
    },
    {
        id: 4,
        title: 'الطب العام',
        description: 'فحوصات دورية وشاملة للحفاظ على صحتك العامة.',
        icon: Stethoscope
    },
    {
        id: 5,
        title: 'العظام والمفاصل',
        description: 'علاج آلام المفاصل والكسور وتأهيل الإصابات الرياضية.',
        icon: Bone
    },
    {
        id: 6,
        title: 'المخ والأعصاب',
        description: 'تشخيص وعلاج اضطرابات الجهاز العصبي بدقة عالية.',
        icon: Brain
    }
];
