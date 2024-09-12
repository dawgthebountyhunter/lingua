'use client';

import React from 'react';
import Link from 'next/link';

const ModuleSelector: React.FC = () => {
  const modules = [
    { name: 'Vocabulary', path: '/vocabulary' },
    // Add more modules here as they are developed
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {modules.map((module, index) => (
        <Link key={index} href={module.path} className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{module.name}</h5>
          <p className="font-normal text-gray-700">Click to start learning {module.name.toLowerCase()}.</p>
        </Link>
      ))}
    </div>
  );
};

export default ModuleSelector;