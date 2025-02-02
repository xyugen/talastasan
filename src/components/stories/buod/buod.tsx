import shortenedStory from "@/data/shortened-story";
import ChapterReader from "../../../app/mga-nilalaman/_components/chapter-reader";

const Buod = () => {
    return (
        <div className="container mx-auto space-y-12 px-2 py-4 md:px-[10%]">
            <ChapterReader>
                <p className="whitespace-pre-wrap">{shortenedStory}</p>
            </ChapterReader>
        </div>
    );
};

export default Buod;
