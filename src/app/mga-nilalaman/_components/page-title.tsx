import StoryChapter from "@/interface/StoryChapter";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface PageTitleProps {
    title: string;
    chapter?: StoryChapter;
    isAccordion?: boolean;
}

const PageTitle = ({ title, chapter, isAccordion = true }: PageTitleProps) => {
    return (
        <div
            className={cn(
                "group flex flex-col items-center space-y-1 md:space-y-2 bg-secondary md:p-8 text-secondary-foreground md:px-[10%] border-b border-primary",
                isAccordion ? "p-4 cursor-pointer" : "p-6 cursor-default"
            )}
        >
            <div>
                <h1
                    className={cn(
                        "text-center text-2xl md:text-3xl font-medium",
                        isAccordion && "group-hover:underline"
                    )}
                >
                    {title}
                </h1>
                {chapter && <p className="text-center">{chapter.title}</p>}
            </div>
            {isAccordion && (
                <ChevronDown className="size-6 transition-transform duration-200" />
            )}
        </div>
    );
};

export default PageTitle;
