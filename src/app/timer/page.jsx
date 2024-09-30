"use client";
 import { useEffect, useRef, useState } from "react";

export default function App() {
    const [laps, setLaps] = useState([]);
    const [mils, setMils] = useState(10 * 60 * 100 - 50);
    const [running, setRunning] = useState(true);
    

    const minutes = Math.floor(mils / 60 / 100);
    const seconds = Math.floor((mils % (60 * 100)) / 100);
    const restMils = mils % 100;

    if (running){
        setTimeout(() => {
          setMils(mils - 1);
        }, 10);
    }

    return (
      <div className="flex flex-col items-center justify-center w-full h-screen gap-4 bg-[#1a1d2e] font-mono">
        <div>
          <h1 className="text-white text-7xl font-bold mb-4">
            <span>
              {minutes < 10 && "0"}
              {minutes}
            </span>
            :
            <span>
              {seconds < 10 && "0"}
              {seconds}
            </span>
            :
            <span>
              {restMils < 10 && "0"}
              {restMils}
            </span>
          </h1>
        </div>
        <div className="flex text-white gap-5">
          <button
            className="bg-black px-5 py-2 rounded-xl "
            onClick={() => {
              const newlaps = [
                `${minutes < 10 ? "0" : ""}${minutes}:${
                  seconds < 10 ? "0" : ""
                }${seconds}:${restMils < 10 ? "0" : ""}${restMils}`,
                ...laps,
              ];
              setLaps(newlaps);
            }}
          >
            lap
          </button>
          <button
            className="bg-black px-5 py-2 rounded-xl"
            onClick={() => {
              setMils(10 * 60 * 100 - 50);
              setRunning(true);
            }}
          >
            reset
          </button>
          <button
            className="bg-black px-5 py-2 rounded-xl "
            variant="outline"
            onClick={() => {
              setRunning(!running);
            }}
          >
            {running ? "Pause" : "Resume"}
          </button>
          <button
            className="bg-black px-5 py-2 rounded-xl"
            onClick={() => {
              setMils(mils - 3000);
            }}
          >
            +30sec
          </button>
          <button
            className="bg-black px-5 py-2 rounded-xl "
            onClick={() => {
              setMils(mils + 3000);
            }}
          >
            -30sec
          </button>
        </div>
        <ul className="mt-4 text-3xl list-disc list font-mono flex flex-col gap-2 text-white">
          {laps.map((lap) => {
            return <li key={lap}>{lap}</li>;
          })}
        </ul>
      </div>
    );
}