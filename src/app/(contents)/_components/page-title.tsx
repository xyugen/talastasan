import StoryChapter from "@/interface/StoryChapter";
import React from "react";

const PageTitle = ({
  title,
  chapter,
}: {
  title: string;
  chapter?: StoryChapter;
}) => {
  return (
    <div className="space-y-2 bg-secondary px-8 py-8 text-secondary-foreground md:px-[10%]">
      <h1 className="text-center text-3xl font-medium">{title}</h1>
      {chapter && <p className="text-center">{chapter.title}</p>}
    </div>
  );
};

export default PageTitle;
