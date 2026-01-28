import React, { useState, useEffect, useRef } from "react";
const UI_SCALE = Math.min(1.5, window.innerWidth / 1920);


// HOME SCREEN
function HomeScreen({ onPlay }) {
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
      background: 'linear-gradient(180deg, #87CEEB 0%, #E0F6FF 50%, #666 100%)',
      position: 'fixed',
      top: 0,
      left: 0,
      overflow: 'hidden',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    }}>
      {/* City Background */}
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
        {/* Buildings */}
        <div className="building building-1" style={{ width: '120px', height: '250px', background: 'linear-gradient(180deg, #FF6B6B 0%, #C92A2A 100%)', borderRadius: '10px 10px 0 0', boxShadow: '0 5px 20px rgba(0,0,0,0.3)' }}></div>
        <div className="building building-2" style={{ width: '100px', height: '180px', background: 'linear-gradient(180deg, #4ECDC4 0%, #1A535C 100%)', borderRadius: '10px 10px 0 0', boxShadow: '0 5px 20px rgba(0,0,0,0.3)' }}></div>
        <div className="building building-3" style={{ width: '140px', height: '300px', background: 'linear-gradient(180deg, #FFE66D 0%, #FF6B35 100%)', borderRadius: '10px 10px 0 0', boxShadow: '0 5px 20px rgba(0,0,0,0.3)' }}></div>
        <div className="building building-4" style={{ width: '110px', height: '220px', background: 'linear-gradient(180deg, #A8DADC 0%, #457B9D 100%)', borderRadius: '10px 10px 0 0', boxShadow: '0 5px 20px rgba(0,0,0,0.3)' }}></div>
        <div className="building building-5" style={{ width: '130px', height: '270px', background: 'linear-gradient(180deg, #F1FAEE 0%, #1D3557 100%)', borderRadius: '10px 10px 0 0', boxShadow: '0 5px 20px rgba(0,0,0,0.3)' }}></div>
      </div>

      {/* Road */}
      <div className="road" style={{
        position: 'absolute',
        width: '100%',
        height: '30%',
        bottom: 0,
        background: 'linear-gradient(180deg, #555 0%, #333 100%)',
        zIndex: 2,
      }}>
        {/* Yellow Road Lines */}
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

      {/* Title and Car Container */}
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
        {/* Title Above Car */}
        <div className="title-section" style={{
          textAlign: 'center',
          animation: 'fadeIn 1s',
          marginBottom: '0px',
          flex: 'shrink',
          minHeight: 'fit-content',
        }}>
          <h1 style={{
            fontSize: 'clamp(32px, 10vw, 90px)',
            margin: '0',
            color: '#FFD700',
            textShadow: '4px 4px 0px #000, 8px 8px 0px rgba(0,0,0,0.3)',
            fontWeight: '900',
            letterSpacing: 'clamp(1px, 1vw, 8px)',
            WebkitTextStroke: '3px #000',
          }}>
            RoadX
          </h1>
          <p style={{
            fontSize: 'clamp(12px, 3vw, 28px)',
            color: '#fff',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
            letterSpacing: 'clamp(1px, 0.5vw, 4px)',
            margin: '5px 0 15px 0',
          }}>
            CAR TRAFFIC
          </p>
        </div>

        {/* Car Image Below Title */}
        <div className="car-container" style={{
          animation: 'carFloat 2s ease-in-out infinite',
          filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))',
          flex: 'shrink',
          minHeight: 'fit-content',
          maxWidth: '90vw',
        }}>
          <svg width="clamp(120px, 40vw, 400px)" height="clamp(60px, 20vw, 200px)" viewBox="0 0 300 150" style={{ transform: 'scaleX(-1)', width: '100%', height: 'auto' }} preserveAspectRatio="xMidYMid meet">
            {/* Car Body */}
            <rect x="40" y="70" width="220" height="60" fill="#FFA500" rx="10" />
            {/* Car Top */}
            <path d="M 80 70 L 120 30 L 200 30 L 230 70 Z" fill="#FF8C00" />
            {/* Windows */}
            <path d="M 90 65 L 120 40 L 180 40 L 210 65 Z" fill="#87CEEB" opacity="0.7" />
            {/* Wheels */}
            <circle cx="90" cy="130" r="25" fill="#000" />
            <circle cx="90" cy="130" r="15" fill="#333" />
            <circle cx="210" cy="130" r="25" fill="#000" />
            <circle cx="210" cy="130" r="15" fill="#333" />
            {/* Headlights */}
            <ellipse cx="255" cy="85" rx="8" ry="12" fill="#FFFF00" />
            <ellipse cx="255" cy="110" rx="8" ry="12" fill="#FFFF00" />
            {/* Details */}
            <rect x="240" y="75" width="15" height="50" fill="#FF6347" rx="3" />
          </svg>
        </div>
      </div>

      {/* Play Button at Bottom */}
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
      }}>
        {/* FREE Badge */}
        <div className="free-badge" style={{
          position: 'absolute',
          top: '-30px',
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
            gap: 'clamp(8px, 2vw, 15px)',
            padding: 'clamp(10px, 2vw, 12px) clamp(20px, 4vw, 30px)',
            whiteSpace: 'nowrap',
            minWidth: 'fit-content',
            maxWidth: '90vw',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.08) translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1) translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
          }}
        >
          PLAY NOW
          <span style={{ fontSize: 'clamp(22px, 5vw, 50px)', animation: 'pointBounce 1s infinite', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>👆</span>
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

        /* Mobile Portrait */
        @media (max-width: 480px) and (orientation: portrait) {
          .city-background {
            height: 38% !important;
            top: 15% !important;
          }
          .road {
            height: 47% !important;
          }
          .building-2, .building-4, .building-5 {
            display: none !important;
          }
          .building-1 {
            width: 45px !important;
            height: 90px !important;
          }
          .building-3 {
            width: 50px !important;
            height: 110px !important;
          }
        }

        /* Mobile Landscape */
        @media (max-width: 896px) and (orientation: landscape) {
          .city-background {
            height: 45% !important;
            top: 8% !important;
          }
          .road {
            height: 47% !important;
          }
          .building-4, .building-5 {
            display: none !important;
          }
          .building-1 {
            width: 60px !important;
            height: 120px !important;
          }
          .building-2 {
            width: 50px !important;
            height: 90px !important;
          }
          .building-3 {
            width: 70px !important;
            height: 140px !important;
          }
        }

        /* Tablet Portrait */
        @media (min-width: 481px) and (max-width: 768px) and (orientation: portrait) {
          .city-background {
            height: 42% !important;
            top: 12% !important;
          }
          .road {
            height: 46% !important;
          }
          .building-4, .building-5 {
            display: none !important;
          }
          .building-1 {
            width: 70px !important;
            height: 140px !important;
          }
          .building-2 {
            width: 60px !important;
            height: 100px !important;
          }
          .building-3 {
            width: 80px !important;
            height: 160px !important;
          }
        }

        /* Tablet Landscape */
        @media (min-width: 769px) and (max-width: 1024px) and (orientation: landscape) {
          .city-background {
            height: 48% !important;
            top: 15% !important;
          }
          .road {
            height: 37% !important;
          }
          .building-5 {
            display: none !important;
          }
        }

        /* Laptop/Desktop */
        @media (min-width: 1025px) {
          .city-background {
            height: 50% !important;
            top: 20% !important;
          }
          .road {
            height: 30% !important;
          }
        }

        /* Large Desktop 4K */
        @media (min-width: 2160px) {
          .building-1 {
            width: 160px !important;
            height: 320px !important;
          }
          .building-2 {
            width: 140px !important;
            height: 240px !important;
          }
          .building-3 {
            width: 180px !important;
            height: 380px !important;
          }
          .building-4 {
            width: 150px !important;
            height: 280px !important;
          }
          .building-5 {
            width: 170px !important;
            height: 340px !important;
          }
        }
      `}</style>
    </div>
  );
}

// MAP SELECTION SCREEN - FULLY RESPONSIVE
function MapSelection({ onSelectMap, coins }) {
  const maps = [
    {
      id: 'highway',
      name: 'HIGHWAY',
      icon: '🛣️',
      gradient: 'linear-gradient(180deg, #667eea 0%, #764ba2 100%)',
      description: 'Open Road Racing',
    },
    {
      id: 'city',
      name: 'CITY',
      icon: '🌃',
      gradient: 'linear-gradient(180deg, #f093fb 0%, #f5576c 100%)',
      description: 'Urban Streets',
    },
    {
      id: 'desert',
      name: 'DESERT',
      icon: '🏜️',
      gradient: 'linear-gradient(180deg, #fa709a 0%, #fee140 100%)',
      description: 'Sandy Adventure',
    },
    {
      id: 'snow',
      name: 'SNOW',
      icon: '🏔️',
      gradient: 'linear-gradient(180deg, #a8edea 0%, #fed6e3 100%)',
      description: 'Icy Challenge',
    },
    {
      id: 'night',
      name: 'NIGHT',
      icon: '🌙',
      gradient: 'linear-gradient(180deg, #2c3e50 0%, #34495e 100%)',
      description: 'Midnight Drive',
    },
    {
      id: 'jungle',
      name: 'JUNGLE',
      icon: '🌴',
      gradient: 'linear-gradient(180deg, #11998e 0%, #38ef7d 100%)',
      description: 'Tropical Forest',
    },
    {
      id: 'beach',
      name: 'BEACH',
      icon: '🏖️',
      gradient: 'linear-gradient(180deg, #4facfe 0%, #00f2fe 100%)',
      description: 'Ocean Coast',
    },
    {
      id: 'mountain',
      name: 'MOUNTAIN',
      icon: '⛰️',
      gradient: 'linear-gradient(180deg, #8e9eab 0%, #eef2f3 100%)',
      description: 'Rocky Peaks',
    },
  ];

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      background: 'linear-gradient(135deg, #1a0033 0%, #330066 25%, #4d0099 50%, #661a99 75%, #330066 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradientShift 20s ease infinite',
      padding: 0,
      margin: 0,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Animated Floating Elements */}
      <div style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          width: '80px',
          height: '40px',
          top: '10%',
          left: '5%',
          fontSize: 'clamp(30px, 5vw, 40px)',
          animation: 'float 6s ease-in-out infinite',
          opacity: 0.3,
        }}>🏎️</div>
        <div style={{
          position: 'absolute',
          width: '80px',
          height: '40px',
          top: '30%',
          right: '8%',
          fontSize: 'clamp(35px, 6vw, 45px)',
          animation: 'float 8s ease-in-out infinite',
          opacity: 0.25,
          animationDelay: '2s',
        }}>🚗</div>
        <div style={{
          position: 'absolute',
          width: '80px',
          height: '40px',
          bottom: '15%',
          left: '12%',
          fontSize: 'clamp(40px, 7vw, 50px)',
          animation: 'float 7s ease-in-out infinite',
          opacity: 0.2,
          animationDelay: '4s',
        }}>🏁</div>

        <div style={{
          position: 'absolute',
          width: 'clamp(150px, 25vw, 200px)',
          height: 'clamp(150px, 25vw, 200px)',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '50%',
          top: '-10%',
          right: '10%',
          animation: 'pulse 4s ease-in-out infinite',
        }}></div>
        <div style={{
          position: 'absolute',
          width: 'clamp(120px, 20vw, 150px)',
          height: 'clamp(120px, 20vw, 150px)',
          background: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '50%',
          bottom: '5%',
          left: '5%',
          animation: 'pulse 5s ease-in-out infinite',
          animationDelay: '1s',
        }}></div>
      </div>

      {/* Coins Display */}
      <div style={{
        position: 'fixed',
        top: 'clamp(8px, 1.5vh, 16px)',
        right: 'clamp(8px, 2vw, 16px)',
        background: 'linear-gradient(135deg, rgba(255,215,0,0.4), rgba(255,165,0,0.3))',
        padding: 'clamp(6px, 1.2vh, 12px) clamp(12px, 2vw, 20px)',
        borderRadius: '5px',
        border: 'clamp(1px, 0.3vw, 2px) solid #FFD700',
        fontSize: 'clamp(12px, 2vw, 18px)',
        fontWeight: 'bold',
        color: '#FFD700',
        display: 'flex',
        alignItems: 'center',
        gap: 'clamp(4px, 1vw, 8px)',
        boxShadow: '0 0 20px rgba(255,215,0,0.6)',
        zIndex: 100,
        backdropFilter: 'blur(5px)',
        animation: 'coinGlow 2s ease-in-out infinite',
      }}>
        <span style={{ fontSize: 'clamp(12px, 2vw, 18px)', animation: 'coinSpin 3s linear infinite' }}>🪙</span>
        <span>{coins}</span>
      </div>

      {/* Scrollable Content */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        overflowX: 'hidden',
        padding: 'clamp(15px, 3vh, 40px) 0',
        scrollBehavior: 'smooth',
      }}>
        {/* Title */}
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
          <span style={{
            fontSize: 'clamp(30px, 6vw, 60px)',
            animation: 'flagWave 2s ease-in-out infinite',
            opacity: 0.8,
          }}>🏁</span>
          <h1 style={{
            fontSize: 'clamp(24px, 5vw, 60px)',
            marginBottom: 0,
            marginTop: 0,
            textAlign: 'center',
            color: '#fff',
            textShadow: '0 0 30px rgba(255,215,0,0.8), 0 0 60px rgba(255,100,0,0.6), 4px 4px 0 rgba(0,0,0,0.4)',
            fontWeight: 'bold',
            position: 'relative',
            zIndex: 1,
            letterSpacing: 'clamp(1px, 0.5vw, 4px)',
            animation: 'titlePulse 2s ease-in-out infinite',
          }}>
            SELECT MAP
          </h1>
          <span style={{
            fontSize: 'clamp(30px, 6vw, 60px)',
            animation: 'flagWave 2s ease-in-out infinite 0.5s',
            opacity: 0.8,
            transform: 'scaleX(-1)',
          }}>🏁</span>
        </div>

        {/* Map Grid - CENTERED AND RESPONSIVE */}
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
                  background: map.gradient,
                  borderRadius: 'clamp(15px, 2vw, 20px)',
                  padding: '10px',
                  minHeight: 'clamp(180px, 25vh, 250px)',
                  cursor: 'pointer',
                  border: 'clamp(2px, 0.3vw, 3px) solid rgba(255,255,255,0.3)',
                  transition: 'all 0.3s',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  // width: '100%',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
                }}
              >
                <div style={{ fontSize: 'clamp(50px, 10vw, 90px)', marginBottom: 'clamp(8px, 1.5vh, 18px)' }}>{map.icon}</div>
                <h2 style={{
                  fontSize: 'clamp(18px, 3.5vw, 36px)',
                  color: 'white',
                  margin: 'clamp(6px, 1vh, 12px) 0',
                  fontWeight: 'bold',
                  letterSpacing: '1px',
                }}>
                  {map.name}
                </h2>
                <p style={{
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: 'clamp(12px, 2.5vw, 18px)',
                  margin: 'clamp(6px, 1vh, 12px) 0',
                }}>
                  {map.description}
                </p>
                <div style={{
                  marginTop: 'clamp(10px, 2vh, 24px)',
                  padding: 'clamp(8px, 1.5vh, 14px) clamp(15px, 3vw, 30px)',
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: '50px',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 'clamp(12px, 2vw, 18px)',
                }}>
                  SELECT →
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(5deg); }
          75% { transform: translateY(20px) rotate(-5deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.05; }
          50% { transform: scale(1.2); opacity: 0.15; }
        }
        @keyframes coinSpin {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        @keyframes coinGlow {
          0%, 100% { boxShadow: 0 0 30px rgba(255,215,0,0.6); }
          50% { boxShadow: 0 0 50px rgba(255,215,0,0.9); }
        }
        @keyframes titlePulse {
          0%, 100% { 
            textShadow: 0 0 30px rgba(255,215,0,0.8), 0 0 60px rgba(255,100,0,0.6), 4px 4px 0 rgba(0,0,0,0.4);
            transform: scale(1);
          }
          50% { 
            textShadow: 0 0 50px rgba(255,215,0,1), 0 0 100px rgba(255,100,0,0.8), 4px 4px 0 rgba(0,0,0,0.5);
            transform: scale(1.02);
          }
        }
        @keyframes flagWave {
          0%, 100% { transform: translateY(0) rotateZ(-5deg); }
          50% { transform: translateY(-5px) rotateZ(5deg); }
        }

        /* MOBILE PORTRAIT - Single column, full width with side padding */
        @media (max-width: 480px) and (orientation: portrait) {
          .map-grid {
            grid-template-columns: 1fr !important;
            padding-left: clamp(12px, 4vw, 20px) !important;
            padding-right: clamp(12px, 4vw, 20px) !important;
            max-width: 100% !important;
            margin: 0 auto !important;
          }
        }

        /* MOBILE LANDSCAPE - Single column */
        @media (max-width: 480px) and (orientation: landscape) {
          .map-grid {
            grid-template-columns: 1fr !important;
            padding-left: clamp(20px, 5vw, 40px) !important;
            padding-right: clamp(20px, 5vw, 40px) !important;
            max-width: 600px !important;
            margin: 0 auto !important;
          }
        }

        /* TABLET - 2 columns (481px to 768px - both portrait and landscape) */
        @media (min-width: 481px) and (max-width: 768px) {
          .map-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            padding-left: clamp(10px, 2vw, 15px) !important;
            padding-right: clamp(10px, 2vw, 15px) !important;
            max-width: 100% !important;
            margin: 0 auto !important;
            gap: clamp(10px, 1.5vh, 18px) !important;
          }
        }

        /* TABLET LANDSCAPE - 2 columns */
        @media (min-width: 769px) and (max-width: 1023px) {
          .map-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            padding-left: clamp(20px, 4vw, 40px) !important;
            padding-right: clamp(20px, 4vw, 40px) !important;
            max-width: 900px !important;
            margin: 0 auto !important;
          }
        }

        /* LAPTOP/DESKTOP - 3 columns (1024px and above) */
        @media (min-width: 1024px) and (max-width: 1919px) {
          .map-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            padding-left: 40px !important;
            padding-right: 40px !important;
            max-width: 1400px !important;
            margin: 0 auto !important;
          }
        }

        /* LARGE PC DESKTOP & 4K - 3 columns, centered */
        @media (min-width: 1920px) {
          .map-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            padding-left: 60px !important;
            padding-right: 60px !important;
            max-width: 1600px !important;
            margin: 0 auto !important;
          }
        }

        /* Touch devices - active state */
        @media (hover: none) and (pointer: coarse) {
          .map-card:active {
            transform: translateY(-10px) scale(1.03) !important;
            boxShadow: 0 20px 50px rgba(0,0,0,0.5) !important;
          }
        }
      `}</style>
    </div>
  );
}

// WIN POPUP
function WinPopup({ score, distance, coins, onRestart, onMapSelect, onHome }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0,0.9)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      animation: 'fadeIn 0.3s',
      padding: 'clamp(10px, 3vw, 20px)',
      boxSizing: 'border-box',
      overflowY: 'auto',
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: 'clamp(25px, 5vw, 50px)',
        borderRadius: 'clamp(20px, 3vw, 30px)',
        textAlign: 'center',
        border: 'clamp(3px, 0.5vw, 5px) solid #FFD700',
        boxShadow: '0 30px 100px rgba(255,215,0,0.5)',
        maxWidth: '95vw',
        width: 'clamp(280px, 90vw, 600px)',
        animation: 'popIn 0.5s',
      }}>
        <div style={{ fontSize: 'clamp(50px, 12vw, 100px)', marginBottom: 'clamp(10px, 2vh, 20px)', animation: 'bounce 1s infinite' }}>🏆</div>
        <h2 style={{ fontSize: 'clamp(36px, 10vw, 72px)', color: '#FFD700', margin: 'clamp(5px, 1vh, 10px) 0', textShadow: '0 5px 20px rgba(0,0,0,0.5)' }}>
          CHAMPION!
        </h2>
        <div style={{
          background: 'rgba(255,255,255,0.2)',
          padding: 'clamp(15px, 3vw, 30px)',
          borderRadius: 'clamp(15px, 2vw, 20px)',
          margin: 'clamp(15px, 3vh, 30px) 0',
        }}>
          <p style={{ fontSize: 'clamp(16px, 4vw, 32px)', margin: 'clamp(8px, 1.5vh, 15px) 0', color: '#FFD700' }}>
            Score: <strong style={{ color: '#FFD700', textShadow: '0 0 10px rgba(255,215,0,0.8)' }}>{score}</strong>
          </p>
          <p style={{ fontSize: 'clamp(14px, 3.5vw, 28px)', margin: 'clamp(8px, 1.5vh, 15px) 0', color: 'white' }}>
            Distance: <strong style={{ color: '#FFD700' }}>{Math.floor(distance / 100)}km / 100km</strong>
          </p>
          <p style={{ fontSize: 'clamp(16px, 4vw, 36px)', margin: 'clamp(8px, 1.5vh, 15px) 0', color: '#FFD700', fontWeight: 'bold' }}>
            🪙 Coins: +{coins}
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(8px, 1.5vh, 10px)', alignItems: 'center' }}>
          <button
            onClick={onRestart}
            style={{
              padding: 'clamp(10px, 2vh, 18px) clamp(25px, 5vw, 50px)',
              fontSize: 'clamp(14px, 2.5vw, 22px)',
              borderRadius: '50px',
              border: 'none',
              cursor: 'pointer',
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              color: 'white',
              fontWeight: 'bold',
              boxShadow: '0 10px 30px rgba(245, 87, 108, 0.4)',
              transition: 'transform 0.2s',
              width: '100%',
              maxWidth: '300px',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            🎮 PLAY AGAIN
          </button>
          <button
            onClick={onMapSelect}
            style={{
              padding: 'clamp(10px, 2vh, 18px) clamp(25px, 5vw, 50px)',
              fontSize: 'clamp(14px, 2.5vw, 22px)',
              borderRadius: '50px',
              border: 'none',
              cursor: 'pointer',
              background: '#555',
              color: 'white',
              fontWeight: 'bold',
              transition: 'transform 0.2s',
              width: '100%',
              maxWidth: '300px',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            🗺️ MAPS
          </button>
          <button
            onClick={onHome}
            style={{
              padding: 'clamp(10px, 2vh, 18px) clamp(25px, 5vw, 50px)',
              fontSize: 'clamp(14px, 2.5vw, 22px)',
              borderRadius: '50px',
              border: 'none',
              cursor: 'pointer',
              background: '#333',
              color: 'white',
              fontWeight: 'bold',
              transition: 'transform 0.2s',
              width: '100%',
              maxWidth: '300px',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            🏠 HOME
          </button>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes popIn {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}

// GAME COMPONENT
function Game({ onMapSelect, mapType, coins, setCoins, onHome }) {
  const [screen, setScreen] = useState("countdown");
  const [count, setCount] = useState(3);
  const [distance, setDistance] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [score, setScore] = useState(0);
  const [viewAngle, setViewAngle] = useState("top");
  const [showWinPopup, setShowWinPopup] = useState(false);
  const [earnedCoins, setEarnedCoins] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  const [canvasSize, setCanvasSize] = useState({
    w: window.innerWidth,
    h: window.innerHeight,
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkMobile();

    const handleResize = () => {
      setCanvasSize({
        w: window.innerWidth,
        h: window.innerHeight,
      });
      checkMobile();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { w: W, h: H } = canvasSize;

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
    if (screen === "countdown" && count > 0) {
      const t = setTimeout(() => setCount(c => c - 1), 1000);
      return () => clearTimeout(t);
    }
    if (count === 0 && screen === "countdown") {
      setScreen("play");
    }
  }, [screen, count]);

  useEffect(() => {
    if (screen !== "play" && screen !== "countdown") return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let localDistance = 0;
    const roadWidth = Math.min(400, W * 0.8);
    const roadLeft = W / 2 - roadWidth / 2;
    const roadRight = W / 2 + roadWidth / 2;
    let localCarX = W / 2 - 25;
    let localEnemies = [];
    let localCoins = [];
    let localSpeed = 0;
    let targetSpeed = 0;
    let keysPressed = {};
    let touchStartX = null;
    let touchDirection = null;
    let roadOffset = 0;
    let localScore = 0;
    let localEarnedCoins = 0;
    let trees = [];
    let snowflakes = [];
    let buildings = [];

    if (mapType === 'highway' || mapType === 'city') {
      const buildingCount = mapType === 'city' ? 60 : 40;
      const spacing = mapType === 'city' ? H : H * 1.5;

      for (let i = 0; i < buildingCount; i++) {
        const side = Math.random() < 0.5 ? 'left' : 'right';
        buildings.push({
          side: side,
          y: i * spacing,
          x: side === 'left'
            ? 10 + Math.random() * (roadLeft - 60)
            : roadRight + 15 + Math.random() * (W - roadRight - 60),
          width: 50 + Math.random() * 70,
          height: 100 + Math.random() * 140,
        });
      }
    }

    for (let i = 0; i < 80; i++) {
      trees.push({
        x: Math.random() < 0.5 ? 20 + Math.random() * (roadLeft - 40) : roadRight + 20 + Math.random() * (W - roadRight - 40),
        y: Math.random() * H * 4,
      });
    }

    if (mapType === 'desert') {
      for (let i = 0; i < 50; i++) {
        trees.push({
          x: Math.random() < 0.5 ? 20 + Math.random() * (roadLeft - 40) : roadRight + 20 + Math.random() * (W - roadRight - 40),
          y: Math.random() * H * 4,
          isCactus: true,
        });
      }
    }

    if (mapType === 'snow') {
      for (let i = 0; i < 150; i++) {
        snowflakes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 2 + 1,
          type: 'snowflake',
        });
      }
      for (let i = 0; i < 60; i++) {
        snowflakes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          size: Math.random() * 8 + 6,
          speed: Math.random() * 2.5 + 1.5,
          type: 'ice',
          rotation: Math.random() * Math.PI * 2,
        });
      }
    }

    const hit = (a, b) =>
      a.x < b.x + b.w - 5 &&
      a.x + a.w > b.x + 5 &&
      a.y < b.y + b.h - 5 &&
      a.y + a.h > b.y + 5;

    const drawCar = (x, y, w, h, color, isPlayer = false, angle = viewAngle) => {
      if (angle === "side") {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, w * 1.5, h * 0.6);
        ctx.fillStyle = 'rgba(100, 100, 150, 0.7)';
        ctx.fillRect(x + 10, y + 5, w * 0.4, h * 0.3);
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(x + 10, y + h * 0.6, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x + w * 1.2, y + h * 0.6, 8, 0, Math.PI * 2);
        ctx.fill();
      } else if (angle === "chase") {
        const scale = isPlayer ? 1 : 0.7;
        ctx.fillStyle = color;
        ctx.fillRect(x, y, w * scale, h * scale);
        ctx.fillStyle = 'rgba(100, 100, 150, 0.7)';
        ctx.fillRect(x + 5 * scale, y + 8 * scale, w * scale - 10, h * 0.3 * scale);
      } else {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, w, h);
        ctx.fillStyle = isPlayer ? 'rgba(135, 206, 235, 0.7)' : 'rgba(100, 100, 150, 0.7)';
        ctx.fillRect(x + 5, y + 8, w - 10, h * 0.35);
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.8;
        ctx.fillRect(x + 3, y + 5, w - 6, 15);
        ctx.globalAlpha = 1;
        ctx.fillStyle = '#000';
        ctx.fillRect(x - 4, y + 12, 6, 16);
        ctx.fillRect(x + w - 2, y + 12, 6, 16);
        ctx.fillRect(x - 4, y + h - 28, 6, 16);
        ctx.fillRect(x + w - 2, y + h - 28, 6, 16);
        if (isPlayer) {
          ctx.fillStyle = '#FFFF00';
          ctx.fillRect(x + 8, y + h - 3, 10, 3);
          ctx.fillRect(x + w - 18, y + h - 3, 10, 3);
        } else {
          ctx.fillStyle = '#FF0000';
          ctx.fillRect(x + 8, y, 10, 3);
          ctx.fillRect(x + w - 18, y, 10, 3);
        }
      }
    };

    const drawTree = (x, y, isCactus = false) => {
      if (isCactus) {
        ctx.fillStyle = '#7CFC00';
        ctx.fillRect(x - 6, y, 12, 40);
        ctx.fillRect(x - 18, y + 10, 12, 8);
        ctx.fillRect(x + 6, y + 15, 12, 8);
        ctx.fillStyle = '#FFD700';
        for (let i = 0; i < 40; i += 8) {
          ctx.fillRect(x - 8, y + i, 3, 3);
          ctx.fillRect(x + 5, y + i, 3, 3);
          ctx.fillRect(x - 20, y + 10 + i * 0.25, 2, 2);
          ctx.fillRect(x + 18, y + 15 + i * 0.2, 2, 2);
        }
        ctx.fillStyle = '#FF69B4';
        ctx.beginPath();
        ctx.arc(x, y - 5, 4, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillStyle = '#654321';
        ctx.fillRect(x, y + 15, 12, 25);
        ctx.fillStyle = mapType === 'snow' ? '#E8F5E8' : '#228B22';
        ctx.beginPath();
        ctx.arc(x + 6, y + 12, 18, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x + 6, y + 5, 15, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x + 6, y, 12, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawBuilding = (x, y, width, height) => {
      if (mapType === 'city') {
        const colors_arr = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#F7DC6F', '#BB8FCE', '#85C1E2'];
        ctx.fillStyle = colors_arr[Math.floor(Math.random() * colors_arr.length)];
        ctx.fillRect(x, y, width, height);
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, width, height);
        ctx.fillStyle = '#333';
        for (let i = 0; i < height - 10; i += 18) {
          for (let j = 0; j < width - 10; j += 16) {
            ctx.fillRect(x + j + 3, y + i + 4, 10, 10);
            ctx.fillStyle = Math.random() > 0.4 ? '#FFD700' : '#333';
            ctx.fillRect(x + j + 4, y + i + 5, 8, 8);
            ctx.fillStyle = '#333';
          }
        }
      } else if (mapType === 'highway') {
        const houseColors = ['#D2691E', '#CD853F', '#8B4513', '#BC8F8F', '#A0522D', '#C19A6B'];
        ctx.fillStyle = houseColors[Math.floor(Math.random() * houseColors.length)];
        ctx.fillRect(x, y, width, height);
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, width, height);
        ctx.fillStyle = '#8B0000';
        ctx.beginPath();
        ctx.moveTo(x - 8, y);
        ctx.lineTo(x + width / 2, y - height * 0.35);
        ctx.lineTo(x + width + 8, y);
        ctx.fill();
        ctx.strokeStyle = '#440000';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = '#654321';
        ctx.fillRect(x + width / 2 - 12, y + height - 35, 24, 35);
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 1;
        ctx.strokeRect(x + width / 2 - 12, y + height - 35, 24, 35);
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(x + width / 2 + 8, y + height - 18, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#87CEEB';
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 1;
        for (let i = 0; i < height - 50; i += 28) {
          ctx.fillRect(x + 6, y + 12 + i, 20, 18);
          ctx.strokeRect(x + 6, y + 12 + i, 20, 18);
          ctx.strokeStyle = '#333';
          ctx.beginPath();
          ctx.moveTo(x + 16, y + 12 + i);
          ctx.lineTo(x + 16, y + 30 + i);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(x + 6, y + 21 + i);
          ctx.lineTo(x + 26, y + 21 + i);
          ctx.stroke();
        }
        for (let i = 0; i < height - 50; i += 28) {
          ctx.fillStyle = '#87CEEB';
          ctx.fillRect(x + width - 26, y + 12 + i, 20, 18);
          ctx.strokeStyle = '#333';
          ctx.strokeRect(x + width - 26, y + 12 + i, 20, 18);
          ctx.beginPath();
          ctx.moveTo(x + width - 16, y + 12 + i);
          ctx.lineTo(x + width - 16, y + 30 + i);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(x + width - 26, y + 21 + i);
          ctx.lineTo(x + width - 6, y + 21 + i);
          ctx.stroke();
        }
        ctx.fillStyle = '#8B0000';
        ctx.fillRect(x + width - 16, y + height * 0.2, 10, height * 0.3);
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 1;
        ctx.strokeRect(x + width - 16, y + height * 0.2, 10, height * 0.3);
      }
    };

    const draw = () => {
      ctx.fillStyle = colors.sky;
      ctx.fillRect(0, 0, W, H);

      if (mapType === 'snow') {
        snowflakes.forEach(flake => {
          if (flake.type === 'ice') {
            ctx.save();
            ctx.translate(flake.x, flake.y);
            ctx.rotate(flake.rotation || 0);
            ctx.fillStyle = 'rgba(200, 230, 255, 0.8)';
            ctx.fillRect(-flake.size / 2, -flake.size / 2, flake.size, flake.size);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
            ctx.fillRect(-flake.size / 2 + 2, -flake.size / 2 + 2, flake.size / 3, flake.size / 3);
            ctx.strokeStyle = 'rgba(100, 180, 255, 0.7)';
            ctx.lineWidth = 1;
            ctx.strokeRect(-flake.size / 2, -flake.size / 2, flake.size, flake.size);
            ctx.restore();
          } else {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.beginPath();
            ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      }

      ctx.fillStyle = colors.side;
      ctx.fillRect(0, 0, roadLeft, H);
      ctx.fillRect(roadRight, 0, W - roadRight, H);

      if ((mapType === 'highway' || mapType === 'city') && buildings.length > 0) {
        buildings.forEach(building => {
          const buildingY = building.y - localDistance * 0.5;
          if (buildingY > -building.height && buildingY < H + 50) {
            drawBuilding(building.x, buildingY, building.width, building.height);
          }
        });
      }

      trees.forEach(tree => {
        const treeY = (tree.y + roadOffset * 3) % (H * 4);
        if (treeY > -50 && treeY < H + 50) {
          drawTree(tree.x, treeY, tree.isCactus || false);
        }
      });

      ctx.fillStyle = colors.road;
      ctx.fillRect(roadLeft, 0, roadWidth, H);

      ctx.fillStyle = '#555';
      ctx.fillRect(roadLeft, 0, 8, H);
      ctx.fillRect(roadRight - 8, 0, 8, H);

      ctx.fillStyle = colors.line;
      const laneMarkerHeight = 40;
      const laneMarkerGap = 30;
      const laneWidth = roadWidth / 3;
      for (let lane = 1; lane < 3; lane++) {
        for (let i = -laneMarkerHeight; i < H; i += laneMarkerHeight + laneMarkerGap) {
          const y = i + roadOffset;
          if (y > -laneMarkerHeight && y < H) {
            ctx.fillRect(roadLeft + lane * laneWidth, y, 6, laneMarkerHeight);
          }
        }
      }

      if (localDistance > 9800 && localDistance < 10100) {
        const finishY = H - ((localDistance - 9800) * 3);
        if (finishY > -100 && finishY < H) {
          const checkWidth = roadWidth / 20;
          for (let i = 0; i < 20; i++) {
            ctx.fillStyle = i % 2 === 0 ? '#000' : '#fff';
            ctx.fillRect(roadLeft + i * checkWidth, finishY, checkWidth, 40);
          }
          ctx.fillStyle = '#FF0000';
          ctx.font = `bold ${Math.min(36, roadWidth / 10)}px Arial`;
          ctx.strokeStyle = '#fff';
          ctx.lineWidth = 3;
          const text = '🏁 FINISH 🏁';
          const textWidth = ctx.measureText(text).width;
          const textX = roadLeft + (roadWidth - textWidth) / 2;
          ctx.strokeText(text, textX, finishY + 28);
          ctx.fillText(text, textX, finishY + 28);
        }
      }

      if (screen === "play") {
        localCoins.forEach(c => {
          ctx.save();
          ctx.translate(c.x + 15, c.y + 15);
          ctx.rotate(c.rotation || 0);
          ctx.fillStyle = '#FFD700';
          ctx.beginPath();
          ctx.arc(0, 0, 15, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#FFA500';
          ctx.font = 'bold 18px Arial';
          ctx.fillText('C', -6, 6);
          ctx.restore();
          if (c.rotation === undefined) c.rotation = 0;
          c.rotation += 0.1;
        });
      }

      const playerY = viewAngle === "chase" ? H - 200 : H - 150;
      drawCar(localCarX, playerY, 50, 90, '#FF3366', true, viewAngle);

      if (screen === "play") {
        localEnemies.forEach(e => {
          drawCar(e.x, e.y, 50, 90, e.color, false, viewAngle);
        });
      }

      if (screen === "play") {
        ctx.fillStyle = 'rgba(0,0,0,0.8)';
        ctx.fillRect(0, 0, W, Math.min(70, H * 0.1));

        ctx.fillStyle = '#fff';
        const fontSize = Math.min(24, W / 20);
        ctx.font = `bold ${fontSize}px Arial`;
        ctx.fillText(`Score: ${localScore}`, 10, fontSize + 10);
        ctx.fillText(`Speed: ${Math.floor(localSpeed * 20)} km/h`, W / 2 - fontSize * 4, fontSize + 10);
        ctx.fillText(`${Math.floor(localDistance / 100)}km / 100km`, W / 10 + fontSize * 4, fontSize + 10);

        ctx.fillStyle = '#FFD700';
        ctx.font = `bold ${fontSize + 4}px Arial`;
        ctx.fillText(`🪙 ${localEarnedCoins}`, W - fontSize * 5, fontSize + 12);
      }
    };

    const loop = () => {
      if (screen === "play") {
        if (keysPressed['ArrowUp'] || keysPressed['w'] || keysPressed['W'] || touchDirection === 'up') {
          targetSpeed = Math.min(targetSpeed + 0.15, 10);
        } else if (keysPressed['ArrowDown'] || keysPressed['s'] || keysPressed['S'] || touchDirection === 'down') {
          targetSpeed = Math.max(targetSpeed - 0.2, 2);
        } else {
          if (targetSpeed > 6) {
            targetSpeed = Math.max(targetSpeed - 0.1, 6);
          } else if (targetSpeed < 6) {
            targetSpeed = Math.min(targetSpeed + 0.1, 6);
          }
        }

        localSpeed += (targetSpeed - localSpeed) * 0.08;
        localDistance += localSpeed;
        roadOffset = (roadOffset + localSpeed) % 70;

        if (mapType === 'snow') {
          snowflakes.forEach(flake => {
            flake.y += flake.speed + localSpeed;
            if (flake.type === 'ice') {
              flake.rotation += 0.05;
            }
            if (flake.y > H) {
              flake.y = -flake.size;
              flake.x = Math.random() * W;
              if (flake.type === 'ice') {
                flake.rotation = Math.random() * Math.PI * 2;
              }
            }
          });
        }

        setDistance(localDistance);
        setSpeed(localSpeed);

        if (localDistance > 10000) {
          const distanceBonus = Math.floor(localDistance / 2);
          const finalScore = localScore + distanceBonus + localEarnedCoins * 5;
          setScore(finalScore);
          setEarnedCoins(localEarnedCoins);
          setCoins(prev => prev + localEarnedCoins);
          setShowWinPopup(true);
          setScreen("finish");
          return;
        }

        if (Math.random() < 0.025) {
          const lane = Math.floor(Math.random() * 3);
          const laneWidth = roadWidth / 3;
          const enemyColors = ['#4169E1', '#FF1493', '#32CD32', '#FF8C00', '#9370DB'];
          localEnemies.push({
            x: roadLeft + 10 + lane * laneWidth,
            y: -100,
            w: 50,
            h: 90,
            color: enemyColors[Math.floor(Math.random() * enemyColors.length)],
            passed: false,
          });
        }

        if (Math.random() < 0.015) {
          const lane = Math.floor(Math.random() * 3);
          const laneWidth = roadWidth / 3;
          localCoins.push({
            x: roadLeft + 10 + lane * laneWidth + 10,
            y: -50,
            w: 30,
            h: 30,
            rotation: 0,
          });
        }

        localCoins.forEach(c => {
          c.y += localSpeed + 2;
          if (hit({ x: localCarX, y: H - 150, w: 50, h: 90 }, c)) {
            c.collected = true;
            localEarnedCoins += 1;
            setEarnedCoins(localEarnedCoins);
          }
        });
        localCoins = localCoins.filter(c => !c.collected && c.y < H + 100);

        localEnemies.forEach(e => {
          e.y += localSpeed + 2;

          if (!e.passed && e.y > H - 100) {
            e.passed = true;
            localScore += 10;
            setScore(localScore);
          }

          const playerCar = { x: localCarX, y: H - 150, w: 50, h: 90 };
          if (hit(playerCar, e) && screen === "play") {
            setScore(localScore);
            setEarnedCoins(localEarnedCoins);
            setCoins(prev => prev + localEarnedCoins);
            setScreen("gameover");
            if (rafRef.current) {
              cancelAnimationFrame(rafRef.current);
              rafRef.current = null;
            }
            return;
          }
        });

        localEnemies = localEnemies.filter(e => e.y < H + 100);

        if (keysPressed['ArrowLeft'] || keysPressed['a'] || keysPressed['A'] || touchDirection === 'left') {
          if (localCarX > roadLeft + 10) localCarX -= 5;
        }
        if (keysPressed['ArrowRight'] || keysPressed['d'] || keysPressed['D'] || touchDirection === 'right') {
          if (localCarX < roadRight - 60) localCarX += 5;
        }

        if (screen !== "play") {
          return;
        }
      } else if (screen === "countdown") {
        roadOffset = (roadOffset + 5) % 70;

        if (mapType === 'snow') {
          snowflakes.forEach(flake => {
            flake.y += flake.speed + 2;
            if (flake.type === 'ice') {
              flake.rotation += 0.05;
            }
            if (flake.y > H) {
              flake.y = -flake.size;
              flake.x = Math.random() * W;
              if (flake.type === 'ice') {
                flake.rotation = Math.random() * Math.PI * 2;
              }
            }
          });
        }
      }

      draw();
      rafRef.current = requestAnimationFrame(loop);
    };

    const handleKeyDown = (e) => {
      keysPressed[e.key] = true;
      if (e.key === 'v' || e.key === 'V') {
        setViewAngle(prev => {
          if (prev === "top") return "side";
          if (prev === "side") return "chase";
          return "top";
        });
      }
    };

    const handleKeyUp = (e) => {
      keysPressed[e.key] = false;
    };

    const handleTouchStart = (e) => {
      if (screen !== "play") return;
      touchStartX = e.touches[0].clientX;
      touchDirection = null;
    };

    const handleTouchMove = (e) => {
      if (screen !== "play" || touchStartX === null) return;
      const touchX = e.touches[0].clientX;
      const diff = touchX - touchStartX;

      if (Math.abs(diff) > 30) {
        touchDirection = diff > 0 ? 'right' : 'left';
      }
    };

    const handleTouchEnd = (e) => {
      touchStartX = null;
      touchDirection = null;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    canvas.addEventListener("touchstart", handleTouchStart);
    canvas.addEventListener("touchmove", handleTouchMove);
    canvas.addEventListener("touchend", handleTouchEnd);
    
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", handleTouchEnd);
      cancelAnimationFrame(rafRef.current);
    };
  }, [screen, mapType, viewAngle, setCoins, W, H]);

  const restart = () => {
    setDistance(0);
    setSpeed(0);
    setScore(0);
    setEarnedCoins(0);
    setCount(3);
    setScreen("countdown");
    setShowWinPopup(false);
  };

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(180deg, #0f0c29, #302b63, #24243e)',
      color: 'white',
      textAlign: 'center',
      position: 'fixed',
      top: 0,
      left: 0,
      overflow: 'hidden',
      margin: 0,
      padding: 0,
    }}>
      {showWinPopup && (
        <WinPopup
          score={score}
          distance={distance}
          coins={earnedCoins}
          onRestart={restart}
          onMapSelect={onMapSelect}
          onHome={onHome}
        />
      )}

      {screen === "countdown" && (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <canvas
            ref={canvasRef}
            width={W}
            height={H}
            style={{
              width: '100%',
              height: '100%',
              display: 'block',
              touchAction: 'none',
            }}
          />
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(0,0,0,0.85)',
            padding: 'clamp(30px, 5vh, 50px) clamp(60px, 10vw, 100px)',
            borderRadius: 'clamp(20px, 3vw, 30px)',
            border: 'clamp(3px, 0.5vw, 5px) solid #667eea',
            boxShadow: '0 20px 60px rgba(0,0,0,0.8)',
          }}>
            <h1 style={{
              fontSize: 'clamp(60px, 20vw, 150px)',
              margin: '0',
              color: count === 0 ? '#4ade80' : '#fff',
              textShadow: '0 10px 40px rgba(0,0,0,0.5)',
              fontWeight: 'bold',
            }}>
              {count === 0 ? "GO!" : count}
            </h1>
          </div>
        </div>
      )}

      {screen === "play" && (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <canvas
            ref={canvasRef}
            width={W}
            height={H}
            style={{
              width: '100%',
              height: '100%',
              display: 'block',
              touchAction: 'none',
            }}
          />
          
          
          <div style={{
            position: 'absolute',
            bottom: 'clamp(10px, 2vh, 20px)',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(0,0,0,0.8)',
            padding: 'clamp(6px, 1vh, 12px) clamp(12px, 2vw, 25px)',
            borderRadius: 'clamp(8px, 1.5vw, 15px)',
            fontSize: 'clamp(10px, 1.8vw, 15px)',
            fontWeight: 'bold',
            border: '2px solid rgba(255,255,255,0.3)',
            maxWidth: '90vw',
            textAlign: 'center',
          }}>
            <span style={{ color: '#FFD700' }}>CONTROLS:</span> {isMobile ? 'Left/Right Arrows | Up=Fast | Down=Brake' : 'WASD/Arrows | W/↑=Fast | S/↓=Brake | V=View'} ({viewAngle})
          </div>
        </div>
      )}

      {screen === "gameover" && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          padding: 'clamp(20px, 5vw, 40px)',
        }}>
          <h2 style={{ fontSize: 'clamp(50px, 12vw, 80px)', color: '#ff4444', margin: 'clamp(10px, 2vh, 20px)', textShadow: '0 5px 20px rgba(255,68,68,0.5)' }}>💥 CRASH!</h2>
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: 'clamp(20px, 4vw, 40px)',
            borderRadius: 'clamp(15px, 3vw, 25px)',
            maxWidth: '90vw',
            width: 'clamp(280px, 90vw, 500px)',
            margin: 'clamp(15px, 3vh, 30px) auto',
            border: '3px solid rgba(255,68,68,0.5)',
          }}>
            <p style={{ fontSize: 'clamp(24px, 6vw, 36px)', margin: 'clamp(10px, 2vh, 20px)', color: '#FFD700', fontWeight: 'bold' }}>Score: <strong style={{ textShadow: '0 0 10px rgba(255,215,0,0.8)' }}>{score}</strong></p>
            <p style={{ fontSize: 'clamp(18px, 4.5vw, 28px)', margin: 'clamp(8px, 1.5vh, 15px)', color: '#fff' }}>Distance: <strong style={{ color: '#FFD700' }}>{Math.floor(distance / 100)}km</strong></p>
            <p style={{ fontSize: 'clamp(18px, 4.5vw, 28px)', margin: 'clamp(8px, 1.5vh, 15px)', color: '#fff' }}>Max Speed: <strong style={{ color: '#FFD700' }}>{Math.floor(speed * 15)} km/h</strong></p>
            <p style={{ fontSize: 'clamp(20px, 5vw, 32px)', margin: 'clamp(10px, 2vh, 20px)', color: '#FFD700', fontWeight: 'bold' }}>🪙 Coins: +{earnedCoins}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(8px, 1.5vh, 12px)', alignItems: 'center', width: '100%', maxWidth: '400px' }}>
            <button
              onClick={restart}
              style={{
                padding: 'clamp(12px, 2.5vh, 18px) clamp(30px, 6vw, 50px)',
                fontSize: 'clamp(16px, 3vw, 22px)',
                borderRadius: '50px',
                border: 'none',
                cursor: 'pointer',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                fontWeight: 'bold',
                boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)',
                transition: 'transform 0.2s',
                width: '100%',
                maxWidth: '300px',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              🔄 RESTART
            </button>
            <button
              onClick={onMapSelect}
              style={{
                padding: 'clamp(12px, 2.5vh, 18px) clamp(30px, 6vw, 50px)',
                fontSize: 'clamp(16px, 3vw, 22px)',
                borderRadius: '50px',
                border: 'none',
                cursor: 'pointer',
                background: '#555',
                color: 'white',
                fontWeight: 'bold',
                transition: 'transform 0.2s',
                width: '100%',
                maxWidth: '300px',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              🗺️ MAPS
            </button>
            <button
              onClick={onHome}
              style={{
                padding: 'clamp(12px, 2.5vh, 18px) clamp(30px, 6vw, 50px)',
                fontSize: 'clamp(16px, 3vw, 22px)',
                borderRadius: '50px',
                border: 'none',
                cursor: 'pointer',
                background: '#333',
                color: 'white',
                fontWeight: 'bold',
                transition: 'transform 0.2s',
                width: '100%',
                maxWidth: '300px',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              🏠 HOME
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState("home");
  const [selectedMap, setSelectedMap] = useState("highway");
  const [coins, setCoins] = useState(0);

  const handleSelectMap = (mapType) => {
    setSelectedMap(mapType);
    setScreen("game");
  };

  return (
    <>
      {screen === "home" && <HomeScreen onPlay={() => setScreen("mapselect")} />}
      {screen === "mapselect" && <MapSelection onSelectMap={handleSelectMap} coins={coins} />}
      {screen === "game" && (
        <Game
          onMapSelect={() => setScreen("mapselect")}
          mapType={selectedMap}
          coins={coins}
          setCoins={setCoins}
          onHome={() => setScreen("home")}
        />
      )}
    </>
  );
}