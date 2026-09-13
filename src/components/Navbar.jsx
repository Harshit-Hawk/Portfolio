import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 800;
            setIsMobile(mobile);
            if (!mobile) setIsOpen(false);
        };
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                padding: scrolled ? '0.9rem clamp(1.2rem, 4vw, 3.5rem)' : '1.3rem clamp(1.2rem, 4vw, 3.5rem)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 100,
                background: scrolled
                    ? 'rgba(255, 255, 255, 0.92)'
                    : 'rgba(255, 255, 255, 0.72)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                borderBottom: `1px solid ${scrolled ? 'rgba(0, 102, 255, 0.18)' : 'rgba(15, 23, 42, 0.08)'}`,
                boxShadow: scrolled ? '0 4px 20px rgba(15, 23, 42, 0.05)' : 'none',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
        >
            {/* Logo */}
            <a
                href="#home"
                style={{
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                }}
            >
                <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: '800',
                    letterSpacing: '-0.5px',
                    color: '#0b0f19',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                }}>
                    HARSHIT
                    <span style={{ color: 'var(--electric-blue)', fontSize: '1.5rem', lineHeight: '0' }}>•</span>
                </div>
            </a>

            {/* Desktop Navigation */}
            {!isMobile && (
                <ul style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'clamp(1.8rem, 3.5vw, 3rem)',
                    listStyle: 'none'
                }}>
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                style={{
                                    textDecoration: 'none',
                                    fontSize: '0.92rem',
                                    fontWeight: '500',
                                    color: 'var(--text-secondary)',
                                    transition: 'color 0.2s',
                                    padding: '4px 0'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = 'var(--electric-blue)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = 'var(--text-secondary)';
                                }}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}

            {/* Right Action */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {!isMobile && (
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="btn-electric"
                        style={{
                            padding: '0.65rem 1.4rem',
                            fontSize: '0.85rem'
                        }}
                    >
                        <span>Let’s Connect</span>
                        <ArrowUpRight size={15} />
                    </motion.a>
                )}

                {/* Mobile Menu Trigger */}
                {isMobile && (
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        style={{
                            background: '#f1f5f9',
                            border: '1px solid rgba(15, 23, 42, 0.12)',
                            color: '#0b0f19',
                            padding: '8px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer'
                        }}
                        aria-label="Toggle navigation"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                )}
            </div>

            {/* Mobile Overlay Menu */}
            <AnimatePresence>
                {isOpen && isMobile && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        style={{
                            position: 'fixed',
                            top: '68px',
                            left: '1rem',
                            right: '1rem',
                            background: 'rgba(255, 255, 255, 0.98)',
                            backdropFilter: 'blur(20px)',
                            borderRadius: '14px',
                            border: '1px solid rgba(0, 102, 255, 0.2)',
                            padding: '1.8rem 1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.2rem',
                            zIndex: 99,
                            boxShadow: '0 20px 50px rgba(15, 23, 42, 0.12)'
                        }}
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                style={{
                                    textDecoration: 'none',
                                    color: '#0b0f19',
                                    fontSize: '1.1rem',
                                    fontWeight: '600',
                                    padding: '8px 0',
                                    borderBottom: '1px solid rgba(15, 23, 42, 0.06)'
                                }}
                            >
                                {item.label}
                            </a>
                        ))}

                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="btn-electric"
                            style={{ width: '100%', marginTop: '0.4rem', justifyContent: 'center' }}
                        >
                            Let’s Connect
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
