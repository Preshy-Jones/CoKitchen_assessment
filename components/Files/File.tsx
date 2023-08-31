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
import {
  checkFileExtension,
  isAPDFFile,
  isAPDFOrExcelFile,
  isAnExcelFile,
  isAnImageFile,
} from "@/utils";
import { Record } from "@/types/records";
import moment from "moment";
import { saveAs } from "file-saver";
import { setPreviewedImage } from "@/features/files/fileSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

const File = ({ record }: { record: Record }) => {
  const dispatch = useAppDispatch();
  const handleDownload = () => {
    const url = record?.src;
    const fileName = record?.name;
    saveAs("https://httpbin.org/image", "image.jpg");
  };
  const dummyImageUrl =
    "https://cdn.pixabay.com/photo/2023/07/24/01/31/plane-8145957_1280.jpg";

  const handlePreview = (record: Record) => {
    if (isAnImageFile(record?.name)) {
      dispatch(setPreviewedImage(record));
    }
  };

  return (
    <div
      className={`shadow-primary p-3 rounded-md cursor-pointer ${isAnImageFile(
        record.name
      )}`}
      onClick={() => handlePreview(record)}
    >
      <div className="relative">
        {isAPDFOrExcelFile(record?.name) ? (
          <div className="relative h-[215px]">
            <div className="w-full bg-greyBgLight flex justify-center items-center h-full absolute">
              {isAPDFFile(record?.name) ? (
                <Image src={LargePDFIcon} alt="large-pdf" />
              ) : isAnExcelFile(record?.name) ? (
                <Image src={LargeExcelIcon} alt="large-excel" />
              ) : null}
            </div>
            <div className="absolute bottom-2 left-2 flex">
              <div className="mr-2">
                <div onClick={handleDownload}>
                  <DownloadIcon />
                </div>
              </div>
              <PrintIcon />
            </div>
          </div>
        ) : (
          <div className="h-[215px]">
            <Image src={record.src} alt="image" layout="fill" />
          </div>
        )}
        {record.favourite && (
          <FavouriteIcon className="absolute top-3 right-3" />
        )}
      </div>
      <div className="flex pt-3">
        <div className="mr-3">
          {isAPDFFile(record?.name) ? (
            <PdfIcon />
          ) : isAnImageFile(record?.name) ? (
            <ImageIcon />
          ) : isAnExcelFile(record?.name) ? (
            <ExcelIcon />
          ) : (
            <ImageIcon />
          )}
        </div>
        <div>
          <h2 className="text-sm font-medium leading-primary text-primaryBlack">
            {record?.name}
          </h2>
          <h5 className="text-xs text-greyText mt-1">
            Added {moment(record?.created_at).format("Do MMMM, YYYY")}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default File;
