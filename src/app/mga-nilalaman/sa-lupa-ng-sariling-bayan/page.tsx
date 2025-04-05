"use client";

import {
  saLupaNgSarilingBayanShortenedStory
} from "@/data/shortened-story";
import { saLupaNgSarilingBayanStoryContents } from "@/data/stories-contents";
import { saLupaNgSarilingBayanTalasalitaan } from "@/data/talasalitaan";
import { AccordionStory } from "@/interface/AccordionStory";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import AccordionRoot from "../_components/accordion";

const Buod = dynamic(() => import("@/components/stories/buod/buod"));
const Talasalitaan = dynamic(
  () => import("@/components/stories/talasalitaan/talasalitaan")
);
const BuongKuwento = dynamic(
  () => import("@/components/stories/buong-kuwento/buong-kuwento")
);

const saLupaNgSarilingBayanStories: AccordionStory[] = [
  {
    title: "Talasalitaan",
    content: () => <Talasalitaan words={saLupaNgSarilingBayanTalasalitaan} />,
  },
  {
    title: "Buong Kuwento",
    content: () => (
      <BuongKuwento storiesContents={saLupaNgSarilingBayanStoryContents} />
    ),
  },
  {
    title: "Buod",
    content: () => (
      <Buod shortenedStory={saLupaNgSarilingBayanShortenedStory} />
    ),
  },
];

const Page = () => {
  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(window.location.hash.replace("#", "")); // Remove the '#' if needed.
  }, []);

  return <AccordionRoot hash={hash} stories={saLupaNgSarilingBayanStories} />;
};

export default Page;
