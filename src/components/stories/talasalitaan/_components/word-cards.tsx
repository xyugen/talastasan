"use client";

import { Salita } from "@/data/talasalitaan";
import WordCard from "./word-card";
import { useState } from "react";

const WordCards = ({ words }: { words: Salita[] }) => {
    const [flippedWord, setFlippedWord] = useState<string | null>(null);

    return (
        <div className="flex flex-row flex-wrap gap-4 justify-center">
            {words
                .sort((a, b) => a.word.localeCompare(b.word))
                .map((word) => {
                    const isFlipped = flippedWord === word.word;

                    const handleFlip = () => {
                        setFlippedWord((prev) =>
                            prev === word.word ? null : word.word
                        );
                    };

                    return (
                        <WordCard
                            key={word.word}
                            word={word}
                            isFlipped={isFlipped}
                            onFlip={handleFlip}
                        />
                    );
                })}
        </div>
    );
};

export default WordCards;
