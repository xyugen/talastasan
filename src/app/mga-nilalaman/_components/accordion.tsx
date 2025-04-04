"use client";

import { AccordionStory } from "@/interface/AccordionStory";
import { Accordion } from "radix-ui";
import { useEffect, useState } from "react";
import StoryAccordionItem from "./story-accordion-item";

const AccordionRoot = ({
  hash,
  stories,
}: {
  hash: string;
  stories: AccordionStory[];
}) => {
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
      className="bg-white"
      defaultValue={hash}
      value={value === null ? hash : value}
      onValueChange={setValue}
      type="single"
      collapsible
    >
      {stories.map((story) => (
        <StoryAccordionItem key={story.title} story={story} />
      ))}
    </Accordion.Root>
  );
};

export default AccordionRoot;
