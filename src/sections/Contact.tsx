import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

export function Contact() {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            تواصل <span className="text-primary">معنا</span>
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            نحن هنا للإجابة على استفساراتك وتقديم الرعاية التي تستحقها. يمكنك التواصل معنا عبر الهاتف أو البريد الإلكتروني أو زيارة العيادة.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-sky-50 rounded-lg text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">موقعنا</h4>
                                    <p className="text-gray-600 text-sm">الرياض، طريق الملك فهد، حي الصحافة<br />المبنى الطبي، الدور الثالث</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-sky-50 rounded-lg text-primary">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">اتصل بنا</h4>
                                    <p className="text-gray-600 text-sm dir-ltr text-right" dir="ltr">+966 11 123 4567</p>
                                    <p className="text-gray-600 text-sm dir-ltr text-right" dir="ltr">+966 50 123 4567</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-sky-50 rounded-lg text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">البريد الإلكتروني</h4>
                                    <p className="text-gray-600 text-sm font-sans">info@eliteclinic.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-sky-50 rounded-lg text-primary">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">أوقات العمل</h4>
                                    <p className="text-gray-600 text-sm">السبت - الخميس: 9:00 ص - 9:00 م</p>
                                    <p className="text-gray-600 text-sm">الجمعة: 4:00 م - 9:00 م</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Booking Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">حجز موعد</h3>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700">الاسم الكامل</label>
                                    <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="محمد علي" />
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">رقم الهاتف</label>
                                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="05xxxxxxxx" />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">البريد الإلكتروني</label>
                                <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="example@mail.com" />
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="department" className="text-sm font-medium text-gray-700">القسم المطلوب</label>
                                <select id="department" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white">
                                    <option value="">اختر القسم</option>
                                    <option value="cardiology">طب القلب</option>
                                    <option value="pediatrics">طب الأطفال</option>
                                    <option value="dental">الأسنان</option>
                                    <option value="dermatology">الجلدية</option>
                                </select>
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700">ملاحظات إضافية</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="اكتب رسالتك هنا..."></textarea>
                            </div>

                            <Button className="w-full text-lg font-semibold" size="lg">تأكيد الحجز</Button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
