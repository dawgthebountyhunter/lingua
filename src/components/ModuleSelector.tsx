'use client';

'use client';

import React from 'react';
import Link from 'next/link';

const ModuleSelector: React.FC = () => {
  const modules = [
    { 
      name: 'Vocabulary', 
      path: '/vocabulary', 
      icon: '📚',
      description: 'Memorize common words with flash cards.'
    },
    { 
      name: 'Games', 
      path: '/games', 
      icon: '🎮',
      description: 'Put your learning to the test with fun games.'
    },
    { 
      name: 'Sentence Practice', 
      path: '/sentence-practice', 
      icon: '✍️',
      description: 'Learn what to say in real world scenarios.'
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {modules.map((module, index) => (
          <Link key={index} href={module.path}>
            <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:bg-opacity-30 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 h-full flex flex-col">
              <div className="text-4xl mb-4">{module.icon}</div>
              <h2 className="text-2xl font-semibold mb-2 flex-grow">{module.name}</h2>
              <p className="text-sm opacity-80">
                {module.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <Link href="/luigi">
        <div className="bg-green-500 hover:bg-green-600 text-white text-center py-4 rounded-xl text-2xl font-bold transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          Talk to Luigi
        </div>
      </Link>
    </div>
  );
};

export default ModuleSelector;