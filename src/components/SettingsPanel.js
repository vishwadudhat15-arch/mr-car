import React, { useState } from "react";
import { translations } from "./translations";

export default function SettingsPanel({ onClose, settings, onSettingsChange, lang }) {
    const t = translations[lang];
    const languages = [
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
        { code: 'es', name: 'Español', flag: '🇪🇸' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    ];

    const currentLang = languages.find(l => l.code === settings.language) || languages[0];
    const [showLangDropdown, setShowLangDropdown] = useState(false);

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000,
            padding: '20px', boxSizing: 'border-box', animation: 'fadeIn 0.3s',
        }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.7)' }}></div>

            <div style={{
                position: 'relative', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(20px)',
                padding: '30px', borderRadius: '25px', width: '95%', maxWidth: '450px',
                border: '2px solid rgba(255, 255, 255, 0.4)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                animation: 'scaleIn 0.3s', display: 'flex', flexDirection: 'column', maxHeight: '90vh'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h2 style={{ fontSize: '32px', color: 'white', margin: 0, textShadow: '0 0 10px rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <svg width="0.9em" height="0.9em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                        </svg>
                        {t.settings}
                    </h2>
                    <button onClick={onClose} style={{
                        background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white', fontSize: '24px',
                        cursor: 'pointer', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>✕</button>
                </div>

                <div style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '15px', borderRadius: '15px', marginBottom: '15px', overflowY: 'auto', flex: 1 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px' }}>
                        {[{ label: t.audio, key: 'audioEnabled', icon: '🔊' }].map(s => (
                            <div key={s.key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '8px 12px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <span style={{ color: 'white', fontWeight: 'bold' }}>{s.icon} {s.label}</span>
                                <button onClick={() => onSettingsChange({ ...settings, [s.key]: !settings[s.key] })} style={{
                                    padding: '4px 12px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.4)',
                                    cursor: 'pointer', background: settings[s.key] ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.05)', color: 'white', fontWeight: 'bold'
                                }}>{settings[s.key] ? t.on : t.off}</button>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '10px' }}>
                        <span style={{ color: 'white', fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>🌐 {t.language}</span>
                        <div style={{ position: 'relative', width: '100%', zIndex: 10 }}>
                            <button onClick={() => setShowLangDropdown(!showLangDropdown)} style={{
                                width: '100%', padding: '8px 15px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.4)',
                                background: 'rgba(255,255,255,0.05)', color: 'white', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span>{currentLang.flag}</span><span>{currentLang.name}</span></div>
                                <span style={{ transform: showLangDropdown ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>▼</span>
                            </button>
                            {showLangDropdown && (<div style={{ position: 'relative', width: '100%', marginTop: '10px', background: 'rgba(20,20,30,0.5)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)', padding: '4px', display: 'flex', flexDirection: 'column', gap: '2px', animation: 'slideDown 0.2s ease-out' }}>
                                {languages.map(l => (
                                    <div key={l.code} onClick={() => { onSettingsChange({ ...settings, language: l.code }); setShowLangDropdown(false); }} style={{
                                        padding: '8px 12px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', color: 'white', background: settings.language === l.code ? 'rgba(255,255,255,0.15)' : 'transparent'
                                    }}>{l.flag} {l.name}</div>
                                ))}
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes scaleIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
                @keyframes slideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
            `}</style>
        </div>
    );
}
