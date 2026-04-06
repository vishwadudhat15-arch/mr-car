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
    const [isMobile] = useState(() => 'ontouchstart' in window || navigator.maxTouchPoints > 0);

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
            const carW = isMobile ? 40 : 50;
            stateRef.current.carX = (newW / 2) - (carW / 2);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isMobile]);

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

        const handleKeyDown = (e) => { s.keys[e.key] = true; };
        const handleKeyUp = (e) => { s.keys[e.key] = false; };
        const handleTouchStart = (e) => {
            const x = e.touches[0].clientX;
            stateRef.current.keys['ArrowLeft'] = x < W / 2;
            stateRef.current.keys['ArrowRight'] = x >= W / 2;
        };
        const handleTouchEnd = () => { stateRef.current.keys['ArrowLeft'] = false; stateRef.current.keys['ArrowRight'] = false; };

        window.addEventListener("keydown", handleKeyDown); window.addEventListener("keyup", handleKeyUp);
        window.addEventListener("touchstart", handleTouchStart); window.addEventListener("touchend", handleTouchEnd);

        loop();
        return () => {
            window.removeEventListener("keydown", handleKeyDown); window.removeEventListener("keyup", handleKeyUp);
            window.removeEventListener("touchstart", handleTouchStart); window.removeEventListener("touchend", handleTouchEnd);
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
            <button onClick={() => setIsPaused(true)} style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', fontSize: '30px', cursor: 'pointer' }}>⏸️</button>
            {showCongrats && <CongratulationsPopup level={currentLevel} coins={earnedCoins} onStart={() => { setShowCongrats(false); setScreen("countdown"); setCount(3); }} onMapSelect={onMapSelect} onHome={onHome} lang={lang} mapType={mapType} />}
            {showWinPopup && <WinPopup score={score} distance={distance} coins={earnedCoins} onRestart={restart} onMapSelect={onMapSelect} onHome={onHome} lang={lang} mapType={mapType} />}
            {screen === "countdown" && <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '100px', fontWeight: '900' }}>{count || 'GO!'}</div>}
            {screen === "gameover" && <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(255,0,0,0.5)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h1 style={{ fontSize: '60px' }}>CRASH!</h1>
                <button onClick={restart} style={{ padding: '20px 40px', fontSize: '24px', borderRadius: '50px', border: 'none', background: '#fff', cursor: 'pointer' }}>RESTART</button>
                <button onClick={onHome} style={{ marginTop: '20px', color: '#fff', background: 'none', border: 'none', cursor: 'pointer' }}>HOME</button>
            </div>}
        </div>
    );
}
