import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { BiLogOut } from "react-icons/bi";
import { IoStopCircleOutline } from "react-icons/io5";

type Props = {
  openEndLeaveSession: boolean;
};

const LeaveEndStream = ({ openEndLeaveSession }: Props) => {
  useGSAP(() => {
    gsap.to("#menus", {
      y: openEndLeaveSession ? "0px" : "400px",
      duration: 0.3,
      opacity: openEndLeaveSession ? 1 : 0
    });
  }, [openEndLeaveSession]);

  return (
    <div
      id="menus"
      className="absolute bottom-12 w-[350px] translate-y-[400px] opacity-0 overflow-hidden rounded-md text-slate-300 ">
      <button className="flex items-start gap-3 bg-[#11131a] p-3 text-left">
        <BiLogOut className="text-2xl" />
        <div>
          <h1 className="font-semibold">Leave Stream</h1>

          <p className="text-[15px]">
            Others will continue after you leave. You can join the stream again.
          </p>
        </div>
      </button>
      <button className="flex items-start gap-3 bg-[#270005] p-3 text-left">
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
  );
};

export default LeaveEndStream;
