import React from "react";

const EmbedUrl = () => {
  return (
    <>
      <h1 className="text-lg font-semibold">Embed URL</h1>
      <p className="text-[15px]">
        Ensure that you&apos;re sharing the current tab when the prompt opens.
        Note that not all websites support being embedded.
      </p>
      <label className="text-[14px]" htmlFor="url">
        URL
      </label>
      <input
        id="url"
        required
        type="url"
        className="mt-[-20px] h-12 rounded-md bg-[#191b23] pl-4 text-[15px] outline-none"
        placeholder="Enter your URL"
      />
      
    </>
  );
};

export default EmbedUrl;
