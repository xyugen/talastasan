import StoryChapter from "@/interface/StoryChapter";
import { ArrowRight, BookOpen } from "lucide-react";

interface ChapterButtonProps {
    chapter: StoryChapter;
    onClick?: () => void;
}

const ChapterButton = ({ chapter, onClick }: ChapterButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="group block overflow-hidden rounded-xl border border-secondary/10 bg-white p-6 shadow-lg transition-all duration-300 hover:border-secondary/30 hover:shadow-xl"
        >
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-secondary">
                    {chapter.title}
                </h3>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10 text-secondary transition-all duration-300 group-hover:bg-secondary group-hover:text-white">
                    <BookOpen className="size-4" />
                </span>
            </div>

            <p className="text-left text-surface-content/80 line-clamp-3">
                {chapter.content}
            </p>

            <div className="mt-4 flex items-center gap-2">
                <div className="flex items-center text-sm text-secondary/80">
                    <span className="group-hover:underline">Basahin</span>
                    <ArrowRight className="size-4" />
                </div>
                <div className="h-[2px] w-0 bg-secondary/30" />
            </div>

            {/* Decorative corner */}
            <div className="absolute bottom-0 right-0 size-12 overflow-hidden">
                <div className="absolute bottom-0 right-0 size-4 translate-x-2 translate-y-2 rotate-45 bg-secondary/5" />
            </div>
        </button>
    );
};

export default ChapterButton;
