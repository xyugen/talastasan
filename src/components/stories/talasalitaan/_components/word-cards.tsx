"use client";

import { Salita } from '@/data/talasalitaan';
import WordCard from './word-card';

const WordCards = ({ words }: { words: Salita[] }) => {
  return (
    <div className="space-y-4">
      {words
        .sort((a, b) => a.word.localeCompare(b.word))
        .map((word) => (
          <WordCard key={word.word} word={word} />
        ))}
    </div>
  );
}

export default WordCards