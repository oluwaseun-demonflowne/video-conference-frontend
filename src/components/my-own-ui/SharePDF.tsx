"use client";
import React, { type Dispatch, type SetStateAction } from "react";

type Props = {
  openSharePdf: boolean;
  setOpenSharePdf: Dispatch<SetStateAction<boolean>>;
};

const SharePDF = ({ openSharePdf, setOpenSharePdf }: Props) => {
  if (!openSharePdf) return null;
  return (
    <div className="modal fixed bottom-0 left-0 right-0 top-0 flex h-screen items-center justify-center">
      <div className="flex flex-col justify-center gap-4 overflow-hidden rounded-xl bg-[#11131a] p-4">
        <h1 className="text-[15px] font-medium">Share PDF</h1>
        <p className="text-[15px] font-light">
          Copy and paste the URL of the PDF to start sharing
        </p>
        <input
          className="h-12 rounded-md bg-[#191b23] pl-3 text-gray-400 outline-none"
          type="url"
        />
        <div className="flex gap-3">
          <button
            onClick={() => {
              setOpenSharePdf(false);
            }}
            className="h-12 w-[50%] rounded-md border border-gray-600 text-[15px]">
            Cancel
          </button>
          <button className="h-12 w-[50%] rounded-md bg-[#004299] text-[15px]">
            Start Sharing
          </button>
        </div>
      </div>
    </div>
  );
};

export default SharePDF;
