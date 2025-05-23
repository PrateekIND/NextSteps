import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Button from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";
import { Badge } from "@/components/ui/badge";
import { mentorsData } from "@/data/mentorData";

export default function BookMentorPage() {
  const { id } = useParams();
  const mentor = mentorsData.find((m) => m.id === id);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [sessionType, setSessionType] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goals: "",
    experience: "",
  });

  if (!mentor) return <div>404 - Mentor Not Found 😓</div>;

  const handleInputChange = (field, value) => setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", {
      mentor: mentor.id,
      date: selectedDate,
      time: selectedTime,
      sessionType,
      ...formData,
    });
    alert("Booking request submitted! You'll receive a confirmation email shortly.");
  };

  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];
  const sessionTypes = [
    { value: "career-guidance", label: "Career Guidance", duration: "60 min" },
    { value: "technical-review", label: "Technical Review", duration: "45 min" },
    { value: "portfolio-review", label: "Portfolio Review", duration: "30 min" },
    { value: "interview-prep", label: "Interview Preparation", duration: "60 min" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to={`/mentors/${mentor.id}`} className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to {mentor.name}'s Profile
          </Link>
          <h1 className="text-3xl font-bold text-slate-800">Book a Session</h1>
          <p className="text-slate-600">Schedule your mentoring session with {mentor.name}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader><CardTitle>Session Details</CardTitle></CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">

                  <div>
                    <Label htmlFor="session-type">Session Type</Label>
                    <Select value={sessionType} onValueChange={setSessionType}>
                      <SelectTrigger aria-label="Session Type">
                        <SelectValue placeholder="Choose session type" />
                      </SelectTrigger>
                      <SelectContent>
                        {sessionTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label} ({type.duration})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input id="date" type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} min={new Date().toISOString().split("T")[0]} required />
                  </div>

                  <div>
                    <Label htmlFor="time">Preferred Time</Label>
                    <Select value={selectedTime} onValueChange={setSelectedTime}>
                      <SelectTrigger aria-label="Preferred Time">
                        <SelectValue placeholder="Choose time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} />
                  </div>

                  <div>
                    <Label htmlFor="goals">Goals</Label>
                    <Textarea id="goals" value={formData.goals} onChange={(e) => handleInputChange("goals", e.target.value)} rows={3} required />
                  </div>

                  <div>
                    <Label htmlFor="experience">Experience</Label>
                    <Textarea id="experience" value={formData.experience} onChange={(e) => handleInputChange("experience", e.target.value)} rows={3} />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2">
                    <Calendar className="h-4 w-4" /> Book Session (${mentor.price})
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img src={mentor.image || "/placeholder.svg"} alt={mentor.name} width={60} height={60} className="rounded-lg object-cover" />
                  <div>
                    <h3 className="font-bold text-slate-800">{mentor.name}</h3>
                    <p className="text-sm text-slate-600">{mentor.role}</p>
                    <p className="text-sm text-blue-600">{mentor.company}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-slate-500" />
                    <span>{mentor.experience} experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-slate-500" />
                    <span>{mentor.sessions} sessions completed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Booking Summary</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                {sessionType && (
                  <div className="flex justify-between">
                    <span className="text-slate-600">Session Type:</span>
                    <span className="font-medium">{sessionTypes.find((t) => t.value === sessionType)?.label}</span>
                  </div>
                )}
                {selectedDate && (
                  <div className="flex justify-between">
                    <span className="text-slate-600">Date:</span>
                    <span className="font-medium">{new Date(selectedDate).toLocaleDateString()}</span>
                  </div>
                )}
                {selectedTime && (
                  <div className="flex justify-between">
                    <span className="text-slate-600">Time:</span>
                    <span className="font-medium">{selectedTime}</span>
                  </div>
                )}
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-green-600">${mentor.price}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Available Days</CardTitle></CardHeader>
              <CardContent>
                <div className="flex gap-2 flex-wrap">
                  {Array.isArray(mentor?.availableDays) && mentor.availableDays.length > 0 ? (
                    mentor.availableDays.map((day) => (
                      <Badge key={day} variant="outline">{day}</Badge>
                    ))
                  ) : (
                    <p className="text-muted-foreground">No available days listed 😔</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}