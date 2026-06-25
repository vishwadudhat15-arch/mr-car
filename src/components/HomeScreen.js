import React, { useState, useEffect } from "react";
import { translations } from "./translations";

export default function HomeScreen({ onPlay, lang, mapId = 'highway' }) {
    const t = translations[lang];

    const homeThemes = {
        highway: {
            bg: 'linear-gradient(180deg, #87CEEB 0%, #E0F6FF 50%, #666 100%)',
            buildings: [
                'linear-gradient(180deg, #FF6B6B 0%, #C92A2A 100%)',
                'linear-gradient(180deg, #4ECDC4 0%, #1A535C 100%)',
                'linear-gradient(180deg, #FFE66D 0%, #FF6B35 100%)',
                'linear-gradient(180deg, #A8DADC 0%, #457B9D 100%)',
                'linear-gradient(180deg, #F1FAEE 0%, #1D3557 100%)'
            ]
        }
    };

    const theme = homeThemes['highway'];
    const [screenSize, setScreenSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const handleResize = () => setScreenSize({ width: window.innerWidth, height: window.innerHeight });
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="home-container" style={{
            height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'space-between', background: theme.bg,
            position: 'fixed', top: 0, left: 0, overflow: 'hidden', margin: 0, padding: 0
        }}>
            <div className="city-background" style={{
                position: 'absolute', width: '100%', height: '50%', top: '20%', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', zIndex: 1
            }}>
                <div className="building" style={{ width: '120px', height: '250px', background: theme.buildings[0], borderRadius: '10px 10px 0 0', boxShadow: '0 5px 20px rgba(0,0,0,0.3)' }}></div>
                <div className="building" style={{ width: '100px', height: '180px', background: theme.buildings[1], borderRadius: '10px 10px 0 0', boxShadow: '0 5px 20px rgba(0,0,0,0.3)' }}></div>
                <div className="building" style={{ width: '140px', height: '300px', background: theme.buildings[2], borderRadius: '10px 10px 0 0', boxShadow: '0 5px 20px rgba(0,0,0,0.3)' }}></div>
                <div className="building" style={{ width: '110px', height: '220px', background: theme.buildings[3], borderRadius: '10px 10px 0 0', boxShadow: '0 5px 20px rgba(0,0,0,0.3)' }}></div>
                <div className="building" style={{ width: '130px', height: '270px', background: theme.buildings[4], borderRadius: '10px 10px 0 0', boxShadow: '0 5px 20px rgba(0,0,0,0.3)' }}></div>
            </div>

            <div className="road" style={{ position: 'absolute', width: '100%', height: '30%', bottom: 0, background: 'linear-gradient(180deg, #555 0%, #333 100%)', zIndex: 2 }}>
                <div style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px' }}>
                    <div style={{ width: '10px', height: '100%', background: 'repeating-linear-gradient(to bottom, #FFD700 0px, #FFD700 40px, transparent 40px, transparent 80px)' }}></div>
                    <div style={{ width: '10px', height: '100%', background: 'repeating-linear-gradient(to bottom, #FFD700 0px, #FFD700 40px, transparent 40px, transparent 80px)' }}></div>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 10, flex: 1, maxHeight: 'calc(100vh - 140px)', overflow: 'hidden' }}>
                <div style={{ textAlign: 'center', animation: 'fadeIn 1s', marginBottom: '0px', flex: 'shrink', minHeight: 'fit-content' }}>
                    <h1 className="title-3d" style={{
                        fontSize: 'clamp(32px, 10vw, 90px)', margin: '0', color: '#FFD700', fontWeight: '900', letterSpacing: 'clamp(1px, 1vw, 8px)', WebkitTextStroke: '3px #000',
                        textShadow: '1px 1px 0 #b8860b, 2px 2px 0 #b8860b, 3px 3px 0 #9a7200, 4px 4px 0 #9a7200, 10px 12px 16px rgba(0,0,0,0.7)',
                        animation: 'titleGlow 2s ease-in-out infinite'
                    }}>{t.title}</h1>
                    <p style={{ fontSize: 'clamp(12px, 3vw, 28px)', color: '#fff', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.8)', letterSpacing: 'clamp(1px, 0.5vw, 4px)', margin: '5px 0 15px 0' }}>{t.subtitle}</p>
                </div>

                <div className="car-container" style={{ animation: 'carFloat 2s ease-in-out infinite', flex: 'shrink', minHeight: 'fit-content', maxWidth: '90vw', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
                    <svg width="clamp(120px, 40vw, 400px)" height="clamp(60px, 20vw, 200px)" viewBox="0 0 300 150" style={{ transform: 'scaleX(-1)', width: '100%', height: 'auto' }}>
                        <rect x="40" y="70" width="220" height="60" fill="#FF8C00" rx="12" />
                        <path d="M 80 70 L 120 32 L 200 32 L 230 70 Z" fill="#FF8C00" />
                        <path d="M 95 68 L 122 42 L 196 42 L 217 68 Z" fill="#87CEEB" opacity="0.8" stroke="#555" strokeWidth="2" />
                        <circle cx="90" cy="120" r="24" fill="#1a1a1a" />
                        <circle cx="90" cy="120" r="14" fill="#d0d0d0" stroke="#888" strokeWidth="3" />
                        <circle cx="210" cy="120" r="24" fill="#1a1a1a" />
                        <circle cx="210" cy="120" r="14" fill="#d0d0d0" stroke="#888" strokeWidth="3" />
                        <rect x="38" y="90" width="14" height="16" fill="#FFE000" rx="3" stroke="#FFA500" strokeWidth="1.5" />
                        <rect x="250" y="90" width="12" height="16" fill="#cc0000" rx="3" stroke="#800000" strokeWidth="1.5" />
                    </svg>
                </div>
            </div>

            <div className="play-button-container" style={{ marginBottom: 'clamp(20px, 8vh, 80px)', zIndex: 10, position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '40px' }}>
                <div className="free-badge" style={{
                    position: 'absolute', top: screenSize.width < 768 ? '30px' : '15px', left: '50%', transform: 'translateX(-50%) rotate(-15deg)',
                    background: '#000', color: '#FFD700', padding: 'clamp(4px, 1.5vw, 8px) clamp(10px, 3vw, 20px)', borderRadius: '50%', border: 'clamp(2px, 0.5vw, 3px) solid #FFD700',
                    fontWeight: 'bold', fontSize: 'clamp(11px, 2.5vw, 20px)', boxShadow: '0 5px 15px rgba(0,0,0,0.5)', zIndex: 11, animation: 'badgeRotate 3s ease-in-out infinite'
                }}>FREE</div>

                <button onClick={onPlay} style={{
                    fontSize: 'clamp(18px, 4vw, 39px)', borderRadius: '60px', border: '4px solid #000', background: 'linear-gradient(180deg, #FFD700 0%, #FFA500 100%)',
                    color: '#000', cursor: 'pointer', fontWeight: '900', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', transition: 'all 0.2s', padding: 'clamp(12px, 2.5vw, 15px) clamp(25px, 5vw, 40px)', whiteSpace: 'nowrap'
                }}>
                    {t.playNow}
                    <span style={{ fontSize: 'clamp(22px, 5vw, 50px)', animation: 'pointBounce 1s infinite', marginLeft: '-5px', marginTop: '10px' }}>👆</span>
                </button>
            </div>

            <style>{`
                @keyframes carFloat { 0%, 100% { transform: scaleX(-1) translateY(0); } 50% { transform: scaleX(-1) translateY(-15px); } }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes pointBounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
                @keyframes titleGlow { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.02); filter: brightness(1.1); } }
                @keyframes badgeRotate { 0%, 100% { transform: translateX(-50%) rotate(-15deg); } 50% { transform: translateX(-50%) rotate(-5deg); } }
                @media (max-width: 480px) { .building { display: none; } .building:first-child, .building:nth-child(3) { display: block; width: 60px; height: 120px; } }
            `}</style>
        </div>
    );
}
