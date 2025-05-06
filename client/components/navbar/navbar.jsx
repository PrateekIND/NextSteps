import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router
import Button from "@/components/ui/button"; // Your custom Button component

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0A9 9 0 1112 3a9 9 0 019 9z" />
          </svg>
          <span className="text-xl font-semibold tracking-tight">NextStep</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          {["Explore Careers", "Streams", "Mentors", "About", "Blog"].map((item, index) => (
            <Link key={index} to="#" className="text-sm font-medium transition-colors hover:text-blue-500">
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            asChild
            className="hidden md:flex gap-1 border border-blue-500 text-blue-500 hover:bg-blue-50"
          >
            <Link to="/join-mentor" className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 9l-6 6-6-6" />
              </svg>
              Join as Mentor
            </Link>
          </Button>

          <Link to="/login" className="text-sm font-medium hover:underline underline-offset-4">
            Log in
          </Link>

          <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white">
            <Link to="/signup">Sign up</Link>
          </Button>

          <Button variant="outline" className="md:hidden border border-gray-300 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="h-[1.2rem] w-[1.2rem]">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
