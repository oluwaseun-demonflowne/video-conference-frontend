import React from "react";
import { MdEmojiEmotions, MdSend } from "react-icons/md";
const InputBox = () => {
  return (
    <div className="rounded-md mb-0 flex items-center  bg-[#191b23]">
      <input
        type="text"
        className="h-14 text-slate-500 bg-transparent w-[100%] pl-4 pr-2 text-[15px] outline-none"
        placeholder="Send a message..."
      />
      <div className="flex items-center gap-4 pr-4">
        <button className="text-lg"><MdEmojiEmotions /></button>
        <button className="text-lg"><MdSend /></button>
      </div>
    </div>
  );
};

export default InputBox;
