import React from "react";
import Search from "./Search";
import User from "./User";

export default function Left() {
  return (
    <>
      <div className="border border-white w-[30%] bg-black text-white">
        <h1 className="font-bold text-3xl p-2 px-11">Chats</h1>
        <Search />
        <User />
      </div>
    </>
  );
}
