import React from "react";
import { SearchIcon, SortIcon } from "./icons";

const TopBar = () => {
  return (
    <div className="flex justify-between mb-4 pb-8 pt-24">
      <div className="flex justify-between px-2 border border-greyBd items-center py-2 w-[7.125rem]">
        <h2 className="text-sm text-tertiary leading-tertiary text-greyText3">Sort</h2>
        <SortIcon />
      </div>
      <div>
        <div className="relative flex items-center border border-greyBd h-[2.25rem] pl-3">
          <SearchIcon className="absolute" />
          <input type="text" placeholder="Search" className="pl-6 h-full placeholder-greyText2 text-sm leading-tertiary" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
