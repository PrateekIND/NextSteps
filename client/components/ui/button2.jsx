import { Slot } from '@radix-ui/react-slot'; // Needed for `asChild` support

const Button2 = ({ children, asChild = false, className = "", ...props }) => {
  const Comp = asChild ? Slot : "button"; // Use `Slot` if asChild is true

  return (
    <Comp
      className={`gap-1 rounded-[8px] border border-blue-500 bg-slate-50 hover:bg-blue-50 text-blue-500 inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
};

export default Button2;