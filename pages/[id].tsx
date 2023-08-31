import Files from "@/components/Files";
import Folders from "@/components/Folders";
import TopBar from "@/components/TopBar";
import { ActivePage, getFolderFiles, setFolderFiles } from "@/features/files/fileSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Record } from "@/types/records";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const FolderFiles = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = router.query as { id: string };

  const { folderFiles, folderFilesLoading, sortBy } = useAppSelector(
    (state) => state.file
  );
  

  useEffect(() => {
    if (!router.isReady) return;
    dispatch(getFolderFiles(id));
  }, [dispatch, router, id]);

  useEffect(() => {
    
    if (sortBy.subfolder.key === "name") {
      let result = [...folderFiles].sort((a, b) => a.name.localeCompare(b.name));
      dispatch(setFolderFiles(result));
    } else if (sortBy.subfolder.key === "date") {
      let result = [...folderFiles].sort((a, b) =>
        a.created_at.localeCompare(b.created_at)
      );
      dispatch(setFolderFiles(result));
    }
  }, [sortBy.subfolder.key]);
  return (
    <main className="flex justify-center bg-bgPrimary">
      <div className="w-[80%]">
        <TopBar activePage={ActivePage.SUBFOLDER} />
        <Folders records={folderFiles} loading={folderFilesLoading} />
        <Files records={folderFiles} loading={folderFilesLoading} />
      </div>
    </main>
  );
};

export default FolderFiles;
