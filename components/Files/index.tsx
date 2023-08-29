import React from "react";
import File from "./File";

const Files = () => {
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
  return (
    <div className="mt-8">
      <h2 className="font-semibold text-xl text-[1.625rem] mb-5">Files</h2>
      <div className="grid grid-cols-4 gap-7">
        {randomDummyFiles.map((item, index) => (
          <File
            key={index}
            name={item.name}
            date={item.date}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Files;
