"use client";
import React, { type Dispatch, type SetStateAction, useState } from "react";
import ChangeNameMenu from "../MenuUIComponent/ChangeNameMenu";
import EmbedUrl from "../MenuUIComponent/EmbedUrl";

const menuUI = {
  changeName: <ChangeNameMenu />,
  embedUrl: <EmbedUrl />
};

type Props = {
  menu: keyof typeof menuUI;
  showEmbedNameMenu: boolean;
  setShowEmbedNameMenu: Dispatch<SetStateAction<boolean>>;
};

const ChangeNameEmbedLinkMenu = ({
  menu,
  showEmbedNameMenu,
  setShowEmbedNameMenu
}: Props) => {
  const [menuToRender, _setMenuToRender] = useState<keyof typeof menuUI>(menu);
  if (!showEmbedNameMenu) {
    return null;
  }
  return (
    <div className="modal fixed bottom-0 left-0 right-0 top-0 flex h-screen items-center justify-center">
      <form className="flex w-[350px] flex-col justify-center gap-5 overflow-hidden rounded-xl bg-[#11131a] p-4">
        {menuUI[menuToRender]}
        <div className="flex gap-2 text-[15px]">
          <button
            onClick={() => {
              setShowEmbedNameMenu(false);
            }}
            type="button"
            className="h-12 w-[50%] rounded-md border border-slate-600">
            Cancel
          </button>
          <button className="h-12 w-[50%] rounded-md bg-[#2572ed]">
            {menuToRender === "embedUrl" ? "Embed and Share" : "Change"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangeNameEmbedLinkMenu;
