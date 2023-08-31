import React from "react";
import { SearchIcon, SortIcon } from "./icons";
import { motion } from "framer-motion";
import useClickOutside from "@/hooks/ClickOutside";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ActivePage, updateSortBy } from "@/features/files/fileSlice";

const TopBar = ({ activePage }: { activePage: ActivePage }) => {
  const [showSort, setShowSort] = React.useState(false);
  const { domNode1, domNode2 } = useClickOutside(() => {
    setShowSort(false);
  });

  const dispatch = useAppDispatch();
  const { sortBy } = useAppSelector((state) => state.file);

  const handleSortToggle = (key: string) => {
    dispatch(updateSortBy({ key: key, order: "asc", activePage }));
  };
  return (
    <div className="flex justify-between mb-4 pb-8 pt-24">
      <div className="relative">
        <div
          onClick={() => setShowSort(!showSort)}
          ref={domNode2}
          className="flex justify-between px-2 border border-greyBd items-center py-2 w-[7.125rem]"
        >
          <h2 className="text-sm text-tertiary leading-tertiary text-greyText3">
            Sort
          </h2>
          <div>
            <SortIcon />
          </div>
        </div>
        {/* @ts-ignore */}
        {showSort && (
          <motion.div
            ref={domNode1}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white shadow-secondary text-secondaryBlack mt-3 absolute w-[9.5rem]"
          >
            <h3
              className={`text-sm leading-tertiary py-1.5 px-3 cursor-pointer ${
                // @ts-ignore
                sortBy[activePage].key === "name" ? "bg-greyBd2" : ""
              }`}
              onClick={() => handleSortToggle("name")}
            >
              By name
            </h3>
            <h3
              className={`text-sm leading-tertiary py-1.5 px-3 cursor-pointer ${
                // @ts-ignore
                sortBy[activePage].key === "date" ? "bg-greyBd2" : ""
              } `}
              onClick={() => handleSortToggle("date")}
            >
              By time created
            </h3>
          </motion.div>
        )}
      </div>

      <div>
        <div className="relative flex items-center border border-greyBd h-[2.25rem] pl-3">
          <SearchIcon className="absolute" />
          <input
            type="text"
            placeholder="Search"
            className="pl-6 h-full placeholder-greyText2 text-sm leading-tertiary"
          />
        </div>
        {/* <pre>{JSON.stringify(sortBy, null, 2)}</pre> */}
      </div>
    </div>
  );
};

export default TopBar;
