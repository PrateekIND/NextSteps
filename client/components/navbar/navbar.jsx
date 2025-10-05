
import { useState } from "react";
import { Link } from "react-router-dom"; // If you're using React Router
import Button from "@/components/ui/button"; // Your custom Button component
import Button2 from "@/components/ui/button2"; // Your custom Button component
import { Compass } from "lucide-react"; // Assuming you're using lucide-react for icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Explore Careers", path: "/careers" },
    { name: "Streams", path: "/streams" },
    { name: "Mentors", path: "/mentors" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
        <img
          src="/image/logo.png"
          alt="Logo"
          className="h-36 w-auto object-contain"
        />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden min-[780]::flex gap-6">
          {navItems.map((item, index) => (
            <Link key={index} to={item.path} className="text-sm font-medium transition-colors hover:text-blue-500">
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button2
            asChild
            variant="outline"
            className="gap-1  "
          >
            <Link to="/join-mentor" className="flex items-center text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                className="w-4 h-4 mr-1 ">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M18 9l-6 6-6-6" />
              </svg>
              Join as Mentor
            </Link>
          </Button2>

          
        </div>

        {/* Hamburger Icon */}
        <Button
          variant="outline"
          className="md:hidden border hover:bg-slate-200  bg-slate-100 border-gray-700 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="h-[1.2rem] text-black w-[1.2rem]">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </Button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-3 space-y-3 shadow-lg">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="block text-sm font-medium text-gray-700 hover:text-blue-500"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <Link
            to="/join-mentor"
            className="block text-sm font-medium text-blue-500 hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Join as Mentor
          </Link>
          
        </div>
      )}
    </header>
  );
};

export default Navbar;
