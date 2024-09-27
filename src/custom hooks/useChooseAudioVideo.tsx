import { useEffect } from "react";
import { toast } from "sonner";
import { useCameraState } from "@/store";

export const useChooseAudioVideo = (showModal: boolean) => {
  const {
    videoDevices,
    audioDevices,
    outputAudioDevices,
    audioPermission,
    videoPermission,
    getPermission,
    setShowCamera,
    setVideoDevices,
    setAudioDevices,
    setOutputAudioDevices,
    setAudioPermission,
    setVideoPermission,
    setGetPermission
  } = useCameraState();

  useEffect(() => {
    const getVideoDevices = async () => {
      toast.loading("Loading devices");
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio:true
        });
        setVideoPermission(true);
        setAudioPermission(true);
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoInputs = devices.filter(
          (device) => device.kind === "videoinput"
        );
        setShowCamera(stream);
        setVideoDevices(videoInputs);

        const audioInputs = devices.filter(
          (device) => device.kind === "audioinput"
        );
        setAudioDevices(audioInputs);
        const audioOutputs = devices.filter(
          (device) => device.kind === "audiooutput"
        );
        setOutputAudioDevices(audioOutputs);
        toast.success("Loaded devices successfully");
      } catch (err) {
        console.error("Error accessing video/audio devices:", err);
        toast.error("Error accessing devices");
      }
      toast.dismiss();
    };

    if (showModal || getPermission) {
      if (videoPermission && audioPermission) return;
      getVideoDevices();
    }

    return () => {
      // Cleanup logic if necessary
    };
  }, [showModal, getPermission]);

  return {
    videoDevices,
    audioDevices,
    outputAudioDevices,
    audioPermission,
    videoPermission,
    setGetPermission
  };
};
