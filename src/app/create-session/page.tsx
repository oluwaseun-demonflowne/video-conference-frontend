"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { createEvent } from "@/actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Page = () => {
  const [email, setEmail] = useState("");
  const [eventName, setEventName] = useState("");
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();
  useGSAP(() => {
    gsap.to(".box", {
      duration: 3,
      rotation: 360,
      repeat: -1,
      ease: "linear"
    });
  }, []);
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex w-[450px] flex-col gap-8 rounded-lg bg-[#191b23] p-10">
        <p className="text-[15px] font-light">Welcome to Confrenza</p>
        <div className="mt-[-20px] flex items-center justify-center gap-4 text-2xl font-medium">
          <Image
            src={"/Generic.png"}
            alt="logo"
            width={100}
            height={100}
            unoptimized
            className="box w-10"
          />
          <p>Create session</p>
        </div>
        <form
          onSubmit={async (e) => {
            setLoading(true);
            toast.loading("Creating event...", { position: "top-center" });
            e.preventDefault();
            // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
            const get = await createEvent(eventName);
            if (get?.error === "23505") {
              toast.error("Event already exists", {
                position: "top-center"
              });
              setLoading(false);
            } else if (get?.success === 200) {
              toast.success("Event created sucessfully", {
                position: "top-center"
              });
              push("/join-session");
            } else {
              toast.error("Unknown error, Please retry :(", {
                position: "top-center"
              });
              setLoading(false);
            }
            toast.dismiss();
          }}
          className="mt-[-10px] flex flex-col gap-5">
          <div className="flex flex-col text-[15px]">
            <label htmlFor="email">Email</label>
            <input
              required
              value={email}
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
              type="email"
              id="email"
              className="h-10 rounded-lg bg-[#272a31] pl-4 text-[15px] text-gray-400 outline-[#3d8fff]"
            />
          </div>
          <div className="flex flex-col text-[15px]">
            <label htmlFor="event">Event Name</label>
            <input
              value={eventName}
              onChange={(e) => {
                setEventName(e.currentTarget.value);
              }}
              required
              id="event"
              className="h-10 rounded-lg bg-[#272a31] pl-4 text-[15px] text-gray-400 outline-[#3d8fff]"
            />
          </div>
          <button
            className={`h-12 rounded-md ${loading ? "pointer-events-none opacity-40" : ""} bg-[#3d8fff]`}>
            Create Session
          </button>
        </form>
        <Link className="text-[15px] font-light underline" href="/join-session">
          Join a live session?
        </Link>
      </div>
    </div>
  );
};

export default Page;
