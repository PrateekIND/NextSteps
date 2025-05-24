import React, { useState, useMemo } from "react";
import { Search, Filter, Star, Users, Clock } from "lucide-react";
import { mentorsData } from "@/data/mentorData"; // Adjust path as needed
import { Link } from "react-router-dom";

export default function MentorsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedExpertise, setSelectedExpertise] = useState("all");
  const [sortBy, setSortBy] = useState("rating");

  const allExpertise = useMemo(() => {
    const expertise = new Set();
    mentorsData.forEach((mentor) => {
      mentor.expertise.forEach((skill) => expertise.add(skill));
    });
    return Array.from(expertise).sort();
  }, []);

  const filteredMentors = useMemo(() => {
    const filtered = mentorsData.filter((mentor) => {
      const matchesSearch =
        mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mentor.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mentor.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mentor.expertise.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesExpertise = selectedExpertise === "all" || mentor.expertise.includes(selectedExpertise);

      return matchesSearch && matchesExpertise;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "sessions":
          return b.sessions - a.sessions;
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedExpertise, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="bg-white border-b-[1px]">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Find Your Perfect Mentor</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Connect with industry experts who can guide your career journey and help you achieve your goals.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search mentors by name, role, company, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>

            <select
              value={selectedExpertise}
              onChange={(e) => setSelectedExpertise(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded w-full md:w-48"
            >
              <option value="all">All Expertise</option>
              {allExpertise.map((skill) => (
                <option key={skill} value={skill}>{skill}</option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded w-full md:w-40"
            >
              <option value="rating">Highest Rated</option>
              <option value="sessions">Most Sessions</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <p className="text-slate-600">
            Showing {filteredMentors.length} of {mentorsData.length} mentors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map((mentor) => (
            <div key={mentor.id} className="bg-white rounded shadow p-4 transition-all hover:shadow-lg hover:-translate-y-1">
              <img
                src={mentor.image || "/placeholder.svg"}
                alt={mentor.name}
                className="w-full h-64 object-cover rounded mb-4"
              />
              <h3 className="font-bold text-lg text-slate-800">{mentor.name}</h3>
              <p className="text-sm text-slate-600">{mentor.role}</p>
              <p className="text-sm text-blue-600 font-medium">{mentor.company}</p>
              <div className="flex items-center gap-1 mt-2">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>{mentor.rating}</span>
              </div>
              <p className="text-xs text-slate-500 mb-2">{mentor.sessions} sessions</p>
              <p className="text-sm text-slate-600 mb-4">{mentor.bio}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {mentor.expertise.slice(0, 3).map((skill) => (
                  <span key={skill} className="px-2 py-1 text-xs bg-gray-100 rounded">{skill}</span>
                ))}
                {mentor.expertise.length > 3 && (
                  <span className="px-2 py-1 text-xs border border-gray-300 rounded">+{mentor.expertise.length - 3} more</span>
                )}
              </div>
              <div className="flex justify-between text-sm text-slate-600 mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{mentor.experience}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>${mentor.price}/session</span>
                </div>
              </div>
              <div className="space-y-2">
                <Link
                  to={`/mentors/${mentor.id}`}
                  className="block text-center bg-blue-600 text-white py-2 rounded"
                >
                  View Profile
                </Link>
                <Link
                  to={`/mentors/${mentor.id}/book`}
                  className="block text-center border border-blue-600 text-blue-600 py-2 rounded"
                >
                  Book Session
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredMentors.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-16 w-16 mx-auto text-slate-400 mb-4" />
            <h3 className="text-lg font-medium text-slate-800 mb-2">No mentors found</h3>
            <p className="text-slate-600">Try adjusting your search criteria or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}