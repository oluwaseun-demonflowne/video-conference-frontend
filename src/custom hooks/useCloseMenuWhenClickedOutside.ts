import { type Dispatch, type SetStateAction, useEffect, useRef } from "react";

export const useCloseMenuWhenClickedOutside = (
  setOpenMenuState: Dispatch<SetStateAction<boolean>>
) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!menuRef?.current?.contains(e.target as Node)) {
        setOpenMenuState(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuRef]);

  return { menuRef };
};
