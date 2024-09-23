import PreviewVideo from "@/components/HostPreviewPage/PreviewVideo";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-7">
      <div className="text-center">
        <h1 className="text-2xl font-medium">Get Started</h1>
        <p className="font-light">Setup your audio and video before joining</p>
      </div>
      <div className="flex gap-2">
        <button className="flex items-center gap-3 rounded-full bg-[#c74e5b] px-7 py-2 text-[15px]">
          <span className="rounded-full bg-white p-2"></span>
          LIVE
        </button>
        <button className="rounded-full bg-[#191b23] px-7 py-2 text-[15px]">
          23 others in session
        </button>
      </div>
      <PreviewVideo />
    </div>
  );
}
