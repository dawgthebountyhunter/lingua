import React from 'react';
import ModuleSelector from '../components/ModuleSelector';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-8 text-center">Lingua AI</h1>
        <p className="text-xl mb-12 text-center max-w-2xl mx-auto">
          Embark on your Italian language journey with our interactive learning modules.
          Master vocabulary, practice sentences, and enjoy language games. Or else!
        </p>
        <ModuleSelector />
      </div>
    </div>
  );
}