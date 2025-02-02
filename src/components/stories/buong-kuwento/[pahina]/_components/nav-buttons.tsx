import { Button } from "@/components/ui/button";
import StoryChapter from "@/interface/StoryChapter";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const NavButtons = ({
  prev,
  next,
}: {
  prev: StoryChapter;
  next: StoryChapter;
}) => {
  return (
    <div className="flex items-center justify-between">
      {prev ? (
        <Link
          href={`/buong-kuwento${prev.link}`}
          className="hover:text-secondary-foreground group flex items-center space-x-2 text-secondary transition"
        >
          <Button
            size={"lg"}
            variant="outline"
            className="flex items-center space-x-2"
          >
            <ChevronLeft className="transition group-hover:scale-110" />
            <span>{prev.title}</span>
          </Button>
        </Link>
      ) : (
        <div className="w-24"></div>
      )}

      {next ? (
        <Link
          href={`/buong-kuwento${next.link}`}
          className="hover:text-secondary-foreground group flex items-center space-x-2 text-secondary transition"
        >
          <Button
            size={"lg"}
            variant="default"
            className="flex bg-secondary hover:bg-secondary/90 items-center space-x-2"
          >
            <span>{next.title}</span>
            <ChevronRight className="transition group-hover:scale-110" />
          </Button>
        </Link>
      ) : (
        <div className="w-24"></div>
      )}
    </div>
  );
};

export default NavButtons;
