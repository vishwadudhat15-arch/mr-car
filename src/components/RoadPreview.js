import React from "react";

// REUSABLE ROAD PREVIEW COMPONENT
export default function RoadPreview({ mapId, opacity = 1 }) {
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

    const renderDecorations = (side) => {
        const x = side === 'left' ? 5 : 95;
        const scale = 0.35;

        switch (mapId) {
            case 'city':
                return (
                    <g transform={`translate(${x}, 0) scale(${scale})`}>
                        <rect x="-40" y="-50" width="80" height="250" fill="#263238" />
                        <rect x="-30" y="-40" width="10" height="10" fill="#81D4FA" />
                        <rect x="-10" y="-40" width="10" height="10" fill="#81D4FA" />
                        <rect x="10" y="-40" width="10" height="10" fill="#81D4FA" />
                        <rect x="20" y="-40" width="10" height="10" fill="#81D4FA" />
                        <rect x="-30" y="-10" width="10" height="10" fill="#81D4FA" />
                        <rect x="10" y="-10" width="10" height="10" fill="#81D4FA" />
                        <rect x="0" y="-70" width="4" height="20" fill="#455A64" />
                    </g>
                );
            case 'night':
                return (
                    <g transform={`translate(${x}, 0) scale(${scale})`}>
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
            <rect width="100" height="100" fill={colors.side} />
            <rect x="20" y="0" width="60" height="100" fill={colors.road} />
            <g>
                <line x1="40" y1="-16" x2="40" y2="100" stroke={colors.line} strokeDasharray="8,8" strokeWidth="1.5" />
                <animateTransform attributeName="transform" type="translate" from="0 -16" to="0 0" dur="0.4s" repeatCount="indefinite" />
            </g>
            <g>
                <line x1="60" y1="-16" x2="60" y2="100" stroke={colors.line} strokeDasharray="8,8" strokeWidth="1.5" />
                <animateTransform attributeName="transform" type="translate" from="0 -16" to="0 0" dur="0.4s" repeatCount="indefinite" />
            </g>
            <g>
                <circle cx="70" cy="50" r="4" fill="#FFD700" stroke="#B8860B" strokeWidth="0.5">
                    <animate attributeName="opacity" values="1;0.6;1" dur="1s" repeatCount="indefinite" />
                </circle>
                <animateTransform attributeName="transform" type="translate" from="0 -100" to="0 100" dur="1s" repeatCount="indefinite" />
            </g>
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
