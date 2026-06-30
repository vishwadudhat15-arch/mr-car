/**
 * Analytics & Ad Rules Event Tracker
 * Tracks game opens, game exits, and level completions.
 * Rules: Triggers initial ad display every 3 level_start events.
 *
 * URL Parameter Control:
 *   Ads are disabled by default.
 *   To enable them, set ?ads=true in the URL.
 */
export function logAnalyticsEvent(eventName, params = {}) {
  let adTriggered = false;

  if (eventName === 'level_start' || eventName === 'restart_game') {
    const storageKey = 'ws_game_plays_count'; // Shared counter for any game start/restart
    let count = parseInt(localStorage.getItem(storageKey), 10);
    if (isNaN(count)) count = 0;
    count += 1;
    localStorage.setItem(storageKey, count.toString());
    
    console.log(`%c[AD COUNTER] Total Plays: ${count} / 3`, 'font-size: 16px; color: #ff00ff; font-weight: bold; background: #222; padding: 4px 8px; border-radius: 4px;');
    
    if (count % 3 === 0) {
      const urlParams = new URLSearchParams(window.location.search);
      const isAdsEnabled = urlParams.get('ads') === 'true';

      if (!isAdsEnabled) {
        console.log('%c[Analytics] Ad trigger suppressed: Ads disabled by default (enable with ?ads=true)', 'color: #ff4a4a; font-weight: bold;');
      } else {
        adTriggered = true;
        console.log('%c[Analytics] Ad trigger active: Ads enabled by default', 'color: #4caf50; font-weight: bold;');
      }
    }
  }

  // Push to dataLayer for GA4 / Custom Backend scalability
  if (typeof window !== 'undefined') {
    if (!window.dataLayer) {
      window.dataLayer = [];
    }
    window.dataLayer.push({
      event: eventName,
      params,
      timestamp: new Date().toISOString()
    });

    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }
  }

  console.log(`%c[Analytics] Event Pushed: ${eventName} | Params: ${JSON.stringify(params)}`, 'color: #c678dd;');

  if (adTriggered && typeof window !== 'undefined') {
    window.dispatchEvent(new Event('ws_show_ad'));
  }
}
