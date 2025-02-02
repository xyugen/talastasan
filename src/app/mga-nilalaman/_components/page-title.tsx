import StoryChapter from "@/interface/StoryChapter";
import { ChevronDown } from "lucide-react";

const PageTitle = ({
    title,
    chapter,
    onClick,
}: {
    title: string;
    chapter?: StoryChapter;
    onClick?: () => void;
}) => {
    return (
        <button
            className="group flex flex-col items-center space-y-2 bg-secondary px-8 py-8 text-secondary-foreground md:px-[10%] border-b border-primary w-full"
            onClick={onClick}
        >
            <div>
                <h1 className="text-center text-3xl font-medium group-hover:underline">
                    {title}
                </h1>
                {chapter && <p className="text-center">{chapter.title}</p>}
            </div>
            <ChevronDown className="size-6" />
        </button>
    );
};

export default PageTitle;
