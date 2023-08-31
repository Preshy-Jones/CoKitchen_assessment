import React from "react";
import File from "./File";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Record } from "@/types/records";
import {
  CancelIcon,
  DownloadIcon,
  ExcelIcon,
  ImageIcon,
  PdfIcon,
} from "../icons";
import Image from "next/image";
import useClickOutside from "@/hooks/ClickOutside";
import { setPreviewedImage } from "@/features/files/fileSlice";
import { isAPDFFile, isAnExcelFile, isAnImageFile } from "@/utils";
import moment from "moment";
import { motion } from "framer-motion";
import FilesSkeleton from "./FilesSkeleton";

interface Props {
  records: Record[];
  loading: boolean;
}

const Files: React.FC<Props> = ({ records, loading }) => {
  const files = records.filter((item) => item.type === "file");
  const dispatch = useAppDispatch();
  const { previewedImage } = useAppSelector((state) => state.file);
  const dummyImageUrl =
    "https://cdn.pixabay.com/photo/2023/07/24/01/31/plane-8145957_1280.jpg";
  const randomDummyFiles = [
    {
      name: "Brunch Memories villa",
      date: "13th July, 2022",
      icon: "image",
    },
    {
      name: "Wedding pics",
      date: "13th July, 2022",
      icon: "pdf",
    },
    {
      name: "My kitty",
      date: "13th July, 2022",
      icon: "image",
    },
    {
      name: "Colleagues",
      date: "13th July, 2022",
      icon: "excel",
    },
    {
      name: "Colleagues",
      date: "13th July, 2022",
      icon: "image",
    },
    {
      name: "Colleagues",
      date: "13th July, 2022",
      icon: "excel",
    },
    {
      name: "Colleagues",
      date: "13th July, 2022",
      icon: "image",
    },
    {
      name: "Colleagues",
      date: "13th July, 2022",
      icon: "pdf",
    },
    {
      name: "Colleagues",
      date: "13th July, 2022",
      icon: "image",
    },
    {
      name: "Colleagues",
      date: "13th July, 2022",
      icon: "pdf",
    },
    {
      name: "Colleagues",
      date: "13th July, 2022",
      icon: "image",
    },
    {
      name: "Colleagues",
      date: "13th July, 2022",
      icon: "excel",
    },
  ];

  const { domNode1, domNode2 } = useClickOutside(() => {
    dispatch(setPreviewedImage(null));
  });

  return (
    <div className="mt-8">
      <h2 className="font-semibold text-xl text-[1.625rem] mb-5">Files</h2>

      <div className="grid grid-cols-4 gap-7">
        {files.map((item, index) => (
          <File key={index} record={item} />
        ))}
      </div>
      {loading && <FilesSkeleton />}
      {previewedImage && (
        <div className="h-screen w-screen fixed bg-opacity-[0.32] bg-black left-0 top-0 right-0 z-20"></div>
      )}
      {previewedImage && (
        <div className="h-screen w-screen fixed bg-opacity-10 left-0 top-0 right-0 flex justify-center items-center z-30">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: previewedImage ? 1 : 0,
              y: previewedImage ? 0 : 100,
            }}
            exit={{
              opacity: previewedImage ? 1 : 0,
              y: previewedImage ? 0 : 100,
            }}
            transition={{ duration: 0.2 }}
            ref={domNode1}
            className="bg-white w-[47.986vw] h-[70vh] rounded-[4px]"
          >
            <div className="flex justify-between border-b border-b-borderBg  py-2 px-4 mb-2">
              <DownloadIcon />
              <div
                className="flex items-center bg-buttonBg rounded-md px-3"
                onClick={() => dispatch(setPreviewedImage(null))}
              >
                <CancelIcon />
                <h3 className="text-sm leading-tertiary text-greyBd3">Close</h3>
              </div>
            </div>
            <div className="flex justify-center">
              <div>
                <div
                  className="h-[24.5rem] w-[39.4375rem] mb-5 mt-7"
                  style={{
                    backgroundImage: `url(${previewedImage.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>

                <div className="flex pt-6 pb-4">
                  <div className="mr-3">
                    {isAPDFFile(previewedImage?.name) ? (
                      <PdfIcon />
                    ) : isAnImageFile(previewedImage?.name) ? (
                      <ImageIcon />
                    ) : isAnExcelFile(previewedImage?.name) ? (
                      <ExcelIcon />
                    ) : (
                      <ImageIcon />
                    )}
                  </div>
                  <div>
                    <h2 className="text-sm font-medium leading-primary text-primaryBlack">
                      {previewedImage?.name}
                    </h2>
                    <h5 className="text-xs text-greyText mt-1">
                      Added{" "}
                      {moment(previewedImage?.created_at).format(
                        "Do MMMM, YYYY"
                      )}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Files;
