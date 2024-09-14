'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import vocabularyData from '../data/vocabulary';

const ModuleSelector: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const modules = [
    { 
      name: 'Vocabulary', 
      path: '/vocabulary', 
      icon: '📚',
      description: 'Memorize common words with flash cards.'
    },
    { 
      name: 'Sentence Practice', 
      path: '/sentence-practice', 
      icon: '✍️',
      description: 'Learn what to say in real world scenarios.'
    },
    { 
      name: 'Games', 
      path: '/games', 
      icon: '🎮',
      description: 'Put your learning to the test with fun games.'
    },
  ];

  const allCategories = Array.from(new Set(vocabularyData.map(item => item.category)));

  useEffect(() => {
    const storedCategories = localStorage.getItem('selectedCategories');
    if (storedCategories) {
      setSelectedCategories(JSON.parse(storedCategories));
      setIsSubmitted(true);
    }
  }, []);

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleGeneralLearning = () => {
    setSelectedCategories([]);
  };

  const handleSubmit = () => {
    localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories));
    setIsSubmitted(true);
  };

  const handleReselect = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-white hover:text-gray-200 mb-8 inline-block">&larr; Back to Language Selection</Link>
        <h1 className="text-5xl font-bold mb-8 text-center">Learn Italian</h1>
        
        {!isSubmitted ? (
          <>
            <h2 className="text-3xl font-bold mb-6 text-center">Select Your Learning Focus</h2>
            <div className="mb-8">
              <button
                onClick={handleGeneralLearning}
                className={`mb-4 px-4 py-2 rounded-full ${
                  selectedCategories.length === 0
                    ? 'bg-green-500 text-white'
                    : 'bg-white bg-opacity-20 text-white'
                }`}
              >
                General Learning
              </button>
              <div className="flex flex-wrap gap-2">
                {allCategories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => handleCategoryToggle(category)}
                    className={`px-4 py-2 rounded-full ${
                      selectedCategories.includes(category)
                        ? 'bg-blue-500 text-white'
                        : 'bg-white bg-opacity-20 text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition duration-300"
            >
              Submit
            </button>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold mb-6 text-center">Choose a Learning Module</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {modules.map((module, index) => (
                <Link key={index} href={{
                  pathname: module.path,
                  query: { categories: selectedCategories.length === 0 ? '' : selectedCategories.join(',') }
                }}>
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
              <div className="bg-green-500 hover:bg-green-600 text-white text-center py-4 rounded-xl text-2xl font-bold transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 mb-8">
                Talk to Luigi
              </div>
            </Link>
            <button
              onClick={handleReselect}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full transition duration-300"
            >
              Re-select Learning Focus
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ModuleSelector;