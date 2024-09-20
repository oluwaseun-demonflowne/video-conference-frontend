import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuSettings } from "react-icons/lu";

const Settings = () => {
  return (
    <div className="fixed">
      <div>
        <p>Settings</p>
        <div className="">
          <button>
            <LuSettings className="text-2xl" />
            Device Settings
          </button>
          <button>
            <IoIosNotificationsOutline />
            Notifications
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Settings;
