import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import Logo from '../../assets/logo.png';

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Col */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <img src={Logo} alt="Elite Medical Clinic" className="h-10 w-auto brightness-200 grayscale" />
                            <span className="text-xl font-bold text-white">عيادة النخبة</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            نلتزم بتقديم أفضل مستوى من الرعاية الطبية لك ولعائلتك من خلال فريقنا المتميز وتقنياتنا الحديثة.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">روابط سريعة</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-primary transition-colors">عن العيادة</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">أطباؤنا</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">الخدمات</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">حجز موعد</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">الشروط والأحكام</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold mb-6">خدماتنا</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-primary transition-colors">طب الأسرة</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">طب الأطفال</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">الأسنان</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">النساء والولادة</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">القلب والأوعية</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6">تواصل معنا</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-primary mt-1" size={18} />
                                <span>الرياض، طريق الملك فهد،<br />المبنى الطبي، الدور الثالث</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-primary" size={18} />
                                <span dir="ltr">+966 11 123 4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-primary" size={18} />
                                <span>info@eliteclinic.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} عيادة النخبة الطبية. جميع الحقوق محفوظة.</p>
                </div>
            </div>
        </footer>
    );
}
