import StoryChapter from "@/interface/StoryChapter";
import { BookOpen } from "lucide-react";
import Link from "next/link";

const ChapterButton = ({ chapter }: { chapter: StoryChapter }) => {

  return (
    <div className="group relative">
      <Link
        href={`/buong-kuwento${chapter.link}`}
        className="block overflow-hidden rounded-xl border border-secondary/10 bg-white p-6 shadow-lg transition-all duration-300 hover:border-secondary/30 hover:shadow-xl"
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-secondary">
            {chapter.title}
          </h3>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10 text-secondary transition-all duration-300 group-hover:bg-secondary group-hover:text-white">
            <BookOpen className="size-4" />
          </span>
        </div>

        <p className="text-surface-content/80 line-clamp-3">
          {chapter.content}
        </p>

        <div className="mt-4 flex items-center gap-2">
          <span className="text-sm text-secondary/80">Basahin →</span>
          <div className="h-[2px] w-0 bg-secondary/30" />
        </div>

        {/* Decorative corner */}
        <div className="absolute bottom-0 right-0 size-12 overflow-hidden">
          <div className="absolute bottom-0 right-0 size-4 translate-x-2 translate-y-2 rotate-45 bg-secondary/5" />
        </div>
      </Link>
    </div>
  );
};

export default ChapterButton;
