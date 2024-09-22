"use client";
import React, { type Dispatch, type SetStateAction } from "react";
import { TbInfoTriangle } from "react-icons/tb";

const session = {
  end: {
    title: "End Session",
    note: "The session will end for everyone and all the activities, including the stream will stop. You can’t undo this action."
  }
};

const EndStreamTopRight = () => {
  return (
    <div className="absolute right-0 flex w-[340px] flex-col justify-center gap-3 overflow-hidden rounded-xl bg-[#11131a] p-5">
      <div className="flex items-center gap-3 text-[#c74e5b]">
        <TbInfoTriangle className="text-xl" />
        <h1 className="text-xl font-semibold">{session.end.title}</h1>
      </div>
      <p className="text-[15px] text-slate-400">{session.end.note}</p>
      <div className="flex gap-2 text-[15px]">
        <button
          onClick={() => {
            //   setEndStreamTopRightOpen((prev) => ({ ...prev, state: false }));
          }}
          type="button"
          className="h-12 w-[50%] rounded-md border border-slate-600">
          Cancel
        </button>
        <button className="h-12 w-[50%] rounded-md bg-[#c74e5b]">
          Leave Session
          {/* {menuToRender === "embedUrl" ? "Embed and Share" : "Change"} */}
        </button>
      </div>
    </div>
  );
};

export default EndStreamTopRight;
