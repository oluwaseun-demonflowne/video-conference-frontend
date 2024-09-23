"use client";
import React, { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuSettings } from "react-icons/lu";
import Device from "../Settings/Device";
import { useModalState } from "@/store";
import Notification from "../Settings/Notification";

const displaySetting = {
  device: <Device />,
  noti: <Notification />
};

const Settings = () => {
  const [currentDisplay, setCurrentDisplay] =
    useState<keyof typeof displaySetting>("device");
  const { showModal } = useModalState();
  if (!showModal) {
    return null;
  }

  return (
    <div className="modal fixed bottom-0 left-0 right-0 top-0 flex h-screen items-center justify-center">
      <div className="flex justify-center overflow-hidden rounded-xl">
        <div className="bg-[#11131a] px-4 py-8">
          <p className="text-base font-semibold">Settings</p>
          <div className="mt-6 flex flex-col gap-4">
            <button
              onClick={() => {
                setCurrentDisplay("device");
              }}
              className="flex items-center gap-1 rounded-md p-3 text-[15px] hover:bg-[#191b23]">
              <LuSettings className="text-xl" />
              Device Settings
            </button>
            <button
              onClick={() => {
                setCurrentDisplay("noti");
              }}
              className="flex items-center gap-1 rounded-md p-3 text-[15px] hover:bg-[#191b23]">
              <IoIosNotificationsOutline className="text-xl" />
              Notifications
            </button>
          </div>
        </div>
        <div>{displaySetting[currentDisplay]}</div>
      </div>
    </div>
  );
};

export default Settings;
