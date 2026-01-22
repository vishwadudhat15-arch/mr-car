import React, { useState, useEffect, useRef } from "react";

// HOME SCREEN
function HomeScreen({ onPlay }) {
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
    }}>
      {/* City Background */}
      <div className="city-background" style={{
        position: 'absolute',
        width: '100%',
        height: '60%',
        top: '20%',
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
        height: '40%',
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

      {/* Title at Top */}
      <div className="title-section" style={{
        marginTop: '60px',
        textAlign: 'center',
        zIndex: 10,
        animation: 'fadeIn 1s',
      }}>
        <h1 style={{ 
          fontSize: '90px', 
          margin: '0', 
          color: '#FFD700',
          textShadow: '4px 4px 0px #000, 8px 8px 0px rgba(0,0,0,0.3)',
          fontWeight: '900',
          letterSpacing: '8px',
          WebkitTextStroke: '3px #000',
        }}>
          MR CAR
        </h1>
        <p style={{ 
          fontSize: '28px',
          color: '#fff',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
          letterSpacing: '4px',
          margin: '10px 0',
        }}>
          CAR TRAFFIC
        </p>
      </div>

      {/* Car Image in Center */}
      <div className="car-container" style={{
        zIndex: 10,
        animation: 'carFloat 2s ease-in-out infinite',
        filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))',
      }}>
        <svg width="300" height="150" viewBox="0 0 300 150" style={{ transform: 'scaleX(-1)' }}>
          {/* Car Body */}
          <rect x="40" y="70" width="220" height="60" fill="#FFA500" rx="10"/>
          {/* Car Top */}
          <path d="M 80 70 L 120 30 L 200 30 L 230 70 Z" fill="#FF8C00"/>
          {/* Windows */}
          <path d="M 90 65 L 120 40 L 180 40 L 210 65 Z" fill="#87CEEB" opacity="0.7"/>
          {/* Wheels */}
          <circle cx="90" cy="130" r="25" fill="#000"/>
          <circle cx="90" cy="130" r="15" fill="#333"/>
          <circle cx="210" cy="130" r="25" fill="#000"/>
          <circle cx="210" cy="130" r="15" fill="#333"/>
          {/* Headlights */}
          <ellipse cx="255" cy="85" rx="8" ry="12" fill="#FFFF00"/>
          <ellipse cx="255" cy="110" rx="8" ry="12" fill="#FFFF00"/>
          {/* Details */}
          <rect x="240" y="75" width="15" height="50" fill="#FF6347" rx="3"/>
        </svg>
      </div>

      {/* Play Button at Bottom */}
      <div className="play-button-container" style={{
        marginBottom: '80px',
        zIndex: 10,
        position: 'relative',
      }}>
        {/* FREE Badge */}
        <div className="free-badge" style={{
          position: 'absolute',
          top: '-30px',
          left: '-40px',
          background: '#000',
          color: '#FFD700',
          padding: '8px 20px',
          borderRadius: '50%',
          border: '3px solid #FFD700',
          fontWeight: 'bold',
          fontSize: '20px',
          transform: 'rotate(-15deg)',
          boxShadow: '0 5px 15px rgba(0,0,0,0.5)',
        }}>
          FREE
        </div>

        <button 
          className="play-button"
          onClick={onPlay}
          style={{
            // padding: '25px 30px',
            fontSize: '42px',
            borderRadius: '60px',
            border: '4px solid #000',
            background: 'linear-gradient(180deg, #FFD700 0%, #FFA500 100%)',
            color: '#000',
            cursor: 'pointer',
            fontWeight: '900',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5), inset 0 -5px 10px rgba(0,0,0,0.2)',
            transition: 'all 0.2s',
            textShadow: '2px 2px 0px rgba(255,255,255,0.5)',
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
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
          <span style={{ fontSize: '50px', animation: 'pointBounce 1s infinite' }}>👆</span>
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

        /* Tablet and Mobile responsive */
        @media (max-width: 1024px) {
          .building-4,
          .building-5 {
            display: none !important;
          }

          .building-1 {
            width: 80px !important;
            height: 140px !important;
          }

          .building-2 {
            width: 70px !important;
            height: 110px !important;
          }

          .building-3 {
            width: 90px !important;
            height: 160px !important;
          }

          .city-background {
            height: 40% !important;
            top: 18% !important;
          }

          .road {
            height: 30% !important;
          }

          .title-section {
            margin-top: 25px !important;
          }

          .title-section h1 {
            font-size: 64px !important;
            letter-spacing: 6px !important;
          }

          .title-section p {
            font-size: 20px !important;
            margin: 8px 0 !important;
          }

          .car-container {
            margin: 15px 0 !important;
          }

          .car-container svg {
            width: 220px !important;
            height: 110px !important;
          }

          .play-button-container {
            margin-bottom: 25px !important;
          }

          .play-button {
            font-size: 28px !important;
            padding: 14px 28px !important;
            gap: 12px !important;
          }

          .play-button span {
            font-size: 36px !important;
          }

          .free-badge {
            font-size: 16px !important;
            padding: 7px 16px !important;
          }
        }

        @media (max-width: 768px) {
          .building-4,
          .building-5,
          .building-2 {
            display: none !important;
          }

          .building-1 {
            width: 60px !important;
            height: 100px !important;
          }

          .building-3 {
            width: 70px !important;
            height: 120px !important;
          }

          .home-container {
            height: 100vh !important;
            justify-content: space-around !important;
          }
          
          .city-background {
            height: 25% !important;
            top: 10% !important;
          }

          .road {
            height: 20% !important;
          }

          .title-section {
            margin-top: 10px !important;
            margin-bottom: 0 !important;
          }

          .title-section h1 {
            font-size: 48px !important;
            letter-spacing: 3px !important;
            margin: 0 !important;
          }

          .title-section p {
            font-size: 16px !important;
            margin: 5px 0 0 0 !important;
          }

          .car-container {
            margin: 5px 0 !important;
            flex-shrink: 0;
          }

          .car-container svg {
            width: 180px !important;
            height: 90px !important;
          }

          .play-button-container {
            margin-bottom: 10px !important;
            flex-shrink: 0;
          }

          .play-button {
            font-size: 22px !important;
            padding: 12px 24px !important;
            gap: 10px !important;
          }

          .play-button span {
            font-size: 28px !important;
          }

          .free-badge {
            top: -18px !important;
            left: -28px !important;
            font-size: 13px !important;
            padding: 5px 12px !important;
            border: 2px solid #FFD700 !important;
          }
        }

        @media (max-width: 480px) {
          .building-2,
          .building-4,
          .building-5 {
            display: none !important;
          }

          .building-1 {
            width: 50px !important;
            height: 80px !important;
          }

          .building-3 {
            width: 55px !important;
            height: 95px !important;
          }

          .home-container {
            justify-content: center !important;
          }

          .city-background {
            height: 18% !important;
            top: 8% !important;
          }

          .road {
            height: 18% !important;
          }

          .title-section {
            margin-top: 8px !important;
            margin-bottom: 0 !important;
          }

          .title-section h1 {
            font-size: 36px !important;
            letter-spacing: 2px !important;
            margin: 0 !important;
          }

          .title-section p {
            font-size: 13px !important;
            margin: 4px 0 0 0 !important;
          }

          .car-container {
            margin: 3px 0 !important;
          }

          .car-container svg {
            width: 140px !important;
            height: 70px !important;
          }

          .play-button-container {
            margin-bottom: 8px !important;
          }

          .play-button {
            font-size: 18px !important;
            padding: 10px 18px !important;
            gap: 8px !important;
          }

          .play-button span {
            font-size: 22px !important;
          }

          .free-badge {
            top: -15px !important;
            left: -22px !important;
            font-size: 11px !important;
            padding: 4px 10px !important;
            border: 2px solid #FFD700 !important;
          }
        }
      `}</style>
    </div>
  );
}

// MAP SELECTION SCREEN
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
      id: 'jungle',
      name: 'JUNGLE',
      icon: '🌴',
      gradient: 'linear-gradient(180deg, #11998e 0%, #38ef7d 100%)',
      description: 'Tropical Forest',
    },
    {
      id: 'night',
      name: 'NIGHT',
      icon: '🌙',
      gradient: 'linear-gradient(180deg, #2c3e50 0%, #34495e 100%)',
      description: 'Midnight Drive',
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
      minHeight: '100vh',
      width: '100vw',
background: 'linear-gradient(180deg, #FFF9C4 0%, #FFF176 50%, #FFE082 100%)',
      padding: '40px 20px 60px',
      position: 'relative',
      overflowY: 'auto',
      overflowX: 'hidden',
      margin: 0,
    }}>
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        backgroundImage: 'url(https://i.postimg.cc/MKFJxbLb/racing-cars.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        opacity: 0.15,
        filter: 'blur(5px)',
        pointerEvents: 'none',
      }}></div>
      
      <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: 'rgba(255,215,0,0.2)',
        padding: '15px 30px',
        borderRadius: '50px',
        border: '3px solid #FFD700',
        fontSize: '28px',
        fontWeight: 'bold',
        color: '#FFD700',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        boxShadow: '0 5px 20px rgba(255,215,0,0.3)',
        zIndex: 100,
      }}>
        <span style={{ fontSize: '32px' }}>🪙</span>
        {coins}
      </div>
      
      <h1 style={{ 
        fontSize: '48px', 
        marginBottom: '60px', 
        textAlign: 'center',
        color: 'white',
        textShadow: '0 5px 20px rgba(0,0,0,0.5)',
        position: 'relative',
        zIndex: 1,
      }}>
        SELECT MAP
      </h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        position: 'relative',
        zIndex: 1,
      }}>
        {maps.map((map) => (
          <div
            key={map.id}
            onClick={() => onSelectMap(map.id)}
            style={{
              background: map.gradient,
              borderRadius: '20px',
              padding: '40px 30px',
              cursor: 'pointer',
              border: '3px solid rgba(255,255,255,0.3)',
              transition: 'all 0.3s',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
              e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ fontSize: '80px', marginBottom: '15px' }}>{map.icon}</div>
            <h2 style={{ 
              fontSize: '32px', 
              color: 'white', 
              margin: '10px 0',
              fontWeight: 'bold',
            }}>
              {map.name}
            </h2>
            <p style={{ 
              color: 'rgba(255,255,255,0.9)', 
              fontSize: '16px',
              margin: '10px 0',
            }}>
              {map.description}
            </p>
            <div style={{
              marginTop: '20px',
              padding: '12px 24px',
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '50px',
              color: 'white',
              fontWeight: 'bold',
              display: 'inline-block',
            }}>
              SELECT →
            </div>
          </div>
        ))}
      </div>
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
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '50px',
        borderRadius: '30px',
        textAlign: 'center',
        border: '5px solid #FFD700',
        boxShadow: '0 30px 100px rgba(255,215,0,0.5)',
        maxWidth: '600px',
        animation: 'popIn 0.5s',
      }}>
        <div style={{ fontSize: '100px', marginBottom: '20px', animation: 'bounce 1s infinite' }}>🏆</div>
        <h2 style={{ fontSize: '72px', color: '#FFD700', margin: '10px 0', textShadow: '0 5px 20px rgba(0,0,0,0.5)' }}>
          CHAMPION!
        </h2>
        <div style={{
          background: 'rgba(255,255,255,0.2)',
          padding: '30px',
          borderRadius: '20px',
          margin: '30px 0',
        }}>
          <p style={{ fontSize: '32px', margin: '15px 0', color: 'white' }}>
            Score: <strong>{score}</strong>
          </p>
          <p style={{ fontSize: '28px', margin: '15px 0', color: 'white' }}>
            Distance: {Math.floor(distance / 100)}km
          </p>
          <p style={{ fontSize: '36px', margin: '15px 0', color: '#FFD700', fontWeight: 'bold' }}>
            🪙 Coins: +{coins}
          </p>
        </div>
        <button 
          onClick={onRestart}
          style={{
            padding: '18px 50px',
            margin: '10px',
            fontSize: '22px',
            borderRadius: '50px',
            border: 'none',
            cursor: 'pointer',
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            color: 'white',
            fontWeight: 'bold',
            boxShadow: '0 10px 30px rgba(245, 87, 108, 0.4)',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          🎮 PLAY AGAIN
        </button>
        <button 
          onClick={onMapSelect}
          style={{
            padding: '18px 50px',
            margin: '10px',
            fontSize: '22px',
            borderRadius: '50px',
            border: 'none',
            cursor: 'pointer',
            background: '#555',
            color: 'white',
            fontWeight: 'bold',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          🗺️ MAPS
        </button>
        <button 
          onClick={onHome}
          style={{
            padding: '18px 50px',
            margin: '10px',
            fontSize: '22px',
            borderRadius: '50px',
            border: 'none',
            cursor: 'pointer',
            background: '#333',
            color: 'white',
            fontWeight: 'bold',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          🏠 HOME
        </button>
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

  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  const W = typeof window !== 'undefined' ? window.innerWidth : 1200;
  const H = typeof window !== 'undefined' ? window.innerHeight : 800;

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
    let localCarX = W / 2 - 25;
    let localEnemies = [];
    let localCoins = [];
    let localSpeed = 0;
    let targetSpeed = 0;
    let keysPressed = {};
    let roadOffset = 0;
    let localScore = 0;
    let localEarnedCoins = 0;
    let trees = [];
    let snowflakes = [];

    const roadLeft = W / 2 - 200;
    const roadRight = W / 2 + 200;

    for (let i = 0; i < 80; i++) {
      trees.push({
        x: Math.random() < 0.5 ? 20 + Math.random() * (roadLeft - 40) : roadRight + 20 + Math.random() * (W - roadRight - 40),
        y: Math.random() * H * 4,
      });
    }

    if (mapType === 'snow') {
      for (let i = 0; i < 150; i++) {
        snowflakes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 2 + 1,
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

    const drawTree = (x, y) => {
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
    };

    const draw = () => {
      ctx.fillStyle = colors.sky;
      ctx.fillRect(0, 0, W, H);
      
      if (mapType === 'snow') {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        snowflakes.forEach(flake => {
          ctx.beginPath();
          ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
          ctx.fill();
        });
      }
      
      ctx.fillStyle = colors.side;
      ctx.fillRect(0, 0, roadLeft, H);
      ctx.fillRect(roadRight, 0, W - roadRight, H);
      
      trees.forEach(tree => {
        const treeY = (tree.y + roadOffset * 3) % (H * 4);
        if (treeY > -50 && treeY < H + 50) {
          drawTree(tree.x, treeY);
        }
      });
      
      ctx.fillStyle = colors.road;
      ctx.fillRect(roadLeft, 0, 400, H);
      
      ctx.fillStyle = '#555';
      ctx.fillRect(roadLeft, 0, 8, H);
      ctx.fillRect(roadRight - 8, 0, 8, H);
      
      ctx.fillStyle = colors.line;
      const laneMarkerHeight = 40;
      const laneMarkerGap = 30;
      for (let lane = 1; lane < 3; lane++) {
        for (let i = -laneMarkerHeight; i < H; i += laneMarkerHeight + laneMarkerGap) {
          const y = i + roadOffset;
          if (y > -laneMarkerHeight && y < H) {
            ctx.fillRect(roadLeft + lane * 133.33, y, 6, laneMarkerHeight);
          }
        }
      }

      if (localDistance > 9700 && localDistance < 10300) {
        const finishY = H - ((localDistance - 9700) * 2);
        if (finishY > -100 && finishY < H) {
          for (let i = 0; i < 20; i++) {
            ctx.fillStyle = i % 2 === 0 ? '#000' : '#fff';
            ctx.fillRect(roadLeft + i * 20, finishY, 20, 40);
          }
          ctx.fillStyle = '#FF0000';
          ctx.font = 'bold 36px Arial';
          ctx.strokeStyle = '#fff';
          ctx.lineWidth = 3;
          ctx.strokeText('🏁 FINISH 🏁', roadLeft + 80, finishY + 28);
          ctx.fillText('🏁 FINISH 🏁', roadLeft + 80, finishY + 28);
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
        ctx.fillRect(0, 0, W, 70);
        
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 24px Arial';
        ctx.fillText(`Score: ${localScore}`, 20, 40);
        ctx.fillText(`Speed: ${Math.floor(localSpeed * 20)} km/h`, W / 2 - 100, 40);
        ctx.fillText(`${Math.floor(localDistance / 100)}km / 100km`, W / 2 + 120, 40);
        
        ctx.fillStyle = '#FFD700';
        ctx.font = 'bold 28px Arial';
        ctx.fillText(`🪙 ${localEarnedCoins}`, W - 130, 42);
      }
    };

    const loop = () => {
      if (screen === "play") {
        if (keysPressed['ArrowUp'] || keysPressed['w'] || keysPressed['W']) {
          targetSpeed = Math.min(targetSpeed + 0.15, 10);
        } else if (keysPressed['ArrowDown'] || keysPressed['s'] || keysPressed['S']) {
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
            if (flake.y > H) {
              flake.y = -10;
              flake.x = Math.random() * W;
            }
          });
        }
        
        setDistance(localDistance);
        setSpeed(localSpeed);

        if (localDistance > 10000) {
          setScore(localScore);
          setEarnedCoins(localEarnedCoins);
          setCoins(prev => prev + localEarnedCoins);
          setShowWinPopup(true);
          setScreen("finish");
          return;
        }

        if (Math.random() < 0.025) {
          const lane = Math.floor(Math.random() * 3);
          const enemyColors = ['#4169E1', '#FF1493', '#32CD32', '#FF8C00', '#9370DB'];
          localEnemies.push({ 
            x: roadLeft + 10 + lane * 133.33, 
            y: -100, 
            w: 50, 
            h: 90,
            color: enemyColors[Math.floor(Math.random() * enemyColors.length)],
            passed: false,
          });
        }

        if (Math.random() < 0.015) {
          const lane = Math.floor(Math.random() * 3);
          localCoins.push({
            x: roadLeft + 10 + lane * 133.33 + 10,
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
        
        if (keysPressed['ArrowLeft'] || keysPressed['a'] || keysPressed['A']) {
          if (localCarX > roadLeft + 10) localCarX -= 5;
        }
        if (keysPressed['ArrowRight'] || keysPressed['d'] || keysPressed['D']) {
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
            if (flake.y > H) {
              flake.y = -10;
              flake.x = Math.random() * W;
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

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      cancelAnimationFrame(rafRef.current);
    };
  }, [screen, mapType, viewAngle, setCoins]);

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
            }}
          />
          <div style={{ 
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(0,0,0,0.85)',
            padding: '50px 100px',
            borderRadius: '30px',
            border: '5px solid #667eea',
            boxShadow: '0 20px 60px rgba(0,0,0,0.8)',
          }}>
            <h1 style={{ 
              fontSize: '150px', 
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
            }}
          />
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(0,0,0,0.8)',
            padding: '12px 25px',
            borderRadius: '15px',
            fontSize: '15px',
            fontWeight: 'bold',
            border: '2px solid rgba(255,255,255,0.3)',
          }}>
            <span style={{ color: '#FFD700' }}>CONTROLS:</span> WASD/Arrows = Drive | W/↑ = Fast | S/↓ = Brake | V = View ({viewAngle})
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
          padding: '40px',
        }}>
          <h2 style={{ fontSize: '80px', color: '#ff4444', margin: '20px', textShadow: '0 5px 20px rgba(255,68,68,0.5)' }}>💥 CRASH!</h2>
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '40px',
            borderRadius: '25px',
            maxWidth: '500px',
            margin: '30px auto',
            border: '3px solid rgba(255,68,68,0.5)',
          }}>
            <p style={{ fontSize: '36px', margin: '20px', color: '#fff' }}>Score: <strong>{score}</strong></p>
            <p style={{ fontSize: '28px', margin: '15px', color: '#fff' }}>Distance: {Math.floor(distance / 100)}km</p>
            <p style={{ fontSize: '28px', margin: '15px', color: '#fff' }}>Max Speed: {Math.floor(speed * 20)} km/h</p>
            <p style={{ fontSize: '32px', margin: '20px', color: '#FFD700', fontWeight: 'bold' }}>🪙 Coins: +{earnedCoins}</p>
          </div>
          <button 
            onClick={restart}
            style={{
              padding: '18px 50px',
              margin: '12px',
              fontSize: '22px',
              borderRadius: '50px',
              border: 'none',
              cursor: 'pointer',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              fontWeight: 'bold',
              boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            🔄 RESTART
          </button>
          <button 
            onClick={onMapSelect}
            style={{
              padding: '18px 50px',
              margin: '12px',
              fontSize: '22px',
              borderRadius: '50px',
              border: 'none',
              cursor: 'pointer',
              background: '#555',
              color: 'white',
              fontWeight: 'bold',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            🗺️ MAPS
          </button>
          <button 
            onClick={onHome}
            style={{
              padding: '18px 50px',
              margin: '12px',
              fontSize: '22px',
              borderRadius: '50px',
              border: 'none',
              cursor: 'pointer',
              background: '#333',
              color: 'white',
              fontWeight: 'bold',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            🏠 HOME
          </button>
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