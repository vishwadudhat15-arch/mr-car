import React, { useState } from "react";
import { translations } from "./translations";
import RoadPreview from "./RoadPreview";
import SettingsPanel from "./SettingsPanel";
import bgImage from '../images.jpeg';

export default function MapSelection({ onSelectMap, coins, settings, onSettingsChange, lang }) {
    const t = translations[lang];
    const [showSettings, setShowSettings] = useState(false);
    const [hoveredMapId, setHoveredMapId] = useState(null);

    const maps = [
        { id: 'highway', icon: '🛣️' }, { id: 'city', icon: '🌃' }, { id: 'desert', icon: '🏜️' },
        { id: 'snow', icon: '❄️' }, { id: 'night', icon: '🌙' }, { id: 'jungle', icon: '🌴' },
        { id: 'beach', icon: '🏖️' }, { id: 'mountain', icon: '⛰️' },
    ];

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', background: '#050510',
            overflow: 'hidden', display: 'flex', flexDirection: 'column', perspective: '1000px'
        }}>
            <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0,
                backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.5
            }}></div>

            <div style={{ position: 'relative', zIndex: 10, width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                {showSettings && <SettingsPanel onClose={() => setShowSettings(false)} settings={settings} onSettingsChange={onSettingsChange} lang={lang} />}

                <div style={{ position: 'fixed', top: '16px', right: '16px', zIndex: 100 }}>
                    <div className="coin-display" style={{ background: 'rgba(255,255,255,0.1)', padding: '12px 20px', borderRadius: '20px', border: '2px solid rgba(255,255,255,0.5)', color: '#FFD700', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span>🪙</span><span>{coins}</span>
                    </div>
                </div>

                <div style={{ position: 'fixed', top: '16px', left: '16px', zIndex: 100 }}>
                    <button onClick={() => setShowSettings(true)} style={{ background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.5)', padding: '12px 20px', borderRadius: '20px', cursor: 'pointer', fontSize: '24px', color: 'white', fontWeight: 'bold' }}>⚙️</button>
                </div>

                <div className="scrollable-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto', padding: '40px 0' }}>
                    <h1 style={{ fontSize: 'clamp(18px, 4vw, 40px)', textAlign: 'center', color: '#fff', fontWeight: '900', textTransform: 'uppercase', marginBottom: '40px' }}>{t.selectMap}</h1>

                    <div className="map-grid" style={{
                        display: 'grid', gap: '30px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        maxWidth: '1200px', margin: '0 auto', padding: '0 40px 80px'
                    }}>
                        {maps.map(map => (
                            <div key={map.id} onClick={() => onSelectMap(map.id)} style={{
                                background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', borderRadius: '20px', padding: '10px', minHeight: '250px',
                                cursor: 'pointer', border: '2px solid rgba(255,255,255,0.5)', transition: 'all 0.3s', position: 'relative', overflow: 'hidden'
                            }}
                            onMouseEnter={() => setHoveredMapId(map.id)} onMouseLeave={() => setHoveredMapId(null)}>
                                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: hoveredMapId === map.id ? 1 : 0, transition: 'opacity 0.4s' }}>
                                    <RoadPreview mapId={map.id} />
                                </div>
                                <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'center' }}>
                                    <div style={{ fontSize: '80px', transition: '0.4s', transform: hoveredMapId === map.id ? 'translateY(-20px) scale(0.5)' : 'none', opacity: hoveredMapId === map.id ? 0 : 1 }}>{map.icon}</div>
                                    <h2 style={{ color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>{t.mapsList[map.id].name}</h2>
                                    <div style={{ marginTop: '20px', padding: '10px 25px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '50px', color: 'white', fontWeight: 'bold' }}>{t.select} →</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style>{`
                .scrollable-content::-webkit-scrollbar { display: none; }
                @keyframes coinGlow { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
                .coin-display { animation: coinGlow 2s infinite; }
            `}</style>
        </div>
    );
}
