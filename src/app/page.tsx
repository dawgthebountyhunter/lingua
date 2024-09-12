import React from 'react';
import ModuleSelector from '../components/ModuleSelector';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Language Learning App</h1>
      <ModuleSelector />
    </div>
  );
}