"use client";

import { Salita } from '@/data/talasalitaan';
import WordCard from './word-card';

const WordCards = ({ words }: { words: Salita[] }) => {
  return (
    <div className="flex flex-row flex-wrap gap-4 justify-center">
      {words
        .sort((a, b) => a.word.localeCompare(b.word))
        .map((word) => (
          <WordCard key={word.word} word={word} />
        ))}
    </div>
  );
}

export default WordCards