'use client';

import React from 'react';
import Link from 'next/link';
import Connections from '../../../components/Connections';

export default function ConnectionsGame() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-16">
        <Link href="/games" className="text-white hover:text-gray-200 mb-8 inline-block">
          &larr; Back to Games
        </Link>
        <h1 className="text-3xl font-bold mb-4 text-center">Connections</h1>
        <Connections />
      </div>
    </div>
  );
}