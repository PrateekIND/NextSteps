/* eslint-disable no-unused-vars */
import React from "react";
import { ChevronRight } from "lucide-react";
import  Button  from "@/components/ui/button"; // Assuming shadcn button
import { Card, CardContent } from "@/components/ui/card";

const ServiceCard = ({ icon: Icon, title, description, bgColor }) => {
  return (
    <Card className="backdrop-blur-sm border-none shadow-md rounded-[10px]  transition-all hover:shadow-lg hover:scale-[1.01]">
      <CardContent className="flex flex-col items-center space-y-4 p-6">
        <div className={`flex h-16 w-16 items-center justify-center rounded-full ${bgColor}`}>
          <Icon className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-800">{title}</h3>
        <p className="text-center text-slate-600">
          {description}
        </p>
        <Button
          variant="ghost"
          size="sm"
          className="gap-1 mt-2 text-blue-500 hover:bg-blue-50 hover:text-blue-600"
        >
          Learn More <ChevronRight className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
