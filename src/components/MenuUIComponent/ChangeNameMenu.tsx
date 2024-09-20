import React from "react";

const ChangeNameMenu = () => {
  return (
    <>
      <h1 className="text-lg font-semibold">Change Name</h1>
      <p className="text-[15px]">
        Your name will be visible to other participants in the session
      </p>
      <input
        required
        type="text"
        className="h-12 rounded-md bg-[#191b23] pl-4 text-[15px] outline-none"
        placeholder="Karen A"
      />
    </>
  );
};

export default ChangeNameMenu;
