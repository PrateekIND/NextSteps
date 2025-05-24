import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ChevronRight , BookOpen , Download , Calendar ,ExternalLink ,Wrench } from "lucide-react";
import { careerData } from "@/data/careerData";
import { Badge } from "@/components/ui/badge";
import  Button  from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";



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
      className={`w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-50 to-${careerPath.color}-50`}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start space-y-4">
          <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 sm:flex-row sm:items-center">
            <Link
              to={`/career/${careerPath.id}`} // Use whatever key represents the ID
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

    <section className="w-full py-12 md:py-16 bg-white">
      <div className="container  px-4 md:px-6">
        <Tabs defaultValue="overview" className=" w-full ">
          <TabsList className="grid w-full  grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="tools">Tech Stack & Tools</TabsTrigger>
            <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="space-y-8">
            {/* Responsibilities & Skills */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                What Does a {subCareer.title} Do?
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {/* Responsibilities */}
                {subCareer.details?.responsibilities?.length > 0 && (
                  <Card className="border-slate-200">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-slate-800 mb-3">Key Responsibilities</h3>
                      <ul className="space-y-2">
                        {subCareer.details.responsibilities.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className={`h-5 w-5 ${colorClasses.text} mt-0.5 flex-shrink-0`} />
                            <span className="text-slate-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* Skills */}
                {subCareer.skills?.length > 0 && (
                  <Card className="border-slate-200">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-slate-800 mb-3">Required Skills</h3>
                      <ul className="space-y-2">
                        {subCareer.skills.map((skill, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className={`h-5 w-5 ${colorClasses.text} mt-0.5 flex-shrink-0`} />
                            <span className="text-slate-600">{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>

            {/* Career Path Progression */}
            {subCareer.details?.careerPath && (
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Career Path Progression</h2>
                <div className="space-y-6">
                  {Object.entries(subCareer.details.careerPath).map(([level, description], idx) => {
                    const titles = {
                      entry: "Entry Level",
                      mid: "Mid Level",
                      senior: "Senior Level",
                      leadership: "Leadership"
                    };
                    const progressMap = {
                      entry: 25,
                      mid: 50,
                      senior: 75,
                      leadership: 100
                    };

                    return (
                      <div key={level} className="space-y-2">
                        <h3 className="text-lg font-medium text-slate-800">{titles[level]}</h3>
                        <Progress value={progressMap[level]} className="h-2 bg-slate-100" indicatorClassName={colorClasses.bg} />
                        <p className="text-slate-600">{description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            
          </TabsContent>

          <TabsContent value="tools" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Essential Tech Stack & Tools</h2>
              <p className="text-slate-600 mb-6">
                {subCareer.details?.techStack?.overview}
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {subCareer.details?.techStack?.categories?.map((category, index) => (
                  <Card key={index} className="border-slate-200">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-slate-800 mb-3">{category.name}</h3>
                      <ul className="space-y-2">
                        {category.tools.map((tool, toolIndex) => (
                          <li key={toolIndex} className="flex items-start gap-2">
                            <CheckCircle2 className={`h-5 w-5 ${colorClasses.text} mt-0.5 flex-shrink-0`} />
                            <div>
                              <span className="font-medium text-slate-700">{tool.name}</span>
                              {tool.description && (
                                <p className="text-sm text-slate-600 mt-0.5">{tool.description}</p>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Tool Proficiency Levels</h2>
              <p className="text-slate-600 mb-6">
                Different roles and career stages require varying levels of proficiency with different tools.
              </p>

              <div className="space-y-6">
                <Card className="border-slate-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-slate-800 mb-3">Entry Level Requirements</h3>
                    <div className="space-y-4">
                      {subCareer.details?.techStack?.proficiencyLevels?.entry?.map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-slate-700">{item.tool}</h4>
                            <span className="text-sm text-slate-600">{item.level}%</span>
                          </div>
                          <Progress
                            value={item.level}
                            className="h-2 bg-slate-100"
                            indicatorClassName={colorClasses.bg}
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-slate-800 mb-3">Senior Level Expectations</h3>
                    <div className="space-y-4">
                      {subCareer.details?.techStack?.proficiencyLevels?.senior?.map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-slate-700">{item.tool}</h4>
                            <span className="text-sm text-slate-600">{item.level}%</span>
                          </div>
                          <Progress
                            value={item.level}
                            className="h-2 bg-slate-100"
                            indicatorClassName={colorClasses.bg}
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="getting-started" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                How to Get Started in {subCareer.title}
              </h2>

              {subCareer.details?.gettingStarted?.overview && (
                <p className="text-slate-600 mb-6">{subCareer.details.gettingStarted.overview}</p>
              )}

              <div className="space-y-6">
                {subCareer.details?.gettingStarted?.steps?.map((step, index) => (
                  <Card key={index} className="border-slate-200">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex-shrink-0 w-10 h-10 rounded-full ${colorClasses.bg} flex items-center justify-center font-bold text-lg ${colorClasses.text}`}
                        >
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h3>
                          <p className="text-slate-600">{step.description}</p>
                          {step.tips && (
                            <div className="mt-4 p-3 bg-slate-50 rounded-md">
                              <h4 className="font-medium text-slate-700 mb-1">Pro Tips:</h4>
                              <ul className="space-y-1 text-sm text-slate-600">
                                {step.tips.map((tip, tipIndex) => (
                                  <li key={tipIndex} className="flex items-start gap-2">
                                    <CheckCircle2
                                      className={`h-4 w-4 ${colorClasses.text} mt-0.5 flex-shrink-0`}
                                    />
                                    <span>{tip}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="relative border-l-2 border-dashed border-slate-200 pl-6 ml-6 space-y-8">
              {subCareer.details?.learningRoadmap?.stages?.length > 0 &&
                subCareer.details.learningRoadmap.stages.map((stage, index) => (
                  <div key={index} className="relative">
                    <div
                      className={`absolute -left-[30px] w-12 h-12 rounded-full ${colorClasses.bg} flex items-center justify-center`}
                    >
                      {stage.icon || (
                        <span className={`font-bold text-lg ${colorClasses.text}`}>{index + 1}</span>
                      )}
                    </div>
                    <Card className="border-slate-200">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-slate-800 mb-2">{stage.title}</h3>
                        <p className="text-slate-600 mb-4">{stage.description}</p>

                        <div className="space-y-3">
                          {stage.skills?.map((skill, skillIndex) => (
                            <div key={skillIndex} className="flex items-start gap-2">
                              <CheckCircle2 className={`h-5 w-5 ${colorClasses.text} mt-0.5 flex-shrink-0`} />
                              <span className="text-slate-700">{skill}</span>
                            </div>
                          ))}
                        </div>

                        {stage.resources?.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-slate-100">
                            <h4 className="font-medium text-slate-700 mb-2">Recommended Resources:</h4>
                            <ul className="space-y-2">
                              {stage.resources.map((resource, resourceIndex) => (
                                <li key={resourceIndex} className="flex items-start gap-2">
                                  <BookOpen className={`h-4 w-4 ${colorClasses.text} mt-0.5 flex-shrink-0`} />
                                  <span className="text-sm text-slate-600">{resource}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                ))}
            </div>

          </TabsContent>

          <TabsContent value="resources" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Essential Resources</h2>
              <p className="text-slate-600 mb-6">
                {subCareer.details?.resources?.overview ||
                  `Curated resources to help you learn, practice, and excel in ${subCareer.title}.`}
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {subCareer.details?.resources?.categories?.map((category, index) => (
                  <Card key={index} className="border-slate-200">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-slate-800 mb-3">{category.name}</h3>
                      <ul className="space-y-3">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            {item.type === "book" || item.type === "course" ? (
                              <BookOpen className={`h-5 w-5 ${colorClasses.text} mt-0.5 flex-shrink-0`} />
                            ) : item.type === "tool" ? (
                              <Wrench className={`h-5 w-5 ${colorClasses.text} mt-0.5 flex-shrink-0`} />
                            ) : (
                              <ExternalLink className={`h-5 w-5 ${colorClasses.text} mt-0.5 flex-shrink-0`} />
                            )}
                            <div>
                              <a
                                href={item.url || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`font-medium ${colorClasses.text} hover:underline`}
                              >
                                {item.title}
                              </a>
                              {item.description && (
                                <p className="text-sm text-slate-600 mt-0.5">{item.description}</p>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Downloadable Resources</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-slate-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${colorClasses.bg}`}>
                        <Download className={`h-6 w-6 ${colorClasses.text}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-slate-800">Learning Roadmap PDF</h3>
                        <p className="text-sm text-slate-600 mb-3">
                          A comprehensive guide to becoming a {subCareer.title} professional.
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className={`gap-1 border-${careerPath.color}-500 ${colorClasses.text} hover:${colorClasses.hover}`}
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Download PDF
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${colorClasses.bg}`}>
                        <Calendar className={`h-6 w-6 ${colorClasses.text}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-slate-800">6-Month Learning Plan</h3>
                        <p className="text-sm text-slate-600 mb-3">
                          A structured schedule to help you learn {subCareer.title} in 6 months.
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className={`gap-1 border-${careerPath.color}-500 ${colorClasses.text} hover:${colorClasses.hover}`}
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Download Plan
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>



        </Tabs>
      </div>
    </section>


        
    </>
  );
};

export default SubCareer;
