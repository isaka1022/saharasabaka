import React, { useEffect } from 'react';

interface StructuredDataProps {
  data: object | object[];
}

/**
 * Schema.org構造化データをJSON-LD形式で出力するコンポーネント
 * React 19対応のため、useEffectでdocument.headに直接追加
 *
 * @example
 * <StructuredData data={personSchema} />
 */
export const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
  useEffect(() => {
    // スクリプトタグを作成してheadに追加
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    // クリーンアップ
    return () => {
      document.head.removeChild(script);
    };
  }, [data]);

  return null;
};

export default StructuredData;
