"use client";
import React, { type Dispatch, type SetStateAction } from "react";
import Control from "../HostPreviewPage/Control";
import Image from "next/image";

type Props = {
  showInvitedModal: boolean;
  setShowInvitedModal: Dispatch<SetStateAction<boolean>>;
};

const YouAreInvited = ({ showInvitedModal, setShowInvitedModal }: Props) => {
  if (!showInvitedModal) return null;
  return (
    <div className="modal fixed bottom-0 left-0 right-0 top-0 flex h-screen items-center justify-center">
      <div className="flex flex-col justify-center gap-3 overflow-hidden rounded-xl bg-[#191b23] p-6">
        <div className="text-center">
          <h1 className="text-xl font-medium">
            You are invited to join the stage
          </h1>
          <p className="text-[15px] font-light">
            Setup your audio and video before joining
          </p>
        </div>
        <div className="flex !h-60 !w-[350px] items-center justify-center overflow-hidden rounded-2xl bg-[#11131a]">
          <Image
            alt="image"
            src={"/seyi.png"}
            width={100}
            height={100}
            className="h-full w-full"
          />
        </div>
        <Control noBackground={true} showSetting={true} />
        <div className="flex gap-3">
          <button
            onClick={() => {
              setShowInvitedModal(false);
            }}
            className="h-14 w-[50%] rounded-md border border-gray-500">
            Decline
          </button>
          <button className="h-14 w-[50%] rounded-md bg-[#2582ed]">
            Join now
          </button>
        </div>
      </div>
    </div>
  );
};

export default YouAreInvited;
