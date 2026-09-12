import { motion } from 'framer-motion';

// High-Performance 2D Electric Motion Graphic Background (Zero 3D/4D Elements)
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
            background: '#000000'
        }}>
            {/* Electric Blue Core Spotlight 1 */}
            <motion.div
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.35, 0.5, 0.35],
                    x: ['-5%', '5%', '-5%'],
                    y: ['-5%', '5%', '-5%'],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    top: '-10%',
                    left: '20%',
                    width: '65vw',
                    height: '55vh',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0, 102, 255, 0.28) 0%, rgba(0, 212, 255, 0.12) 40%, transparent 75%)',
                    filter: 'blur(75px)',
                }}
            />

            {/* Electric Blue Core Spotlight 2 */}
            <motion.div
                animate={{
                    scale: [1.1, 0.95, 1.1],
                    opacity: [0.25, 0.45, 0.25],
                    x: ['5%', '-5%', '5%'],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    top: '30%',
                    right: '10%',
                    width: '50vw',
                    height: '50vh',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0, 153, 255, 0.22) 0%, rgba(0, 80, 255, 0.08) 50%, transparent 70%)',
                    filter: 'blur(80px)',
                }}
            />

            {/* Subtle Vector Line Grid */}
            <div
                className="electric-grid-pattern"
                style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.65,
                    maskImage: 'radial-gradient(ellipse at 50% 35%, black 40%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at 50% 35%, black 40%, transparent 80%)'
                }}
            />

            {/* Horizontal Electric Scanning Beam */}
            <motion.div
                animate={{
                    y: ['-10%', '110%']
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent 0%, rgba(0, 212, 255, 0.6) 50%, transparent 100%)',
                    boxShadow: '0 0 15px rgba(0, 212, 255, 0.5)',
                    opacity: 0.5
                }}
            />
        </div>
    );
};

export default BackgroundEffects;
