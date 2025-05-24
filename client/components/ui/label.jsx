import React from "react";

export const Label = ({ htmlFor, className = "", children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-slate-700 mb-1 ${className}`}
    >
      {children}
    </label>
  );
};
