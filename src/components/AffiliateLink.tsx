import React from 'react';
import { trackAffiliateClick } from '../utils/analytics';

interface AffiliateLinkProps {
  href: string;
  productName: string;
  type: 'amazon' | 'rakuten' | 'equipment' | 'other';
  children: React.ReactNode;
  className?: string;
}

export const AffiliateLink: React.FC<AffiliateLinkProps> = ({
  href,
  productName,
  type,
  children,
  className = ''
}) => {
  const handleClick = () => {
    trackAffiliateClick(productName, type);
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
};
