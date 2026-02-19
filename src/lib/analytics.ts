export type AnalyticsParams = Record<string, string | number | boolean | null | undefined>;

type GtagFn = (command: 'event', eventName: string, params?: AnalyticsParams) => void;

export function trackEvent(eventName: string, params: AnalyticsParams = {}): void {
  if (typeof window === 'undefined') return;
  const gtag = (window as Window & { gtag?: GtagFn }).gtag;
  if (typeof gtag !== 'function') return;
  gtag('event', eventName, params);
}

