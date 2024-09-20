import { create } from "zustand";

type ModalState = {
  showModal: boolean;
};

type Action = {
  setShowModal: (state: boolean) => void;
};

export const useModalState = create<ModalState & Action>((set) => ({
  showModal: false,
  //   setShowModal: () => {
  //     set(({ showModal }) => ({ showModal: !showModal }));
  //   }
  setShowModal: (state) => {
    set(() => ({ showModal: state }));
  }
}));
