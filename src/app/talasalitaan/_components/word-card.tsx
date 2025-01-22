import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Salita } from "@/data/talasalitaan";
import { motion } from "motion/react";

const WordCard = ({ word }: { word: Salita }) => {
  return (
    <motion.div className="w-full" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <Card className="border-2 p-4 border-secondary shadow-none">
        <CardContent className="p-0">
          <div className="bg-secondary/10 p-4 mb-4 rounded-lg">
            <h2 className="text-2xl font-normal">{word.word}</h2>
          </div>

          <div className="px-4">
            <table className="w-full border-collapse border-spacing-0 text-left">
              <tbody>
                <tr>
                  <td className="align-top font-bold text-sm text-secondary p-2 w-1/4">
                    <Badge className="text-center rounded-md bg-secondary hover:bg-secondary/80 text-sm md:text-base font-normal">
                      Bahagi ng Pananalita
                    </Badge>
                  </td>
                  <td className="align-top text-base md:text-lg p-2">
                    {word.partOfSpeech}
                  </td>
                </tr>
                <tr>
                  <td className="align-top font-bold text-sm text-secondary p-2">
                    <Badge className="text-center rounded-md bg-secondary hover:bg-secondary/80 text-sm md:text-base font-normal">
                      Kahulugan
                    </Badge>
                  </td>
                  <td className="align-top text-base md:text-lg p-2">
                    {word.meaning}
                  </td>
                </tr>
                <tr>
                  <td className="align-top font-bold text-sm text-secondary p-2">
                    <Badge className="text-center rounded-md bg-secondary hover:bg-secondary/80 text-sm md:text-base font-normal">
                      Pangungusap
                    </Badge>
                  </td>
                  <td className="align-top text-base md:text-lg p-2">
                    {word.sentence}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default WordCard;
