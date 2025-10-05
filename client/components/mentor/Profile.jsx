import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Star, Clock, Users, Calendar, CheckCircle } from "lucide-react";
import Button from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function MentorProfilePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [mentor, setMentor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMentor = async () => {
      try {
        const res = await fetch(`http://localhost:5800/api/experts/${id}`);
        if (!res.ok) {
          navigate("/404");
          return;
        }
        const data = await res.json();
        setMentor(data);
      } catch (err) {
        console.error("Failed to fetch mentor:", err);
        navigate("/404");
      } finally {
        setLoading(false);
      }
    };

    fetchMentor();
  }, [id, navigate]);

  if (loading) return <div className="text-center py-20">Loading Mentor Profile...</div>;
  if (!mentor) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Profile */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={mentor.photoUrl|| "/placeholder.svg"}
                      alt={mentor.name}
                      width={200}
                      height={200}
                      className="w-48 h-48 rounded-lg object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h1 className="text-3xl font-bold text-slate-800 mb-2">{mentor.name}</h1>
                        <p className="text-lg text-slate-600 mb-1">{mentor.specialization}</p>
                        <p className="text-blue-600 font-medium">{mentor.company}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-2">
                          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          <span className="text-lg font-bold">{mentor.rating || 0}</span>
                          <span className="text-slate-500">({mentor.sessions || 0} sessions)</span>
                        </div>
                        <p className="text-2xl font-bold text-green-600">₹{mentor.price || 0}/session</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{mentor.experience || "N/A"} experience</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{mentor.sessions || 0} mentees helped</span>
                      </div>
                    </div>

                    <p className="text-slate-700 leading-relaxed">{mentor.bio}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Expertise */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Expertise & Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {mentor.specialization?.split(",").map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1">
                      {skill.trim()}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* What You'll Learn */}
            <Card>
              <CardHeader>
                <CardTitle>What You'll Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Industry best practices and real-world experience",
                    "Career guidance and professional development strategies",
                    "Technical skills and problem-solving approaches",
                    "Networking opportunities and industry insights",
                  ].map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Book a Session
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600">₹{mentor.price || 0}</p>
                  <p className="text-sm text-slate-600">per 60-minute session</p>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link to={`/mentors/${id}/book`} className="w-full text-white inline-block text-center">
                    Book Session Now
                  </Link>
                </Button>

                <div className="text-xs text-slate-500 text-center">
                  <p>✓ 100% satisfaction guarantee</p>
                  <p>✓ Reschedule up to 24h before</p>
                  <p>✓ Get session recording</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Mentor Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-600">Total Sessions:</span>
                  <span className="font-medium">{mentor.sessions || 0}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Average Rating:</span>
                  <span className="font-medium">{mentor.rating || 0}/5.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Experience:</span>
                  <span className="font-medium">{mentor.experience || "N/A"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Response Time:</span>
                  <span className="font-medium">Within 2 hours</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
