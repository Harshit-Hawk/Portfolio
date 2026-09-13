import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Rocket, Clock, Award, Sparkles, CheckCircle2 } from 'lucide-react';

const achievements = [
    {
        icon: Trophy,
        category: 'Hackathons & Rapid Prototyping',
        title: '3+ Hackathon Participations',
        timeframe: '24–36 Hour Sprints',
        badge: 'Competitive Builder',
        description: 'Competed in intensive competitive hackathons, collaborating under tight 24-36 hour deadlines to take concepts from blank canvas to functional, demonstrable prototypes.',
        highlights: [
            'Rapid MVP ideation, sprint planning, and division of engineering tasks',
            'Full-stack architecture under extreme time constraints',
            'Live product pitching, deck preparation, and technical Q&A with judges'
        ],
        gradient: 'linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)',
        border: 'rgba(0, 102, 255, 0.2)'
    },
    {
        icon: Users,
        category: 'Campus Leadership & Community',
        title: 'Gateway Esports Club',
        timeframe: 'Founder & Community Lead',
        badge: 'Campus Initiative',
        description: 'Founded and spearheaded a campus-wide esports & gaming community. Created structured tournaments, student team rosters, and production workflows that united hundreds of passionate gamers.',
        highlights: [
            'Organized multiple collegiate esports tournaments with structured bracket systems',
            'Managed event operations, player registration, and community communication',
            'Created dedicated Discord servers and community hubs engaging 100+ active students'
        ],
        gradient: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)',
        border: 'rgba(16, 185, 129, 0.25)'
    },
    {
        icon: Rocket,
        category: 'Product Engineering & Entrepreneurship',
        title: 'CampusDex — Student Operating System',
        timeframe: 'Founder / Lead Builder',
        badge: 'Flagship Venture',
        description: 'Identified recurring pain points across campus workflows and designed, architected, and built CampusDex from zero to solve attendance tracking, academic resource distribution, and notices.',
        highlights: [
            'End-to-end product design, data modeling, and full-stack implementation',
            'Integrated 8 modular services including attendance, notices, and routine manager',
            'Conducted student interviews and usability testing for iterative feature improvement'
        ],
        gradient: 'linear-gradient(135deg, #ffffff 0%, #f5f3ff 100%)',
        border: 'rgba(124, 58, 237, 0.25)'
    }
];

const AchievementsSection = () => {
    return (
        <section id="achievements" style={{
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
                            <Award size={13} />
                            Track Record & Milestones
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
                        Hackathons & <span className="text-electric">Achievements</span>
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
                        Real experiences, campus initiatives, and hackathon sprints. Grounded in actual building, team leadership, and turning problems into functional software.
                    </motion.p>
                </div>

                {/* Achievements Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                    gap: '2rem'
                }}>
                    {achievements.map((item, idx) => {
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
                                    background: item.gradient,
                                    border: `1px solid ${item.border}`,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    position: 'relative'
                                }}
                            >
                                <div>
                                    {/* Top Metadata */}
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: '1.4rem'
                                    }}>
                                        <div style={{
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: '12px',
                                            background: '#ffffff',
                                            border: '1px solid rgba(15, 23, 42, 0.1)',
                                            boxShadow: '0 2px 8px rgba(15, 23, 42, 0.05)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <Icon size={24} color="var(--electric-blue)" />
                                        </div>

                                        <span style={{
                                            fontSize: '0.75rem',
                                            fontFamily: 'var(--font-mono)',
                                            color: 'var(--electric-blue)',
                                            background: '#ffffff',
                                            border: '1px solid #bfdbfe',
                                            padding: '4px 10px',
                                            borderRadius: '20px',
                                            fontWeight: '700'
                                        }}>
                                            {item.badge}
                                        </span>
                                    </div>

                                    <div style={{
                                        fontSize: '0.78rem',
                                        fontFamily: 'var(--font-mono)',
                                        color: 'var(--text-muted)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.8px',
                                        marginBottom: '0.4rem',
                                        fontWeight: '600'
                                    }}>
                                        {item.category}
                                    </div>

                                    <h3 style={{
                                        fontFamily: 'var(--font-display)',
                                        fontSize: '1.45rem',
                                        fontWeight: '800',
                                        color: '#0b0f19',
                                        marginBottom: '0.5rem',
                                        letterSpacing: '-0.4px'
                                    }}>
                                        {item.title}
                                    </h3>

                                    <div style={{
                                        fontSize: '0.85rem',
                                        color: 'var(--electric-blue)',
                                        fontFamily: 'var(--font-mono)',
                                        fontWeight: '600',
                                        marginBottom: '1.2rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px'
                                    }}>
                                        <Clock size={13} />
                                        <span>{item.timeframe}</span>
                                    </div>

                                    <p style={{
                                        color: 'var(--text-secondary)',
                                        fontSize: '0.92rem',
                                        lineHeight: '1.7',
                                        marginBottom: '1.6rem'
                                    }}>
                                        {item.description}
                                    </p>
                                </div>

                                {/* Key Highlights List */}
                                <div style={{
                                    borderTop: '1px solid rgba(15, 23, 42, 0.08)',
                                    paddingTop: '1.2rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.7rem'
                                }}>
                                    <div style={{
                                        fontSize: '0.75rem',
                                        fontFamily: 'var(--font-mono)',
                                        color: 'var(--text-muted)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px',
                                        fontWeight: '600'
                                    }}>
                                        Key Takeaways:
                                    </div>
                                    {item.highlights.map((point, hIdx) => (
                                        <div key={hIdx} style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '8px',
                                            fontSize: '0.86rem',
                                            color: 'var(--text-secondary)',
                                            lineHeight: '1.5'
                                        }}>
                                            <CheckCircle2 size={15} color="var(--electric-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                                            <span>{point}</span>
                                        </div>
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

export default AchievementsSection;
