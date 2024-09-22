"use client";
import React, { useRef, useState } from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import { IoHandRightOutline } from "react-icons/io5";
import HandRaisedMenu from "./HandRaisedMenu";
import { useGSAP } from "@gsap/react";

const name = [
  { id: 0, name: "Joy Bankz" },
  { id: 1, name: "Emmanuel" },
  { id: 2, name: "Clinton" },
  { id: 3, name: "Edwards" },
  { id: 4, name: "Clinton" },
  { id: 5, name: "Edwards" },
  { id: 6, name: "Clinton" },
  { id: 7, name: "Edwards" },
  { id: 8, name: "Clinton" },
  { id: 9, name: "Edwards" },
  { id: 10, name: "Clinton" },
  { id: 11, name: "Edwards" },
  { id: 12, name: "Clinton" },
  { id: 13, name: "Edwards" },
  { id: 14, name: "Clinton" },
  { id: 15, name: "Edwards" },
  { id: 16, name: "Clinton" },
  { id: 17, name: "Edwards" },
  { id: 18, name: "Clinton" },
  { id: 19, name: "Edwards" },
  { id: 20, name: "Clinton" },
  { id: 21, name: "Edwards" },
  { id: 22, name: "Clinton" },
  { id: 23, name: "Edwards" },
  { id: 24, name: "Clinton" },
  { id: 25, name: "Edwards" },
  { id: 26, name: "Clinton" },
  { id: 27, name: "Edwards" },
];

const Viewer = () => {
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
        <div className="flex items-center justify-between" key={index}>
          <p>{i.name}</p>
          <div className="flex items-center gap-2">
            <button className="rounded-full bg-[#272a31] p-1">
              <IoHandRightOutline className="text-base" />
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

export default Viewer;
