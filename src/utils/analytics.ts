// Google Analyticsの測定ID
export const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_ID;

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
