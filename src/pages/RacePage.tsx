import React from 'react';
import { StructuredData } from '../components/StructuredData';

const RacePage: React.FC = () => {
  const sportsEventSchema = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    "name": "Marathon Des Sables 2025",
    "alternateName": "サハラマラソン",
    "description": "モロッコのサハラ砂漠で開催される250kmウルトラマラソン。7日間で全ての衣食住を背負って走る世界で最も過酷なレース。",
    "startDate": "2025-04-20",
    "endDate": "2025-04-26",
    "location": {
      "@type": "Place",
      "name": "サハラ砂漠",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "MA",
        "addressRegion": "Morocco"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "Marathon Des Sables Organization",
      "url": "https://www.marathondessables.com/"
    },
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "sport": "Running",
    "distance": "250 kilometers",
    "duration": "P7D",
    "competitor": {
      "@type": "Person",
      "name": "井上周"
    }
  };

  const competitions = [
    {
      name: 'S-Mountain The 4100D マウンテントレイル in 野沢温泉 2024',
      date: '2024年7月14日（日）',
      time: '14:49:02',
      result: {
        overall: '総合228位',
        category: '種目57位'
      },
      details: '',
      url: 'https://s-mountain.com/nozawa/'
    },
    {
      name: 'Island Trail AWAJI-The Legend of KUNIUMI-(ITA)',
      date: '2024年11月9日(土）、10日（日）',
      time: '7:30:37',
      result: {
        overall: '43km男子総合 176位/230人',
        category: '43km男子39歳以下 40位/55人'
      },
      details: '',
      url: 'https://okushinano100.com/ITA/raceinfo/'
    },
    {
      name: 'IZU TRAIL Journey 2024（伊豆トレイルジャーニー 2024）',
      date: '2024年12月7日（土）',
      time: '12:28:02',
      result: {
        overall: '総合766位/1120人',
        category: ''
      },
      details: '',
      url: 'https://www.izutrailjourney.com/jptop/'
    },
    {
      name: "東京マラソン2025",
      date: "2025年3月2日（日）",
      time: "04:06:59",
      url: "https://www.marathon.tokyo/",
      result: {
        overall: "13,235位",
        category: null
      }
    },
  ];

  return (
    <>
      <StructuredData data={sportsEventSchema} />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">大会実績</h1>
      
      <div className="grid gap-6">
        {competitions.map((competition, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              <a href={competition.url} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600 transition-colors">
                {competition.name}
              </a>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">開催日</p>
                <p className="font-medium">{competition.date}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">フィニッシュタイム</p>
                <p className="font-medium">{competition.time}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">総合順位</p>
                <p className="font-medium text-yellow-600">{competition.result.overall}</p>
              </div>
              {competition.result.category && (
                <div>
                  <p className="text-sm text-gray-600">種目別順位</p>
                  <p className="font-medium text-yellow-600">{competition.result.category}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default RacePage; 
