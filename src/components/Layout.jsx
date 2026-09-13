import React from 'react';
import Navbar from './Navbar';
import CustomCursor from './CustomCursor';
import { ArrowUp } from 'lucide-react';

const Layout = ({ children }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg-pitch)', overflowX: 'hidden' }}>
            <CustomCursor />
            <Navbar />

            {/* Ambient Electric Blue Lighting Orbs in Background */}
            <div style={{
                position: 'fixed',
                top: '-15vw',
                left: '-10vw',
                width: '50vw',
                height: '50vw',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0, 102, 255, 0.08) 0%, transparent 65%)',
                pointerEvents: 'none',
                zIndex: 0,
                filter: 'blur(90px)'
            }} />

            <div style={{
                position: 'fixed',
                bottom: '-15vw',
                right: '-10vw',
                width: '55vw',
                height: '55vw',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(2, 132, 199, 0.06) 0%, transparent 70%)',
                pointerEvents: 'none',
                zIndex: 0,
                filter: 'blur(90px)'
            }} />

            {/* Main Content */}
            <main style={{
                position: 'relative',
                zIndex: 1,
                minHeight: '100vh',
                paddingTop: '75px'
            }}>
                {children}
            </main>

            {/* Builder Identity Footer */}
            <footer style={{
                position: 'relative',
                zIndex: 1,
                borderTop: '1px solid rgba(15, 23, 42, 0.08)',
                background: '#ffffff',
                padding: '4rem clamp(1.5rem, 5vw, 4rem) 3.5rem clamp(1.5rem, 5vw, 4rem)'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2rem'
                }}>
                    {/* Top Row: Identity & Back to Top */}
                    <div style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '1.2rem',
                        paddingBottom: '2rem',
                        borderBottom: '1px solid rgba(15, 23, 42, 0.08)'
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ fontFamily: 'var(--font-display)', color: '#0b0f19', fontSize: '1.25rem', fontWeight: '800' }}>
                                    HARSHIT
                                </span>
                                <span style={{ color: 'var(--electric-blue)', fontSize: '1.4rem' }}>•</span>
                                <span style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', fontFamily: 'var(--font-mono)', fontWeight: '600' }}>
                                    Builder &amp; Product Thinker
                                </span>
                            </div>
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.84rem' }}>
                                “I build products, communities, and ideas that solve real problems.”
                            </span>
                        </div>

                        <button
                            onClick={scrollToTop}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '8px 16px',
                                borderRadius: '8px',
                                background: '#f8fafc',
                                border: '1px solid rgba(15, 23, 42, 0.12)',
                                color: '#0b0f19',
                                fontSize: '0.82rem',
                                fontFamily: 'var(--font-mono)',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'var(--electric-blue)';
                                e.currentTarget.style.color = 'var(--electric-blue)';
                                e.currentTarget.style.background = '#eef5ff';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(15, 23, 42, 0.12)';
                                e.currentTarget.style.color = '#0b0f19';
                                e.currentTarget.style.background = '#f8fafc';
                            }}
                        >
                            <span>Back to Top</span>
                            <ArrowUp size={14} />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: 'clamp(1rem, 3vw, 2rem)'
                    }}>
                        {[
                            { label: 'Home', href: '#home' },
                            { label: 'About', href: '#about' },
                            { label: 'Work', href: '#work' },
                            { label: 'Experience', href: '#experience' },
                            { label: 'Skills', href: '#skills' },
                            { label: 'Contact', href: '#contact' }
                        ].map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                style={{
                                    textDecoration: 'none',
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.88rem',
                                    fontWeight: '500',
                                    transition: 'color 0.2s'
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--electric-blue)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Final Tagline */}
                    <div style={{
                        color: 'var(--text-muted)',
                        fontSize: '0.82rem',
                        fontFamily: 'var(--font-mono)',
                        textAlign: 'center'
                    }}>
                        Designed &amp; Built with purpose by Harshit • 2026
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
