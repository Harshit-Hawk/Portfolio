import { motion } from 'framer-motion';
import { Code2, Terminal, Database, Wrench, Lightbulb, CheckCircle2 } from 'lucide-react';

const skillGroups = [
    {
        category: 'Development',
        icon: Code2,
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'REST APIs']
    },
    {
        category: 'Programming',
        icon: Terminal,
        skills: ['C++', 'Python', 'JavaScript']
    },
    {
        category: 'Database',
        icon: Database,
        skills: ['MongoDB', 'MySQL', 'Firebase']
    },
    {
        category: 'Tools',
        icon: Wrench,
        skills: ['Git', 'GitHub', 'Figma', 'Canva', 'VS Code']
    },
    {
        category: 'Product',
        icon: Lightbulb,
        skills: ['Product Strategy', 'UI/UX', 'Prototyping', 'Problem Solving']
    }
];

const SkillsSection = () => {
    return (
        <section id="skills" style={{
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
                            Technical Toolkit
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
                        Skills &amp; <span className="text-electric">Technologies</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{
                            fontSize: '1.02rem',
                            color: 'var(--text-secondary)',
                            maxWidth: '600px',
                            margin: '0 auto',
                            lineHeight: '1.7'
                        }}
                    >
                        Structured by domain and active usage. No exaggerated percentages or filler technologies.
                    </motion.p>
                </div>

                {/* Categorized Skills Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.8rem',
                    marginBottom: '3rem'
                }}>
                    {skillGroups.map((group, i) => {
                        const Icon = group.icon;
                        return (
                            <motion.div
                                key={group.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                                className="bento-card"
                                style={{
                                    padding: '2.2rem',
                                    border: '1px solid rgba(0, 102, 255, 0.22)'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.4rem' }}>
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
                                    <h3 style={{
                                        fontFamily: 'var(--font-display)',
                                        fontSize: '1.2rem',
                                        fontWeight: '700',
                                        color: '#ffffff'
                                    }}>
                                        {group.category}
                                    </h3>
                                </div>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {group.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            style={{
                                                fontSize: '0.84rem',
                                                fontFamily: 'var(--font-mono)',
                                                padding: '6px 12px',
                                                background: 'rgba(255, 255, 255, 0.04)',
                                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                                borderRadius: '6px',
                                                color: 'var(--text-white)'
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

                {/* Honesty Note */}
                <div style={{
                    textAlign: 'center',
                    padding: '1rem',
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                }}>
                    <CheckCircle2 size={16} color="var(--electric-cyan)" />
                    <span>“Only technologies I actively work with are listed here.”</span>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
