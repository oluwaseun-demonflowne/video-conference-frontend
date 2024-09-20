"use client";
import React from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { useModalState } from "@/store";
import { FiMessageSquare, FiUserPlus } from "react-icons/fi";
import { MdLogout, MdOutlineInfo } from "react-icons/md";
import { BsHandIndex } from "react-icons/bs";

{
  /* <TbHandFingerOff /> */
}
export const NotiOptions = [
  { icon: <FiUserPlus />, label: "Peer Joined", state: false },
  { icon: <MdLogout />, label: "Peer Leave", state: false },
  { icon: <FiMessageSquare />, label: "New Message", state: true },
  { icon: <BsHandIndex />, label: "Hand Raise", state: true },
  { icon: <MdOutlineInfo />, label: "Error", state: true }
];

const Notification = () => {
  const { setShowModal } = useModalState();

  return (
    <div className="h-[460px] w-[400px] bg-[#191b23] p-4">
      <div className="flex items-center justify-between">
        <p className="text-base font-medium">Notifications</p>
        <LiaTimesSolid
          onClick={() => {
            setShowModal(false);
          }}
          className="cursor-pointer text-lg opacity-50 hover:opacity-90"
        />
      </div>
      <div className="flex mt-6 flex-col gap-6">
        {NotiOptions.map((i) => (
          <div key={i.label} className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <p className="text-lg">{i.icon}</p>
              <p className="text-[15px]">{i.label}</p>
            </div>
            <input checked={i.state} type="checkbox" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
