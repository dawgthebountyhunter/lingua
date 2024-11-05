'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import vocabularyData from '../data/vocabulary';
import axios from 'axios'; // Import axios for API calls

interface Sentence {
  italian: string;
  english: string;
  missingWord: string;
  blankIndex: number;
}

const encouragements = [
  "That's a spicy meatball!",
  "That's amore!",
  "You're-a cooking the pasta now!",
  "Mamma mia, that's correct!",
  "Bellissimo!",
  "You're on a roll like a cannoli!",
  "Fantastico!",
  "You're as sharp as Parmigiano-Reggiano!",
  "Mussolini would be proud!",
];

const SentencePracticeContent: React.FC = () => {
  const searchParams = useSearchParams();
  const initialCategories = searchParams?.get('categories')?.split(',').filter(Boolean) ?? []; 
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialCategories);
  const [currentSentence, setCurrentSentence] = useState<Sentence | null>(null);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [skippedCount, setSkippedCount] = useState(0);
  const [mode, setMode] = useState<'existing' | 'new'>('existing'); // New state for mode
  const [newSentence, setNewSentence] = useState<string>(''); // State for new sentence input
  const [translatedSentence, setTranslatedSentence] = useState<string>(''); // State for translated sentence

  useEffect(() => {
    if (mode === 'existing') {
      generateNewSentence();
    }
  }, [selectedCategories, mode]);

  const generateNewSentence = () => {
    const filteredVocabulary = selectedCategories.length === 0
      ? vocabularyData
      : vocabularyData.filter(item => selectedCategories.includes(item.category));

    const allSentences = filteredVocabulary.flatMap(item => 
      item.examples.map(example => ({
        italian: example.italian,
        english: example.english,
        italianWords: example.italian.split(' ')
      }))
    );

    if (allSentences.length === 0) {
      setCurrentSentence(null);
      setFeedback('No sentences available for the selected categories.');
      return;
    }

    const randomSentence = allSentences[Math.floor(Math.random() * allSentences.length)];
    const blankIndex = Math.floor(Math.random() * randomSentence.italianWords.length);
    const missingWord = randomSentence.italianWords[blankIndex];
    const italianWithBlank = randomSentence.italianWords.map((word, index) => 
      index === blankIndex ? '______' : word
    ).join(' ');

    setCurrentSentence({
      italian: italianWithBlank,
      english: randomSentence.english,
      missingWord: missingWord,
      blankIndex: blankIndex
    });
    setUserInput('');
    setFeedback('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentSentence && userInput.toLowerCase().trim() === currentSentence.missingWord.toLowerCase()) {
      setFeedback(encouragements[Math.floor(Math.random() * encouragements.length)]);
      setCorrectCount(prev => prev + 1);
    } else {
      setFeedback(`Sorry, the correct word is "${currentSentence?.missingWord}".`);
      setIncorrectCount(prev => prev + 1);
    }
  };

  const handleSkip = () => {
    setFeedback(`The correct word is "${currentSentence?.missingWord}".`);
    setSkippedCount(prev => prev + 1);
  };

  const handleTranslate = async () => {
    try {
      const response = await axios.post('/api/translate', {
        text: newSentence,
        targetLanguage: 'it'
      });
      setTranslatedSentence(response.data.translation);
    } catch (error) {
      console.error("Error translating sentence:", error);
      setFeedback("Error translating sentence.");
    }
  };

  const handleLogSentence = () => {
    // Logic to log the sentence and select categories
    console.log("Logging sentence:", newSentence);
    console.log("Selected categories:", selectedCategories);
    // You can implement a modal or dropdown to select categories here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/italian" className="text-white hover:text-gray-200 mb-8 inline-block">&larr; Back to Italian</Link>
        <h1 className="text-4xl font-bold mb-4 text-center">Sentence Practice</h1>
        
        {/* Entry Point for New or Existing Sentences */}
        <div className="mb-8 text-center">
          <button onClick={() => setMode('existing')} className={`px-4 py-2 rounded ${mode === 'existing' ? 'bg-blue-600' : 'bg-blue-500'}`}>Existing Sentences</button>
          <button onClick={() => setMode('new')} className={`px-4 py-2 rounded ${mode === 'new' ? 'bg-blue-600' : 'bg-blue-500'}`}>New Sentences</button>
        </div>

        {mode === 'existing' && (
          <>
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-semibold mb-2">Selected Categories:</h2>
              <p className="text-lg">
                {selectedCategories.length > 0 ? selectedCategories.join(', ') : 'General Learning (All Categories)'}
              </p>
            </div>
            {currentSentence && (
              <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg">
                <p className="text-2xl mb-4">{currentSentence.italian}</p>
                <p className="text-xl mb-6 text-gray-200">{currentSentence.english}</p>
                <form onSubmit={handleSubmit} className="mb-6">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    className="w-full border p-2 mb-4 rounded-lg text-gray-800"
                    placeholder="Type the missing word"
                  />
                  <div className="flex justify-center space-x-4">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition duration-300">
                      Submit
                    </button>
                    <button type="button" onClick={handleSkip} className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full transition duration-300">
                      "I don't know"
                    </button>
                  </div>
                </form>
                {feedback && <p className="text-xl mb-6 text-center">{feedback}</p>}
                <button onClick={generateNewSentence} className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition duration-300">
                  Next Sentence
                </button>
                <div className="mt-6 text-center">
                  <p className="text-lg">Correct: {correctCount}</p>
                  <p className="text-lg">Incorrect: {incorrectCount}</p>
                  <p className="text-lg">Skipped: {skippedCount}</p>
                </div>
              </div>
            )}
          </>
        )}

        {mode === 'new' && (
          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl mb-4">Translate New Sentence</h2>
            <input
              type="text"
              value={newSentence}
              onChange={(e) => setNewSentence(e.target.value)}
              className="w-full border p-2 mb-4 rounded-lg text-gray-800"
              placeholder="Type your English sentence"
            />
            <button onClick={handleTranslate} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition duration-300">
              Translate
            </button>
            {translatedSentence && (
              <div className="mt-4">
                <p className="text-lg">Translated Sentence: <strong>{translatedSentence}</strong></p>
                <button onClick={handleLogSentence} className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition duration-300 mt-2">
                  Log Sentence
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const SentencePractice: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SentencePracticeContent />
    </Suspense>
  );
};

export default SentencePractice;