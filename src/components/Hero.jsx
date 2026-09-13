import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code2, Sparkles, Check, Flame, Shield, Layers, BookOpen, Bell } from 'lucide-react';
import ThreeBackground from './ThreeBackground';
import characterCutout from '../assets/character-cutout.png';

const Hero = () => {
    const [metricType, setMetricType] = useState('attendance');
    const [glowEnabled, setGlowEnabled] = useState(true);

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
            {/* 2D Light Blue Ambient Background */}
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
                        fontWeight: '900',
                        lineHeight: '1.1',
                        letterSpacing: '-1.5px',
                        marginBottom: '1.4rem',
                        color: '#0b0f19'
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
                        padding: '14px 18px',
                        background: '#ffffff',
                        border: '1px solid #bfdbfe',
                        boxShadow: '0 2px 10px rgba(0, 102, 255, 0.05)',
                        borderRadius: '12px',
                        maxWidth: '560px'
                    }}>
                        <div style={{
                            fontSize: '0.74rem',
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--electric-blue)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.6px',
                            marginBottom: '6px',
                            fontWeight: '700'
                        }}>
                            Currently Exploring:
                        </div>
                        <div style={{
                            fontSize: '0.88rem',
                            color: '#0b0f19',
                            fontWeight: '600',
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '8px'
                        }}>
                            {['AI', 'SaaS', 'EdTech', 'Campus Technology', 'Entrepreneurship'].map((tag, idx) => (
                                <span key={tag} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                    <span>{tag}</span>
                                    {idx < 4 && <span style={{ color: 'var(--electric-blue)', opacity: 0.5 }}>•</span>}
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

                {/* Right Column: 2D Cutout Character Showcase Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                    style={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    {/* Background Radial Glow */}
                    <div style={{
                        position: 'absolute',
                        inset: '-10px',
                        background: glowEnabled
                            ? 'radial-gradient(circle, rgba(0, 102, 255, 0.16) 0%, rgba(2, 132, 199, 0.08) 50%, transparent 75%)'
                            : 'none',
                        filter: 'blur(50px)',
                        zIndex: 0,
                        transition: 'opacity 0.4s'
                    }} />

                    {/* Main Character Stage Card */}
                    <div
                        className="bento-card"
                        style={{
                            position: 'relative',
                            zIndex: 1,
                            width: '100%',
                            maxWidth: '490px',
                            border: `1px solid ${glowEnabled ? 'rgba(0, 102, 255, 0.3)' : 'rgba(15, 23, 42, 0.1)'}`,
                            background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
                            boxShadow: glowEnabled ? '0 20px 50px rgba(0, 102, 255, 0.12)' : '0 10px 30px rgba(15, 23, 42, 0.06)',
                            transition: 'all 0.3s ease',
                            padding: '1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.2rem'
                        }}
                    >
                        {/* Header Badge Row */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingBottom: '0.8rem',
                            borderBottom: '1px solid rgba(15, 23, 42, 0.08)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Code2 size={16} color="var(--electric-blue)" />
                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: '#0b0f19', fontWeight: '700' }}>
                                    Builder Persona
                                </span>
                            </div>

                            <button
                                onClick={() => setGlowEnabled(!glowEnabled)}
                                style={{
                                    fontSize: '0.72rem',
                                    color: 'var(--electric-blue)',
                                    fontFamily: 'var(--font-mono)',
                                    background: '#eef5ff',
                                    border: '1px solid #bfdbfe',
                                    padding: '3px 9px',
                                    borderRadius: '6px',
                                    fontWeight: '700',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '5px'
                                }}
                            >
                                <Sparkles size={12} />
                                <span>Aura: {glowEnabled ? 'ACTIVE' : 'MUTED'}</span>
                            </button>
                        </div>

                        {/* 2D Cutout Character Display Stage */}
                        <div style={{
                            position: 'relative',
                            minHeight: '340px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                            background: 'radial-gradient(circle at 50% 60%, #eef5ff 0%, #f8fafc 70%, #ffffff 100%)',
                            borderRadius: '12px',
                            border: '1px solid rgba(0, 102, 255, 0.12)',
                            overflow: 'hidden',
                            padding: '1.5rem 1rem 0'
                        }}>
                            {/* Blue Silhouette Spotlight Circle */}
                            <div style={{
                                position: 'absolute',
                                width: '220px',
                                height: '220px',
                                borderRadius: '50%',
                                background: 'radial-gradient(circle, rgba(0, 102, 255, 0.22) 0%, rgba(2, 132, 199, 0.05) 60%, transparent 80%)',
                                top: '25%',
                                left: '50%',
                                transform: 'translate(-50%, -20%)',
                                zIndex: 1
                            }} />

                            {/* Floating 2D Cutout Character */}
                            <motion.img
                                src={characterCutout}
                                alt="Harshit - 2D Cutout Character"
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 4.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                style={{
                                    position: 'relative',
                                    zIndex: 2,
                                    maxHeight: '320px',
                                    width: 'auto',
                                    objectFit: 'contain',
                                    filter: 'drop-shadow(0 14px 22px rgba(0, 102, 255, 0.2)) drop-shadow(0 3px 6px rgba(15, 23, 42, 0.08))'
                                }}
                            />

                            {/* Floating Badge 1: CampusDex Founder */}
                            <motion.div
                                animate={{ y: [-3, 3, -3] }}
                                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                                style={{
                                    position: 'absolute',
                                    top: '18px',
                                    right: '14px',
                                    background: 'rgba(255, 255, 255, 0.95)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid #bfdbfe',
                                    padding: '7px 12px',
                                    borderRadius: '10px',
                                    boxShadow: '0 8px 20px rgba(0, 102, 255, 0.12)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '7px',
                                    zIndex: 3
                                }}
                            >
                                <span className="status-dot" style={{ width: '6px', height: '6px' }} />
                                <div>
                                    <div style={{ fontSize: '0.74rem', fontWeight: '800', color: '#0b0f19' }}>CampusDex</div>
                                    <div style={{ fontSize: '0.64rem', color: 'var(--electric-blue)', fontFamily: 'var(--font-mono)', fontWeight: '600' }}>Active MVP</div>
                                </div>
                            </motion.div>

                            {/* Floating Badge 2: Full-Stack Builder */}
                            <motion.div
                                animate={{ y: [3, -3, 3] }}
                                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
                                style={{
                                    position: 'absolute',
                                    bottom: '22px',
                                    left: '14px',
                                    background: 'rgba(255, 255, 255, 0.95)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(15, 23, 42, 0.12)',
                                    padding: '7px 12px',
                                    borderRadius: '10px',
                                    boxShadow: '0 8px 20px rgba(15, 23, 42, 0.06)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '7px',
                                    zIndex: 3
                                }}
                            >
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    borderRadius: '6px',
                                    background: '#eef5ff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Code2 size={13} color="var(--electric-blue)" />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.74rem', fontWeight: '800', color: '#0b0f19' }}>Full-Stack</div>
                                    <div style={{ fontSize: '0.64rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>React &amp; Node.js</div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Interactive Subsystem Inspector Card */}
                        <div style={{
                            padding: '1.2rem',
                            borderRadius: '10px',
                            background: '#f8fafc',
                            border: '1px solid rgba(0, 102, 255, 0.16)',
                            boxShadow: '0 2px 8px rgba(15, 23, 42, 0.03)'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                                <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontWeight: '600' }}>
                                    CAMPUSDEX SUBSYSTEM
                                </span>
                                <span style={{
                                    fontSize: '0.74rem',
                                    color: 'var(--electric-blue)',
                                    background: '#eef5ff',
                                    border: '1px solid #bfdbfe',
                                    padding: '2px 8px',
                                    borderRadius: '4px',
                                    fontWeight: '700'
                                }}>
                                    {metricType === 'attendance' ? 'Attendance Engine' : metricType === 'notes' ? 'Resource Hub' : 'Notices Dispatcher'}
                                </span>
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={metricType}
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -6 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {metricType === 'attendance' && (
                                        <div>
                                            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: '800', color: '#0b0f19', marginBottom: '0.2rem' }}>
                                                Automated Attendance Monitor
                                            </div>
                                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.84rem', lineHeight: '1.5', margin: 0 }}>
                                                Threshold algorithms alerting students when lecture attendance dips below university requirements.
                                            </p>
                                        </div>
                                    )}

                                    {metricType === 'notes' && (
                                        <div>
                                            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: '800', color: '#0b0f19', marginBottom: '0.2rem' }}>
                                                Classroom Resource Hub
                                            </div>
                                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.84rem', lineHeight: '1.5', margin: 0 }}>
                                                Peer-to-peer document sharing organized by semester, subject code, and professor syllabus.
                                            </p>
                                        </div>
                                    )}

                                    {metricType === 'notices' && (
                                        <div>
                                            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: '800', color: '#0b0f19', marginBottom: '0.2rem' }}>
                                                Campus Event &amp; Notice Pipeline
                                            </div>
                                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.84rem', lineHeight: '1.5', margin: 0 }}>
                                                Centralized notification feed eliminating missed exam schedules and departmental announcements.
                                            </p>
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>

                            {/* Subsystem Toggles */}
                            <div style={{ display: 'flex', gap: '6px', marginTop: '1rem', flexWrap: 'wrap' }}>
                                {[
                                    { id: 'attendance', label: 'Attendance' },
                                    { id: 'notes', label: 'Notes Hub' },
                                    { id: 'notices', label: 'Notices Feed' }
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setMetricType(tab.id)}
                                        style={{
                                            padding: '5px 11px',
                                            borderRadius: '6px',
                                            background: metricType === tab.id ? '#0066ff' : '#ffffff',
                                            border: `1px solid ${metricType === tab.id ? '#0066ff' : 'rgba(15, 23, 42, 0.12)'}`,
                                            color: metricType === tab.id ? '#ffffff' : '#0b0f19',
                                            fontSize: '0.76rem',
                                            fontWeight: '700',
                                            cursor: 'pointer',
                                            transition: 'all 0.15s'
                                        }}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Quality Footnote */}
                        <div style={{
                            padding: '8px 12px',
                            background: '#ffffff',
                            border: '1px solid rgba(15, 23, 42, 0.08)',
                            borderRadius: '8px',
                            fontSize: '0.78rem',
                            color: 'var(--text-secondary)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            <Check size={14} color="var(--electric-blue)" />
                            <span>Engineered with modern full-stack web standards.</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
