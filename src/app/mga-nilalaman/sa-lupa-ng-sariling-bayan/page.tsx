"use client";

import { saLupaNgSarilingBayanShortenedStory } from "@/data/shortened-story";
import { saLupaNgSarilingBayanStoryContents } from "@/data/stories-contents";
import { saLupaNgSarilingBayanIntroduction } from "@/data/stories-introduction";
import { saLupaNgSarilingBayanTalasalitaan } from "@/data/talasalitaan";
import { AccordionStory } from "@/interface/AccordionStory";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import AccordionRoot from "../_components/accordion";
import Introduction from "../_components/introduction";

const Buod = dynamic(() => import("@/components/stories/buod/buod"));
const Talasalitaan = dynamic(
    () => import("@/components/stories/talasalitaan/talasalitaan")
);
const BuongKuwento = dynamic(
    () => import("@/components/stories/buong-kuwento/buong-kuwento")
);

const saLupaNgSarilingBayanStories: AccordionStory[] = [
    {
        title: "Talasalitaan",
        content: () => (
            <Talasalitaan words={saLupaNgSarilingBayanTalasalitaan} />
        ),
    },
    {
        title: "Buong Kuwento",
        content: () => (
            <BuongKuwento
                storiesContents={saLupaNgSarilingBayanStoryContents}
            />
        ),
    },
    {
        title: "Buod",
        content: () => (
            <Buod shortenedStory={saLupaNgSarilingBayanShortenedStory} />
        ),
    },
    {
        title: "Kuwentong May Larawan",
        content: () => <div />,
    },
];

const Page = () => {
    const [hash, setHash] = useState("");

    useEffect(() => {
        setHash(window.location.hash.replace("#", "")); // Remove the '#' if needed.
    }, []);

    return (
        <>
            <Introduction content={saLupaNgSarilingBayanIntroduction} />
            <AccordionRoot hash={hash} stories={saLupaNgSarilingBayanStories} />
        </>
    );
};

export default Page;
