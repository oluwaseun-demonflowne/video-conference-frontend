import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { IoStopCircleOutline } from "react-icons/io5";
import EndLeaveSession, { type session } from "./EndLeaveSession";

type Props = {
  openEndLeaveSession: boolean;
};

const LeaveEndStream = ({ openEndLeaveSession }: Props) => {
  const [EndLeaveSessionOpen, setEndLeaveSessionOpen] = useState<{
    whichSession: keyof typeof session;
    state: boolean;
  }>({
    whichSession: "end",
    state: false
  });

  if (!openEndLeaveSession) {
    return null;
  }

  return (
    <>
      <div className="absolute bottom-12 left-[-640%] w-[350px] overflow-hidden rounded-md text-slate-300">
        <button
          onClick={() => {
            setEndLeaveSessionOpen((prev) => ({
              ...prev,
              state: true,
              whichSession: "leave"
            }));
          }}
          className="flex items-start gap-3 bg-[#11131a] p-3 text-left">
          <BiLogOut className="text-2xl" />
          <div>
            <h1 className="font-semibold">Leave Stream</h1>

            <p className="text-[15px]">
              Others will continue after you leave. You can join the stream
              again.
            </p>
          </div>
        </button>
        <button
          onClick={() => {
            setEndLeaveSessionOpen((prev) => ({
              ...prev,
              state: true,
              whichSession: "end"
            }));
          }}
          className="flex items-start gap-3 bg-[#270005] p-3 text-left">
          <IoStopCircleOutline className="text-3xl" />
          <div>
            <h1 className="font-semibold">End Session</h1>
            <p className="text-[15px]">
              The session and stream will end for everyone. You can’t undo this
              action.
            </p>
          </div>
        </button>
      </div>
      <EndLeaveSession
        EndLeaveSession={EndLeaveSessionOpen}
        setEndLeaveSessionOpen={setEndLeaveSessionOpen}
      />
    </>
  );
};

export default LeaveEndStream;
