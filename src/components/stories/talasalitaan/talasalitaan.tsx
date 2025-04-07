import { Salita } from "@/data/talasalitaan";
import { MousePointer2 } from "lucide-react";
import WordCards from "./_components/word-cards";

const Talasalitaan = ({ words }: { words: Salita[] }) => {
    return (
        <div className="container mx-auto py-6">
            <div className="relative mx-auto flex flex-row justify-center gap-2 mb-6">
                <p>Pindutin upang makita ang kahulugan</p>{" "}
                <MousePointer2 strokeWidth={1.5} className="animate-click-in" />
            </div>
            <WordCards words={words} />
        </div>
    );
};

export default Talasalitaan;
