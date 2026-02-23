// AI検出機能のインポート
import { detectAIPlatform, isAITraffic } from './aiDetection';

// Google Analyticsの測定ID
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_ID;

// gtagの型定義
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: {
        [key: string]: any;
      }
    ) => void;
    dataLayer: any[];
  }
}

// ページビューを送信
export const pageview = (path: string) => {
  if (GA_MEASUREMENT_ID) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: path,
    });
  }
};

// イベントを送信
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (GA_MEASUREMENT_ID) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// GAイベントの型定義
export interface GAEvent {
  action: string;
  category: string;
  label: string;
  value?: number;
}

// AI経由訪問の記録
export function trackAIVisit() {
  const referer = document.referrer;
  const userAgent = navigator.userAgent;

  if (!isAITraffic(referer, userAgent)) {
    return;
  }

  const platform = detectAIPlatform(referer, userAgent);

  // セッションストレージに保存（後でCV測定に使用）
  sessionStorage.setItem('ai_platform', platform || 'unknown');
  sessionStorage.setItem('ai_entry_time', Date.now().toString());

  // GA4イベント送信
  if (window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', 'ai_visit', {
      ai_platform: platform,
      page_path: window.location.pathname,
      page_title: document.title,
      referer: referer,
      user_agent: userAgent
    });
  }
}

// AI経由コンバージョンの記録
export function trackAIConversion(
  conversionType: 'affiliate_click' | 'form_submit' | 'sponsor_inquiry'
) {
  const aiPlatform = sessionStorage.getItem('ai_platform');

  if (!aiPlatform) {
    return; // AI経由ではない
  }

  const entryTime = sessionStorage.getItem('ai_entry_time');
  const timeToConversion = entryTime
    ? Date.now() - parseInt(entryTime)
    : null;

  if (window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', 'ai_conversion', {
      ai_platform: aiPlatform,
      conversion_type: conversionType,
      time_to_conversion_ms: timeToConversion,
      page_path: window.location.pathname
    });
  }
}

// アフィリエイトリンククリック追跡
export function trackAffiliateClick(
  productName: string,
  affiliateType: 'amazon' | 'rakuten'
) {
  trackAIConversion('affiliate_click');

  if (window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', 'affiliate_click', {
      product_name: productName,
      affiliate_type: affiliateType,
      ai_platform: sessionStorage.getItem('ai_platform')
    });
  }
}

// スポンサーお問い合わせ追跡
export function trackSponsorInquiry() {
  trackAIConversion('sponsor_inquiry');

  if (window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', 'sponsor_inquiry', {
      ai_platform: sessionStorage.getItem('ai_platform')
    });
  }
} 
