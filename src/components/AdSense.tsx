import React, { useEffect } from 'react';

interface AdSenseProps {
  adSlot: string;
  adFormat?: string;
  adStyle?: React.CSSProperties;
  fullWidthResponsive?: boolean;
}

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export const AdSense: React.FC<AdSenseProps> = ({
  adSlot,
  adFormat = 'auto',
  adStyle = { display: 'block' },
  fullWidthResponsive = true
}) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={adStyle}
      data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // TODO: Replace with actual AdSense client ID
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={fullWidthResponsive.toString()}
    />
  );
};
