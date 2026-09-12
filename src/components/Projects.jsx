import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Activity, Cpu, Layout, Layers } from 'lucide-react';

const projects = [
    {
        tag: "Data Visualization & Canvas",
        icon: Activity,
        title: "Real-Time Data Visualizer",
        subtitle: "High-Throughput Telemetry Engine",
        desc: "A responsive telemetry dashboard designed to render continuous streaming metrics under heavy data load. Implements zero-copy buffer batching and hardware-accelerated Canvas rendering to maintain a consistent 60fps frame budget.",
        takeaway: "Sub-10ms event loop batching • Real-time WebSocket connection • Zero layout shift",
        stacks: ["React 19", "TypeScript", "Canvas API", "Framer Motion"],
        github: "https://github.com",
        live: "https://example.com"
    },
    {
        tag: "Fintech & Web3",
        icon: Cpu,
        title: "Decentralized Liquidity Exchange",
        subtitle: "Smart Contract Router & Interface",
        desc: "A decentralized trading application built with Next.js and Ethers.js. Features automated slippage calculations, custom wallet connectors, and gas-optimized transaction routing across automated market makers.",
        takeaway: "Deterministic state management • Multi-wallet adapter • Comprehensive error handling",
        stacks: ["Solidity", "Web3", "Tailwind CSS", "React"],
        github: "https://github.com",
        live: "https://example.com"
    },
    {
        tag: "Collaborative Tools",
        icon: Layout,
        title: "Collaborative Canvas Studio",
        subtitle: "Multiplayer Real-Time Workspace",
        desc: "A multiplayer collaborative drawing and ideation workspace. Synchronizes multi-user cursor coordinates and element mutations in real time via WebSockets, with optimistic local UI updates and conflict resolution.",
        takeaway: "Peer WebSocket synchronization • Optimistic UI mutation • Responsive canvas zoom/pan",
        stacks: ["React", "Node.js", "Socket.io", "TypeScript"],
        github: "https://github.com",
        live: "https://example.com"
    },
    {
        tag: "UI Architecture",
        icon: Layers,
        title: "Modular Motion Framework",
        subtitle: "Component Library & Design System",
        desc: "An internal design system and component framework built for high-performance creative web applications. Delivers accessible keyboard navigation, flexible compound components, and spring-physics micro-interactions.",
        takeaway: "Accessible WCAG AA compliance • Zero-runtime CSS modules • Modular compound components",
        stacks: ["React 19", "TypeScript", "Tailwind CSS", "Storybook"],
        github: "https://github.com",
        live: "https://example.com"
    }
];

const Projects = () => {
    return (
        <section id="projects" style={{
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
                            Selected Work
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
                        Featured <span className="text-electric">Projects</span>
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
                        A collection of digital products, client applications, and open-source explorations built with care and technical rigor.
                    </motion.p>
                </div>

                {/* Projects Bento Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {projects.map((project, i) => {
                        const Icon = project.icon;
                        return (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="bento-card"
                                style={{
                                    padding: '2.5rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <div>
                                    {/* Top Tag & Actions */}
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: '1.5rem'
                                    }}>
                                        <div style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            fontSize: '0.75rem',
                                            fontWeight: '600',
                                            fontFamily: 'var(--font-mono)',
                                            color: 'var(--electric-cyan)',
                                            background: 'rgba(0, 212, 255, 0.08)',
                                            border: '1px solid rgba(0, 212, 255, 0.2)',
                                            padding: '4px 10px',
                                            borderRadius: '6px'
                                        }}>
                                            <Icon size={13} />
                                            <span>{project.tag}</span>
                                        </div>

                                        <div style={{ display: 'flex', gap: '8px' }}>
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    color: 'var(--text-secondary)',
                                                    padding: '6px',
                                                    borderRadius: '6px',
                                                    transition: 'color 0.2s'
                                                }}
                                                aria-label="View Source Code"
                                            >
                                                <Github size={18} />
                                            </a>
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    color: 'var(--electric-cyan)',
                                                    padding: '6px',
                                                    borderRadius: '6px',
                                                    transition: 'color 0.2s'
                                                }}
                                                aria-label="View Live Project"
                                            >
                                                <ArrowUpRight size={18} />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Project Title & Subtitle */}
                                    <h3 style={{
                                        fontFamily: 'var(--font-display)',
                                        fontSize: '1.6rem',
                                        fontWeight: '700',
                                        color: '#ffffff',
                                        marginBottom: '4px'
                                    }}>
                                        {project.title}
                                    </h3>
                                    <div style={{
                                        fontSize: '0.85rem',
                                        color: 'var(--electric-blue-light)',
                                        fontWeight: '500',
                                        marginBottom: '1.2rem'
                                    }}>
                                        {project.subtitle}
                                    </div>

                                    {/* Description */}
                                    <p style={{
                                        color: 'var(--text-secondary)',
                                        lineHeight: '1.7',
                                        fontSize: '0.94rem',
                                        marginBottom: '1.5rem'
                                    }}>
                                        {project.desc}
                                    </p>

                                    {/* Technical Takeaway */}
                                    <div style={{
                                        padding: '10px 14px',
                                        background: 'rgba(0, 102, 255, 0.06)',
                                        border: '1px solid rgba(0, 102, 255, 0.18)',
                                        borderRadius: '8px',
                                        fontSize: '0.78rem',
                                        color: 'var(--electric-cyan)',
                                        fontFamily: 'var(--font-mono)',
                                        marginBottom: '1.8rem'
                                    }}>
                                        {project.takeaway}
                                    </div>
                                </div>

                                <div>
                                    {/* Stacks */}
                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '6px',
                                        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                                        paddingTop: '1.2rem'
                                    }}>
                                        {project.stacks.map((tech) => (
                                            <span
                                                key={tech}
                                                style={{
                                                    fontSize: '0.75rem',
                                                    fontFamily: 'var(--font-mono)',
                                                    padding: '3px 8px',
                                                    borderRadius: '4px',
                                                    background: 'rgba(255, 255, 255, 0.04)',
                                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                                    color: 'var(--text-secondary)'
                                                }}
                                            >
                                                {tech}
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

export default Projects;
