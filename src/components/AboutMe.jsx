import { motion } from 'framer-motion';
import { GraduationCap, Code2, Rocket, Trophy } from 'lucide-react';

const highlights = [
    {
        icon: GraduationCap,
        title: 'Computer Science',
        subtitle: 'Student & developer',
        tag: 'Academics'
    },
    {
        icon: Code2,
        title: 'Builder',
        subtitle: 'Web & software projects',
        tag: 'Engineering'
    },
    {
        icon: Rocket,
        title: 'Startup Mindset',
        subtitle: 'Product + business experimentation',
        tag: 'Entrepreneurship'
    },
    {
        icon: Trophy,
        title: 'Hackathons',
        subtitle: 'Multiple hackathon experiences',
        tag: 'Prototyping'
    }
];

const AboutMe = () => {
    return (
        <section id="about" style={{
            padding: '8rem clamp(1.5rem, 5vw, 4rem) 6rem clamp(1.5rem, 5vw, 4rem)',
            position: 'relative'
        }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                {/* Section Eyebrow */}
                <div style={{ marginBottom: '1.2rem' }}>
                    <span className="pro-badge">
                        About Me
                    </span>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '4rem',
                    alignItems: 'start'
                }}>
                    {/* Left Column: Narrative Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                            fontWeight: '800',
                            letterSpacing: '-1.5px',
                            lineHeight: '1.15',
                            color: '#ffffff',
                            marginBottom: '1.8rem'
                        }}>
                            More than <span className="text-electric">just code.</span>
                        </h2>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.4rem',
                            color: 'var(--text-secondary)',
                            fontSize: 'clamp(1.02rem, 1.2vw, 1.12rem)',
                            lineHeight: '1.8',
                            fontWeight: '400'
                        }}>
                            <p>
                                I’m a Computer Science student who enjoys building things from scratch—from software products and hackathon projects to campus communities and events.
                            </p>
                            <p>
                                My interest lies at the intersection of technology, product development, and entrepreneurship. I like taking a problem, understanding what actually matters, and turning it into a working solution rather than stopping at an idea.
                            </p>
                            <p>
                                I’m currently working on projects around campus technology, event and club management, esports, and digital products, while continuously improving my technical and business skills.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column: 4 Highlight Cards */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                        gap: '1.4rem'
                    }}>
                        {highlights.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    className="bento-card"
                                    style={{
                                        padding: '1.8rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '1rem',
                                        border: '1px solid rgba(0, 102, 255, 0.25)'
                                    }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div style={{
                                            width: '44px',
                                            height: '44px',
                                            borderRadius: '10px',
                                            background: 'rgba(0, 102, 255, 0.12)',
                                            border: '1px solid rgba(0, 102, 255, 0.3)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <Icon size={20} color="var(--electric-cyan)" />
                                        </div>
                                        <span style={{
                                            fontSize: '0.72rem',
                                            fontFamily: 'var(--font-mono)',
                                            color: 'var(--text-muted)',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px'
                                        }}>
                                            {item.tag}
                                        </span>
                                    </div>

                                    <div>
                                        <h3 style={{
                                            fontFamily: 'var(--font-display)',
                                            fontSize: '1.25rem',
                                            fontWeight: '700',
                                            color: '#ffffff',
                                            marginBottom: '4px'
                                        }}>
                                            {item.title}
                                        </h3>
                                        <p style={{
                                            fontSize: '0.88rem',
                                            color: 'var(--text-secondary)',
                                            lineHeight: '1.5'
                                        }}>
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
