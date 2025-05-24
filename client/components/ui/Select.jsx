import React, { useState, useEffect, useRef, cloneElement } from "react";

export const Select = ({ value, onValueChange, children }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Inject props into all children
  return (
    <div ref={containerRef} className="relative w-full">
      {React.Children.map(children, (child) =>
        cloneElement(child, { value, onValueChange, open, setOpen })
      )}
    </div>
  );
};

export const SelectTrigger = ({ open, setOpen, value, placeholder }) => (
  <button
    type="button"
    onClick={() => setOpen(!open)}
    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-left bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between items-center"
    aria-haspopup="listbox"
    aria-expanded={open}
  >
    <span className={`${!value ? "text-gray-400" : ""}`}>
      {value || placeholder}
    </span>
    <svg
      className={`ml-2 h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </button>
);

export const SelectContent = ({ children, open }) => {
  if (!open) return null;
  return (
    <div className="absolute z-10 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-md max-h-60 overflow-auto">
      {children}
    </div>
  );
};

export const SelectItem = ({ value: itemValue, onValueChange, setOpen, children }) => {
  const handleClick = () => {
    onValueChange(itemValue);
    setOpen(false);
  };

  return (
    <div
      className="cursor-pointer px-4 py-2 hover:bg-blue-100 text-sm"
      onClick={handleClick}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      {children}
    </div>
  );
};

export const SelectValue = ({ value, placeholder }) => {
  return (
    <span className={`block truncate ${!value ? "text-gray-400" : ""}`}>
      {value || placeholder}
    </span>
  );
};
