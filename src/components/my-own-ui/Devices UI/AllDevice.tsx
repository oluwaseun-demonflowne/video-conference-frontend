import React from "react";

type Props = { list: MediaDeviceInfo[]; show: boolean };

const AllDevice = ({ list, show }: Props) => {
  if (!show) {
    return null;
  }

  return (
    <div className="absolute bottom-10 w-[250px] overflow-hidden rounded-2xl bg-[#191b23]">
      {list.map((i, index) => (
        <button
          key={index}
          className={`w-[100%] px-3 py-3 text-[15px] hover:bg-[#272a31] ${
            index !== list.length - 1 ? "border-b border-gray-600" : ""
          }`}>
          {i.label.length > 15 ? `${i.label.substring(0, 25)}...` : i.label}
        </button>
      ))}
    </div>
  );
};

export default AllDevice;
