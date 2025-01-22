"use client";

import talasalitaan from '@/data/talasalitaan';
import React from 'react'
import WordCard from './word-card';

const WordCards = () => {
  return (
    <div className='space-y-4'>
      {talasalitaan.map((word) => (
        <WordCard key={word.word} word={word} />
      ))}
    </div>
  );
}

export default WordCards