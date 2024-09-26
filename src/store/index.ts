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
type CameraState = {
  cameraDisplay: MediaStream | null;
};

type CameraAction = {
  setShowCamera: (state: MediaStream | null) => void;
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
export const useCameraState = create<CameraState & CameraAction>((set) => ({
  cameraDisplay: null,
  setShowCamera: (state) => {
    set(() => ({ cameraDisplay: state }));
  }
}));
