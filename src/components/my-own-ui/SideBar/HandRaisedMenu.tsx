import React, { type Dispatch, type SetStateAction } from "react";
import { TbHandOff } from "react-icons/tb";
import { CgUserRemove } from "react-icons/cg";
import { PiMicrophoneStage } from "react-icons/pi";

type Props = {
  iwasclicked: number;
  currentIndex: number;
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
};

const HandRaisedMenu = ({
  iwasclicked,
  currentIndex,
  openMenu,
  setOpenMenu
}: Props) => {
  if (!openMenu) {
    return null;
  }

  if (iwasclicked !== currentIndex) {
    return null;
  }

  return (
    <div className=" fixed right-16 !z-[99999] flex w-[200px] flex-col rounded-md border border-gray-600 bg-[#191b23] font-medium">
      <button
        onClick={() => {
          setOpenMenu(false);
        }}
        className="flex items-center gap-2 border-b border-gray-600 px-4 py-3 text-sm">
        <PiMicrophoneStage className="text-lg" />
        <p>Bring on Stage</p>
      </button>
      <button
        onClick={() => {
          setOpenMenu(false);
        }}
        className="flex items-center gap-2 border-b border-gray-600 px-4 py-3 text-sm">
        <TbHandOff className="text-lg" />
        <p>Lower Hand</p>
      </button>
      <button
        onClick={() => {
          setOpenMenu(false);
        }}
        className="flex items-center gap-2 px-4 py-3 text-sm text-[#c74e5b]">
        <CgUserRemove className="text-lg" />
        <p>Remove Participant</p>
      </button>
    </div>
  );
};

export default HandRaisedMenu;
