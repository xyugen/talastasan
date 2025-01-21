import { create } from "zustand";

type State = {
  href: string;
  pageOut: boolean;
  openMenu: boolean;
  soundOn: boolean;
};

type Action = {
  setHref: (href: string) => void;
  setPageOut: (state: boolean) => void;
  setOpenMenu: (state: boolean) => void;
  setSoundOn: (state: boolean) => void;
};

export const useStateStore = create<State & Action>((set) => ({
  pageOut: false,
  openMenu: false,
  href: "",
  soundOn: true,
  setPageOut: (state) => set(() => ({ pageOut: state })),
  setOpenMenu: (state) => set(() => ({ openMenu: state })),
  setHref: (href) => set(() => ({ href: href })),
  setSoundOn: (state) => set(() => ({ soundOn: state }))
}));
