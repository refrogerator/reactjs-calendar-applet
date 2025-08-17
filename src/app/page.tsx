'use client'

import { useState } from 'react';
import Image from "next/image";

export default function Home() {
    return (
        <div className="grid place-items-center justify-center grid-cols-1 h-screen">
            <Calendar />
        </div>
    );
}

function CalendarButton({val, selected, onClick}: any) {
    return (
        <button className={(selected ? "bg-gray-950" : "bg-gray-700 hover:bg-gray-400 active:bg-gray-800") + " size-8 border-2 rounded-lg"} onClick={onClick}>{val}</button>
    );
}

function clamp(number: number, min: number, max: number) {
  return Math.max(min, Math.min(number, max));
}

function Calendar() {
    const [month, setMonth] = useState(0);
    const [selected, setSelected] = useState(1);

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    var buttons = [];
    for (let i = 1; i <= monthDays[month]; i++) {
        buttons.push(<CalendarButton key={i} val={i} selected={selected == i} onClick={() => setSelected(i) }/>);
    }

    return (
        <div className="grid place-items-center justify-center grid-cols-1 select-none">
            <div className="bg-gray-950 border-2 mh-60 w-80 rounded-2xl overflow-hidden">
                <div className="flex flex-row border-solid border-b-2 bg-stone-800 place-items-center">
                    <button className="px-3 py-1 text-xl" onClick={() => setMonth(clamp(month - 1, 0, 11))}>&lt;</button>
                    <h1 className="flex-grow text-center">{months[month]}</h1>
                    <button className="px-3 py-1 text-xl" onClick={() => setMonth(clamp(month + 1, 0, 11))}>&gt;</button>
                </div>
                <div className="p-4 grid grid-cols-7 place-items-center space-y-2">
                    {buttons}
                    <div className="size-10" />
                </div>
            </div>
            <h1>Selected {(month + 1).toString().padStart(2, "0")}/{selected.toString().padStart(2, "0")}/2025</h1>
        </div>
    );
}
