"use client";
import { useScreenToDisplay, useSideBarState } from "@/store";
import React from "react";
import { LiaTimesSolid } from "react-icons/lia";

const Title = () => {
  const { setShowSideBar } = useSideBarState();
  const { setScreenToDisplay, screenToDisplay } = useScreenToDisplay();
  return (
    <div className="flex items-center justify-between gap-3 rounded-md bg-[#191b23] p-3">
      <div className="flex w-[100%] justify-between">
        <button
          onClick={() => {
            setScreenToDisplay("chats");
          }}
          className={`h-12 ${screenToDisplay === "chats" ? "bg-[#272a31]" : ""} w-[100%] rounded-md text-[15px]`}>
          Chat
        </button>
        <button
          onClick={() => {
            setScreenToDisplay("participant");
          }}
          className={`h-12 w-fit rounded-md ${screenToDisplay === "participant" ? "bg-[#272a31]" : ""} px-2 text-[15px]`}>
          Participants
        </button>
      </div>
      <button
        onClick={() => {
          setShowSideBar(false);
        }}>
        <LiaTimesSolid className="cursor-pointer text-lg opacity-50 hover:opacity-90" />
      </button>
    </div>
  );
};

export default Title;
