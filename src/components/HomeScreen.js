import React, { useState, useEffect } from "react";
import { translations } from "./translations";

// HOME SCREEN WITH ENHANCED VISUALS
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
        },
        city: {
            bg: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
            buildings: ['#4b0082', '#8a2be2', '#9932cc', '#9400d3', '#800080']
        },
        desert: {
            bg: 'linear-gradient(180deg, #fa709a 0%, #fee140 50%, #8B7355 100%)',
            buildings: ['#d2b48c', '#cd853f', '#deb887', '#bc8f8f', '#8b4513']
        },
        snow: {
            bg: 'linear-gradient(180deg, #a8edea 0%, #fed6e3 50%, #404040 100%)',
            buildings: ['#e0f7fa', '#b2ebf2', '#80deea', '#4dd0e1', '#26c6da']
        },
        night: {
            bg: 'linear-gradient(180deg, #050510 0%, #0a0a1a 50%, #1a1a1a 100%)',
            buildings: ['#1c1c1c', '#2c2c2c', '#3c3c3c', '#4c4c4c', '#5c5c5c']
        },
        jungle: {
            bg: 'linear-gradient(180deg, #11998e 0%, #38ef7d 50%, #654321 100%)',
            buildings: ['#2d5a27', '#1e392a', '#4a7c44', '#0b3d1b', '#355e3b']
        },
        beach: {
            bg: 'linear-gradient(180deg, #4facfe 0%, #00f2fe 50%, #F4A460 100%)',
            buildings: ['#fff8dc', '#faebd7', '#ffdead', '#f5deb3', '#ffe4b5']
        },
        mountain: {
            bg: 'linear-gradient(180deg, #8e9eab 0%, #eef2f3 50%, #696969 100%)',
            buildings: ['#546e7a', '#455a64', '#37474f', '#263238', '#212121']
        }
    };

    // Force Home screen to always use the default 'highway' colors, regardless of selected map
    const theme = homeThemes['highway'];

    const [screenSize, setScreenSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({ width: window.innerWidth, height: window.innerHeight });
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="home-container" style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: theme.bg,
            position: 'fixed',
            top: 0,
            left: 0,
            overflow: 'hidden',
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
        }}>


            <div className="city-background" style={{
                position: 'absolute',
                width: '100%',
                height: '50%',
                top: '20%',
                bottom: 'auto',
                left: 0,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-around',
                zIndex: 1,
            }}>
                <div className="building building-1" style={{ width: '120px', height: '250px', background: theme.buildings[0], borderRadius: '10px 10px 0 0', boxShadow: '0 5px 20px rgba(0,0,0,0.3)' }}></div>
                <div className="building building-2" style={{ width: '100px', height: '180px', background: theme.buildings[1], borderRadius: '10px 10px 0 0', boxShadow: '0 5px 20px rgba(0,0,0,0.3)' }}></div>
                <div className="building building-3" style={{ width: '140px', height: '300px', background: theme.buildings[2], borderRadius: '10px 10px 0 0', boxShadow: '0 5px 20px rgba(0,0,0,0.3)' }}></div>
                <div className="building building-4" style={{ width: '110px', height: '220px', background: theme.buildings[3], borderRadius: '10px 10px 0 0', boxShadow: '0 5px 20px rgba(0,0,0,0.3)' }}></div>
                <div className="building building-5" style={{ width: '130px', height: '270px', background: theme.buildings[4], borderRadius: '10px 10px 0 0', boxShadow: '0 5px 20px rgba(0,0,0,0.3)' }}></div>
            </div>

            <div className="road" style={{
                position: 'absolute',
                width: '100%',
                height: '30%',
                bottom: 0,
                background: 'linear-gradient(180deg, #555 0%, #333 100%)',
                zIndex: 2,
            }}>
                <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '40px',
                }}>
                    <div style={{ width: '10px', height: '100%', background: 'repeating-linear-gradient(to bottom, #FFD700 0px, #FFD700 40px, transparent 40px, transparent 80px)' }}></div>
                    <div style={{ width: '10px', height: '100%', background: 'repeating-linear-gradient(to bottom, #FFD700 0px, #FFD700 40px, transparent 40px, transparent 80px)' }}></div>
                </div>
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                flex: 1,
                maxHeight: 'calc(100vh - 140px)',
                overflow: 'hidden',
            }}>
                <div className="title-section" style={{
                    textAlign: 'center',
                    animation: 'fadeIn 1s',
                    marginBottom: '0px',
                    flex: 'shrink',
                    minHeight: 'fit-content',
                }}>
                    <h1 className="title-3d" style={{
                        fontSize: 'clamp(32px, 10vw, 90px)',
                        margin: '0',
                        color: '#FFD700',
                        fontWeight: '900',
                        letterSpacing: 'clamp(1px, 1vw, 8px)',
                        WebkitTextStroke: '3px #000',
                        textShadow: [
                            '1px 1px 0 #b8860b',
                            '2px 2px 0 #b8860b',
                            '3px 3px 0 #9a7200',
                            '4px 4px 0 #9a7200',
                            '5px 5px 0 #7a5900',
                            '6px 6px 0 #7a5900',
                            '7px 7px 0 #5c4000',
                            '8px 8px 0 #3a2800',
                            '10px 12px 16px rgba(0,0,0,0.7)',
                        ].join(', '),
                        animation: 'titleGlow 2s ease-in-out infinite',
                    }}>
                        {t.title}
                    </h1>
                    <p style={{
                        fontSize: 'clamp(12px, 3vw, 28px)',
                        color: '#fff',
                        fontWeight: 'bold',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                        letterSpacing: 'clamp(1px, 0.5vw, 4px)',
                        margin: '5px 0 15px 0',
                    }}>
                        {t.subtitle}
                    </p>
                </div>

                <div className="car-container" style={{
                    animation: 'carFloat 2s ease-in-out infinite',
                    flex: 'shrink',
                    minHeight: 'fit-content',
                    maxWidth: '90vw',
                    margin: '0 auto',
                    alignSelf: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <svg width="clamp(120px, 40vw, 400px)" height="clamp(60px, 20vw, 200px)" viewBox="0 0 300 150" style={{ transform: 'scaleX(-1)', width: '100%', height: 'auto', shapeRendering: 'geometricPrecision' }} preserveAspectRatio="xMidYMid meet">
                        <rect x="40" y="70" width="220" height="60" fill="#FF8C00" rx="12" stroke="none" />
                        <path d="M 80 70 L 120 32 L 200 32 L 230 70 Z" fill="#FF8C00" stroke="none" />
                        <path d="M 85 70 L 120 36 L 200 36 L 225 70 Z" fill="#FFAA33" opacity="0.5" stroke="none" />
                        <path d="M 95 68 L 122 42 L 196 42 L 217 68 Z" fill="#87CEEB" opacity="0.8" stroke="#555" strokeWidth="2" />

                        <line x1="150" y1="69" x2="150" y2="130" stroke="#D88400" strokeWidth="2" opacity="0.6" />

                        <line x1="150" y1="43" x2="150" y2="67" stroke="#e0dedeff" strokeWidth="2.5" />

                        {/* Alloy Wheels */}
                        <circle cx="90" cy="120" r="24" fill="#1a1a1a" />
                        <circle cx="90" cy="120" r="14" fill="#d0d0d0" stroke="#888" strokeWidth="3" />
                        <line x1="90" y1="108" x2="90" y2="132" stroke="#888" strokeWidth="2" />
                        <line x1="78" y1="120" x2="102" y2="120" stroke="#888" strokeWidth="2" />
                        <line x1="81.5" y1="111.5" x2="98.5" y2="128.5" stroke="#888" strokeWidth="2" />
                        <line x1="81.5" y1="128.5" x2="98.5" y2="111.5" stroke="#888" strokeWidth="2" />
                        <circle cx="90" cy="120" r="5" fill="#444" />

                        <circle cx="210" cy="120" r="24" fill="#1a1a1a" />
                        <circle cx="210" cy="120" r="14" fill="#d0d0d0" stroke="#888" strokeWidth="3" />
                        <line x1="210" y1="108" x2="210" y2="132" stroke="#888" strokeWidth="2" />
                        <line x1="198" y1="120" x2="222" y2="120" stroke="#888" strokeWidth="2" />
                        <line x1="201.5" y1="111.5" x2="218.5" y2="128.5" stroke="#888" strokeWidth="2" />
                        <line x1="201.5" y1="128.5" x2="218.5" y2="111.5" stroke="#888" strokeWidth="2" />
                        <circle cx="210" cy="120" r="5" fill="#444" />

                        <rect x="38" y="90" width="14" height="16" fill="#FFE000" rx="3" stroke="#FFA500" strokeWidth="1.5" />
                        <rect x="250" y="90" width="12" height="16" fill="#cc0000" rx="3" stroke="#800000" strokeWidth="1.5" />
                    </svg>
                </div>
            </div>

            <div className="play-button-container" style={{
                marginBottom: 'clamp(20px, 8vh, 80px)',
                zIndex: 10,
                position: 'relative',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: '20px',
                paddingRight: '20px',
                boxSizing: 'border-box',
                paddingTop: '40px',
            }}>
                <div className="free-badge" style={{
                    position: 'absolute',
                    top: screenSize.width < 768 ? '30px' : '15px',
                    left: '50%',
                    transform: 'translateX(-50%) rotate(-15deg)',
                    background: '#000',
                    color: '#FFD700',
                    padding: 'clamp(4px, 1.5vw, 8px) clamp(10px, 3vw, 20px)',
                    borderRadius: '50%',
                    border: 'clamp(2px, 0.5vw, 3px) solid #FFD700',
                    fontWeight: 'bold',
                    fontSize: 'clamp(11px, 2.5vw, 20px)',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.5)',
                    whiteSpace: 'nowrap',
                    zIndex: 11,
                    animation: 'badgeRotate 3s ease-in-out infinite',
                }}>
                    FREE
                </div>

                <button
                    className="play-button"
                    onClick={onPlay}
                    style={{
                        fontSize: 'clamp(18px, 4vw, 39px)',
                        borderRadius: 'clamp(40px, 8vw, 60px)',
                        border: 'clamp(3px, 0.5vw, 4px) solid #000',
                        background: 'linear-gradient(180deg, #FFD700 0%, #FFA500 100%)',
                        color: '#000',
                        cursor: 'pointer',
                        fontWeight: '900',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.5), inset 0 -5px 10px rgba(0,0,0,0.2)',
                        transition: 'all 0.2s',
                        textShadow: '2px 2px 0px rgba(255,255,255,0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '2px',
                        padding: 'clamp(12px, 2.5vw, 15px) clamp(25px, 5vw, 40px)',
                        whiteSpace: 'nowrap',
                        minWidth: 'fit-content',
                        maxWidth: '90vw',
                    }}

                >
                    {t.playNow}
                    <span style={{
                        fontSize: 'clamp(22px, 5vw, 50px)',
                        animation: 'pointBounce 1s infinite',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: 'clamp(-10px, -2vw, -5px)',
                        marginTop: 'clamp(5px, 1.5vh, 10px)',
                    }}>👆</span>
                </button>
            </div>

            <style>{`
        @keyframes carFloat {
          0%, 100% { transform: scaleX(-1) translateY(0); }
          50% { transform: scaleX(-1) translateY(-15px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pointBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes titleGlow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); filter: brightness(1.1); }
        }

        @keyframes badgeRotate {
          0%, 100% { transform: translateX(-50%) rotate(-15deg); }
          50% { transform: translateX(-50%) rotate(-5deg); }
        }

        @media (max-width: 480px) and (orientation: portrait) {
          .city-background { height: 38% !important; top: 15% !important; }
          .road { height: 47% !important; }
          .building-2, .building-4, .building-5 { display: none !important; }
          .building-1 { width: 45px !important; height: 90px !important; }
          .building-3 { width: 50px !important; height: 110px !important; }
        }

        @media (max-width: 896px) and (orientation: landscape) {
          .city-background { height: 45% !important; top: 8% !important; }
          .road { height: 47% !important; }
          .building-4, .building-5 { display: none !important; }
          .building-1 { width: 60px !important; height: 120px !important; }
          .building-2 { width: 50px !important; height: 90px !important; }
          .building-3 { width: 70px !important; height: 140px !important; }
        }

        @media (max-width: 1024px) {
          .title-3d {
            text-shadow:
              1px 1px 0 #b8860b,
              2px 2px 0 #9a7200,
              3px 3px 0 #7a5900,
              4px 4px 0 #5c4000,
              6px 8px 10px rgba(0,0,0,0.7) !important;
            -webkit-text-stroke: 2px #000 !important;
          }
        }
      `}</style>
        </div>
    );
}
