import { motion } from 'framer-motion';

// High-Performance Light Theme Electric Blue Ambient Background Graphic
const BackgroundEffects = () => {
    return (
        <div style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 0,
            background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)'
        }}>
            {/* Royal Blue Ambient Glow Spotlight 1 */}
            <motion.div
                animate={{
                    scale: [1, 1.12, 1],
                    opacity: [0.4, 0.65, 0.4],
                    x: ['-4%', '4%', '-4%'],
                    y: ['-4%', '4%', '-4%'],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    top: '-8%',
                    left: '20%',
                    width: '60vw',
                    height: '55vh',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0, 102, 255, 0.12) 0%, rgba(56, 139, 253, 0.06) 45%, transparent 75%)',
                    filter: 'blur(70px)',
                }}
            />

            {/* Subtle Sky Blue Secondary Spotlight */}
            <motion.div
                animate={{
                    scale: [1.08, 0.95, 1.08],
                    opacity: [0.35, 0.55, 0.35],
                    x: ['4%', '-4%', '4%'],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    top: '30%',
                    right: '8%',
                    width: '50vw',
                    height: '50vh',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(2, 132, 199, 0.1) 0%, rgba(0, 102, 255, 0.04) 50%, transparent 70%)',
                    filter: 'blur(75px)',
                }}
            />

            {/* Subtle Vector Line Grid in Light Mode */}
            <div
                className="electric-grid-pattern"
                style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.75,
                    maskImage: 'radial-gradient(ellipse at 50% 35%, black 40%, transparent 85%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at 50% 35%, black 40%, transparent 85%)'
                }}
            />

            {/* Horizontal Subtle Scanning Accent Line */}
            <motion.div
                animate={{
                    y: ['-10%', '110%']
                }}
                transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent 0%, rgba(0, 102, 255, 0.35) 50%, transparent 100%)',
                    boxShadow: '0 0 12px rgba(0, 102, 255, 0.25)',
                    opacity: 0.6
                }}
            />
        </div>
    );
};

export default BackgroundEffects;

