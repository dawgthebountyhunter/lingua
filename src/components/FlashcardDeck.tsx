'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Flashcard from './Flashcard';
import ReviewList from './ReviewList';
import vocabularyData from '../data/vocabulary';

interface Card {
  id: string;
  italianWord: string;
  englishTranslation: string;
  partOfSpeech: string;
  difficulty: number;
  examples: { italian: string; english: string }[];
}

const FlashcardDeck: React.FC = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [skippedCount, setSkippedCount] = useState(0);
  const [answeredCards, setAnsweredCards] = useState<{[key: string]: boolean}>({});
  const [shuffledDeck, setShuffledDeck] = useState<Card[]>([]);
  const [totalCardsViewed, setTotalCardsViewed] = useState(0);
  const [selectedPartOfSpeech, setSelectedPartOfSpeech] = useState('all');
  const [showCorrectList, setShowCorrectList] = useState(false);
  const [showIncorrectList, setShowIncorrectList] = useState(false);

  const partsOfSpeech = ['all', ...Array.from(new Set(vocabularyData.map(card => card.partOfSpeech)))];

  const shuffleDeck = useCallback(() => {
    const filteredDeck = selectedPartOfSpeech === 'all'
      ? vocabularyData
      : vocabularyData.filter(card => card.partOfSpeech === selectedPartOfSpeech);
    const shuffled = [...filteredDeck].sort(() => Math.random() - 0.5);
    setShuffledDeck(shuffled);
    setCurrentCardIndex(0);
    setTotalCardsViewed(0);
    setCorrectCount(0);
    setIncorrectCount(0);
    setSkippedCount(0);
    setAnsweredCards({});
    setIsFlipped(false);
  }, [selectedPartOfSpeech]);

  useEffect(() => {
    shuffleDeck();
  }, [shuffleDeck]);

  if (shuffledDeck.length === 0) {
    return <div className="text-center mt-8">No flashcards available for the selected part of speech.</div>;
  }

  const nextCard = () => {
    if (isFlipped) {
      setIsFlipped(false);
      setTimeout(() => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % shuffledDeck.length);
        setTotalCardsViewed(prev => prev + 1);
      }, 300); // Half the duration of the flip animation
    } else {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % shuffledDeck.length);
      setTotalCardsViewed(prev => prev + 1);
    }
    if (!isFlipped) {
      setSkippedCount(prev => prev + 1);
    }
  };

  const previousCard = () => {
    if (isFlipped) {
      setIsFlipped(false);
      setTimeout(() => {
        setCurrentCardIndex((prevIndex) => 
          (prevIndex - 1 + shuffledDeck.length) % shuffledDeck.length
        );
      }, 300); // Half the duration of the flip animation
    } else {
      setCurrentCardIndex((prevIndex) => 
        (prevIndex - 1 + shuffledDeck.length) % shuffledDeck.length
      );
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleAnswer = (isCorrect: boolean) => {
    const currentCard = shuffledDeck[currentCardIndex];
    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
    } else {
      setIncorrectCount(prev => prev + 1);
    }
    setAnsweredCards(prev => ({...prev, [currentCard.id]: isCorrect}));
    if (isFlipped) {
      setIsFlipped(false);
      setTimeout(() => {
        nextCard();
      }, 300); // Half the duration of the flip animation
    } else {
      nextCard();
    }
  };

  const handlePartOfSpeechChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPartOfSpeech(e.target.value);
  };

  const getCorrectCards = () => shuffledDeck.filter(card => answeredCards[card.id] === true);
  const getIncorrectCards = () => shuffledDeck.filter(card => answeredCards[card.id] === false);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">Back to Home</Link>
      <div className="mb-4">
        <label htmlFor="partOfSpeech" className="block mb-2">Select Part of Speech: </label>
        <select 
          id="partOfSpeech" 
          value={selectedPartOfSpeech} 
          onChange={handlePartOfSpeechChange}
          className="w-full p-2 border rounded"
        >
          {partsOfSpeech.map(pos => (
            <option key={pos} value={pos}>{pos}</option>
          ))}
        </select>
      </div>
      <Flashcard 
        card={shuffledDeck[currentCardIndex]} 
        isFlipped={isFlipped} 
        onFlip={handleFlip} 
      />
      <div className="flex justify-center mt-4">
        <button onClick={handleFlip} className="bg-blue-500 text-white px-4 py-2 rounded">
          Flip Card
        </button>
      </div>
      <div className="flex justify-between mt-4">
        <button onClick={previousCard} className="bg-blue-500 text-white px-4 py-2 rounded">Previous</button>
        <button onClick={nextCard} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        <button onClick={() => handleAnswer(true)} className="bg-green-500 text-white px-4 py-2 rounded">Correct</button>
        <button onClick={() => handleAnswer(false)} className="bg-red-500 text-white px-4 py-2 rounded">Incorrect</button>
      </div>
      <div className="mt-6 text-center">
        <p>Correct: {correctCount}</p>
        <p>Incorrect: {incorrectCount}</p>
        <p>Skipped: {skippedCount}</p>
        <p>Total Cards Viewed: {totalCardsViewed}</p>
        <p>Total {selectedPartOfSpeech} Cards: {shuffledDeck.length}</p>
      </div>
      <button onClick={shuffleDeck} className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded w-full">Reset Deck</button>
      <div className="mt-4 flex justify-center space-x-4">
        <button onClick={() => setShowCorrectList(!showCorrectList)} className="bg-green-500 text-white px-4 py-2 rounded">
          {showCorrectList ? 'Hide' : 'Show'} Correct Cards
        </button>
        <button onClick={() => setShowIncorrectList(!showIncorrectList)} className="bg-red-500 text-white px-4 py-2 rounded">
          {showIncorrectList ? 'Hide' : 'Show'} Incorrect Cards
        </button>
      </div>
      {showCorrectList && (
        <ReviewList title="Correct Cards" cards={getCorrectCards()} />
      )}
      {showIncorrectList && (
        <ReviewList title="Incorrect Cards" cards={getIncorrectCards()} />
      )}
    </div>
  );
};

export default FlashcardDeck;