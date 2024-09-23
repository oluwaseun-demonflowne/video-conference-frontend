import Image from "next/image";
import React from "react";

const StartSharing = () => {
  return (
    <div className="bg-[#11131A]">
      <h1>Start Sharing</h1>
      <p className="text-[15px] font-light">Choose what you want to share</p>
      <div>
        <div>
          <Image
            src={"/sharescreen.png"}
            alt=""
            width={100}
            height={100}
            className=""
          />
          <div>
            <h4>Share Screen</h4>
            <p>Share a tab, window or your entire screen</p>
          </div>
        </div>
        <div>
          <Image
            src={"/sharepdf.png"}
            alt=""
            width={100}
            height={100}
            className=""
          />
          <div>
            <h4>Share PDF</h4>
            <p>Annotate, draw shapes and more over PDFs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartSharing;
