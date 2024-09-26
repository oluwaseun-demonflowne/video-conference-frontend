import { create } from "zustand";

type CameraState = {
  cameraDisplay: MediaStream | null;
  videoDevices: MediaDeviceInfo[];
  audioDevices: MediaDeviceInfo[];
  outputAudioDevices: MediaDeviceInfo[];
  audioPermission: boolean;
  videoPermission: boolean;
  getPermission: boolean;
};

type CameraAction = {
  setShowCamera: (state: MediaStream | null) => void;
  setVideoDevices: (devices: MediaDeviceInfo[]) => void;
  setAudioDevices: (devices: MediaDeviceInfo[]) => void;
  setOutputAudioDevices: (devices: MediaDeviceInfo[]) => void;
  setAudioPermission: (hasPermission: boolean) => void;
  setVideoPermission: (hasPermission: boolean) => void;
  setGetPermission: (permission: boolean) => void;
};

export const useCameraState = create<CameraState & CameraAction>((set) => ({
  cameraDisplay: null,
  videoDevices: [],
  audioDevices: [],
  outputAudioDevices: [],
  audioPermission: false,
  videoPermission: false,
  getPermission: false,
  setShowCamera: (state) => {
    set(() => ({ cameraDisplay: state }));
  },
  setVideoDevices: (devices) => {
    set(() => ({ videoDevices: devices }));
  },
  setAudioDevices: (devices) => {
    set(() => ({ audioDevices: devices }));
  },
  setOutputAudioDevices: (devices) => {
    set(() => ({ outputAudioDevices: devices }));
  },
  setAudioPermission: (hasPermission) => {
    set(() => ({ audioPermission: hasPermission }));
  },
  setVideoPermission: (hasPermission) => {
    set(() => ({ videoPermission: hasPermission }));
  },
  setGetPermission: (permission) => {
    set(() => ({ getPermission: permission }));
  }
}));
