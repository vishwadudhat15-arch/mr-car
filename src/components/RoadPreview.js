import React from "react";

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
        </svg>
    );
}
