"use client";

import Buod from "@/components/stories/buod/buod";
import BuongKuwento from "@/components/stories/buong-kuwento/buong-kuwento";
import Talasalitaan from "@/components/stories/talasalitaan/talasalitaan";
import { tataSeloShortenedStory } from "@/data/shortened-story";
import { tataSeloStoryContents } from "@/data/stories-contents";
import { tataSeloIntroduction } from "@/data/stories-introduction";
import { tataSeloTalasalitaan } from "@/data/talasalitaan";
import { AccordionStory } from "@/interface/AccordionStory";
import { useEffect, useState } from "react";
import AccordionRoot from "../_components/accordion";
import Introduction from "../_components/introduction";

const tataSeloStories: AccordionStory[] = [
    {
        title: "Talasalitaan",
        content: () => <Talasalitaan words={tataSeloTalasalitaan} />,
    },
    {
        title: "Buong Kuwento",
        content: () => <BuongKuwento storiesContents={tataSeloStoryContents} />,
    },
    {
        title: "Buod",
        content: () => <Buod shortenedStory={tataSeloShortenedStory} />,
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
            <Introduction content={tataSeloIntroduction} />
            <AccordionRoot hash={hash} stories={tataSeloStories} />
        </>
    );
};

export default Page;
