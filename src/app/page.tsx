'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const languages = [
  { name: 'Italian', path: '/italian', available: true, emoji: '🇮🇹' },
  { name: 'Spanish', path: '/spanish', available: false, emoji: '🇪🇸' },
  { name: 'Portuguese', path: '/portuguese', available: false, emoji: '🇵🇹' },
  { name: 'Chinese', path: '/chinese', available: false, emoji: '🇨🇳' },
  { name: 'Klingon', path: '/klingon', available: false, emoji: '🖖' },
];

const LandingPage: React.FC = () => {
  const router = useRouter();

  const handleLanguageSelect = (language: { name: string; path: string; available: boolean }) => {
    if (language.available) {
      router.push(language.path);
    } else {
      alert("You can't learn that yet, you have to learn Italian first!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center">Choose Your Language</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {languages.map((language, index) => (
            <div
              key={index}
              onClick={() => handleLanguageSelect(language)}
              className={`bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:bg-opacity-30 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer ${
                !language.available && 'opacity-50'
              }`}
            >
              <div className="flex items-center mb-2">
                <span className="text-4xl mr-2">{language.emoji}</span>
                <h2 className="text-2xl font-semibold">{language.name}</h2>
              </div>
              <p className="text-sm opacity-80">
                {language.available ? 'Available' : 'Coming Soon'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;