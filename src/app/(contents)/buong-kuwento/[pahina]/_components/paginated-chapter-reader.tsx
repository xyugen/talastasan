"use client";

import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";

interface PaginatedChapterReaderProps {
  content: string;
  isLastPage?: boolean;
  className?: string;
}

const PaginatedChapterReader: React.FC<PaginatedChapterReaderProps> = ({
  content,
  isLastPage = false,
  className = "",
}) => {
  const [pages, setPages] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    // Split content into pages based on approximate character count
    const CHARS_PER_PAGE = 1000; // Adjust this number based on your needs
    const words = content.split(" ");
    const pagesArray: string[] = [];
    let currentPageText = "";

    words.forEach((word) => {
      if ((currentPageText + word).length < CHARS_PER_PAGE) {
        currentPageText += (currentPageText ? " " : "") + word;
      } else {
        pagesArray.push(currentPageText);
        currentPageText = word;
      }
    });

    if (currentPageText) {
      pagesArray.push(currentPageText);
    }

    setPages(pagesArray);
  }, [content]);

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage((curr) => curr + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((curr) => curr - 1);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className="rounded-sm border border-primary/10 bg-white p-4 text-base leading-relaxed text-surface-content/80 shadow-sm md:rounded-lg md:p-6 md:text-lg md:shadow-lg min-h-[50vh]">
        <p className="whitespace-pre-wrap">
          {pages[currentPage]}
          {currentPage !== pages.length - 1 && <>...</>}

          {isLastPage && (
            <span className="font-medium flex flex-col gap-4 items-center justify-center mt-10">
              <span className="text-center">
                <i>
                  Sa matinding sikat ng araw, tila siya’y isang mandirigmang
                  sugatan, ngunit matatag na nakatindig sa pinagwagiang
                  larangan.
                </i>
              </span>
              <span className="mt-16">Wakas!</span>
              <span className="not-italic">
                <strong>I M P E N G&nbsp;&nbsp;N E G R O</strong>
              </span>
            </span>
          )}
        </p>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          className="flex items-center disabled:opacity-30"
        >
          <CircleArrowLeft className="size-12" />
        </button>

        <span className="text-sm text-gray-500">
          {currentPage + 1}/{pages.length}
        </span>

        <button
          onClick={handleNextPage}
          disabled={currentPage === pages.length - 1}
          className="flex items-center disabled:opacity-30"
        >
          <CircleArrowRight className="size-12" />
        </button>
      </div>
    </div>
  );
};

export default PaginatedChapterReader;
