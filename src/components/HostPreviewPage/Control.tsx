"use client";
import React, { type Dispatch, type SetStateAction } from "react";
import { AiOutlineAudio, AiOutlineAudioMuted } from "react-icons/ai";
import { FiVideo, FiVideoOff } from "react-icons/fi";
import { LuSettings } from "react-icons/lu";
import Settings from "../my-own-ui/Settings";
import { useModalState } from "@/store";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useCloseModalWhenEscClicked } from "@/custom hooks/useCloseModalWhenEscClicked";
import AllDevice from "../my-own-ui/Devices UI/AllDevice";
import { toast } from "sonner";

type Props = {
  showSetting?: boolean;
  noBackground?: boolean;
  outputAudioDevices: MediaDeviceInfo[];
  videoDevices: MediaDeviceInfo[];
  audioPermission: boolean;
  videoPermission: boolean;
  setGetPermission: Dispatch<SetStateAction<boolean>>;
  showListOfVideoDevices: boolean;
  showListOfAudioDevices: boolean;
  setShowListOfVideoDevices: Dispatch<SetStateAction<boolean>>;
  setShowListOfAudioDevices: Dispatch<SetStateAction<boolean>>;
};

const Control = ({
  showSetting,
  noBackground,
  outputAudioDevices,
  videoDevices,
  audioPermission,
  videoPermission,
  setGetPermission,
  showListOfAudioDevices,
  showListOfVideoDevices,
  setShowListOfAudioDevices,
  setShowListOfVideoDevices
}: Props) => {
  const { setShowModal } = useModalState();
  // const {
  //   outputAudioDevices,
  //   videoDevices,
  //   audioPermission,
  //   videoPermission,
  //   setGetPermission
  // } = useChooseAudioVideo(showModal);
  // const [showListOfAudioDevices, setShowListOfAudioDevices] = useState(false);
  // const [showListOfVideoDevices, setShowListOfVideoDevices] = useState(false);

  useCloseModalWhenEscClicked();

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-3">
        <div
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
