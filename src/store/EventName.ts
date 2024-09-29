import { create } from "zustand";
type ModalState = {
  eventName: string;
};

type Action = {
  setEventName: (state: string) => void;
};

export const useEventNameState = create<ModalState & Action>((set) => ({
  eventName: "",
  setEventName: (state) => {
    set(() => ({ eventName: state }));
  }
}));
