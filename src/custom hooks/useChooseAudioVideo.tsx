import { useCameraState } from "@/store";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const useChooseAudioVideo = (showModal: boolean) => {
  const [videoDevices, setVideoDevices] = useState<MediaDeviceInfo[]>([]);
  const [audioDevices, setAudioDevices] = useState<MediaDeviceInfo[]>([]);
  const [audioPermission, setAudioPermission] = useState(false);
  const [videoPermission, setVideoPermission] = useState(false);
  const [getPermission, setGetPermission] = useState(false);
  // const videoRef = useRef<HTMLVideoElement | null>(null);
  const { setShowCamera } = useCameraState();

  const [outputAudioDevices, setOutputAudioDevices] = useState<
    MediaDeviceInfo[]
  >([]);
  //   const [selectedAudioDevice, setSelectedAudioDevice] = useState("");
  //   const [selectedVideoDevice, setSelectedVideoDevice] = useState("");
  useEffect(() => {
    const getVideoDevices = async () => {
      toast.loading("loading devices");
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true
        });
        setVideoPermission(true);
        setAudioPermission(true);
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoInputs = devices.filter(
          (device) => device.kind === "videoinput"
        );
        setShowCamera(stream);

        // if (videoRef) {
        //   if (videoRef.current) {
        //     videoRef.current.srcObject = stream;
        //   }
        // }
        setVideoDevices(videoInputs);
        const audioInputs = devices.filter(
          (device) => device.kind === "audioinput"
        );
        setAudioDevices(audioInputs);
        const audioOuputs = devices.filter(
          (device) => device.kind === "audiooutput"
        );
        setOutputAudioDevices(audioOuputs);
        toast.success("Loaded devices successfully");
      } catch (err) {
        console.error("Error accessing video?audio devices:", err);
        toast.error("Error accessing devices");
      }
      toast.dismiss();
    };
    if (showModal || getPermission) {
      getVideoDevices();
    } // Call the function to get devices
    return () => {
      // setShowCamera(null)
      // if (videoRef.current && videoRef.current.srcObject) {
      //   // eslint-disable-next-line react-hooks/exhaustive-deps
      //   const stream = videoRef.current.srcObject as MediaStream;
      //   const tracks = stream.getTracks();
      //   tracks.forEach((track) => {
      //     track.stop();
      //   });
      // }
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
