import { Salita } from "@/data/talasalitaan";
import { MousePointer2, Pointer } from "lucide-react";
import WordCards from "./_components/word-cards";

const Talasalitaan = ({ words }: { words: Salita[] }) => {
    return (
        <div className="container mx-auto py-6">
            <div className="mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-6">
                <p>Pindutin upang makita ang kahulugan</p>{" "}
                <div className="relative">
                    <div className="absolute -left-4 -top-2 px-4 py-2 border-2 border-secondary rounded" />
                    <MousePointer2
                        fill="#ffffff"
                        strokeWidth={1.5}
                        className="hidden md:block absolute -right-8 animate-click-in"
                    />
                    <Pointer
                        fill="#ffffff"
                        strokeWidth={1.5}
                        className="md:hidden absolute -right-8 animate-click-in"
                    />
                </div>
            </div>
            <WordCards words={words} />
        </div>
    );
};

export default Talasalitaan;
