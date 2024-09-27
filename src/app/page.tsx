"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const Page = () => {
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
      <div className="flex w-[450px] flex-col gap-10 rounded-lg bg-[#191b23] p-10">
        <p className="text-[15px] font-light">Welcome to Confrenza</p>
        <div className="mt-[-20px] flex items-center justify-center gap-4 text-2xl font-medium">
          <Image
            src={"/Generic.png"}
            alt="logo"
            width={100}
            height={100}
            unoptimized
            className="box w-12"
          />
          <p>Join a session</p>
        </div>
        <form className="flex flex-col gap-5">
          <div className="flex flex-col text-[15px]">
            <label htmlFor="username">Fullname</label>
            <input
              required
              type="text"
              id="username"
              className="h-10 rounded-lg bg-[#272a31] pl-4 text-[15px] text-gray-400 outline-[#3d8fff]"
            />
          </div>
          <div className="flex flex-col text-[15px]">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="h-10 rounded-lg bg-[#272a31] pl-4 text-[15px] text-gray-400 outline-[#3d8fff]"
            />
          </div>
          <div className="flex flex-col text-[15px]">
            <label htmlFor="event">Event Name</label>
            <input
              id="event"
              className="h-10 rounded-lg bg-[#272a31] pl-4 text-[15px] text-gray-400 outline-[#3d8fff]"
            />
          </div>
          <button className="h-12 rounded-md bg-[#3d8fff]">
            Enter Session
          </button>
          <button
            onClick={() => signIn("google", { callbackUrl: "/host" })}
            type="button"
            className="mt-[-10px] flex h-12 items-center justify-center gap-3 rounded-md border">
            <FcGoogle />
            <p>Login with Google</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
