import StoryChapter from "@/interface/StoryChapter";
import { ChevronDown } from "lucide-react";

interface PageTitleProps {
    title: string;
    chapter?: StoryChapter;
}

const PageTitle = ({ title, chapter }: PageTitleProps) => {
    return (
        <div className="group flex flex-col items-center space-y-1 md:space-y-2 bg-secondary p-4 md:p-8 text-secondary-foreground md:px-[10%] border-b border-primary">
            <div>
                <h1 className="text-center text-2xl md:text-3xl font-medium group-hover:underline">
                    {title}
                </h1>
                {chapter && <p className="text-center">{chapter.title}</p>}
            </div>
            <ChevronDown className="size-6 transition-transform duration-200" />
        </div>
    );
};

export default PageTitle;
