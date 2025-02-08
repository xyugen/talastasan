import { create } from "zustand";

type State = {
  href: string;
  pageOut: boolean;
  openMenu: boolean;
  soundOn: boolean;
  isSearchExpanded: boolean;
  searchValue: string;
};

type Action = {
  setHref: (href: string) => void;
  setPageOut: (state: boolean) => void;
  setOpenMenu: (state: boolean) => void;
  setSoundOn: (state: boolean) => void;
  setIsSearchExpanded: (state: boolean) => void;
  setSearchValue: (value: string) => void;
};

export const useStateStore = create<State & Action>((set) => ({
  pageOut: false,
  openMenu: false,
  href: "",
  soundOn: true,
  isSearchExpanded: false,
  searchValue: "",
  setPageOut: (state) => set(() => ({ pageOut: state })),
  setOpenMenu: (state) => set(() => ({ openMenu: state })),
  setHref: (href) => set(() => ({ href: href })),
  setSoundOn: (state) => set(() => ({ soundOn: state })),
  setIsSearchExpanded: (state) => set(() => ({ isSearchExpanded: state })),
  setSearchValue: (value) => set(() => ({ searchValue: value })),
}));
