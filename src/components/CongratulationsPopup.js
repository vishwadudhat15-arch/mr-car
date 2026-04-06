import React from "react";
import { translations } from "./translations";

const popupThemes = {
    highway: { primary: '#00E5FF', secondary: '#00B8D4', glow: 'rgba(0, 229, 255, 0.4)', icon: '💥', accent: '#FFFFFF' },
    city: { primary: '#3742FA', secondary: '#5352ED', glow: 'rgba(55, 66, 250, 0.4)', icon: '🏙️', accent: '#FFFFFF' },
    desert: { primary: '#FFA502', secondary: '#FF7F50', glow: 'rgba(255, 165, 2, 0.4)', icon: '🏜️', accent: '#FFFFFF' },
    snow: { primary: '#2F3542', secondary: '#57606F', glow: 'rgba(47, 53, 66, 0.4)', icon: '❄️', accent: '#FFFFFF' },
    night: { primary: '#2F3542', secondary: '#1E2229', glow: 'rgba(47, 53, 66, 0.4)', icon: '🌙', accent: '#FFFFFF' },
    jungle: { primary: '#2ED573', secondary: '#7BED9F', glow: 'rgba(46, 213, 115, 0.4)', icon: '🌴', accent: '#FFFFFF' },
    beach: { primary: '#1E90FF', secondary: '#70A1FF', glow: 'rgba(30, 144, 255, 0.4)', icon: '🌊', accent: '#FFFFFF' },
    mountain: { primary: '#57606F', secondary: '#2F3542', glow: 'rgba(87, 96, 111, 0.4)', icon: '⛰️', accent: '#FFFFFF' }
};

export default function CongratulationsPopup({ level, coins, onStart, onMapSelect, onHome, lang, mapType = 'highway' }) {
    const t = translations[lang];
    const kmCompleted = level * 100;
    const isLastLevel = level >= 5;
    const th = popupThemes[mapType] || popupThemes.highway;

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(15px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 4000,
        }}>
            <div style={{
                position: 'absolute', width: '150vh', height: '150vh',
                background: `conic-gradient(from 0deg, transparent 0% 10%, ${th.primary}44 10% 20%, transparent 20% 30%, ${th.primary}44 30% 40%, transparent 40% 50%, ${th.primary}44 50% 60%, transparent 60% 70%, ${th.primary}44 70% 80%, transparent 80% 90%, ${th.primary}44 90% 100%)`,
                animation: 'spinRays 20s linear infinite', zIndex: -1, opacity: 0.6
            }}></div>

            <div style={{
                position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center',
                padding: 'clamp(15px, 3vh, 40px) clamp(15px, 3vw, 30px)', width: 'min(90%, 420px)',
                background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(30px)',
                border: '1px solid rgba(255, 255, 255, 0.2)', borderTop: `4px solid ${th.primary}`,
                borderRadius: '32px', boxShadow: `0 30px 60px rgba(0,0,0,0.3), 0 0 40px ${th.primary}22`,
                animation: 'popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}>
                <div style={{
                    fontSize: 'clamp(40px, 8vh, 80px)', marginBottom: 'clamp(5px, 1.5vh, 15px)',
                    filter: `drop-shadow(0 0 20px ${th.primary})`, animation: 'bounceTrophy 2s ease-in-out infinite'
                }}>🏅</div>

                <h1 style={{
                    fontSize: 'clamp(18px, min(6vw, 4.5vh), 38px)', fontWeight: '900', color: '#FFF',
                    margin: '0 0 clamp(5px, 1vh, 5px) 0', textAlign: 'center', textTransform: 'uppercase',
                    letterSpacing: '2px', textShadow: `0 0 10px ${th.primary}aa`
                }}>{t.congratulations}</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(8px, 1.5vh, 20px)', width: '100%', marginBottom: 'clamp(15px, 3vh, 40px)' }}>
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: 'clamp(8px, 1.5vh, 15px)', borderRadius: '15px', borderBottom: `2px solid ${th.primary}` }}>
                        <div style={{ fontSize: 'clamp(8px, 1.5vh, 10px)', color: 'rgba(255,255,255,0.5)', marginBottom: '5px' }}>MILESTONE</div>
                        <div style={{ fontSize: 'clamp(16px, 3vh, 24px)', color: '#FFF', fontWeight: 'bold' }}>{kmCompleted}km</div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: 'clamp(8px, 1.5vh, 15px)', borderRadius: '15px', borderBottom: `2px solid ${th.secondary}` }}>
                        <div style={{ fontSize: 'clamp(8px, 1.5vh, 10px)', color: 'rgba(255,255,255,0.5)', marginBottom: '5px' }}>REWARD</div>
                        <div style={{ fontSize: 'clamp(16px, 3vh, 24px)', color: th.primary, fontWeight: 'bold' }}>🪙 {coins}</div>
                    </div>
                </div>

                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 'clamp(8px, 1.5vh, 12px)' }}>
                    <button onClick={onStart} style={{
                        width: '100%', padding: 'clamp(12px, 2.5vh, 18px)',
                        background: `linear-gradient(to bottom, ${th.primary}, ${th.primary}dd)`,
                        border: 'none', color: '#000', fontSize: 'clamp(14px, 2.5vh, 20px)',
                        fontWeight: '900', borderRadius: '12px', cursor: 'pointer',
                        boxShadow: `0 6px 0 ${th.primary}66`, transition: 'all 0.1s active', textTransform: 'uppercase'
                    }}
                    onMouseDown={e => e.currentTarget.style.transform = 'translateY(3px)'}
                    onMouseUp={e => e.currentTarget.style.transform = 'translateY(0)'}>
                        {isLastLevel ? t.playAgain : t.start}
                    </button>

                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button onClick={onMapSelect} style={{ flex: 1, padding: 'clamp(10px, 2vh, 14px)', background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(255,255,255,0.1)', color: '#FFF', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold' }}>{t.mapsButton}</button>
                        <button onClick={onHome} style={{ flex: 1, padding: 'clamp(10px, 2vh, 14px)', background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.1)', color: '#FFF', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold' }}>{t.home}</button>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes spinRays { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes popIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
                @keyframes bounceTrophy { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
            `}</style>
        </div>
    );
}
