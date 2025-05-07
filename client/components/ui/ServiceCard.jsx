/* eslint-disable no-unused-vars */
import React from "react";
import { ChevronRight } from "lucide-react";
import {Link} from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card";

const ServiceCard = ({ icon: Icon, title, description, bgColor }) => {
  return (
    <Card className="backdrop-blur-sm border-none shadow-md rounded-[10px] transition-all hover:shadow-lg hover:scale-[1.01]">
      <CardContent className="flex flex-col items-center space-y-4 p-6">
        {/* Icon circle */}
        <div className={`flex h-16 w-16 items-center justify-center rounded-full ${bgColor}`}>
          <Icon className="h-8 w-8 text-purple-500" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-800">{title}</h3>

        {/* Description */}
        <p className="text-center text-slate-600">
          {description}
        </p>

        {/* Learn More Button */}
        
        <Link to='#' className=" px-3 py-2 pl-5 flex items-center justify-center  rounded-2xl hover:bg-blue-100 text-blue-400 font-medium group-hover:translate-x-1 transition-transform">
        Learn More <ChevronRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
