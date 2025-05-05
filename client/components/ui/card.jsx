import React from "react";
import { cn } from "@/lib/utils"; // Optional: utility for class merging

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn("rounded-lg border bg-white text-slate-900 shadow-sm", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ className, children, ...props }) {
  return (
    <div
      className={cn("p-4", className)}
      {...props}
    >
      {children}
    </div>
  );
}
