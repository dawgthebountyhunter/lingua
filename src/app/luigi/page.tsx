'use client';

import React from 'react';
import Link from 'next/link';
import LuigiChat from '../../components/LuigiChat';

export default function LuigiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-white hover:text-gray-200 mb-8 inline-block">&larr; Back to Home</Link>
        <h1 className="text-4xl font-bold mb-8 text-center">Chat with Luigi</h1>
        <LuigiChat />
      </div>
    </div>
  );
}