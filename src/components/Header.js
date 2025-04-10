import React from "react";
import { logoUrl } from "../utils/data";

export const Header = () => {
  return (
    <div className="absolute top-0 px-6 py-2 z-30">
        <img
          src={logoUrl}
          alt="noImage"
          loading="lazy"
          className="w-48"
        />
    </div>
  );
};
