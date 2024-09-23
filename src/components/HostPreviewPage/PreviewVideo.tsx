import React from "react";
import { RiUserLine } from "react-icons/ri";
import Control from "./Control";
import TypeName from "./TypeName";

const PreviewVideo = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex !h-60 !w-[400px] items-center justify-center rounded-2xl bg-[#11131a]">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7E47EB] p-3">
          <RiUserLine className="text-2xl" />
        </div>
      </div>
      <Control showSetting={true} />
      <TypeName />
    </div>
  );
};

export default PreviewVideo;
