import React, { useState } from "react";
import { translations } from "./translations";

// SETTINGS PANEL - FIXED TO STAY OPEN
export default function SettingsPanel({ onClose, settings, onSettingsChange, lang }) {
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
    };

    const [showLangDropdown, setShowLangDropdown] = useState(false);
    const currentLang = languages.find(l => l.code === settings.language) || languages[0];

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 2000, padding: 'clamp(10px, 3vw, 20px)', boxSizing: 'border-box',
            animation: 'fadeIn 0.3s',
        }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.7)' }}></div>

            <div style={{
                position: 'relative', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(20px)',
                padding: 'clamp(15px, 3vw, 30px)', borderRadius: 'clamp(15px, 2vw, 25px)',
                width: '95%', maxWidth: '450px', border: '2px solid rgba(255, 255, 255, 0.4)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)', animation: 'scaleIn 0.3s',
                display: 'flex', flexDirection: 'column', maxHeight: '90vh',
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'clamp(10px, 2vh, 20px)', flexShrink: 0 }}>
                    <h2 style={{ fontSize: 'clamp(20px, 5vw, 32px)', color: 'white', margin: 0, textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>
                        {`⚙️ ${t.settings}`}
                    </h2>
                    <button onClick={() => onClose()} style={{
                        background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white',
                        fontSize: 'clamp(18px, 4vw, 24px)', cursor: 'pointer', borderRadius: '50%',
                        width: 'clamp(30px, 7vw, 40px)', height: 'clamp(30px, 7vw, 40px)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s',
                    }}>✕</button>
                </div>

                <div style={{
                    background: 'rgba(0, 0, 0, 0.3)', padding: 'clamp(10px, 2vw, 15px)',
                    borderRadius: '15px', marginBottom: '15px', overflowY: 'auto', flex: 1,
                }} className="custom-scrollbar">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px' }}>
                        <div style={{
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                            background: 'rgba(255,255,255,0.05)', padding: '8px 12px', borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            <span style={{ fontSize: 'clamp(14px, 3vw, 16px)', color: 'white', fontWeight: 'bold' }}>🔊 {t.audio}</span>
                            <button onClick={() => handleSettingChange({ ...settings, audioEnabled: !settings.audioEnabled })} style={{
                                padding: '4px 12px', fontSize: '12px', borderRadius: '15px',
                                border: '1px solid rgba(255, 255, 255, 0.4)', cursor: 'pointer',
                                background: settings.audioEnabled ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                                color: 'white', fontWeight: 'bold',
                            }}>{settings.audioEnabled ? t.on : t.off}</button>
                        </div>

                        <div style={{
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                            background: 'rgba(255,255,255,0.05)', padding: '8px 12px', borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            <span style={{ fontSize: 'clamp(14px, 3vw, 16px)', color: 'white', fontWeight: 'bold' }}>🎵 {t.music}</span>
                            <button onClick={() => handleSettingChange({ ...settings, musicEnabled: !settings.musicEnabled })} style={{
                                padding: '4px 12px', fontSize: '12px', borderRadius: '15px',
                                border: '1px solid rgba(255, 255, 255, 0.4)', cursor: 'pointer',
                                background: settings.musicEnabled ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                                color: 'white', fontWeight: 'bold',
                            }}>{settings.musicEnabled ? t.on : t.off}</button>
                        </div>
                    </div>

                    <div style={{ marginTop: '10px' }}>
                        <span style={{ fontSize: 'clamp(14px, 3vw, 16px)', color: 'white', fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>
                            🌐 {t.language}
                        </span>

                        <div style={{ position: 'relative', width: '100%', zIndex: 10 }}>
                            <button onClick={() => setShowLangDropdown(!showLangDropdown)} style={{
                                width: '100%', padding: '8px 15px', borderRadius: '12px',
                                border: '1px solid rgba(255, 255, 255, 0.4)', background: 'rgba(255, 255, 255, 0.05)',
                                color: 'white', fontSize: '14px', fontWeight: 'bold',
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                cursor: 'pointer', backdropFilter: 'blur(5px)',
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span style={{ fontSize: '18px' }}>{currentLang.flag}</span>
                                    <span>{currentLang.name}</span>
                                </div>
                                <span style={{ fontSize: '12px', transform: showLangDropdown ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>▼</span>
                            </button>

                            {showLangDropdown && (
                                <div style={{
                                    position: 'relative', width: '100%', marginTop: '10px',
                                    background: 'rgba(20, 20, 30, 0.5)', backdropFilter: 'blur(10px)',
                                    borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)',
                                    padding: '4px', display: 'flex', flexDirection: 'column', gap: '2px',
                                    zIndex: 1000, animation: 'slideDown 0.2s ease-out',
                                }}>
                                    {languages.map((l) => (
                                        <div key={l.code} onClick={() => { handleSettingChange({ ...settings, language: l.code }); setShowLangDropdown(false); }}
                                            style={{
                                                padding: '8px 12px', borderRadius: '8px', cursor: 'pointer',
                                                display: 'flex', alignItems: 'center', gap: '10px', color: 'white',
                                                background: settings.language === l.code ? 'rgba(255, 255, 255, 0.15)' : 'transparent', fontSize: '14px',
                                            }}>
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
        @keyframes slideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      `}</style>
        </div>
    );
}
