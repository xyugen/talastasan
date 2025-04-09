import { Badge } from "@/components/ui/badge";
import { Salita } from "@/data/talasalitaan";
import { AnimatePresence, motion } from "motion/react";

type WordCardProps = {
    word: Salita;
    isFlipped: boolean;
    onFlip: () => void;
};

const ROTATION_DURATION = 0.25;

const WordCard = ({ word, isFlipped, onFlip }: WordCardProps) => {
    return (
        <motion.div
            className="w-full lg:md:w-[49%]"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
        >
            <div
                className="relative cursor-pointer"
                onClick={onFlip}
                style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                }}
            >
                <AnimatePresence initial={false} mode="wait">
                    {!isFlipped ? (
                        <motion.div
                            key="front"
                            initial={{ rotateY: 90 }}
                            animate={{ rotateY: 0 }}
                            exit={{ rotateY: -90 }}
                            transition={{
                                duration: ROTATION_DURATION,
                                ease: "easeInOut",
                            }}
                            className="flex flex-col items-center justify-center gap-2 min-h-[18rem] rounded-lg border-2 bg-card text-card-foreground shadow p-4 border-secondary hover:shadow-lg transition-shadow"
                        >
                            <h2 className="text-4xl font-bold text-center">
                                {word.word}
                            </h2>
                            <p>({word.syllabication})</p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="back"
                            initial={{ rotateY: 90 }}
                            animate={{ rotateY: 0 }}
                            exit={{ rotateY: -90 }}
                            transition={{
                                duration: ROTATION_DURATION,
                                ease: "easeInOut",
                            }}
                            className="min-h-[200px] rounded-lg border-2 bg-card text-card-foreground shadow p-4 border-secondary hover:shadow-lg transition-shadow"
                        >
                            <div className="space-x-1 bg-secondary/10 p-4 mb-4 rounded-lg">
                                <h2 className="inline text-2xl font-normal">
                                    {word.word}
                                </h2>
                                <p className="inline">
                                    ({word.syllabication})
                                </p>
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
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default WordCard;
