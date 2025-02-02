"use client";

import { AccordionStory } from "@/interface/AccordionStory";
import { Accordion } from "radix-ui";
import PageTitle from "../../_components/page-title";

const StoryAccordionItem = ({ story }: { story: AccordionStory }) => {
    const ContentComponent = story.content;
    const itemId = story.title.replaceAll(" ", "-").toLowerCase();
    return (
        <Accordion.Item id={itemId} value={itemId}>
            <Accordion.Header>
                <Accordion.Trigger asChild>
                    <PageTitle
                        title={story.title}
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
                    />
                </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up">
                {ContentComponent && <ContentComponent />}
            </Accordion.Content>
        </Accordion.Item>
    );
};

export default StoryAccordionItem;
