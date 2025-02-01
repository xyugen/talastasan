import NavLink from "@/interface/NavLink";

export const storyChapterLinks: NavLink[] = [
  {
    title: "Pahina 1",
    link: "/pahina-1",
  },
  {
    title: "Pahina 2",
    link: "/pahina-2",
  },
  {
    title: "Pahina 3",
    link: "/pahina-3",
  },
  {
    title: "Pahina 4",
    link: "/pahina-4",
  },
  {
    title: "Pahina 5",
    link: "/pahina-5",
  },
  {
    title: "Pahina 6",
    link: "/pahina-6",
  },
  {
    title: "Pahina 7",
    link: "/pahina-7",
  },
  {
    title: "Pahina 8",
    link: "/pahina-8",
  },
];

export const navLinks: NavLink[] = [
  {
    title: "Home",
    link: "/#home",
  },
  // {
  //   title: "Talasalitaan",
  //   link: "/talasalitaan",
  // },
  {
    title: "Mga Nilalaman",
    link: "/mga-nilalaman",
    items: [
      {
        title: "Buong Kuwento",
        link: "/buong-kuwento",
        items: storyChapterLinks,
      },
      {
        title: "Buod",
        link: "/buod",
      },
      {
        title: "Kuwentong May Larawan",
        link: "/kuwentong-may-larawan",
      },
    ],
  },
  {
    title: "Tungkol sa",
    link: "/tungkol-sa",
  },
  {
    title: "Makipag-ugnay",
    link: "/makipag-ugnay",
  }
];
