import React from "react";
import Folder from "./Folder";

const Folders = () => {
  const dummy = [
    {
      name: "Brunch Memories villa",
      size: "10mb",
    },
    {
      name: "Wedding pics",
      size: "10mb",
    },
    {
      name: "My kitty",
      size: "10mb",
    },
    {
      name: "Colleagues",
      size: "10mb",
    },
  ];
  return (
    <div>
      <h2 className="font-semibold text-xl text-[1.625rem] mb-5">Folders</h2>
      <div className="grid grid-cols-4">
        {dummy.map((item, index) => (
          <Folder key={index} name={item.name} size={item.size} />
        ))}
      </div>
    </div>
  );
};

export default Folders;
