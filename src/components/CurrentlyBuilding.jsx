import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Activity, Layers, Gamepad2, Lightbulb, ArrowUpRight, CheckCircle } from 'lucide-react';

const currentInitiatives = [
    {
        title: 'CampusDex',
        tagline: 'Student Operating System & Campus Hub',
        status: 'Active Development — v1.2 Release Sprint',
        statusColor: '#00d4ff',
        badge: 'Flagship MVP',
        icon: Layers,
        currentFocus: 'Automating attendance calculation logic, responsive student resource exchange hub, and real-time announcement push notifications.',
        deliverables: [
            'Interactive course schedule & notification triggers',
            'Peer-to-peer verified lecture note repositories',
            'Role-based dashboard for class reps and students'
        ],
        linkText: 'Explore Case Study',
        linkHref: '#campusdex'
    },
    {
        title: 'Gateway Esports Platform',
        tagline: 'Inter-College Tournament & Community Hub',
        status: 'Community Growth & Event Scaling',
        statusColor: '#38bdf8',
        badge: 'Campus Community',
        icon: Gamepad2,
        currentFocus: 'Planning upcoming collegiate competitive events, refining Discord bot event automation, and designing a lightweight leaderboard tracker.',
        deliverables: [
            'Upcoming 5v5 tactical tournament bracket design',
            'Automated participant check-in & score submission',
            'Engaging 100+ active student gamers across campus'
        ],
        linkText: 'View Initiatives',
        linkHref: '#experience'
    },
    {
        title: 'Micro-SaaS & EdTech Ideas',
        tagline: 'Rapid Prototyping & Discovery',
        status: 'Ideation & User Validation',
        statusColor: '#a855f7',
        badge: 'Exploration',
        icon: Lightbulb,
        currentFocus: 'Conducting peer interviews to identify repetitive student bottlenecks, exploring AI integrations for study productivity, and scoping minimal prototypes.',
        deliverables: [
            'Validation surveys on exam revision patterns',
            'Next.js 15 + Supabase rapid boilerplate setup',
            'Market analysis of niche student productivity tools'
        ],
        linkText: 'Pitch an Idea',
        linkHref: '#contact'
    }
];

const CurrentlyBuilding = () => {
    return (
        <section id="building" style={{
            padding: '7rem clamp(1.5rem, 5vw, 4rem)',
            position: 'relative'
        }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}
                    >
                        <span className="pro-badge">
                            <Activity size={13} className="pulse-cyan" />
                            Live Sprints
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                            fontWeight: '800',
                            letterSpacing: '-1px',
                            color: '#0b0f19',
                            marginBottom: '1rem'
                        }}
                    >
                        Currently <span className="text-electric">Building</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{
                            fontSize: '1.05rem',
                            color: 'var(--text-secondary)',
                            lineHeight: '1.7',
                            maxWidth: '640px',
                            margin: '0 auto'
                        }}
                    >
                        What is on my workbench right now. Ongoing product iterations, community scaling, and early-stage prototypes in active development.
                    </motion.p>
                </div>

                {/* Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                    gap: '2rem'
                }}>
                    {currentInitiatives.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                whileHover={{ y: -6 }}
                                className="bento-card"
                                style={{
                                    padding: '2.4rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    border: '1px solid rgba(0, 102, 255, 0.16)',
                                    background: 'var(--bg-card)'
                                }}
                            >
                                <div>
                                    {/* Top Status & Badge */}
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: '1.5rem'
                                    }}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            background: '#f1f5f9',
                                            border: '1px solid rgba(15, 23, 42, 0.12)',
                                            padding: '4px 12px',
                                            borderRadius: '20px'
                                        }}>
                                            <span style={{
                                                width: '7px',
                                                height: '7px',
                                                borderRadius: '50%',
                                                backgroundColor: item.statusColor,
                                                boxShadow: `0 0 8px ${item.statusColor}`
                                            }} />
                                            <span style={{
                                                fontSize: '0.72rem',
                                                fontFamily: 'var(--font-mono)',
                                                color: '#0b0f19',
                                                fontWeight: '700'
                                            }}>
                                                {item.badge}
                                            </span>
                                        </div>

                                        <div style={{
                                            width: '38px',
                                            height: '38px',
                                            borderRadius: '10px',
                                            background: '#eef5ff',
                                            border: '1px solid #bfdbfe',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <Icon size={18} color="var(--electric-blue)" />
                                        </div>
                                    </div>

                                    <h3 style={{
                                        fontFamily: 'var(--font-display)',
                                        fontSize: '1.45rem',
                                        fontWeight: '800',
                                        color: '#0b0f19',
                                        marginBottom: '0.3rem'
                                    }}>
                                        {item.title}
                                    </h3>

                                    <div style={{
                                        fontSize: '0.82rem',
                                        fontFamily: 'var(--font-mono)',
                                        color: 'var(--electric-blue)',
                                        fontWeight: '600',
                                        marginBottom: '1rem'
                                    }}>
                                        {item.tagline}
                                    </div>

                                    {/* Status Box */}
                                    <div style={{
                                        padding: '0.7rem 1rem',
                                        borderRadius: '8px',
                                        background: '#f8fafc',
                                        border: '1px solid rgba(15, 23, 42, 0.08)',
                                        fontSize: '0.78rem',
                                        fontFamily: 'var(--font-mono)',
                                        color: 'var(--text-secondary)',
                                        marginBottom: '1.4rem'
                                    }}>
                                        <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>STATUS: </span>
                                        <span style={{ color: '#0b0f19', fontWeight: '700' }}>{item.status}</span>
                                    </div>

                                    <p style={{
                                        color: 'var(--text-secondary)',
                                        fontSize: '0.9rem',
                                        lineHeight: '1.65',
                                        marginBottom: '1.4rem'
                                    }}>
                                        {item.currentFocus}
                                    </p>
                                </div>

                                <div>
                                    {/* Deliverables */}
                                    <div style={{
                                        borderTop: '1px solid rgba(15, 23, 42, 0.08)',
                                        paddingTop: '1.2rem',
                                        marginBottom: '1.4rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '0.6rem'
                                    }}>
                                        <div style={{
                                            fontSize: '0.72rem',
                                            fontFamily: 'var(--font-mono)',
                                            color: 'var(--text-muted)',
                                            textTransform: 'uppercase',
                                            fontWeight: '600'
                                        }}>
                                            Active Deliverables:
                                        </div>
                                        {item.deliverables.map((del, dIdx) => (
                                            <div key={dIdx} style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                fontSize: '0.84rem',
                                                color: 'var(--text-secondary)'
                                            }}>
                                                <CheckCircle size={14} color="var(--electric-blue)" style={{ flexShrink: 0 }} />
                                                <span>{del}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <a
                                        href={item.linkHref}
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            fontSize: '0.85rem',
                                            fontFamily: 'var(--font-mono)',
                                            fontWeight: '700',
                                            color: 'var(--electric-blue)',
                                            textDecoration: 'none',
                                            transition: 'gap 0.2s'
                                        }}
                                        onMouseEnter={(e) => { e.currentTarget.style.gap = '10px'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.gap = '6px'; }}
                                    >
                                        <span>{item.linkText}</span>
                                        <ArrowUpRight size={14} />
                                    </a>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CurrentlyBuilding;
