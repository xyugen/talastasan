import React from "react";

const ChapterReader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-sm border border-primary/10 bg-white p-4 text-base leading-relaxed text-surface-content/80 shadow-sm md:rounded-lg md:p-6 md:text-lg md:shadow-lg">
      {children}
    </div>
  );
};

export default ChapterReader;
