"use client";
import React, { useRef, useState } from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import { SiAudioboom } from "react-icons/si";
import HandRaisedMenu from "./HandRaisedMenu";
import { useGSAP } from "@gsap/react";

export const name = [
  { id: 0, name: "Joy Bankz" },
  { id: 1, name: "Emmanuel" },
  { id: 2, name: "Clinton" },
  { id: 3, name: "Edwards" }
];

const Broadcaster = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef<HTMLButtonElement[] | null>([]);
  const [currentIndex, getCurrentIndex] = useState(0);

  useGSAP(() => {
    // menuRef?.current.forEach((el, index) => {
    //   gsap.to("#hi", {
    //     height: index === currentIndex ? "auto" : "50px",
    //     duration: 0.2,
    //     ease: "power1.in"
    //   });
    // });
  }, [currentIndex]);

  return (
    <div className={`flex flex-col gap-3`}>
      {name.map((i, index) => (
        <div className="flex items-center justify-between" key={i.name}>
          <p>{i.name}</p>
          <div className="flex items-center gap-2">
            <button className="rounded-full bg-[#272a31] p-1">
            <SiAudioboom />
            </button>
            <button
              ref={(el) => {
                menuRef.current && (menuRef.current[index] = el!);
              }}
              onClick={() => {
                getCurrentIndex(i.id);
                setOpenMenu((prev) => {
                  if (currentIndex !== i.id) {
                    return true;
                  } else {
                    if (!prev) return true;
                    return false;
                  }
                });
              }}
              className="relative">
              <HiEllipsisVertical className="text-xl" />
              <HandRaisedMenu
                iwasclicked={i.id}
                currentIndex={currentIndex}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Broadcaster;
