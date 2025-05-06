// components/MentorCard.jsx
import React from "react";
import  Button  from "@/components/ui/button"; // Adjust if needed
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom"; // or "next/link" if you're using Next.js

const MentorCard = ({ name, role, image, bio }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center flex flex-col justify-between h-full">
      <div>
        <img
          src={image}
          alt={name}
          className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
        />
        <h3 className="text-xl font-semibold text-slate-800">{name}</h3>
        <p className="text-blue-500 text-sm mb-2">{role}</p>
        <p className="text-slate-600 text-sm">{bio}</p>
      </div>

      {/* 🚀 Book Button */}
      <div className="mt-6">
        <Button
          asChild
          variant="outline"
          className="w-full gap-2 border-blue-500 text-blue-500 hover:bg-blue-50"
        >
          <Link to="/book">
            <Calendar className="h-4 w-4" />
            Book a Session
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default MentorCard;
