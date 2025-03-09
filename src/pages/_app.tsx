import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GA_MEASUREMENT_ID, pageview } from '../utils/analytics';
import '../styles/globals.css';

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
  }
}

function App({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    if (GA_MEASUREMENT_ID) {
      // Google Analytics初期化
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.text = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}');
      `;
      document.head.appendChild(script2);

      // ページ遷移時のトラッキング
      const handleRouteChange = (url: string) => {
        pageview(url);
      };

      handleRouteChange(location.pathname + location.search);
    }
  }, []);

  // ページ遷移時のトラッキング
  useEffect(() => {
    if (GA_MEASUREMENT_ID) {
      pageview(location.pathname + location.search);
    }
  }, [location]);

  return <>{children}</>;
}

export default App; 
