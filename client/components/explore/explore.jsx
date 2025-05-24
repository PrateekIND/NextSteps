import React, { useState } from "react"
import { ChevronRight, Search } from "lucide-react"
import Button from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { careerData } from "@/data/careerData"
import { Link } from "react-router-dom"

function getColorClasses(color) {
  const colorMap = {
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-600",
      hover: "hover:bg-blue-200",
      border: "blue-500",
    },
    green: {
      bg: "bg-green-100",
      text: "text-green-600",
      hover: "hover:bg-green-200",
      border: "green-500",
    },
    purple: {
      bg: "bg-purple-100",
      text: "text-purple-600",
      hover: "hover:bg-purple-200",
      border: "purple-500",
    },
    orange: {
      bg: "bg-orange-100",
      text: "text-orange-600",
      hover: "hover:bg-orange-200",
      border: "orange-500",
    },
    default: {
      bg: "bg-slate-100",
      text: "text-slate-700",
      hover: "hover:bg-slate-200",
      border: "slate-400",
    },
  }

  return colorMap[color] || colorMap.default
}

function SubCareerCard({ subCareer, color }) {
  const colorClasses = getColorClasses(color)

  return (
    <Link key={subCareer.id} to={`/explore/${subCareer.parentId}/${subCareer.id}`} className="group">
      <Card className="h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-slate-200">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${colorClasses.bg} flex items-center justify-center shadow-sm`}>
              {subCareer?.icon}
            </div>
            <div className="flex-1">
              <h3 className={`text-xl font-bold text-slate-800 group-hover:${colorClasses.text} transition-colors`}>
                {subCareer?.title || "Untitled"}
              </h3>
              <p className="mt-2 text-slate-600">{subCareer?.description || "No description available."}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {(subCareer?.skills || []).slice(0, 3).map((skill, index) => (
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
                  {subCareer?.salary || "Salary Unknown"}
                </Badge>
                <span className="text-xs text-slate-500">Growth: {subCareer?.growth || "N/A"}</span>
              </div>
              <div className={`pt-4 flex items-center ${colorClasses.text} font-medium group-hover:translate-x-1 transition-transform`}>
                Explore Career <ChevronRight className="h-4 w-4 ml-1" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default function Explore() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const getAllSubCareers = () => {
    return Object.entries(careerData).flatMap(([id, career]) =>
      career.subCareers.map((subCareer) => ({ subCareer: { ...subCareer, parentId: id }, color: career.color }))
    )
  }

  const filterSubCareers = (subCareerItems) => {
    if (!searchQuery) return subCareerItems
    return subCareerItems.filter(({ subCareer }) =>
      subCareer.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-50 to-blue-50 ">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-slate-800">
                Explore Career Paths
              </h1>
              <p className="max-w-[800px] text-slate-600 md:text-xl mx-auto">
                Discover exciting opportunities across various fields and find your perfect career match based on your
                interests, skills, and goals.
              </p>
            </div>
            <div className="w-full max-w-2xl mx-auto mt-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <Input
                  type="search"
                  placeholder="Search careers, skills, or interests..."
                  className="pl-10 pr-4 py-3 text-base rounded-full border-slate-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex flex-col items-center mb-8 gap-4">
              <TabsList className="grid grid-flow-col auto-cols-max gap-2 overflow-x-auto p-1 max-w-full">
                <TabsTrigger value="all" className="px-4">All Careers</TabsTrigger>
                {Object.entries(careerData).map(([key, path]) => (
                  <TabsTrigger key={key} value={key} className="px-4 whitespace-nowrap">
                    <span className="flex items-center gap-2">
                      {path.icon}
                      {path.title}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* All Careers Tab */}
            <TabsContent value="all" className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filterSubCareers(getAllSubCareers()).map((item, index) => (
                  <SubCareerCard key={index} subCareer={item.subCareer} color={item.color} />
                ))}
              </div>

              {filterSubCareers(getAllSubCareers()).length === 0 && (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                    <Search className="h-8 w-8 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">No careers found</h3>
                  <p className="text-slate-600">Try changing your search or exploring a different category.</p>
                </div>
              )}
            </TabsContent>

            {/* Individual Tabs */}
            {Object.entries(careerData).map(([key, path]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    {path.icon}
                    <h2 className="text-2xl font-bold text-slate-800">{path.title}</h2>
                  </div>
                  <p className="text-slate-600">{path.description}</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filterSubCareers(path.subCareers.map((subCareer) => ({ subCareer: { ...subCareer, parentId: key }, color: path.color }))).map(
                    (item, index) => (
                      <SubCareerCard key={index} subCareer={item.subCareer} color={item.color} />
                    )
                  )}
                </div>

                {filterSubCareers(path.subCareers.map((subCareer) => ({ subCareer: { ...subCareer, parentId: key }, color: path.color }))).length === 0 && (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                      <Search className="h-8 w-8 text-slate-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">No careers found</h3>
                    <p className="text-slate-600">Try adjusting your search or explore different career categories.</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  )
}