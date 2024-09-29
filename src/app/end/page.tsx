import React from "react";
import { FiLogIn } from "react-icons/fi";
import { MdWavingHand } from "react-icons/md";

const Page = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6 text-[15px]">
      <MdWavingHand className="text-5xl text-[#ffab00]" />
      <h1 className="text-3xl font-semibold">Stream ended</h1>
      <p className="mt-[-20px]">Have a nice day!</p>
      <div className="flex items-center gap-3">
        <p>Ended by mistake?</p>
        <button className="flex h-12 w-28 items-center justify-center gap-1 rounded-md bg-[#2572ed] font-medium">
          <FiLogIn />
          Rejoin
        </button>
      </div>
    </div>
  );
};

export default Page;
