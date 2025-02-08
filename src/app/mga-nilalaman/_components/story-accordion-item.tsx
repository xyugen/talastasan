"use client";

import { AccordionStory } from "@/interface/AccordionStory";
import { Accordion } from "radix-ui";
import PageTitle from "./page-title";

const StoryAccordionItem = ({ story }: { story: AccordionStory }) => {
    const ContentComponent = story.content;
    const itemId = story.title.replaceAll(" ", "-").toLowerCase();
    return (
        <Accordion.Item id={itemId} value={itemId}>
            <Accordion.Trigger
                className="w-full [&[data-state=open]>div>svg]:rotate-180"
                onClick={() => {
                    const element = document.getElementById(itemId);
                    if (element) {
                        // delay
                        setTimeout(() => {
                            // offset Y
                            element.scrollIntoView({
                                behavior: "smooth",
                            });
                        }, 500);
                    }
                }}
            >
                <PageTitle title={story.title} />
            </Accordion.Trigger>
            <Accordion.Content className="data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up px-2 w-full">
                {ContentComponent && <ContentComponent />}
            </Accordion.Content>
        </Accordion.Item>
    );
};

export default StoryAccordionItem;
