import { motion } from 'framer-motion';
import { Layers, Lightbulb, TrendingUp, Users, ArrowUpRight } from 'lucide-react';

const pillars = [
    {
        icon: Layers,
        title: 'Full-Stack Development',
        desc: 'Building responsive web applications, APIs, dashboards, and complete digital products.',
        focus: ['Web Apps', 'API Design', 'Modern Frontend', 'Databases']
    },
    {
        icon: Lightbulb,
        title: 'Product Development',
        desc: 'Turning raw ideas into structured products with a focus on usability, scalability, and real-world problems.',
        focus: ['User Flows', 'Feature Roadmaps', 'UX Architecture', 'Rapid Prototyping']
    },
    {
        icon: TrendingUp,
        title: 'Entrepreneurship',
        desc: 'Exploring startup ideas, validating problems, developing MVPs, and learning how technology can become a sustainable business.',
        focus: ['Problem Validation', 'MVP Launches', 'Business Thinking', 'User Growth']
    },
    {
        icon: Users,
        title: 'Community & Events',
        desc: 'Building and organizing student communities, clubs, hackathons, esports events, and campus initiatives.',
        focus: ['Student Clubs', 'Esports Tournaments', 'Hackathon Organizing', 'Leadership']
    }
];

const WhatIDo = () => {
    return (
        <section style={{
            padding: '6rem clamp(1.5rem, 5vw, 4rem)',
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
                            Core Pillars
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
                            color: '#ffffff',
                            marginBottom: '1rem'
                        }}
                    >
                        What <span className="text-electric">I Do</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{
                            fontSize: '1.05rem',
                            color: 'var(--text-secondary)',
                            maxWidth: '620px',
                            margin: '0 auto',
                            lineHeight: '1.7'
                        }}
                    >
                        Combining software development, product thinking, entrepreneurship, and community building to create meaningful impact.
                    </motion.p>
                </div>

                {/* 4 Visually Distinct Cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {pillars.map((pillar, i) => {
                        const Icon = pillar.icon;
                        return (
                            <motion.div
                                key={pillar.title}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                whileHover={{ y: -6 }}
                                className="bento-card"
                                style={{
                                    padding: '2.4rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    border: '1px solid rgba(0, 102, 255, 0.2)'
                                }}
                            >
                                <div>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '12px',
                                        background: 'rgba(0, 102, 255, 0.12)',
                                        border: '1px solid rgba(0, 102, 255, 0.3)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '1.5rem'
                                    }}>
                                        <Icon size={24} color="var(--electric-cyan)" />
                                    </div>

                                    <h3 style={{
                                        fontFamily: 'var(--font-display)',
                                        fontSize: '1.35rem',
                                        fontWeight: '700',
                                        color: '#ffffff',
                                        marginBottom: '0.8rem'
                                    }}>
                                        {pillar.title}
                                    </h3>

                                    <p style={{
                                        color: 'var(--text-secondary)',
                                        lineHeight: '1.7',
                                        fontSize: '0.94rem',
                                        marginBottom: '1.8rem'
                                    }}>
                                        {pillar.desc}
                                    </p>
                                </div>

                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '6px',
                                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                                    paddingTop: '1.2rem'
                                }}>
                                    {pillar.focus.map((item) => (
                                        <span
                                            key={item}
                                            style={{
                                                fontSize: '0.74rem',
                                                fontFamily: 'var(--font-mono)',
                                                color: 'var(--electric-cyan)',
                                                background: 'rgba(0, 212, 255, 0.06)',
                                                padding: '3px 8px',
                                                borderRadius: '4px'
                                            }}
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhatIDo;
