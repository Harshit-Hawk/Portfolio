import React from 'react';
import { motion } from 'framer-motion';
import { Search, Hammer, MessageSquareHeart, RefreshCw, Compass, ArrowRight } from 'lucide-react';

const steps = [
    {
        num: '01',
        title: 'Find the Problem',
        icon: Search,
        subtitle: 'Observe & Validate',
        description: 'Start with real friction points. Whether it is campus disorganization, tournament bracket chaos, or fragmented workflows, every line of code must trace back to a genuine user need.'
    },
    {
        num: '02',
        title: 'Build the MVP',
        icon: Hammer,
        subtitle: 'Ship Fast & Lean',
        description: 'Strip away non-essential features and build the core functional prototype rapidly. Speed to a working deployment matters more than endless theory or premature optimization.'
    },
    {
        num: '03',
        title: 'Get Real Feedback',
        icon: MessageSquareHeart,
        subtitle: 'Listen to Users',
        description: 'Put the product directly in front of classmates, organizers, and early adopters. Watch how they navigate, where they stumble, and what features they actually use.'
    },
    {
        num: '04',
        title: 'Iterate & Scale',
        icon: RefreshCw,
        subtitle: 'Refine & Elevate',
        description: 'Take quantitative feedback and real usage patterns to refactor architecture, polish micro-interactions, optimize database queries, and expand functionality systematically.'
    }
];

const ApproachSection = () => {
    return (
        <section id="approach" style={{
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
                            <Compass size={13} />
                            Product Philosophy
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
                        How I <span className="text-electric">Build &amp; Think</span>
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
                        A disciplined, pragmatic product framework designed to take ambitious ideas from napkin sketch to validated reality.
                    </motion.p>
                </div>

                {/* 4-Step Process Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '1.6rem',
                    marginBottom: '3.5rem'
                }}>
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.num}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.12 }}
                                whileHover={{ y: -6 }}
                                className="bento-card"
                                style={{
                                    padding: '2.2rem 1.8rem',
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    border: '1px solid rgba(0, 102, 255, 0.16)',
                                    background: 'var(--bg-card)'
                                }}
                            >
                                <div>
                                    {/* Number & Icon */}
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: '1.6rem'
                                    }}>
                                        <span style={{
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '1.8rem',
                                            fontWeight: '800',
                                            color: 'rgba(0, 102, 255, 0.35)',
                                            letterSpacing: '-1px'
                                        }}>
                                            {step.num}
                                        </span>
                                        <div style={{
                                            width: '42px',
                                            height: '42px',
                                            borderRadius: '10px',
                                            background: '#eef5ff',
                                            border: '1px solid #bfdbfe',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <Icon size={20} color="var(--electric-blue)" />
                                        </div>
                                    </div>

                                    <div style={{
                                        fontSize: '0.75rem',
                                        fontFamily: 'var(--font-mono)',
                                        color: 'var(--text-muted)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.6px',
                                        marginBottom: '0.3rem',
                                        fontWeight: '600'
                                    }}>
                                        {step.subtitle}
                                    </div>

                                    <h3 style={{
                                        fontFamily: 'var(--font-display)',
                                        fontSize: '1.35rem',
                                        fontWeight: '800',
                                        color: '#0b0f19',
                                        marginBottom: '0.9rem'
                                    }}>
                                        {step.title}
                                    </h3>

                                    <p style={{
                                        color: 'var(--text-secondary)',
                                        fontSize: '0.88rem',
                                        lineHeight: '1.65'
                                    }}>
                                        {step.description}
                                    </p>
                                </div>

                                <div style={{
                                    marginTop: '1.5rem',
                                    paddingTop: '1rem',
                                    borderTop: '1px solid rgba(15, 23, 42, 0.08)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    color: 'var(--electric-blue)',
                                    fontSize: '0.78rem',
                                    fontFamily: 'var(--font-mono)',
                                    fontWeight: '700'
                                }}>
                                    <span>Step {idx + 1} of 4</span>
                                    {idx < 3 && <ArrowRight size={13} />}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Core Philosophy Banner */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{
                        padding: '2.5rem clamp(1.5rem, 4vw, 3rem)',
                        borderRadius: '16px',
                        background: 'linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)',
                        border: '1px solid rgba(0, 102, 255, 0.25)',
                        boxShadow: '0 12px 36px rgba(0, 102, 255, 0.08)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        gap: '1rem',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: '20%',
                        right: '20%',
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent, var(--electric-blue), transparent)'
                    }} />

                    <span style={{
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--electric-blue)',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        fontWeight: '700'
                    }}>
                        Builder Manifesto
                    </span>

                    <blockquote style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)',
                        fontWeight: '800',
                        color: '#0b0f19',
                        maxWidth: '850px',
                        lineHeight: '1.4',
                        margin: 0
                    }}>
                        “Ideas are cheap. Execution is everything. I build to solve real problems, test with actual users, and iterate ruthlessly until it works.”
                    </blockquote>

                    <div style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.85rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: '500'
                    }}>
                        — Harshit, Computer Science Student &amp; Builder
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ApproachSection;
