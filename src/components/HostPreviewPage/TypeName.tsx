"use client";
import { useModalState } from "@/store";
import React from "react";
import { HiSignal } from "react-icons/hi2";

const TypeName = () => {
  const { showModal } = useModalState();
  return (
    <form className="flex gap-4">
      <input
        className="h-12 w-[100%] rounded-md bg-[#191b23] pl-2 text-[15px] outline-none"
        placeholder="Enter name"
      />
      <button
        className={`bg-[#2572ed] ${showModal ? "z-[-1]" : ""}opacity-70 pointer-events-none flex w-44 items-center justify-center gap-1 rounded-md text-[15px]`}>
        <HiSignal />
        Go live
      </button>
    </form>
  );
};

export default TypeName;
