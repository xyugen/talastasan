"use client";

import Buod from "@/components/stories/buod/buod";
import BuongKuwento from "@/components/stories/buong-kuwento/buong-kuwento";
import KuwentongMayLarawan from "@/components/stories/kuwentong-may-larawan/kuwentong-may-larawan";
import Talasalitaan from "@/components/stories/talasalitaan/talasalitaan";
import { AccordionStory } from "@/interface/AccordionStory";
import { Accordion } from "radix-ui";
import { useEffect, useState } from "react";
import StoryAccordionItem from "./story-accordion-item";

const AccordionRoot = ({ hash }: { hash: string }) => {
    const [value, setValue] = useState<string | null>(null);

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
