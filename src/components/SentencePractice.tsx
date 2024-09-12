'use client';

import React, { useState, useEffect } from 'react';
import vocabularyData from '../data/vocabulary';

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
];

const SentencePractice: React.FC = () => {
  const [currentSentence, setCurrentSentence] = useState<Sentence | null>(null);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [skippedCount, setSkippedCount] = useState(0);

  useEffect(() => {
    generateNewSentence();
  }, []);

  const generateNewSentence = () => {
    const allSentences = vocabularyData.flatMap(item => 
      item.examples.map(example => ({
        italian: example.italian,
        english: example.english,
        italianWords: example.italian.split(' ')
      }))
    );

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
    if (userInput.toLowerCase().trim() === currentSentence?.missingWord.toLowerCase()) {
      const randomEncouragement = encouragements[Math.floor(Math.random() * encouragements.length)];
      setFeedback(`Correct! ${randomEncouragement}`);
      setCorrectCount(prev => prev + 1);
    } else {
      setFeedback(`Incorrect. The correct word is "${currentSentence?.missingWord}".`);
      setIncorrectCount(prev => prev + 1);
    }
  };

  const handleSkip = () => {
    setFeedback(`The correct word is "${currentSentence?.missingWord}".`);
    setSkippedCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Sentence Practice</h1>
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
                  I don't know
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
      </div>
    </div>
  );
};

export default SentencePractice;