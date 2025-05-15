import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";
import { careerData } from "@/data/careerData";
import { Badge } from "@/components/ui/badge";
import  Button  from "@/components/ui/button";

const SubCareer = () => {
  const { id, subId } = useParams();

  const careerPath = careerData[id];
  const subCareer = careerPath?.subCareers?.find((sc) => sc.id === subId);

  const colorClasses = {
    bg: `bg-${careerPath?.color}-100`,
    text: `text-${careerPath?.color}-700`,
  };

  if (!careerPath || !subCareer) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Sub-Career Not Found 🥲</h2>
        <Link to="/explore" className="text-blue-500 hover:underline flex items-center">
          <ArrowLeft className="inline w-4 h-4 mr-1" />
          Back to Explore
        </Link>
      </div>
    );
  }

  return (
    <>
    <section
      className={`w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-50 to-${careerPath.color}-50 border-b`}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start space-y-4">
          <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 sm:flex-row sm:items-center">
            <Link
              to={`/explore/${id}`}
              className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-blue-500"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to {careerPath.title}
            </Link>
            <div className="flex items-center">
              <Badge className={`${colorClasses.bg} ${colorClasses.text}`}>
                {careerPath.title}
              </Badge>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${colorClasses.bg}`}>
                    {subCareer.icon}
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-800">
                    {subCareer.title}
                  </h1>
                </div>
                <p className="max-w-[800px] text-slate-600 md:text-xl">
                  {subCareer.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {subCareer.skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <Badge className={`${colorClasses.bg} ${colorClasses.text} text-sm px-3 py-1`}>
                    Salary: {subCareer.salary}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="bg-white border-slate-200 text-slate-700 hover:bg-slate-50 text-sm px-3 py-1"
                  >
                    Growth: {subCareer.growth}
                  </Badge>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button asChild className="gap-1 bg-blue-500 hover:bg-blue-600">
                  <a href="#roadmap">
                    View Learning Roadmap <ChevronRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="gap-1 border-blue-500 text-blue-500 hover:bg-blue-50"
                >
                  <a href="#mentors">Find a Mentor</a>
                </Button>
              </div>
            </div>

            <div className="relative h-[300px] sm:h-[400px] overflow-hidden rounded-xl bg-slate-50 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-500/20 to-slate-700/20 z-10"></div>
              <img
                src="/placeholder.svg"
                width={500}
                height={400}
                alt={`${subCareer.title} career illustration`}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 p-6 text-white z-20">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className={`h-5 w-5 ${colorClasses.text}`} />
                  <h3 className="text-lg font-medium">Career Snapshot</h3>
                </div>
                <p className="text-sm text-slate-200">
                  {subCareer.title} professionals are in{" "}
                  {subCareer.growth.toLowerCase()} demand with competitive
                  salaries and diverse opportunities across industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        
    </>
  );
};

export default SubCareer;
