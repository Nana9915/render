"use client";
 import { useEffect, useRef, useState } from "react";

export default function App() {
    const [timer, setTimer] = useState("")
    return (
      <div className="flex items-center justify-center w-full h-screen gap-4 bg-[#1a1d2e]">
        <div></div>
        <div className="flex text-white gap-5">
          <div className="bg-black px-5 py-2 rounded-xl cursor-pointer">
            stop
          </div>
          <div className="bg-black px-5 py-2 rounded-xl cursor-pointer">
            reset
          </div>
        </div>
      </div>
    );
}