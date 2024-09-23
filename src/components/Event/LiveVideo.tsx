"use client";
import Image from "next/image";
import React, { useState } from "react";
import LoadingIcon from "./LoadingIcon";
import LiveControl from "./LiveControl";
import SideBar from "../my-own-ui/SideBar/SideBar";
import { useSideBarState } from "@/store";
import { IoStopCircleOutline } from "react-icons/io5";
import EndStreamTopRight from "../my-own-ui/EndStreamTopRight";
import { useCloseMenuWhenClickedOutside } from "@/custom hooks/useCloseMenuWhenClickedOutside";
import YouAreInvited from "../my-own-ui/YouAreInvited";

const LiveVideo = () => {
  const { showSideBar } = useSideBarState();
  const [openRightStream, setOpenRightStream] = useState(false);
  const [showInvitedModal, setShowInvitedModal] = useState(false);
  const { menuRef } = useCloseMenuWhenClickedOutside(setOpenRightStream);
  return (
    <div className="flex h-screen flex-col justify-between">
      <div className="flex items-center justify-between px-8 py-4">
        <Image
          className="w-6"
          src={"/Generic.png"}
          alt="logo"
          width={100}
          height={100}
        />
        <div className="flex items-center gap-3 text-[15px]">
          <p className="h-fit w-fit rounded-full bg-red-700 p-1"></p>
          <div className="flex items-center rounded-md border border-slate-600">
            <div className="flex items-center gap-3 px-2 py-1">
              <p className="h-fit w-fit rounded-full bg-red-700 p-1"></p>
              <p>LIVE</p>
              <p className="text-slate-400">1:23</p>
            </div>
            <div
              ref={menuRef}
              className="relative flex gap-1 border-l border-slate-600 px-2 py-1 text-sm">
              <button
                onClick={() => {
                  setOpenRightStream(true);
                }}
                className={`flex ${openRightStream ? "pointer-events-none text-slate-400" : "text-white"} items-center gap-1`}>
                <IoStopCircleOutline />
                <span>End</span>
              </button>
              <EndStreamTopRight
                openRightStream={openRightStream}
                setOpenRightStream={setOpenRightStream}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`flex gap-4 ${showSideBar ? "px-8" : "px-28"}`}>
        <div className="relative w-[100%]">
          <Image
            src={"/seyi.png"}
            unoptimized
            className={`h-[80vh] w-[100%] ${showSideBar ? "rounded-xl" : ""} object-cover opacity-40`}
            alt="picture"
            width={100}
            height={100}
          />
          <div className="absolute left-[50%] top-[50%] flex flex-col items-center gap-3 text-[15px] font-semibold text-white">
            <LoadingIcon />
            Going live
          </div>
        </div>
        <SideBar />
      </div>
      <LiveControl />
      <YouAreInvited
        showInvitedModal={showInvitedModal}
        setShowInvitedModal={setShowInvitedModal}
      />
    </div>
  );
};

export default LiveVideo;
