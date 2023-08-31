import React from "react";
import Folder from "./Folder";
import { useAppSelector } from "@/store/hooks";
import { Record } from "@/types/records";
import { DownloadIcon } from "../icons";
import CancelIcon from "../icons/cancel";
import FolderSkeleton from "./FolderSkeleton";

interface Props {
  records: Record[];
  loading: boolean;
}

const Folders: React.FC<Props> = ({ records, loading }) => {
  const folders = records.filter((item) => item.type === "folder");

  return (
    <div>
      {
        <div>
          <h2 className="font-semibold text-xl text-[1.625rem] mb-5">
            Folders
          </h2>
          <div className="grid grid-cols-4 gap-x-5 gap-y-3">
            {folders.map((item, index) => (
              <Folder key={index} record={item} />
            ))}
          </div>
          {loading && <FolderSkeleton />}
        </div>
      }
    </div>
  );
};

export default Folders;
