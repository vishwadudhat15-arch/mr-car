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

  if (eventName === 'level_start') {
    const levelId = params && params.level_index !== undefined ? params.level_index : 'general';
    const storageKey = 'ws_level_starts_count';
    const count = parseInt(localStorage.getItem(storageKey) || '0') + 1;
    localStorage.setItem(storageKey, count.toString());
    console.log(`%c[Analytics] level_start (Level ${typeof levelId === 'number' ? levelId + 1 : levelId}) count: ${count}`, 'color: #38bdf8; font-weight: bold;');
    


    if (count % 3 === 0) {
      const urlParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
      const isAdsEnabled = urlParams ? urlParams.get('ads') === 'true' : false;

      if (!isAdsEnabled) {
        console.log('%c[Analytics] Ad trigger suppressed: Ads disabled by default (enable with ?ads=true)', 'color: #ff4a4a; font-weight: bold;');
      } else {
        adTriggered = true;
        console.log('%c[Analytics] Ad trigger active: Ads enabled via URL', 'color: #4caf50; font-weight: bold;');
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
