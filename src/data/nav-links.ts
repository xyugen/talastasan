import { PageRoutes } from "@/constants/page-routes";
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
    link: PageRoutes.HOME,
  },
  // {
  //   title: "Talasalitaan",
  //   link: "/talasalitaan",
  // },
  {
    title: "Mga Nilalaman",
    link: PageRoutes.MGA_NILALAMAN,
    items: [
      {
        title: "Impeng Negro",
        link: PageRoutes.IMPENG_NEGRO,
      },
      {
        title: "Tata Selo",
        link: PageRoutes.TATA_SELO,
        disabled: false,
      },
      {
        title: "Sa Lupa Ng Sariling Bayan",
        link: PageRoutes.SA_LUPA_NG_SARILING_BAYAN,
        disabled: false,
      },
      {
        title: "Quentin",
        link: PageRoutes.QUENTIN,
        disabled: false,
      },
    ],
  },
  {
    title: "Tungkol sa",
    link: PageRoutes.TUNGKOL_SA,
  },
  {
    title: "Makipag-ugnay",
    link: PageRoutes.MAKIPAG_UGNAY,
  },
];
