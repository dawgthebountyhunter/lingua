import React from 'react';

interface FlashcardProps {
  card: {
    italianWord: string;
    englishTranslation: string;
    partOfSpeech: string;
    examples: { italian: string; english: string }[];
  };
  isFlipped: boolean;
  onFlip: () => void;
}

const Flashcard: React.FC<FlashcardProps> = ({ card, isFlipped, onFlip }) => {
  return (
    <div className="flashcard-container" onClick={onFlip}>
      <div className={`flashcard ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="flashcard-face flashcard-front">
          <h2 className="text-2xl font-bold text-gray-800">
            {card.italianWord}
          </h2>
        </div>
        <div className="flashcard-face flashcard-back">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {card.englishTranslation}
          </h2>
          <div className="text-sm text-gray-600 overflow-y-auto max-h-40">
            {card.examples.map((example, index) => (
              <div key={index} className="mb-2">
                <p>{example.italian}</p>
                <p>{example.english}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;