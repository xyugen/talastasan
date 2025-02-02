"use client";

import { Story } from "@/data/stories";
import { Accordion } from "radix-ui";
import PageTitle from "../../_components/page-title";

const StoryAccordionItem = ({ story }: { story: Story }) => {
  const ContentComponent = story.content;
    return (
        <Accordion.Item id={story.title.replace(" ", "-")} value={story.title}>
            <Accordion.Header>
                <Accordion.Trigger asChild>
                    <PageTitle
                        title={story.title}
                        onClick={() => {
                            const element = document.getElementById(
                                story.title.replace(" ", "-")
                            );
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
