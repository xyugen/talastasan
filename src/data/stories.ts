import {
  Buod as BuodImg,
  BuongKuwento as BuongKuwentoImg,
  KuwentongMayLarawan as KuwentongMayLarawanImg,
} from "@/assets/images/stories";
import {
  QuentinBuodCover,
  SaLupaNgSarilingBayanBuodCover,
  TataSeloBuodCover,
} from "@/assets/images/written-works/buod";
import {
  QuentinBuongKuwentoCover,
  SaLupaNgSarilingBayanBuongKuwentoCover,
  TataSeloBuongKuwentoCover,
} from "@/assets/images/written-works/buong-kuwento";
import {
  QuentinKuwentongMayLarawanCover,
  SaLupaNgSarilingKuwentongMayLarawanCover,
  TataSeloKuwentongMayLarawanCover,
} from "@/assets/images/written-works/kuwentong-may-larawan";
import { StaticImageData } from "next/image";
import React from "react";

export interface Story {
  image?: StaticImageData;
  link?: string;
  title: string;
  description: string;
  imageClassName?: string;
  imageStye?: React.CSSProperties;
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

const tataSeloStories: Story[] = [
  {
    image: TataSeloBuongKuwentoCover,
    link: "#buong-kuwento",
    title: "Buong Kuwento",
    description: "Tingnan ang detalyadong pangyayari.",
  },
  {
    image: TataSeloBuodCover,
    link: "#buod",
    title: "Buod",
    description: "Isang maikling buod ng kwento.",
  },
  {
    image: TataSeloKuwentongMayLarawanCover,
    link: "#kuwentong-may-larawan",
    title: "Kuwentong May Larawan",
    description:
      "Tingnan ang detalyadong pangyayari sa pamamagitan ng mga larawan.",
  },
];

const saLupaNgSarilingBayanStories: Story[] = [
  {
    image: SaLupaNgSarilingBayanBuongKuwentoCover,
    link: "#buong-kuwento",
    title: "Buong Kuwento",
    description: "Tingnan ang detalyadong pangyayari.",
  },
  {
    image: SaLupaNgSarilingBayanBuodCover,
    link: "#buod",
    title: "Buod",
    description: "Isang maikling buod ng kwento.",
  },
  {
    image: SaLupaNgSarilingKuwentongMayLarawanCover,
    link: "#kuwentong-may-larawan",
    title: "Kuwentong May Larawan",
    description:
      "Tingnan ang detalyadong pangyayari sa pamamagitan ng mga larawan.",
  },
];

const quentinStories: Story[] = [
  {
    image: QuentinBuongKuwentoCover,
    link: "#buong-kuwento",
    title: "Buong Kuwento",
    description: "Tingnan ang detalyadong pangyayari.",
  },
  {
    image: QuentinBuodCover,
    link: "#buod",
    title: "Buod",
    description: "Isang maikling buod ng kwento.",
  },
  {
    image: QuentinKuwentongMayLarawanCover,
    link: "#kuwentong-may-larawan",
    title: "Kuwentong May Larawan",
    description:
      "Tingnan ang detalyadong pangyayari sa pamamagitan ng mga larawan.",
    imageClassName: "!object-top",
    imageStye: { objectPosition: "top" },
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

export {
  emptyStories,
  impengNegroStories,
  quentinStories,
  saLupaNgSarilingBayanStories,
  tataSeloStories
};

