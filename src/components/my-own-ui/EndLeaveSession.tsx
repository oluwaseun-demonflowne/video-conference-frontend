"use client";
import React, { type Dispatch, type SetStateAction } from "react";
import { TbInfoTriangle } from "react-icons/tb";

export const session = {
  leave: {
    title: "Leave Session",
    note: "Others will continue after you leave. You can join the session again."
  },
  end: {
    title: "End Session",
    note: "The session will end for everyone and all the activities, including the stream will stop. You can’t undo this action."
  }
};

type Props = {
  EndLeaveSession: {
    whichSession: keyof typeof session;
    state: boolean;
  };
  setEndLeaveSessionOpen: Dispatch<
    SetStateAction<{
      whichSession: keyof typeof session;
      state: boolean;
    }>
  >;
};

const EndLeaveSession = ({
  EndLeaveSession,
  setEndLeaveSessionOpen
}: Props) => {
  if (!EndLeaveSession.state) {
    return null;
  }
  return (
    <div className="modal fixed bottom-0 left-0 right-0 top-0 flex h-screen items-center justify-center">
      <div className="flex w-[340px] flex-col justify-center gap-3 overflow-hidden rounded-xl bg-[#11131a] p-5">
        <div className="flex items-center gap-3 text-[#c74e5b]">
          <TbInfoTriangle className="text-xl" />
          <h1 className="text-xl font-semibold">
            {session[EndLeaveSession.whichSession].title}
          </h1>
        </div>
        <p className="text-[15px] text-slate-400">
          {session[EndLeaveSession.whichSession].note}
        </p>
        <div className="flex gap-2 text-[15px]">
          <button
            onClick={() => {
              setEndLeaveSessionOpen((prev) => ({ ...prev, state: false }));
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
    </div>
  );
};

export default EndLeaveSession;
