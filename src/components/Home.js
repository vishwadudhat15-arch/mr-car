import React, { useState, useEffect, useRef } from "react";
import bgImage from '../images.jpeg';

const UI_SCALE = Math.min(1.5, window.innerWidth / 1920);

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

// HOME SCREEN WITH ENHANCED VISUALS
function HomeScreen({ onPlay, lang }) {
    const t = translations[lang];
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
                <div className="building building-1" style={{ width: '120px', height: '250px', background: 'linear-gradient(180deg, #FF6B6B 0%, #C92A2A 100%)', borderRadius: '10px 10px 0 0', boxShadow: '0 5px 20px rgba(0,0,0,0.3)' }}></div>
                <div className="building building-2" style={{ width: '100px', height: '180px', background: 'linear-gradient(180deg, #4ECDC4 0%, #1A535C 100%)', borderRadius: '10px 10px 0 0', boxShadow: '0 5px 20px rgba(0,0,0,0.3)' }}></div>
                <div className="building building-3" style={{ width: '140px', height: '300px', background: 'linear-gradient(180deg, #FFE66D 0%, #FF6B35 100%)', borderRadius: '10px 10px 0 0', boxShadow: '0 5px 20px rgba(0,0,0,0.3)' }}></div>
                <div className="building building-4" style={{ width: '110px', height: '220px', background: 'linear-gradient(180deg, #A8DADC 0%, #457B9D 100%)', borderRadius: '10px 10px 0 0', boxShadow: '0 5px 20px rgba(0,0,0,0.3)' }}></div>
                <div className="building building-5" style={{ width: '130px', height: '270px', background: 'linear-gradient(180deg, #F1FAEE 0%, #1D3557 100%)', borderRadius: '10px 10px 0 0', boxShadow: '0 5px 20px rgba(0,0,0,0.3)' }}></div>
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
                    <h1 style={{
                        fontSize: 'clamp(32px, 10vw, 90px)',
                        margin: '0',
                        color: '#FFD700',
                        textShadow: '4px 4px 0px #000, 8px 8px 0px rgba(0,0,0,0.3), 0 0 30px rgba(255,215,0,0.6)',
                        fontWeight: '900',
                        letterSpacing: 'clamp(1px, 1vw, 8px)',
                        WebkitTextStroke: '3px #000',
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
                }}>
                    <svg width="clamp(120px, 40vw, 400px)" height="clamp(60px, 20vw, 200px)" viewBox="0 0 300 150" style={{ transform: 'scaleX(-1)', width: '100%', height: 'auto', shapeRendering: 'geometricPrecision' }} preserveAspectRatio="xMidYMid meet">
                        <rect x="40" y="70" width="220" height="60" fill="#FFA500" rx="12" stroke="none" />
                        <path d="M 80 70 L 120 32 L 200 32 L 230 70 Z" fill="#FF8C00" stroke="none" />
                        <path d="M 85 70 L 120 36 L 200 36 L 225 70 Z" fill="#FFAA33" opacity="0.5" stroke="none" />
                        <path d="M 92 68 L 122 42 L 178 42 L 208 68 Z" fill="#87CEEB" opacity="0.8" stroke="#555" strokeWidth="2" />
                        <line x1="150" y1="42" x2="150" y2="68" stroke="#555" strokeWidth="2.5" />
                        <rect x="42" y="115" width="216" height="15" fill="#000" opacity="0.2" rx="8" stroke="none" />
                        <ellipse cx="90" cy="128" rx="32" ry="18" fill="#222" stroke="none" />
                        <ellipse cx="210" cy="128" rx="32" ry="18" fill="#222" stroke="none" />
                        <circle cx="90" cy="130" r="25" fill="#1a1a1a" stroke="none" />
                        <circle cx="90" cy="130" r="18" fill="#333" stroke="none" />
                        <circle cx="90" cy="130" r="10" fill="#555" stroke="none" />
                        <circle cx="90" cy="130" r="4" fill="#777" stroke="none" />
                        <circle cx="210" cy="130" r="25" fill="#1a1a1a" stroke="none" />
                        <circle cx="210" cy="130" r="18" fill="#333" stroke="none" />
                        <circle cx="210" cy="130" r="10" fill="#555" stroke="none" />
                        <circle cx="210" cy="130" r="4" fill="#777" stroke="none" />
                        <rect x="238" y="76" width="18" height="48" fill="#FF6347" rx="4" stroke="none" />
                        <ellipse cx="253" cy="86" rx="7" ry="11" fill="#FFFF00" stroke="none" />
                        <ellipse cx="253" cy="86" rx="4" ry="7" fill="#FFFFAA" stroke="none" />
                        <ellipse cx="253" cy="109" rx="7" ry="11" fill="#FFFF00" stroke="none" />
                        <ellipse cx="253" cy="109" rx="4" ry="7" fill="#FFFFAA" stroke="none" />
                        <line x1="148" y1="75" x2="148" y2="125" stroke="#D88400" strokeWidth="2" opacity="0.6" />
                        <rect x="235" y="60" width="8" height="6" fill="#FF8C00" rx="2" stroke="none" />
                        <rect x="50" y="75" width="180" height="8" fill="#FFD700" opacity="0.3" rx="4" stroke="none" />
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
          0%, 100% { textShadow: 4px 4px 0px #000, 8px 8px 0px rgba(0,0,0,0.3), 0 0 30px rgba(255,215,0,0.6); }
          50% { textShadow: 4px 4px 0px #000, 8px 8px 0px rgba(0,0,0,0.3), 0 0 50px rgba(255,215,0,1); }
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

    const maps = [
        { id: 'highway', icon: '🛣️', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
        { id: 'city', icon: '🌃', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
        { id: 'desert', icon: '🏜️', gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' },
        { id: 'snow', icon: '🏔️', gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)' },
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
                                        e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
                                        e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.6)';
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'; // Brighter on hover
                                        e.currentTarget.style.borderColor = '#ffffff';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                        e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.4)';
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                                    }}
                                >
                                    <div style={{ fontSize: 'clamp(50px, 10vw, 90px)', marginBottom: 'clamp(8px, 1.5vh, 18px)' }}>{map.icon}</div>
                                    <h2 style={{
                                        fontSize: 'clamp(18px, 3.5vw, 36px)',
                                        color: 'white',
                                        margin: 'clamp(6px, 1vh, 12px) 0',
                                        fontWeight: 'bold',
                                        letterSpacing: '1px',
                                        textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                                    }}>
                                        {t.mapsList[map.id].name}
                                    </h2>
                                    <p style={{
                                        color: 'rgba(255,255,255,0.8)',
                                        fontSize: 'clamp(12px, 2.5vw, 18px)',
                                        margin: 'clamp(6px, 1vh, 12px) 0',
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
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                                    }}>
                                        {t.select} →
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

// WIN POPUP
function WinPopup({ score, distance, coins, onRestart, onMapSelect, onHome, lang }) {
    const t = translations[lang];

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
                <div style={{ fontSize: 'clamp(30px, 8vw, 60px)', marginBottom: 'clamp(5px, 1vh, 10px)', animation: 'bounce 1s infinite' }}>🏆</div>
                <h2 style={{ fontSize: 'clamp(24px, 7vw, 40px)', color: '#FFD700', margin: 'clamp(2px, 0.5vh, 5px) 0', textShadow: '0 5px 20px rgba(0,0,0,0.5)' }}>
                    {t.champion}
                </h2>
                <div style={{
                    background: 'rgba(255,255,255,0.2)',
                    padding: 'clamp(10px, 2vw, 20px)',
                    borderRadius: 'clamp(12px, 2vw, 18px)',
                    margin: 'clamp(10px, 2vh, 15px) 0',
                }}>
                    <p style={{ fontSize: 'clamp(14px, 4vw, 24px)', margin: 'clamp(4px, 1vh, 10px) 0', color: '#FFD700' }}>
                        {t.score}: <strong style={{ color: '#FFD700', textShadow: '0 0 10px rgba(255,215,0,0.8)' }}>{score}</strong>
                    </p>
                    <p style={{ fontSize: 'clamp(12px, 3.5vw, 20px)', margin: 'clamp(4px, 1vh, 10px) 0', color: 'white' }}>
                        {t.distance}: <strong style={{ color: '#FFD700' }}>{Math.floor(distance / 100)}km / 100km</strong>
                    </p>
                    <p style={{ fontSize: 'clamp(14px, 4vw, 28px)', margin: 'clamp(4px, 1vh, 10px) 0', color: '#FFD700', fontWeight: 'bold' }}>
                        🪙 {t.coins}: +{coins}
                    </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(5px, 1vh, 8px)', alignItems: 'center' }}>
                    <button onClick={onRestart} style={{ padding: 'clamp(8px, 1.5vh, 14px) clamp(20px, 4vw, 40px)', fontSize: 'clamp(12px, 2.5vw, 18px)', borderRadius: '50px', border: 'none', cursor: 'pointer', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: 'white', fontWeight: 'bold', boxShadow: '0 10px 30px rgba(245, 87, 108, 0.4)', transition: 'transform 0.2s', width: '100%', maxWidth: '250px' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                        🎮 {t.playAgain}
                    </button>
                    <button onClick={onMapSelect} style={{ padding: 'clamp(8px, 1.5vh, 14px) clamp(20px, 4vw, 40px)', fontSize: 'clamp(12px, 2.5vw, 18px)', borderRadius: '50px', border: 'none', cursor: 'pointer', background: '#555', color: 'white', fontWeight: 'bold', transition: 'transform 0.2s', width: '100%', maxWidth: '250px' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                        🗺️ {t.mapsButton}
                    </button>
                    <button onClick={onHome} style={{ padding: 'clamp(8px, 1.5vh, 14px) clamp(20px, 4vw, 40px)', fontSize: 'clamp(12px, 2.5vw, 18px)', borderRadius: '50px', border: 'none', cursor: 'pointer', background: '#333', color: 'white', fontWeight: 'bold', transition: 'transform 0.2s', width: '100%', maxWidth: '250px' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                        🏠 {t.home}
                    </button>
                </div>
            </div>
            <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes popIn { 0% { transform: scale(0.5); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
      `}</style>
        </div>
    );
}


// GAME COMPONENT WITH PROPER CAR ENGINE SOUND
function Game({ onMapSelect, mapType, coins, setCoins, onHome, settings, onSettingsChange, lang }) {
    const t = translations[lang];
    const [screen, setScreen] = useState("countdown");

    const [count, setCount] = useState(3);
    const [distance, setDistance] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [score, setScore] = useState(0);
    const [viewAngle, setViewAngle] = useState("top");
    const [showWinPopup, setShowWinPopup] = useState(false);
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
        score: 0,
        earnedCoins: 0,
        keys: {},
        roadOffset: 0,
        roadOffset: 0,
        touchStartX: null,
        touchStartY: null, // Track Y for speed control
        touchDirection: null,
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
        if (screen !== "play" && screen !== "countdown") return;

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
                const time = Date.now() * 0.0001;
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

            if (s.distance > 9000 && s.distance < 10500) {
                const finishY = H - ((s.distance - 9000) * 0.3);
                if (finishY > -50 && finishY < H) {
                    drawFinishLine(finishY);
                }
            }

            if (screen === "play") {
                s.coins.forEach(c => {
                    ctx.save();
                    ctx.translate(c.x + 15, c.y + 15);
                    ctx.rotate(c.rotation || 0);
                    ctx.fillStyle = '#FFD700';
                    ctx.beginPath();
                    ctx.arc(0, 0, 15, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.restore();
                    c.rotation = (c.rotation || 0) + 0.1;
                });
            }

            const playerY = H - (isMobile ? 120 : 150);
            drawCar(s.carX, playerY, carW, carH, '#FF3366', true);

            if (screen === "play") {
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
                    s.targetSpeed = Math.min(s.targetSpeed + 0.15, 10);
                } else if (s.keys['ArrowDown'] || s.keys['s'] || s.keys['S'] || s.touchDirection === 'down') {
                    s.targetSpeed = Math.max(s.targetSpeed - 0.2, 2);
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

                if (s.distance > 10000) {
                    const finalScore = s.score + Math.floor(s.distance / 2) + s.earnedCoins * 5;
                    setScore(finalScore);
                    setEarnedCoins(s.earnedCoins);
                    setCoins(prev => prev + s.earnedCoins);
                    setShowWinPopup(true);
                    setScreen("finish");
                    return;
                }

                if (Math.random() < 0.07) {
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

                    // logic: don't block more than 2 slots at top, and ensure horizontal staggering
                    if (topEnemies.length < 2) {
                        const overlapsHorizontally = topEnemies.some(e => Math.abs(e.x - enemyX) < (carW * 2.2));
                        const laneOccupied = s.enemies.some(e => Math.abs(e.x - enemyX) < (carW * 1.5) && e.y < 450);

                        if (!overlapsHorizontally && !laneOccupied) {
                            s.enemies.push({
                                x: enemyX, y: -150, w: carW, h: carH,
                                color: enemyColors[Math.floor(Math.random() * enemyColors.length)],
                                passed: false, isOpposite: isOpp, speed: 1 + Math.random() * 2,
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
                        setEarnedCoins(s.earnedCoins);
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
                        setCoins(prev => prev + s.earnedCoins);
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
                    setCoins(prev => prev + s.earnedCoins);
                    setScreen("gameover");
                    return;
                }

            } else if (screen === "countdown") {
                stateRef.current.roadOffset = (stateRef.current.roadOffset + 5) % 70;
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

        const handleTouchStart = (e) => {
            if (screen !== "play") return;
            const touchX = e.touches[0].clientX;
            const touchY = e.touches[0].clientY;
            const w = window.innerWidth;

            // Tap Steering Logic
            if (touchX < w / 2) {
                stateRef.current.keys['ArrowLeft'] = true;
                stateRef.current.keys['ArrowRight'] = false;
            } else {
                stateRef.current.keys['ArrowRight'] = true;
                stateRef.current.keys['ArrowLeft'] = false;
            }

            // Initialize Swipe Tracking for Speed
            stateRef.current.touchStartY = touchY;
        };

        const handleTouchMove = (e) => {
            if (screen !== "play") return;
            const touchX = e.touches[0].clientX;
            const touchY = e.touches[0].clientY;
            const w = window.innerWidth;
            const s = stateRef.current;

            // Maintain Steering on Drag
            if (touchX < w / 2) {
                s.keys['ArrowLeft'] = true;
                s.keys['ArrowRight'] = false;
            } else {
                s.keys['ArrowRight'] = true;
                s.keys['ArrowLeft'] = false;
            }

            // Restore Vertical Swipe for Speed (Age/Piche)
            if (s.touchStartY !== null) {
                const diffY = touchY - s.touchStartY;
                if (diffY < -30) {
                    s.touchDirection = 'up'; // Swipe Up -> Accelerate
                } else if (diffY > 30) {
                    s.touchDirection = 'down'; // Swipe Down -> Brake
                } else {
                    s.touchDirection = null;
                }
            }
        };

        const handleTouchEnd = (e) => {
            const s = stateRef.current;
            s.keys['ArrowLeft'] = false;
            s.keys['ArrowRight'] = false;
            s.touchStartY = null;
            s.touchDirection = null;
        };

        // MOUSE CONTROLS (Mirrors Touch for Desktop 'Mobile View' testing)
        const handleMouseDown = (e) => {
            if (screen !== "play") return;
            const x = e.clientX;
            const y = e.clientY;
            const w = window.innerWidth;

            // Tap/Click Steering
            if (x < w / 2) {
                stateRef.current.keys['ArrowLeft'] = true;
                stateRef.current.keys['ArrowRight'] = false;
            } else {
                stateRef.current.keys['ArrowRight'] = true;
                stateRef.current.keys['ArrowLeft'] = false;
            }
            stateRef.current.touchStartY = y; // Reuse touchStartY for mouse drag
        };

        const handleMouseMove = (e) => {
            if (screen !== "play") return;
            // Only process move if mouse is down (simulating drag)
            if (stateRef.current.touchStartY === null) return;

            const x = e.clientX;
            const y = e.clientY;
            const w = window.innerWidth;
            const s = stateRef.current;

            // Maintain Steering
            if (x < w / 2) {
                s.keys['ArrowLeft'] = true;
                s.keys['ArrowRight'] = false;
            } else {
                s.keys['ArrowRight'] = true;
                s.keys['ArrowLeft'] = false;
            }

            // Swipe/Drag Speed Logic
            const diffY = y - s.touchStartY;
            if (diffY < -30) {
                s.touchDirection = 'up';
            } else if (diffY > 30) {
                s.touchDirection = 'down';
            } else {
                s.touchDirection = null;
            }
        };

        const handleMouseUp = (e) => {
            const s = stateRef.current;
            s.keys['ArrowLeft'] = false;
            s.keys['ArrowRight'] = false;
            s.touchStartY = null;
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
            keys: {},
            roadOffset: 0,
            touchStartX: null,
            touchDirection: null,
        };
        setDistance(0);
        setSpeed(0);
        setScore(0);
        setEarnedCoins(0);
        setCount(3);
        setShowWinPopup(false);
        setScreen("countdown"); // Reset screen to countdown to restart the game
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
                    lang={lang}
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

            {(screen === "countdown" || screen === "play") && (
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
                    {(screen === "play" || screen === "countdown") && (
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
                                    <div style={{ fontSize: '0.8em', opacity: 0.9 }}>{Math.floor(distance / 100)}km / 100km</div>
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
                                <span style={{ color: '#FFD700' }}>{t.controls}:</span> {isMobile ? 'Swipe Left/Right' : 'WASD/Arrows | V=View'} ({viewAngle})
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
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                    padding: 'clamp(20px, 5vw, 40px)',
                }}>
                    <h2 style={{ fontSize: 'clamp(30px, 10vw, 50px)', color: '#ff4444', margin: 'clamp(1px, 1vh, 5px)', textShadow: '0 5px 20px rgba(255,68,68,0.5)' }}>💥 {t.crash}</h2>
                    <div style={{
                        background: 'rgba(255,255,255,0.1)',
                        padding: 'clamp(10px, 2vw, 15px)',
                        borderRadius: 'clamp(12px, 2vw, 20px)',
                        maxWidth: '90vw',
                        width: 'clamp(260px, 85vw, 450px)',
                        margin: 'clamp(10px, 2vh, 15px) auto',
                        border: '2px solid rgba(255,68,68,0.5)',
                    }}>
                        <p style={{ fontSize: 'clamp(18px, 5vw, 28px)', margin: 'clamp(5px, 1vh, 10px)', color: '#FFD700', fontWeight: 'bold' }}>{t.score}: <strong style={{ textShadow: '0 0 10px rgba(255,215,0,0.8)' }}>{score}</strong></p>
                        <p style={{ fontSize: 'clamp(14px, 4vw, 22px)', margin: 'clamp(4px, 1vh, 8px)', color: '#fff' }}>{t.distance}: <strong style={{ color: '#FFD700' }}>{Math.floor(distance / 100)}km</strong></p>
                        <p style={{ fontSize: 'clamp(14px, 4vw, 22px)', margin: 'clamp(4px, 1vh, 8px)', color: '#fff' }}>{t.maxSpeed}: <strong style={{ color: '#FFD700' }}>{Math.floor(speed * 15)} km/h</strong></p>
                        <p style={{ fontSize: 'clamp(16px, 4.5vw, 26px)', margin: 'clamp(5px, 1vh, 10px)', color: '#FFD700', fontWeight: 'bold' }}>🪙 {t.coins}: +{earnedCoins}</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(5px, 1vh, 8px)', alignItems: 'center', width: '100%', maxWidth: '350px' }}>
                        <button onClick={restart} style={{ padding: 'clamp(8px, 1.5vh, 14px) clamp(25px, 5vw, 40px)', fontSize: 'clamp(14px, 2.5vw, 18px)', borderRadius: '50px', border: 'none', cursor: 'pointer', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', fontWeight: 'bold', boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)', transition: 'transform 0.2s', width: '100%', maxWidth: '250px' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                            🔄 {t.restart}
                        </button>
                        <button onClick={onMapSelect} style={{ padding: 'clamp(8px, 1.5vh, 14px) clamp(25px, 5vw, 40px)', fontSize: 'clamp(14px, 2.5vw, 18px)', borderRadius: '50px', border: 'none', cursor: 'pointer', background: '#555', color: 'white', fontWeight: 'bold', transition: 'transform 0.2s', width: '100%', maxWidth: '250px' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                            🗺️ {t.mapsButton}
                        </button>
                        <button onClick={onHome} style={{ padding: 'clamp(8px, 1.5vh, 14px) clamp(25px, 5vw, 40px)', fontSize: 'clamp(14px, 2.5vw, 18px)', borderRadius: '50px', border: 'none', cursor: 'pointer', background: '#333', color: 'white', fontWeight: 'bold', transition: 'transform 0.2s', width: '100%', maxWidth: '250px' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                            🏠 {t.home}
                        </button>
                    </div>
                </div>
            )}

            <style>{`
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.1); }
        }
      `}</style>
        </div>
    );
}

const Home = () => {
    const [screen, setScreen] = useState("home");
    const [selectedMap, setSelectedMap] = useState("highway");
    const [coins, setCoins] = useState(0);
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
            {screen === "home" && <HomeScreen onPlay={() => setScreen("mapselect")} lang={settings.language} />}
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
