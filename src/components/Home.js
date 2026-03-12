import React, { useState, useEffect, useRef } from "react";
import bgImage from '../images.jpeg';

// UI_SCALE removed (unused)

// LANGUAGE TRANSLATIONS
const translations = {
    en: {
        title: "RoadX",
        subtitle: "CAR TRAFFIC",
        playNow: "PLAY NOW",
        selectMap: "SELECT MAP",
        settings: "SETTINGS",
        back: "BACK",
        select: "SELECT",
        login: "LOG IN",
        username: "Username",
        password: "Password",
        loginSuccess: "Login Successful!",
        loginError: "Please enter valid credentials",
        googleLogin: "Sign in with Google",
        email: "Email or phone",
        next: "Next",
        invalidEmail: "Enter a valid email",
        googleSuccess: "Signed in with Google!",
        audio: "Audio",
        music: "Music",
        language: "Language",
        on: "ON",
        off: "OFF",
        score: "Score",
        speed: "Speed",
        distance: "Distance",
        coins: "Coins",
        champion: "CHAMPION!",
        playAgain: "PLAY AGAIN",
        mapsButton: "MAPS",
        home: "HOME",
        crash: "CRASH!",
        restart: "RESTART",
        maxSpeed: "Max Speed",
        controls: "CONTROLS",
        go: "GO!",
        congratulations: "CONGRATULATIONS!",
        start: "START",
        levelComplete: "Level Complete!",
        mapsList: {
            highway: { name: "HIGHWAY", desc: "Open Road Racing" },
            city: { name: "CITY", desc: "Urban Streets" },
            desert: { name: "DESERT", desc: "Sandy Adventure" },
            snow: { name: "SNOW", desc: "Icy Challenge" },
            night: { name: "NIGHT", desc: "Midnight Drive" },
            jungle: { name: "JUNGLE", desc: "Tropical Forest" },
            beach: { name: "BEACH", desc: "Ocean Coast" },
            mountain: { name: "MOUNTAIN", desc: "Rocky Peaks" },
        }
    },
    hi: {
        title: "रोडएक्स",
        subtitle: "कार ट्रैफिक",
        playNow: "अभी खेलें",
        selectMap: "मैप चुनें",
        settings: "सेटिंग्स",
        back: "वापस",
        select: "चुनें",
        login: "लॉग इन",
        username: "यूज़रनेम",
        password: "पासवर्ड",
        loginSuccess: "लॉगिन सफल!",
        loginError: "कृपया सही विवरण दर्ज करें",
        googleLogin: "Google के साथ साइन इन करें",
        email: "ईमेल या फ़ोन",
        next: "अगला",
        invalidEmail: "सही ईमेल दर्ज करें",
        googleSuccess: "Google के साथ साइन इन सफल!",
        audio: "ऑडियो",
        music: "संगीत",
        language: "भाषा",
        on: "चालू",
        off: "बंद",
        score: "स्कोर",
        speed: "रफ़्तार",
        distance: "दूरी",
        coins: "सिक्के",
        champion: "विजेता!",
        playAgain: "फिर से खेलें",
        mapsButton: "मैप्स",
        home: "होम",
        crash: "दुर्घटना!",
        restart: "पुनः आरंभ",
        maxSpeed: "अधिकतम रफ़्तार",
        controls: "नियंत्रण",
        go: "शुरू!",
        congratulations: "बधाई हो!",
        start: "शुरू करें",
        levelComplete: "लेवल पूरा!",
        mapsList: {
            highway: { name: "हाईवे", desc: "खुली सड़क रेसिंग" },
            city: { name: "शहर", desc: "शहरी सड़कें" },
            desert: { name: "रेगिस्तान", desc: "रेतीला रोमांच" },
            snow: { name: "बर्फ", desc: "बर्फीली चुनौती" },
            night: { name: "रात", desc: "मध्यरात्रि ड्राइव" },
            jungle: { name: "जंगल", desc: "उष्णकटिबंधीय वन" },
            beach: { name: "समुद्र तट", desc: "समुद्री तट" },
            mountain: { name: "पहाड़", desc: "चट्टानी चोटियाँ" },
        }
    },
    es: {
        title: "RoadX",
        subtitle: "TRÁFICO DE AUTOS",
        playNow: "JUGAR AHORA",
        selectMap: "SELECCIONAR MAPA",
        settings: "AJUSTES",
        back: "ATRÁS",
        select: "SELECCIONAR",
        login: "INICIAR SESIÓN",
        username: "Usuario",
        password: "Password",
        loginSuccess: "¡Inicio de sesión exitoso!",
        loginError: "Por favor, ingrese credenciales válidas",
        googleLogin: "Iniciar sesión con Google",
        email: "Correo o teléfono",
        next: "Siguiente",
        invalidEmail: "Ingrese un correo válido",
        googleSuccess: "¡Inicio de sesión con Google exitoso!",
        audio: "Audio",
        music: "Música",
        language: "Idioma",
        on: "ENCENDIDO",
        off: "APAGADO",
        score: "Puntuación",
        speed: "Velocidad",
        distance: "Distancia",
        coins: "Monedas",
        champion: "¡CAMPEÓN!",
        playAgain: "JUGAR DE NUEVO",
        mapsButton: "MAPAS",
        home: "INICIO",
        crash: "¡CHOQUE!",
        restart: "REINICIAR",
        maxSpeed: "Velocidad Máxima",
        controls: "CONTROLES",
        go: "¡VAMOS!",
        congratulations: "¡FELICITACIONES!",
        start: "INICIAR",
        levelComplete: "¡Nivel completo!",
        mapsList: {
            highway: { name: "AUTOPISTA", desc: "Carreras en Carretera Abierta" },
            city: { name: "CIUDAD", desc: "Calles Urbanas" },
            desert: { name: "DESIERTO", desc: "Aventura en la Arena" },
            snow: { name: "NIEVE", desc: "Desafío Helado" },
            night: { name: "NOCHE", desc: "Conducción Nocturna" },
            jungle: { name: "SELVA", desc: "Bosque Tropical" },
            beach: { name: "PLAYA", desc: "Costa del Océano" },
            mountain: { name: "MONTAÑA", desc: "Picos Rocosos" },
        }
    },
    fr: {
        title: "RoadX",
        subtitle: "CIRCULATION AUTOMOBILE",
        playNow: "JOUER MAINTENANT",
        selectMap: "SÉLECTIONNER LA CARTE",
        settings: "PARAMÈTRES",
        back: "RETOUR",
        select: "SÉLECTIONNER",
        login: "CONNEXION",
        username: "Nom d'utilisateur",
        password: "Mot de passe",
        loginSuccess: "Connexion réussie !",
        loginError: "Veuillez entrer des identifiants valides",
        googleLogin: "Continuer avec Google",
        email: "E-mail ou téléphone",
        next: "Suivant",
        invalidEmail: "Entrez un e-mail valide",
        googleSuccess: "Connexion Google réussie !",
        audio: "Audio",
        music: "Musique",
        language: "Langue",
        on: "ACTIVÉ",
        off: "DÉSACTIVÉ",
        score: "Score",
        speed: "Vitesse",
        distance: "Distance",
        coins: "Pièces",
        champion: "CHAMPION!",
        playAgain: "REJOUER",
        mapsButton: "CARTES",
        home: "ACCUEIL",
        crash: "ACCIDENT!",
        restart: "REDÉMARRER",
        maxSpeed: "Vitesse Maximale",
        controls: "CONTRÔLES",
        go: "PARTEZ!",
        congratulations: "FÉLICITATIONS!",
        start: "COMMENCER",
        levelComplete: "Niveau terminé!",
        mapsList: {
            highway: { name: "AUTOROUTE", desc: "Course sur Route Ouverte" },
            city: { name: "VILLE", desc: "Rues Urbaines" },
            desert: { name: "DÉSERT", desc: "Aventure Sablonneuse" },
            snow: { name: "NEIGE", desc: "Défi Glacé" },
            night: { name: "NUIT", desc: "Conduite de Minuit" },
            jungle: { name: "JUNGLE", desc: "Forêt Tropicale" },
            beach: { name: "PLAGE", desc: "Côte Océanique" },
            mountain: { name: "MONTAGNE", desc: "Pics Rocheux" },
        }
    },
    de: {
        title: "RoadX",
        subtitle: "AUTOVERKEHR",
        playNow: "JETZT SPIELEN",
        selectMap: "KARTE AUSWÄHLEN",
        settings: "EINSTELLUNGEN",
        back: "ZURÜCK",
        select: "AUSWÄHLEN",
        login: "ANMELDEN",
        username: "Benutzername",
        password: "Passwort",
        loginSuccess: "Anmeldung erfolgreich!",
        loginError: "Bitte geben Sie gültige Zugangsdaten ein",
        googleLogin: "Über Google anmelden",
        email: "E-Mail oder Telefon",
        next: "Weiter",
        invalidEmail: "Gültige E-Mail eingeben",
        googleSuccess: "Google-Anmeldung erfolgreich!",
        audio: "Audio",
        music: "Musik",
        language: "Sprache",
        on: "AN",
        off: "AUS",
        score: "Punktzahl",
        speed: "Geschwindigkeit",
        distance: "Entfernung",
        coins: "Münzen",
        champion: "CHAMPION!",
        playAgain: "NOCHMAL SPIELEN",
        mapsButton: "KARTEN",
        home: "STARTSEITE",
        crash: "UNFALL!",
        restart: "NEUSTART",
        maxSpeed: "Höchstgeschwindigkeit",
        controls: "STEUERUNG",
        go: "LOS!",
        congratulations: "GLÜCKWUNSCH!",
        start: "STARTEN",
        levelComplete: "Level abgeschlossen!",
        mapsList: {
            highway: { name: "AUTOBAHN", desc: "Offenes Straßenrennen" },
            city: { name: "STADT", desc: "Stadtstraßen" },
            desert: { name: "WÜSTE", desc: "Sandiges Abenteuer" },
            snow: { name: "SCHNEE", desc: "Eisige Herausforderung" },
            night: { name: "NACHT", desc: "Mitternachtsfahrt" },
            jungle: { name: "DSCHUNGEL", desc: "Tropischer Wald" },
            beach: { name: "STRAND", desc: "Ozeanküste" },
            mountain: { name: "BERG", desc: "Felsige Gipfel" },
        }
    }
};

// REUSABLE ROAD PREVIEW COMPONENT - Fills entire container, matches gameplay "same to same"
const RoadPreview = ({ mapId, opacity = 1 }) => {
    // Exact colors from Game component
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

    const colors = mapColors[mapId] || mapColors.highway;

    // Decoration builders matching Game.drawX functions - Adjusted to avoid road overlap
    const renderDecorations = (side) => {
        const x = side === 'left' ? 5 : 95;
        const scale = 0.35; // Smaller scale to avoid road overlap

        switch (mapId) {
            case 'city':
                return (
                    <g transform={`translate(${x}, 0) scale(${scale})`}>
                        {/* Skyscraper style for City */}
                        <rect x="-40" y="-50" width="80" height="250" fill="#263238" />
                        <rect x="-30" y="-40" width="10" height="10" fill="#81D4FA" />
                        <rect x="-10" y="-40" width="10" height="10" fill="#81D4FA" />
                        <rect x="10" y="-40" width="10" height="10" fill="#81D4FA" />
                        <rect x="20" y="-40" width="10" height="10" fill="#81D4FA" />
                        <rect x="-30" y="-10" width="10" height="10" fill="#81D4FA" />
                        <rect x="10" y="-10" width="10" height="10" fill="#81D4FA" />
                        <rect x="0" y="-70" width="4" height="20" fill="#455A64" /> {/* Antenna */}
                    </g>
                );
            case 'night':
                return (
                    <g transform={`translate(${x}, 0) scale(${scale})`}>
                        {/* Hotel style for Night */}
                        <rect x="-35" y="10" width="70" height="100" fill="#455A64" />
                        <rect x="-25" y="20" width="15" height="12" fill="#FFF176" opacity="0.8" />
                        <rect x="10" y="20" width="15" height="12" fill="#FFF176" opacity="0.8" />
                        <rect x="-15" y="75" width="30" height="25" fill="#1C313A" />
                        <rect x="-30" y="-5" width="60" height="15" fill="#B71C1C" />
                        <text x="0" y="5" fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">HOTEL</text>

                        <g transform="translate(0, 150)">
                            <rect x="-30" y="0" width="60" height="50" fill="#8D6E63" />
                            <path d="M -35 0 L 0 -25 L 35 0 Z" fill="#5D4037" />
                            <rect x="-10" y="30" width="20" height="20" fill="#3E2723" />
                        </g>
                    </g>
                );
            case 'desert':
                return (
                    <g transform={`translate(${x}, 0) scale(${scale})`}>
                        <path d="M -50 40 Q 0 -10 50 40 Z" fill="#DEB887" stroke="#C19A6B" strokeWidth="2" />
                        <g transform="translate(0, 100)">
                            <rect x="-4" y="0" width="8" height="30" fill="#2D5A27" rx="4" />
                            <rect x="-15" y="10" width="12" height="6" fill="#2D5A27" rx="3" />
                            <rect x="3" y="15" width="12" height="6" fill="#2D5A27" rx="3" />
                        </g>
                    </g>
                );
            case 'snow':
                return (
                    <g transform={`translate(${x}, 0) scale(${scale})`}>
                        <path d="M -40 40 L 0 0 L 40 40 Z" fill="white" stroke="#B0E0E6" strokeWidth="2" />
                        <g transform="translate(0, 80)">
                            <circle cx="0" cy="20" r="15" fill="white" stroke="#ccc" />
                            <circle cx="0" cy="0" r="10" fill="white" stroke="#ccc" />
                            <rect x="-8" y="-2" width="16" height="4" fill="#8B4513" />
                        </g>
                    </g>
                );
            case 'jungle':
            case 'highway':
            default:
                return (
                    <g transform={`translate(${x}, 0) scale(${scale})`}>
                        <rect x="-4" y="0" width="8" height="25" fill="#8B4513" />
                        <circle cx="0" cy="0" r="14" fill="#228B22" />
                        <circle cx="-8" cy="5" r="12" fill="#228B22" />
                        <circle cx="8" cy="5" r="12" fill="#228B22" />
                        <g transform="translate(0, 100)">
                            <rect x="-4" y="0" width="8" height="25" fill="#8B4513" />
                            <circle cx="0" cy="0" r="14" fill="#228B22" />
                        </g>
                    </g>
                );
        }
    };

    return (
        <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', pointerEvents: 'none', borderRadius: '18px', opacity }} preserveAspectRatio="none">
            {/* Shoulder/Side Areas */}
            <rect width="100" height="100" fill={colors.side} />

            {/* Road Area (Top-Down Parallel) */}
            <rect x="20" y="0" width="60" height="100" fill={colors.road} />

            {/* Lane Dividers (Two lines for three lanes) */}
            <line x1="40" y1="0" x2="40" y2="100" stroke={colors.line} strokeDasharray="8,8" strokeWidth="1.5">
                <animate attributeName="stroke-dashoffset" from="16" to="0" dur="0.4s" repeatCount="indefinite" />
            </line>
            <line x1="60" y1="0" x2="60" y2="100" stroke={colors.line} strokeDasharray="8,8" strokeWidth="1.5">
                <animate attributeName="stroke-dashoffset" from="16" to="0" dur="0.4s" repeatCount="indefinite" />
            </line>

            {/* Moving Coin */}
            <g>
                <circle cx="70" cy="50" r="4" fill="#FFD700" stroke="#B8860B" strokeWidth="0.5">
                    <animate attributeName="opacity" values="1;0.6;1" dur="1s" repeatCount="indefinite" />
                </circle>
                <animateTransform attributeName="transform" type="translate" from="0 -100" to="0 100" dur="1s" repeatCount="indefinite" />
            </g>

            {/* Moving Decorations */}
            <g>
                <animateTransform attributeName="transform" type="translate" from="0 -100" to="0 100" dur="2s" repeatCount="indefinite" />
                {renderDecorations('left')}
                {renderDecorations('right')}
            </g>
            <g>
                <animateTransform attributeName="transform" type="translate" from="0 0" to="0 200" dur="2s" repeatCount="indefinite" />
                {renderDecorations('left')}
                {renderDecorations('right')}
            </g>
        </svg>
    );
};

// HOME SCREEN WITH ENHANCED VISUALS
function HomeScreen({ onPlay, lang, mapId = 'highway' }) {
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
                    marginBottom: 'clamp(5px, 2vh, 20px)',
                    flex: 'shrink',
                    minHeight: 'fit-content',
                    position: 'relative',
                    zIndex: 20,
                }}>
                    <h1 className="title-3d" style={{
                        fontSize: 'clamp(42px, 12vw, 100px)',
                        margin: '0',
                        color: '#FFD700',
                        fontWeight: '900',
                        fontFamily: '"Bungee", "Helvetica", sans-serif',
                        letterSpacing: 'clamp(2px, 2vw, 10px)',
                        WebkitTextStroke: 'clamp(1px, 0.5vw, 3px) #000',
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
                        lineHeight: '1.1',
                        whiteSpace: 'nowrap',
                    }}>
                        {t.title}
                    </h1>
                    <p style={{
                        fontSize: 'clamp(14px, 4vw, 32px)',
                        color: '#fff',
                        fontWeight: '800',
                        textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                        letterSpacing: 'clamp(2px, 1vw, 6px)',
                        margin: 'clamp(2px, 1vh, 10px) 0 0 0',
                        textTransform: 'uppercase',
                        opacity: 0.9,
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                        whiteSpace: 'nowrap',
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

                        {/* Alloy Wheels - centered at cy=120 so bottom of tire (cy+r=120+24=144≈car bottom) */}
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

                        {/* Clean Headlights - two yellow rounded rects on the car front */}
                        <rect x="38" y="90" width="14" height="16" fill="#FFE000" rx="3" stroke="#FFA500" strokeWidth="1.5" />

                        {/* Taillights - two red rounded rects on the car rear */}
                        <rect x="250" y="90" width="12" height="16" fill="#cc0000" rx="3" stroke="#800000" strokeWidth="1.5" />

                        {/* <rect x="235" y="60" width="8" height="6" fill="#FF8C00" rx="2" stroke="none" /> */}
                        {/* <rect x="50" y="75" width="180" height="8" fill="#FFD700" opacity="0.3" rx="4" stroke="none" /> */}
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
                    top: screenSize.width < 768 ? '30px' : '15px', // Mobile: 30px (Lower), Desktop: 15px (Higher)
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
                        gap: '2px', // Touching text
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
                        marginLeft: 'clamp(-10px, -2vw, -5px)', // Overlap text
                        marginTop: 'clamp(5px, 1.5vh, 10px)',   // Lower slightly
                    }}>👆</span>
                </button>
            </div>

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');
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
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 10px rgba(255,215,0,0.2)); }
          50% { transform: scale(1.03); filter: drop-shadow(0 0 25px rgba(255,215,0,0.5)) brightness(1.1); }
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
              2px 2px 0 #b8860b,
              3px 3px 0 #9a7200,
              5px 6px 10px rgba(0,0,0,0.7) !important;
            -webkit-text-stroke: 1.5px #000 !important;
            letter-spacing: 2px !important;
          }
        }
        @media (max-width: 480px) {
          .title-3d {
            font-size: clamp(40px, 15vw, 60px) !important;
            text-shadow: 
              1px 1px 0 #b8860b, 
              2px 2px 0 #9a7200,
              4px 5px 8px rgba(0,0,0,0.7) !important;
            -webkit-text-stroke: 1px #000 !important;
            letter-spacing: 1px !important;
          }
        }
      `}</style>
        </div>
    );
}

// SETTINGS PANEL - FIXED TO STAY OPEN
function SettingsPanel({ onClose, settings, onSettingsChange, lang }) {
    const t = translations[lang];
    const languages = [
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
        { code: 'es', name: 'Español', flag: '🇪🇸' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    ];

    const handleSettingChange = (newSettings) => {
        onSettingsChange(newSettings);
        // Don't close the settings panel, just update the settings
    };

    const [showLangDropdown, setShowLangDropdown] = useState(false);
    /* Login functionality commented out
    const [isLoginForm, setIsLoginForm] = useState(false);
    const [isGoogleEntry, setIsGoogleEntry] = useState(false); // New: Simulated Google entry
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [googleEmail, setGoogleEmail] = useState(''); // New: Google simulated email
    const [loginError, setLoginError] = useState('');
    const [googleError, setGoogleError] = useState(''); // New: Google simulated error
    const [loginVisible, setLoginVisible] = useState(false); // For animation
    */

    const currentLang = languages.find(l => l.code === settings.language) || languages[0];

    /* Handlers commented out
    const handleLoginSubmit = (e) => {
      e.preventDefault();
      if (loginData.username.trim() === '' || loginData.password.trim() === '') {
        setLoginError(t.loginError);
        return;
      }
      // Simple validation for demo
      if (loginData.username.length < 3) {
        setLoginError("Username too short");
        return;
      }
  
      setLoginError('');
      alert(t.loginSuccess);
      setIsLoginForm(false);
    };
  
    const handleGoogleSubmit = (e) => {
      e.preventDefault();
      if (!googleEmail.includes('@') || googleEmail.length < 5) {
        setGoogleError(t.invalidEmail);
        return;
      }
      setGoogleError('');
      alert(t.googleSuccess);
      setIsGoogleEntry(false);
    };
    */

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            padding: 'clamp(10px, 3vw, 20px)',
            boxSizing: 'border-box',
            animation: 'fadeIn 0.3s',
        }}>
            {/* Dark overlay for readability */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.7)' }}></div>

            <div
                style={{
                    position: 'relative',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    padding: 'clamp(15px, 3vw, 30px)', // Reduced padding
                    borderRadius: 'clamp(15px, 2vw, 25px)',
                    width: '95%',
                    maxWidth: '450px', // Slightly narrower
                    border: '2px solid rgba(255, 255, 255, 0.4)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                    animation: 'scaleIn 0.3s',
                    display: 'flex',
                    flexDirection: 'column',
                    maxHeight: '90vh', // Prevent going off-screen vertical
                }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'clamp(10px, 2vh, 20px)', flexShrink: 0 }}>
                    <h2 style={{
                        fontSize: 'clamp(20px, 5vw, 32px)', // Smaller title
                        color: 'white',
                        margin: 0,
                        textShadow: '0 0 10px rgba(255,255,255,0.5)',
                    }}>
                        {`⚙️ ${t.settings}`}
                    </h2>
                    <button
                        onClick={() => onClose()}
                        style={{
                            background: 'rgba(255,255,255,0.2)',
                            border: 'none',
                            color: 'white',
                            fontSize: 'clamp(18px, 4vw, 24px)',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            width: 'clamp(30px, 7vw, 40px)',
                            height: 'clamp(30px, 7vw, 40px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.2s',
                        }}
                    >
                        {'✕'}
                    </button>
                </div>

                <div style={{
                    background: 'rgba(0, 0, 0, 0.3)',
                    padding: 'clamp(10px, 2vw, 15px)', // Reduced padding
                    borderRadius: '15px',
                    marginBottom: '15px',
                    overflowY: 'auto', // Allow scrolling
                    flex: 1, // Take remaining space
                }} className="custom-scrollbar">
                    {/* Audio and Music vertically stacked */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        marginBottom: '15px',
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            background: 'rgba(255,255,255,0.05)',
                            padding: '8px 12px',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            <span style={{ fontSize: 'clamp(14px, 3vw, 16px)', color: 'white', fontWeight: 'bold' }}>🔊 {t.audio}</span>
                            <button
                                onClick={() => handleSettingChange({ ...settings, audioEnabled: !settings.audioEnabled })}
                                style={{
                                    padding: '4px 12px',
                                    fontSize: '12px',
                                    borderRadius: '15px',
                                    border: '1px solid rgba(255, 255, 255, 0.4)',
                                    cursor: 'pointer',
                                    background: settings.audioEnabled ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                                    color: 'white',
                                    fontWeight: 'bold',
                                }}
                            >
                                {settings.audioEnabled ? t.on : t.off}
                            </button>
                        </div>

                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            background: 'rgba(255,255,255,0.05)',
                            padding: '8px 12px',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            <span style={{ fontSize: 'clamp(14px, 3vw, 16px)', color: 'white', fontWeight: 'bold' }}>🎵 {t.music}</span>
                            <button
                                onClick={() => handleSettingChange({ ...settings, musicEnabled: !settings.musicEnabled })}
                                style={{
                                    padding: '4px 12px',
                                    fontSize: '12px',
                                    borderRadius: '15px',
                                    border: '1px solid rgba(255, 255, 255, 0.4)',
                                    cursor: 'pointer',
                                    background: settings.musicEnabled ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                                    color: 'white',
                                    fontWeight: 'bold',
                                }}
                            >
                                {settings.musicEnabled ? t.on : t.off}
                            </button>
                        </div>
                    </div>

                    <div style={{ marginTop: '10px' }}>
                        <span style={{ fontSize: 'clamp(14px, 3vw, 16px)', color: 'white', fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>
                            🌐 {t.language}
                        </span>

                        <div style={{ position: 'relative', width: '100%', zIndex: 10 }}>
                            <button
                                onClick={() => setShowLangDropdown(!showLangDropdown)}
                                style={{
                                    width: '100%',
                                    padding: '8px 15px', // Reduced height
                                    borderRadius: '12px',
                                    border: '1px solid rgba(255, 255, 255, 0.4)',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    color: 'white',
                                    fontSize: '14px',
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    backdropFilter: 'blur(5px)',
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span style={{ fontSize: '18px' }}>{currentLang.flag}</span>
                                    <span>{currentLang.name}</span>
                                </div>
                                <span style={{ fontSize: '12px', transform: showLangDropdown ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>▼</span>
                            </button>

                            {showLangDropdown && (
                                <div style={{
                                    position: 'relative', // Changed to relative to push content
                                    width: '100%',
                                    marginTop: '10px',
                                    background: 'rgba(20, 20, 30, 0.5)',
                                    backdropFilter: 'blur(10px)',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    padding: '4px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '2px',
                                    zIndex: 1000,
                                    animation: 'slideDown 0.2s ease-out',
                                }}>
                                    {languages.map((l) => (
                                        <div
                                            key={l.code}
                                            onClick={() => {
                                                handleSettingChange({ ...settings, language: l.code });
                                                setShowLangDropdown(false);
                                            }}
                                            style={{
                                                padding: '8px 12px',
                                                borderRadius: '8px',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                color: 'white',
                                                background: settings.language === l.code ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                                                fontSize: '14px',
                                            }}
                                            onMouseEnter={(e) => {
                                                if (settings.language !== l.code) e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                            }}
                                            onMouseLeave={(e) => {
                                                if (settings.language !== l.code) e.currentTarget.style.background = 'transparent';
                                            }}
                                        >
                                            <span style={{ fontSize: '16px' }}>{l.flag}</span>
                                            <span>{l.name}</span>
                                            {settings.language === l.code && <span style={{ marginLeft: 'auto' }}>✓</span>}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
        </div>
    );
}

// MAP SELECTION SCREEN - ENHANCED
function MapSelection({ onSelectMap, coins, settings, onSettingsChange, lang }) {
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
            perspective: '1000px', // For 3D depth
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
                    background: 'rgba(0,0,0,0.5)', // Dark overlay for text readability
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
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                            e.currentTarget.style.borderColor = '#ffffff';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
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
                            textShadow: '0 0 10px rgba(255,255,255,0.7), 0 0 20px rgba(255,255,255,0.5)', // Clean white glow to match theme
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
                                        background: 'rgba(255, 255, 255, 0.1)', // Light glass background
                                        backdropFilter: 'blur(12px)',
                                        borderRadius: '20px',
                                        padding: '10px',
                                        minHeight: 'clamp(180px, 25vh, 250px)',
                                        cursor: 'pointer',
                                        border: '2px solid rgba(255, 255, 255, 0.5)', // Keep strong border
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
        @keyframes elegantGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0% { transform: translate(0, 0); }
          100% { transform: translate(20px, 20px); }
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
          0%, 100% { textShadow: 0 0 20px rgba(255,255,255,0.4); transform: scale(1); }
          50% { textShadow: 0 0 40px rgba(255,255,255,0.6); transform: scale(1.02); }
        }
        @keyframes flagWave {
          0%, 100% { transform: translateY(0) rotateZ(-5deg); }
          50% { transform: translateY(-5px) rotateZ(5deg); }
        }

        @media (max-width: 480px) and (orientation: portrait) {
          .map-grid { grid-template-columns: 1fr !important; padding-left: clamp(12px, 4vw, 20px) !important; padding-right: clamp(12px, 4vw, 20px) !important; max-width: 100% !important; margin: 0 auto !important; }
        }
        @media (min-width: 481px) and (max-width: 768px) {
          .map-grid { grid-template-columns: repeat(2, 1fr) !important; padding-left: clamp(10px, 2vw, 15px) !important; padding-right: clamp(10px, 2vw, 15px) !important; max-width: 100% !important; margin: 0 auto !important; gap: clamp(10px, 1.5vh, 18px) !important; }
        }
        @media (min-width: 769px) and (max-width: 1023px) {
          .map-grid { grid-template-columns: repeat(2, 1fr) !important; padding-left: clamp(20px, 4vw, 40px) !important; padding-right: clamp(20px, 4vw, 40px) !important; max-width: 900px !important; margin: 0 auto !important; }
        }
        @media (min-width: 1024px) {
          .map-grid { grid-template-columns: repeat(3, 1fr) !important; padding-left: 40px !important; padding-right: 40px !important; max-width: 1400px !important; margin: 0 auto !important; }
        }
      `}</style>
        </div>
    );
}

// PER-MAP THEME CONFIG FOR POPUPS
const popupThemes = {
    highway: {
        primary: '#00E5FF', // Neon Cyan (Replacing Red)
        secondary: '#00B8D4',
        glow: 'rgba(0, 229, 255, 0.4)',
        icon: '💥',
        accent: '#FFFFFF'
    },
    city: {
        primary: '#3742FA', // Vibrant Blue
        secondary: '#5352ED',
        glow: 'rgba(55, 66, 250, 0.4)',
        icon: '🏙️',
        accent: '#FFFFFF'
    },
    desert: {
        primary: '#FFA502', // Vibrant Orange
        secondary: '#FF7F50',
        glow: 'rgba(255, 165, 2, 0.4)',
        icon: '🏜️',
        accent: '#FFFFFF'
    },
    snow: {
        primary: '#2F3542', // Deep Slate/Blue
        secondary: '#57606F',
        glow: 'rgba(47, 53, 66, 0.4)',
        icon: '❄️',
        accent: '#FFFFFF'
    },
    night: {
        primary: '#2F3542', // Deep Midnight
        secondary: '#1E2229',
        glow: 'rgba(47, 53, 66, 0.4)',
        icon: '🌙',
        accent: '#FFFFFF'
    },
    jungle: {
        primary: '#2ED573', // Vibrant Green
        secondary: '#7BED9F',
        glow: 'rgba(46, 213, 115, 0.4)',
        icon: '🌴',
        accent: '#FFFFFF'
    },
    beach: {
        primary: '#1E90FF', // Dodge Blue
        secondary: '#70A1FF',
        glow: 'rgba(30, 144, 255, 0.4)',
        icon: '🌊',
        accent: '#FFFFFF'
    },
    mountain: {
        primary: '#57606F', // Cool Grey
        secondary: '#2F3542',
        glow: 'rgba(87, 96, 111, 0.4)',
        icon: '⛰️',
        accent: '#FFFFFF'
    }
};

// CONGRATULATIONS POPUP - Transparent, Clean Design
function CongratulationsPopup({ level, coins, onStart, onMapSelect, onHome, lang, mapType = 'highway' }) {
    const t = translations[lang];
    const kmCompleted = level * 100;
    const isLastLevel = level >= 5;
    const th = popupThemes[mapType] || popupThemes.highway;

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0,
            width: '100vw', height: '100vh',
            background: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(15px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 4000,
            fontFamily: '"Bungee", "Helvetica", sans-serif'
        }}>
            {/* Victory Rays Background */}
            <div style={{
                position: 'absolute',
                width: '150vh', height: '150vh',
                background: `conic-gradient(from 0deg, transparent 0% 10%, ${th.primary}44 10% 20%, transparent 20% 30%, ${th.primary}44 30% 40%, transparent 40% 50%, ${th.primary}44 50% 60%, transparent 60% 70%, ${th.primary}44 70% 80%, transparent 80% 90%, ${th.primary}44 90% 100%)`,
                animation: 'spinRays 20s linear infinite',
                zIndex: -1,
                opacity: 0.6
            }}></div>

            <div style={{
                position: 'relative',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                padding: '40px 30px',
                width: 'min(90%, 420px)',
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(30px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderTop: `4px solid ${th.primary}`,
                borderRadius: '32px',
                boxShadow: `0 30px 60px rgba(0,0,0,0.3), 0 0 40px ${th.primary}22`,
                animation: 'popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}>
                {/* Trophy with Glow */}
                <div style={{
                    fontSize: '80px',
                    marginBottom: '15px',
                    filter: `drop-shadow(0 0 20px ${th.primary})`,
                    animation: 'bounceTrophy 2s ease-in-out infinite'
                }}>🏅</div>

                <h1 style={{
                    fontSize: 'clamp(24px, 6vw, 38px)',
                    fontWeight: '900',
                    color: '#FFF',
                    margin: '0 0 5px 0',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    textShadow: `0 0 10px ${th.primary}aa`
                }}>
                    {t.congratulations}
                </h1>


                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '20px',
                    width: '100%',
                    marginBottom: '40px'
                }}>
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '15px', borderBottom: `2px solid ${th.primary}` }}>
                        <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', marginBottom: '5px' }}>MILESTONE</div>
                        <div style={{ fontSize: '24px', color: '#FFF', fontWeight: 'bold' }}>{kmCompleted}km</div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '15px', borderBottom: `2px solid ${th.secondary}` }}>
                        <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', marginBottom: '5px' }}>REWARD</div>
                        <div style={{ fontSize: '24px', color: th.primary, fontWeight: 'bold' }}>🪙 {coins}</div>
                    </div>
                </div>

                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <button onClick={onStart} style={{
                        width: '100%', padding: '18px',
                        background: `linear-gradient(to bottom, ${th.primary}, ${th.primary}dd)`,
                        border: 'none',
                        color: '#000',
                        fontSize: '20px',
                        fontWeight: '900',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        boxShadow: `0 6px 0 ${th.primary}66`,
                        transition: 'all 0.1s active',
                        textTransform: 'uppercase'
                    }}
                        onMouseDown={e => e.currentTarget.style.transform = 'translateY(3px)'}
                        onMouseUp={e => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        {isLastLevel ? t.playAgain : t.start}
                    </button>

                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button onClick={onMapSelect} style={{
                            flex: 1, padding: '14px',
                            background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(255,255,255,0.1)',
                            color: '#FFF', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold'
                        }}>{t.mapsButton}</button>
                        <button onClick={onHome} style={{
                            flex: 1, padding: '14px',
                            background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.1)',
                            color: '#FFF', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold'
                        }}>{t.home}</button>
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

// WIN POPUP (CHAMPION) - Transparent, Clean Design
function WinPopup({ score, distance, coins, onRestart, onMapSelect, onHome, lang, mapType = 'highway' }) {
    const t = translations[lang];

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0,
            width: '100vw', height: '100vh',
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(20px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 5000,
            fontFamily: '"Bungee", "Helvetica", sans-serif'
        }}>
            <Confetti />

            <div style={{
                position: 'relative',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                padding: '35px 25px',
                width: 'min(85%, 380px)',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(40px)',
                border: '1px solid rgba(255, 215, 0, 0.3)',
                borderRadius: '40px',
                boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
                animation: 'victorySlide 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}>
                <div style={{ fontSize: '80px', marginBottom: '5px', filter: 'drop-shadow(0 0 30px gold)' }}>🏆</div>

                <h1 style={{
                    fontSize: 'clamp(28px, 8vw, 48px)',
                    fontWeight: '900',
                    color: 'gold',
                    margin: '0',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    letterSpacing: '4px',
                    textShadow: '3px 3px 0px #000'
                }}>
                    {t.champion}
                </h1>

                <p style={{
                    fontSize: '14px',
                    color: '#FFF',
                    letterSpacing: '5px',
                    margin: '8px 0 25px 0',
                    fontWeight: 'bold',
                    opacity: 0.7
                }}>
                    WORLD CHAMPION
                </p>

                <div style={{
                    width: '100%',
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: '24px',
                    padding: '25px 20px',
                    marginBottom: '35px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', fontWeight: '900', letterSpacing: '2px' }}>TOTAL SCORE</span>
                        <span style={{ color: 'gold', fontSize: '22px', fontWeight: '950', textShadow: '0 0 10px rgba(255, 215, 0, 0.3)' }}>{score}</span>
                    </div>

                    <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.05)' }}></div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', fontWeight: '900', letterSpacing: '2px' }}>MILESTONES</span>
                        <span style={{ color: '#FFF', fontSize: '22px', fontWeight: '950' }}>500km</span>
                    </div>

                    <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.05)' }}></div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', fontWeight: '900', letterSpacing: '2px' }}>BONUS COINS</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontSize: '20px' }}>🪙</span>
                            <span style={{ color: '#00E5FF', fontSize: '22px', fontWeight: '950', textShadow: '0 0 10px rgba(0, 229, 255, 0.3)' }}>{coins}</span>
                        </div>
                    </div>
                </div>

                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <button onClick={onRestart} style={{
                        width: '100%', padding: '22px',
                        background: 'linear-gradient(to bottom, gold, #DAA520)',
                        border: 'none', color: '#000',
                        fontSize: '24px', fontWeight: '900',
                        borderRadius: '16px', cursor: 'pointer',
                        boxShadow: '0 8px 0 #B8860B'
                    }}>
                        {t.playAgain}
                    </button>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button onClick={onMapSelect} style={{ flex: 1, padding: '15px', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#FFF', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' }}>MAPS</button>
                        <button onClick={onHome} style={{ flex: 1, padding: '15px', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#FFF', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' }}>HOME</button>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes victorySlide { from { transform: translateY(-50px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
            `}</style>
        </div>
    );
}

// Simple CSS Confetti Component
const Confetti = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'hidden' }}>
            {[...Array(30)].map((_, i) => {
                const colors = ['gold', '#FFD700', '#FFBD33', '#FF5733'];
                const left = Math.random() * 100;
                const delay = Math.random() * 5;
                const size = 5 + Math.random() * 10;
                return (
                    <div key={i} style={{
                        position: 'absolute',
                        top: '-20px',
                        left: `${left}%`,
                        width: `${size}px`,
                        height: `${size}px`,
                        background: colors[i % colors.length],
                        borderRadius: i % 2 === 0 ? '50%' : '2px',
                        animation: `confettiFall 5s linear infinite ${delay}s`,
                        opacity: 0.8
                    }}></div>
                );
            })}
            <style>{`
                @keyframes confettiFall {
                    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                    100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
                }
            `}</style>
        </div>
    );
}


// GAME COMPONENT WITH PROPER CAR ENGINE SOUND
// tutorialShown flag removed.



function Game({ onMapSelect, mapType, coins, setCoins, onHome, settings, onSettingsChange, lang }) {
    const t = translations[lang];
    const [screen, setScreen] = useState("tutorial");

    const [count, setCount] = useState(3);
    const [distance, setDistance] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [score, setScore] = useState(0);
    const [viewAngle, setViewAngle] = useState("top");
    const [showWinPopup, setShowWinPopup] = useState(false);
    const [showCongrats, setShowCongrats] = useState(false);
    const [currentLevel, setCurrentLevel] = useState(1); // 1=100km, 2=200km ... 5=500km
    const [earnedCoins, setEarnedCoins] = useState(0);
    const [isMobile, setIsMobile] = useState(() => {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    });

    const [showSettings, setShowSettings] = useState(false);


    // Resume Handler
    const handleSettingsClose = () => {
        setShowSettings(false);
        setIsPaused(false);
        setScreen("countdown");
        setCount(3);
    };
    const [isPaused, setIsPaused] = useState(false);
    const isPausedRef = useRef(false);

    useEffect(() => {
        isPausedRef.current = isPaused;
    }, [isPaused]);

    const canvasRef = useRef(null);
    const rafRef = useRef(null);
    const audioContextRef = useRef(null);
    const engineOscillatorRef = useRef(null);
    const engineGainRef = useRef(null);

    // Persistent Game State Refs
    const stateRef = useRef({
        distance: 0,
        speed: 0,
        targetSpeed: 0,
        carX: 0,
        enemies: [],
        coins: [],
        coinsThisLevel: 0,
        keys: {},
        roadOffset: 0,
        touchStartX: null,
        touchStartY: null, // Track Y for speed control
        touchDirection: null,
        _levelTarget: 10000,
    });

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
            const newW = window.innerWidth;
            setCanvasSize({
                w: newW,
                h: window.innerHeight,
            });

            // Re-check mobile state specifically for resize logic
            const mobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            // We still call checkMobile() to update state for render cycle
            checkMobile();

            // CRITICAL FIX: Recenter car on resize so it doesn't get lost
            const newCarW = mobile ? 40 : 50;
            stateRef.current.carX = (newW / 2) - (newCarW / 2);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Enhanced engine sound system
    useEffect(() => {
        if (!settings.audioEnabled) {
            // Clean up if audio disabled
            if (engineOscillatorRef.current) {
                try {
                    engineOscillatorRef.current.stop();
                } catch (e) { }
                engineOscillatorRef.current = null;
                engineGainRef.current = null;
            }
            return;
        }

        // Initialize audio context
        if (!audioContextRef.current) {
            try {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                audioContextRef.current = new AudioContext();
            } catch (e) {
                console.log("Audio not supported");
                return;
            }
        }

        const ctx = audioContextRef.current;

        // Start engine sound when playing
        if (screen === "play" && speed > 0) {
            if (!engineOscillatorRef.current) {
                try {
                    // Create realistic engine sound using multiple oscillators
                    const osc1 = ctx.createOscillator();
                    const osc2 = ctx.createOscillator();
                    const gainNode = ctx.createGain();
                    const filter = ctx.createBiquadFilter();

                    osc1.type = 'sawtooth';
                    osc2.type = 'triangle';

                    filter.type = 'lowpass';
                    filter.frequency.value = 800;

                    osc1.connect(filter);
                    osc2.connect(filter);
                    filter.connect(gainNode);
                    gainNode.connect(ctx.destination);

                    gainNode.gain.value = 0;
                    osc1.start();
                    osc2.start();

                    engineOscillatorRef.current = { osc1, osc2 };
                    engineGainRef.current = gainNode;
                } catch (e) {
                    console.log("Error starting engine sound:", e);
                }
            }

            // Update engine sound based on speed (realistic car engine pitch)
            if (engineOscillatorRef.current && engineGainRef.current) {
                try {
                    const normalizedSpeed = Math.max(0, Math.min(speed, 10));

                    // Engine frequency: idle at 80Hz, max at 400Hz
                    const baseFreq = 80 + (normalizedSpeed * 32);
                    const harmonic = baseFreq * 1.5;

                    // Volume increases with speed
                    const volume = Math.min(0.12, 0.03 + (normalizedSpeed / 100));

                    engineOscillatorRef.current.osc1.frequency.setValueAtTime(baseFreq, ctx.currentTime);
                    engineOscillatorRef.current.osc2.frequency.setValueAtTime(harmonic, ctx.currentTime);
                    engineGainRef.current.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.1);
                } catch (e) {
                    console.log("Error updating engine sound:", e);
                }
            }
        } else {
            // Stop engine sound when not playing
            if (engineOscillatorRef.current && engineGainRef.current) {
                try {
                    engineGainRef.current.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.2);
                } catch (e) { }
            }
        }

        // Cleanup
        return () => {
            if (screen !== "play" && engineOscillatorRef.current) {
                try {
                    if (engineGainRef.current) {
                        engineGainRef.current.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.2);
                    }
                    setTimeout(() => {
                        if (engineOscillatorRef.current) {
                            try {
                                engineOscillatorRef.current.osc1.stop();
                                engineOscillatorRef.current.osc2.stop();
                            } catch (e) { }
                            engineOscillatorRef.current = null;
                            engineGainRef.current = null;
                        }
                    }, 200);
                } catch (e) { }
            }
        };
    }, [speed, screen, settings.audioEnabled]);

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

    // Keyboard display timer
    useEffect(() => {
        if (screen === "keyboard") {
            const timer = setTimeout(() => {
                setScreen("countdown");
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [screen]);

    // Tutorial auto-advance logic
    useEffect(() => {
        if (screen === "tutorial") {
            const timer = setTimeout(() => {
                setScreen("countdown");
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [screen]);

    // Countdown logic
    useEffect(() => {
        if (screen === "countdown") {
            if (count > 0) {
                const t = setTimeout(() => setCount(c => c - 1), 1000);
                return () => clearTimeout(t);
            } else if (count === 0) {
                const t = setTimeout(() => setScreen("play"), 1000);
                return () => clearTimeout(t);
            }
        }
    }, [screen, count]);

    // Game logic
    useEffect(() => {
        if (screen !== "play" && screen !== "countdown" && screen !== "tutorial") return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        const roadWidth = Math.min(W * 0.85, W < 768 ? 280 : 350);
        const roadLeft = W / 2 - roadWidth / 2;
        const roadRight = W / 2 + roadWidth / 2;
        const laneWidth = roadWidth / 3;

        // Sizes: Mobile(40x75), Desktop(50x90)
        const carW = isMobile ? 40 : 50;
        const carH = isMobile ? 75 : 90;

        // Initialize or continue state
        if (stateRef.current.carX === 0) {
            stateRef.current.carX = roadLeft + laneWidth + (laneWidth - carW) / 2;
            stateRef.current.targetSpeed = 8; // Start with some speed
            stateRef.current.speed = 4;
        }

        const hit = (a, b) => {
            // Improved collision detection including wheels and a small margin for better feel
            const margin = 2;
            return (a.x - margin) < (b.x + b.w + margin) &&
                (a.x + a.w + margin) > (b.x - margin) &&
                (a.y + margin) < (b.y + b.h - margin) &&
                (a.y + a.h - margin) > (b.y + margin);
        };

        const drawCar = (x, y, w, h, color, isPlayer = false, isOpposite = false) => {
            ctx.fillStyle = color;
            ctx.fillRect(x, y, w, h);

            // Windshield
            ctx.fillStyle = isPlayer ? 'rgba(135, 206, 235, 0.7)' : 'rgba(100, 100, 150, 0.7)';
            if (isOpposite) {
                ctx.fillRect(x + 5, y + h - 40, w - 10, h * 0.35); // Windshield at bottom for opposite
            } else {
                ctx.fillRect(x + 5, y + 8, w - 10, h * 0.35); // Windshield at top for normal
            }

            // Wheels
            ctx.fillStyle = '#000';
            ctx.fillRect(x - 4, y + 12, 6, 16);
            ctx.fillRect(x + w - 2, y + 12, 6, 16);
            ctx.fillRect(x - 4, y + h - 28, 6, 16);
            ctx.fillRect(x + w - 2, y + h - 28, 6, 16);

            // Lights
            if (isPlayer) {
                ctx.fillStyle = '#FFFF00'; // Headlights
                ctx.fillRect(x + 8, y - 2, 10, 3);
                ctx.fillRect(x + w - 18, y - 2, 10, 3);
                ctx.fillStyle = '#FF0000'; // Taillights
                ctx.fillRect(x + 8, y + h - 1, 10, 3);
                ctx.fillRect(x + w - 18, y + h - 1, 10, 3);
            } else if (isOpposite) {
                ctx.fillStyle = '#FFFF00'; // Headlights facing down
                ctx.fillRect(x + 8, y + h - 2, 10, 3);
                ctx.fillRect(x + w - 18, y + h - 2, 10, 3);
            } else {
                ctx.fillStyle = '#FF0000'; // Taillights facing up
                ctx.fillRect(x + 8, y + h - 2, 10, 3);
                ctx.fillRect(x + w - 18, y + h - 2, 10, 3);
            }
        };

        const drawTree = (x, y, scale = 1) => {
            // trunk
            ctx.fillStyle = "#8B4513";
            ctx.fillRect(x - 4 * scale, y, 8 * scale, 25 * scale);

            // leaves
            ctx.beginPath();
            ctx.fillStyle = "#228B22";
            ctx.arc(x, y, 14 * scale, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(x - 8 * scale, y + 5 * scale, 12 * scale, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(x + 8 * scale, y + 5 * scale, 12 * scale, 0, Math.PI * 2);
            ctx.fill();
        };

        const drawFinishLine = (y) => {
            const size = 40; // Larger checkered pattern
            const height = 30; // Thicker finish line
            const cols = Math.floor(roadWidth / size);

            // Add glowing effect
            ctx.shadowColor = '#FFD700';
            ctx.shadowBlur = 20;

            // Draw checkered pattern
            for (let i = 0; i < cols; i++) {
                ctx.fillStyle = i % 2 === 0 ? "#fff" : "#000";
                ctx.fillRect(roadLeft + i * size, y, size, height);
            }

            // Reset shadow
            ctx.shadowBlur = 0;

            // Add "FINISH" text above the line
            ctx.fillStyle = '#FFD700';
            ctx.font = 'bold 48px Arial';
            ctx.textAlign = 'center';
            ctx.shadowColor = '#000';
            ctx.shadowBlur = 10;
            ctx.fillText('🏁 FINISH 🏁', W / 2, y - 20);
            ctx.shadowBlur = 0;
            ctx.textAlign = 'left';
        };

        const drawHouse = (x, y, scale = 1) => {
            const w = 60 * scale;
            const h = 50 * scale;
            // Body
            ctx.fillStyle = "#D2B48C";
            ctx.fillRect(x - w / 2, y, w, h);
            // Roof
            ctx.beginPath();
            ctx.fillStyle = "#A52A2A";
            ctx.moveTo(x - w / 2 - 5, y);
            ctx.lineTo(x, y - 25 * scale);
            ctx.lineTo(x + w / 2 + 5, y);
            ctx.fill();
            // Door
            ctx.fillStyle = "#5D4037";
            ctx.fillRect(x - 10 * scale, y + h - 20 * scale, 20 * scale, 20 * scale);
            // Window
            ctx.fillStyle = "#ADD8E6";
            ctx.fillRect(x - 20 * scale, y + 10 * scale, 12 * scale, 12 * scale);
            ctx.fillRect(x + 8 * scale, y + 10 * scale, 12 * scale, 12 * scale);
        };

        const drawHotel = (x, y, scale = 1) => {
            const w = 70 * scale;
            const h = 100 * scale;
            // Body
            ctx.fillStyle = "#78909C";
            ctx.fillRect(x - w / 2, y, w, h);
            // Windows
            ctx.fillStyle = "#FFF176";
            for (let row = 0; row < 4; row++) {
                for (let col = 0; col < 2; col++) {
                    ctx.fillRect(x - 25 * scale + col * 35 * scale, y + 10 * scale + row * 20 * scale, 15 * scale, 12 * scale);
                }
            }
            // Entrance
            ctx.fillStyle = "#263238";
            ctx.fillRect(x - 15 * scale, y + h - 25 * scale, 30 * scale, 25 * scale);
            // Sign
            ctx.fillStyle = "#FF5252";
            ctx.fillRect(x - 30 * scale, y - 15 * scale, 60 * scale, 15 * scale);
            ctx.fillStyle = "#FFF";
            ctx.font = `bold ${10 * scale}px Arial`;
            ctx.textAlign = "center";
            ctx.fillText("HOTEL", x, y - 4 * scale);
        };

        const drawGarden = (x, y, scale = 1) => {
            const w = 80 * scale;
            const h = 60 * scale;
            // Grass patch
            ctx.fillStyle = "#4CAF50";
            ctx.beginPath();
            ctx.ellipse(x, y + h / 2, w / 2, h / 2, 0, 0, Math.PI * 2);
            ctx.fill();
            // Flowers
            const flowerColors = ["#FF4081", "#FFEB3B", "#7C4DFF", "#00BCD4"];
            for (let i = 0; i < 6; i++) {
                const fx = x + (Math.sin(i * 1.1) * 25 * scale);
                const fy = y + 10 * scale + (Math.cos(i * 1.1) * 20 * scale);
                ctx.fillStyle = flowerColors[i % flowerColors.length];
                ctx.beginPath();
                ctx.arc(fx, fy, 4 * scale, 0, Math.PI * 2);
                ctx.fill();
            }
        };

        const drawSkyscraper = (x, y, scale = 1) => {
            const w = 80 * scale;
            const h = 250 * scale;
            // Main structure
            ctx.fillStyle = "#263238";
            ctx.fillRect(x - w / 2, y - h + 50, w, h);
            // Windows (grid)
            ctx.fillStyle = "#81D4FA";
            for (let row = 0; row < 12; row++) {
                for (let col = 0; col < 4; col++) {
                    if ((row + col) % 3 !== 0) { // Some windows lit
                        ctx.fillRect(x - w / 2 + 10 * scale + col * 15 * scale, y - h + 60 + row * 18 * scale, 10 * scale, 10 * scale);
                    }
                }
            }
            // Top detail
            ctx.fillStyle = "#455A64";
            ctx.fillRect(x - w / 4, y - h + 30, w / 2, 20 * scale);
            ctx.fillRect(x - 2, y - h + 10, 4, 20 * scale); // Antenna
            // Red blinking light
            if (Math.floor(Date.now() / 500) % 2 === 0) {
                ctx.fillStyle = "#F44336";
                ctx.beginPath();
                ctx.arc(x, y - h + 10, 3, 0, Math.PI * 2);
                ctx.fill();
            }
        };

        const drawApartment = (x, y, scale = 1) => {
            const w = 90 * scale;
            const h = 120 * scale;
            // Body
            ctx.fillStyle = "#546E7A";
            ctx.fillRect(x - w / 2, y, w, h);
            // Windows
            ctx.fillStyle = "#FFECB3";
            for (let row = 0; row < 4; row++) {
                for (let col = 0; col < 3; col++) {
                    ctx.fillRect(x - w / 2 + 12 * scale + col * 25 * scale, y + 10 * scale + row * 25 * scale, 16 * scale, 18 * scale);
                }
            }
            // Roof detail
            ctx.fillStyle = "#37474F";
            ctx.fillRect(x - w / 2, y - 5, w, 5);
        };

        const drawStreetLight = (x, y, side = "left") => {
            ctx.fillStyle = "#424242";
            // Pole
            ctx.fillRect(side === "left" ? x : x - 5, y - 80, 5, 80);
            // Arm
            ctx.fillRect(side === "left" ? x : x - 30, y - 80, 30, 5);
            // Light head
            ctx.fillStyle = "#616161";
            ctx.fillRect(side === "left" ? x + 20 : x - 30, y - 80, 10, 8);
            // Glow
            const grad = ctx.createRadialGradient(
                side === "left" ? x + 25 : x - 25, y - 72, 0,
                side === "left" ? x + 25 : x - 25, y - 72, 40
            );
            grad.addColorStop(0, "rgba(255, 255, 200, 0.4)");
            grad.addColorStop(1, "rgba(255, 255, 200, 0)");
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(side === "left" ? x + 25 : x - 25, y - 72, 40, 0, Math.PI * 2);
            ctx.fill();
        };

        const drawDune = (x, y, scale = 1) => {
            ctx.fillStyle = "#E1C16E";
            ctx.beginPath();
            ctx.moveTo(x - 100 * scale, y + 40);
            ctx.quadraticCurveTo(x, y - 40 * scale, x + 100 * scale, y + 40);
            ctx.fill();
            // Detail shadow
            ctx.fillStyle = "rgba(0,0,0,0.1)";
            ctx.beginPath();
            ctx.moveTo(x - 60 * scale, y + 20);
            ctx.quadraticCurveTo(x, y - 10 * scale, x + 80 * scale, y + 30);
            ctx.fill();
        };

        const drawCactus = (x, y, scale = 1) => {
            ctx.fillStyle = "#2E7D32";
            // Trunk
            ctx.fillRect(x - 5 * scale, y - 40 * scale, 10 * scale, 40 * scale);
            // Left arm
            ctx.fillRect(x - 15 * scale, y - 30 * scale, 10 * scale, 5 * scale);
            ctx.fillRect(x - 15 * scale, y - 45 * scale, 5 * scale, 15 * scale);
            // Right arm
            ctx.fillRect(x + 5 * scale, y - 25 * scale, 10 * scale, 5 * scale);
            ctx.fillRect(x + 10 * scale, y - 40 * scale, 5 * scale, 15 * scale);
        };

        const drawIceberg = (x, y, scale = 1) => {
            ctx.fillStyle = "#E1F5FE";
            ctx.beginPath();
            ctx.moveTo(x - 40 * scale, y + 20);
            ctx.lineTo(x, y - 50 * scale);
            ctx.lineTo(x + 50 * scale, y + 20);
            ctx.fill();
            // Highlight
            ctx.fillStyle = "#FFFFFF";
            ctx.beginPath();
            ctx.moveTo(x - 10 * scale, y - 20 * scale);
            ctx.lineTo(x, y - 50 * scale);
            ctx.lineTo(x + 20 * scale, y - 10 * scale);
            ctx.fill();
        };

        const drawSnowman = (x, y, scale = 1) => {
            ctx.fillStyle = "#FFF";
            ctx.beginPath();
            ctx.arc(x, y + 10 * scale, 15 * scale, 0, Math.PI * 2); // Bottom
            ctx.fill();
            ctx.beginPath();
            ctx.arc(x, y - 10 * scale, 10 * scale, 0, Math.PI * 2); // Middle
            ctx.fill();
            ctx.beginPath();
            ctx.arc(x, y - 25 * scale, 7 * scale, 0, Math.PI * 2); // Head
            ctx.fill();
            // Hat
            ctx.fillStyle = "#212121";
            ctx.fillRect(x - 8 * scale, y - 32 * scale, 16 * scale, 3 * scale);
            ctx.fillRect(x - 5 * scale, y - 40 * scale, 10 * scale, 8 * scale);
        };

        const drawMountainPeak = (x, y, scale = 1) => {
            ctx.fillStyle = "#455A64";
            ctx.beginPath();
            ctx.moveTo(x - 120 * scale, y + 80);
            ctx.lineTo(x, y - 150 * scale);
            ctx.lineTo(x + 120 * scale, y + 80);
            ctx.fill();
            // Snow cap
            ctx.fillStyle = "#FFF";
            ctx.beginPath();
            ctx.moveTo(x - 40 * scale, y - 100 * scale);
            ctx.lineTo(x, y - 150 * scale);
            ctx.lineTo(x + 40 * scale, y - 100 * scale);
            ctx.lineTo(x + 20 * scale, y - 90 * scale);
            ctx.lineTo(x, y - 105 * scale);
            ctx.lineTo(x - 20 * scale, y - 90 * scale);
            ctx.fill();
        };

        const drawBeachWave = (y) => {
            const time = Date.now() * 0.002;
            ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
            for (let i = 0; i < 5; i++) {
                const x = roadRight + 50 + i * 40 + Math.sin(time + y * 0.01) * 20;
                ctx.beginPath();
                ctx.arc(x, y, 15, 0, Math.PI * 2);
                ctx.fill();
            }
        };

        const drawBoat = (x, y, scale = 1) => {
            // Hull
            ctx.fillStyle = "#795548";
            ctx.beginPath();
            ctx.moveTo(x - 30 * scale, y);
            ctx.lineTo(x + 30 * scale, y);
            ctx.lineTo(x + 20 * scale, y + 15 * scale);
            ctx.lineTo(x - 20 * scale, y + 15 * scale);
            ctx.fill();
            // Sail
            ctx.fillStyle = "#FFF";
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, y - 40 * scale);
            ctx.lineTo(x + 25 * scale, y - 5 * scale);
            ctx.fill();
            // Mast
            ctx.strokeStyle = "#3E2723";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, y - 42 * scale);
            ctx.stroke();
        };

        const drawUmbrella = (x, y, scale = 1) => {
            // Pole
            ctx.strokeStyle = "#BDBDBD";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, y - 30 * scale);
            ctx.stroke();
            // Top
            ctx.fillStyle = (Math.floor(y / 100) % 2 === 0) ? "#F44336" : "#2196F3";
            ctx.beginPath();
            ctx.arc(x, y - 30 * scale, 25 * scale, Math.PI, 0);
            ctx.fill();
        };

        const drawStar = (x, y) => {
            const flicker = Math.sin(Date.now() * 0.005 + x) * 0.5 + 0.5;
            ctx.fillStyle = `rgba(255, 255, 255, ${flicker})`;
            ctx.beginPath();
            ctx.arc(x, y, 1.5, 0, Math.PI * 2);
            ctx.fill();
        };

        const draw = () => {
            const s = stateRef.current;
            ctx.fillStyle = colors.sky;
            ctx.fillRect(0, 0, W, H);

            // Draw Stars and Moon for Night and City maps
            if (mapType === 'night' || mapType === 'city') {
                // time variable removed (unused)
                for (let i = 0; i < 50; i++) {
                    const sx = ((Math.sin(i * 133.7) + 1) / 2) * W;
                    const sy = ((Math.cos(i * 77.3) + 1) / 2) * H * 0.4;
                    drawStar(sx, sy);
                }
                // Moon
                ctx.fillStyle = "rgba(255, 255, 220, 0.8)";
                ctx.beginPath();
                ctx.arc(W - 100, 100, 40, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;
            }

            ctx.fillStyle = colors.side;
            ctx.fillRect(0, 0, roadLeft, H);
            ctx.fillRect(roadRight, 0, W - roadRight, H);

            // Draw roadside elements
            const step = (mapType === 'city' || mapType === 'mountain') ? 250 : 200;
            const offS = isMobile ? 0.3 : 1; // Scaling factor for mobile

            for (let i = -300; i < H + 300; i += step) {
                const y = i + s.roadOffset * 0.7;
                const sideIndex = Math.floor((i + 300) / step);

                switch (mapType) {
                    case 'city':
                        if (sideIndex % 2 === 0) {
                            drawSkyscraper(roadLeft - (100 * offS), y, 1);
                            drawSkyscraper(roadRight + (100 * offS), y, 1);
                        } else {
                            drawApartment(roadLeft - (80 * offS), y, 1);
                            drawApartment(roadRight + (80 * offS), y, 1);
                        }
                        drawStreetLight(roadLeft - (10 * offS), y, "left");
                        drawStreetLight(roadRight + (10 * offS), y, "right");
                        break;

                    case 'desert':
                        if (sideIndex % 2 === 0) {
                            drawDune(roadLeft - (120 * offS), y, 1.2);
                            drawDune(roadRight + (120 * offS), y, 1.2);
                        } else {
                            drawCactus(roadLeft - (60 * offS), y, 1.3);
                            drawCactus(roadRight + (60 * offS), y, 1.3);
                        }
                        break;

                    case 'snow':
                        if (sideIndex % 2 === 0) {
                            drawIceberg(roadLeft - (100 * offS), y, 1.5);
                            drawIceberg(roadRight + (100 * offS), y, 1.5);
                        } else {
                            drawSnowman(roadLeft - (70 * offS), y, 1.2);
                            drawSnowman(roadRight + (70 * offS), y, 1.2);
                        }
                        break;

                    case 'mountain':
                        if (sideIndex % 2 === 0) {
                            drawMountainPeak(roadLeft - (150 * offS), y, 1);
                            drawMountainPeak(roadRight + (150 * offS), y, 1);
                        } else {
                            drawTree(roadLeft - (60 * offS), y, 1.5);
                            drawTree(roadRight + (60 * offS), y, 1.5);
                        }
                        break;

                    case 'beach':
                        drawBeachWave(y);
                        if (sideIndex % 2 === 0) {
                            drawUmbrella(roadLeft - (60 * offS), y, 1);
                        } else {
                            drawTree(roadLeft - (40 * offS), y, 1.2);
                        }
                        if (sideIndex % 3 === 0) {
                            drawBoat(roadRight + (150 * offS), y, 1);
                        }
                        break;

                    case 'night':
                        if (sideIndex % 3 === 0) {
                            drawHotel(roadLeft - (100 * offS), y, 0.9);
                            drawHotel(roadRight + (100 * offS), y, 0.9);
                        } else {
                            drawHouse(roadLeft - (80 * offS), y, 1);
                            drawHouse(roadRight + (80 * offS), y, 1);
                        }
                        drawStreetLight(roadLeft - (10 * offS), y, "left");
                        drawStreetLight(roadRight + (10 * offS), y, "right");
                        break;

                    case 'jungle':
                        drawTree(roadLeft - (50 * offS), y, 1.5);
                        drawTree(roadLeft - (80 * offS), y + 40, 1.2);
                        drawTree(roadRight + (50 * offS), y, 1.5);
                        drawTree(roadRight + (80 * offS), y + 40, 1.2);
                        break;

                    default:
                        const leftType = sideIndex % 4;
                        if (leftType === 0) drawTree(roadLeft - (60 * offS), y, 1.2);
                        else if (leftType === 1) drawHouse(roadLeft - (80 * offS), y, 1);
                        else if (leftType === 2) drawHotel(roadLeft - (100 * offS), y, 0.8);
                        else if (leftType === 3) drawGarden(roadLeft - (80 * offS), y, 1);

                        const rightType = (sideIndex + 2) % 4;
                        if (rightType === 0) drawTree(roadRight + (60 * offS), y, 1.2);
                        else if (rightType === 1) drawHouse(roadRight + (80 * offS), y, 1);
                        else if (rightType === 2) drawHotel(roadRight + (100 * offS), y, 0.8);
                        else if (rightType === 3) drawGarden(roadRight + (80 * offS), y, 1);
                        break;
                }
            }

            // Clip drawing to road area to prevent cars from appearing off-road on resize
            ctx.save();
            ctx.beginPath();
            ctx.rect(roadLeft, 0, roadWidth, H);
            ctx.clip();

            ctx.fillStyle = colors.road;
            ctx.fillRect(roadLeft, 0, roadWidth, H);

            ctx.fillStyle = colors.line;
            const laneMarkerHeight = 40;
            const laneMarkerGap = 30;
            for (let lane = 1; lane < 3; lane++) {
                for (let i = -laneMarkerHeight; i < H; i += laneMarkerHeight + laneMarkerGap) {
                    const y = i + s.roadOffset;
                    if (y > -laneMarkerHeight && y < H) {
                        ctx.fillRect(roadLeft + lane * laneWidth, y, 6, laneMarkerHeight);
                    }
                }
            }

            // Draw finish line ONLY at the final milestone (300000 distance units = 500km)
            {
                const finalTarget = 300000;
                const approachStart = finalTarget - 1000;
                if (s.distance > approachStart && s.distance < finalTarget + 500) {
                    const finishY = H - ((s.distance - approachStart) * 0.3);
                    if (finishY > -50 && finishY < H) {
                        drawFinishLine(finishY);
                    }
                }
            }

            if (screen === "play" || screen === "countdown") {
                s.coins.forEach(c => {
                    ctx.save();
                    ctx.translate(c.x + 15, c.y + 15);
                    ctx.rotate(c.rotation || 0);
                    ctx.fillStyle = '#FFD700';
                    ctx.beginPath();
                    ctx.arc(0, 0, 15, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.restore();
                    if (screen === "play") c.rotation = (c.rotation || 0) + 0.1;
                });
            }

            const playerY = H - (isMobile ? 120 : 150);
            drawCar(s.carX, playerY, carW, carH, '#FF3366', true);

            if (screen === "play" || screen === "countdown") {
                s.enemies.forEach(e => {
                    drawCar(e.x, e.y, e.w, e.h, e.color, false, e.isOpposite);
                });
            }

            ctx.restore(); // End clipping
        };

        const loop = () => {
            if (isPausedRef.current) {
                rafRef.current = requestAnimationFrame(loop);
                return;
            }

            const s = stateRef.current;

            if (screen === "play") {
                if (s.keys['ArrowUp'] || s.keys['w'] || s.keys['W'] || s.touchDirection === 'up') {
                    s.targetSpeed = Math.min(s.targetSpeed + 0.15, 10); // Standard speed
                } else if (s.keys['ArrowDown'] || s.keys['s'] || s.keys['S'] || s.touchDirection === 'down') {
                    s.targetSpeed = Math.max(s.targetSpeed - 0.25, 2);
                } else {
                    if (s.targetSpeed > 5) {
                        s.targetSpeed = Math.max(s.targetSpeed - 0.1, 5);
                    } else if (s.targetSpeed < 5) {
                        s.targetSpeed = Math.min(s.targetSpeed + 0.1, 5);
                    }
                }

                s.speed += (s.targetSpeed - s.speed) * 0.08;
                s.distance += s.speed;
                s.roadOffset = (s.roadOffset + s.speed) % 70;

                setDistance(s.distance);
                setSpeed(s.speed);

                // Milestone check: 10000 units = 100km
                const levelTarget = s._levelTarget || 10000;
                if (s.distance >= levelTarget) {
                    const completedLevel = Math.round(levelTarget / 10000);
                    // Level bonus based on coins collected in THIS level
                    const levelBonus = Math.floor((s.coinsThisLevel || 0) * 5);
                    s.score += levelBonus;
                    setScore(s.score);

                    s.coinsThisLevel = 0; // reset for next milestone scoring
                    setCurrentLevel(completedLevel);
                    if (completedLevel >= 5) {
                        // All 500km done - show final win popup
                        const finalScore = s.score + Math.floor(s.distance / 2);
                        setScore(finalScore);
                        setShowWinPopup(true);
                        setScreen("finish");
                    } else {
                        // Show congratulations popup, pause the game
                        setShowCongrats(true);
                        setScreen("finish");
                    }
                    return;
                }

                // BALANCED TRAFFIC MODE: Slightly lower spawn rate for "thoda easy" feel
                if (Math.random() < 0.11) {
                    const slot = Math.floor(Math.random() * 5); // 0,2,4=lanes, 1,3=markers
                    const enemyColors = ['#4169E1', '#FF1493', '#32CD32', '#FF8C00', '#9370DB', '#00CED1'];

                    let enemyX;
                    let isOpp = false;
                    if (slot % 2 === 0) {
                        const lane = slot / 2;
                        enemyX = roadLeft + lane * laneWidth + (laneWidth - carW) / 2;
                        isOpp = (lane === 0);
                    } else {
                        const marker = (slot + 1) / 2;
                        enemyX = roadLeft + marker * laneWidth - (carW / 2);
                        isOpp = (marker === 1);
                    }

                    // Stricter spacing to ensure "sabhi car saath me nahi aani chahiye"
                    const topEnemies = s.enemies.filter(e => e.y < 350);

                    // logic: limit to 2 enemies at top to prevent impossible walls
                    if (topEnemies.length < 2) {
                        const overlapsHorizontally = topEnemies.some(e => Math.abs(e.x - enemyX) < (carW * 2.0));
                        const laneOccupied = s.enemies.some(e => Math.abs(e.x - enemyX) < (carW * 1.5) && e.y < 450);

                        if (!overlapsHorizontally && !laneOccupied) {
                            // Slower but consistent enemy speeds
                            const baseEnemySpeed = 3 + Math.random() * 1.5;

                            s.enemies.push({
                                x: enemyX, y: -150, w: carW, h: carH,
                                color: enemyColors[Math.floor(Math.random() * enemyColors.length)],
                                passed: false, isOpposite: isOpp,
                                speed: baseEnemySpeed,
                            });
                        }
                    }
                }

                if (Math.random() < 0.015) {
                    const lane = Math.floor(Math.random() * 3);
                    s.coins.push({
                        x: roadLeft + lane * laneWidth + (laneWidth - 30) / 2,
                        y: -50, w: 30, h: 30, rotation: 0,
                    });
                }

                s.coins.forEach(c => {
                    c.y += s.speed + 2;
                    const playerY = H - (isMobile ? 120 : 150);
                    if (hit({ x: s.carX, y: playerY, w: carW, h: carH }, c)) {
                        c.collected = true;
                        s.earnedCoins += 1;
                        s.coinsThisLevel = (s.coinsThisLevel || 0) + 1;
                        setEarnedCoins(s.earnedCoins);
                        setCoins(prev => prev + 1); // Real-time cumulative balance
                    }
                });
                s.coins = s.coins.filter(c => !c.collected && c.y < H + 100);

                for (let i = 0; i < s.enemies.length; i++) {
                    const e = s.enemies[i];
                    if (e.isOpposite) e.y += s.speed + e.speed;
                    else {
                        e.y += (s.speed - e.speed);
                        if (e.y < -200) e.y = -200;
                    }

                    if (!e.passed && e.y > H - 100) {
                        e.passed = true;
                        s.score += 10;
                        setScore(s.score);
                    }

                    const playerY = H - (isMobile ? 120 : 150);
                    if (hit({ x: s.carX, y: playerY, w: carW, h: carH }, e)) {
                        setScore(s.score);
                        setEarnedCoins(s.earnedCoins);
                        setScreen("gameover");
                        return;
                    }
                }
                s.enemies = s.enemies.filter(e => e.y < H + 100);

                if (s.keys['ArrowLeft'] || s.keys['a'] || s.keys['A'] || s.touchDirection === 'left') {
                    if (s.carX > roadLeft + 10) s.carX -= 5;
                }
                if (s.keys['ArrowRight'] || s.keys['d'] || s.keys['D'] || s.touchDirection === 'right') {
                    if (s.carX + carW < roadRight - 10) s.carX += 5;
                }

                if (s.carX < roadLeft + 2 || s.carX + carW > roadRight - 2) {
                    setScore(s.score);
                    setEarnedCoins(s.earnedCoins);
                    setScreen("gameover");
                    return;
                }

            } else if (screen === "countdown" || screen === "tutorial") {
                stateRef.current.roadOffset = (stateRef.current.roadOffset + 5) % 70;

                if (s.keys['ArrowLeft'] || s.keys['a'] || s.keys['A'] || s.touchDirection === 'left') {
                    if (s.carX > roadLeft + 10) s.carX -= 5;
                }
                if (s.keys['ArrowRight'] || s.keys['d'] || s.keys['D'] || s.touchDirection === 'right') {
                    if (s.carX + carW < roadRight - 10) s.carX += 5;
                }
            }

            draw();
            rafRef.current = requestAnimationFrame(loop);
        };

        const handleKeyDown = (e) => {
            stateRef.current.keys[e.key] = true;
            if (e.key === 'v' || e.key === 'V') {
                setViewAngle(prev => (prev === "top" ? "side" : prev === "side" ? "chase" : "top"));
            }
        };

        const handleKeyUp = (e) => {
            stateRef.current.keys[e.key] = false;
        };

        // 4-ZONE TOUCH CONTROLS:
        // Top-Left = Steer Left | Top-Right = Steer Right
        // Bottom-Left = Brake    | Bottom-Right = Speed Up
        const applyTouchZone = (x, y) => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            const s = stateRef.current;
            // Reset steering keys and speed direction
            s.keys['ArrowLeft'] = false;
            s.keys['ArrowRight'] = false;
            s.touchDirection = null;

            if (y > h / 2) {
                // Bottom half: steering only
                if (x < w / 2) {
                    s.keys['ArrowLeft'] = true;
                } else {
                    s.keys['ArrowRight'] = true;
                }
            } else {
                // Top half: brake or speed only
                if (x < w / 2) {
                    s.touchDirection = 'down'; // Brake
                } else {
                    s.touchDirection = 'up'; // Speed up
                }
            }
        };

        const handleTouchStart = (e) => {
            if (screen !== "play" && screen !== "countdown" && screen !== "tutorial") return;
            if (e.target.closest('[data-ctrl]')) return;
            applyTouchZone(e.touches[0].clientX, e.touches[0].clientY);
        };

        const handleTouchMove = (e) => {
            if (screen !== "play" && screen !== "countdown" && screen !== "tutorial") return;
            if (e.target.closest('[data-ctrl]')) return;
            applyTouchZone(e.touches[0].clientX, e.touches[0].clientY);
        };

        const handleTouchEnd = (e) => {
            if (e.target.closest('[data-ctrl]')) return;
            const s = stateRef.current;
            s.keys['ArrowLeft'] = false;
            s.keys['ArrowRight'] = false;
            s.touchDirection = null;
        };

        // MOUSE CONTROLS (Mirrors Touch for Desktop 'Mobile View' testing)
        let mouseDown = false;
        const handleMouseDown = (e) => {
            if (screen !== "play" && screen !== "countdown" && screen !== "tutorial") return;
            mouseDown = true;
            applyTouchZone(e.clientX, e.clientY);
        };

        const handleMouseMove = (e) => {
            if (screen !== "play" && screen !== "countdown" && screen !== "tutorial") return;
            if (!mouseDown) return;
            applyTouchZone(e.clientX, e.clientY);
        };

        const handleMouseUp = (e) => {
            mouseDown = false;
            const s = stateRef.current;
            s.keys['ArrowLeft'] = false;
            s.keys['ArrowRight'] = false;
            s.touchDirection = null;
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
        window.addEventListener("touchstart", handleTouchStart, { passive: false });
        window.addEventListener("touchmove", handleTouchMove, { passive: false });
        window.addEventListener("touchend", handleTouchEnd);

        // Add Mouse Listeners for fallback
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);

        loop(); // Start the game loop

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", handleTouchEnd);

            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [screen, mapType, viewAngle, setCoins, W, H, t, canvasSize.w, canvasSize.h, isMobile]);


    const restart = () => {
        stateRef.current = {
            distance: 0,
            speed: 4,
            targetSpeed: 8,
            carX: (window.innerWidth / 2) - 25,
            enemies: [],
            coins: [],
            score: 0,
            earnedCoins: 0,
            coinsThisLevel: 0,
            keys: {},
            roadOffset: 0,
            touchStartX: null,
            touchDirection: null,
            _levelTarget: 10000,
        };
        setDistance(0);
        setSpeed(0);
        setScore(0);
        setEarnedCoins(0);
        setCount(3);
        setShowWinPopup(false);
        setShowCongrats(false);
        setCurrentLevel(1);
        setScreen("tutorial");
    };

    // Continue to next level after Congratulations popup - preserve car & road state
    const continueNextLevel = () => {
        const nextLevel = currentLevel + 1;
        const s = stateRef.current;
        // Advance the milestone target
        s._levelTarget = nextLevel * 10000;
        // Keep carX, enemies, and coins exactly where they are — no reset
        s.keys = {};
        s.touchDirection = null;
        setShowCongrats(false);
        s.coinsThisLevel = 0;
        setCount(3);
        setScreen("countdown");
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
            {showCongrats && !showWinPopup && (
                <CongratulationsPopup
                    level={currentLevel}
                    coins={earnedCoins}
                    onStart={continueNextLevel}
                    onMapSelect={onMapSelect}
                    onHome={onHome}
                    lang={lang}
                    mapType={mapType}
                />
            )}

            {showWinPopup && (
                <WinPopup
                    score={score}
                    distance={distance}
                    coins={earnedCoins}
                    onRestart={restart}
                    onMapSelect={onMapSelect}
                    onHome={onHome}
                    lang={lang}
                    mapType={mapType}
                />
            )}

            {/* SETTINGS PANEL IN GAME */}
            {showSettings && (
                <SettingsPanel
                    onClose={handleSettingsClose}
                    settings={settings}
                    onSettingsChange={onSettingsChange}
                    lang={lang}
                />
            )}

            {/* PAUSE MENU OVERLAY - Hidden if Settings Open */}
            {isPaused && !showSettings && (
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.7)',
                    backdropFilter: 'blur(5px)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 100,
                    animation: 'fadeIn 0.3s',
                }}>
                    <h2 style={{ fontSize: 'clamp(40px, 8vw, 60px)', color: '#FFD700', textShadow: '0 5px 15px rgba(0,0,0,0.5)', marginBottom: '30px' }}>PAUSED</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: 'clamp(200px, 50vw, 300px)' }}>
                        <button
                            onClick={() => setIsPaused(false)}
                            style={{
                                padding: '15px',
                                fontSize: '20px',
                                borderRadius: '30px',
                                border: 'none',
                                background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
                                color: 'white',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                boxShadow: '0 5px 15px rgba(74, 222, 128, 0.4)',
                            }}
                        >
                            ▶️ RESUME
                        </button>
                        <button
                            onClick={() => { setIsPaused(false); restart(); }}
                            style={{
                                padding: '15px',
                                fontSize: '20px',
                                borderRadius: '30px',
                                border: 'none',
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                color: 'white',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                boxShadow: '0 5px 15px rgba(102, 126, 234, 0.4)',
                            }}
                        >
                            🔄 RESTART
                        </button>
                        <button
                            onClick={() => { setIsPaused(false); onHome(); }}
                            style={{
                                padding: '15px',
                                fontSize: '20px',
                                borderRadius: '30px',
                                border: 'none',
                                background: '#333',
                                color: 'white',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.4)',
                            }}
                        >
                            🏠 HOME
                        </button>
                    </div>
                </div>
            )}

            {true && (
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

                    {/* HUD Rendered ON TOP of Canvas */}
                    {true && (
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            pointerEvents: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            padding: 'clamp(10px, 2vh, 20px)',
                            boxSizing: 'border-box',
                            zIndex: 10,
                        }}>
                            {/* Top Bar */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'flex-start' }}>
                                {/* Left Stats */}
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '5px',
                                    color: '#fff',
                                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                                    fontSize: 'clamp(16px, 3.5vw, 28px)',
                                    fontWeight: 'bold',
                                    textAlign: 'left',
                                    background: 'rgba(0,0,0,0.4)',
                                    padding: '10px 15px',
                                    borderRadius: '15px',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    backdropFilter: 'blur(4px)',
                                }}>
                                    <div style={{ color: '#FFD700' }}>{t.score}: {score}</div>
                                    <div>{t.speed}: {Math.floor(speed * 20)} km/h</div>
                                    <div style={{ fontSize: '0.8em', opacity: 0.9 }}>
                                        {Math.floor(distance / 100)}km / 500km
                                    </div>
                                </div>

                                {/* Right Stats: Settings, Coins & Pause */}
                                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', pointerEvents: 'auto' }}>

                                    {/* SETTINGS BUTTON - Added */}
                                    <button
                                        onClick={() => { setIsPaused(true); setShowSettings(true); }}
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            border: '2px solid rgba(255, 255, 255, 0.5)',
                                            padding: '8px 12px',
                                            borderRadius: '50%',
                                            cursor: 'pointer',
                                            fontSize: 'clamp(16px, 3vw, 24px)',
                                            color: 'white',
                                            fontWeight: 'bold',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center', // Center icon
                                            backdropFilter: 'blur(5px)',
                                            transition: 'all 0.2s',
                                            boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                                            width: 'clamp(40px, 8vw, 50px)', // Match other buttons
                                            height: 'clamp(40px, 8vw, 50px)',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'scale(1.05)';
                                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                                            e.currentTarget.style.borderColor = '#ffffff';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'scale(1)';
                                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                                        }}
                                    >
                                        ⚙️
                                    </button>

                                    <div style={{
                                        background: 'rgba(0,0,0,0.5)',
                                        padding: '8px 15px', // Increased vertical padding
                                        borderRadius: '20px',
                                        color: '#FFD700',
                                        fontWeight: 'bold',
                                        fontSize: 'clamp(16px, 3vw, 24px)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        border: '2px solid rgba(255,215,0,0.5)',
                                        // Removed fixed height to allow expansion
                                        minWidth: 'fit-content',
                                        boxSizing: 'border-box',
                                    }}>
                                        <span style={{ fontSize: '1.2em' }}>🪙</span> {earnedCoins}
                                    </div>

                                    <button
                                        onClick={() => setIsPaused(true)}
                                        style={{
                                            background: 'rgba(255, 68, 68, 0.8)',
                                            border: '2px solid #ff4444',
                                            borderRadius: '50%',
                                            width: 'clamp(40px, 8vw, 50px)',
                                            height: 'clamp(40px, 8vw, 50px)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: 'clamp(20px, 4vw, 24px)',
                                            cursor: 'pointer',
                                            color: 'white',
                                            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                                        }}
                                    >
                                        ⏸️
                                    </button>
                                </div>
                            </div>

                            {/* Controls Hint (Bottom) */}
                            <div style={{
                                alignSelf: 'center',
                                background: 'rgba(0,0,0,0.6)',
                                padding: '5px 15px',
                                borderRadius: '10px',
                                color: '#fff',
                                fontSize: 'clamp(10px, 2vw, 14px)',
                                border: '1px solid rgba(255,255,255,0.2)',
                            }}>
                                <span style={{ color: '#FFD700' }}>{t.controls}:</span> {isMobile ? '⬅ Left | Right ➡ | 🛑 Brake | 🏎️ Speed' : 'WASD/Arrows | V=View'} ({viewAngle})
                            </div>
                        </div>
                    )}

                    {/* Premium "How to Play" Popup overlay */}
                    {isMobile && screen === "tutorial" && (
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                zIndex: 30, // Above everything
                                pointerEvents: 'auto',
                                background: 'linear-gradient(135deg, #0a0f1a 0%, #171630 100%)', // Completely hides old background
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                animation: 'fadeIn 0.5s',
                            }}
                        >
                            {/* Full Screen Content Box */}
                            <div style={{
                                width: '100%',
                                height: '100%',
                                background: 'rgba(255, 255, 255, 0.03)',
                                backdropFilter: 'blur(20px)',
                                WebkitBackdropFilter: 'blur(20px)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: 'clamp(20px, 4vw, 40px)',
                                animation: 'popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                boxSizing: 'border-box'
                            }}>
                                {/* Header */}
                                <h2 style={{
                                    color: '#fff',
                                    margin: '0 0 clamp(16px, 3vh, 30px) 0',
                                    fontSize: 'clamp(24px, 6vw, 36px)',
                                    fontWeight: '900',
                                    letterSpacing: '2px',
                                    textTransform: 'uppercase',
                                    textAlign: 'center',
                                    textShadow: '0 2px 10px rgba(255,255,255,0.3)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px'
                                }}>
                                    <span style={{ fontSize: 'clamp(32px, 8vw, 48px)' }}>🎮</span> HOW TO PLAY
                                </h2>

                                {/* Instructions Grid simulating the full screen touch zones */}
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gridTemplateRows: '1fr 1fr',
                                    gap: 'clamp(12px, 2vw, 24px)',
                                    width: '100%',
                                    flex: 1, // Takes up remaining height
                                    background: 'rgba(0,0,0,0.3)',
                                    borderRadius: '24px',
                                    padding: 'clamp(12px, 2vw, 24px)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    boxSizing: 'border-box'
                                }}>
                                    {/* Top Left - Brake */}
                                    <div style={{
                                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                                        background: 'linear-gradient(135deg, rgba(239, 83, 80, 0.25) 0%, rgba(211, 47, 47, 0.15) 100%)',
                                        border: '2px solid rgba(239, 83, 80, 0.4)'
                                    }}>
                                        <div style={{ fontSize: 'clamp(40px, 10vw, 80px)', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))', marginBottom: '8px' }}>🛑</div>
                                        <div style={{ color: '#EF5350', fontSize: 'clamp(14px, 3vw, 20px)', fontWeight: 'bold', letterSpacing: '2px' }}>BRAKE</div>
                                    </div>
                                    {/* Top Right - Speed */}
                                    <div style={{
                                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                                        background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.25) 0%, rgba(56, 142, 60, 0.15) 100%)',
                                        border: '2px solid rgba(76, 175, 80, 0.4)'
                                    }}>
                                        <div style={{ fontSize: 'clamp(40px, 10vw, 80px)', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))', marginBottom: '8px' }}>🏎️</div>
                                        <div style={{ color: '#4CAF50', fontSize: 'clamp(14px, 3vw, 20px)', fontWeight: 'bold', letterSpacing: '2px' }}>SPEED UP</div>
                                    </div>
                                    {/* Bottom Left - Left */}
                                    <div style={{
                                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                                        background: 'linear-gradient(135deg, rgba(41, 182, 246, 0.25) 0%, rgba(2, 119, 189, 0.15) 100%)',
                                        border: '2px solid rgba(41, 182, 246, 0.4)'
                                    }}>
                                        <div style={{ fontSize: 'clamp(40px, 10vw, 80px)', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))', marginBottom: '8px' }}>👈</div>
                                        <div style={{ color: '#4FC3F7', fontSize: 'clamp(14px, 3vw, 20px)', fontWeight: 'bold', letterSpacing: '2px' }}>LEFT</div>
                                    </div>
                                    {/* Bottom Right - Right */}
                                    <div style={{
                                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                                        background: 'linear-gradient(135deg, rgba(255, 167, 38, 0.25) 0%, rgba(230, 81, 0, 0.15) 100%)',
                                        border: '2px solid rgba(255, 167, 38, 0.4)'
                                    }}>
                                        <div style={{ fontSize: 'clamp(40px, 10vw, 80px)', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))', marginBottom: '8px' }}>👉</div>
                                        <div style={{ color: '#FFB74D', fontSize: 'clamp(14px, 3vw, 20px)', fontWeight: 'bold', letterSpacing: '2px' }}>RIGHT</div>
                                    </div>
                                </div>

                                <p style={{
                                    color: 'rgba(255,255,255,0.6)',
                                    fontSize: 'clamp(14px, 3vw, 20px)',
                                    fontWeight: '600',
                                    letterSpacing: '2px',
                                    margin: 'clamp(16px, 3vh, 30px) 0 0 0',
                                    textAlign: 'center',
                                    animation: 'blink 1.5s infinite'
                                }}>
                                    RACE STARTING...
                                </p>
                            </div>
                        </div>
                    )}

                    {screen === "countdown" && count >= 0 && (
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            fontSize: 'clamp(80px, 25vw, 200px)',
                            color: count === 0 ? '#4ade80' : '#FFD700',
                            textShadow: '0 10px 40px rgba(0,0,0,0.8), 0 0 60px rgba(255,215,0,0.8)',
                            fontWeight: 'bold',
                            animation: 'pulse 1s ease-in-out',
                            zIndex: 20,
                        }}>
                            {count === 0 ? t.go : count}
                        </div>
                    )}
                </div>
            )}

            {screen === "gameover" && (
                <div style={{
                    position: 'fixed',
                    top: 0, left: 0,
                    width: '100vw', height: '100vh',
                    background: 'rgba(0, 0, 0, 0.3)',
                    backdropFilter: 'blur(25px)',
                    zIndex: 4000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: '"Bungee", "Helvetica", sans-serif'
                }}>
                    {/* Background Danger Glow */}
                    <div style={{
                        position: 'absolute',
                        width: '100%', height: '100%',
                        background: `radial-gradient(circle, ${(popupThemes[mapType] || popupThemes.highway).primary}33 0%, transparent 70%)`,
                        animation: 'pulseDanger 1.5s infinite alternate',
                        zIndex: 0
                    }}></div>

                    {/* Main UI Card */}
                    <div style={{
                        position: 'relative',
                        zIndex: 1,
                        width: 'min(90%, 450px)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(40px)',
                        border: `1px solid rgba(255, 255, 255, 0.1)`,
                        borderTop: `6px solid ${(popupThemes[mapType] || popupThemes.highway).primary}`,
                        borderRadius: '32px',
                        padding: '40px 30px',
                        boxShadow: `0 50px 100px rgba(0,0,0,0.5)`,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        animation: 'crashIn 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28)'
                    }}>
                        {/* Map Icon Badge */}
                        <div style={{
                            width: '90px',
                            height: '90px',
                            background: `linear-gradient(135deg, ${(popupThemes[mapType] || popupThemes.highway).primary}, ${(popupThemes[mapType] || popupThemes.highway).secondary})`,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '48px',
                            marginBottom: '20px',
                            border: `4px solid ${(popupThemes[mapType] || popupThemes.highway).accent}44`,
                            animation: 'shakeIcon 3s infinite'
                        }}>
                            {(popupThemes[mapType] || popupThemes.highway).icon}
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(44px, 12vw, 70px)',
                            fontWeight: '950',
                            margin: '0',
                            color: '#FFF',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            textAlign: 'center',
                            textShadow: `0 0 20px ${(popupThemes[mapType] || popupThemes.highway).primary}aa`,
                            animation: 'glitchText 2s infinite'
                        }}>
                            {t.crash}
                        </h1>

                        <p style={{
                            color: 'rgba(255,255,255,0.5)',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            letterSpacing: '5px',
                            margin: '5px 0 35px 0',
                            textTransform: 'uppercase'
                        }}>
                            CAR REPAIR NEEDED
                        </p>

                        {/* Stats Row */}
                        <div style={{
                            width: '100%',
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '15px',
                            marginBottom: '40px'
                        }}>
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '16px', borderLeft: `6px solid ${(popupThemes[mapType] || popupThemes.highway).primary}` }}>
                                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', fontWeight: 'bold' }}>FINAL SCORE</div>
                                <div style={{ fontSize: '28px', color: '#FFF', fontWeight: 'black' }}>{score}</div>
                            </div>
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '16px', borderLeft: `6px solid #FFD700` }}>
                                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', fontWeight: 'bold' }}>COINS LOST</div>
                                <div style={{ fontSize: '28px', color: '#FFD700', fontWeight: 'black' }}>🪙 {earnedCoins}</div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <button
                                onClick={restart}
                                style={{
                                    width: '100%',
                                    padding: '20px',
                                    background: `linear-gradient(to bottom, ${(popupThemes[mapType] || popupThemes.highway).primary}, ${(popupThemes[mapType] || popupThemes.highway).secondary})`,
                                    border: 'none',
                                    borderRadius: '16px',
                                    color: (popupThemes[mapType] || popupThemes.highway).accent,
                                    fontSize: '22px',
                                    fontWeight: '900',
                                    cursor: 'pointer',
                                    boxShadow: `0 6px 0 ${(popupThemes[mapType] || popupThemes.highway).primary}88`,
                                    transition: 'transform 0.1s'
                                }}
                                onMouseDown={e => e.currentTarget.style.transform = 'translateY(3px)'}
                                onMouseUp={e => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                {t.restart.toUpperCase()}
                            </button>

                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button onClick={onMapSelect} style={{ flex: 1, padding: '15px', background: 'rgba(255, 255, 255, 0.05)', border: '2px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', color: '#FFF', fontWeight: 'bold', cursor: 'pointer' }}>{t.mapsButton}</button>
                                <button onClick={onHome} style={{ flex: 1, padding: '15px', background: 'rgba(255, 255, 255, 0.05)', border: '2px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', color: '#FFF', fontWeight: 'bold', cursor: 'pointer' }}>{t.home}</button>
                            </div>
                        </div>
                    </div>

                    <style>{`
                        @keyframes pulseDanger { from { opacity: 0.3; } to { opacity: 0.7; } }
                        @keyframes crashIn { from { transform: scale(1.5) rotate(5deg); opacity: 0; } to { transform: scale(1) rotate(0); opacity: 1; } }
                        @keyframes shakeIcon { 0%, 100% { transform: rotate(0deg); } 25% { transform: rotate(5deg); } 75% { transform: rotate(-5deg); } }
                        @keyframes glitchText {
                            0% { transform: skew(0deg); }
                            20% { transform: skew(3deg); }
                            30% { transform: skew(-3deg); }
                            40% { transform: skew(0deg); }
                            100% { transform: skew(0deg); }
                        }
                    `}</style>
                </div>
            )}

            <style>{`
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.1); }
        }
        @keyframes tutorialPulse {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        @keyframes blink {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      `}</style>
        </div>
    );
}

const Home = () => {
    const [screen, setScreen] = useState("home");
    const [selectedMap, setSelectedMap] = useState("highway");
    const [coins, setCoins] = useState(() => {
        const savedCoins = sessionStorage.getItem('collectedCoins');
        return savedCoins ? parseInt(savedCoins, 10) : 0;
    });

    useEffect(() => {
        sessionStorage.setItem('collectedCoins', coins);
    }, [coins]);

    const [settings, setSettings] = useState({
        audioEnabled: true,
        musicEnabled: true,
        language: 'en',
    });

    const handleSelectMap = (mapType) => {
        setSelectedMap(mapType);
        setScreen("game");
    };

    return (
        <>
            {screen === "home" && <HomeScreen onPlay={() => setScreen("mapselect")} lang={settings.language} mapId={selectedMap} />}
            {screen === "mapselect" && (
                <MapSelection
                    onSelectMap={handleSelectMap}
                    coins={coins}
                    settings={settings}
                    onSettingsChange={setSettings}
                    lang={settings.language}
                />
            )}
            {screen === "game" && (
                <Game
                    onMapSelect={() => setScreen("mapselect")}
                    mapType={selectedMap}
                    coins={coins}
                    setCoins={setCoins}
                    onHome={() => setScreen("home")}
                    settings={settings}
                    onSettingsChange={setSettings}
                    lang={settings.language}
                />
            )}
        </>
    );
}

export default Home;
