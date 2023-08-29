import React from "react";

const FileIcon = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4166 6.33333V15.8333C17.4166 16.2706 17.0622 16.625 16.6249 16.625H2.37492C1.9377 16.625 1.58325 16.2706 1.58325 15.8333V5.54167H16.6249C17.0622 5.54167 17.4166 5.89611 17.4166 6.33333ZM9.82783 3.95833H1.58325V3.16667C1.58325 2.72945 1.9377 2.375 2.37492 2.375H8.24449L9.82783 3.95833Z"
        fill="#7A8085"
      />
    </svg>
  );
};

export default FileIcon;
