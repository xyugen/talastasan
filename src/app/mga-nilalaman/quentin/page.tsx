"use client";

import Buod from "@/components/stories/buod/buod";
import BuongKuwento from "@/components/stories/buong-kuwento/buong-kuwento";
import Talasalitaan from "@/components/stories/talasalitaan/talasalitaan";
import { quentinShortenedStory } from "@/data/shortened-story";
import { quentinStoryContents } from "@/data/stories-contents";
import { quentinIntroduction } from "@/data/stories-introduction";
import { quentinTalasalitaan } from "@/data/talasalitaan";
import { AccordionStory } from "@/interface/AccordionStory";
import { useEffect, useState } from "react";
import AccordionRoot from "../_components/accordion";
import Introduction from "../_components/introduction";

const quentinStories: AccordionStory[] = [
    {
        title: "Talasalitaan",
        content: () => <Talasalitaan words={quentinTalasalitaan} />,
    },
    {
        title: "Buong Kuwento",
        content: () => <BuongKuwento storiesContents={quentinStoryContents} />,
    },
    {
        title: "Buod",
        content: () => <Buod shortenedStory={quentinShortenedStory} />,
    },
    {
        title: "Kuwentong May Larawan",
        content: () => <div />,
    },
];

const Page = () => {
    const [hash, setHash] = useState("");

    useEffect(() => {
        setHash(window.location.hash.replace("#", ""));
    }, []);

    return (
        <>
            <Introduction content={quentinIntroduction} />
            <AccordionRoot hash={hash} stories={quentinStories} />;
        </>
    );
};

export default Page;
