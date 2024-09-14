'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import SentencePractice from '../../components/SentencePractice';

export default function SentencePracticePage() {
  return (
    <div className="container mx-auto p-4">
      <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">Back to Home</Link>
      <h1 className="text-3xl font-bold mb-4">Sentence Practice</h1>
      <SentencePractice />
    </div>
  );
}