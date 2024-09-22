"use client";
import { useSideBarState } from "@/store";
import React from "react";
import { LiaTimesSolid } from "react-icons/lia";

const Title = () => {
  const {setShowSideBar} = useSideBarState()
  return (
    <div className="flex items-center justify-between gap-3 rounded-md bg-[#191b23] p-3">
      <div className="flex w-[100%] justify-between">
        <button className="h-12 w-fit rounded-md pl-2 text-[15px]">Chat</button>
        <button className="h-12 w-fit rounded-md bg-[#272a31] px-2 text-[15px]">
          Participants
        </button>
      </div>
      <button onClick={() => {setShowSideBar(false)}}>
        <LiaTimesSolid className="cursor-pointer text-lg opacity-50 hover:opacity-90" />
      </button>
    </div>
  );
};

export default Title;
