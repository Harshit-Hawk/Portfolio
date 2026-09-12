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
                background: 'radial-gradient(circle, rgba(0, 102, 255, 0.12) 0%, transparent 65%)',
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
                background: 'radial-gradient(circle, rgba(0, 212, 255, 0.08) 0%, transparent 70%)',
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
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(3, 5, 12, 0.98)',
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
                        borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ fontFamily: 'var(--font-display)', color: '#ffffff', fontSize: '1.25rem', fontWeight: '800' }}>
                                    HARSHIT
                                </span>
                                <span style={{ color: 'var(--electric-cyan)', fontSize: '1.4rem' }}>•</span>
                                <span style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', fontFamily: 'var(--font-mono)' }}>
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
                                background: 'rgba(255, 255, 255, 0.04)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                color: 'var(--text-secondary)',
                                fontSize: '0.82rem',
                                fontFamily: 'var(--font-mono)',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'var(--electric-cyan)';
                                e.currentTarget.style.color = 'var(--electric-cyan)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                e.currentTarget.style.color = 'var(--text-secondary)';
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
                                    color: 'var(--text-muted)',
                                    fontSize: '0.88rem',
                                    transition: 'color 0.2s'
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; }}
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
