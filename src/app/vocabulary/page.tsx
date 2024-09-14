'use client';

import React, { Suspense } from 'react';
import FlashcardDeck from '../../components/FlashcardDeck';
import Link from 'next/link';

export default function VocabularyPage() {
  return (
    <div className="container mx-auto p-4">
      <Link href="/" className="text-blue-500 hover:text-blue-700 mb-4 inline-block">
        &larr; Back to Modules
      </Link>
      <h1 className="text-3xl font-bold mb-4">Italian Vocabulary Flashcards</h1>
      <FlashcardDeck />
    </div>
  );
}