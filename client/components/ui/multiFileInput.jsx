import React from "react";
import Button from "./button";
import { cn } from "@/lib/utils";

const MultiFileInput = ({ label, name, accept, files, onChange, onRemove, className }) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium text-slate-700">{label}</label>
      )}

      <input
        type="file"
        name={name}
        multiple
        accept={accept}
        onChange={onChange}
        className={cn(
          "w-full border border-slate-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition",
          className
        )}
      />

      {/* Preview Section */}
      {files && files.length > 0 && (
        <div className="space-y-2 mt-3">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-slate-100 px-3 py-2 rounded-lg"
            >
              <span className="text-sm text-slate-700 truncate w-3/4">
                {file.name}
              </span>
              <Button
                type="button"
                variant="destructive"
                size="sm"
                onClick={() => onRemove(index)}
              >
                Remove
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiFileInput;
