import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { doctors } from '../data/doctors';

export function Doctors() {
    return (
        <section id="doctors" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    >
                        نخبة من <span className="text-primary">أفضل الأطباء</span>
                    </motion.h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        نفتخر بضم كادر طبي متميز من الاستشاريين والأخصائيين ذوي الخبرة والكفاءة العالية في مختلف التخصصات.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {doctors.map((doctor, index) => (
                        <motion.div
                            key={doctor.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                                    <span className="text-white text-sm font-medium">عرض الملف الشخصي</span>
                                </div>
                            </div>

                            <div className="p-6 text-center">
                                <p className="text-sm font-semibold text-secondary mb-2">{doctor.specialty}</p>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{doctor.name}</h3>
                                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{doctor.bio}</p>
                                <Button variant="outline" size="sm" className="w-full">
                                    احجز موعد
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
