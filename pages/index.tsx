import Files from "@/components/Files";
import Folders from "@/components/Folders";
import TopBar from "@/components/TopBar";
import { SearchIcon, SortIcon } from "@/components/icons";
import { ActivePage, getRecords, setRecords } from "@/features/files/fileSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Record } from "@/types/records";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dispatch = useAppDispatch();
  const { records, recordsLoading, sortBy } = useAppSelector(
    (state) => state.file
  );
 

  useEffect(() => {
    dispatch(getRecords());
  }, [dispatch]);

  useEffect(() => {
    if (sortBy.home.key === "name") {
      let result = [...records].sort((a, b) => a.name.localeCompare(b.name));
      dispatch(setRecords(result));
    } else if (sortBy.home.key === "date") {
      let result = [...records].sort((a, b) =>
        a.created_at.localeCompare(b.created_at)
      );
      dispatch(setRecords(result));
    }
  }, [sortBy.home.key]);

  return (
    <main className="flex justify-center bg-bgPrimary">
      <div className="w-[80%]">
        <TopBar activePage={ActivePage.HOME} />
        <Folders records={records} loading={recordsLoading} />
        <Files records={records} loading={recordsLoading} />
      </div>
    </main>
  );
}
