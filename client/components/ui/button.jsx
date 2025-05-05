import React from "react";
import { Slot } from "@radix-ui/react-slot"; // Needed for `asChild` support

const Button = ({ children, asChild = false, className = "", ...props }) => {
  const Comp = asChild ? Slot : "button"; // Use `Slot` if asChild is true

  return (
    <Comp
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[8px] text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-white h-10 px-4 py-2 bg-blue-500 hover:bg-blue-600 ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
};

export default Button;