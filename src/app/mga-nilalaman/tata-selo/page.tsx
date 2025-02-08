"use client";

import { AccordionStory } from "@/interface/AccordionStory";
import { useEffect, useState } from "react";
import AccordionRoot from "../_components/accordion";

const tataSelo: AccordionStory[] = [
  {
    title: "Talasalitaan",
    content: () => <div></div>,
  },
  {
    title: "Buong Kuwento",
    content: () => <div></div>,
  },
  {
    title: "Buod",
    content: () => <div></div>,
  },
  {
    title: "Kuwentong May Larawan",
    content: () => <div></div>,
  },
];

const Page = () => {
  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(window.location.hash.replace("#", ""));
  }, []);

  return <AccordionRoot hash={hash} stories={tataSelo} />;
};

export default Page;