import Image from "next/image";
import React, { type Dispatch, type SetStateAction } from "react";

type Props = {
  openStartSharing: boolean;
  setOpenStartSharing: Dispatch<SetStateAction<boolean>>;
  setOpenSharePdf: Dispatch<SetStateAction<boolean>>;
};

const StartSharing = ({ openStartSharing, setOpenSharePdf }: Props) => {
  if (!openStartSharing) return null;
  return (
    <div className="absolute bottom-14 left-[-150%] h-[230px] w-[300px] rounded-xl bg-[#11131A] p-4">
      <h1 className="font-medium">Start Sharing</h1>
      <p className="text-[15px] font-light">Choose what you want to share</p>
      <div className="mt-4 flex gap-4">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-[72px] w-28 justify-center rounded-lg bg-[#272a31] px-2 pt-2">
            <Image
              src={"/sharescreen.png"}
              alt=""
              width={100}
              height={100}
              className=""
            />
          </div>
          <button className="mt-3">
            <h4 className="text-[15px] font-medium">Share Screen</h4>
            <p className="text-xs font-light">
              Share a tab, window or your entire screen
            </p>
          </button>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="flex h-[72px] w-28 justify-center rounded-lg bg-[#272a31] px-2 pt-2">
            <Image
              src={"/sharepdf.png"}
              alt=""
              width={100}
              height={100}
              className=""
            />
          </div>
          <button
            onClick={() => {
              setOpenSharePdf(true);
            }}
            className="mt-3">
            <h4 className="text-[15px] font-medium">Share PDF</h4>
            <p className="text-xs font-light">
              Annotate, draw shapes and more over PDFs
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartSharing;
