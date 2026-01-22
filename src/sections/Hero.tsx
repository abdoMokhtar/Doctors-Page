import { motion } from 'framer-motion';
import { ArrowLeft, Phone, ShieldCheck, Users } from 'lucide-react';
import { Button } from '../components/ui/Button';
import HeroImage from '../assets/hero.png';

export function Hero() {
    return (
        <section id="hero" className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-tr from-sky-50 to-teal-50/50">

            {/* Background Decorative Elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-teal-200/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-right"
                    >
                        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-sky-100 rounded-full px-4 py-1 mb-6 shadow-sm">
                            <ShieldCheck size={18} className="text-secondary" />
                            <span className="text-sm font-medium text-gray-700">الرعاية الطبية الموثوقة في منطقتك</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 mb-6">
                            رعايتك الصحية <br />
                            <span className="text-primary">أولويتنا القصوى</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mr-auto leading-relaxed">
                            نقدم خدمات طبية متكاملة بأحدث التقنيات وعلى يد نخبة من الأطباء المتخصصين لضمان صحتك وسلامة عائلتك.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <Button size="lg" className="shadow-sky-200 shadow-xl">
                                احجز موعد الآن <ArrowLeft size={18} />
                            </Button>
                            <Button size="lg" variant="outline">
                                <Phone size={18} /> اتصل بنا
                            </Button>
                        </div>

                        <div className="grid grid-cols-3 gap-6 border-t border-gray-200 pt-8">
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-1">+15</h3>
                                <p className="text-sm text-gray-500">عاماً من الخبرة</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-1">+50</h3>
                                <p className="text-sm text-gray-500">طبيب متخصص</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-1">24/7</h3>
                                <p className="text-sm text-gray-500">خدمة طوارئ</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <img src={HeroImage} alt="طبيب يبتسم" className="w-full h-auto object-cover" />

                            {/* Floating Card */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="absolute bottom-6 right-6 bg-white p-4 rounded-xl shadow-lg border-l-4 border-secondary max-w-[200px]"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-green-50 rounded-full">
                                        <Users size={18} className="text-green-600" />
                                    </div>
                                    <span className="font-bold text-gray-800 text-sm">أكثر من 10k+</span>
                                </div>
                                <p className="text-xs text-gray-500">مريض يثقون بنا سنوياً</p>
                            </motion.div>
                        </div>

                        {/* Blob behind image */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-sky-100 rounded-full blur-3xl -z-10 opacity-60" />

                    </motion.div>

                </div>
            </div>
        </section>
    );
}
