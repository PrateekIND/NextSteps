// components/ui/input.jsx
import React from "react";
import { cn } from "@/lib/utils"; // optional utility for combining classes

const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "flex w-full rounded-md border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",
        className
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
