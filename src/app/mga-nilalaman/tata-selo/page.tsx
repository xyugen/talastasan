"use client";

import BuongKuwento from "@/components/stories/buong-kuwento/buong-kuwento";
import Talasalitaan from "@/components/stories/talasalitaan/talasalitaan";
import { tataSeloStoryContents } from "@/data/stories-contents";
import { tataSeloTalasalitaan } from "@/data/talasalitaan";
import { AccordionStory } from "@/interface/AccordionStory";
import { useEffect, useState } from "react";
import AccordionRoot from "../_components/accordion";
import Buod from "@/components/stories/buod/buod";
import { tataSeloShortenedStory } from "@/data/shortened-story";

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
];

const Page = () => {
  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(window.location.hash.replace("#", ""));
  }, []);

  return <AccordionRoot hash={hash} stories={tataSeloStories} />;
};

export default Page;
