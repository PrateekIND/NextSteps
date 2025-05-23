import React from "react";
import { cn } from "@/lib/utils"; // Optional utility for merging Tailwind classes

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn("rounded-[7px] border bg-white text-slate-900 shadow-sm", className)}
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

export function CardHeader({ className, children, ...props }) {
  return (
    <div
      className={cn("border-b px-4 py-3", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({ className, children, ...props }) {
  return (
    <h3
      className={cn("text-lg font-semibold leading-none tracking-tight", className)}
      {...props}
    >
      {children}
    </h3>
  );
}
