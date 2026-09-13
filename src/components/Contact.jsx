import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check, Copy, Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const emailAddress = "[your@email.com]"; // Replace with your actual email

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(emailAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;
        setSubmitted(true);
        setTimeout(() => {
            setFormData({ name: '', email: '', message: '' });
        }, 2000);
    };

    return (
        <section id="contact" style={{
            padding: '8rem clamp(1.5rem, 5vw, 4rem) 10rem clamp(1.5rem, 5vw, 4rem)',
            position: 'relative'
        }}>
            <div style={{ maxWidth: '820px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}
                    >
                        <span className="pro-badge">
                            <Mail size={13} />
                            Get in Touch
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
                        Have an idea <span className="text-electric">worth building?</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{
                            fontSize: '1.08rem',
                            color: 'var(--text-secondary)',
                            lineHeight: '1.7',
                            maxWidth: '620px',
                            margin: '0 auto'
                        }}
                    >
                        I’m always interested in interesting problems, ambitious projects, hackathons, collaborations, and startup ideas.
                    </motion.p>
                </div>

                {/* Direct 1-Click Copy Email Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        padding: '1.2rem 1.6rem',
                        background: 'rgba(239, 246, 255, 0.9)',
                        border: '1px solid rgba(0, 102, 255, 0.22)',
                        boxShadow: '0 4px 16px rgba(0, 102, 255, 0.05)',
                        borderRadius: '14px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '2.5rem',
                        flexWrap: 'wrap',
                        gap: '1rem'
                    }}
                >
                    <div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '600' }}>
                            Direct Email
                        </div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.98rem', color: '#0b0f19', fontWeight: '700' }}>
                            {emailAddress}
                        </div>
                    </div>

                    <button
                        onClick={handleCopyEmail}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '9px 18px',
                            borderRadius: '10px',
                            background: copied ? 'rgba(34, 197, 94, 0.12)' : 'rgba(0, 102, 255, 0.1)',
                            border: `1px solid ${copied ? '#22c55e' : 'rgba(0, 102, 255, 0.3)'}`,
                            color: copied ? '#15803d' : 'var(--electric-blue)',
                            fontSize: '0.85rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)'
                        }}
                    >
                        {copied ? <Check size={15} /> : <Copy size={15} />}
                        <span>{copied ? 'Copied to Clipboard!' : 'Copy Email'}</span>
                    </button>
                </motion.div>

                {/* Contact Message Card */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bento-card"
                    style={{
                        padding: 'clamp(2rem, 5vw, 3.5rem)',
                        border: '1px solid rgba(0, 102, 255, 0.18)',
                        background: 'rgba(255, 255, 255, 0.92)'
                    }}
                >
                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            style={{
                                textAlign: 'center',
                                padding: '3.5rem 1rem',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '1.2rem'
                            }}
                        >
                            <div style={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '50%',
                                background: 'rgba(0, 102, 255, 0.1)',
                                border: '1px solid var(--electric-blue)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Check size={30} color="var(--electric-blue)" />
                            </div>
                            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: '#0b0f19', fontWeight: '700' }}>
                                Message Sent Successfully
                            </h3>
                            <p style={{ color: 'var(--text-secondary)', maxWidth: '420px', lineHeight: '1.7', fontSize: '0.95rem' }}>
                                Thank you for getting in touch. I'll read your note and get back to you as soon as possible.
                            </p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                                <div>
                                    <label style={{
                                        display: 'block',
                                        fontSize: '0.84rem',
                                        fontWeight: '600',
                                        color: '#334155',
                                        marginBottom: '8px'
                                    }}>
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="Alex Rivera"
                                        style={{
                                            width: '100%',
                                            padding: '0.95rem 1.15rem',
                                            background: '#ffffff',
                                            border: '1px solid rgba(15, 23, 42, 0.14)',
                                            borderRadius: '10px',
                                            color: '#0b0f19',
                                            fontSize: '0.95rem',
                                            outline: 'none',
                                            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.03)',
                                            transition: 'border-color 0.2s, box-shadow 0.2s'
                                        }}
                                        onFocusCapture={(e) => {
                                            e.target.style.borderColor = 'var(--electric-blue)';
                                            e.target.style.boxShadow = '0 0 0 3px rgba(0, 102, 255, 0.15)';
                                        }}
                                        onBlurCapture={(e) => {
                                            e.target.style.borderColor = 'rgba(15, 23, 42, 0.14)';
                                            e.target.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.03)';
                                        }}
                                    />
                                </div>

                                <div>
                                    <label style={{
                                        display: 'block',
                                        fontSize: '0.84rem',
                                        fontWeight: '600',
                                        color: '#334155',
                                        marginBottom: '8px'
                                    }}>
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="alex@example.com"
                                        style={{
                                            width: '100%',
                                            padding: '0.95rem 1.15rem',
                                            background: '#ffffff',
                                            border: '1px solid rgba(15, 23, 42, 0.14)',
                                            borderRadius: '10px',
                                            color: '#0b0f19',
                                            fontSize: '0.95rem',
                                            outline: 'none',
                                            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.03)',
                                            transition: 'border-color 0.2s, box-shadow 0.2s'
                                        }}
                                        onFocusCapture={(e) => {
                                            e.target.style.borderColor = 'var(--electric-blue)';
                                            e.target.style.boxShadow = '0 0 0 3px rgba(0, 102, 255, 0.15)';
                                        }}
                                        onBlurCapture={(e) => {
                                            e.target.style.borderColor = 'rgba(15, 23, 42, 0.14)';
                                            e.target.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.03)';
                                        }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{
                                    display: 'block',
                                    fontSize: '0.84rem',
                                    fontWeight: '600',
                                    color: '#334155',
                                    marginBottom: '8px'
                                }}>
                                    Your Message
                                </label>
                                <textarea
                                    rows="5"
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Tell me about your project, team, or idea..."
                                    style={{
                                        width: '100%',
                                        padding: '0.95rem 1.15rem',
                                        background: '#ffffff',
                                        border: '1px solid rgba(15, 23, 42, 0.14)',
                                        borderRadius: '10px',
                                        color: '#0b0f19',
                                        fontSize: '0.95rem',
                                        fontFamily: 'inherit',
                                        outline: 'none',
                                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.03)',
                                        transition: 'border-color 0.2s, box-shadow 0.2s'
                                    }}
                                    onFocusCapture={(e) => {
                                        e.target.style.borderColor = 'var(--electric-blue)';
                                        e.target.style.boxShadow = '0 0 0 3px rgba(0, 102, 255, 0.15)';
                                    }}
                                    onBlurCapture={(e) => {
                                        e.target.style.borderColor = 'rgba(15, 23, 42, 0.14)';
                                        e.target.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.03)';
                                    }}
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.015 }}
                                whileTap={{ scale: 0.985 }}
                                type="submit"
                                className="btn-electric"
                                style={{ width: '100%', padding: '1.1rem', fontSize: '1rem', justifyContent: 'center' }}
                            >
                                <span>Let’s Build Something</span>
                                <ArrowUpRight size={18} />
                            </motion.button>
                        </form>
                    )}

                    {/* Social / Profiles */}
                    <div style={{
                        marginTop: '2.5rem',
                        paddingTop: '1.8rem',
                        borderTop: '1px solid rgba(15, 23, 42, 0.08)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.2rem'
                    }}>
                        <div style={{
                            fontSize: '0.78rem',
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--text-muted)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.6px',
                            fontWeight: '600'
                        }}>
                            Direct Connect Channels:
                        </div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '1rem'
                        }}>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    padding: '12px 16px',
                                    borderRadius: '10px',
                                    background: 'rgba(248, 250, 252, 0.8)',
                                    border: '1px solid rgba(15, 23, 42, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    color: 'var(--text-secondary)',
                                    textDecoration: 'none',
                                    fontSize: '0.88rem',
                                    fontFamily: 'var(--font-mono)',
                                    transition: 'all 0.2s'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--electric-blue)';
                                    e.currentTarget.style.color = '#0b0f19';
                                    e.currentTarget.style.background = '#ffffff';
                                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 102, 255, 0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(15, 23, 42, 0.1)';
                                    e.currentTarget.style.color = 'var(--text-secondary)';
                                    e.currentTarget.style.background = 'rgba(248, 250, 252, 0.8)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <Github size={17} color="var(--electric-blue)" />
                                <span>[github.com/yourusername]</span>
                            </a>

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    padding: '12px 16px',
                                    borderRadius: '10px',
                                    background: 'rgba(248, 250, 252, 0.8)',
                                    border: '1px solid rgba(15, 23, 42, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    color: 'var(--text-secondary)',
                                    textDecoration: 'none',
                                    fontSize: '0.88rem',
                                    fontFamily: 'var(--font-mono)',
                                    transition: 'all 0.2s'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--electric-blue)';
                                    e.currentTarget.style.color = '#0b0f19';
                                    e.currentTarget.style.background = '#ffffff';
                                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 102, 255, 0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(15, 23, 42, 0.1)';
                                    e.currentTarget.style.color = 'var(--text-secondary)';
                                    e.currentTarget.style.background = 'rgba(248, 250, 252, 0.8)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <Linkedin size={17} color="var(--electric-blue)" />
                                <span>[linkedin.com/in/yourusername]</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
