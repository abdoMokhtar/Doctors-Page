import { motion } from 'framer-motion';
import { services } from '../data/services';

export function Services() {
    return (
        <section id="services" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-8">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    >
                        خدماتنا <span className="text-primary">الطبية</span>
                    </motion.h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        نقدم مجموعة واسعة من الخدمات الطبية التخصصية لتلبية كافة احتياجاتك الصحية تحت سقف واحد.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                        >
                            <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                <service.icon className="text-primary w-8 h-8 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-500 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
