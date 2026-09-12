import { motion } from 'framer-motion';
import { Code2, Server, Terminal, Sparkles, CheckCircle2, UserCheck, Wrench, Heart } from 'lucide-react';

const toolkit = [
    {
        category: 'Frontend Engineering',
        icon: Code2,
        skills: ['React 19', 'TypeScript', 'Next.js', 'Framer Motion', 'Tailwind CSS', 'Vite', 'HTML5 & CSS3', 'State Management']
    },
    {
        category: 'Backend & APIs',
        icon: Server,
        skills: ['Node.js', 'Python', 'Express.js', 'PostgreSQL', 'MongoDB', 'Redis', 'RESTful APIs', 'WebSocket Telemetry']
    },
    {
        category: 'Tools & Workflow',
        icon: Wrench,
        skills: ['Git & GitHub', 'Docker', 'Linux CLI', 'CI/CD Pipelines', 'Vercel Deployment', 'Postman', 'Figma', 'Performance Auditing']
    }
];

const values = [
    {
        title: 'Attention to Detail',
        desc: 'Great software lives in the details. I care deeply about fluid spring transitions, tactile hover states, and intuitive visual hierarchies that feel effortless.'
    },
    {
        title: 'Performance & Speed',
        desc: 'Fast interfaces respect people’s time. I optimize rendering lifecycles, eliminate layout shifts, and write lean bundles that load instantaneously.'
    },
    {
        title: 'Pragmatic Engineering',
        desc: 'Writing clean, understandable, and testable code. Focusing on solving actual user problems rather than adding unnecessary framework complexity.'
    }
];

const About = () => {
    return (
        <section id="about" style={{
            padding: '8rem clamp(1.5rem, 5vw, 4rem) 6rem clamp(1.5rem, 5vw, 4rem)',
            position: 'relative'
        }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}
                    >
                        <span className="pro-badge">
                            About &amp; Skills
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
                        Background &amp; <span className="text-electric">Craftsmanship</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{
                            fontSize: '1.05rem',
                            color: 'var(--text-secondary)',
                            maxWidth: '640px',
                            margin: '0 auto',
                            lineHeight: '1.7'
                        }}
                    >
                        An engineer who cares equally about technical stability, visual finesse, and the humans who use what I build.
                    </motion.p>
                </div>

                {/* Personal Story & Philosophy Card */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bento-card"
                    style={{
                        padding: 'clamp(2rem, 5vw, 3.5rem)',
                        marginBottom: '4rem',
                        border: '1px solid rgba(0, 102, 255, 0.25)'
                    }}
                >
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '3rem',
                        alignItems: 'center'
                    }}>
                        <div>
                            <div className="pro-badge" style={{ marginBottom: '1rem' }}>
                                Personal Philosophy
                            </div>
                            <h3 style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: '1.8rem',
                                fontWeight: '700',
                                color: '#ffffff',
                                marginBottom: '1.2rem'
                            }}>
                                Building Software With Intent
                            </h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '0.96rem', marginBottom: '1rem' }}>
                                I began coding out of a fascination with bringing ideas to life directly in the browser. Over the years, that curiosity evolved into designing full-stack systems, crafting component architectures, and obsessing over interaction quality.
                            </p>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '0.96rem' }}>
                                When I’m not coding, I'm constantly studying modern web standards, experimenting with creative motion, and refining my development workflows.
                            </p>
                        </div>

                        {/* 3 Core Values */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                            {values.map((val) => (
                                <div
                                    key={val.title}
                                    style={{
                                        padding: '1.2rem 1.4rem',
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        border: '1px solid rgba(255, 255, 255, 0.06)',
                                        borderRadius: '12px'
                                    }}
                                >
                                    <div style={{ fontSize: '1rem', fontWeight: '700', color: '#ffffff', marginBottom: '4px' }}>
                                        {val.title}
                                    </div>
                                    <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                        {val.desc}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Technical Toolkit Grid (Organized cleanly by domain) */}
                <div id="skills" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {toolkit.map((col, i) => {
                        const Icon = col.icon;
                        return (
                            <motion.div
                                key={col.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bento-card"
                                style={{ padding: '2.4rem' }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
                                    <div style={{
                                        width: '38px',
                                        height: '38px',
                                        borderRadius: '8px',
                                        background: 'rgba(0, 102, 255, 0.12)',
                                        border: '1px solid rgba(0, 102, 255, 0.25)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Icon size={18} color="var(--electric-cyan)" />
                                    </div>
                                    <h4 style={{
                                        fontFamily: 'var(--font-display)',
                                        fontSize: '1.2rem',
                                        color: '#ffffff',
                                        fontWeight: '700'
                                    }}>
                                        {col.category}
                                    </h4>
                                </div>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {col.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            style={{
                                                fontSize: '0.84rem',
                                                fontFamily: 'var(--font-mono)',
                                                padding: '5px 12px',
                                                background: 'rgba(255, 255, 255, 0.04)',
                                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                                borderRadius: '6px',
                                                color: 'var(--text-secondary)'
                                            }}
                                        >
                                            {skill}
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

export default About;
