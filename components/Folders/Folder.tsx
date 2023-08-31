import React from "react";
import { FileIcon } from "../icons";
import Link from "next/link";
import { Record } from "@/types/records";

interface Props {
  record: Record;
}
const Folder: React.FC<Props> = ({ record }) => {
  return (
    <Link href={`${record.id}`}>
      <div className="flex border-greyBd2 border px-4 py-2">
        <FileIcon className="mr-4" />
        <div>
          <h2 className="text-sm leading-[17.75px] text-primaryBlack font-medium">
            {record?.name}
          </h2>
          <h5 className="text-xs leading-secondary">10 mb</h5>
        </div>
      </div>
    </Link>
  );
};

export default Folder;
