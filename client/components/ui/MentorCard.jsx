import React from "react";
import Button2 from "@/components/ui/button2";
import { Calendar } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const MentorCard = ({ id, name, role, image, bio }) => {
  const navigate = useNavigate();

  const handleCardClick = (e) => {
    // 🧠 prevent double triggers if you click inside the button
    if (e.target.closest("button") || e.target.closest("a")) return;
    navigate(`/mentors/${id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white rounded-xl shadow-md p-6 text-center flex flex-col justify-between h-full cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1"
    >
      <div className="text-center">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 mx-auto rounded-full object-cover object-[5%_15%] mb-4"
        />
        <h3 className="text-xl font-semibold text-slate-800">{name}</h3>
        <p className="text-blue-500 text-sm mb-2">{role}</p>
        <p className="text-slate-600 text-sm">{bio}</p>
      </div>

      {/* 🚀 Book Button */}
      <div className="mt-6">
        <Button2
          asChild
          variant="outline"
          className="w-full gap-2 border-blue-500 text-blue-500 hover:bg-blue-50"
        >
          <Link to={`/mentors/${id}/book`}>
            <Calendar className="h-4 w-4" />
            Book a Session
          </Link>
        </Button2>
      </div>
    </div>
  );
};

export default MentorCard;
