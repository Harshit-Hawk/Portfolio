import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Sparkles, Layers, Sliders, Check } from 'lucide-react';
import ThreeBackground from './ThreeBackground';

const Hero = () => {
    const [activeTab, setActiveTab] = useState('interactive');
    const [glowEnabled, setGlowEnabled] = useState(true);
    const [metricType, setMetricType] = useState('attendance');

    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            padding: '7rem clamp(1.5rem, 5vw, 4rem) 6rem clamp(1.5rem, 5vw, 4rem)',
            overflow: 'hidden'
        }}>
            {/* 2D Electric Background */}
            <ThreeBackground />

            <div style={{
                maxWidth: '1280px',
                width: '100%',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '4.5rem',
                alignItems: 'center',
                position: 'relative',
                zIndex: 10
            }}>
                {/* Left Column: Authentic Developer Voice & Proposition */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    {/* Eyebrow Badge */}
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1.6rem' }}>
                        <span className="pro-badge" style={{ padding: '6px 14px' }}>
                            <span className="status-dot" style={{ width: '6px', height: '6px' }} />
                            COMPUTER SCIENCE STUDENT • BUILDER • ENTREPRENEUR
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h1 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(2.6rem, 5vw, 4.4rem)',
                        fontWeight: '800',
                        lineHeight: '1.1',
                        letterSpacing: '-1.5px',
                        marginBottom: '1.4rem',
                        color: '#ffffff'
                    }}>
                        I build products, communities, and ideas that{' '}
                        <span className="text-electric">solve real problems.</span>
                    </h1>

                    {/* Authentic Subtext */}
                    <p style={{
                        color: 'var(--text-secondary)',
                        fontSize: 'clamp(1.05rem, 1.3vw, 1.2rem)',
                        lineHeight: '1.8',
                        marginBottom: '2rem',
                        maxWidth: '560px',
                        fontWeight: '400'
                    }}>
                        I’m Harshit, a Computer Science student focused on building practical software products, exploring startups, and turning ideas into things people can actually use.
                    </p>

                    {/* Secondary Exploration Line */}
                    <div style={{
                        marginBottom: '2.5rem',
                        padding: '12px 16px',
                        background: 'rgba(0, 102, 255, 0.08)',
                        border: '1px solid rgba(0, 212, 255, 0.2)',
                        borderRadius: '10px',
                        maxWidth: '560px'
                    }}>
                        <div style={{
                            fontSize: '0.74rem',
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--electric-cyan)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.6px',
                            marginBottom: '6px',
                            fontWeight: '600'
                        }}>
                            Currently Exploring:
                        </div>
                        <div style={{
                            fontSize: '0.88rem',
                            color: '#ffffff',
                            fontWeight: '500',
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '8px'
                        }}>
                            {['AI', 'SaaS', 'EdTech', 'Campus Technology', 'Entrepreneurship'].map((tag, idx) => (
                                <span key={tag} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                    <span>{tag}</span>
                                    {idx < 4 && <span style={{ color: 'var(--electric-cyan)', opacity: 0.6 }}>•</span>}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                        <motion.a
                            href="#work"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="btn-electric"
                        >
                            <span>View My Work</span>
                            <ArrowRight size={17} />
                        </motion.a>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="btn-secondary"
                        >
                            <span>Let’s Connect</span>
                        </motion.a>
                    </div>
                </motion.div>

                {/* Right Column: Interactive Motion & Component Lab (Real Developer Craft) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                    style={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    {/* Background Glow */}
                    <div style={{
                        position: 'absolute',
                        inset: '-15px',
                        background: 'radial-gradient(circle, rgba(0, 102, 255, 0.2) 0%, rgba(0, 212, 255, 0.08) 45%, transparent 70%)',
                        filter: 'blur(50px)',
                        zIndex: 0
                    }} />

                    {/* Interactive Component Lab Card */}
                    <div
                        className="bento-card"
                        style={{
                            position: 'relative',
                            zIndex: 1,
                            width: '100%',
                            maxWidth: '490px',
                            border: `1px solid ${glowEnabled ? 'rgba(0, 102, 255, 0.4)' : 'rgba(255, 255, 255, 0.1)'}`,
                            background: 'rgba(6, 9, 20, 0.94)',
                            boxShadow: glowEnabled ? '0 20px 50px rgba(0, 102, 255, 0.22)' : 'none',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        {/* Interactive Card Header */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '14px 18px',
                            background: 'rgba(255, 255, 255, 0.02)',
                            borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Code2 size={16} color="var(--electric-cyan)" />
                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: '#ffffff', fontWeight: '600' }}>
                                    Builder Console
                                </span>
                            </div>
                            <span style={{
                                fontSize: '0.72rem',
                                color: 'var(--electric-cyan)',
                                fontFamily: 'var(--font-mono)',
                                background: 'rgba(0, 212, 255, 0.08)',
                                padding: '2px 8px',
                                borderRadius: '4px'
                            }}>
                                CampusDex MVP
                            </span>
                        </div>

                        {/* Interactive Controls Body */}
                        <div style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                            {/* Live Interactive Widget Showcase */}
                            <motion.div
                                key={metricType}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    padding: '1.5rem',
                                    borderRadius: '12px',
                                    background: glowEnabled
                                        ? 'linear-gradient(135deg, rgba(0, 102, 255, 0.15) 0%, rgba(0, 212, 255, 0.08) 100%)'
                                        : 'rgba(255, 255, 255, 0.03)',
                                    border: `1px solid ${glowEnabled ? 'rgba(0, 212, 255, 0.35)' : 'rgba(255, 255, 255, 0.08)'}`,
                                    boxShadow: glowEnabled ? '0 0 25px rgba(0, 102, 255, 0.2)' : 'none',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                                    <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                                        ACTIVE MODULE INSPECTOR
                                    </span>
                                    <span style={{
                                        fontSize: '0.75rem',
                                        color: 'var(--electric-cyan)',
                                        background: 'rgba(0, 212, 255, 0.1)',
                                        padding: '2px 8px',
                                        borderRadius: '4px',
                                        fontWeight: '600'
                                    }}>
                                        {metricType === 'attendance' ? 'Attendance Engine' : metricType === 'notes' ? 'Resource Hub' : 'Notices Dispatcher'}
                                    </span>
                                </div>

                                {metricType === 'attendance' && (
                                    <div>
                                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.4rem' }}>
                                            Automated Attendance Monitor
                                        </div>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: '1.6', margin: 0 }}>
                                            Custom threshold algorithms alerting students when lecture attendance falls below university compliance thresholds.
                                        </p>
                                    </div>
                                )}

                                {metricType === 'notes' && (
                                    <div>
                                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.4rem' }}>
                                            Classroom Resource Hub
                                        </div>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: '1.6', margin: 0 }}>
                                            Structured peer-to-peer document sharing organized by semester, subject code, and professor syllabus.
                                        </p>
                                    </div>
                                )}

                                {metricType === 'notices' && (
                                    <div>
                                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.4rem' }}>
                                            Campus Event &amp; Notice Pipeline
                                        </div>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: '1.6', margin: 0 }}>
                                            Centralized notification feed eliminating missed exam schedules and departmental announcements.
                                        </p>
                                    </div>
                                )}
                            </motion.div>

                            {/* Real Interactive Module Switchers */}
                            <div>
                                <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: '500' }}>
                                    Switch CampusDex Subsystem Preview:
                                </div>
                                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                    {[
                                        { id: 'attendance', label: 'Attendance' },
                                        { id: 'notes', label: 'Notes Hub' },
                                        { id: 'notices', label: 'Notices Feed' }
                                    ].map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setMetricType(tab.id)}
                                            style={{
                                                padding: '7px 12px',
                                                borderRadius: '8px',
                                                background: metricType === tab.id ? 'rgba(0, 102, 255, 0.25)' : 'rgba(255, 255, 255, 0.04)',
                                                border: `1px solid ${metricType === tab.id ? 'var(--electric-cyan)' : 'rgba(255, 255, 255, 0.08)'}`,
                                                color: metricType === tab.id ? 'var(--electric-cyan)' : 'var(--text-secondary)',
                                                fontSize: '0.78rem',
                                                fontWeight: '600',
                                                cursor: 'pointer',
                                                transition: 'all 0.2s'
                                            }}
                                        >
                                            {tab.label}
                                        </button>
                                    ))}

                                    <button
                                        onClick={() => setGlowEnabled(!glowEnabled)}
                                        style={{
                                            padding: '7px 12px',
                                            borderRadius: '8px',
                                            background: glowEnabled ? 'rgba(0, 212, 255, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                                            border: `1px solid ${glowEnabled ? 'var(--electric-cyan)' : 'rgba(255, 255, 255, 0.08)'}`,
                                            color: glowEnabled ? 'var(--electric-cyan)' : 'var(--text-muted)',
                                            fontSize: '0.78rem',
                                            fontWeight: '600',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '5px'
                                        }}
                                    >
                                        <Sparkles size={13} />
                                        <span>Glow: {glowEnabled ? 'ON' : 'OFF'}</span>
                                    </button>
                                </div>
                            </div>

                            {/* Bottom Note */}
                            <div style={{
                                padding: '10px 14px',
                                background: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid rgba(255, 255, 255, 0.06)',
                                borderRadius: '8px',
                                fontSize: '0.8rem',
                                color: 'var(--text-muted)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}>
                                <Check size={14} color="var(--electric-cyan)" />
                                <span>Engineered with modern full-stack web standards.</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
