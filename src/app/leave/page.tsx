import React from "react";
import { FiLogIn } from "react-icons/fi";
import { MdWavingHand } from "react-icons/md";

const Page = () => {
  return (
    <div className="text-[15px] flex items-center justify-center flex-col h-screen gap-6">
      <MdWavingHand className="text-5xl text-[#ffab00]" />
      <h1 className="text-3xl font-semibold">You left the stream</h1>
      <p className="mt-[-20px]">Have a nice day!</p>
      <div className="flex gap-3 items-center">
        <p>Left by mistake?</p>
        <button className="flex font-medium h-12 w-28 items-center justify-center gap-1 rounded-md bg-[#2572ed]">
          <FiLogIn />
          Rejoin
        </button>
      </div>
    </div>
  );
};

export default Page;
