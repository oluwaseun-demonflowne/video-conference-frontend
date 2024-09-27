import { create } from "zustand";

type SideBarState = {
  showSideBar: boolean;
};

type SideBarAction = {
  setShowSideBar: (state: boolean) => void;
};

export const useSideBarState = create<SideBarState & SideBarAction>((set) => ({
  showSideBar: false,
  setShowSideBar: (state) => {
    set(() => ({ showSideBar: state }));
  }
}));
