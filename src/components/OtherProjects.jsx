import { motion } from 'framer-motion';
import { Layers, Rocket, Gamepad2, Code2, ArrowUpRight, Github, ExternalLink } from 'lucide-react';

const otherProjects = [
    {
        title: "CampusDex",
        category: "Campus Technology Platform",
        icon: Rocket,
        desc: "A unified ecosystem for campus management, events, clubs, and student engagement.",
        tags: ["React", "Node.js", "Database", "APIs"],
        tagLabel: "Tech Stack"
    },
    {
        title: "Hackathon Projects",
        category: "Rapid Product Development",
        icon: Layers,
        desc: "Built and presented software solutions across multiple hackathons, working under tight deadlines to transform problem statements into functional prototypes.",
        tags: ["Problem Solving", "Rapid Prototyping", "Teamwork", "Product Thinking"],
        tagLabel: "Focus"
    },
    {
        title: "Gateway Esports Club",
        category: "Community & Events",
        icon: Gamepad2,
        desc: "A student-led esports initiative focused on organizing competitive gaming events and creating a structured gaming community within the college.",
        tags: ["Event Planning", "Community Building", "Sponsorship", "Operations"],
        tagLabel: "Work"
    }
];

const OtherProjects = () => {
    return (
        <section style={{
            padding: '5rem clamp(1.5rem, 5vw, 4rem) 7rem clamp(1.5rem, 5vw, 4rem)',
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
                            Project Portfolio
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
                        Other Works &amp; <span className="text-electric">Initiatives</span>
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
                        Software solutions, student communities, and rapid hackathon prototypes built with purpose.
                    </motion.p>
                </div>

                {/* Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem',
                    marginBottom: '3rem'
                }}>
                    {otherProjects.map((p, i) => {
                        const Icon = p.icon;
                        return (
                            <motion.div
                                key={p.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
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
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.4rem' }}>
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
                                        <span style={{
                                            fontSize: '0.74rem',
                                            fontFamily: 'var(--font-mono)',
                                            color: 'var(--electric-blue)',
                                            background: '#f0f7ff',
                                            border: '1px solid #dbeafe',
                                            padding: '4px 10px',
                                            borderRadius: '6px',
                                            fontWeight: '600'
                                        }}>
                                            {p.category}
                                        </span>
                                    </div>

                                    <h3 style={{
                                        fontFamily: 'var(--font-display)',
                                        fontSize: '1.45rem',
                                        fontWeight: '700',
                                        color: '#0b0f19',
                                        marginBottom: '0.8rem'
                                    }}>
                                        {p.title}
                                    </h3>

                                    <p style={{
                                        color: 'var(--text-secondary)',
                                        lineHeight: '1.7',
                                        fontSize: '0.94rem',
                                        marginBottom: '2rem'
                                    }}>
                                        {p.desc}
                                    </p>
                                </div>

                                <div>
                                    <div style={{
                                        fontSize: '0.72rem',
                                        fontFamily: 'var(--font-mono)',
                                        color: 'var(--text-muted)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        marginBottom: '8px',
                                        fontWeight: '600'
                                    }}>
                                        {p.tagLabel}
                                    </div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                        {p.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                style={{
                                                    fontSize: '0.75rem',
                                                    fontFamily: 'var(--font-mono)',
                                                    color: 'var(--electric-blue)',
                                                    background: '#eef5ff',
                                                    border: '1px solid #bfdbfe',
                                                    padding: '3px 8px',
                                                    borderRadius: '4px',
                                                    fontWeight: '600'
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Structured Placeholder for Next Project */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bento-card"
                    style={{
                        padding: '2.4rem',
                        border: '1px dashed rgba(0, 102, 255, 0.35)',
                        background: '#ffffff',
                        boxShadow: '0 4px 15px rgba(0, 102, 255, 0.04)'
                    }}
                >
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '1.5rem',
                        flexWrap: 'wrap',
                        gap: '1rem'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Code2 size={20} color="var(--electric-blue)" />
                            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: '700', color: '#0b0f19' }}>
                                [Project Name]
                            </h3>
                            <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                                // Technical Project Template
                            </span>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                                [GitHub URL]
                            </span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--electric-blue)', fontFamily: 'var(--font-mono)', fontWeight: '600' }}>
                                [Live Demo]
                            </span>
                        </div>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '1.5rem',
                        fontSize: '0.9rem'
                    }}>
                        <div>
                            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '4px', fontWeight: '600' }}>
                                PROBLEM
                            </div>
                            <div style={{ color: 'var(--text-secondary)' }}>
                                [Clear description of the real-world friction or problem statement]
                            </div>
                        </div>

                        <div>
                            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '4px', fontWeight: '600' }}>
                                SOLUTION
                            </div>
                            <div style={{ color: 'var(--text-secondary)' }}>
                                [How the application or system addresses the problem directly]
                            </div>
                        </div>

                        <div>
                            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '4px', fontWeight: '600' }}>
                                WHAT I BUILT
                            </div>
                            <div style={{ color: 'var(--text-secondary)' }}>
                                [Key features, architecture design, and core implementation details]
                            </div>
                        </div>

                        <div>
                            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '4px', fontWeight: '600' }}>
                                TECHNOLOGY USED
                            </div>
                            <div style={{ color: 'var(--electric-blue)', fontFamily: 'var(--font-mono)', fontWeight: '600' }}>
                                [React • Node.js • Database • APIs]
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default OtherProjects;
