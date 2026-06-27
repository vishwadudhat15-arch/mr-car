import React, { useState, useEffect, useRef } from "react";
import { translations } from "./translations";
import CongratulationsPopup from "./CongratulationsPopup";
import WinPopup from "./WinPopup";
import SettingsPanel from "./SettingsPanel";

export default function Game({ onMapSelect, mapType, coins, setCoins, onHome, settings, onSettingsChange, lang }) {
    const t = translations[lang];
    const [screen, setScreen] = useState("tutorial");
    const [count, setCount] = useState(3);
    const [distance, setDistance] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [score, setScore] = useState(0);
    const [showWinPopup, setShowWinPopup] = useState(false);
    const [showCongrats, setShowCongrats] = useState(false);
    const [currentLevel, setCurrentLevel] = useState(1);
    const [earnedCoins, setEarnedCoins] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const checkIsMobile = () => {
        const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        const isSmallScreen = window.innerWidth <= 1024;
        return isMobileUA || (isTouch && isSmallScreen);
    };

    const [isMobile] = useState(() => checkIsMobile());

    const canvasRef = useRef(null);
    const rafRef = useRef(null);
    const isPausedRef = useRef(false);

    const stateRef = useRef({
        distance: 0, speed: 0, targetSpeed: 8, carX: 0, enemies: [], coins: [],
        score: 0, earnedCoins: 0, keys: {}, roadOffset: 0, _levelTarget: 10000,
    });

    useEffect(() => { isPausedRef.current = isPaused; }, [isPaused]);

    const [canvasSize, setCanvasSize] = useState({ w: window.innerWidth, h: window.innerHeight });

    useEffect(() => {
        const handleResize = () => {
            const newW = window.innerWidth;
            setCanvasSize({ w: newW, h: window.innerHeight });
            const mobile = checkIsMobile();
            const carW = mobile ? 40 : 50;
            stateRef.current.carX = (newW / 2) - (carW / 2);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const mapColors = {
        highway: { sky: '#87CEEB', road: '#2a2a2a', line: '#FFD700', side: '#228B22' },
        city: { sky: '#1a1a2e', road: '#333', line: '#fff', side: '#0f0f1e' },
        desert: { sky: '#FFB347', road: '#8B7355', line: '#FFE4B5', side: '#DEB887' },
        snow: { sky: '#B0E0E6', road: '#404040', line: '#87CEEB', side: '#FFFAFA' },
        jungle: { sky: '#3a7d44', road: '#654321', line: '#90EE90', side: '#2d5016' },
        night: { sky: '#0a0a1a', road: '#1a1a1a', line: '#FFD700', side: '#050510' },
        beach: { sky: '#87CEEB', road: '#F4A460', line: '#FFF8DC', side: '#4682B4' },
        mountain: { sky: '#778899', road: '#696969', line: '#DCDCDC', side: '#2F4F4F' },
    };
    const colors = mapColors[mapType] || mapColors.highway;

    useEffect(() => {
        if (screen === "tutorial") { setTimeout(() => setScreen("countdown"), 3000); }
        if (screen === "countdown") {
            if (count > 0) setTimeout(() => setCount(c => c - 1), 1000);
            else setTimeout(() => setScreen("play"), 1000);
        }
    }, [screen, count]);

    useEffect(() => {
        if (screen !== "play" && screen !== "countdown" && screen !== "tutorial") return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const { w: W, h: H } = canvasSize;

        const roadWidth = Math.min(W * 0.85, W < 768 ? 280 : 350);
        const roadLeft = W / 2 - roadWidth / 2;
        const roadRight = W / 2 + roadWidth / 2;
        const laneWidth = roadWidth / 3;
        const carW = isMobile ? 40 : 50;
        const carH = isMobile ? 75 : 90;

        if (stateRef.current.carX === 0) {
            stateRef.current.carX = roadLeft + laneWidth + (laneWidth - carW) / 2;
            stateRef.current.speed = 4;
        }

        const hit = (a, b) => (a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y);

        const drawCar = (x, y, w, h, color, isPlayer = false) => {
            ctx.fillStyle = color; ctx.fillRect(x, y, w, h);
            ctx.fillStyle = isPlayer ? 'rgba(135,206,235,0.7)' : 'rgba(100,100,150,0.7)'; ctx.fillRect(x + 5, y + 8, w - 10, h * 0.35);
            ctx.fillStyle = '#000'; ctx.fillRect(x - 4, y + 12, 6, 16); ctx.fillRect(x + w - 2, y + 12, 6, 16);
            ctx.fillRect(x - 4, y + h - 28, 6, 16); ctx.fillRect(x + w - 2, y + h - 28, 6, 16);
        };

        const loop = () => {
            if (isPausedRef.current) { rafRef.current = requestAnimationFrame(loop); return; }
            const s = stateRef.current;
            ctx.fillStyle = colors.sky; ctx.fillRect(0, 0, W, H);
            ctx.fillStyle = colors.side; ctx.fillRect(0, 0, roadLeft, H); ctx.fillRect(roadRight, 0, W - roadRight, H);
            ctx.fillStyle = colors.road; ctx.fillRect(roadLeft, 0, roadWidth, H);
            ctx.fillStyle = colors.line; for (let l = 1; l < 3; l++) for (let i = -40; i < H; i += 70) ctx.fillRect(roadLeft + l * laneWidth, i + s.roadOffset, 6, 40);

            if (screen === "play") {
                s.speed += (s.targetSpeed - s.speed) * 0.08; s.distance += s.speed; s.roadOffset = (s.roadOffset + s.speed) % 70;
                setDistance(s.distance); setSpeed(s.speed);
                if (s.distance >= s._levelTarget) { s._levelTarget += 10000; setCurrentLevel(c => c + 1); if (currentLevel >= 5) setShowWinPopup(true); else setShowCongrats(true); setScreen("finish"); return; }
                if (Math.random() < 0.11) {
                    const lane = Math.floor(Math.random() * 3);
                    s.enemies.push({ x: roadLeft + lane * laneWidth + (laneWidth - carW) / 2, y: -150, w: carW, h: carH, color: '#4169E1', passed: false, speed: 3 + Math.random() * 2 });
                }
                s.enemies.forEach(e => { e.y += s.speed - e.speed; if (hit({ x: s.carX, y: H - (isMobile ? 120 : 150), w: carW, h: carH }, e)) setScreen("gameover"); });
                s.enemies = s.enemies.filter(e => e.y < H + 100);
                if (s.keys['ArrowLeft'] || s.keys['a']) s.carX = Math.max(roadLeft + 5, s.carX - 5);
                if (s.keys['ArrowRight'] || s.keys['d']) s.carX = Math.min(roadRight - carW - 5, s.carX + 5);
            }
            drawCar(s.carX, H - (isMobile ? 120 : 150), carW, carH, '#FF3366', true);
            s.enemies.forEach(e => drawCar(e.x, e.y, e.w, e.h, e.color));
            rafRef.current = requestAnimationFrame(loop);
        };

        const handleKeyDown = (e) => { stateRef.current.keys[e.key] = true; };
        const handleKeyUp = (e) => { stateRef.current.keys[e.key] = false; };
        window.addEventListener("keydown", handleKeyDown); window.addEventListener("keyup", handleKeyUp);

        loop();
        return () => {
            window.removeEventListener("keydown", handleKeyDown); window.removeEventListener("keyup", handleKeyUp);
            cancelAnimationFrame(rafRef.current);
        };
    }, [screen, mapType, canvasSize, isMobile]);

    const restart = () => {
        stateRef.current = { distance: 0, speed: 4, targetSpeed: 8, carX: 0, enemies: [], coins: [], score: 0, earnedCoins: 0, keys: {}, roadOffset: 0, _levelTarget: 10000 };
        setDistance(0); setSpeed(0); setScore(0); setEarnedCoins(0); setCount(3); setShowWinPopup(false); setShowCongrats(false); setCurrentLevel(1); setScreen("tutorial");
    };

    return (
        <div style={{ width: '100vw', height: '100vh', background: '#000', position: 'fixed', top: 0, left: 0, color: '#fff' }}>
            <canvas ref={canvasRef} width={canvasSize.w} height={canvasSize.h} style={{ width: '100%', height: '100%', touchAction: 'none' }} />
            {screen === "play" && <div style={{ position: 'absolute', top: 20, left: 20, fontSize: '24px', fontWeight: '900' }}>{Math.floor(speed * 20)} km/h</div>}
            {isPaused && <div onClick={() => setIsPaused(false)} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px' }}>PAUSED</div>}
            <button
                onClick={() => setIsPaused(true)}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(255,50,50,0.6), inset 0 2px 5px rgba(255,255,255,0.5)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1) translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 15px rgba(255,50,50,0.4), inset 0 2px 5px rgba(255,255,255,0.5)'; }}
                onTouchStart={(e) => { e.currentTarget.style.transform = 'scale(0.95) translateY(2px)'; e.currentTarget.style.boxShadow = '0 2px 5px rgba(255,50,50,0.4), inset 0 0 5px rgba(0,0,0,0.2)'; }}
                onTouchEnd={(e) => { e.currentTarget.style.transform = 'scale(1) translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 15px rgba(255,50,50,0.4), inset 0 2px 5px rgba(255,255,255,0.5)'; }}
                style={{
                    position: 'absolute', top: 20, right: 20,
                    background: 'linear-gradient(145deg, #ff5e5e, #e60000)',
                    border: '2px solid #ff9999',
                    borderRadius: '50%',
                    width: 'clamp(40px, 8vw, 50px)',
                    height: 'clamp(40px, 8vw, 50px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 6px 15px rgba(255,50,50,0.4), inset 0 2px 5px rgba(255,255,255,0.5)',
                    transition: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
                    outline: 'none',
                    WebkitTapHighlightColor: 'transparent',
                    zIndex: 100
                }}
            >
                <svg width="55%" height="55%" viewBox="0 0 24 24" fill="white">
                    <rect x="5" y="2" width="5" height="20" rx="2" />
                    <rect x="14" y="2" width="5" height="20" rx="2" />
                </svg>
            </button>
            {showCongrats && <CongratulationsPopup level={currentLevel} coins={earnedCoins} onStart={() => { setShowCongrats(false); setScreen("countdown"); setCount(3); }} onMapSelect={onMapSelect} onHome={onHome} lang={lang} mapType={mapType} />}
            {showWinPopup && <WinPopup score={score} distance={distance} coins={earnedCoins} onRestart={restart} onMapSelect={onMapSelect} onHome={onHome} lang={lang} mapType={mapType} />}
            {screen === "countdown" && <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '100px', fontWeight: '900' }}>{count || 'GO!'}</div>}
            {screen === "gameover" && <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(255,0,0,0.5)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h1 style={{ fontSize: '60px' }}>CRASH!</h1>
                <button onClick={restart} style={{ padding: '20px 40px', fontSize: '24px', borderRadius: '50px', border: 'none', background: '#fff', cursor: 'pointer' }}>RESTART</button>
                <button onClick={onHome} style={{ marginTop: '20px', color: '#fff', background: 'none', border: 'none', cursor: 'pointer' }}>HOME</button>
            </div>}
            {screen === "play" && isMobile && (
                <>
                    <button
                        onPointerDown={(e) => { e.preventDefault(); stateRef.current.keys['ArrowLeft'] = true; }}
                        onPointerUp={(e) => { e.preventDefault(); stateRef.current.keys['ArrowLeft'] = false; }}
                        onPointerOut={(e) => { e.preventDefault(); stateRef.current.keys['ArrowLeft'] = false; }}
                        style={{ position: 'absolute', bottom: 40, left: 40, width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)', border: '2px solid white', fontSize: '40px', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', userSelect: 'none', touchAction: 'none', zIndex: 100 }}
                    >◀</button>
                    <button
                        onPointerDown={(e) => { e.preventDefault(); stateRef.current.keys['ArrowRight'] = true; }}
                        onPointerUp={(e) => { e.preventDefault(); stateRef.current.keys['ArrowRight'] = false; }}
                        onPointerOut={(e) => { e.preventDefault(); stateRef.current.keys['ArrowRight'] = false; }}
                        style={{ position: 'absolute', bottom: 40, right: 40, width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)', border: '2px solid white', fontSize: '40px', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', userSelect: 'none', touchAction: 'none', zIndex: 100 }}
                    >▶</button>
                </>
            )}
        </div>
    );
}
