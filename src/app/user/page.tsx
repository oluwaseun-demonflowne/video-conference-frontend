import PreviewVideo from "@/components/HostPreviewPage/PreviewVideo";

export default function Home() {
  return (
    <div className="flex h-screen gap-7 flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-medium">Get Started</h1>
        <p className="font-light">Setup your audio and video before joining</p>
      </div>
      <div className="flex gap-2">
        <button className="bg-[#c74e5b] flex gap-3 items-center py-2 px-7 rounded-full text-[15px]">
          <span className="bg-white p-2 rounded-full"></span>
          LIVE
        </button>
        <button className="bg-[#191b23] py-2 px-7 rounded-full text-[15px]">
          23 others in session
        </button>
      </div>
      <PreviewVideo />
    </div>
  );
}
