'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

interface StoredSentence {
  id: string;
  italian_text: string;
  english_text: string;
  categories: string[];
  created_at?: string;
}

export default function UserContent() {
  const [sentences, setSentences] = useState<StoredSentence[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSentences = async () => {
      try {
        const response = await axios.get('/api/sentences');
        if (response.data.success) {
          setSentences(response.data.sentences);
        }
      } catch (error) {
        console.error('Error fetching sentences:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSentences();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-4xl font-bold">User Content</h1>
          <Link 
            href="/italian" 
            className="bg-white bg-opacity-20 px-4 py-2 rounded-lg hover:bg-opacity-30 transition"
          >
            Back to Menu
          </Link>
        </div>
        
        <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Stored Sentences</h2>
          
          {isLoading ? (
            <div className="text-center py-4">Loading...</div>
          ) : sentences.length === 0 ? (
            <div className="text-center py-4">
              No stored sentences found
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white border-opacity-20">
                    <th className="px-6 py-3 text-left">Italian</th>
                    <th className="px-6 py-3 text-left">English</th>
                    <th className="px-6 py-3 text-left">Categories</th>
                  </tr>
                </thead>
                <tbody>
                  {sentences.map((sentence) => (
                    <tr key={sentence.id} className="border-b border-white border-opacity-10 hover:bg-white hover:bg-opacity-10">
                      <td className="px-6 py-4 whitespace-normal">{sentence.italian_text}</td>
                      <td className="px-6 py-4 whitespace-normal">{sentence.english_text}</td>
                      <td className="px-6 py-4 whitespace-normal">
                        {sentence.categories?.join(', ') || 'No categories'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 