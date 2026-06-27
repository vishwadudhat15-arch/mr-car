import React from "react";
import { translations } from "./translations";

const popupThemes = {
    highway: { primary: '#00E5FF', secondary: '#00B8D4', icon: '💥' },
    city: { primary: '#3742FA', secondary: '#5352ED', icon: '🏙️' },
    desert: { primary: '#FFA502', secondary: '#FF7F50', icon: '🏜️' },
    snow: { primary: '#2F3542', secondary: '#57606F', icon: '❄️' },
    night: { primary: '#2F3542', secondary: '#1E2229', icon: '🌙' },
    jungle: { primary: '#2ED573', secondary: '#7BED9F', icon: '🌴' },
    beach: { primary: '#1E90FF', secondary: '#70A1FF', icon: '🌊' },
    mountain: { primary: '#57606F', secondary: '#2F3542', icon: '⛰️' }
};

export default function CongratulationsPopup({ level, coins, onStart, onMapSelect, onHome, lang, mapType = 'highway' }) {
    const t = translations[lang];
    const th = popupThemes[mapType] || popupThemes.highway;

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.7)',
            backdropFilter: 'blur(15px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 4000
        }}>
            <div style={{
                position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center',
                padding: '40px 30px', width: 'min(90%, 420px)', background: 'rgba(255,255,255,0.03)',
                borderRadius: '32px', borderTop: `4px solid ${th.primary}`, boxShadow: '0 30px 60px rgba(0,0,0,0.3)', animation: 'popIn 0.5s'
            }}>
                <div style={{ fontSize: '80px', marginBottom: '15px' }}>🏅</div>
                <h1 style={{ fontSize: '38px', color: '#FFF', margin: '0 0 5px 0', textAlign: 'center', textTransform: 'uppercase' }}>{t.congratulations}</h1>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', width: '100%', marginBottom: '40px' }}>
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '15px', borderBottom: `2px solid ${th.primary}` }}>
                        <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)' }}>MILESTONE</div>
                        <div style={{ fontSize: '24px', color: '#FFF' }}>{level * 100}km</div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '15px', borderBottom: `2px solid ${th.secondary}` }}>
                        <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)' }}>REWARD</div>
                        <div style={{ fontSize: '24px', color: th.primary }}>🪙 {coins}</div>
                    </div>
                </div>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <button onClick={onStart} style={{ width: '100%', padding: '18px', background: `linear-gradient(to bottom, ${th.primary}, ${th.primary}dd)`, border: 'none', color: '#000', fontSize: '20px', fontWeight: '900', borderRadius: '12px', cursor: 'pointer' }}>{level >= 5 ? t.playAgain : t.start}</button>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button onClick={onMapSelect} style={{ flex: 1, padding: '14px', background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(255,255,255,0.1)', color: '#FFF', borderRadius: '12px' }}>{t.mapsButton}</button>
                        <button onClick={onHome} style={{ flex: 1, padding: '14px', background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.1)', color: '#FFF', borderRadius: '12px' }}>{t.home}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
