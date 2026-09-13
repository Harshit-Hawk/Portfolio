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
                    backgroundColor: isHovered ? '#0b0f19' : 'var(--electric-blue)',
                    borderRadius: '50%',
                    boxShadow: isHovered
                        ? '0 0 12px rgba(11, 15, 25, 0.3), 0 0 20px rgba(0, 102, 255, 0.35)'
                        : '0 0 8px rgba(0, 102, 255, 0.4)',
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
                    border: `1.5px solid ${isHovered ? 'rgba(0, 102, 255, 0.85)' : 'rgba(0, 102, 255, 0.45)'}`,
                    boxShadow: isHovered ? '0 0 16px rgba(0, 102, 255, 0.25)' : 'none',
                    transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s',
                    pointerEvents: 'none',
                }}
            />
        </div>
    );
};

export default CustomCursor;
