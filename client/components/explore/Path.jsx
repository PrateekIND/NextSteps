import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Search, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { careerData } from "@/data/careerData"; // Like the One Piece treasure 🏴‍☠️

const Path = () => {
  // 🍥 Shadow Clone Params — now using `id` like a true ninja
  const { id } = useParams();

  const careerPath = careerData[id];

  if (!careerPath) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Career Path Not Found</h1>
          <p className="text-slate-600 mb-6">This career path seems to have vanished into the void 🌌</p>
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Explore
          </Link>
        </div>
      </div>
    );
  }

  const colorClasses = {
    bg: `bg-${careerPath.color}-100`,
    text: `text-${careerPath.color}-600`,
    hover: `hover:bg-${careerPath.color}-200`,
    border: `${careerPath.color}-200`,
  };

  return (
    <section className={`w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-50 to-${careerPath.color}-50 border-b`}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start space-y-4">
          <Link
            to="/explore"
            className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-blue-500"
          >
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to All Careers
          </Link>

          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${colorClasses.bg}`}>{careerPath.icon}</div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-800">{careerPath.title}</h1>
            </div>
            <p className="max-w-[800px] text-slate-600 md:text-xl">{careerPath.description}</p>
          </div>

          <div className="w-full max-w-2xl mt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <Input
                type="search"
                placeholder={`Search ${careerPath.title.toLowerCase()} careers...`}
                className="pl-10 pr-4 py-6 text-base rounded-full border-slate-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full">
            {careerPath.subCareers.map((subCareer) => (
              <Link key={subCareer.id} to={`/explore/${id}/${subCareer.id}`} className="group">
                <Card className="h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-slate-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-lg ${colorClasses.bg} flex items-center justify-center shadow-sm`}
                      >
                        {subCareer.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl font-bold text-slate-800 group-hover:${colorClasses.text} transition-colors`}>
                          {subCareer.title}
                        </h3>
                        <p className="mt-2 text-slate-600">{subCareer.description}</p>

                        <div className="flex flex-wrap gap-2 mt-3">
                          {subCareer.skills.slice(0, 3).map((skill, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                          <Badge className={`${colorClasses.bg} ${colorClasses.text} ${colorClasses.hover} border-${colorClasses.border}`}>
                            {subCareer.salary}
                          </Badge>
                          <span className="text-xs text-slate-500">Growth: {subCareer.growth}</span>
                        </div>

                        <div
                          className={`pt-4 flex items-center ${colorClasses.text} font-medium group-hover:translate-x-1 transition-transform`}
                        >
                          Explore Career <ChevronRight className="h-4 w-4 ml-1" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Path;
