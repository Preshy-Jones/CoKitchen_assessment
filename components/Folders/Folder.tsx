import React from "react";
import { FileIcon } from "../icons";

interface Props {
  name: string;
  size: string;
}
const Folder: React.FC<Props> = ({ name, size }) => {
  return (
    <div className="flex border-greyBd2 border px-4 py-2">
      <FileIcon className="mr-4" />
      <div>
        <h2 className="text-sm leading-[17.75px] text-primaryBlack font-medium">
          {name}
        </h2>
        <h5 className="text-xs leading-secondary">{size}</h5>
      </div>
    </div>
  );
};

export default Folder;
