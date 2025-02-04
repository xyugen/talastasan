"use client";

import { Accordion } from "radix-ui";
import { useEffect, useState } from "react";
import StoryAccordionItem from "./story-accordion-item";
import { AccordionStory } from "@/interface/AccordionStory";
import dynamic from "next/dynamic";

const Buod = dynamic(() => import("@/components/stories/buod/buod"));
const Talasalitaan = dynamic(() => import("@/components/stories/talasalitaan/talasalitaan"));
const KuwentongMayLarawan = dynamic(() => import("@/components/stories/kuwentong-may-larawan/kuwentong-may-larawan"));
const BuongKuwento = dynamic(() => import("@/components/stories/buong-kuwento/buong-kuwento"));

const impengNegroStories: AccordionStory[] = [
    {
        title: "Talasalitaan",
        content: Talasalitaan,
    },
    {
        title: "Buong Kuwento",
        content: BuongKuwento,
    },
    {
        title: "Buod",
        content: Buod,
    },
    {
        title: "Kuwentong May Larawan",
        content: KuwentongMayLarawan,
    },
];

const AccordionRoot = ({ hash }: { hash: string }) => {
    const [value, setValue] = useState<string | null>(null);

    useEffect(() => {
        // scroll to hash if it exists
        if (hash) {
            const element = document.getElementById(hash);
            if (element) {
                // delay scroll
                setTimeout(() => {
                    // offset Y
                    element.scrollIntoView({
                        behavior: "smooth",
                    });
                }, 500);
            }
        } else {
            // scroll to top
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }, [hash]);

    return (
        <Accordion.Root
            defaultValue={hash}
            value={value === null ? hash : value}
            onValueChange={setValue}
            type="single"
            collapsible
        >
            {impengNegroStories.map((story) => (
                <StoryAccordionItem key={story.title} story={story} />
            ))}
        </Accordion.Root>
    );
};

export default AccordionRoot;
