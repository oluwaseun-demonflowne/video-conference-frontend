"use client";
import React, { useState } from "react";
import { AiOutlineAudio, AiOutlineAudioMuted } from "react-icons/ai";
import { FiVideo, FiVideoOff } from "react-icons/fi";
import { LuSettings } from "react-icons/lu";
import Settings from "../my-own-ui/Settings";
import { useCameraState, useModalState } from "@/store";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useCloseModalWhenEscClicked } from "@/custom hooks/useCloseModalWhenEscClicked";
import AllDevice from "../my-own-ui/Devices UI/AllDevice";
import { toast } from "sonner";
import { useCloseMenuWhenClickedOutside } from "@/custom hooks/useCloseMenuWhenClickedOutside";

type Props = {
  showSetting?: boolean;
  noBackground?: boolean;
};

const Control = ({ showSetting, noBackground }: Props) => {
  const { setShowModal } = useModalState();
  const [showListOfAudioDevices, setShowListOfAudioDevices] = useState(false);
  const [showListOfVideoDevices, setShowListOfVideoDevices] = useState(false);
  const {
    outputAudioDevices,
    videoDevices,
    audioPermission,
    videoPermission,
    setGetPermission
  } = useCameraState();
  const { menuRef } = useCloseMenuWhenClickedOutside(setShowListOfAudioDevices);
  const { menuRef: videoDiv } = useCloseMenuWhenClickedOutside(
    setShowListOfVideoDevices
  );

  useCloseModalWhenEscClicked();

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-3">
        <div
          ref={menuRef}
          className={`flex w-16 items-center justify-between ${noBackground ? "border border-gray-700" : "bg-[#2e3038]"} rounded-md py-2 pl-2`}>
          <button>
            {audioPermission ? (
              <AiOutlineAudio className="cursor-pointer text-xl" />
            ) : (
              <AiOutlineAudioMuted
                onClick={() => {
                  setGetPermission(true);
                }}
                className="cursor-pointer text-xl"
              />
            )}
          </button>
          <div className="relative">
            <button
              onClick={() => {
                if (!audioPermission) {
                  return toast.error("Please grant audio permission");
                }
                setShowListOfAudioDevices((prev) => !prev);
                setShowListOfVideoDevices(false);
              }}>
              <HiEllipsisVertical className="cursor-pointer text-xl" />
            </button>
            <AllDevice
              show={showListOfAudioDevices}
              list={outputAudioDevices}
            />
          </div>
        </div>
        <div
          ref={videoDiv}
          className={`flex w-16 items-center justify-between ${noBackground ? "border border-gray-700" : "bg-[#2e3038]"} rounded-md py-2 pl-2`}>
          <button>
            {videoPermission ? (
              <FiVideo className="cursor-pointer text-xl" />
            ) : (
              <FiVideoOff
                onClick={() => {
                  setGetPermission(true);
                }}
                className="cursor-pointer text-xl"
              />
            )}
          </button>
          <div className="relative">
            <button
              onClick={() => {
                if (!videoPermission) {
                  return toast.error("Please grant video permission");
                }
                setShowListOfVideoDevices((prev) => !prev);
                setShowListOfAudioDevices(false);
              }}>
              <HiEllipsisVertical className="cursor-pointer text-xl" />
            </button>
            <AllDevice show={showListOfVideoDevices} list={videoDevices} />
          </div>
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
