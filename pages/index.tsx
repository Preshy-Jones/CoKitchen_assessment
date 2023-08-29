import Files from "@/components/Files";
import Folders from "@/components/Folders";
import TopBar from "@/components/TopBar";
import { SearchIcon, SortIcon } from "@/components/icons";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="w-[80%]">
        <TopBar />
        <Folders />
        <Files />
      </div>
    </main>
  );
}
