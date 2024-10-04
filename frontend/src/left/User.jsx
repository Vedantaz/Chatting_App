import React from "react";

export default function User() {
  return (
    <div className="relative flex items-center">
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="User Avatar"
          />
        </div>
      </div>
      <div className="absolute right-0 bottom-0 w-5 h-5 bg-green-500 border-2 border-white rounded-full" />
    </div>
  );
}
