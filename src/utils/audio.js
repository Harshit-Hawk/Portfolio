// Peaceful Traditional Anime Audio Synthesizer (Zero Dependencies)
// Generates gentle wind chimes, soft temple bells, and peaceful water drop sounds

let audioCtx = null;
let isAudioMuted = false;

const getAudioContext = () => {
    if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
            audioCtx = new AudioContextClass();
        }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    return audioCtx;
};

export const isMuted = () => isAudioMuted;

export const toggleMute = () => {
    isAudioMuted = !isAudioMuted;
    if (!isAudioMuted) {
        playWindChime();
    }
    return isAudioMuted;
};

// Gentle soft tick / paper touch
export const playHoverSound = () => {
    if (isAudioMuted) return;
    try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(659.25, ctx.currentTime); // E5
        osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.05);

        gain.gain.setValueAtTime(0.015, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.05);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.05);
    } catch (e) {
        // Ignore
    }
};

// Soft temple bell / chime note
export const playClickSound = () => {
    if (isAudioMuted) return;
    try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(1046.50, ctx.currentTime); // C6 bell

        gain.gain.setValueAtTime(0.035, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.25);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.25);
    } catch (e) {
        // Ignore
    }
};

// Peaceful wind chime harmonic
export const playWindChime = () => {
    if (isAudioMuted) return;
    try {
        const ctx = getAudioContext();
        if (!ctx) return;

        // Pentatonic wind chime sequence
        const freqs = [880, 1174.66, 1318.51];
        freqs.forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            const startTime = ctx.currentTime + idx * 0.06;

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, startTime);

            gain.gain.setValueAtTime(0.025, startTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.4);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(startTime);
            osc.stop(startTime + 0.4);
        });
    } catch (e) {
        // Ignore
    }
};

// Gentle message dispatched sound
export const playMessageSentSound = () => {
    if (isAudioMuted) return;
    try {
        const ctx = getAudioContext();
        if (!ctx) return;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1046.50, ctx.currentTime + 0.18);

        gain.gain.setValueAtTime(0.03, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.22);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.22);
    } catch (e) {
        // Ignore
    }
};
