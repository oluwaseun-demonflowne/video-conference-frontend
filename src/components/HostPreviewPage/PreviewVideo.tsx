"use client";
import React, { useEffect, useRef, useState } from "react";
import { RiUserLine } from "react-icons/ri";
import Control from "./Control";
import TypeName from "./TypeName";
import { useChooseAudioVideo } from "@/custom hooks/useChooseAudioVideo";
import { useCameraState, useModalState } from "@/store";

const PreviewVideo = () => {
  const { showModal } = useModalState();
  const { cameraDisplay } = useCameraState();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  console.log(cameraDisplay);

  useEffect(() => {
    if (cameraDisplay === null) return;
    if (videoRef) {
      if (videoRef.current) {
        videoRef.current.srcObject = cameraDisplay;
      }
    }
  }, [cameraDisplay]);

  const {
    outputAudioDevices,
    videoDevices,
    audioPermission,
    videoPermission,
    setGetPermission
  } = useChooseAudioVideo(showModal);
  const [showListOfAudioDevices, setShowListOfAudioDevices] = useState(false);
  const [showListOfVideoDevices, setShowListOfVideoDevices] = useState(false);
  
  return (
    <div className="flex flex-col gap-5">
      <div className="flex !h-60 !w-[400px] items-center justify-center overflow-hidden rounded-2xl bg-[#11131a]">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="h-full w-full object-cover" // Ensures video fills the container
        />
        <div
          className={`absolute flex h-10 w-10 items-center justify-center rounded-full bg-[#7E47EB] p-3 ${cameraDisplay !== null ? "hidden" : ""} `}>
          <RiUserLine className="text-2xl" />
        </div>
      </div>
      <Control
        audioPermission={audioPermission}
        outputAudioDevices={outputAudioDevices}
        setGetPermission={setGetPermission}
        setShowListOfAudioDevices={setShowListOfAudioDevices}
        setShowListOfVideoDevices={setShowListOfVideoDevices}
        showListOfAudioDevices={showListOfAudioDevices}
        showListOfVideoDevices={showListOfVideoDevices}
        videoDevices={videoDevices}
        videoPermission={videoPermission}
        showSetting={true}
      />
      <TypeName />
    </div>
  );
};

export default PreviewVideo;
