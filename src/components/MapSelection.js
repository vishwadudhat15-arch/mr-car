import React, { useState } from "react";
import { translations } from "./translations";
import RoadPreview from "./RoadPreview";
import SettingsPanel from "./SettingsPanel";
import bgImage from '../images.jpeg';

// MAP SELECTION SCREEN - ENHANCED
export default function MapSelection({ onSelectMap, coins, settings, onSettingsChange, lang }) {
    const t = translations[lang];
    const [showSettings, setShowSettings] = useState(false);
    const [hoveredMapId, setHoveredMapId] = useState(null);

    const maps = [
        { id: 'highway', icon: '🛣️', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
        { id: 'city', icon: '🌃', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
        { id: 'desert', icon: '🏜️', gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' },
        { id: 'snow', icon: '❄️', gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)' },
        { id: 'night', icon: '🌙', gradient: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)' },
        { id: 'jungle', icon: '🌴', gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)' },
        { id: 'beach', icon: '🏖️', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
        { id: 'mountain', icon: '⛰️', gradient: 'linear-gradient(135deg, #8e9eab 0%, #eef2f3 100%)' },
    ];

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            background: '#050510',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            perspective: '1000px',
        }}>
            {/* Background */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.5)',
                }}></div>
            </div>

            <div style={{ position: 'relative', zIndex: 10, width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                {showSettings && (
                    <SettingsPanel
                        onClose={() => setShowSettings(false)}
                        settings={settings}
                        onSettingsChange={onSettingsChange}
                        lang={lang}
                    />
                )}

                {/* Coins Display - Top Right */}
                <div style={{
                    position: 'fixed',
                    top: 'clamp(8px, 1.5vh, 16px)',
                    right: 'clamp(8px, 2vw, 16px)',
                    zIndex: 100,
                }}>
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        padding: 'clamp(6px, 1.2vh, 12px) clamp(12px, 2vw, 20px)',
                        borderRadius: '20px',
                        border: '2px solid rgba(255, 255, 255, 0.5)',
                        fontSize: 'clamp(12px, 2vw, 18px)',
                        fontWeight: 'bold',
                        color: '#FFD700',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'clamp(4px, 1vw, 8px)',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                        backdropFilter: 'blur(5px)',
                        animation: 'coinGlow 2s ease-in-out infinite',
                    }}>
                        <span style={{ fontSize: 'clamp(12px, 2vw, 18px)', animation: 'coinSpin 3s linear infinite' }}>🪙</span>
                        <span>{coins}</span>
                    </div>
                </div>

                {/* Settings Button - Top Left */}
                <div style={{
                    position: 'fixed',
                    top: 'clamp(8px, 1.5vh, 16px)',
                    left: 'clamp(8px, 2vw, 16px)',
                    zIndex: 100,
                }}>
                    <button
                        onClick={() => setShowSettings(true)}
                        style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '2px solid rgba(255, 255, 255, 0.5)',
                            padding: 'clamp(6px, 1.2vh, 12px) clamp(12px, 2vw, 20px)',
                            borderRadius: '20px',
                            cursor: 'pointer',
                            fontSize: 'clamp(16px, 3vw, 24px)',
                            color: 'white',
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'clamp(4px, 1vw, 8px)',
                            backdropFilter: 'blur(5px)',
                            transition: 'all 0.2s',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                        }}
                    >
                        ⚙️
                    </button>
                </div>

                <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    padding: 'clamp(15px, 3vh, 40px) 0',
                    scrollBehavior: 'smooth',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }} className="scrollable-content">
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 'clamp(10px, 2vw, 30px)',
                        marginBottom: 'clamp(20px, 3vh, 40px)',
                        marginTop: 0,
                        flexWrap: 'wrap',
                        padding: '0 clamp(10px, 2vw, 20px)',
                    }}>
                        <span style={{ fontSize: 'clamp(30px, 6vw, 60px)', animation: 'flagWave 2s ease-in-out infinite', opacity: 0.8 }}>🏁</span>
                        <h1 style={{
                            fontSize: 'clamp(24px, 5vw, 60px)',
                            marginBottom: 0,
                            marginTop: 0,
                            textAlign: 'center',
                            color: '#fff',
                            textShadow: '0 0 10px rgba(255,255,255,0.7), 0 0 20px rgba(255,255,255,0.5)',
                            fontWeight: '900',
                            fontStyle: 'italic',
                            position: 'relative',
                            zIndex: 1,
                            letterSpacing: 'clamp(2px, 0.5vw, 6px)',
                            animation: 'titlePulse 2s ease-in-out infinite',
                            textTransform: 'uppercase',
                        }}>
                            {t.selectMap}
                        </h1>
                        <span style={{ fontSize: 'clamp(30px, 6vw, 60px)', animation: 'flagWave 2s ease-in-out infinite 0.5s', opacity: 0.8, transform: 'scaleX(-1)' }}>🏁</span>
                    </div>

                    <div className="map-grid-container" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        width: '100%',
                        padding: '0',
                        position: 'relative',
                        zIndex: 1,
                    }}>
                        <div className="map-grid" style={{
                            display: 'grid',
                            gap: 'clamp(15px, 3vh, 30px)',
                            width: '100%',
                            paddingBottom: 'clamp(30px, 6vh, 80px)',
                            boxSizing: 'border-box',
                        }}>
                            {maps.map((map) => (
                                <div
                                    key={map.id}
                                    onClick={() => onSelectMap(map.id)}
                                    className="map-card"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        backdropFilter: 'blur(12px)',
                                        borderRadius: '20px',
                                        padding: '10px',
                                        minHeight: 'clamp(180px, 25vh, 250px)',
                                        cursor: 'pointer',
                                        border: '2px solid rgba(255, 255, 255, 0.5)',
                                        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                                        position: 'relative',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)',
                                    }}
                                    onMouseEnter={(e) => {
                                        setHoveredMapId(map.id);
                                        e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
                                        e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.6)';
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                                    }}
                                    onMouseLeave={(e) => {
                                        setHoveredMapId(null);
                                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                        e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.4)';
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                    }}
                                >
                                    {/* Road Preview Background - Full Container */}
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        opacity: hoveredMapId === map.id ? 1 : 0,
                                        transition: 'opacity 0.4s ease-in-out',
                                        zIndex: 0,
                                        overflow: 'hidden',
                                        borderRadius: '18px',
                                    }}>
                                        <RoadPreview mapId={map.id} />
                                    </div>

                                    <div style={{
                                        position: 'relative',
                                        zIndex: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        width: '100%',
                                    }}>
                                        <div style={{
                                            fontSize: 'clamp(50px, 10vw, 90px)',
                                            marginBottom: 'clamp(8px, 1.5vh, 18px)',
                                            opacity: hoveredMapId === map.id ? 0 : 1,
                                            transform: hoveredMapId === map.id ? 'translateY(-20px) scale(0.5)' : 'translateY(0) scale(1)',
                                            transition: 'all 0.4s ease-in-out'
                                        }}>
                                            {map.icon}
                                        </div>
                                        <h2 style={{
                                            fontSize: 'clamp(18px, 3.5vw, 36px)',
                                            color: 'white',
                                            margin: 'clamp(6px, 1vh, 12px) 0',
                                            fontWeight: 'bold',
                                            letterSpacing: '1px',
                                            textShadow: hoveredMapId === map.id ? '0 2px 10px rgba(0,0,0,0.8)' : '0 2px 4px rgba(0,0,0,0.3)',
                                            transition: 'all 0.3s',
                                        }}>
                                            {t.mapsList[map.id].name}
                                        </h2>
                                        <p style={{
                                            color: hoveredMapId === map.id ? '#fff' : 'rgba(255,255,255,0.8)',
                                            fontSize: 'clamp(12px, 2.5vw, 18px)',
                                            margin: 'clamp(6px, 1vh, 12px) 0',
                                            textShadow: hoveredMapId === map.id ? '0 1px 4px rgba(0,0,0,0.8)' : 'none',
                                            fontWeight: hoveredMapId === map.id ? '600' : 'normal',
                                            transition: 'all 0.3s',
                                        }}>
                                            {t.mapsList[map.id].desc}
                                        </p>
                                        <div style={{
                                            marginTop: 'clamp(10px, 2vh, 24px)',
                                            padding: 'clamp(8px, 1.5vh, 14px) clamp(15px, 3vw, 30px)',
                                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                            borderRadius: '50px',
                                            color: 'white',
                                            fontWeight: 'bold',
                                            fontSize: 'clamp(12px, 2vw, 18px)',
                                            boxShadow: hoveredMapId === map.id ? '0 6px 20px rgba(0,0,0,0.4)' : '0 4px 15px rgba(0,0,0,0.2)',
                                            transform: hoveredMapId === map.id ? 'scale(1.1)' : 'scale(1)',
                                            transition: 'all 0.3s',
                                        }}>
                                            {t.select} →
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .scrollable-content::-webkit-scrollbar { display: none; }
        @keyframes coinSpin {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        @keyframes coinGlow {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.05); filter: brightness(1.2); }
        }
        @keyframes titlePulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.03); opacity: 0.9; }
        }
        @keyframes flagWave {
          0%, 100% { transform: translateY(0) rotateZ(-5deg); }
          50% { transform: translateY(-5px) rotateZ(5deg); }
        }

        @media (max-width: 480px) and (orientation: portrait) {
          .map-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 481px) and (max-width: 768px) {
          .map-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 769px) and (max-width: 1023px) {
          .map-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .map-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
        </div>
    );
}
