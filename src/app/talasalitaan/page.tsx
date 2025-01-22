"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import talasalitaan, { Salita } from "@/data/talasalitaan";
import { Search, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import WordCard from "./_components/word-card";

const Page = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [wordResult, setWordResult] = useState<Salita>();

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setWordResult(undefined);
      return;
    }

    const filteredResults = talasalitaan
      .filter((salita) =>
        salita.word.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .at(0);

    setWordResult(filteredResults);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-4xl md:text-5xl font-normal text-center mb-8 text-secondary/80">
        Talasalitaan
      </h1>
      <p className="text-center mb-4">Maghanap ng Salita</p>

      <div className="flex gap-2 mb-8">
        <div className="relative flex-grow">
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Ilagay ang salita rito..."
            className="pr-8 text-lg border-2"
          />
          {searchTerm && (
            <button
              onClick={() => {
                setSearchTerm("");
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
        <Button
          onClick={handleSearch}
          className="bg-secondary text-secondary-foreground hover:bg-secondary/80"
        >
          <Search className="mr-2 h-5 w-5" />
          Hanapin
        </Button>
      </div>

      {wordResult && <WordCard word={wordResult} />}
    </motion.div>
  );
};

export default Page;
