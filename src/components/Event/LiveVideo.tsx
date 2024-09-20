import Image from "next/image";
import React from "react";
import LoadingIcon from "./LoadingIcon";

const LiveVideo = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={"/seyi.png"}
          unoptimized
          className=" w-screen opacity-40"
          alt="picture"
          width={100}
          height={100}
        />
        <div className="absolute flex flex-col gap-3 items-center top-[50%] text-[15px] left-[50%] text-white font-semibold">
          <LoadingIcon />
          Going live
        </div>
      </div>
    </div>
  );
};

export default LiveVideo;
