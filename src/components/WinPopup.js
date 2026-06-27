import React from "react";
import { translations } from "./translations";

const Confetti = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'hidden' }}>
            {[...Array(30)].map((_, i) => (
                <div key={i} style={{
                    position: 'absolute', top: '-20px', left: `${Math.random() * 100}%`, width: `${5 + Math.random() * 10}px`,
                    height: `${5 + Math.random() * 10}px`, background: ['gold', '#FFD700', '#FFBD33', '#FF5733'][i % 4],
                    borderRadius: i % 2 === 0 ? '50%' : '2px', animation: `confettiFall 5s linear infinite ${Math.random() * 5}s`, opacity: 0.8
                }}></div>
            ))}
            <style>{`
                @keyframes confettiFall {
                    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                    100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
                }
            `}</style>
        </div>
    );
};

export default function WinPopup({ score, distance, coins, onRestart, onMapSelect, onHome, lang, mapType = 'highway' }) {
    const t = translations[lang];

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(20px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5000
        }}>
            <Confetti />
            <div style={{
                position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center',
                padding: '35px 25px', width: 'min(85%, 380px)', background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(40px)', border: '1px solid rgba(255, 215, 0, 0.3)', borderRadius: '40px',
                boxShadow: '0 40px 100px rgba(0,0,0,0.5)', animation: 'victorySlide 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}>
                <div style={{ fontSize: '80px', marginBottom: '5px', filter: 'drop-shadow(0 0 30px gold)' }}>🏆</div>
                <h1 style={{ fontSize: '48px', fontWeight: '900', color: 'gold', margin: '0', textAlign: 'center', textTransform: 'uppercase', textShadow: '3px 3px 0px #000' }}>{t.champion}</h1>
                <p style={{ fontSize: '14px', color: '#FFF', letterSpacing: '5px', margin: '8px 0 25px 0', fontWeight: 'bold', opacity: 0.7 }}>WORLD CHAMPION</p>
                <div style={{ width: '100%', background: 'rgba(255,255,255,0.03)', borderRadius: '24px', padding: '25px 20px', marginBottom: '35px', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', fontWeight: '900', letterSpacing: '2px' }}>TOTAL SCORE</span>
                        <span style={{ color: 'gold', fontSize: '22px', fontWeight: '950' }}>{score}</span>
                    </div>
                </div>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <button onClick={onRestart} style={{ width: '100%', padding: '22px', background: 'linear-gradient(to bottom, gold, #DAA520)', border: 'none', color: '#000', fontSize: '24px', fontWeight: '900', borderRadius: '16px', boxShadow: '0 8px 0 #B8860B' }}>{t.playAgain}</button>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button onClick={onMapSelect} style={{ flex: 1, padding: '15px', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#FFF', borderRadius: '12px', fontWeight: 'bold' }}>MAPS</button>
                        <button onClick={onHome} style={{ flex: 1, padding: '15px', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#FFF', borderRadius: '12px', fontWeight: 'bold' }}>HOME</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
