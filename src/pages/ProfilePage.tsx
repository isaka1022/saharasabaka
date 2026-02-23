import React from 'react';
import Profile from '../components/Profile';
import { StructuredData } from '../components/StructuredData';

const ProfilePage: React.FC = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "井上周",
    "alternateName": "INOUE Amane",
    "givenName": "周",
    "familyName": "井上",
    "nationality": {
      "@type": "Country",
      "name": "Japan"
    },
    "jobTitle": "ソフトウェアエンジニア",
    "description": "2025年サハラマラソン（Marathon Des Sables）完走者。「小さな挑戦が大きな挑戦につながる」をテーマに情報発信。",
    "url": "https://saharasabaka.vercel.app/profile",
    "sameAs": [
      "https://note.com/amaino/"
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "金沢工業大学"
    },
    "birthPlace": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "群馬県"
      }
    },
    "knowsAbout": [
      "マラソン",
      "ウルトラマラソン",
      "サハラマラソン",
      "ランニング",
      "ソフトウェアエンジニアリング"
    ]
  };

  return (
    <>
      <StructuredData data={personSchema} />
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">プロフィール</h1>
      <Profile showFullStory={true} />
    </div>
    </>
  );
};

export default ProfilePage; 
