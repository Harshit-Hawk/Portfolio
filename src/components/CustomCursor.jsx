import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 28, stiffness: 550, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        const handleMouseOver = (e) => {
            const target = e.target;
            const isClickable = target.closest('a, button, input, textarea, [role="button"], .clickable');
            setIsHovered(!!isClickable);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mouseover', handleMouseOver);
        document.body.addEventListener('mouseleave', handleMouseLeave);
        document.body.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mouseover', handleMouseOver);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div style={{ pointerEvents: 'none', position: 'fixed', inset: 0, zIndex: 99999 }}>
            {/* Center Electric Dot */}
            <motion.div
                className="pro-cursor-dot"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: isClicking ? 10 : isHovered ? 8 : 6,
                    height: isClicking ? 10 : isHovered ? 8 : 6,
                    backgroundColor: isHovered ? '#ffffff' : 'var(--electric-cyan)',
                    borderRadius: '50%',
                    boxShadow: isHovered
                        ? '0 0 15px #ffffff, 0 0 25px var(--electric-cyan)'
                        : '0 0 10px var(--electric-cyan)',
                    transition: 'width 0.15s, height 0.15s, background-color 0.15s',
                    pointerEvents: 'none',
                }}
            />

            {/* Trailing Precision Ring */}
            <motion.div
                className="pro-cursor-ring"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: isHovered ? 40 : 26,
                    height: isHovered ? 40 : 26,
                    borderRadius: '50%',
                    border: `1.5px solid ${isHovered ? 'rgba(0, 212, 255, 0.9)' : 'rgba(0, 102, 255, 0.5)'}`,
                    boxShadow: isHovered ? '0 0 18px rgba(0, 212, 255, 0.4)' : 'none',
                    transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s',
                    pointerEvents: 'none',
                }}
            />
        </div>
    );
};

export default CustomCursor;
