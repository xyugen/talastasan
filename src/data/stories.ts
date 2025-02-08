import {
  Buod as BuodImg,
  BuongKuwento as BuongKuwentoImg,
  KuwentongMayLarawan as KuwentongMayLarawanImg,
} from "@/assets/images/stories";
import { StaticImageData } from "next/image";

export interface Story {
  image?: StaticImageData;
  link?: string;
  title: string;
  description: string;
}

const impengNegroStories: Story[] = [
  {
    image: BuongKuwentoImg,
    link: "#buong-kuwento",
    title: "Buong Kuwento",
    description: "Tingnan ang detalyadong pangyayari.",
  },
  {
    image: BuodImg,
    link: "#buod",
    title: "Buod",
    description: "Isang maikling buod ng kwento.",
  },
  {
    image: KuwentongMayLarawanImg,
    link: "#kuwentong-may-larawan",
    title: "Kuwentong May Larawan",
    description:
      "Tingnan ang detalyadong pangyayari sa pamamagitan ng mga larawan.",
  },
];

const emptyStories: Story[] = [
  {
    // image: BuongKuwento,
    link: "#buong-kuwento",
    title: "Buong Kuwento",
    description: "Tingnan ang detalyadong pangyayari.",
  },
  {
    // image: Buod,
    link: "#buod",
    title: "Buod",
    description: "Isang maikling buod ng kwento.",
  },
  {
    // image: KuwentongMayLarawan,
    link: "#kuwentong-may-larawan",
    title: "Kuwentong May Larawan",
    description:
      "Tingnan ang detalyadong pangyayari sa pamamagitan ng mga larawan.",
  },
];

export { emptyStories, impengNegroStories };

