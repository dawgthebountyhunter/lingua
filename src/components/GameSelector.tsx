'use client';

import React from 'react';
import Link from 'next/link';

const GameSelector: React.FC = () => {
  const games = [
    { 
      name: 'Italian Connections', 
      path: '/games/connections', 
      icon: '🔗',
      description: 'Find connections between Italian words and phrases.'
    },
    // Add more games here as they are developed
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {games.map((game, index) => (
        <Link key={index} href={game.path}>
          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:bg-opacity-30 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 h-full flex flex-col">
            <div className="text-4xl mb-4">{game.icon}</div>
            <h2 className="text-2xl font-semibold mb-2 flex-grow">{game.name}</h2>
            <p className="text-sm opacity-80">
              {game.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GameSelector;