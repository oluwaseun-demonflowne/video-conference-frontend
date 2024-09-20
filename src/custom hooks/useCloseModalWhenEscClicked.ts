import { useModalState } from "@/store";
import { useEffect } from "react";

export const useCloseModalWhenEscClicked = () => {
  const { setShowModal } = useModalState();
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowModal(false);
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
