"use client";

import { useEffect, useRef, useState } from "react";

export default function Home()  {
  const inputRef = useRef(null);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  return (
    <div className="flex items-center justify-center w-full h-screen gap-4 bg-black">
      <input
        ref={inputRef}
        onChange={(e) => {
          if (e.target.value !== "") {
            inputRef1.current.focus();
          }
        }}
        className="w-8 h-8 p-1 text-center text-black"
      />
      <input
        ref={inputRef1}
        onChange={(e) => {
          if (e.target.value !== "") {
            inputRef2.current.focus();
          } else {
            inputRef.current.focus();
          }
        }}
        className="w-8 h-8 p-1 text-center text-black"
      />
      <input
        ref={inputRef2}
        onChange={(e) => {
          if (e.target.value !== "") {
            inputRef3.current.focus();
          } else {
            inputRef1.current.focus();
          }
        }}
        className="w-8 h-8 p-1 text-center text-black"
      />
      <input
        ref={inputRef3}
        onChange={(e) => {
          if (e.target.value !== "") {
            inputRef3.current.value = e.target.value;
          }
          if (e.target.value === "") {
            inputRef2.current.focus();
          }
        }}
        className="w-8 h-8 p-1 text-center text-black"
      />
    </div>
  );
}