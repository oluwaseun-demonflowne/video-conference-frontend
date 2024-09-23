import PreviewVideo from "@/components/HostPreviewPage/PreviewVideo";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-7">
      <div className="text-center">
        <h1 className="text-2xl font-medium">Get Started</h1>
        <p className="font-light">Setup your audio and video before joining</p>
      </div>
      <button className="rounded-full bg-[#191b23] px-7 py-2 text-[15px]">
        You are the first to join
      </button>
      <PreviewVideo />
    </div>
  );
}
