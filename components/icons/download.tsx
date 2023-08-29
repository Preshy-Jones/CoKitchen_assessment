import React from "react";

const DownloadIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="15" cy="15" r="14.5" stroke="#DFE1E2" />
      <path
        d="M12.0833 20.239C10.1255 20.09 8.58325 18.4543 8.58325 16.4583C8.58325 15.1001 9.29742 13.9086 10.3707 13.239C10.6627 10.9423 12.6239 9.16666 14.9999 9.16666C17.3759 9.16666 19.3372 10.9423 19.6291 13.239C20.7024 13.9086 21.4166 15.1001 21.4166 16.4583C21.4166 18.4543 19.8744 20.09 17.9166 20.239V20.25H12.0833V20.239ZM15.5833 15V12.6667H14.4166V15H12.6666L14.9999 17.9167L17.3333 15H15.5833Z"
        fill="#6E7377"
      />
    </svg>
  );
};

export default DownloadIcon;
