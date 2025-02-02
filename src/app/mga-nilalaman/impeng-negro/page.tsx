"use client";

import {
    Buod as BuodImg,
    BuongKuwento as BuongKuwentoImg,
    KuwentongMayLarawan as KuwentongMayLarawanImg,
} from "@/assets/images/stories";
import Buod from "@/components/stories/buod/buod";
import BuongKuwento from "@/components/stories/buong-kuwento/buong-kuwento";
import KuwentongMayLarawan from "@/components/stories/kuwentong-may-larawan/kuwentong-may-larawan";
import { Story } from "@/data/stories";
import { Accordion } from "radix-ui";
import StoryAccordionItem from "./_components/story-accordion-item";

const Page = () => {
    const impengNegroStories: Story[] = [
        {
            image: BuongKuwentoImg,
            link: "#buong-kuwento",
            title: "Buong Kuwento",
            description: "Tingnan ang detalyadong pangyayari.",
            content: BuongKuwento,
        },
        {
            image: BuodImg,
            link: "#buod",
            title: "Buod",
            description: "Isang maikling buod ng kwento.",
            content: Buod,
        },
        {
            image: KuwentongMayLarawanImg,
            link: "#kuwentong-may-larawan",
            title: "Kuwentong May Larawan",
            description:
                "Tingnan ang detalyadong pangyayari sa pamamagitan ng mga larawan.",
            content: KuwentongMayLarawan,
        },
    ];

    return (
        <Accordion.Root type="single" collapsible>
            {impengNegroStories.map((story) => (
                <StoryAccordionItem key={story.title} story={story} />
            ))}
        </Accordion.Root>
    );
};

export default Page;
