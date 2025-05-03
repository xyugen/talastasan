"use client";

import { impengNegroShortenedStory } from "@/data/shortened-story";
import { impengNegroStoryContents } from "@/data/stories-contents";
import { impengNegroStoryWithImages } from "@/data/story-with-images";
import { impengNegroTalasalitaan } from "@/data/talasalitaan";
import { AccordionStory } from "@/interface/AccordionStory";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import AccordionRoot from "../_components/accordion";
import Introduction from "../_components/introduction";
import { impengNegroIntroduction } from "@/data/stories-introduction";

const Buod = dynamic(() => import("@/components/stories/buod/buod"));
const Talasalitaan = dynamic(
    () => import("@/components/stories/talasalitaan/talasalitaan")
);
const KuwentongMayLarawan = dynamic(
    () =>
        import(
            "@/components/stories/kuwentong-may-larawan/kuwentong-may-larawan"
        )
);
const BuongKuwento = dynamic(
    () => import("@/components/stories/buong-kuwento/buong-kuwento")
);

const LastPage = () => {
    return (
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
    );
};

const impengNegroStories: AccordionStory[] = [
    {
        title: "Talasalitaan",
        content: () => <Talasalitaan words={impengNegroTalasalitaan} />,
    },
    {
        title: "Buong Kuwento",
        content: () => (
            <BuongKuwento
                storiesContents={impengNegroStoryContents}
                lastPage={LastPage}
            />
        ),
    },
    {
        title: "Buod",
        content: () => <Buod shortenedStory={impengNegroShortenedStory} />,
    },
    {
        title: "Kuwentong May Larawan",
        content: () => (
            <KuwentongMayLarawan storyWithImages={impengNegroStoryWithImages} />
        ),
    },
];

const Page = () => {
    const [hash, setHash] = useState("");

    useEffect(() => {
        setHash(window.location.hash.replace("#", "")); // Remove the '#' if needed.
    }, []);

    return (
        <>
            <Introduction content={impengNegroIntroduction} />
            <AccordionRoot hash={hash} stories={impengNegroStories} />
        </>
    );
};

export default Page;
