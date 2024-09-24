"use client";
import React, { useEffect, useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useModalState } from "@/store";
import { FiVideo} from "react-icons/fi";
import { AiOutlineAudio } from "react-icons/ai";
import { SpeakerIcon } from "lucide-react";

const Device = () => {
  const [videoDevices, setVideoDevices] = useState<MediaDeviceInfo[]>([]);
  const [audioDevices, setAudioDevices] = useState<MediaDeviceInfo[]>([]);
  const [outputAudioDevices, setOutputAudioDevices] = useState<
    MediaDeviceInfo[]
  >([]);
  const { showModal, setShowModal } = useModalState();
  const [_volumeCurrent, setVolumeCurrent] = useState(100);
  //   const [selectedAudioDevice, setSelectedAudioDevice] = useState("");
  //   const [selectedVideoDevice, setSelectedVideoDevice] = useState("");
  useEffect(() => {
    const getVideoDevices = async () => {
      try {
        // await navigator.mediaDevices.getUserMedia({ video: true });
        // await navigator.mediaDevices.getUserMedia({ audio: true });
        const devices = await navigator.mediaDevices.enumerateDevices();
        console.log(devices);
        const videoInputs = devices.filter(
          (device) => device.kind === "videoinput"
        );
        setVideoDevices(videoInputs);
        const audioInputs = devices.filter(
          (device) => device.kind === "audioinput"
        );
        setAudioDevices(audioInputs);
        const audioOuputs = devices.filter(
          (device) => device.kind === "audiooutput"
        );
        setOutputAudioDevices(audioOuputs);
      } catch (err) {
        console.error("Error accessing video?audio devices:", err);
      }
    };
    if (showModal) getVideoDevices(); // Call the function to get devices
  }, [showModal]);

  return (
    <div className="h-[460px] w-[400px] bg-[#191b23] p-4">
      <div className="flex items-center justify-between">
        <p className="text-base font-medium">Device Settings</p>
        <LiaTimesSolid
          onClick={() => {
            setShowModal(false);
          }}
          className="cursor-pointer text-lg opacity-50 hover:opacity-90"
        />
      </div>
      <div className="mt-6 flex flex-col gap-7">
        <div className="flex flex-col gap-1">
          <p className="text-sm">Video</p>
          <Select>
            <SelectTrigger className="w-[100%] border-0 bg-[#272a31]">
              <SelectValue placeholder={"Choose video device"} />
            </SelectTrigger>
            <SelectContent className="border-0 bg-[#272a31] text-white">
              {videoDevices?.map((i, index) => (
                <SelectItem
                  key={index}
                  className="text-white hover:bg-[#272a31]"
                  value={i.label}>
                  <p className="flex items-center gap-2">
                    <FiVideo className="cursor-pointer text-xl" />
                    {i.label.length > 15
                      ? `${i.label.substring(0, 35)}...`
                      : i.label}
                  </p>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm">Microphone</p>
          <Select>
            <SelectTrigger className="w-[100%] border-0 bg-[#272a31]">
              <SelectValue placeholder={"Choose microphone device"} />
            </SelectTrigger>
            <SelectContent className="border-0 bg-[#272a31] text-white">
              {audioDevices?.map((i, index) => (
                <SelectItem
                  key={index}
                  className="text-white hover:bg-[#272a31]"
                  value={i.label}>
                  <p className="flex w-[100%] items-center gap-2 whitespace-pre-wrap break-words">
                    <AiOutlineAudio className="cursor-pointer text-xl" />
                    {i.label.length > 15
                      ? `${i.label.substring(0, 35)}...`
                      : i.label}
                  </p>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <input
            type="range"
            id="volumeSlider"
            min="0"
            max="100"
            step="1"
            onChange={(e) => {
              setVolumeCurrent(parseInt(e.currentTarget.value) / 100);
            }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm">Speakers</p>
          <Select>
            <SelectTrigger className="w-[100%] border-0 bg-[#272a31]">
              <SelectValue placeholder={"Choose speaker"} />
            </SelectTrigger>
            <SelectContent className="border-0 bg-[#272a31] text-white">
              {outputAudioDevices?.map((i, index) => (
                <SelectItem
                  key={index}
                  className="text-white hover:bg-[#272a31]"
                  value={i.label}>
                  <p className="flex items-center gap-2">
                    <SpeakerIcon />
                    {i.label.length > 15
                      ? `${i.label.substring(0, 35)}...`
                      : i.label}
                  </p>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Device;
