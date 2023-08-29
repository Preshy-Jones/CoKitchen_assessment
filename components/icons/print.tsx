import React from "react";

const PrintIcon = ({ className }: { className?: string }) => {
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
        d="M12.0834 17.9167H17.9167V20.8333H12.0834V17.9167ZM19.0834 19.6667V16.75H10.9167V19.6667H9.75008C9.42792 19.6667 9.16675 19.4055 9.16675 19.0833V13.25C9.16675 12.9278 9.42792 12.6667 9.75008 12.6667H20.2501C20.5723 12.6667 20.8334 12.9278 20.8334 13.25V19.0833C20.8334 19.4055 20.5723 19.6667 20.2501 19.6667H19.0834ZM10.9167 13.8333V15H12.6667V13.8333H10.9167ZM12.0834 9.16666H17.9167C18.2389 9.16666 18.5001 9.42783 18.5001 9.74999V11.5H11.5001V9.74999C11.5001 9.42783 11.7613 9.16666 12.0834 9.16666Z"
        fill="#6E7377"
      />
    </svg>
  );
};

export default PrintIcon;
