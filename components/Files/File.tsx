import Image from "next/image";
import React from "react";
import {
  DownloadIcon,
  ExcelIcon,
  FavouriteIcon,
  ImageIcon,
  PdfIcon,
  PrintIcon,
} from "../icons";
import LargePDFIcon from "../../public/assets/pdf-large.svg";
import LargeExcelIcon from "../../public/assets/excel-large.svg";

const File = ({
  name,
  date,
  icon,
}: {
  name: string;
  date: string;
  icon: string;
}) => {
  const dummyImageUrl =
    "https://cdn.pixabay.com/photo/2023/07/24/01/31/plane-8145957_1280.jpg";
  return (
    <div className=" shadow-primary p-3 rounded-md">
      <div className="relative">
        {icon === "pdf" || icon === "excel" ? (
          <div className="relative h-[215px]">
            <div className="w-full bg-greyBgLight flex justify-center items-center h-full absolute">
              {icon === "pdf" ? (
                <Image src={LargePDFIcon} alt="large-pdf" />
              ) : icon === "excel" ? (
                <Image src={LargeExcelIcon} alt="large-excel" />
              ) : null}
            </div>
            <div className="absolute bottom-2 left-2 flex">
              <div className="mr-2">
                <DownloadIcon />
              </div>
              <PrintIcon />
            </div>
          </div>
        ) : (
          <div className="h-[215px]">
            <Image src={dummyImageUrl} alt="image" layout="fill" />
          </div>
        )}
        <FavouriteIcon className="absolute top-3 right-3" />
      </div>
      <div className="flex pt-3">
        <div className="mr-3">
          {icon === "pdf" ? (
            <PdfIcon />
          ) : icon === "image" ? (
            <ImageIcon />
          ) : icon === "excel" ? (
            <ExcelIcon />
          ) : (
            <ImageIcon />
          )}
        </div>
        <div>
          <h2 className="text-sm font-medium leading-primary text-primaryBlack">
            {name}
          </h2>
          <h5 className="text-xs text-greyText">Added {date}</h5>
        </div>
      </div>
    </div>
  );
};

export default File;
