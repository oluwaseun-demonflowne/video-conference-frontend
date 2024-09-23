import React from "react";
import EmptyChat from "./EmptyChat";
import InputBox from "./InputBox";

const MainChat = () => {
  return (
    <div className="mt-4 flex  h-[60vh] flex-col justify-between">
      <div className="flex h-[100%] items-center justify-center">
      <EmptyChat />
      </div>
      <InputBox  />
    </div>
  );
};

export default MainChat;
