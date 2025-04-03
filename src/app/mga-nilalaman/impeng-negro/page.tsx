"use client";

import { impengNegroShortenedStory } from "@/data/shortened-story";
import { impengNegroStoryContents } from "@/data/stories-contents";
import { impengNegroStoryWithImages } from "@/data/story-with-images";
import { impengNegroTalasalitaan } from "@/data/talasalitaan";
import { AccordionStory } from "@/interface/AccordionStory";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import AccordionRoot from "../_components/accordion";

const Buod = dynamic(() => import("@/components/stories/buod/buod"));
const Talasalitaan = dynamic(
  () => import("@/components/stories/talasalitaan/talasalitaan")
);
const KuwentongMayLarawan = dynamic(
  () =>
    import("@/components/stories/kuwentong-may-larawan/kuwentong-may-larawan")
);
const BuongKuwento = dynamic(
  () => import("@/components/stories/buong-kuwento/buong-kuwento")
);

const impengNegroStories: AccordionStory[] = [
  {
    title: "Talasalitaan",
    content: () => <Talasalitaan words={impengNegroTalasalitaan} />,
  },
  {
    title: "Buong Kuwento",
    content: () => <BuongKuwento storiesContents={impengNegroStoryContents} />,
  },
  {
    title: "Buod",
    content: () => <Buod shortenedStory={impengNegroShortenedStory} />,
  },
  {
    title: "Kuwentong May Larawan",
    content: () => (
      <KuwentongMayLarawan storyWithImages={impengNegroStoryWithImages} />
    ),
  },
];

const Page = () => {
  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(window.location.hash.replace("#", "")); // Remove the '#' if needed.
  }, []);

  return <AccordionRoot hash={hash} stories={impengNegroStories} />;
};

export default Page;
