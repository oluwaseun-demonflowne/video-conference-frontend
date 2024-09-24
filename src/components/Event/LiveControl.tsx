"use client";
import React, { useState } from "react";
import Control from "../HostPreviewPage/Control";
import { HiEllipsisVertical } from "react-icons/hi2";
import { MdEmojiEmotions } from "react-icons/md";
import { TbLogin } from "react-icons/tb";
import { useModalState, useScreenToDisplay, useSideBarState } from "@/store";
import { FiMessageSquare } from "react-icons/fi";
import { GoPeople } from "react-icons/go";
import { LuMenu, LuScreenShare } from "react-icons/lu";
import OpenMenu from "../my-own-ui/OpenMenu";
import { useCloseMenuWhenClickedOutside } from "@/custom hooks/useCloseMenuWhenClickedOutside";
import LeaveEndStream from "../my-own-ui/LeaveEndStream";
import StartSharing from "../my-own-ui/StartSharing";
import SharePDF from "../my-own-ui/SharePDF";

const LiveControl = () => {
  const [openMenuState, setOpenMenuState] = useState(false);
  const [openEndLeaveSession, setOpenEndLeaveSession] = useState(false);
  const [openStartSharing, setOpenStartSharing] = useState(false);
  const [openSharePdf, setOpenSharePdf] = useState(false);
  const { menuRef } = useCloseMenuWhenClickedOutside(setOpenMenuState);
  const { menuRef: KRef } = useCloseMenuWhenClickedOutside(
    setOpenEndLeaveSession
  );
  const { menuRef: startScreenRef } =
    useCloseMenuWhenClickedOutside(setOpenStartSharing);
  const { showSideBar, setShowSideBar } = useSideBarState();
  const { setScreenToDisplay } = useScreenToDisplay();

  const { setShowModal } = useModalState();
  return (
    <div className="flex items-center justify-between px-8 py-4">
      <Control />
      <div className="flex items-center gap-4">
        <div
          ref={startScreenRef}
          className={`relative flex gap-1 rounded-md ${openStartSharing ? "bg-[#2e3038]" : ""} px-3 py-2`}>
          <button
            onClick={() => {
              setOpenStartSharing((prev) => !prev);
            }}>
            <LuScreenShare className="text-xl" />
          </button>
          <button>
            <HiEllipsisVertical className="text-2xl" />
          </button>
          <StartSharing
            openStartSharing={openStartSharing}
            setOpenStartSharing={setOpenStartSharing}
            setOpenSharePdf={setOpenSharePdf}
          />
          <SharePDF
            openSharePdf={openSharePdf}
            setOpenSharePdf={setOpenSharePdf}
          />
        </div>
        <MdEmojiEmotions className="text-xl" />
        <div
          className={`flex items-baseline rounded-md ${openEndLeaveSession ? "bg-[#11131a]" : "bg-[#c74e5b]"} px-4 py-1`}>
          <div ref={KRef} className={` ${openStartSharing ? "" : "relative"}`}>
            <button
              onClick={() => {
                setOpenEndLeaveSession((prev) => !prev);
              }}>
              <TbLogin className="text-2xl text-slate-300 hover:text-white" />
            </button>
            <LeaveEndStream openEndLeaveSession={openEndLeaveSession} />
          </div>
          <button
            onClick={() => {
              setShowModal(true);
            }}
            className="">
            <HiEllipsisVertical className="text-2xl text-slate-300 hover:text-white" />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-3 text-xl">
        <button
          onClick={() => {
            setShowSideBar(true);
            setScreenToDisplay("chats");
          }}
          className={` ${showSideBar ? "pointer-events-none opacity-50" : ""} rounded-sm border border-gray-600 p-1`}>
          <FiMessageSquare />
        </button>
        <button
          onClick={() => {
            setShowSideBar(true);
            setScreenToDisplay("participant");
          }}
          className={`flex ${showSideBar ? "pointer-events-none opacity-50" : ""} items-center gap-3 rounded-sm border border-gray-600 px-2 py-1 ${showSideBar ? "bg-[#2e3038]" : ""}`}>
          <GoPeople />
          <p className="text-[14px]">5</p>
        </button>
        <div ref={menuRef} className={` ${openStartSharing ? "" : "relative"}`}>
          <button
            className="rounded-sm bg-[#2e3038] p-2"
            onClick={() => {
              setOpenMenuState((prev) => !prev);
            }}>
            <LuMenu />
          </button>
          <OpenMenu openMenuState={openMenuState} />
        </div>
      </div>
    </div>
  );
};

export default LiveControl;
