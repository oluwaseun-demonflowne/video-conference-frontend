import React from "react";
import { RiUserLine } from "react-icons/ri";
import Control from "./Control";
import TypeName from "./TypeName";

const PreviewVideo = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-[#11131a] flex justify-center items-center  !w-[400px] rounded-2xl !h-60">
        <div className="bg-[#7E47EB] rounded-full flex items-center justify-center p-3 w-10 h-10">
          <RiUserLine className="text-2xl" />
        </div>
      </div>
      <Control />
      <TypeName />
    </div>
  );
};

export default PreviewVideo;
