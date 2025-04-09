"use client";

import BuongKuwento from "@/components/stories/buong-kuwento/buong-kuwento";
import Talasalitaan from "@/components/stories/talasalitaan/talasalitaan";
import { quentinStoryContents } from "@/data/stories-contents";
import { quentinTalasalitaan } from "@/data/talasalitaan";
import { AccordionStory } from "@/interface/AccordionStory";
import { useEffect, useState } from "react";
import AccordionRoot from "../_components/accordion";

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
        content: () => <div />,
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

    return <AccordionRoot hash={hash} stories={quentinStories} />;
};

export default Page;
