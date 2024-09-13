'use client';

import React, { useState, useEffect } from 'react';
import { gameBoards, Difficulty, WordSet, GameBoard } from '../data/ConnectionsBoards';

const Notification = ({ message, isVisible, onHide }: { message: string, isVisible: boolean, onHide: () => void }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onHide, 2000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onHide]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-full shadow-lg animate-fade-out">
      {message}
    </div>
  );
};

export default function Home() {
  const [currentBoardIndex, setCurrentBoardIndex] = useState<number>(0);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [shuffledWords, setShuffledWords] = useState<string[]>([]);
  const [foundSets, setFoundSets] = useState<WordSet[]>([]);
  const [lives, setLives] = useState<number>(4);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    if (selectedDifficulty) {
      startNewGame();
    }
  }, [selectedDifficulty]);

  const startNewGame = () => {
    const filteredBoards = gameBoards.filter(board => board.difficulty === selectedDifficulty);
    const newBoardIndex = Math.floor(Math.random() * filteredBoards.length);
    setCurrentBoardIndex(gameBoards.indexOf(filteredBoards[newBoardIndex]));
    setShuffledWords(filteredBoards[newBoardIndex].sets.flatMap(set => set.words).sort(() => Math.random() - 0.5));
    setSelectedWords([]);
    setFoundSets([]);
    setLives(4);
    setGameOver(false);
  };

  const handleWordClick = (word: string) => {
    if (gameOver) return;
    if (selectedWords.includes(word)) {
      setSelectedWords(selectedWords.filter(w => w !== word));
    } else if (selectedWords.length < 4) {
      setSelectedWords([...selectedWords, word]);
    }
  };

  const handleSubmit = () => {
    if (selectedWords.length !== 4 || gameOver) return;

    const correctSet = gameBoards[currentBoardIndex].sets.find(set => 
      set.words.every(word => selectedWords.includes(word))
    );

    if (correctSet) {
      setFoundSets([...foundSets, correctSet]);
      setSelectedWords([]);
      setShuffledWords(shuffledWords.filter(word => !correctSet.words.includes(word)));
      if (foundSets.length === 3) {
        setGameOver(true);
      }
    } else {
      setLives(lives - 1);
      setSelectedWords([]);
      setNotification('Incorrect guess. Try again!');
      if (lives === 1) {
        setGameOver(true);
      }
    }
  };

  const handleDifficultySelect = (difficulty: Difficulty) => {
    setSelectedDifficulty(difficulty);
  };

  if (!selectedDifficulty) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white p-4 sm:p-8 flex flex-col items-center justify-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8 text-center">Italian Connections</h1>
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6">Select Difficulty:</h2>
        <div className="space-x-2 sm:space-x-4">
          {(['Easy', 'Medium', 'Hard'] as Difficulty[]).map((difficulty) => (
            <button
              key={difficulty}
              onClick={() => handleDifficultySelect(difficulty)}
              className="px-4 sm:px-6 py-2 bg-white text-blue-600 rounded-full text-base sm:text-lg font-semibold transition duration-300 hover:bg-blue-100"
            >
              {difficulty}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8 text-center">Italian Connections</h1>
        <div className="mb-4 sm:mb-6 text-lg sm:text-xl font-semibold text-center">
          Difficulty: {selectedDifficulty} | Lives: {lives}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-8">
          {shuffledWords.map((word, index) => (
            <button
              key={index}
              className={`p-2 sm:p-4 rounded-lg text-sm sm:text-lg font-semibold transition duration-300 ${
                selectedWords.includes(word) 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-white text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => handleWordClick(word)}
              disabled={gameOver}
            >
              {word}
            </button>
          ))}
        </div>
        <div className="flex justify-center space-x-4 mb-4 sm:mb-8">
          <button 
            onClick={handleSubmit}
            className="px-4 sm:px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full text-sm sm:text-lg font-semibold transition duration-300"
            disabled={gameOver}
          >
            Submit
          </button>
          <button 
            onClick={startNewGame}
            className="px-4 sm:px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-sm sm:text-lg font-semibold transition duration-300"
          >
            New Game
          </button>
        </div>
        <div className="w-full max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl mb-4 font-bold">Found Sets:</h2>
          {foundSets.map((set, index) => (
            <div key={index} className="mb-4 p-4 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg">
              <p className="font-semibold text-lg sm:text-xl">{set.connection}:</p>
              <p className="text-base sm:text-lg">{set.words.join(', ')}</p>
            </div>
          ))}
        </div>
        {gameOver && (
          <div className="mt-8 p-6 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg">
            <h2 className="text-2xl sm:text-3xl mb-4 font-bold text-center">
              {lives > 0 ? 'Congratulations! You won!' : 'Game Over'}
            </h2>
            {lives === 0 && (
              <div>
                <p className="text-lg sm:text-xl mb-2 font-semibold">Correct Answers:</p>
                {gameBoards[currentBoardIndex].sets.map((set, index) => (
                  <div key={index} className="mb-2">
                    <p className="font-semibold">{set.connection}:</p>
                    <p>{set.words.join(', ')}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      <Notification 
        message={notification ?? ''}
        isVisible={!!notification}
        onHide={() => setNotification(null)}
      />
    </div>
  );
}