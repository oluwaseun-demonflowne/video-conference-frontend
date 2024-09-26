import { create } from "zustand";

type ScreenState = {
    screenToDisplay: "chats" | "participant";
  };

  type ScreenStateAction = {
    setScreenToDisplay: (state: "chats" | "participant") => void;
  };
  
  export const useScreenToDisplay = create<ScreenState & ScreenStateAction>(
    (set) => ({
      screenToDisplay: "chats",
      setScreenToDisplay: (state) => {
        set(() => ({ screenToDisplay: state }));
      }
    })
  );