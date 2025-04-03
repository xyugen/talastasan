import { Salita } from "@/data/talasalitaan";
import WordCards from "./_components/word-cards";

const Talasalitaan = ({ words }: { words: Salita[] }) => {
  return (
    <div className="max-w-3xl mx-auto py-6">
      <WordCards words={words} />
    </div>
  );
};

export default Talasalitaan;
