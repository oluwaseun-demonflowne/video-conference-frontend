"use client";
import Image from "next/image";
import React from "react";
import LoadingIcon from "./LoadingIcon";
import LiveControl from "./LiveControl";
import SideBar from "../my-own-ui/SideBar/SideBar";
import { useSideBarState } from "@/store";
import { IoStopCircleOutline } from "react-icons/io5";
import EndStreamTopRight from "../my-own-ui/EndStreamTopRight";

const LiveVideo = () => {
  const { showSideBar } = useSideBarState();
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
          <div className="border rounded-md flex items-center">
          <p>LIVE</p>
          <p className="text-slate-400">1:23</p>
          <div className="flex relative gap-1 text-sm text-slate-400">
            <button className=" flex gap-1">
            <IoStopCircleOutline />
            <span>End</span>
            </button>
            <EndStreamTopRight />
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
    </div>
  );
};

export default LiveVideo;
