'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
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
  tags: string[];
  category: string;
}



const FlashcardDeck: React.FC = () => {
  const searchParams = useSearchParams();
  const initialCategories = searchParams?.get('categories')?.split(',').filter(Boolean) || [];
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialCategories);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [skippedCount, setSkippedCount] = useState(0);
  const [answeredCards, setAnsweredCards] = useState<{[key: string]: boolean}>({});
  const [shuffledDeck, setShuffledDeck] = useState<Card[]>([]);
  const [totalCardsViewed, setTotalCardsViewed] = useState(0);
  const [showCorrectList, setShowCorrectList] = useState(false);
  const [showIncorrectList, setShowIncorrectList] = useState(false);

  const shuffleDeck = useCallback(() => {
    const filteredDeck = selectedCategories.length === 0
      ? vocabularyData
      : vocabularyData.filter(card => selectedCategories.includes(card.category));
    const shuffled = [...filteredDeck].sort(() => Math.random() - 0.5);
    setShuffledDeck(shuffled);
    setCurrentCardIndex(0);
    setTotalCardsViewed(0);
    setCorrectCount(0);
    setIncorrectCount(0);
    setSkippedCount(0);
    setAnsweredCards({});
    setIsFlipped(false);
  }, [selectedCategories]);

  useEffect(() => {
    shuffleDeck();
  }, [shuffleDeck]);

  if (shuffledDeck.length === 0) {
    return <div className="text-center mt-8">No flashcards available for the selected categories.</div>;
  }

  const nextCard = () => {
    if (isFlipped) {
      setIsFlipped(false);
      setTimeout(() => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % shuffledDeck.length);
        setTotalCardsViewed(prev => prev + 1);
      }, 300);
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
      }, 300);
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
      }, 300);
    } else {
      nextCard();
    }
  };

  const getCorrectCards = () => shuffledDeck.filter(card => answeredCards[card.id] === true);
  const getIncorrectCards = () => shuffledDeck.filter(card => answeredCards[card.id] === false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/italian" className="text-white hover:text-gray-200 mb-8 inline-block">&larr; Back to Italian</Link>
        <h1 className="text-4xl font-bold mb-4 text-center">Flashcard Practice</h1>
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-2">Selected Categories:</h2>
          <p className="text-lg">
            {selectedCategories.length > 0 ? selectedCategories.join(', ') : 'General Learning (All Categories)'}
          </p>
        </div>
        <Flashcard 
          card={shuffledDeck[currentCardIndex]} 
          isFlipped={isFlipped} 
          onFlip={handleFlip} 
        />
        <div className="flex justify-center mt-6 space-x-4">
          <button onClick={handleFlip} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition duration-300">
            Flip Card
          </button>
          <button onClick={() => handleAnswer(true)} className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition duration-300">Correct</button>
          <button onClick={() => handleAnswer(false)} className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition duration-300">Incorrect</button>
        </div>
        <div className="flex justify-between mt-6">
          <button onClick={previousCard} className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full transition duration-300">Previous</button>
          <button onClick={nextCard} className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full transition duration-300">Next</button>
        </div>
        <div className="mt-8 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Statistics</h2>
          <p>Correct: {correctCount}</p>
          <p>Incorrect: {incorrectCount}</p>
          <p>Skipped: {skippedCount}</p>
          <p>Total Cards Viewed: {totalCardsViewed}</p>
          <p>Total Cards in Deck: {shuffledDeck.length}</p>
        </div>
        <button onClick={shuffleDeck} className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full transition duration-300 w-full">Reset Deck</button>
        <div className="mt-6 flex justify-center space-x-4">
          <button onClick={() => setShowCorrectList(!showCorrectList)} className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition duration-300">
            {showCorrectList ? 'Hide' : 'Show'} Correct Cards
          </button>
          <button onClick={() => setShowIncorrectList(!showIncorrectList)} className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition duration-300">
            {showIncorrectList ? 'Hide' : 'Show'} Incorrect Cards
          </button>
        </div>
        {showCorrectList && (
          <ReviewList
            title="Correct Cards"
            cards={getCorrectCards()}
            onClose={() => setShowCorrectList(false)}
          />
        )}
        {showIncorrectList && (
          <ReviewList
            title="Incorrect Cards"
            cards={getIncorrectCards()}
            onClose={() => setShowIncorrectList(false)}
          />
        )}
      </div>
    </div>
  );
};

export default FlashcardDeck;