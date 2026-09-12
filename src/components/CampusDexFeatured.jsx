import { motion } from 'framer-motion';
import {
    Calendar,
    Users2,
    Sparkles,
    Bell,
    GraduationCap,
    Bus,
    BookOpen,
    Home,
    ArrowUpRight,
    CheckCircle,
    Layers,
    Shield
} from 'lucide-react';

const modules = [
    { name: 'Event Management', icon: Calendar, desc: 'Centralized ticketing, schedules, and live campus event discovery.' },
    { name: 'Club & Community Management', icon: Users2, desc: 'Official student organization portals, memberships, and leadership transitions.' },
    { name: 'Student Engagement', icon: Sparkles, desc: 'Interactive campus feeds, polls, activity leaderboards, and peer networks.' },
    { name: 'Campus Announcements', icon: Bell, desc: 'Verified institutional broadcasts and urgent department alerts.' },
    { name: 'Academic Management', icon: GraduationCap, desc: 'Course timelines, exam schedules, and department resource coordination.' },
    { name: 'Transport Management', icon: Bus, desc: 'Live shuttle route tracking, schedule updates, and commute passes.' },
    { name: 'Library Management', icon: BookOpen, desc: 'Digital catalog search, seat reservation, and renewal alerts.' },
    { name: 'Hostel Management', icon: Home, desc: 'Room allocation, maintenance ticketing, and digital gate permissions.' },
];

const CampusDexFeatured = () => {
    return (
        <section id="work" style={{
            padding: '7rem clamp(1.5rem, 5vw, 4rem)',
            position: 'relative'
        }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                {/* Section Eyebrow */}
                <div style={{ marginBottom: '1.2rem' }}>
                    <span className="pro-badge">
                        Flagship Product Case Study
                    </span>
                </div>

                {/* Main Case Study Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="bento-card"
                    style={{
                        padding: 'clamp(2rem, 5vw, 4rem)',
                        border: '1px solid rgba(0, 102, 255, 0.4)',
                        boxShadow: '0 25px 70px rgba(0, 102, 255, 0.15)',
                        background: 'linear-gradient(135deg, rgba(8, 14, 30, 0.95) 0%, rgba(4, 6, 14, 0.98) 100%)'
                    }}
                >
                    {/* Header Row: Title, Subtitle, & Direct Action */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        flexWrap: 'wrap',
                        gap: '2rem',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                        paddingBottom: '2.5rem',
                        marginBottom: '3rem'
                    }}>
                        <div>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                fontSize: '0.8rem',
                                fontFamily: 'var(--font-mono)',
                                color: 'var(--electric-cyan)',
                                marginBottom: '1rem',
                                fontWeight: '600'
                            }}>
                                <span className="status-dot" style={{ width: '6px', height: '6px' }} />
                                VENTURE IN ACTIVE DEVELOPMENT
                            </div>

                            <h2 style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
                                fontWeight: '900',
                                letterSpacing: '-1.5px',
                                lineHeight: '1.05',
                                color: '#ffffff',
                                marginBottom: '0.8rem'
                            }}>
                                Campus<span className="text-electric">Dex</span>
                            </h2>

                            <p style={{
                                fontSize: 'clamp(1.1rem, 1.4vw, 1.35rem)',
                                color: 'var(--electric-blue-light)',
                                fontWeight: '500',
                                letterSpacing: '-0.3px'
                            }}>
                                A unified digital platform for modern campus management.
                            </p>
                        </div>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className="btn-electric"
                            style={{
                                padding: '1rem 2rem',
                                fontSize: '0.98rem'
                            }}
                        >
                            <span>View CampusDex</span>
                            <ArrowUpRight size={18} />
                        </motion.a>
                    </div>

                    {/* Middle Section: Story & Founder Role Meta */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '3.5rem',
                        marginBottom: '3.5rem',
                        alignItems: 'start'
                    }}>
                        <div>
                            <h3 style={{
                                fontSize: '0.82rem',
                                textTransform: 'uppercase',
                                letterSpacing: '1.5px',
                                color: 'var(--text-muted)',
                                marginBottom: '1rem',
                                fontFamily: 'var(--font-mono)'
                            }}>
                                The Problem &amp; Vision
                            </h3>
                            <p style={{
                                color: 'var(--text-secondary)',
                                fontSize: '1.05rem',
                                lineHeight: '1.8',
                                marginBottom: '1.2rem'
                            }}>
                                CampusDex is a campus technology platform designed to bring students, institutions, events, and clubs into one connected ecosystem.
                            </p>
                            <p style={{
                                color: 'var(--text-secondary)',
                                fontSize: '1.05rem',
                                lineHeight: '1.8'
                            }}>
                                Instead of treating campus activities as disconnected systems, CampusDex aims to provide institutions with a centralized platform for event management, club management, student engagement, and essential campus services.
                            </p>
                        </div>

                        {/* Founder Role & Responsibilities Card */}
                        <div style={{
                            padding: '2rem',
                            background: 'rgba(0, 102, 255, 0.06)',
                            border: '1px solid rgba(0, 102, 255, 0.25)',
                            borderRadius: '14px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.6rem'
                        }}>
                            <div>
                                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
                                    My Role
                                </div>
                                <div style={{ fontSize: '1.2rem', fontWeight: '700', color: '#ffffff', fontFamily: 'var(--font-display)' }}>
                                    Founder / Product &amp; Development
                                </div>
                            </div>

                            <div>
                                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                                    Key Responsibilities
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {['Ideation', 'Product Strategy', 'Development', 'UI/UX', 'Pitching'].map((item) => (
                                        <span
                                            key={item}
                                            style={{
                                                fontSize: '0.8rem',
                                                fontFamily: 'var(--font-mono)',
                                                color: 'var(--electric-cyan)',
                                                background: 'rgba(0, 212, 255, 0.1)',
                                                border: '1px solid rgba(0, 212, 255, 0.25)',
                                                padding: '4px 10px',
                                                borderRadius: '6px',
                                                fontWeight: '500'
                                            }}
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Integrated Modules Showcase Grid */}
                    <div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '1.5rem'
                        }}>
                            <h3 style={{
                                fontSize: '0.85rem',
                                textTransform: 'uppercase',
                                letterSpacing: '1.5px',
                                color: 'var(--text-muted)',
                                fontFamily: 'var(--font-mono)'
                            }}>
                                Platform Capabilities &amp; Architecture Modules
                            </h3>
                            <span style={{ fontSize: '0.8rem', color: 'var(--electric-cyan)', fontFamily: 'var(--font-mono)' }}>
                                8 Core Services
                            </span>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '1.2rem'
                        }}>
                            {modules.map((m) => {
                                const Icon = m.icon;
                                return (
                                    <div
                                        key={m.name}
                                        style={{
                                            padding: '1.4rem',
                                            background: 'rgba(255, 255, 255, 0.03)',
                                            border: '1px solid rgba(255, 255, 255, 0.08)',
                                            borderRadius: '10px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '8px'
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <Icon size={18} color="var(--electric-cyan)" />
                                            <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#ffffff' }}>
                                                {m.name}
                                            </div>
                                        </div>
                                        <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                                            {m.desc}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CampusDexFeatured;
