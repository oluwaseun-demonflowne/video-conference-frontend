"use client";
import { useRouter } from "next/navigation";
import React, { useState, type Dispatch, type SetStateAction } from "react";

const session = {
  end: {
    title: "End Session",
    note: "Are you sure you want to end the stream? You can't undo this action."
  }
};

type Props = {
  openRightStream: boolean;
  setOpenRightStream: Dispatch<SetStateAction<boolean>>;
};

const EndStreamTopRight = ({ openRightStream, setOpenRightStream }: Props) => {
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();
  if (!openRightStream) return null;
  return (
    <div className="absolute right-0 top-11 z-[90] flex w-[280px] flex-col justify-center gap-3 overflow-hidden rounded-xl bg-[#11131a] p-5">
      <p className="text-[14px] text-slate-400">{session.end.note}</p>
      <div className="flex gap-2 text-[14px] text-white">
        <button
          onClick={() => {
            setOpenRightStream(false);
          }}
          type="button"
          className={`h-12 w-[50%] ${loading ? "pointer-events-none opacity-40" : ""} rounded-md border border-slate-600`}>
          Cancel
        </button>
        <button
        onClick={() => {
          setLoading(true);
          push("/end");
        }}
          className={`h-12 ${loading ? "pointer-events-none opacity-40" : ""} w-[50%] rounded-md bg-[#c74e5b]`}>
          End
          {/* {menuToRender === "embedUrl" ? "Embed and Share" : "Change"} */}
        </button>
      </div>
    </div>
  );
};

export default EndStreamTopRight;
