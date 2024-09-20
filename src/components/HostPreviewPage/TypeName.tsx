import React from "react";
import { HiSignal } from "react-icons/hi2";

const TypeName = () => {
  return (
    <form className="flex gap-4">
      <input
        className="bg-[#191b23] rounded-md w-[100%] text-[15px] outline-none h-12 pl-2"
        placeholder="Enter name"
      />
      <button className="bg-[#2572ed] opacity-70 pointer-events-none text-[15px] w-44 items-center rounded-md justify-center flex gap-1">
        <HiSignal />
        Go live
      </button>
    </form>
  );
};

export default TypeName;
