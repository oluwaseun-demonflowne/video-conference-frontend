import Image from "next/image";
import React from "react";

const EmptyChat = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 px-7 text-center">
      <Image
        src={"/Chat Empty.png"}
        alt="empty chat image"
        width={100}
        height={100}
        className="w-40"
      />
      <h1 className="text-lg font-medium">Start a conversation</h1>
      <p className="text-[15px] font-light">
        There are no messages here yet. Start a conversation by sending a
        message.
      </p>
    </div>
  );
};

export default EmptyChat;
