// components/ui/badge.jsx
import React from "react";
import { cn } from "@/lib/utils";

const Badge = ({ className = "", children, ...props }) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-slate-100 text-slate-700",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export { Badge };
