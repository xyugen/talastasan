import { Button } from "@/components/ui/button";
import StoryChapter from "@/interface/StoryChapter";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";

interface NavButtonsProps {
    prev?: StoryChapter;
    next?: StoryChapter;
    onHomeClick?: () => void;
    onPrevClick?: () => void;
    onNextClick?: () => void;
}

const NavButtons = ({
    prev,
    next,
    onHomeClick,
    onPrevClick,
    onNextClick,
}: NavButtonsProps) => {
    return (
        <div className="flex items-center justify-between">
            {prev ? (
                <Button
                    onClick={onPrevClick}
                    size={"lg"}
                    variant="outline"
                    className="flex items-center space-x-2 hover:text-secondary-foreground group text-secondary transition"
                >
                    <ChevronLeft className="transition group-hover:scale-110" />
                    <span>{prev.title}</span>
                </Button>
            ) : (
                <div className="w-40"></div>
            )}

            <Button
                onClick={onHomeClick}
                size={"icon"}
                variant="ghost"
                className="rounded-full flex items-center space-x-2 hover:text-secondary-foreground group text-secondary transition"
            >
                <Home className="size-6" />
            </Button>

            {next ? (
                <Button
                    onClick={onNextClick}
                    size={"lg"}
                    variant="default"
                    className="flex bg-secondary hover:bg-secondary/90 items-center space-x-2 text-secondary-foreground group transition"
                >
                    <span>{next.title}</span>
                    <ChevronRight className="transition group-hover:scale-110" />
                </Button>
            ) : (
                <div className="w-40"></div>
            )}
        </div>
    );
};

export default NavButtons;
