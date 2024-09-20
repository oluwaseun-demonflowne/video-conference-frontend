"use client";
import React from "react";
import { AiOutlineAudioMuted } from "react-icons/ai";
import { FiVideoOff } from "react-icons/fi";
import { LuSettings } from "react-icons/lu";
import Settings from "../my-own-ui/Settings";
import { useModalState } from "@/store";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useCloseModalWhenEscClicked } from "@/custom hooks/useCloseModalWhenEscClicked";

type Props = {
  showSetting?: boolean;
};

const Control = ({ showSetting }: Props) => {
  const { setShowModal } = useModalState();

    useCloseModalWhenEscClicked();

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-3">
        <div className="flex w-16 items-center justify-between rounded-md bg-[#2e3038] py-2 pl-2">
          <AiOutlineAudioMuted className="cursor-pointer text-xl" />
          <HiEllipsisVertical className="cursor-pointer text-xl" />
        </div>
        <div className="flex w-16 items-center justify-between rounded-md bg-[#2e3038] py-2 pl-2">
          <FiVideoOff className="cursor-pointer text-xl" />
          <HiEllipsisVertical className="cursor-pointer text-xl" />
        </div>
      </div>
      {showSetting && (
        <LuSettings
          onClick={() => {
            setShowModal(true);
          }}
          className="cursor-pointer text-xl"
        />
      )}
      <Settings />
    </div>
  );
};

export default Control;
