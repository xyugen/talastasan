"use client";

import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import React, { ComponentType, useEffect, useState } from "react";
import { split } from "sentence-splitter";

interface PaginatedChapterReaderProps {
    content: string;
    isLastPage?: boolean;
    lastPage?: ComponentType;
    className?: string;
}

const splitIntoPages = (text: string, maxChars: number): string[] => {
    const nodes = split(text, {
        SeparatorParser: {
            separatorCharacters: ["”"],
        },
    });

    const sentences: string[] = [];
    let buffer = "";

    // Group tokens into complete sentences while preserving all formatting
    nodes.forEach((node) => {
        buffer += node.raw;
        if (node.type === "Sentence") {
            sentences.push(buffer);
            buffer = "";
        }
    });

    // In case there's leftover after the last sentence
    if (buffer.trim() !== "") {
        sentences.push(buffer);
    }

    const pages: string[] = [];
    let currentPage = "";

    for (const sentence of sentences) {
        if ((currentPage + sentence).length > maxChars && currentPage !== "") {
            pages.push(currentPage.trim());
            currentPage = sentence;
        } else {
            currentPage += sentence;
        }
    }

    if (currentPage) {
        pages.push(currentPage.trim());
    }

    return pages;
};

const PaginatedChapterReader: React.FC<PaginatedChapterReaderProps> = ({
    content,
    isLastPage = false,
    lastPage,
    className = "",
}) => {
    const [pages, setPages] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const LastPage = lastPage;

    useEffect(() => {
        const CHARS_PER_PAGE = 1000;

        const pagesArray = splitIntoPages(content, CHARS_PER_PAGE);
        setPages(pagesArray);
        setCurrentPage(0);
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
                    {/* {currentPage !== pages.length - 1 && (
                        <span className="font-light">...</span>
                    )} */}
                    {isLastPage && LastPage && <LastPage />}
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
