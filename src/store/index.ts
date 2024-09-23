import { create } from "zustand";

type ModalState = {
  showModal: boolean;
};
type SideBarState = {
  showSideBar: boolean;
};
type ScreenState = {
  screenToDisplay: "chats" | "participant";
};

type Action = {
  setShowModal: (state: boolean) => void;
};
type SideBarAction = {
  setShowSideBar: (state: boolean) => void;
};
type ScreenStateAction = {
  setScreenToDisplay: (state: "chats" | "participant") => void;
};

export const useModalState = create<ModalState & Action>((set) => ({
  showModal: false,
  setShowModal: (state) => {
    set(() => ({ showModal: state }));
  }
}));
export const useSideBarState = create<SideBarState & SideBarAction>((set) => ({
  showSideBar: false,
  setShowSideBar: (state) => {
    set(() => ({ showSideBar: state }));
  }
}));
export const useScreenToDisplay = create<ScreenState & ScreenStateAction>(
  (set) => ({
    screenToDisplay: "chats",
    setScreenToDisplay: (state) => {
      set(() => ({ screenToDisplay: state }));
    }
  })
);
