import React from "react";

export const Schedule = () => {
  const dates = [
    "1 Jan 2023",
    "First Schedule Date",
    "2 Jan 2023",
    "Second Schedule Date",
    "3 Jan 2023",
    "Third Schedule Date",
    "4 Jan 2023",
    "Fourth Schedule Date",
  ];
  return (
    <div className="bg-white mx-2 sm:ml-60 my-20 opacity-80 w-96 h-60 px-8">
      <h4 className="font-Oswald font-black text-4xl text-[#414f6b]">
        OUR SCHEDULES
      </h4>
      <div className="grid grid-rows-8 grid-cols-2 pt-8 w-full">
        {dates.map((dates, index) => (
          <span  key={index} className="py-1">{dates}</span>
        ))}
      </div>
    </div>
  );
};
