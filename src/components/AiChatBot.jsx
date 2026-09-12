import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, Sparkles, MessageSquare, Terminal } from 'lucide-react';

const initialDialogue = [
    {
        sender: 'nexus',
        text: 'Welcome. I am Nexus, Harshit’s automated engineering assistant. How can I assist you in reviewing technical specifications or project availability?'
    }
];

const quickQueries = [
    { label: 'Technical Stack', query: 'What is Harshit’s primary technical stack?' },
    { label: 'Production Experience', query: 'What kind of systems does Harshit build?' },
    { label: 'Availability & Roles', query: 'What is Harshit’s current availability?' },
    { label: 'Direct Consultation', query: 'How can I schedule a consultation?' }
];

const responsesMap = {
    'What is Harshit’s primary technical stack?': 'Harshit specializes in modern TypeScript, React 19, Next.js, Framer Motion, and Tailwind on the frontend; combined with Node.js, Python, PostgreSQL, Redis, and Docker on the backend infrastructure.',
    'What kind of systems does Harshit build?': 'He architects high-throughput web applications, real-time telemetry dashboards (such as WebGL signal visualizers), decentralized fintech protocols, and distributed cloud microservices.',
    'What is Harshit’s current availability?': 'Harshit is currently available for select senior engineering roles, contract engagements, and architectural advisory projects for Q1/Q2.',
    'How can I schedule a consultation?': 'You can submit an inquiry through the Project Consultation form at the bottom of the page, or connect directly on GitHub or LinkedIn.'
};

const AiChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState(initialDialogue);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleSendMessage = (textToSend) => {
        const text = textToSend || inputValue;
        if (!text.trim()) return;

        const userMsg = { sender: 'user', text };
        setMessages((prev) => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        setTimeout(() => {
            let botReply = responsesMap[text] ||
                `Thank you for your inquiry. Harshit focuses on high-performance web systems and full-stack architecture. Feel free to leave your contact information in the consultation form below!`;

            setMessages((prev) => [...prev, { sender: 'nexus', text: botReply }]);
            setIsTyping(false);
        }, 550);
    };

    return (
        <>
            {/* Chatbot Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 25, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 25, scale: 0.95 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="bento-card"
                        style={{
                            position: 'fixed',
                            bottom: '5.5rem',
                            right: '2rem',
                            width: 'min(380px, calc(100vw - 3rem))',
                            height: '530px',
                            display: 'flex',
                            flexDirection: 'column',
                            zIndex: 1000,
                            border: '1px solid rgba(0, 102, 255, 0.4)',
                            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.85)',
                            background: 'rgba(6, 9, 20, 0.96)'
                        }}
                    >
                        {/* Header */}
                        <div style={{
                            padding: '1rem 1.2rem',
                            background: 'rgba(255, 255, 255, 0.02)',
                            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '8px',
                                    background: 'linear-gradient(135deg, #00d4ff, #0066ff)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#ffffff',
                                    boxShadow: '0 0 12px rgba(0, 102, 255, 0.5)'
                                }}>
                                    <Bot size={18} />
                                </div>
                                <div>
                                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: '700', color: '#ffffff', fontSize: '0.95rem' }}>
                                        Nexus Assistant
                                    </div>
                                    <div style={{ fontSize: '0.7rem', color: 'var(--electric-cyan)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                        <span className="status-dot" style={{ width: '5px', height: '5px' }} />
                                        Engineering Representative
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => setIsOpen(false)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: 'var(--text-secondary)',
                                    cursor: 'pointer',
                                    padding: '4px'
                                }}
                                aria-label="Close Assistant"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Dialogue Messages */}
                        <div style={{
                            flex: 1,
                            padding: '1.2rem',
                            overflowY: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem'
                        }}>
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    style={{
                                        alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                        maxWidth: '85%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start'
                                    }}
                                >
                                    <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginBottom: '3px', fontFamily: 'var(--font-mono)' }}>
                                        {msg.sender === 'user' ? 'Inquirer' : 'Nexus AI'}
                                    </span>
                                    <div style={{
                                        padding: '0.85rem 1.1rem',
                                        borderRadius: '12px',
                                        borderBottomRightRadius: msg.sender === 'user' ? '2px' : '12px',
                                        borderBottomLeftRadius: msg.sender === 'nexus' ? '2px' : '12px',
                                        background: msg.sender === 'user'
                                            ? 'linear-gradient(135deg, #0080ff, #0052cc)'
                                            : 'rgba(255, 255, 255, 0.05)',
                                        color: '#ffffff',
                                        border: msg.sender === 'nexus' ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
                                        fontSize: '0.88rem',
                                        lineHeight: '1.6'
                                    }}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <div style={{
                                    alignSelf: 'flex-start',
                                    padding: '8px 14px',
                                    background: 'rgba(255, 255, 255, 0.04)',
                                    borderRadius: '12px',
                                    fontSize: '0.78rem',
                                    color: 'var(--text-muted)'
                                }}>
                                    Processing query...
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Prompts */}
                        <div style={{
                            padding: '8px 1rem',
                            background: 'rgba(0, 0, 0, 0.4)',
                            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                            display: 'flex',
                            gap: '6px',
                            overflowX: 'auto'
                        }}>
                            {quickQueries.map((q) => (
                                <button
                                    key={q.label}
                                    onClick={() => handleSendMessage(q.query)}
                                    style={{
                                        whiteSpace: 'nowrap',
                                        background: 'rgba(0, 102, 255, 0.1)',
                                        border: '1px solid rgba(0, 102, 255, 0.25)',
                                        borderRadius: '6px',
                                        color: 'var(--electric-cyan)',
                                        padding: '4px 10px',
                                        fontSize: '0.75rem',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {q.label}
                                </button>
                            ))}
                        </div>

                        {/* Input Footer */}
                        <div style={{
                            padding: '0.9rem',
                            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                            display: 'flex',
                            gap: '8px',
                            background: 'rgba(4, 6, 12, 0.98)'
                        }}>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                                placeholder="Inquire about stack, systems, availability..."
                                style={{
                                    flex: 1,
                                    padding: '0.75rem 1rem',
                                    background: 'rgba(255, 255, 255, 0.04)',
                                    border: '1px solid rgba(255, 255, 255, 0.12)',
                                    borderRadius: '8px',
                                    color: '#ffffff',
                                    fontSize: '0.88rem',
                                    outline: 'none'
                                }}
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleSendMessage()}
                                className="btn-electric"
                                style={{
                                    padding: '0.75rem',
                                    borderRadius: '8px',
                                    width: '40px',
                                    height: '40px'
                                }}
                            >
                                <Send size={15} />
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Trigger Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                style={{
                    position: 'fixed',
                    bottom: '2rem',
                    right: '2rem',
                    width: '56px',
                    height: '56px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #00d4ff, #0052cc)',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    boxShadow: '0 8px 30px rgba(0, 102, 255, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 999,
                    cursor: 'pointer',
                    color: '#ffffff'
                }}
                aria-label="Open Nexus Assistant"
            >
                {isOpen ? <X size={24} /> : <Bot size={24} />}
            </motion.button>
        </>
    );
};

export default AiChatBot;
