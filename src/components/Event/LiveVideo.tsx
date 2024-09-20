import Image from "next/image";
import React from "react";
import LoadingIcon from "./LoadingIcon";
import LiveControl from "./LiveControl";

const LiveVideo = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex items-center justify-between px-8 py-4">
        <Image
          className="w-6"
          src={"/Generic.png"}
          alt="logo"
          width={100}
          height={100}
        />
        <div className="flex items-center gap-3 text-[15px]">
          <p className="h-fit w-fit rounded-full bg-red-700 p-1"></p>
          <p>LIVE</p>
          <p className="text-slate-400">1:23</p>
        </div>
      </div>
      <div className="relative px-28">
        <Image
          src={"/seyi.png"}
          unoptimized
          className="h-[80vh] object-cover w-[100%] opacity-40"
          alt="picture"
          width={100}
          height={100}
        />
        <div className="absolute left-[50%] top-[50%] flex flex-col items-center gap-3 text-[15px] font-semibold text-white">
          <LoadingIcon />
          Going live
        </div>
      </div>
      <LiveControl />
    </div>
  );
};

export default LiveVideo;
