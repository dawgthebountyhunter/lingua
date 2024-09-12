'use client';

import React from 'react';
import Link from 'next/link';
import GameSelector from '../../components/GameSelector';

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-16">
        <Link href="/" className="text-white hover:text-gray-200 mb-8 inline-block">
          &larr; Back to Modules
        </Link>
        <h1 className="text-5xl font-bold mb-8 text-center">Language Learning Games</h1>
        <p className="text-xl mb-12 text-center max-w-2xl mx-auto">
          Put your Italian skills to the test with our engaging language games.
        </p>
        <GameSelector />
      </div>
    </div>
  );
}