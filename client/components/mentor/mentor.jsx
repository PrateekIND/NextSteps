import React, { useState, useMemo, useEffect } from "react";
import { Search, Star, Users, Clock } from "lucide-react";
import MentorCard from "@/components/ui/MentorCard"; // import here

export default function MentorsPage() {
  const [mentors, setMentors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedExpertise, setSelectedExpertise] = useState("all");
  const [sortBy, setSortBy] = useState("rating");

  // 🧩 Fetch mentors from backend
  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const res = await fetch("http://localhost:5800/api/experts");
        const data = await res.json();
        setMentors(data);
      } catch (err) {
        console.error("Failed to fetch mentors:", err);
      }
    };
    fetchMentors();
  }, []);

  // 🧠 Collect unique expertise tags
  const allExpertise = useMemo(() => {
    const expertise = new Set();
    mentors.forEach((m) =>
      m.specialization?.split(",").forEach((s) => expertise.add(s.trim()))
    );
    return Array.from(expertise).sort();
  }, [mentors]);

  // 🔍 Filter + Sort logic
  const filteredMentors = useMemo(() => {
    const filtered = mentors.filter((mentor) => {
      const matchesSearch =
        mentor.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mentor.specialization?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesExpertise =
        selectedExpertise === "all" || mentor.specialization?.includes(selectedExpertise);
      return matchesSearch && matchesExpertise;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return (b.rating || 0) - (a.rating || 0);
        case "sessions":
          return (b.sessions || 0) - (a.sessions || 0);
        case "price-low":
          return (a.price || 0) - (b.price || 0);
        case "price-high":
          return (b.price || 0) - (a.price || 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [mentors, searchTerm, selectedExpertise, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        
        {/* 🌸 Header + Filters Section */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* 🔍 Search Bar */}
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-3 text-slate-400" />
            <input
              type="text"
              placeholder="Search mentors by name or expertise..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          {/* 🎯 Expertise Filter */}
          <select
            value={selectedExpertise}
            onChange={(e) => setSelectedExpertise(e.target.value)}
            className="py-2 px-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          >
            <option value="all">All Expertise</option>
            {allExpertise.map((skill, i) => (
              <option key={i} value={skill}>
                {skill}
              </option>
            ))}
          </select>

          {/* ⚖️ Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="py-2 px-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          >
            <option value="rating">Sort by Rating</option>
            <option value="sessions">Most Sessions</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        {/* 🧾 Mentor Count */}
        <div className="mb-6">
          <p className="text-slate-600 text-sm">
            Showing {filteredMentors.length} of {mentors.length} mentors
          </p>
        </div>

        {/* 🌟 Mentor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map((mentor) => (
            <MentorCard
              key={mentor._id}
              id={mentor._id}
              name={mentor.name}
              role={mentor.specialization}
              image={mentor.photoUrl || "/placeholder.svg"}
              bio={mentor.bio}
            />
          ))}
        </div>

        {/* 😢 Empty State */}
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
