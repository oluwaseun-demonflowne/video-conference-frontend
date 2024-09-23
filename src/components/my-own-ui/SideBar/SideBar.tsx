"use client";
import React from "react";
import Title from "./Title";
import { useScreenToDisplay, useSideBarState } from "@/store";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Participant from "./Participant";
import MainChat from "@/components/Chat/MainChat";

const display = {
  chats: <MainChat />,
  participant: <Participant />
};

// type Props = {
//   screenToDisplay : string
// }

const SideBar = () => {
  const { showSideBar } = useSideBarState();
  const { screenToDisplay } = useScreenToDisplay();
  useGSAP(() => {
    gsap.to("#side", {
      width: showSideBar ? "355px" : "0px",
      duration: 0.2,
      opacity: 1
    });
  }, [showSideBar]);
  if (!showSideBar) return null;
  return (
    <div
      id="side"
      className="sidebar h-[80vh] w-[0px] overflow-y-scroll rounded-lg bg-[#11131a] p-3 opacity-0">
      <Title />
      {/* <Participant /> */}
      {/* <MainChat /> */}
      {display[screenToDisplay]}
    </div>
  );
};

export default SideBar;
