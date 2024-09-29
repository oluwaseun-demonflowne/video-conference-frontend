"use client";
import { useEventNameState, useModalState } from "@/store";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { HiSignal } from "react-icons/hi2";

const TypeName = () => {
  const { showModal } = useModalState();
  const { push } = useRouter();
  const [hostName, setHostName] = useState("");
  const { data: session, update } = useSession();
  const defaultHostName = session?.user?.name || "";
  const { eventName } = useEventNameState();
  console.log(eventName, session)

  useEffect(() => {
    if (eventName !== "") {
      update({ ...session!.user, eventName: eventName });
    }
  }, [eventName, session]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const finalHostName = hostName || defaultHostName;
        push(`/host/${finalHostName}`);
      }}
      className="flex gap-4">
      <input
        onChange={(e) => {
          setHostName(e.currentTarget.value);
        }}
        className="h-12 w-[100%] rounded-md bg-[#191b23] pl-2 text-[15px] outline-none"
        placeholder={defaultHostName}
      />
      <button
        className={`bg-[#2572ed] ${showModal ? "z-[-1]" : ""} flex w-44 items-center justify-center gap-1 rounded-md text-[15px]`}>
        <HiSignal />
        Go live
      </button>
    </form>
  );
};

export default TypeName;
