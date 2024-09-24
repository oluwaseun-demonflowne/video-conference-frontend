"use client";
import { CiEdit } from "react-icons/ci";
import React, { useState } from "react";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import { IoLinkOutline } from "react-icons/io5";
import { LuSettings } from "react-icons/lu";
import { TbPictureInPictureTop } from "react-icons/tb";
import Settings from "./Settings";
import { useModalState } from "@/store";
import ChangeNameEmbedLinkMenu from "./ChangeNameEmbedLinkMenu";

const menuLink = [
  { label: "Embed URL", icon: <IoLinkOutline /> },
  { label: "Enable Picture-in-Picture", icon: <TbPictureInPictureTop /> },
  { label: "Go Fullscreen", icon: <AiOutlineFullscreenExit /> },
  { label: "Edit Session Details", icon: <CiEdit /> },
  { label: "Settings", icon: <LuSettings /> }
];

type Props = {
  openMenuState: boolean;
};

const OpenMenu = ({ openMenuState }: Props) => {
  const { setShowModal } = useModalState();
  const [showEmbedNameMenu, setShowEmbedNameMenu] = useState(false);

  if (!openMenuState) {
    return null;
  }
  return (
    <>
      <div className="o absolute bottom-12 right-0 flex w-[230px] flex-col gap-2 rounded-md border border-gray-600 bg-[#111318] p-3 text-[14px]">
        {menuLink.map((i) => (
          <button
            onClick={() => {
              if (i.label === "Settings") {
                setShowModal(true);
              }
              if (i.label === "Embed URL") {
                setShowEmbedNameMenu(true);
              }
            }}
            className="flex items-center gap-3 text-slate-300 hover:text-white"
            key={i.label}>
            {i.icon}
            <p>{i.label}</p>
          </button>
        ))}
      </div>
      <Settings />
      <ChangeNameEmbedLinkMenu
        setShowEmbedNameMenu={setShowEmbedNameMenu}
        showEmbedNameMenu={showEmbedNameMenu}
        menu="embedUrl"
      />
    </>
  );
};

export default OpenMenu;
{
  /* <CiEdit /> */
}
