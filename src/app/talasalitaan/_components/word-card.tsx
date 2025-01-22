import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Salita } from "@/data/talasalitaan";
import { motion } from "motion/react";
import React from "react";

const WordCard = ({ word }: { word: Salita }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <Card className="border-0 shadow-none">
        <CardContent className="p-0">
          <div className="bg-secondary/10 p-4 mb-4 rounded-lg">
            <h2 className="text-2xl font-normal">{word.word}</h2>
          </div>

          <div className="space-y-6 px-4">
            <div>
              <Badge className="bg-secondary hover:bg-secondary/80 text-base font-normal mb-3">
                Bahagi ng Pananalita
              </Badge>
              <p className="text-lg">{word.partOfSpeech}</p>
            </div>

            <div>
              <Badge className="bg-secondary hover:bg-secondary/80 text-base font-normal mb-3">
                Kahulugan
              </Badge>
              <p className="text-lg">{word.meaning}</p>
            </div>

            <div>
              <Badge className="bg-secondary hover:bg-secondary/80 text-base font-normal mb-3">
                Pangungusap
              </Badge>
              <p className="text-lg">{word.sentence}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default WordCard;
