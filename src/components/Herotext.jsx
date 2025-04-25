import React from "react";

const Herotext = ({ title, overview }) => {
  return (
    <div className="absolute top-48 left-10 z-30 hero_text">
      <h1 className="font-bold text-4xl mb-10 tracking-wider">{title}</h1>
      <p className="w-2/5 mb-10 text-xl">{overview}</p>
      <div>
        <button className=" bg-gray-400 rounded-md px-2 py-1 text-white cursor-pointer">
          Playnow
        </button>
        <button className="bg-gray-400 rounded-md px-2 py-1 text-white ms-1 cursor-pointer">
          Moreinfo
        </button>
      </div>
    </div>
  );
};

export default Herotext;
