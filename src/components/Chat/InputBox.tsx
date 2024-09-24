import React from "react";
import { MdEmojiEmotions, MdSend } from "react-icons/md";
const InputBox = () => {
  return (
    <div className="mb-0 flex items-center rounded-md bg-[#191b23]">
      <input
        type="text"
        className="h-14 w-[100%] bg-transparent pl-4 pr-2 text-[15px] text-slate-500 outline-none"
        placeholder="Send a message..."
      />
      <div className="flex items-center gap-4 pr-4">
        <button className="text-lg">
          <MdEmojiEmotions />
        </button>
        <button className="text-lg">
          <MdSend />
        </button>
      </div>
    </div>
  );
};

export default InputBox;
