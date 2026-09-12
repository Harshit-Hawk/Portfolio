import { motion } from 'framer-motion';
import { Rocket, Gamepad2, Trophy, Calendar } from 'lucide-react';

const experiences = [
    {
        role: "Founder / Builder",
        organization: "CampusDex",
        period: "2026 — Present",
        icon: Rocket,
        desc: "Building a campus technology platform focused on connecting institutions, students, events, and clubs.",
        tags: ["Product Strategy", "Full-Stack Dev", "UI/UX Architecture"]
    },
    {
        role: "Founder / Core Team",
        organization: "Esports Club",
        period: "2026 — Present",
        icon: Gamepad2,
        desc: "Helped establish and develop an official college esports initiative, including event planning, operations, community building, and sponsorship outreach.",
        tags: ["Community Building", "Operations", "Event Planning", "Sponsorship"]
    },
    {
        role: "Hackathon Participant",
        organization: "Multiple Hackathons",
        period: "3–4 Hackathons",
        icon: Trophy,
        desc: "Participated in 3–4 hackathons, developing and presenting software solutions under time constraints.",
        tags: ["Rapid Prototyping", "Teamwork", "Pitching", "Problem Solving"]
    }
];

const ExperienceTimeline = () => {
    return (
        <section id="experience" style={{
            padding: '6rem clamp(1.5rem, 5vw, 4rem)',
            position: 'relative'
        }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}
                    >
                        <span className="pro-badge">
                            Leadership &amp; Journey
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
                        Experience &amp; <span className="text-electric">Leadership</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{
                            fontSize: '1.05rem',
                            color: 'var(--text-secondary)',
                            maxWidth: '600px',
                            margin: '0 auto',
                            lineHeight: '1.7'
                        }}
                    >
                        Factual record of building products, establishing campus communities, and rapid hackathon execution.
                    </motion.p>
                </div>

                {/* Timeline Items */}
                <div style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2.5rem'
                }}>
                    {/* Vertical Connector Line */}
                    <div style={{
                        position: 'absolute',
                        top: '20px',
                        bottom: '20px',
                        left: '27px',
                        width: '2px',
                        background: 'linear-gradient(180deg, var(--electric-cyan) 0%, rgba(0, 102, 255, 0.2) 100%)',
                        display: 'none' // Controlled on desktop
                    }} />

                    {experiences.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.organization}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="bento-card"
                                style={{
                                    padding: '2.2rem',
                                    border: '1px solid rgba(0, 102, 255, 0.25)',
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                    gap: '1.5rem',
                                    alignItems: 'center'
                                }}
                            >
                                <div>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        marginBottom: '0.8rem'
                                    }}>
                                        <div style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '8px',
                                            background: 'rgba(0, 102, 255, 0.12)',
                                            border: '1px solid rgba(0, 102, 255, 0.3)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <Icon size={20} color="var(--electric-cyan)" />
                                        </div>
                                        <div>
                                            <h3 style={{
                                                fontFamily: 'var(--font-display)',
                                                fontSize: '1.3rem',
                                                fontWeight: '700',
                                                color: '#ffffff'
                                            }}>
                                                {item.role}
                                            </h3>
                                            <div style={{ color: 'var(--electric-blue-light)', fontWeight: '600', fontSize: '0.9rem' }}>
                                                {item.organization}
                                            </div>
                                        </div>
                                    </div>

                                    <p style={{
                                        color: 'var(--text-secondary)',
                                        lineHeight: '1.7',
                                        fontSize: '0.95rem'
                                    }}>
                                        {item.desc}
                                    </p>
                                </div>

                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    gap: '1rem'
                                }}>
                                    <div style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        fontSize: '0.8rem',
                                        fontFamily: 'var(--font-mono)',
                                        color: 'var(--text-white)',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        padding: '4px 12px',
                                        borderRadius: '20px',
                                        border: '1px solid rgba(255, 255, 255, 0.1)'
                                    }}>
                                        <Calendar size={13} color="var(--electric-cyan)" />
                                        <span>{item.period}</span>
                                    </div>

                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                        {item.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                style={{
                                                    fontSize: '0.75rem',
                                                    fontFamily: 'var(--font-mono)',
                                                    color: 'var(--text-secondary)',
                                                    background: 'rgba(0, 102, 255, 0.08)',
                                                    border: '1px solid rgba(0, 102, 255, 0.15)',
                                                    padding: '3px 8px',
                                                    borderRadius: '4px'
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
            </div>
        </section>
    );
};

export default ExperienceTimeline;
