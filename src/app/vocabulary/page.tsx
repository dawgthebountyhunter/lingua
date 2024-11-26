'use client';

import React, { useState } from 'react';
import FlashcardDeck from '../../components/FlashcardDeck';
import Link from 'next/link';

export default function VocabularyPage() {
  const [mode, setMode] = useState<'regular' | 'stored'>('regular');

  return (
    <div className="container mx-auto p-4">
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-6">
        <Link href="/" className="text-white hover:text-gray-200 inline-block mb-4">
          &larr; Back to Modules
        </Link>
        
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">Italian Vocabulary Flashcards</h1>
          
          <div className="flex gap-2">
            <button
              onClick={() => setMode('regular')}
              className={`px-4 py-2 rounded-full transition duration-300 ${
                mode === 'regular'
                  ? 'bg-purple-600 text-white'
                  : 'bg-purple-200 text-purple-800'
              }`}
            >
              Regular Flashcards
            </button>
            <button
              onClick={() => setMode('stored')}
              className={`px-4 py-2 rounded-full transition duration-300 ${
                mode === 'stored'
                  ? 'bg-purple-600 text-white'
                  : 'bg-purple-200 text-purple-800'
              }`}
            >
              My Stored Sentences
            </button>
          </div>
        </div>

        <FlashcardDeck mode={mode} />
      </div>
    </div>
  );
}