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
  noBackground?: boolean;
};

const Control = ({ showSetting, noBackground }: Props) => {
  const { setShowModal } = useModalState();

  useCloseModalWhenEscClicked();

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-3">
        <div
          className={`flex w-16 items-center justify-between ${noBackground ? "border border-gray-700" : "bg-[#2e3038]"} rounded-md py-2 pl-2`}>
          <button>
            <AiOutlineAudioMuted className="cursor-pointer text-xl" />
          </button>
          <button>
            <HiEllipsisVertical className="cursor-pointer text-xl" />
          </button>
        </div>
        <div
          className={`flex w-16 items-center justify-between ${noBackground ? "border border-gray-700" : "bg-[#2e3038]"} rounded-md py-2 pl-2`}>
          <button>
            <FiVideoOff className="cursor-pointer text-xl" />
          </button>
          <button>
            <HiEllipsisVertical className="cursor-pointer text-xl" />
          </button>
        </div>
      </div>
      {showSetting && (
        <button
          onClick={() => {
            setShowModal(true);
          }}
          className="rounded-md border border-gray-700 p-1">
          <LuSettings className="cursor-pointer text-xl" />
        </button>
      )}
      <Settings />
    </div>
  );
};

export default Control;
