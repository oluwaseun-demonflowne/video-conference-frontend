import React from "react";
import { AiOutlineAudioMuted } from "react-icons/ai";
import { FiVideoOff } from "react-icons/fi";
import { LuSettings } from "react-icons/lu";

const Control = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-3">
        <div className="bg-[#2e3038] w-20 py-2 pl-2 rounded-md">
          <AiOutlineAudioMuted className="text-2xl cursor-pointer" />
        </div>
        <div className="bg-[#2e3038] w-20 py-2 pl-2 rounded-md">
          <FiVideoOff className="text-2xl cursor-pointer " />
        </div>
      </div>
      <LuSettings className="text-2xl cursor-pointer" />
    </div>
  );
};

export default Control;
