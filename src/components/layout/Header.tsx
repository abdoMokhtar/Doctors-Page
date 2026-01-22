import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import Logo from '../../assets/logo.png';

const navLinks = [
    { name: 'الرئيسية', href: '#hero' },
    { name: 'أطباؤنا', href: '#doctors' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'تواصل معنا', href: '#contact' },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">

                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <img src={Logo} alt="Elite Medical Clinic" className="h-10 w-auto" />
                    <div className="flex flex-col">
                        <span className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">عيادة النخبة</span>
                        <span className="text-xs text-secondary font-medium">الرعاية الطبية المتكاملة</span>
                    </div>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-600 hover:text-primary font-medium transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:right-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Button size="sm">احجز موعدك</Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-gray-600 hover:text-primary"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-700 hover:text-primary font-medium py-2 border-b border-gray-50 last:border-0"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Button className="w-full mt-2" onClick={() => setIsOpen(false)}>احجز موعدك</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
