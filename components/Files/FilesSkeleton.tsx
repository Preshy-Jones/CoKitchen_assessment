import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FilesSkeleton = () => {
  const rows = Array(2).fill(null);
  return (
    <SkeletonTheme baseColor="rgba(184, 193, 213, 0.19)" highlightColor="white">
      <div className="w-full">
        {/* <Skeleton height={20} /> */}
        {rows.map((row, index) => (
          <div
            key={index + 1}
            className="grid grid-cols-4 gap-7 mb-7"
          >
            <Skeleton className="py-2" height={200} />
            <Skeleton className="py-2" height={200} />
            <Skeleton className="py-2" height={200} />
            <Skeleton className="py-2" height={200} />
          </div>
        ))}
      </div>
    </SkeletonTheme>
  );
};

export default FilesSkeleton;
